import { Github, Linkedin, Download } from 'lucide-react';
import { useScrollTo } from '../../hooks/useScrollTo';

interface HeroProps {
  isDark: boolean;
  isVisible: boolean;
}

export default function Hero({ isDark, isVisible }: HeroProps) {
  const scrollToSection = useScrollTo();

  return (
    <section id="home" className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className={`text-5xl sm:text-6xl font-bold leading-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Anis{' '}
              <span className={`bg-gradient-to-r ${
                isDark
                  ? 'from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-shimmer'
                  : 'from-blue-600 to-cyan-600 bg-clip-text text-transparent'
              }`}>
                BELAGGOUN
              </span>
            </h1>
            <p className={`text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
              Étudiant en Master Informatique à Lyon 1, en alternance chez Ekoalu en IA & Automatisation. Passionné par l'Intelligence Artificielle et le développement web.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/CV_Anis.pdf"
                download
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                  isDark
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                <Download size={20} />
                Télécharger CV
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className={`inline-flex items-center gap-2 border-2 px-6 py-3 rounded-lg transition-all ${
                  isDark
                    ? 'border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white'
                    : 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
                }`}
              >
                Me contacter
              </button>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/BelaggounWalid" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110 ${
                isDark ? 'bg-gray-800' : 'bg-white'
              }`}>
                <Github size={24} className={isDark ? 'text-gray-300' : 'text-slate-700'} />
              </a>
              <a href="https://www.linkedin.com/in/anis-belaggoun-1aa4a72a4/" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110 ${
                isDark ? 'bg-gray-800' : 'bg-white'
              }`}>
                <Linkedin size={24} className={isDark ? 'text-gray-300' : 'text-slate-700'} />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 animate-pulse-once">
              <img
                src="/WhatsApp Image 2025-10-27 at 22.37.35.jpeg"
                alt="Anis BELAGGOUN"
                className="w-full h-full object-cover hover:brightness-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
