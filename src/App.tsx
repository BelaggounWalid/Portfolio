import { useTheme } from './hooks/useTheme';
import { useSectionVisibility } from './hooks/useSectionVisibility';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Chatbot from './components/Chatbot';

function App() {
  const { isDark, toggleTheme } = useTheme();
  const visibleSections = useSectionVisibility();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark
        ? 'bg-gradient-to-br from-gray-900 to-gray-800'
        : 'bg-gradient-to-br from-slate-50 to-slate-100'
    }`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero isDark={isDark} isVisible={visibleSections.has('home')} />
      <About isDark={isDark} isVisible={visibleSections.has('about')} />
      <Education isDark={isDark} isVisible={visibleSections.has('education')} />
      <Experience isDark={isDark} isVisible={visibleSections.has('experience')} />
      <Projects isDark={isDark} isVisible={visibleSections.has('projects')} />
      <Skills isDark={isDark} isVisible={visibleSections.has('skills')} />
      <Contact isDark={isDark} isVisible={visibleSections.has('contact')} />
      <Footer isDark={isDark} />
      <Chatbot isDark={isDark} />
    </div>
  );
}

export default App;
