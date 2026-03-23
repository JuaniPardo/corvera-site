import FaqList from '@/components/ui/FaqList';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';
import { faqItems } from '@/data/siteContent';
import PageHeading from '@/sections/shared/PageHeading';

export default function FaqPage() {
  return (
    <>
      <PageHeading
        title="FAQ"
        description="Preguntas reales y respuestas directas sobre consulta, procedimientos, tiempos y seguimiento."
        compact
      />

      <SectionBlock size="compact">
        <Reveal>
          <FaqList items={faqItems} />
        </Reveal>
      </SectionBlock>
    </>
  );
}
