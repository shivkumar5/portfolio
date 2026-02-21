import { MY_DATA } from '../data';
import { ExternalLink, BookOpen } from 'lucide-react';

export const Articles = () => {
    return (
        <section id="articles" className="section container">
            <h2 className="section-title">Writings & Insights</h2>

            <div style={ { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' } }>
                { MY_DATA.articles.map((article, idx) => (
                    <a
                        key={ idx }
                        href={ article.link }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-panel"
                        style={ { display: 'flex', flexDirection: 'column', color: 'inherit' } }
                    >
                        { article.image && (
                            <img
                                src={ article.image }
                                alt={ article.title }
                                style={ { width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem', border: 'var(--glass-border)' } }
                            />
                        ) }
                        <div style={ { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' } }>
                            <BookOpen size={ 24 } color="var(--primary)" />
                            <ExternalLink size={ 20 } color="var(--text-muted)" />
                        </div>
                        <h3 style={ { fontSize: '1.25rem', marginBottom: '0.5rem', lineHeight: 1.4 } }>
                            { article.title }
                        </h3>
                        <p style={ { color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 } }>
                            { article.subtitle }
                        </p>
                        <div style={ { fontSize: '0.85rem', color: 'var(--primary)', fontFamily: 'Outfit, sans-serif' } }>
                            { article.date }
                        </div>
                    </a>
                )) }
            </div>
            <div style={ { textAlign: 'center', marginTop: '3rem' } }>
                <a href={ MY_DATA.links.medium } target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    View All on Medium <ExternalLink size={ 18 } style={ { marginLeft: '0.5rem' } } />
                </a>
            </div>
        </section>
    );
};
