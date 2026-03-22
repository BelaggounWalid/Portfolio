import { MapPin } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

interface AboutProps {
  isDark: boolean;
  isVisible: boolean;
}

export default function About({ isDark, isVisible }: AboutProps) {
  return (
    <SectionWrapper id="about" isDark={isDark} isVisible={isVisible} hasBg>
      <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
        À propos de moi
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
            Je suis étudiant en Master Informatique à l'Université Claude Bernard Lyon 1, avec une forte passion pour l'Intelligence Artificielle et le développement web.
          </p>
          <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
            Actuellement en alternance chez <span className="font-semibold text-blue-600">Ekoalu</span> en IA et Automatisation, je développe des outils intelligents pour l'industrie de la menuiserie aluminium, alliant expertise technique et innovation.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
              isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-slate-50 hover:bg-slate-100'
            }`}>
              <MapPin className="text-blue-600" size={24} />
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Localisation</p>
                <p className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>Villeurbanne, France</p>
              </div>
            </div>
            <div className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
              isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-slate-50 hover:bg-slate-100'
            }`}>
              <span className="text-blue-600 text-2xl">🎓</span>
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Âge</p>
                <p className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>22 ans</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/WhatsApp Image 2025-10-27 at 22.37.06.jpeg"
            alt="Profile"
            className="rounded-xl shadow-lg w-full h-full object-cover aspect-square hover:scale-[1.02] transition-transform duration-300 hover:shadow-2xl hover:brightness-110"
          />
          <img
            src="/WhatsApp Image 2025-10-27 at 22.38.15.jpeg"
            alt="Travel"
            className="rounded-xl shadow-lg w-full h-full object-cover aspect-square hover:scale-[1.02] transition-transform duration-300 hover:shadow-2xl hover:brightness-110"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
