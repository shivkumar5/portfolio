import { MY_DATA } from '../data';

export const Experience = () => {
    return (
        <section id="experience" className="section container">
            <h2 className="section-title">Where I've Worked</h2>

            <div className="timeline">
                { MY_DATA.experience.map((job, idx) => (
                    <div key={ idx } className="timeline-item glass-panel">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">{ job.duration } | { job.location }</div>
                        <h3 className="timeline-title">{ job.title }</h3>
                        <div className="timeline-company" style={ { display: 'flex', alignItems: 'center', gap: '0.8rem' } }>
                            { job.logo && (
                                <img
                                    src={ job.logo }
                                    alt={ `${ job.company } logo` }
                                    style={ { width: '30px', height: '30px', borderRadius: '6px', objectFit: 'contain', background: 'rgba(255,255,255,0.9)', padding: '2px' } }
                                    onError={ (e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                    } }
                                />
                            ) }
                            <span>{ job.company }</span>
                        </div>
                        { job.bullets.length > 0 && (
                            <ul className="timeline-bullets">
                                { job.bullets.map((bullet, i) => (
                                    <li key={ i }>{ bullet }</li>
                                )) }
                            </ul>
                        ) }
                    </div>
                )) }
            </div>
        </section>
    );
};
