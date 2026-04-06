import { Metadata } from 'next';
import StandortPageTemplate, { StandortData } from '@/components/StandortPageTemplate';

const city = "Mechernich";

export const metadata: Metadata = {
  title: `KFZ-Gutachter Mechernich – Kostenlos & Schnell | UnfallExperten`,
  description: `Unfall in Mechernich? Ihr KFZ-Gutachter vor Ort. Kostenloses Unfallgutachten für Geschädigte, schnelle Abwicklung, 24/7 erreichbar.`,
};

export default function StandortDetail() {
  const data: StandortData = {
    city: "Mechernich",
    slug: "mechernich",
    heroSubline: "Wir sind schnell bei Ihnen vor Ort – professionelle Unfallgutachten & Schadensbewertung in Mechernich und Umgebung.",
    trustText: "Für Geschädigte kostenlos – die gegnerische Versicherung übernimmt in der Regel sämtliche Kosten. Kein Risiko, kein Stress.",
    introParagraph: "Sie hatten einen unverschuldeten Autounfall in Mechernich? Unsere unabhängigen Gutachter-Experten sind schnell bei Ihnen vor Ort, um den Schaden professionell aufzunehmen. Mit unserer vollumfänglichen Begutachtung sichern Sie sich alle Ansprüche gegenüber der gegnerischen Versicherung – absolut stressfrei und zuverlässig.",
    areas: [
      { city: "Mechernich", time: "ca. 25 Min vor Ort" },
      { city: "Rheinbach", time: "ca. 24 Min vor Ort" },
      { city: "Bornheim", time: "ca. 15 Min vor Ort" },
      { city: "Bonn", time: "ca. 26 Min vor Ort" },
      { city: "Alfter", time: "ca. 16 Min vor Ort" },
      { city: "Königswinter", time: "ca. 39 Min vor Ort" },
      { city: "Meckenheim", time: "ca. 28 Min vor Ort" },
      { city: "Swisttal", time: "ca. 27 Min vor Ort" },
      { city: "Hennef", time: "ca. 21 Min vor Ort" },
      { city: "Euskirchen", time: "ca. 19 Min vor Ort" },
      { city: "Köln", time: "ca. 30 Min vor Ort" }
    ],
    otherCities: [
      { name: "Rheinbach", slug: "rheinbach" },
      { name: "Bonn", slug: "bonn" },
      { name: "Köln", slug: "koeln" },
      { name: "Swisttal", slug: "swisttal" },
      { name: "Leverkusen", slug: "leverkusen" }
    ],
    faqs: [
      {
        q: "Was kostet ein Gutachten in Mechernich?",
        a: "Bei einem unverschuldeten Unfall ist das Gutachten für Sie komplett kostenlos. Die gegnerische Versicherung ist gesetzlich verpflichtet, die Kosten für den KFZ-Gutachter in Mechernich zu übernehmen."
      },
      {
        q: "Wie schnell sind Sie vor Ort in Mechernich?",
        a: "Durch unsere lokale Präsenz sind unsere Gutachter-Experten in Mechernich und Umgebung meist innerhalb von ca. 25 Minuten bei Ihnen am Unfallort, zu Hause oder in der Werkstatt."
      },
      {
        q: "Wer übernimmt die Kosten nach einem Unfall?",
        a: "Sind Sie nicht der Unfallverursacher, muss die Haftpflichtversicherung des Verursachers für alle anfallenden Kosten aufkommen. Dies schließt Reparaturkosten, Rechtsanwalt, Mietwagen und natürlich Ihren regionalen Gutachter ein."
      },
      {
        q: "Kann ich Sie direkt kontaktieren?",
        a: "Ja, wir sind 24/7 für Sie erreichbar. Rufen Sie uns direkt an oder schreiben Sie uns eine Nachricht via WhatsApp, und wir kümmern uns umgehend um Ihren Fall in Mechernich."
      },
      {
        q: "Wie läuft ein Gutachten ab?",
        a: "Nach Ihrer Kontaktaufnahme besichtigen wir Ihr Fahrzeug vor Ort in Mechernich. Wir dokumentieren alle Schäden detailliert, kalkulieren Reparaturkosten und Wertminderung und übermitteln das fertige Gutachten direkt an die Versicherung."
      }
    ]
  };

  return <StandortPageTemplate data={data} />;
}
