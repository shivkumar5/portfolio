import { MY_DATA } from '../data';
import { GraduationCap } from 'lucide-react';

export const Education = () => {
    return (
        <section id="education" className="section container">
            <h2 className="section-title">Education</h2>

            <div style={ { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' } }>
                { MY_DATA.education.map((edu, idx) => (
                    <div key={ idx } className="glass-panel text-center" style={ { textAlign: 'center' } }>
                        { edu.logo ? (
                            <img
                                src={ edu.logo }
                                alt={ `${ edu.school } logo` }
                                style={ { width: '48px', height: '48px', borderRadius: '8px', objectFit: 'contain', background: 'rgba(255,255,255,0.9)', padding: '4px', display: 'block', margin: '0 auto 1rem' } }
                                onError={ (e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                    (e.target as HTMLImageElement).nextElementSibling?.removeAttribute('hidden');
                                } }
                            />
                        ) : null }
                        <div hidden={ !!edu.logo }>
                            <GraduationCap size={ 40 } color="var(--primary)" style={ { margin: '0 auto 1rem' } } />
                        </div>
                        <h3 style={ { fontSize: '1.4rem', marginBottom: '0.5rem' } }>{ edu.school }</h3>
                        <p style={ { color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 500 } }>
                            { edu.degree }
                        </p>
                        <p style={ { color: 'var(--primary)', fontFamily: 'Outfit, sans-serif' } }>
                            { edu.year }
                        </p>
                    </div>
                )) }
            </div>
        </section>
    );
};
