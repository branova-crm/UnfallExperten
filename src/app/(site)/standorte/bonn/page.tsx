import { Metadata } from 'next';
import StandortPageTemplate, { StandortData } from '@/components/StandortPageTemplate';

const city = "Bonn";

export const metadata: Metadata = {
  title: `KFZ-Gutachter Bonn – Kostenlos & Schnell | UnfallExperten`,
  description: `Unfall in Bonn? Ihr KFZ-Gutachter vor Ort. Kostenloses Unfallgutachten für Geschädigte, schnelle Abwicklung, 24/7 erreichbar.`,
};

export default function StandortDetail() {
  const data: StandortData = {
    city: "Bonn",
    slug: "bonn",
    heroSubline: "Wir sind schnell bei Ihnen vor Ort – professionelle Unfallgutachten & Schadensbewertung in Bonn und Umgebung.",
    trustText: "Für Geschädigte kostenlos – die gegnerische Versicherung übernimmt in der Regel sämtliche Kosten. Kein Risiko, kein Stress.",
    introParagraph: "Sie hatten einen unverschuldeten Autounfall in Bonn? Unsere unabhängigen Gutachter-Experten sind schnell bei Ihnen vor Ort, um den Schaden professionell aufzunehmen. Mit unserer vollumfänglichen Begutachtung sichern Sie sich alle Ansprüche gegenüber der gegnerischen Versicherung – absolut stressfrei und zuverlässig.",
    areas: [
      { city: "Bonn", time: "ca. 20 Min vor Ort" },
      { city: "Erftstadt", time: "ca. 26 Min vor Ort" },
      { city: "Troisdorf", time: "ca. 16 Min vor Ort" },
      { city: "Euskirchen", time: "ca. 10 Min vor Ort" },
      { city: "Meckenheim", time: "ca. 28 Min vor Ort" },
      { city: "Bornheim", time: "ca. 14 Min vor Ort" },
      { city: "Siegburg", time: "ca. 18 Min vor Ort" },
      { city: "Königswinter", time: "ca. 34 Min vor Ort" },
      { city: "Alfter", time: "ca. 13 Min vor Ort" },
      { city: "Sankt Augustin", time: "ca. 12 Min vor Ort" },
      { city: "Leverkusen", time: "ca. 46 Min vor Ort" }
    ],
    otherCities: [
      { name: "Meckenheim", slug: "meckenheim" },
      { name: "Siegburg", slug: "siegburg" },
      { name: "Hennef", slug: "hennef" },
      { name: "Bonn-Duisdorf", slug: "bonn-duisdorf" },
      { name: "Mechernich", slug: "mechernich" }
    ],
    faqs: [
      {
        q: "Was kostet ein Gutachten in Bonn?",
        a: "Bei einem unverschuldeten Unfall ist das Gutachten für Sie komplett kostenlos. Die gegnerische Versicherung ist gesetzlich verpflichtet, die Kosten für den KFZ-Gutachter in Bonn zu übernehmen."
      },
      {
        q: "Wie schnell sind Sie vor Ort in Bonn?",
        a: "Durch unsere lokale Präsenz sind unsere Gutachter-Experten in Bonn und Umgebung meist innerhalb von ca. 20 Minuten bei Ihnen am Unfallort, zu Hause oder in der Werkstatt."
      },
      {
        q: "Wer übernimmt die Kosten nach einem Unfall?",
        a: "Sind Sie nicht der Unfallverursacher, muss die Haftpflichtversicherung des Verursachers für alle anfallenden Kosten aufkommen. Dies schließt Reparaturkosten, Rechtsanwalt, Mietwagen und natürlich Ihren regionalen Gutachter ein."
      },
      {
        q: "Kann ich Sie direkt kontaktieren?",
        a: "Ja, wir sind 24/7 für Sie erreichbar. Rufen Sie uns direkt an oder schreiben Sie uns eine Nachricht via WhatsApp, und wir kümmern uns umgehend um Ihren Fall in Bonn."
      },
      {
        q: "Wie läuft ein Gutachten ab?",
        a: "Nach Ihrer Kontaktaufnahme besichtigen wir Ihr Fahrzeug vor Ort in Bonn. Wir dokumentieren alle Schäden detailliert, kalkulieren Reparaturkosten und Wertminderung und übermitteln das fertige Gutachten direkt an die Versicherung."
      }
    ]
  };

  return <StandortPageTemplate data={data} />;
}
