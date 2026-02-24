<?php
/**
 * UnfallExperten WhatsApp Formular – FINAL PHP
 * Angepasst für UnfallExperten NRW CI und Post SMTP / WordPress
 */

/** 1) JS-Konfiguration IM HEAD (Preview-safe) */
add_action('wp_head', function () {
  $data = [
    'ajaxUrl' => admin_url('admin-ajax.php'),
    'nonce'   => wp_create_nonce('unfall_send_lead_nonce'),
  ];
  echo '<script>window.unfallLead=' . wp_json_encode($data) . ';</script>' . "\n";
}, 1);

/** 2) AJAX Hooks */
add_action('wp_ajax_nopriv_unfall_send_lead', 'unfall_send_lead_secure');
add_action('wp_ajax_unfall_send_lead', 'unfall_send_lead_secure');

function unfall_send_lead_secure() {

  if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    wp_send_json_error(['message' => 'Invalid request'], 405);
  }

  // Nonce
  $nonce = $_POST['nonce'] ?? ($_POST['_ajax_nonce'] ?? '');
  if (!wp_verify_nonce($nonce, 'unfall_send_lead_nonce')) {
    wp_send_json_error(['message' => 'Security check failed (nonce)'], 403);
  }

  // Honeypot
  if (!empty($_POST['website'])) {
    wp_send_json_error(['message' => 'Bot detected'], 400);
  }

  // Privacy Pflicht
  if (($_POST['privacy'] ?? '') !== '1') {
    wp_send_json_error(['message' => 'Privacy required'], 400);
  }

  /* ================== DATEN ================== */
  $name      = sanitize_text_field($_POST['name'] ?? '');
  $kennzeichen = sanitize_text_field($_POST['kennzeichen'] ?? '');
  $email     = sanitize_email($_POST['email'] ?? '');
  $phone     = sanitize_text_field($_POST['phone'] ?? '');
  $interests_raw = sanitize_text_field($_POST['interests'] ?? '');
  $message   = sanitize_textarea_field($_POST['message'] ?? '');
  $source    = sanitize_text_field($_POST['source'] ?? 'UnfallExperten WhatsApp Konfigurator');

  if (!$name || !$phone || !$interests_raw) {
    wp_send_json_error(['message' => 'Missing fields'], 400);
  }

  /* ================== DSGVO ================== */
  $privacy_accepted = true;
  $privacy_text = 'Ich habe die Datenschutzerklärung gelesen und akzeptiere sie.';

  /* ================== INTERESSEN ================== */
  $interests_arr = array_filter(array_map('trim', explode(',', $interests_raw)));
  $interests_li  = '';
  foreach ($interests_arr as $it) {
    $interests_li .= '<li style="margin:0 0 6px 0;">' . esc_html($it) . '</li>';
  }

  /* ================== BETREFF ================== */
  $subject_parts = array_slice($interests_arr, 0, 3);
  $subject_interest = implode(', ', $subject_parts);
  if (count($interests_arr) > 3) {
    $subject_interest .= ' uvm.';
  }
  $subject = 'Neue Anfrage: ' . ($subject_interest ?: 'Anfrage') . ' | UnfallExperten';

  /* ================== LINKS ================== */
  $phone_digits = preg_replace('/[^0-9+]/', '', $phone);
  $tel_link = $phone_digits ? ('tel:' . $phone_digits) : '#';

  $wa_number = preg_replace('/\D+/', '', $phone);
  if (strpos($wa_number, '0') === 0) {
    $wa_number = '49' . substr($wa_number, 1);
  }
  $wa_text = rawurlencode("Hallo {$name}, hier ist UnfallExperten NRW. Danke für Ihre Anfrage – wie können wir helfen?");
  $wa_link = $wa_number ? "https://wa.me/{$wa_number}?text={$wa_text}" : '#';

  $reply_link = $email ? ('mailto:' . $email) : '#';

  /* ================== META ================== */
  $ip   = $_SERVER['REMOTE_ADDR'] ?? '';
  $time = current_time('d.m.Y H:i:s'); // SEKUNDEN
  $year = date('Y');

  /* ================== MAIL ================== */
  // Corporate Identity Farben von UnfallExperten NRW
  $primary  = '#1641A6';
  $primary2 = '#1a4fbd';
  $bg   = '#0f172a';
  $card = '#1f2937';
  $muted = '#94a3b8';
  $text  = '#e5e7eb';

  $body = '
  <div style="background:' . $bg . ';padding:30px 16px;font-family:Arial,sans-serif;">
    <div style="max-width:720px;margin:auto;background:' . $card . ';border-radius:18px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,' . $primary . ',' . $primary2 . ');padding:18px 22px;color:#fff;">
        <strong>Neue Anfrage über das UnfallExperten-Formular</strong>
      </div>

      <div style="padding:22px;color:' . $text . ';font-size:14px;">
        <p>Hallo UnfallExperten-Team,</p>
        <p>es ist eine neue Anfrage über das Formular auf der Website eingegangen.</p>

        <h4 style="color:' . $muted . ';">ANLIEGEN</h4>
        <ul>' . $interests_li . '</ul>

        <h4 style="color:' . $muted . ';">KONTAKTDATEN</h4>
        <p><strong>Name:</strong> ' . esc_html($name) . '</p>
        <p><strong>Kennzeichen:</strong> ' . esc_html($kennzeichen) . '</p>
        <p><strong>E-Mail:</strong> <a href="mailto:' . esc_attr($email) . '" style="color:#93c5fd;">' . esc_html($email) . '</a></p>
        <p><strong>Telefon / WhatsApp:</strong> ' . esc_html($phone) . '</p>
        <p><strong>Quelle:</strong> ' . esc_html($source) . '</p>

        <h4 style="color:' . $muted . ';">DETAILS / SITUATION</h4>
        <p>' . ($message ? nl2br(esc_html($message)) : '<em>– keine Nachricht –</em>') . '</p>

        <h4 style="color:' . $muted . ';">DATENSCHUTZ</h4>
        <p>
          <strong>✔ akzeptiert</strong><br>
          <em>' . esc_html($privacy_text) . '</em>
        </p>

        <div style="margin-top:18px;">
          <a href="' . esc_attr($tel_link) . '" style="padding:10px 16px;background:#334155;color:#fff;border-radius:999px;text-decoration:none;">Jetzt anrufen</a>
          <a href="' . esc_attr($wa_link) . '" style="padding:10px 16px;background:#22c55e;color:#052e16;border-radius:999px;text-decoration:none;margin-left:8px;">WhatsApp</a>
          <a href="' . esc_attr($reply_link) . '" style="padding:10px 16px;background:#334155;color:#fff;border-radius:999px;text-decoration:none;margin-left:8px;">Per E-Mail antworten</a>
        </div>
      </div>

      <div style="padding:14px 20px;border-top:1px solid rgba(255,255,255,.1);color:' . $muted . ';font-size:12px;display:flex;justify-content:space-between;flex-wrap:wrap;">
        <span>' . esc_html($year) . ' © <a href="https://unfallexperten-nrw.de" style="color:#93c5fd;">UnfallExperten NRW</a></span>
        <span>Eingegangen am ' . esc_html($time) . ($ip ? ' | IP: ' . esc_html($ip) : '') . '</span>
      </div>
    </div>
  </div>';

  $headers = [
    'Content-Type: text/html; charset=UTF-8',
    'From: UnfallExperten <info@branova.de>',
  ];
  if ($email) {
    $headers[] = 'Reply-To: ' . $email;
  }

  if (!wp_mail('info@branova.de', $subject, $body, $headers)) {
    wp_send_json_error(['message' => 'Mail failed'], 500);
  }

  wp_send_json_success(['message' => 'Sent']);
}
