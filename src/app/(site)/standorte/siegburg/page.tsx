import { Metadata } from 'next';
import StandortPageTemplate, { StandortData } from '@/components/StandortPageTemplate';

const city = "Siegburg";

export const metadata: Metadata = {
  title: `KFZ-Gutachter Siegburg – Kostenlos & Schnell | UnfallExperten`,
  description: `Unfall in Siegburg? Ihr KFZ-Gutachter vor Ort. Kostenloses Unfallgutachten für Geschädigte, schnelle Abwicklung, 24/7 erreichbar.`,
};

export default function StandortDetail() {
  const data: StandortData = {
    city: "Siegburg",
    slug: "siegburg",
    heroSubline: "Wir sind schnell bei Ihnen vor Ort – professionelle Unfallgutachten & Schadensbewertung in Siegburg und Umgebung.",
    trustText: "Für Geschädigte kostenlos – die gegnerische Versicherung übernimmt in der Regel sämtliche Kosten. Kein Risiko, kein Stress.",
    introParagraph: "Sie hatten einen unverschuldeten Autounfall in Siegburg? Unsere unabhängigen Gutachter-Experten sind schnell bei Ihnen vor Ort, um den Schaden professionell aufzunehmen. Mit unserer vollumfänglichen Begutachtung sichern Sie sich alle Ansprüche gegenüber der gegnerischen Versicherung – absolut stressfrei und zuverlässig.",
    areas: [

      { city: 'Kaldauen', time: 'ca. 45 Min vor Ort' },
      { city: 'Stallberg', time: 'ca. 40 Min vor Ort' },
      { city: 'Braschoß', time: 'ca. 45 Min vor Ort' },
      { city: 'Wolsdorf', time: 'ca. 40 Min vor Ort' },
      { city: 'Zange', time: 'ca. 40 Min vor Ort' },
      { city: 'Siegburg-Zentrum', time: 'ca. 40 Min vor Ort' },
        ],
    otherCities: [
      { name: "Rheinbach", slug: "rheinbach" },
      { name: "Bornheim", slug: "bornheim" },
      { name: "Köln", slug: "koeln" },
      { name: "Hennef", slug: "hennef" },
      { name: "Swisttal", slug: "swisttal" }
    ],
    faqs: [
      {
        q: "Was kostet ein Gutachten in Siegburg?",
        a: "Bei einem unverschuldeten Unfall ist das Gutachten für Sie komplett kostenlos. Die gegnerische Versicherung ist gesetzlich verpflichtet, die Kosten für den KFZ-Gutachter in Siegburg zu übernehmen."
      },
      {
        q: "Wie schnell sind Sie vor Ort in Siegburg?",
        a: "Durch unsere lokale Präsenz sind unsere Gutachter-Experten in Siegburg und Umgebung meist innerhalb von ca. 15 Minuten bei Ihnen am Unfallort, zu Hause oder in der Werkstatt."
      },
      {
        q: "Wer übernimmt die Kosten nach einem Unfall?",
        a: "Sind Sie nicht der Unfallverursacher, muss die Haftpflichtversicherung des Verursachers für alle anfallenden Kosten aufkommen. Dies schließt Reparaturkosten, Rechtsanwalt, Mietwagen und natürlich Ihren regionalen Gutachter ein."
      },
      {
        q: "Kann ich Sie direkt kontaktieren?",
        a: "Ja, wir sind 24/7 für Sie erreichbar. Rufen Sie uns direkt an oder schreiben Sie uns eine Nachricht via WhatsApp, und wir kümmern uns umgehend um Ihren Fall in Siegburg."
      },
      {
        q: "Wie läuft ein Gutachten ab?",
        a: "Nach Ihrer Kontaktaufnahme besichtigen wir Ihr Fahrzeug vor Ort in Siegburg. Wir dokumentieren alle Schäden detailliert, kalkulieren Reparaturkosten und Wertminderung und übermitteln das fertige Gutachten direkt an die Versicherung."
      },
      { q: 'Sind Sie in allen Stadtteilen von Siegburg und Umgebung mobil im Einsatz?', a: 'Selbstverständlich. Wir begutachten Fahrzeuge im gesamten Stadtgebiet und näheren Umkreis ohne zusätzliche Anfahrtskosten.' },
      { q: 'Muss ich den Gutachter der gegnerischen Versicherung akzeptieren?', a: 'Auf keinen Fall. Laut § 249 BGB haben Sie als Unfallopfer das Recht auf freie Gutachterwahl. Gutachter der Gegenpartei vertreten oftmals deren Interessen. Wir als UnfallExperten arbeiten dagegen zu 100 % unabhängig und ausschließlich in Ihrem Sinne.' },
      { q: 'Reicht nach einem Unfall nicht auch ein einfacher Kostenvoranschlag?', a: 'Ein Kostenvoranschlag einer Werkstatt erfasst nur die reinen Reparaturkosten. Für eine umfassende rechtliche Absicherung, die auch Wertminderung und Nutzungsausfall berücksichtigt, ist ab einer Schadenshöhe von ca. 750 Euro ein detailliertes Unfallgutachten dringend zu empfehlen.' },
      { q: 'Führen Sie Begutachtungen in Siegburg auch am Wochenende durch?', a: 'Da ein Autounfall keine Bürozeiten kennt, bieten wir Ihnen einen durchgehenden 24/7-Notfallservice. Dadurch stellen wir sicher, dass Sie auch an Wochenenden oder Feiertagen schnelle fachmännische Hilfe erhalten.' },
      { q: 'Was kann ich tun, wenn die Versicherung Rechnungskürzungen vornimmt?', a: 'Pauschal vorgenommene Kürzungen seitens der Versicherung kommen regelmäßig vor. Mit dem detaillierten und rechtssicheren Schadengutachten der UnfallExperten haben Sie jedoch die perfekte Beweisgrundlage, um Ihre legitimen Forderungen notfalls mithilfe eines Verkehrsanwalts in voller Höhe durchzusetzen.' },
      { q: 'Ab welcher Schadenssumme sollte ich Ihren Gutachterservice rufen?', a: 'Sobald ein Schaden die sogenannte Bagatellgrenze von etwa 750 Euro überschreitet, lohnt sich in jedem Fall ein unabhängiges Gutachten. Sollten Sie sich unsicher sein, rufen Sie uns einfach an – wir beraten Sie völlig unverbindlich, was für Ihren Fall sinnvoll ist.' }
    
    ]
  };

  return <StandortPageTemplate data={data} />;
}
