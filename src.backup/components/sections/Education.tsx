import SectionWrapper from '../ui/SectionWrapper';
import { educationEntries } from '../../data/education';

interface EducationProps {
  isDark: boolean;
  isVisible: boolean;
}

export default function Education({ isDark, isVisible }: EducationProps) {
  return (
    <SectionWrapper id="education" isDark={isDark} isVisible={isVisible}>
      <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
        Formation
      </h2>
      <div className="space-y-8">
        {educationEntries.map((entry) => (
          <div
            key={entry.id}
            className={`rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-l-4 ${entry.borderColor} ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex items-start gap-4">
                {entry.logo && (
                  <img src={entry.logo} alt={entry.institution} className="w-16 h-16 object-contain" />
                )}
                <div>
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {entry.title}
                  </h3>
                  <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                    {entry.institution}
                  </p>
                </div>
              </div>
              <span className={`inline-block px-4 py-2 ${entry.badgeBg} ${entry.badgeText} rounded-full font-medium whitespace-nowrap`}>
                {entry.period}
              </span>
            </div>
            <p className={`mb-2 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{entry.location}</p>
            {entry.description && (
              <p className={`font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                {entry.description}
              </p>
            )}
            {entry.details && (
              <p className={isDark ? 'text-gray-300' : 'text-slate-700'}>{entry.details}</p>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
