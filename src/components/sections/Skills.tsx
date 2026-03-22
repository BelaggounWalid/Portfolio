import SectionWrapper from '../ui/SectionWrapper';
import SkillCard from '../ui/SkillCard';
import { skillCategories } from '../../data/skills';

interface SkillsProps {
  isDark: boolean;
  isVisible: boolean;
}

export default function Skills({ isDark, isVisible }: SkillsProps) {
  return (
    <SectionWrapper id="skills" isDark={isDark} isVisible={isVisible} hasBg>
      <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
        Compétences
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <SkillCard key={category.id} category={category} isDark={isDark} />
        ))}
      </div>
    </SectionWrapper>
  );
}
