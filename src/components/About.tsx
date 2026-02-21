import { MY_DATA } from '../data';

export const About = () => {
    return (
        <section id="about" className="section container">
            <h2 className="section-title">About Me</h2>
            <div className="glass-panel" style={ { maxWidth: '900px', margin: '0 auto' } }>
                <p style={ { fontSize: '1.1rem', marginBottom: '1.5rem' } }>
                    Hello! I'm { MY_DATA.name }, a { MY_DATA.title } currently working at { MY_DATA.company }.
                </p>
                <p style={ { fontSize: '1.1rem', marginBottom: '1.5rem' } }>
                    { MY_DATA.summary }
                </p>
                <p style={ { fontSize: '1.1rem' } }>
                    Whether it's crafting a pixel-perfect, responsive React architecture, designing robust Python backend architecture, or deploying highly-scalable microservices to AWS,
                    I love pushing the boundaries of software engineering to deliver the best user experience and system reliability.
                </p>
            </div>
        </section>
    );
};
