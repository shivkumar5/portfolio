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
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
    const sectionsList = ['hero', 'about', 'experience', 'skills', 'education', 'articles', 'contact'];

    // Find current active section based on scroll position
    let currentIdx = 0;
    const scrollPos = window.scrollY + window.innerHeight / 3;

    sectionsList.forEach((id, idx) => {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPos) {
        currentIdx = idx;
      }
    });

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextId = sectionsList[Math.min(currentIdx + 1, sectionsList.length - 1)];
      setCurrentCommand(`cd ./${ nextId }`);
      document.getElementById(nextId)?.scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevId = sectionsList[Math.max(currentIdx - 1, 0)];
      setCurrentCommand(`cd ../${ prevId }`);
      document.getElementById(prevId)?.scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      setCurrentCommand(prev => {
        const cmd = prev.trim();
        if (cmd.startsWith('cd ')) {
          const target = cmd.substring(3).replace('./', '').replace('../', '').trim();
          if (sectionsList.includes(target)) {
            document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
          } else if (target === '~' || target === '/') {
            document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
          }
        }
        return ''; // Clear after enter
      });
    } else if (e.key === 'Tab') {
      e.preventDefault();
      setCurrentCommand(prev => {
        if (!prev.startsWith('cd ')) {
          if (prev === '' || prev === 'idle') return 'cd ';
          return prev;
        }

        const exactMatchIdx = sectionsList.findIndex(s => `cd ${ s }` === prev);

        if (exactMatchIdx !== -1) {
          // We are already showing a valid section, cycle to the next one
          const nextIdx = (exactMatchIdx + 1) % sectionsList.length;
          return `cd ${ sectionsList[nextIdx] }`;
        }

        const searchStr = prev.substring(3).trim();

        if (searchStr === '') {
          // If just "cd ", start cycling from beginning
          return `cd ${ sectionsList[0] }`;
        }

        const matches = sectionsList.filter(s => s.startsWith(searchStr));
        if (matches.length > 0) {
          // Complete to the first match
          return `cd ${ matches[0] }`;
        }

        return prev;
      });
    } else if (e.key === 'Backspace') {
      setCurrentCommand(prev => prev.slice(0, -1));
    } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      if (e.key === ' ') e.preventDefault(); // prevent scroll
      setCurrentCommand(prev => (prev === 'idle' ? '' : prev) + e.key);
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

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Articles />
        <Contact />
      </main>

      <SocialLinks />

      <footer className="footer">
        <p>Built with React & Vanilla CSS.</p>
        <p>Designed & Engineered by <span>Shiv Kumar</span> &copy; { new Date().getFullYear() }</p>
      </footer>

      <div className="terminal-footer">
        { currentCommand.startsWith('cd ') && (
          <div className="terminal-suggestions">
            { ['hero', 'about', 'experience', 'skills', 'education', 'articles', 'contact']
              .filter(s => s.startsWith(currentCommand.substring(3).trim()))
              .map(s => (
                <span key={ s } className="suggestion">{ s }</span>
              )) }
          </div>
        ) }
        <span className="prompt">shiv@macbook:~$</span>
        <span className="typing">{ currentCommand === 'idle' ? '' : currentCommand }</span>
        <span className="cursor"></span>
      </div>
    </div>
  );
}

export default App;
