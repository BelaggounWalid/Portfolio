import { Briefcase } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import { experienceEntries } from '../../data/experience';

interface ExperienceProps {
  isDark: boolean;
  isVisible: boolean;
}

export default function Experience({ isDark, isVisible }: ExperienceProps) {
  return (
    <SectionWrapper id="experience" isDark={isDark} isVisible={isVisible} hasBg>
      <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
        Expérience Professionnelle
      </h2>
      <div className="space-y-8">
        {experienceEntries.map((entry) => (
          <div
            key={entry.id}
            className={`rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 ${entry.borderColor} ${
              isDark ? 'bg-gray-900/80' : 'bg-white'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  isDark ? 'bg-blue-600/20' : 'bg-blue-50'
                }`}>
                  <Briefcase className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {entry.title}
                  </h3>
                  <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                    {entry.company}
                  </p>
                </div>
              </div>
              <span className={`inline-block px-4 py-2 ${entry.badgeBg} ${entry.badgeText} rounded-full font-medium whitespace-nowrap`}>
                {entry.period}
              </span>
            </div>
            <p className={`mb-2 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{entry.location}</p>
            <p className={`font-medium mb-4 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
              {entry.description}
            </p>
            <ul className="space-y-2 mb-6">
              {entry.achievements.map((achievement, i) => (
                <li key={i} className={`flex items-start gap-2 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                  <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isDark ? 'bg-gray-700 text-gray-300' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
