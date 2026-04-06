import { Metadata } from 'next';
import StandortPageTemplate, { StandortData } from '@/components/StandortPageTemplate';

const city = "Swisttal";

export const metadata: Metadata = {
  title: `KFZ-Gutachter Swisttal – Kostenlos & Schnell | UnfallExperten`,
  description: `Unfall in Swisttal? Ihr KFZ-Gutachter vor Ort. Kostenloses Unfallgutachten für Geschädigte, schnelle Abwicklung, 24/7 erreichbar.`,
};

export default function StandortDetail() {
  const data: StandortData = {
    city: "Swisttal",
    slug: "swisttal",
    heroSubline: "Wir sind schnell bei Ihnen vor Ort – professionelle Unfallgutachten & Schadensbewertung in Swisttal und Umgebung.",
    trustText: "Für Geschädigte kostenlos – die gegnerische Versicherung übernimmt in der Regel sämtliche Kosten. Kein Risiko, kein Stress.",
    introParagraph: "Sie hatten einen unverschuldeten Autounfall in Swisttal? Unsere unabhängigen Gutachter-Experten sind schnell bei Ihnen vor Ort, um den Schaden professionell aufzunehmen. Mit unserer vollumfänglichen Begutachtung sichern Sie sich alle Ansprüche gegenüber der gegnerischen Versicherung – absolut stressfrei und zuverlässig.",
    areas: [
      { city: "Swisttal", time: "ca. 25 Min vor Ort" },
      { city: "Bornheim", time: "ca. 11 Min vor Ort" },
      { city: "Meckenheim", time: "ca. 22 Min vor Ort" },
      { city: "Bonn", time: "ca. 19 Min vor Ort" },
      { city: "Sankt Augustin", time: "ca. 21 Min vor Ort" },
      { city: "Rheinbach", time: "ca. 25 Min vor Ort" },
      { city: "Bad Honnef", time: "ca. 26 Min vor Ort" },
      { city: "Königswinter", time: "ca. 26 Min vor Ort" },
      { city: "Köln", time: "ca. 32 Min vor Ort" },
      { city: "Erftstadt", time: "ca. 29 Min vor Ort" },
      { city: "Leverkusen", time: "ca. 47 Min vor Ort" }
    ],
    otherCities: [
      { name: "Köln", slug: "koeln" },
      { name: "Rheinbach", slug: "rheinbach" },
      { name: "Erftstadt", slug: "erftstadt" },
      { name: "Bonn-Duisdorf", slug: "bonn-duisdorf" },
      { name: "Bad Honnef", slug: "bad-honnef" }
    ],
    faqs: [
      {
        q: "Was kostet ein Gutachten in Swisttal?",
        a: "Bei einem unverschuldeten Unfall ist das Gutachten für Sie komplett kostenlos. Die gegnerische Versicherung ist gesetzlich verpflichtet, die Kosten für den KFZ-Gutachter in Swisttal zu übernehmen."
      },
      {
        q: "Wie schnell sind Sie vor Ort in Swisttal?",
        a: "Durch unsere lokale Präsenz sind unsere Gutachter-Experten in Swisttal und Umgebung meist innerhalb von ca. 25 Minuten bei Ihnen am Unfallort, zu Hause oder in der Werkstatt."
      },
      {
        q: "Wer übernimmt die Kosten nach einem Unfall?",
        a: "Sind Sie nicht der Unfallverursacher, muss die Haftpflichtversicherung des Verursachers für alle anfallenden Kosten aufkommen. Dies schließt Reparaturkosten, Rechtsanwalt, Mietwagen und natürlich Ihren regionalen Gutachter ein."
      },
      {
        q: "Kann ich Sie direkt kontaktieren?",
        a: "Ja, wir sind 24/7 für Sie erreichbar. Rufen Sie uns direkt an oder schreiben Sie uns eine Nachricht via WhatsApp, und wir kümmern uns umgehend um Ihren Fall in Swisttal."
      },
      {
        q: "Wie läuft ein Gutachten ab?",
        a: "Nach Ihrer Kontaktaufnahme besichtigen wir Ihr Fahrzeug vor Ort in Swisttal. Wir dokumentieren alle Schäden detailliert, kalkulieren Reparaturkosten und Wertminderung und übermitteln das fertige Gutachten direkt an die Versicherung."
      }
    ]
  };

  return <StandortPageTemplate data={data} />;
}
