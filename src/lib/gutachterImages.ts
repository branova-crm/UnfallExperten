export type GutachterImage = {
  src: string;
  alt: string;
  title: string;
  vehicle: string;
  series: string;
};

export type GutachterImageSection = {
  title: string;
  subtitle: string;
  vehicle: string;
  images: GutachterImage[];
};

type GutachterImageGroup = {
  slug: string;
  vehicle: string;
  series: string;
  details: string[];
};

const BASE_PATH = '/images/gutachter-nrw-euskirchen';

const imageGroups: GutachterImageGroup[] = [
  {
    slug: 'mercedes-glc-coupe-grau-schaden',
    vehicle: 'Mercedes GLC Coupe grau',
    series: 'Mercedes GLC Coupe Schadenaufnahme',
    details: [
      'Heck- und Seitenansicht eines grauen Mercedes GLC Coupe bei der Schadenaufnahme durch einen Kfz-Gutachter in NRW und Euskirchen.',
      'Heckansicht eines grauen Mercedes GLC Coupe zur Dokumentation eines Fahrzeugschadens durch einen Gutachter in NRW.',
      'Frontansicht eines grauen Mercedes GLC Coupe als Referenzbild fur ein Kfz-Gutachten in Euskirchen.',
      'Front- und Seitenansicht eines Mercedes GLC Coupe bei der Begutachtung durch einen Gutachter in NRW.',
      'Detailaufnahme eines markierten Lackschadens am grauen Mercedes GLC Coupe fur ein Gutachten in Euskirchen.',
      'Nahaufnahme eines markierten Karosserieschadens am Mercedes GLC Coupe durch einen Kfz-Gutachter in NRW.',
    ],
  },
  {
    slug: 'bmw-x3-schwarz-schaden',
    vehicle: 'BMW X3 schwarz',
    series: 'BMW X3 Schadenaufnahme',
    details: [
      'Heck- und Seitenansicht eines schwarzen BMW X3 bei der Schadenaufnahme durch einen Gutachter in NRW und Euskirchen.',
      'Detailaufnahme von Frontbereich und Rad eines schwarzen BMW X3 fur ein Kfz-Gutachten in NRW.',
      'Frontansicht eines schwarzen BMW X3 als Referenzbild fur einen Gutachter in Euskirchen.',
      'Front- und Seitenansicht eines BMW X3 bei der professionellen Fahrzeugbegutachtung in NRW.',
      'Heckansicht eines schwarzen BMW X3 zur Dokumentation eines Schadensfalls durch einen Gutachter.',
      'Nahaufnahme markierter Kratzer am Frontbereich eines BMW X3 fur ein Gutachten in Euskirchen.',
      'Detailbild markierter Spuren am Frontgitter eines schwarzen BMW X3 bei der Schadenprufung.',
      'Nahaufnahme eines markierten Frontschadens am BMW X3 durch einen Kfz-Gutachter in NRW.',
      'Detailaufnahme von Schadenspuren am vorderen Karosseriebereich eines schwarzen BMW X3.',
    ],
  },
  {
    slug: 'mazda-mx30-grau-schaden',
    vehicle: 'Mazda MX-30 grau',
    series: 'Mazda MX-30 Schadenaufnahme',
    details: [
      'Heckansicht eines grauen Mazda MX-30 mit Messskala bei der Schadenaufnahme durch einen Gutachter in NRW.',
      'Heck- und Seitenansicht eines Mazda MX-30 als Referenzfoto fur ein Kfz-Gutachten in Euskirchen.',
      'Front- und Seitenansicht eines grauen Mazda MX-30 bei der Begutachtung durch einen Kfz-Gutachter.',
      'Frontansicht eines Mazda MX-30 zur Dokumentation eines Fahrzeugschadens in NRW.',
      'Detailaufnahme am hinteren Karosseriebereich eines Mazda MX-30 fur ein Gutachten in Euskirchen.',
      'Nahaufnahme von Lack- und Karosseriespuren am Heck eines grauen Mazda MX-30.',
      'Detailbild der Ruckleuchte und Karosseriekante eines Mazda MX-30 bei der Schadenprufung.',
      'Nahaufnahme der Ruckleuchte eines Mazda MX-30 zur gutachterlichen Dokumentation.',
      'Heck- und Seitenansicht eines grauen Mazda MX-30 als Abschlussbild der Schadenaufnahme.',
    ],
  },
  {
    slug: 'vw-golf-schwarz-schaden',
    vehicle: 'VW Golf schwarz',
    series: 'VW Golf Schadenaufnahme',
    details: [
      'Nahaufnahme eines markierten Schadens am schwarzen VW Golf fur ein Kfz-Gutachten in NRW.',
      'Heck- und Seitenansicht eines schwarzen VW Golf bei der Schadenaufnahme durch einen Gutachter.',
      'Heckansicht eines VW Golf zur Dokumentation eines Schadensfalls in Euskirchen und NRW.',
      'Frontansicht eines schwarzen VW Golf als Referenzbild fur ein unabhangiges Gutachten.',
      'Seitenansicht eines schwarzen VW Golf mit Messskala bei der professionellen Schadenaufnahme.',
      'Detailaufnahme markierter Kratzer am Scheinwerferbereich eines schwarzen VW Golf.',
      'Nahaufnahme von Lackspuren am Frontbereich eines VW Golf fur die gutachterliche Dokumentation.',
      'Front- und Seitenansicht eines schwarzen VW Golf im Rahmen eines Kfz-Gutachtens in NRW.',
      'Detailbild eines markierten Schadens am Radlauf und Reifenbereich eines VW Golf.',
      'Nahaufnahme von Kratzern am schwarzen VW Golf zur Beweissicherung durch einen Gutachter.',
    ],
  },
  {
    slug: 'vw-polo-blau-schaden',
    vehicle: 'VW Polo blau',
    series: 'VW Polo Schadenaufnahme',
    details: [
      'Heck- und Seitenansicht eines blauen VW Polo bei der Schadenaufnahme durch einen Gutachter in NRW.',
      'Heckansicht eines blauen VW Polo zur Dokumentation eines Fahrzeugschadens in Euskirchen.',
      'Front- und Seitenansicht eines blauen VW Polo als Referenzbild fur ein Kfz-Gutachten.',
      'Frontansicht eines VW Polo bei der professionellen Begutachtung durch einen Kfz-Gutachter in NRW.',
      'Seitenansicht eines blauen VW Polo mit deutlich sichtbarem Tur- und Seitenschaden.',
      'Detailaufnahme des Seitenschadens am blauen VW Polo fur ein Gutachten in Euskirchen.',
      'Nahaufnahme markierter Kratzer am Spiegelbereich eines blauen VW Polo.',
      'Detailbild eines markierten Schadens am Aussenspiegel eines VW Polo bei der Schadenprufung.',
      'Nahaufnahme von Felge und Reifen eines blauen VW Polo zur gutachterlichen Dokumentation.',
      'Detailaufnahme markierter Lackspuren am Radlauf eines blauen VW Polo.',
      'Nahaufnahme von Reifen- und Felgenbereich eines VW Polo mit markierten Schadenspuren.',
      'Seitenansicht eines blauen VW Polo mit Messskala zur Dokumentation des Unfallschadens.',
      'Seitenansicht des blauen VW Polo mit Messlatte fur ein Kfz-Gutachten in NRW.',
      'Detailaufnahme des Einstiegsbereichs eines VW Polo bei der Schadenaufnahme.',
      'Nahaufnahme von Lack- und Kratzspuren am Schweller eines blauen VW Polo.',
      'Detailbild von Karosseriespuren im Tureinstieg eines VW Polo zur Beweissicherung.',
      'Nahaufnahme eines markierten Schadens am Radlauf und Seitenbereich eines blauen VW Polo.',
      'Detailaufnahme von Kratzern im Tureinstieg eines VW Polo durch einen Gutachter in Euskirchen.',
      'Nahaufnahme eines markierten Seitenschadens am blauen VW Polo im Bereich Radlauf und Tur.',
      'Detailbild von Kratzspuren am unteren Schweller eines blauen VW Polo.',
      'Nahaufnahme eines markierten Lackschadens am Tureinstieg eines VW Polo.',
      'Detailaufnahme des Tureinstiegs eines blauen VW Polo als Referenz fur ein Gutachten.',
      'Nahaufnahme eines markierten Kratzers am Schweller eines blauen VW Polo fur ein Kfz-Gutachten.',
    ],
  },
];

function formatSequence(index: number) {
  return String(index + 1).padStart(2, '0');
}

function createReferenceImage(group: GutachterImageGroup, index: number): GutachterImage {
  const sequence = formatSequence(index);

  return {
    src: `${BASE_PATH}/gutachter-nrw-euskirchen-${group.slug}-${sequence}.jpeg`,
    alt: group.details[index],
    title: `Gutachter NRW Euskirchen - ${group.vehicle} Schaden ${sequence}`,
    vehicle: group.vehicle,
    series: group.series,
  };
}

export const gutachterReferenceImageSections: GutachterImageSection[] = imageGroups.map(
  (group) => ({
    title: group.series,
    subtitle: `${group.vehicle} - ${group.details.length} Bilder aus der Schadenaufnahme`,
    vehicle: group.vehicle,
    images: group.details.map((_, index) => createReferenceImage(group, index)),
  })
);

export const gutachterReferenceImages: GutachterImage[] =
  gutachterReferenceImageSections.flatMap((section) => section.images);

export type HomeReferencePreview = GutachterImage & {
  sectionIndex: number;
  imageCount: number;
};

/** Eine Vorschau pro Referenzserie für die Startseite */
export const homeReferencePreviews: HomeReferencePreview[] =
  gutachterReferenceImageSections.map((section, sectionIndex) => ({
    ...section.images[0],
    sectionIndex,
    imageCount: section.images.length,
  }));
