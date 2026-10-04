import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { CreativeAiLab } from './components/CreativeAiLab';
import { AgentSimulator } from './components/AgentSimulator';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-kanit selection:bg-[#B600A8]/40 selection:text-white overflow-x-clip">
      {/* 1. Header Navigation */}
      <Navbar />

      <main>
        {/* 2. Cinematic 3D Hero Section */}
        <Hero />

        {/* 3. Professional Identity & About Section */}
        <About />

        {/* 4. Interactive Technical Skills Matrix */}
        <Skills />

        {/* 5. Featured Production & AI Projects */}
        <Projects />

        {/* 6. Career Milestones: Internship Experience & University Education */}
        <Experience />

        {/* 7. Creative AI Lab & 3D Animation Showcase (Veggie Village World) */}
        <CreativeAiLab />

        {/* 8. Interactive Live AI Agent Simulator */}
        <AgentSimulator />

        {/* 9. Contact & Collaboration Section */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
};

export default App;
