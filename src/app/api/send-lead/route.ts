import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            website, // honeypot
            privacy,
            name,
            kennzeichen,
            email,
            phone,
            interests,
            message,
            source
        } = body;

        // Check honeypot
        if (website) {
            return NextResponse.json({ success: false, message: 'Bot detected' }, { status: 400 });
        }

        // Check privacy policy acceptance
        if (privacy !== '1' && privacy !== true && privacy !== 'true') {
            return NextResponse.json({ success: false, message: 'Privacy policy must be accepted' }, { status: 400 });
        }

        // Validate required fields
        if (!name || !phone || !interests) {
            return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
        }

        // Create reusable transporter object
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        // Prepare email content
        const interestsArr = interests.split(',').map((item: string) => item.trim()).filter(Boolean);
        const interestsList = interestsArr.map((item: string) => `<li style="margin:0 0 6px 0;">${item}</li>`).join('');

        let subjectInterest = interestsArr.slice(0, 3).join(', ');
        if (interestsArr.length > 3) subjectInterest += ' uvm.';
        const subject = `Neue Anfrage: ${subjectInterest || 'Anfrage'} | UnfallExperten`;

        const phoneDigits = phone.replace(/[^0-9+]/g, '');
        const telLink = phoneDigits ? `tel:${phoneDigits}` : '#';

        let waNumber = phone.replace(/\D+/g, '');
        if (waNumber.startsWith('0')) {
            waNumber = '49' + waNumber.substring(1);
        }
        const waText = encodeURIComponent(`Hallo ${name}, hier ist UnfallExperten NRW. Danke für Ihre Anfrage – wie können wir helfen?`);
        const waLink = waNumber ? `https://wa.me/${waNumber}?text=${waText}` : '#';

        const replyLink = email ? `mailto:${email}` : '#';

        const ip = req.headers.get('x-forwarded-for') || '';
        const now = new Date();
        const time = now.toLocaleString('de-DE');
        const year = now.getFullYear();

        // Colors matching Corporate Identity
        const primary = '#1641A6';
        const primary2 = '#1a4fbd';
        const bg = '#0f172a';
        const card = '#1f2937';
        const muted = '#94a3b8';
        const text = '#e5e7eb';

        const htmlBody = `
        <div style="background:${bg};padding:30px 16px;font-family:Arial,sans-serif;">
            <div style="max-width:720px;margin:auto;background:${card};border-radius:18px;overflow:hidden;">
            <div style="background:linear-gradient(135deg,${primary},${primary2});padding:18px 22px;color:#fff;">
                <strong>Neue Anfrage über das UnfallExperten-Formular</strong>
            </div>

            <div style="padding:22px;color:${text};font-size:14px;">
                <p>Hallo UnfallExperten-Team,</p>
                <p>es ist eine neue Anfrage über das Formular auf der Website eingegangen.</p>

                <h4 style="color:${muted};">ANLIEGEN</h4>
                <ul>${interestsList}</ul>

                <h4 style="color:${muted};">KONTAKTDATEN</h4>
                <p><strong>Name:</strong> ${name || ''}</p>
                <p><strong>Kennzeichen:</strong> ${kennzeichen || ''}</p>
                <p><strong>E-Mail:</strong> <a href="mailto:${email || ''}" style="color:#93c5fd;">${email || ''}</a></p>
                <p><strong>Telefon / WhatsApp:</strong> ${phone || ''}</p>
                <p><strong>Quelle:</strong> ${source || 'UnfallExperten WhatsApp Konfigurator'}</p>

                <h4 style="color:${muted};">DETAILS / SITUATION</h4>
                <p>${message ? message.replace(/\n/g, '<br>') : '<em>– keine Nachricht –</em>'}</p>

                <h4 style="color:${muted};">DATENSCHUTZ</h4>
                <p>
                <strong>✔ akzeptiert</strong><br>
                <em>Ich habe die Datenschutzerklärung gelesen und akzeptiere sie.</em>
                </p>

                <div style="margin-top:18px;">
                <a href="${telLink}" style="padding:10px 16px;background:#334155;color:#fff;border-radius:999px;text-decoration:none;">Jetzt anrufen</a>
                <a href="${waLink}" style="padding:10px 16px;background:#22c55e;color:#052e16;border-radius:999px;text-decoration:none;margin-left:8px;">WhatsApp</a>
                <a href="${replyLink}" style="padding:10px 16px;background:#334155;color:#fff;border-radius:999px;text-decoration:none;margin-left:8px;">Per E-Mail antworten</a>
                </div>
            </div>

            <div style="padding:14px 20px;border-top:1px solid rgba(255,255,255,.1);color:${muted};font-size:12px;display:flex;justify-content:space-between;flex-wrap:wrap;">
                <span>${year} © <a href="https://unfallexperten-nrw.de" style="color:#93c5fd;">UnfallExperten NRW</a></span>
                <span>Eingegangen am ${time} ${ip ? `| IP: ${ip}` : ''}</span>
            </div>
            </div>
        </div>`;

        const mailOptions: any = {
            from: process.env.MAIL_FROM,
            to: process.env.MAIL_TO,
            subject: subject,
            html: htmlBody,
        };

        if (email) {
            mailOptions.replyTo = email;
        }

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);

        return NextResponse.json({ success: true, message: 'Message sent successfully' });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
    }
}
