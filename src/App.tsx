import { useEffect, useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Articles } from './components/Articles';
import { Contact } from './components/Contact';
import { SocialLinks } from './components/SocialLinks';
import './index.css';

function App() {
  const [currentCommand, setCurrentCommand] = useState('idle');

  // Keyboard navigation logic
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const sections = ['hero', 'about', 'experience', 'skills', 'education', 'articles', 'contact'];

    // Find current active section based on scroll position
    let currentIdx = 0;
    const scrollPos = window.scrollY + window.innerHeight / 3;

    sections.forEach((id, idx) => {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPos) {
        currentIdx = idx;
      }
    });

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextId = sections[Math.min(currentIdx + 1, sections.length - 1)];
      setCurrentCommand(`cd  ./${ nextId }`);
      document.getElementById(nextId)?.scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevId = sections[Math.max(currentIdx - 1, 0)];
      setCurrentCommand(`cd  ../${ prevId }`);
      document.getElementById(prevId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Type effect for other keys
      if (e.key.length === 1) {
        setCurrentCommand(prev => (prev === 'idle' ? '' : prev) + e.key);
      } else if (e.key === 'Backspace') {
        setCurrentCommand(prev => prev.slice(0, -1));
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <SocialLinks />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Articles />
        <Contact />
      </main>

      <footer className="footer">
        <p>Built with React & Vanilla CSS.</p>
        <p>Designed & Engineered by <span>Shiv Kumar</span> &copy; { new Date().getFullYear() }</p>
      </footer>

      <div className="terminal-footer">
        <span className="prompt">shiv@macbook:~$</span>
        <span className="typing">{ currentCommand }</span>
        <span className="cursor"></span>
      </div>
    </div>
  );
}

export default App;
