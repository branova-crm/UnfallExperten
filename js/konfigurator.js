(() => {
    const WHATSAPP_NUMBER = "4902111234567"; // from index.html
    const form = document.getElementById("unfall-wa-form");
    const steps = Array.from(document.querySelectorAll(".unfall-wa-step"));
    const options = Array.from(document.querySelectorAll(".unfall-wa-option"));
    const dots = Array.from(document.querySelectorAll(".unfall-wa-stepper-dot"));
    const lines = Array.from(document.querySelectorAll(".unfall-wa-stepper-line"));

    let current = 1;

    // Optional AJAX config
    const ajaxUrl = window.unfallLead?.ajaxUrl || "http://localhost:3000/send-lead";
    const nonce = window.unfallLead?.nonce || "";
    let emailSent = false;

    const $ = (id) => document.getElementById(id);

    function show(step) {
        if (!steps.length) return;
        current = step;
        steps.forEach(s => s.classList.toggle("is-active", Number(s.dataset.step) === step));

        dots.forEach(d => {
            const n = Number(d.dataset.stepper);
            d.classList.toggle("is-active", n === step);
            d.classList.toggle("is-done", n < step);
        });

        lines.forEach(l => {
            const n = Number(l.dataset.line);
            l.classList.toggle("is-active", n < step);
        });
    }

    function selectedInterests() {
        return options
            .filter(b => b.classList.contains("is-selected"))
            .map(b => b.getAttribute("data-interest"));
    }

    function validateStep1() {
        if (selectedInterests().length === 0) {
            alert("Bitte wählen Sie mindestens ein Anliegen aus.");
            return false;
        }
        return true;
    }

    function validateStep2() {
        const name = $("unfall-name")?.value.trim() || "";
        const phone = $("unfall-phone")?.value.trim() || "";
        const privacy = $("unfall-privacy")?.checked || false;

        if (!name) { alert("Bitte geben Sie Ihren vollständigen Namen ein."); return false; }
        if (!phone) { alert("Bitte geben Sie Ihre Telefonnummer ein."); return false; }
        if (!privacy) { alert("Bitte akzeptieren Sie die Datenschutzerklärung."); return false; }
        return true;
    }

    options.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("is-selected");
            btn.classList.remove("is-glint");
            void btn.offsetWidth; // reflow
            if (btn.classList.contains("is-selected")) btn.classList.add("is-glint");
        });
    });

    async function sendLeadOnce() {
        if (emailSent) return;
        emailSent = true;

        const honeypot = $("unfall-website")?.value || "";
        const payload = new URLSearchParams();
        payload.append("action", "unfall_send_lead");
        payload.append("nonce", nonce);
        payload.append("website", honeypot);
        payload.append("privacy", $("unfall-privacy")?.checked ? "1" : "0");

        payload.append("name", $("unfall-name")?.value.trim() || "");
        payload.append("kennzeichen", $("unfall-kennzeichen")?.value.trim() || "");
        payload.append("email", $("unfall-email")?.value.trim() || "");
        payload.append("phone", $("unfall-phone")?.value.trim() || "");
        payload.append("interests", selectedInterests().join(", "));
        payload.append("message", $("unfall-message")?.value.trim() || "");
        payload.append("source", "UnfallExperten WhatsApp Konfigurator");

        try {
            const res = await fetch(ajaxUrl, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
                body: payload.toString()
            });
            const data = await res.json().catch(() => null);
            if (data && data.success === false) emailSent = false;
        } catch (e) {
            emailSent = false;
        }
    }

    document.querySelectorAll("[data-next]").forEach(btn => {
        btn.addEventListener("click", async () => {
            const next = Number(btn.getAttribute("data-next"));
            if (current === 1 && !validateStep1()) return;
            if (current === 2 && !validateStep2()) return;

            if (current === 2 && next === 3) {
                await sendLeadOnce();
            }
            show(next);
        });
    });

    document.querySelectorAll("[data-prev]").forEach(btn => {
        btn.addEventListener("click", () => show(Number(btn.getAttribute("data-prev"))));
    });

    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            if (!validateStep1() || !validateStep2()) return;

            await sendLeadOnce();

            const interests = selectedInterests();
            const name = $("unfall-name")?.value.trim() || "";
            const kennzeichen = $("unfall-kennzeichen")?.value.trim() || "";
            const email = $("unfall-email")?.value.trim() || "";
            const phone = $("unfall-phone")?.value.trim() || "";
            const message = $("unfall-message")?.value.trim() || "";

            let text = "Hallo UnfallExperten,\nich benötige Hilfe:\n\n";
            if (interests.length) {
                text += "*Anliegen:*\n" + interests.map(i => "• " + i).join("\n") + "\n\n";
            }
            text += `*Name:* ${name}\n`;
            if (kennzeichen) text += `*Kennzeichen:* ${kennzeichen}\n`;
            if (email) text += `*E-Mail:* ${email}\n`;
            text += `*Telefon:* ${phone}\n`;
            if (message) text += `\n*Details:*\n${message}`;

            const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
            window.open(url, "_blank");
        });

        show(1);
    }
})();
