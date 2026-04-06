import { Metadata } from 'next';
import StandortPageTemplate, { StandortData } from '@/components/StandortPageTemplate';

const city = "Bonn-Duisdorf";

export const metadata: Metadata = {
  title: `KFZ-Gutachter Bonn-Duisdorf – Kostenlos & Schnell | UnfallExperten`,
  description: `Unfall in Bonn-Duisdorf? Ihr KFZ-Gutachter vor Ort. Kostenloses Unfallgutachten für Geschädigte, schnelle Abwicklung, 24/7 erreichbar.`,
};

export default function StandortDetail() {
  const data: StandortData = {
    city: "Bonn-Duisdorf",
    slug: "bonn-duisdorf",
    heroSubline: "Wir sind schnell bei Ihnen vor Ort – professionelle Unfallgutachten & Schadensbewertung in Bonn-Duisdorf und Umgebung.",
    trustText: "Für Geschädigte kostenlos – die gegnerische Versicherung übernimmt in der Regel sämtliche Kosten. Kein Risiko, kein Stress.",
    introParagraph: "Sie hatten einen unverschuldeten Autounfall in Bonn-Duisdorf? Unsere unabhängigen Gutachter-Experten sind schnell bei Ihnen vor Ort, um den Schaden professionell aufzunehmen. Mit unserer vollumfänglichen Begutachtung sichern Sie sich alle Ansprüche gegenüber der gegnerischen Versicherung – absolut stressfrei und zuverlässig.",
    areas: [
      { city: "Bonn-Duisdorf", time: "ca. 15 Min vor Ort" },
      { city: "Troisdorf", time: "ca. 24 Min vor Ort" },
      { city: "Swisttal", time: "ca. 20 Min vor Ort" },
      { city: "Bonn", time: "ca. 29 Min vor Ort" },
      { city: "Mechernich", time: "ca. 21 Min vor Ort" },
      { city: "Rheinbach", time: "ca. 23 Min vor Ort" },
      { city: "Köln", time: "ca. 33 Min vor Ort" },
      { city: "Alfter", time: "ca. 19 Min vor Ort" },
      { city: "Sankt Augustin", time: "ca. 23 Min vor Ort" },
      { city: "Bad Honnef", time: "ca. 34 Min vor Ort" },
      { city: "Leverkusen", time: "ca. 35 Min vor Ort" }
    ],
    otherCities: [
      { name: "Erftstadt", slug: "erftstadt" },
      { name: "Bornheim", slug: "bornheim" },
      { name: "Rheinbach", slug: "rheinbach" },
      { name: "Königswinter", slug: "koenigswinter" },
      { name: "Bad Honnef", slug: "bad-honnef" }
    ],
    faqs: [
      {
        q: "Was kostet ein Gutachten in Bonn-Duisdorf?",
        a: "Bei einem unverschuldeten Unfall ist das Gutachten für Sie komplett kostenlos. Die gegnerische Versicherung ist gesetzlich verpflichtet, die Kosten für den KFZ-Gutachter in Bonn-Duisdorf zu übernehmen."
      },
      {
        q: "Wie schnell sind Sie vor Ort in Bonn-Duisdorf?",
        a: "Durch unsere lokale Präsenz sind unsere Gutachter-Experten in Bonn-Duisdorf und Umgebung meist innerhalb von ca. 15 Minuten bei Ihnen am Unfallort, zu Hause oder in der Werkstatt."
      },
      {
        q: "Wer übernimmt die Kosten nach einem Unfall?",
        a: "Sind Sie nicht der Unfallverursacher, muss die Haftpflichtversicherung des Verursachers für alle anfallenden Kosten aufkommen. Dies schließt Reparaturkosten, Rechtsanwalt, Mietwagen und natürlich Ihren regionalen Gutachter ein."
      },
      {
        q: "Kann ich Sie direkt kontaktieren?",
        a: "Ja, wir sind 24/7 für Sie erreichbar. Rufen Sie uns direkt an oder schreiben Sie uns eine Nachricht via WhatsApp, und wir kümmern uns umgehend um Ihren Fall in Bonn-Duisdorf."
      },
      {
        q: "Wie läuft ein Gutachten ab?",
        a: "Nach Ihrer Kontaktaufnahme besichtigen wir Ihr Fahrzeug vor Ort in Bonn-Duisdorf. Wir dokumentieren alle Schäden detailliert, kalkulieren Reparaturkosten und Wertminderung und übermitteln das fertige Gutachten direkt an die Versicherung."
      }
    ]
  };

  return <StandortPageTemplate data={data} />;
}
