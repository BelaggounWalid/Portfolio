import { Mail, MapPin, Github, Linkedin, Download } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

interface ContactProps {
  isDark: boolean;
  isVisible: boolean;
}

export default function Contact({ isDark, isVisible }: ContactProps) {
  return (
    <SectionWrapper id="contact" isDark={isDark} isVisible={isVisible}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Me contacter
        </h2>

        <div className={`rounded-2xl shadow-xl p-8 md:p-12 border ${
          isDark ? 'bg-gray-900 border-gray-700' : 'bg-gradient-to-br from-slate-50 to-white border-slate-200'
        }`}>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <a
              href="mailto:aniswalidbelaggoun@gmail.com"
              className={`flex items-center gap-4 p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-[1.02] border ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-slate-100'
              }`}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="text-blue-600" size={24} />
              </div>
              <div className="overflow-hidden">
                <p className={`text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Email</p>
                <p className={`font-medium truncate ${isDark ? 'text-white' : 'text-slate-900'}`}>aniswalidbelaggoun@gmail.com</p>
              </div>
            </a>

            <div className={`flex items-center gap-4 p-6 rounded-xl shadow-md border ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-slate-100'
            }`}>
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.054a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.007-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </div>
              <div>
                <p className={`text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Discord</p>
                <p className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>anisbelaggoun_46805</p>
              </div>
            </div>
          </div>

          <div className={`flex items-center gap-4 p-6 rounded-xl shadow-md border mb-8 ${
            isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-slate-100'
          }`}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
              isDark ? 'bg-gray-700' : 'bg-slate-100'
            }`}>
              <MapPin className={isDark ? 'text-gray-300' : 'text-slate-600'} size={24} />
            </div>
            <div>
              <p className={`text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Localisation</p>
              <p className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>Villeurbanne (69100), France</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/BelaggounWalid"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                isDark
                  ? 'bg-gray-700 hover:bg-gray-600 text-white'
                  : 'bg-slate-900 hover:bg-slate-800 text-white'
              }`}
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/anis-belaggoun-1aa4a72a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
            Actuellement en alternance chez Ekoalu — IA & Automatisation
          </p>
          <a
            href="/CV_Anis.pdf"
            download
            className={`inline-flex items-center gap-2 font-medium transition-colors ${
              isDark ? 'text-blue-400 hover:text-blue-300' : 'text-slate-900 hover:text-slate-700'
            }`}
          >
            <Download size={20} />
            Télécharger mon CV complet
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
