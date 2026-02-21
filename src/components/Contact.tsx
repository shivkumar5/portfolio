import { MY_DATA } from '../data';
import { Mail } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="section container text-center" style={ { textAlign: 'center', maxWidth: '600px' } }>
            <h2 className="section-title">Get In Touch</h2>
            <p style={ { color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' } }>
                I'm currently looking for new opportunities and my inbox is always open.
                Whether you have a question, a project to discuss, or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href={ `mailto:${ MY_DATA.email }` } className="btn btn-primary" style={ { padding: '1rem 3rem', fontSize: '1.2rem' } }>
                Say Hello <Mail size={ 24 } />
            </a>
        </section>
    );
};
