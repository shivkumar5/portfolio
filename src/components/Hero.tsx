import { ChevronRight } from 'lucide-react';
import { MY_DATA } from '../data';

export const Hero = () => {
    return (
        <section id="hero" className="hero container">
            <div className="hero-content">
                <span className="hero-subtitle delay-1 animate-fade-in">Hi, my name is</span>
                <h1 className="hero-title delay-2 animate-fade-in">
                    { MY_DATA.name }.<br />
                    <span>I architect scalable systems.</span>
                </h1>
                <p className="hero-desc delay-3 animate-fade-in">
                    I'm a { MY_DATA.title } based in { MY_DATA.location }, specializing in building high-performance
                    distributed backends and dynamic frontend applications. From concept to production, I ensure scalability and perfection.
                </p>
                <div className="hero-buttons delay-3 animate-fade-in" style={ { marginTop: '2rem' } }>
                    <a href="#about" className="btn btn-primary">
                        Explore My Work <ChevronRight size={ 20 } />
                    </a>

                </div>
            </div>
        </section>
    );
};
