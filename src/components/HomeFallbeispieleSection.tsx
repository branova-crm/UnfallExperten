import { SHOW_HOME_CASE_STUDIES } from '@/lib/content-flags';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import HomeImageCarousel from '@/components/HomeImageCarousel';

/**
 * Startseite: Fallbeispiele oder temporäre Bildergalerie.
 * Wiederherstellung: SHOW_HOME_CASE_STUDIES in content-flags.ts auf true setzen.
 */
export default function HomeFallbeispieleSection() {
  if (SHOW_HOME_CASE_STUDIES) {
    return <CaseStudiesSection />;
  }

  return <HomeImageCarousel />;
}
