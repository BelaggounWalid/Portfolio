import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Menu, X, Moon, Sun, GitBranch } from 'lucide-react';
import Chatbot from './components/Chatbot';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark
        ? 'bg-gradient-to-br from-amber-50 to-orange-50'
        : 'bg-gradient-to-br from-slate-50 to-slate-100'
    }`}>
      <nav className={`fixed top-0 left-0 right-0 backdrop-blur-md shadow-sm z-50 transition-colors ${
        isDark ? 'bg-amber-50/80' : 'bg-white/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-2xl font-bold bg-gradient-to-r transition-all ${
                isDark
                  ? 'from-amber-600 to-orange-600 bg-clip-text text-transparent'
                  : 'from-slate-700 to-slate-900 bg-clip-text text-transparent hover:from-slate-600 hover:to-slate-800'
              }`}
            >
              AB
            </button>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className={`font-medium transition-colors ${
                isDark ? 'text-amber-800 hover:text-amber-900' : 'text-slate-700 hover:text-slate-900'
              }`}>À propos</button>
              <button onClick={() => scrollToSection('education')} className={`font-medium transition-colors ${
                isDark ? 'text-amber-800 hover:text-amber-900' : 'text-slate-700 hover:text-slate-900'
              }`}>Formation</button>
              <button onClick={() => scrollToSection('projects')} className={`font-medium transition-colors ${
                isDark ? 'text-amber-800 hover:text-amber-900' : 'text-slate-700 hover:text-slate-900'
              }`}>Projets</button>
              <button onClick={() => scrollToSection('skills')} className={`font-medium transition-colors ${
                isDark ? 'text-amber-800 hover:text-amber-900' : 'text-slate-700 hover:text-slate-900'
              }`}>Compétences</button>
              <button onClick={() => scrollToSection('contact')} className={`font-medium transition-colors ${
                isDark ? 'text-amber-800 hover:text-amber-900' : 'text-slate-700 hover:text-slate-900'
              }`}>Contact</button>
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg transition-colors ${
                  isDark ? 'bg-orange-100 hover:bg-orange-200' : 'bg-slate-100 hover:bg-slate-200'
                }`}
              >
                {isDark ? <Sun size={20} className="text-amber-600" /> : <Moon size={20} className="text-slate-700" />}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg transition-colors ${
                  isDark ? 'bg-orange-100 hover:bg-orange-200' : 'bg-slate-100 hover:bg-slate-200'
                }`}
              >
                {isDark ? <Sun size={20} className="text-amber-600" /> : <Moon size={20} className="text-slate-700" />}
              </button>
              <button
                className={`p-2 rounded-lg transition-colors ${
                  isDark ? 'hover:bg-orange-100' : 'hover:bg-slate-100'
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} className={isDark ? 'text-amber-900' : 'text-slate-900'} /> : <Menu size={24} className={isDark ? 'text-amber-900' : 'text-slate-900'} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className={`md:hidden py-4 space-y-2 border-t ${isDark ? 'border-orange-200' : 'border-slate-200'}`}>
              <button onClick={() => scrollToSection('about')} className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                isDark ? 'text-amber-800 hover:bg-orange-100' : 'text-slate-700 hover:bg-slate-50'
              }`}>À propos</button>
              <button onClick={() => scrollToSection('education')} className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                isDark ? 'text-amber-800 hover:bg-orange-100' : 'text-slate-700 hover:bg-slate-50'
              }`}>Formation</button>
              <button onClick={() => scrollToSection('projects')} className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                isDark ? 'text-amber-800 hover:bg-orange-100' : 'text-slate-700 hover:bg-slate-50'
              }`}>Projets</button>
              <button onClick={() => scrollToSection('skills')} className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                isDark ? 'text-amber-800 hover:bg-orange-100' : 'text-slate-700 hover:bg-slate-50'
              }`}>Compétences</button>
              <button onClick={() => scrollToSection('contact')} className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                isDark ? 'text-amber-800 hover:bg-orange-100' : 'text-slate-700 hover:bg-slate-50'
              }`}>Contact</button>
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className={`text-5xl sm:text-6xl font-bold leading-tight ${
                isDark ? 'text-amber-900' : 'text-slate-900'
              }`}>
                Anis <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">BELAGGOUN</span>
              </h1>
              <p className={`text-xl leading-relaxed ${
                isDark ? 'text-amber-800' : 'text-slate-600'
              }`}>
                Étudiant en Master Informatique à Lyon 1, passionné par l'Intelligence Artificielle et le développement web.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/CV_Anis.pdf"
                  download
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                    isDark
                      ? 'bg-amber-600 hover:bg-amber-700 text-white'
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
                  isDark ? 'bg-orange-50' : 'bg-white'
                }`}>
                  <Github size={24} className={isDark ? 'text-amber-700' : 'text-slate-700'} />
                </a>
                <a href="https://linkedin.com/in/anisBelaggoun" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110 ${
                  isDark ? 'bg-orange-50' : 'bg-white'
                }`}>
                  <Linkedin size={24} className={isDark ? 'text-amber-700' : 'text-slate-700'} />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/WhatsApp Image 2025-10-27 at 22.37.35.jpeg"
                  alt="Anis BELAGGOUN"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-orange-50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
              <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-amber-900' : 'text-slate-900'}`}>À propos de moi</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className={`text-lg leading-relaxed ${isDark ? 'text-amber-800' : 'text-slate-600'}`}>
                Je suis étudiant en Master Informatique à l'Université Claude Bernard Lyon 1, avec une forte passion pour l'Intelligence Artificielle et le développement web.
              </p>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-amber-800' : 'text-slate-600'}`}>
                Avec une expérience significative en développement web et l'IA générative, je recherche actuellement une alternance à partir de septembre 2025 pour mettre en pratique mes compétences et approfondir mon expertise.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className={`flex items-center gap-3 p-4 rounded-lg ${isDark ? 'bg-amber-100' : 'bg-slate-50'}`}>
                  <MapPin className="text-blue-600" size={24} />
                  <div>
                    <p className={`text-sm ${isDark ? 'text-amber-700' : 'text-slate-500'}`}>Localisation</p>
                    <p className={`font-medium ${isDark ? 'text-amber-900' : 'text-slate-900'}`}>Villeurbanne, France</p>
                  </div>
                </div>
                <div className={`flex items-center gap-3 p-4 rounded-lg ${isDark ? 'bg-amber-100' : 'bg-slate-50'}`}>
                  <Mail className="text-blue-600" size={24} />
                  <div>
                    <p className={`text-sm ${isDark ? 'text-amber-700' : 'text-slate-500'}`}>Âge</p>
                    <p className={`font-medium ${isDark ? 'text-amber-900' : 'text-slate-900'}`}>21 ans</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/WhatsApp Image 2025-10-27 at 22.37.06.jpeg"
                alt="Profile"
                className="rounded-xl shadow-lg w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-300"
              />
              <img
                src="/WhatsApp Image 2025-10-27 at 22.38.15.jpeg"
                alt="Travel"
                className="rounded-xl shadow-lg w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
              <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-amber-900' : 'text-slate-900'}`}>Formation</h2>
          <div className="space-y-8">
            <div className={`rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-l-4 border-blue-600 ${isDark ? 'bg-amber-50' : 'bg-white'}`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <img src="/Université_Lyon_1_(logo).svg" alt="Lyon 1" className="w-16 h-16 object-contain" />
                  <div>
                    <h3 className={`text-2xl font-bold ${isDark ? 'text-amber-900' : 'text-slate-900'}`}>Master Informatique</h3>
                    <p className={`text-lg ${isDark ? 'text-amber-800' : 'text-slate-600'}`}>Université Claude Bernard Lyon 1</p>
                  </div>
                </div>
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">Depuis Sept. 2025</span>
              </div>
                <p className={isDark ? 'text-amber-700' : 'text-slate-600'}>Lyon, France</p>
            </div>

            <div className={`rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-l-4 border-cyan-600 ${isDark ? 'bg-amber-50' : 'bg-white'}`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <img src="/Université_d'Avignon_(logo).png" alt="Avignon" className="w-16 h-16 object-contain" />
                  <div>
                    <h3 className={`text-2xl font-bold ${isDark ? 'text-amber-900' : 'text-slate-900'}`}>Licence Informatique</h3>
                    <p className={`text-lg ${isDark ? 'text-amber-800' : 'text-slate-600'}`}>Université d'Avignon</p>
                  </div>
                </div>
                <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full font-medium">Sept. 2023 - 2025</span>
              </div>
              <p className={`mb-2 ${isDark ? 'text-amber-700' : 'text-slate-600'}`}>Avignon, France</p>
                <p className={`font-medium ${isDark ? 'text-amber-800' : 'text-slate-700'}`}>Classé 5ème sur 71 étudiants (15.15/20)</p>
            </div>

            <div className={`rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-l-4 border-slate-600 ${isDark ? 'bg-amber-50' : 'bg-white'}`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <img src="/ESI-SBA_logo_V2.svg" alt="ESI" className="w-16 h-16 object-contain" />
                  <div>
                    <h3 className={`text-2xl font-bold ${isDark ? 'text-amber-900' : 'text-slate-900'}`}>Classe Préparatoire Intégrée</h3>
                    <p className={`text-lg ${isDark ? 'text-amber-800' : 'text-slate-600'}`}>ESI - École Supérieure en Informatique</p>
                  </div>
                </div>
                <span className="inline-block px-4 py-2 bg-slate-100 text-slate-800 rounded-full font-medium">Sept. 2021 - Juin 2023</span>
              </div>
              <p className={`mb-2 ${isDark ? 'text-amber-700' : 'text-slate-600'}`}>Algérie</p>
              <p className={isDark ? 'text-amber-800' : 'text-slate-700'}>Membre du pôle relations externes - Club Ingeniums : Organisation de CTFs et hackathons</p>
            </div>

            <div className={`rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-l-4 border-green-600 ${isDark ? 'bg-amber-50' : 'bg-white'}`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-amber-900' : 'text-slate-900'}`}>Stage de Recherche</h3>
                  <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>Laboratoire de Mathématiques d'Avignon (Institut AGÈS)</p>
                </div>
                <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium">Mai - Juillet 2025</span>
              </div>
              <p className={`font-medium mb-2 ${isDark ? 'text-amber-800' : 'text-slate-700'}`}>Approximate Bayesian Computation pour les processus de Hawkes</p>
              <p className={isDark ? 'text-amber-700' : 'text-slate-600'}>Implémentation d'algorithmes ABC en R et Python pour l'inférence bayésienne. Application à des cas réels en finance et neurosciences.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-amber-50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
              <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-amber-900' : 'text-slate-900'}`}>Projets</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className={`rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 border ${
              isDark ? 'bg-orange-50 border-orange-200' : 'bg-gradient-to-br from-slate-50 to-white border-slate-200'
            }`}>
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">AI</span>
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-amber-900' : 'text-slate-900'}`}>Chatbot RH Intelligent</h3>
                <p className={`mb-4 leading-relaxed ${isDark ? 'text-amber-800' : 'text-slate-600'}`}>
                  Assistant conversationnel basé sur RAG (Retrieval-Augmented Generation) pour les ressources humaines avec LangChain, ChromaDB et Ollama.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Python</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">LangChain</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">LLM</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">RAG</span>
                </div>
                <span className={`inline-flex items-center gap-2 text-sm ${isDark ? 'text-amber-700' : 'text-slate-500'}`}>
                  <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                  En cours
                </span>
              </div>
            </div>

            <div className={`rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 border ${
              isDark ? 'bg-orange-50 border-orange-200' : 'bg-gradient-to-br from-slate-50 to-white border-slate-200'
            }`}>
              <div className="p-8">
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">SH</span>
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-amber-900' : 'text-slate-900'}`}>StudyHive</h3>
                <p className={`mb-4 leading-relaxed ${isDark ? 'text-amber-800' : 'text-slate-600'}`}>
                  Plateforme collaborative inspirée de Watch2Gether avec lecture YouTube synchronisée, WebRTC, chat en temps réel et gestion des rôles.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">React</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">Node.js</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">Socket.IO</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">WebRTC</span>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://studyhive-frontend.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium"
                  >
                    <ExternalLink size={18} />
                    Voir le projet
                  </a>
                  <a
                    href="https://github.com/Mohammed-Djellouli/StudyHive"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 font-medium ${
                      isDark ? 'text-amber-800 hover:text-amber-900' : 'text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    <Github size={18} />
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>

            <div className={`rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 border ${
              isDark ? 'bg-orange-50 border-orange-200' : 'bg-gradient-to-br from-slate-50 to-white border-slate-200'
            }`}>
              <div className="p-8">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">W</span>
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-amber-900' : 'text-slate-900'}`}>Clone de Wordle Intelligent</h3>
                <p className={`mb-4 leading-relaxed ${isDark ? 'text-amber-800' : 'text-slate-600'}`}>
                  Clone de Wordle en Java avec système d'indices intelligent basé sur Word2Vec pour suggérer des mots sémantiquement proches.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Java</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Python</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Word2Vec</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Flask</span>
                </div>
                <a
                  href="https://gitlab.com/groupe_74/wordleproject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 font-medium ${
                    isDark ? 'text-amber-700 hover:text-amber-900' : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <GitBranch size={18} />
                  GitLab Repo
                </a>
              </div>
            </div>

            <div className={`rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 border ${
              isDark ? 'bg-orange-50 border-orange-200' : 'bg-gradient-to-br from-slate-50 to-white border-slate-200'
            }`}>
              <div className="p-8">
                <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">DS</span>
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-amber-900' : 'text-slate-900'}`}>Analyse Factorielle</h3>
                <p className={`mb-4 leading-relaxed ${isDark ? 'text-amber-800' : 'text-slate-600'}`}>
                  Étude des températures dans les capitales européennes avec ACP, CAH, k-means et HCPC. Visualisations et rapports en R.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-sm font-medium">R</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-sm font-medium">ACP</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-sm font-medium">RMarkdown</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-sm font-medium">LaTeX</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
              <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-amber-900' : 'text-slate-900'}`}>Compétences</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className={`rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow ${isDark ? 'bg-orange-50' : 'bg-white'}`}>
              <h3 className={`text-xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-amber-900' : 'text-slate-900'}`}>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-xl">🤖</span>
                </div>
                Intelligence Artificielle
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>Python</span>
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>Pandas</span>
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>NumPy</span>
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>Scikit-learn</span>
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>NLP</span>
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>HuggingFace</span>
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>CNN/MLP</span>
              </div>
            </div>

            <div className={`rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow ${isDark ? 'bg-orange-50' : 'bg-white'}`}>
              <h3 className={`text-xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-amber-900' : 'text-slate-900'}`}>
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <span className="text-cyan-600 text-xl">💻</span>
                </div>
                Développement Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>React.js</span>
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>JavaScript</span>
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>TypeScript</span>
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>HTML/CSS</span>
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>Tailwind CSS</span>
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>Bootstrap</span>
              </div>
            </div>

            <div className={`rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow ${isDark ? 'bg-orange-50' : 'bg-white'}`}>
              <h3 className={`text-xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-amber-900' : 'text-slate-900'}`}>
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 text-xl">🔧</span>
                </div>
                Développement Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>Node.js</span>
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>Express.js</span>
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>Spring Boot</span>
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>Flask</span>
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>MongoDB</span>
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>PostgreSQL</span>
              </div>
            </div>

            <div className={`rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow ${isDark ? 'bg-orange-50' : 'bg-white'}`}>
              <h3 className={`text-xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-amber-900' : 'text-slate-900'}`}>
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 text-xl">⚙️</span>
                </div>
                DevOps & Outils
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>Git</span>
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>Docker</span>
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>Jenkins</span>
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>CI/CD</span>
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>Agile/SCRUM</span>
              </div>
            </div>

            <div className={`rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow ${isDark ? 'bg-orange-50' : 'bg-white'}`}>
              <h3 className={`text-xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-amber-900' : 'text-slate-900'}`}>
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 text-xl">📊</span>
                </div>
                Data Science
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>Excel VBA</span>
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>ACP</span>
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>AFD</span>
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>AFCM</span>
                <span className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>R</span>
              </div>
            </div>

            <div className={`rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow ${isDark ? 'bg-orange-50' : 'bg-white'}`}>
              <h3 className={`text-xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-amber-900' : 'text-slate-900'}`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isDark ? 'bg-amber-100' : 'bg-slate-100'}`}>
                  <span className={isDark ? 'text-amber-700' : 'text-slate-600'}>🌐</span>
                </div>
                Langues
              </h3>
              <div className="space-y-3">
                <div>
                  <p className={`font-medium ${isDark ? 'text-amber-900' : 'text-slate-900'}`}>Anglais</p>
                  <p className={`text-sm ${isDark ? 'text-amber-700' : 'text-slate-600'}`}>C2 - Certifié LanguageCert (2025)</p>
                </div>
                <div>
                  <p className={`font-medium ${isDark ? 'text-amber-900' : 'text-slate-900'}`}>Français</p>
                  <p className={`text-sm ${isDark ? 'text-amber-700' : 'text-slate-600'}`}>Courant</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-amber-50' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
              <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-amber-900' : 'text-slate-900'}`}>Me contacter</h2>

          <div className={`rounded-2xl shadow-xl p-8 md:p-12 border ${
            isDark ? 'bg-orange-50 border-orange-200' : 'bg-gradient-to-br from-slate-50 to-white border-slate-200'
          }`}>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <a
                href="mailto:aniswalidbelaggoun@gmail.com"
                className={`flex items-center gap-4 p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 border ${
                  isDark ? 'bg-orange-100 border-orange-200' : 'bg-white border-slate-100'
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

              <a
                href="tel:+33744805601"
                className={`flex items-center gap-4 p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 border ${
                  isDark ? 'bg-orange-100 border-orange-200' : 'bg-white border-slate-100'
                }`}
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-green-600" size={24} />
                </div>
                <div>
                  <p className={`text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Téléphone</p>
                  <p className={`font-medium ${isDark ? 'text-amber-900' : 'text-slate-900'}`}>07 44 80 56 01</p>
                </div>
              </a>
            </div>

              <div className={`flex items-center gap-4 p-6 rounded-xl shadow-md border mb-8 ${
                isDark ? 'bg-orange-100 border-orange-200' : 'bg-white border-slate-100'
              }`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                isDark ? 'bg-amber-100' : 'bg-slate-100'
              }`}>
                <MapPin className={isDark ? 'text-amber-700' : 'text-slate-600'} size={24} />
              </div>
              <div>
                <p className={`text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Localisation</p>
                <p className={`font-medium ${isDark ? 'text-amber-900' : 'text-slate-900'}`}>Villeurbanne (69100), France</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/BelaggounWalid"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                  isDark
                    ? 'bg-amber-700 hover:bg-amber-800 text-white'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/anisBelaggoun"
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
            <p className={`mb-4 ${isDark ? 'text-amber-700' : 'text-slate-600'}`}>À la recherche d'une alternance à partir de septembre 2025</p>
            <a
              href="/CV_Anis.pdf"
              download
                className={`inline-flex items-center gap-2 font-medium transition-colors ${
                  isDark ? 'text-amber-700 hover:text-amber-800' : 'text-slate-900 hover:text-slate-700'
                }`}
            >
              <Download size={20} />
              Télécharger mon CV complet
            </a>
          </div>
        </div>
      </section>

      <footer className={`py-8 px-4 ${isDark ? 'bg-orange-100' : 'bg-slate-900'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={isDark ? 'text-amber-800' : 'text-slate-300'}>© 2025 Anis BELAGGOUN. Tous droits réservés.</p>
        </div>
      </footer>

      <Chatbot isDark={isDark} />
    </div>
  );
}

export default App;
