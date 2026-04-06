import { Metadata } from 'next';
import StandortPageTemplate, { StandortData } from '@/components/StandortPageTemplate';

const city = "Bad Honnef";

export const metadata: Metadata = {
  title: `KFZ-Gutachter Bad Honnef – Kostenlos & Schnell | UnfallExperten`,
  description: `Unfall in Bad Honnef? Ihr KFZ-Gutachter vor Ort. Kostenloses Unfallgutachten für Geschädigte, schnelle Abwicklung, 24/7 erreichbar.`,
};

export default function StandortDetail() {
  const data: StandortData = {
    city: "Bad Honnef",
    slug: "bad-honnef",
    heroSubline: "Wir sind schnell bei Ihnen vor Ort – professionelle Unfallgutachten & Schadensbewertung in Bad Honnef und Umgebung.",
    trustText: "Für Geschädigte kostenlos – die gegnerische Versicherung übernimmt in der Regel sämtliche Kosten. Kein Risiko, kein Stress.",
    introParagraph: "Sie hatten einen unverschuldeten Autounfall in Bad Honnef? Unsere unabhängigen Gutachter-Experten sind schnell bei Ihnen vor Ort, um den Schaden professionell aufzunehmen. Mit unserer vollumfänglichen Begutachtung sichern Sie sich alle Ansprüche gegenüber der gegnerischen Versicherung – absolut stressfrei und zuverlässig.",
    areas: [
      { city: "Bad Honnef", time: "ca. 25 Min vor Ort" },
      { city: "Leverkusen", time: "ca. 37 Min vor Ort" },
      { city: "Alfter", time: "ca. 10 Min vor Ort" },
      { city: "Swisttal", time: "ca. 32 Min vor Ort" },
      { city: "Bonn", time: "ca. 24 Min vor Ort" },
      { city: "Troisdorf", time: "ca. 22 Min vor Ort" },
      { city: "Mechernich", time: "ca. 31 Min vor Ort" },
      { city: "Königswinter", time: "ca. 31 Min vor Ort" },
      { city: "Erftstadt", time: "ca. 37 Min vor Ort" },
      { city: "Bonn-Duisdorf", time: "ca. 15 Min vor Ort" },
      { city: "Hennef", time: "ca. 22 Min vor Ort" }
    ],
    otherCities: [
      { name: "Meckenheim", slug: "meckenheim" },
      { name: "Mechernich", slug: "mechernich" },
      { name: "Bonn", slug: "bonn" },
      { name: "Alfter", slug: "alfter" },
      { name: "Königswinter", slug: "koenigswinter" }
    ],
    faqs: [
      {
        q: "Was kostet ein Gutachten in Bad Honnef?",
        a: "Bei einem unverschuldeten Unfall ist das Gutachten für Sie komplett kostenlos. Die gegnerische Versicherung ist gesetzlich verpflichtet, die Kosten für den KFZ-Gutachter in Bad Honnef zu übernehmen."
      },
      {
        q: "Wie schnell sind Sie vor Ort in Bad Honnef?",
        a: "Durch unsere lokale Präsenz sind unsere Gutachter-Experten in Bad Honnef und Umgebung meist innerhalb von ca. 25 Minuten bei Ihnen am Unfallort, zu Hause oder in der Werkstatt."
      },
      {
        q: "Wer übernimmt die Kosten nach einem Unfall?",
        a: "Sind Sie nicht der Unfallverursacher, muss die Haftpflichtversicherung des Verursachers für alle anfallenden Kosten aufkommen. Dies schließt Reparaturkosten, Rechtsanwalt, Mietwagen und natürlich Ihren regionalen Gutachter ein."
      },
      {
        q: "Kann ich Sie direkt kontaktieren?",
        a: "Ja, wir sind 24/7 für Sie erreichbar. Rufen Sie uns direkt an oder schreiben Sie uns eine Nachricht via WhatsApp, und wir kümmern uns umgehend um Ihren Fall in Bad Honnef."
      },
      {
        q: "Wie läuft ein Gutachten ab?",
        a: "Nach Ihrer Kontaktaufnahme besichtigen wir Ihr Fahrzeug vor Ort in Bad Honnef. Wir dokumentieren alle Schäden detailliert, kalkulieren Reparaturkosten und Wertminderung und übermitteln das fertige Gutachten direkt an die Versicherung."
      }
    ]
  };

  return <StandortPageTemplate data={data} />;
}
