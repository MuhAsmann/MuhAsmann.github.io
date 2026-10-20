import { TECHNOLOGIES, FAMILIAR_TECHNOLOGIES } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import TechDetails from '@/components/data-display/tech-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const SkillsSection = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Skills" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          The skills, tools and technologies I work with:
        </Typography>
      </div>

      <div className="grid grid-cols-3 gap-y-4 md:grid-cols-5 md:gap-y-8 lg:grid-cols-5 lg:gap-y-12">
        {TECHNOLOGIES.map((technology, index) => (
          <TechDetails {...technology} key={index} />
        ))}
      </div>

      <div className="flex flex-col items-center gap-2 pt-8">
        <Typography variant="subtitle" className="text-center font-medium text-gray-700 dark:text-gray-300">
          Also familiar with:
        </Typography>
      </div>

      <div className="grid grid-cols-3 gap-y-4 md:grid-cols-5 md:gap-y-8 lg:grid-cols-5 lg:gap-y-12">
        {FAMILIAR_TECHNOLOGIES.map((technology, index) => (
          <TechDetails {...technology} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default SkillsSection;
