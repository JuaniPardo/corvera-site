import FaqList from '@/components/ui/FaqList';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';
import { faqItems } from '@/data/siteContent';
import PageHeading from '@/sections/shared/PageHeading';
import { Box } from '@mui/system';

export default function FaqPage() {
  return (
    <>
      <PageHeading
        title="FAQ"
        description="Respuestas claras sobre consulta, procedimientos, tiempos y seguimiento para tomar decisiones con tranquilidad."
        compact
      />

      <SectionBlock size="compact">
        <Reveal>
          <Box sx={{ maxWidth: 980 }}>
            <FaqList items={faqItems} />
          </Box>
        </Reveal>
      </SectionBlock>
    </>
  );
}
