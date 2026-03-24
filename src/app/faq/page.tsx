import ActionLink from '@/components/ui/ActionLink';
import FaqList from '@/components/ui/FaqList';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';
import { faqGroups } from '@/data/siteContent';
import PageHeading from '@/sections/shared/PageHeading';
import { typeStyles } from '@/theme/typeStyles';
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
        <Box sx={{ maxWidth: 980, display: 'grid', gap: 4.5 }}>
          {faqGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 0.04}>
              <Box sx={{ display: 'grid', gap: 1.3 }}>
                <Box component="h2" sx={{ ...typeStyles.h3, fontSize: '1.3rem', color: 'brand.brown' }}>
                  {group.title}
                </Box>
                <FaqList items={group.items} defaultOpenIndex={groupIndex === 0 ? 0 : undefined} />
              </Box>
            </Reveal>
          ))}

          <Reveal delay={0.16}>
            <Box
              sx={{
                mt: 1,
                p: { xs: 3.2, md: 4.2 },
                border: 1,
                borderColor: 'brand.petroleum',
                borderRadius: 1.75,
                backgroundColor: 'brand.petroleum',
                display: 'grid',
                gap: 1.5,
                justifyItems: 'center',
                textAlign: 'center',
              }}
            >
              <Box component="p" sx={{ ...typeStyles.body1, color: 'background.paper', maxWidth: 620, opacity: 0.92 }}>
                Si todavía tenés dudas, en consulta evaluamos tu caso y definimos un plan claro para vos.
              </Box>
              <ActionLink href="/contacto" label="Quiero agendar mi consulta" variant="secondary" />
            </Box>
          </Reveal>
        </Box>
      </SectionBlock>
    </>
  );
}
