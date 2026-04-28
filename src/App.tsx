// tsx-output/src/App.tsx — REMPLACE Portfolio/src/App.tsx

import Cursor from './components/Cursor';
import Background from './components/Background';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import ProjectIndex from './components/ProjectIndex';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <>
      <Background />
      <Cursor />
      <Nav />
      <Hero />
      <About />
      <ProjectIndex />
      <Experience />
      <Skills />
      <Contact />
      <Chatbot />
    </>
  );
}
