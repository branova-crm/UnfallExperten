import { Metadata } from 'next';
import StandortPageTemplate, { StandortData } from '@/components/StandortPageTemplate';

const city = "Sankt Augustin";

export const metadata: Metadata = {
  title: `KFZ-Gutachter Sankt Augustin – Kostenlos & Schnell | UnfallExperten`,
  description: `Unfall in Sankt Augustin? Ihr KFZ-Gutachter vor Ort. Kostenloses Unfallgutachten für Geschädigte, schnelle Abwicklung, 24/7 erreichbar.`,
};

export default function StandortDetail() {
  const data: StandortData = {
    city: "Sankt Augustin",
    slug: "sankt-augustin",
    heroSubline: "Wir sind schnell bei Ihnen vor Ort – professionelle Unfallgutachten & Schadensbewertung in Sankt Augustin und Umgebung.",
    trustText: "Für Geschädigte kostenlos – die gegnerische Versicherung übernimmt in der Regel sämtliche Kosten. Kein Risiko, kein Stress.",
    introParagraph: "Sie hatten einen unverschuldeten Autounfall in Sankt Augustin? Unsere unabhängigen Gutachter-Experten sind schnell bei Ihnen vor Ort, um den Schaden professionell aufzunehmen. Mit unserer vollumfänglichen Begutachtung sichern Sie sich alle Ansprüche gegenüber der gegnerischen Versicherung – absolut stressfrei und zuverlässig.",
    areas: [
      { city: "Sankt Augustin", time: "ca. 15 Min vor Ort" },
      { city: "Rheinbach", time: "ca. 25 Min vor Ort" },
      { city: "Bad Honnef", time: "ca. 25 Min vor Ort" },
      { city: "Siegburg", time: "ca. 24 Min vor Ort" },
      { city: "Meckenheim", time: "ca. 28 Min vor Ort" },
      { city: "Leverkusen", time: "ca. 41 Min vor Ort" },
      { city: "Mechernich", time: "ca. 30 Min vor Ort" },
      { city: "Euskirchen", time: "ca. 10 Min vor Ort" },
      { city: "Alfter", time: "ca. 15 Min vor Ort" },
      { city: "Köln", time: "ca. 35 Min vor Ort" },
      { city: "Troisdorf", time: "ca. 21 Min vor Ort" }
    ],
    otherCities: [
      { name: "Siegburg", slug: "siegburg" },
      { name: "Erftstadt", slug: "erftstadt" },
      { name: "Euskirchen", slug: "euskirchen" },
      { name: "Königswinter", slug: "koenigswinter" },
      { name: "Alfter", slug: "alfter" }
    ],
    faqs: [
      {
        q: "Was kostet ein Gutachten in Sankt Augustin?",
        a: "Bei einem unverschuldeten Unfall ist das Gutachten für Sie komplett kostenlos. Die gegnerische Versicherung ist gesetzlich verpflichtet, die Kosten für den KFZ-Gutachter in Sankt Augustin zu übernehmen."
      },
      {
        q: "Wie schnell sind Sie vor Ort in Sankt Augustin?",
        a: "Durch unsere lokale Präsenz sind unsere Gutachter-Experten in Sankt Augustin und Umgebung meist innerhalb von ca. 15 Minuten bei Ihnen am Unfallort, zu Hause oder in der Werkstatt."
      },
      {
        q: "Wer übernimmt die Kosten nach einem Unfall?",
        a: "Sind Sie nicht der Unfallverursacher, muss die Haftpflichtversicherung des Verursachers für alle anfallenden Kosten aufkommen. Dies schließt Reparaturkosten, Rechtsanwalt, Mietwagen und natürlich Ihren regionalen Gutachter ein."
      },
      {
        q: "Kann ich Sie direkt kontaktieren?",
        a: "Ja, wir sind 24/7 für Sie erreichbar. Rufen Sie uns direkt an oder schreiben Sie uns eine Nachricht via WhatsApp, und wir kümmern uns umgehend um Ihren Fall in Sankt Augustin."
      },
      {
        q: "Wie läuft ein Gutachten ab?",
        a: "Nach Ihrer Kontaktaufnahme besichtigen wir Ihr Fahrzeug vor Ort in Sankt Augustin. Wir dokumentieren alle Schäden detailliert, kalkulieren Reparaturkosten und Wertminderung und übermitteln das fertige Gutachten direkt an die Versicherung."
      }
    ]
  };

  return <StandortPageTemplate data={data} />;
}
