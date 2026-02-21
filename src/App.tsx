import { useEffect } from 'react';
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
    </div>
  );
}

export default App;
