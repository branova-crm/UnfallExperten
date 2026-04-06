import { Metadata } from 'next';
import StandortPageTemplate, { StandortData } from '@/components/StandortPageTemplate';

const city = "Meckenheim";

export const metadata: Metadata = {
  title: `KFZ-Gutachter Meckenheim – Kostenlos & Schnell | UnfallExperten`,
  description: `Unfall in Meckenheim? Ihr KFZ-Gutachter vor Ort. Kostenloses Unfallgutachten für Geschädigte, schnelle Abwicklung, 24/7 erreichbar.`,
};

export default function StandortDetail() {
  const data: StandortData = {
    city: "Meckenheim",
    slug: "meckenheim",
    heroSubline: "Wir sind schnell bei Ihnen vor Ort – professionelle Unfallgutachten & Schadensbewertung in Meckenheim und Umgebung.",
    trustText: "Für Geschädigte kostenlos – die gegnerische Versicherung übernimmt in der Regel sämtliche Kosten. Kein Risiko, kein Stress.",
    introParagraph: "Sie hatten einen unverschuldeten Autounfall in Meckenheim? Unsere unabhängigen Gutachter-Experten sind schnell bei Ihnen vor Ort, um den Schaden professionell aufzunehmen. Mit unserer vollumfänglichen Begutachtung sichern Sie sich alle Ansprüche gegenüber der gegnerischen Versicherung – absolut stressfrei und zuverlässig.",
    areas: [
      { city: "Meckenheim", time: "ca. 20 Min vor Ort" },
      { city: "Troisdorf", time: "ca. 27 Min vor Ort" },
      { city: "Sankt Augustin", time: "ca. 16 Min vor Ort" },
      { city: "Hennef", time: "ca. 21 Min vor Ort" },
      { city: "Königswinter", time: "ca. 37 Min vor Ort" },
      { city: "Bonn", time: "ca. 28 Min vor Ort" },
      { city: "Siegburg", time: "ca. 23 Min vor Ort" },
      { city: "Rheinbach", time: "ca. 28 Min vor Ort" },
      { city: "Bonn-Duisdorf", time: "ca. 14 Min vor Ort" },
      { city: "Swisttal", time: "ca. 20 Min vor Ort" },
      { city: "Köln", time: "ca. 33 Min vor Ort" }
    ],
    otherCities: [
      { name: "Köln", slug: "koeln" },
      { name: "Bonn-Duisdorf", slug: "bonn-duisdorf" },
      { name: "Rheinbach", slug: "rheinbach" },
      { name: "Leverkusen", slug: "leverkusen" },
      { name: "Königswinter", slug: "koenigswinter" }
    ],
    faqs: [
      {
        q: "Was kostet ein Gutachten in Meckenheim?",
        a: "Bei einem unverschuldeten Unfall ist das Gutachten für Sie komplett kostenlos. Die gegnerische Versicherung ist gesetzlich verpflichtet, die Kosten für den KFZ-Gutachter in Meckenheim zu übernehmen."
      },
      {
        q: "Wie schnell sind Sie vor Ort in Meckenheim?",
        a: "Durch unsere lokale Präsenz sind unsere Gutachter-Experten in Meckenheim und Umgebung meist innerhalb von ca. 20 Minuten bei Ihnen am Unfallort, zu Hause oder in der Werkstatt."
      },
      {
        q: "Wer übernimmt die Kosten nach einem Unfall?",
        a: "Sind Sie nicht der Unfallverursacher, muss die Haftpflichtversicherung des Verursachers für alle anfallenden Kosten aufkommen. Dies schließt Reparaturkosten, Rechtsanwalt, Mietwagen und natürlich Ihren regionalen Gutachter ein."
      },
      {
        q: "Kann ich Sie direkt kontaktieren?",
        a: "Ja, wir sind 24/7 für Sie erreichbar. Rufen Sie uns direkt an oder schreiben Sie uns eine Nachricht via WhatsApp, und wir kümmern uns umgehend um Ihren Fall in Meckenheim."
      },
      {
        q: "Wie läuft ein Gutachten ab?",
        a: "Nach Ihrer Kontaktaufnahme besichtigen wir Ihr Fahrzeug vor Ort in Meckenheim. Wir dokumentieren alle Schäden detailliert, kalkulieren Reparaturkosten und Wertminderung und übermitteln das fertige Gutachten direkt an die Versicherung."
      }
    ]
  };

  return <StandortPageTemplate data={data} />;
}
