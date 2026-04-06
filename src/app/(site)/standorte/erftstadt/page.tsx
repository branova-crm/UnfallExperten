import { Metadata } from 'next';
import StandortPageTemplate, { StandortData } from '@/components/StandortPageTemplate';

const city = "Erftstadt";

export const metadata: Metadata = {
  title: `KFZ-Gutachter Erftstadt – Kostenlos & Schnell | UnfallExperten`,
  description: `Unfall in Erftstadt? Ihr KFZ-Gutachter vor Ort. Kostenloses Unfallgutachten für Geschädigte, schnelle Abwicklung, 24/7 erreichbar.`,
};

export default function StandortDetail() {
  const data: StandortData = {
    city: "Erftstadt",
    slug: "erftstadt",
    heroSubline: "Wir sind schnell bei Ihnen vor Ort – professionelle Unfallgutachten & Schadensbewertung in Erftstadt und Umgebung.",
    trustText: "Für Geschädigte kostenlos – die gegnerische Versicherung übernimmt in der Regel sämtliche Kosten. Kein Risiko, kein Stress.",
    introParagraph: "Sie hatten einen unverschuldeten Autounfall in Erftstadt? Unsere unabhängigen Gutachter-Experten sind schnell bei Ihnen vor Ort, um den Schaden professionell aufzunehmen. Mit unserer vollumfänglichen Begutachtung sichern Sie sich alle Ansprüche gegenüber der gegnerischen Versicherung – absolut stressfrei und zuverlässig.",
    areas: [
      { city: "Erftstadt", time: "ca. 30 Min vor Ort" },
      { city: "Rheinbach", time: "ca. 27 Min vor Ort" },
      { city: "Alfter", time: "ca. 14 Min vor Ort" },
      { city: "Mechernich", time: "ca. 32 Min vor Ort" },
      { city: "Swisttal", time: "ca. 30 Min vor Ort" },
      { city: "Bonn", time: "ca. 18 Min vor Ort" },
      { city: "Bad Honnef", time: "ca. 23 Min vor Ort" },
      { city: "Troisdorf", time: "ca. 27 Min vor Ort" },
      { city: "Königswinter", time: "ca. 26 Min vor Ort" },
      { city: "Bornheim", time: "ca. 15 Min vor Ort" },
      { city: "Hennef", time: "ca. 16 Min vor Ort" }
    ],
    otherCities: [
      { name: "Hennef", slug: "hennef" },
      { name: "Rheinbach", slug: "rheinbach" },
      { name: "Siegburg", slug: "siegburg" },
      { name: "Bornheim", slug: "bornheim" },
      { name: "Königswinter", slug: "koenigswinter" }
    ],
    faqs: [
      {
        q: "Was kostet ein Gutachten in Erftstadt?",
        a: "Bei einem unverschuldeten Unfall ist das Gutachten für Sie komplett kostenlos. Die gegnerische Versicherung ist gesetzlich verpflichtet, die Kosten für den KFZ-Gutachter in Erftstadt zu übernehmen."
      },
      {
        q: "Wie schnell sind Sie vor Ort in Erftstadt?",
        a: "Durch unsere lokale Präsenz sind unsere Gutachter-Experten in Erftstadt und Umgebung meist innerhalb von ca. 30 Minuten bei Ihnen am Unfallort, zu Hause oder in der Werkstatt."
      },
      {
        q: "Wer übernimmt die Kosten nach einem Unfall?",
        a: "Sind Sie nicht der Unfallverursacher, muss die Haftpflichtversicherung des Verursachers für alle anfallenden Kosten aufkommen. Dies schließt Reparaturkosten, Rechtsanwalt, Mietwagen und natürlich Ihren regionalen Gutachter ein."
      },
      {
        q: "Kann ich Sie direkt kontaktieren?",
        a: "Ja, wir sind 24/7 für Sie erreichbar. Rufen Sie uns direkt an oder schreiben Sie uns eine Nachricht via WhatsApp, und wir kümmern uns umgehend um Ihren Fall in Erftstadt."
      },
      {
        q: "Wie läuft ein Gutachten ab?",
        a: "Nach Ihrer Kontaktaufnahme besichtigen wir Ihr Fahrzeug vor Ort in Erftstadt. Wir dokumentieren alle Schäden detailliert, kalkulieren Reparaturkosten und Wertminderung und übermitteln das fertige Gutachten direkt an die Versicherung."
      }
    ]
  };

  return <StandortPageTemplate data={data} />;
}
