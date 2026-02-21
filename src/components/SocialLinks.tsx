import { MY_DATA } from '../data';
import { Github, Linkedin, Twitter, Globe, BookOpen } from 'lucide-react';

export const SocialLinks = () => {
    return (
        <div className="social-links delay-3 animate-fade-in">
            <a href={ MY_DATA.links.github } target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                <Github size={ 24 } />
            </a>
            <a href={ MY_DATA.links.linkedin } target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                <Linkedin size={ 24 } />
            </a>
            <a href={ MY_DATA.links.medium } target="_blank" rel="noopener noreferrer" className="social-icon" title="Medium">
                <BookOpen size={ 24 } />
            </a>
            <a href={ MY_DATA.links.twitter } target="_blank" rel="noopener noreferrer" className="social-icon" title="Twitter">
                <Twitter size={ 24 } />
            </a>
            <a href={ MY_DATA.links.portfolio } target="_blank" rel="noopener noreferrer" className="social-icon" title="Portfolio">
                <Globe size={ 24 } />
            </a>
        </div>
    );
};
