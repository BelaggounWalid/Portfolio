import { SkillCategory } from '../../types';

interface SkillCardProps {
  category: SkillCategory;
  isDark: boolean;
}

export default function SkillCard({ category, isDark }: SkillCardProps) {
  return (
    <div className={`rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 backdrop-blur-sm ${
      isDark ? 'bg-gray-800/80 hover:bg-gray-800' : 'bg-white hover:bg-white'
    }`}>
      <h3 className={`text-xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
          category.iconBg || (isDark ? 'bg-gray-700' : 'bg-slate-100')
        }`}>
          <span className={category.iconColor || (isDark ? 'text-gray-300' : 'text-slate-600')}>{category.icon}</span>
        </div>
        {category.title}
      </h3>
      {category.type === 'tags' ? (
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {category.items?.map((item) => (
            <div key={item.name}>
              <p className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.name}</p>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{item.detail}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
