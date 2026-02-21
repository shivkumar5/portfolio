import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Articles', href: '#articles' },
    ];

    return (
        <header className="header">
            <div className="container nav-container">
                <a href="#" className="logo">shiv<span>.tech</span></a>

                {/* Desktop Nav */ }
                <nav className="nav-links">
                    { navLinks.map((link, idx) => (
                        <a key={ idx } href={ link.href } className="nav-link">
                            { link.name }
                        </a>
                    )) }
                    <a href="#contact" className="btn btn-outline" style={ { padding: '0.4rem 1.2rem', fontFamily: 'Inter' } }>
                        Get In Touch
                    </a>
                </nav>

                {/* Mobile Nav Button */ }
                <button className="mobile-menu-btn" onClick={ () => setIsOpen(!isOpen) }>
                    { isOpen ? <X size={ 28 } /> : <Menu size={ 28 } /> }
                </button>
            </div>

            {/* Mobile Menu Overlay */ }
            { isOpen && (
                <div style={ { position: 'absolute', top: '100%', left: 0, width: '100%', background: 'var(--bg-accent)', borderBottom: '1px solid var(--border-color)', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', zIndex: 99 } }>
                    { navLinks.map((link, idx) => (
                        <a key={ idx } href={ link.href } style={ { color: '#fff', fontSize: '1.2rem', textTransform: 'uppercase' } } onClick={ () => setIsOpen(false) }>
                            { link.name }
                        </a>
                    )) }
                    <a href="#contact" className="btn btn-primary" style={ { textAlign: 'center', width: 'max-content' } } onClick={ () => setIsOpen(false) }>
                        Get In Touch
                    </a>
                </div>
            ) }
        </header>
    );
};
