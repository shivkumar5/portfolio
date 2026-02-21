import { MY_DATA } from '../data';
import { Code2 } from 'lucide-react';

export const Skills = () => {
    // We can group skills or just render the array
    return (
        <section id="skills" className="section container">
            <h2 className="section-title">Technical Arsenal</h2>

            <div className="glass-panel" style={ { marginBottom: '3rem' } }>
                <h3 style={ { marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' } }>
                    <Code2 className="text-primary" /> Core Technologies
                </h3>
                <div className="skills-grid">
                    { MY_DATA.skills.map((skill, idx) => (
                        <div key={ idx } className="skill-tag">{ skill }</div>
                    )) }
                </div>
            </div>
        </section>
    );
};
