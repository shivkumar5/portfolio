import React, { useState } from 'react';
// Assuming Tailwind CSS is set up in your project
// Install lucide-react: npm install lucide-react or yarn add lucide-react
import {
  Briefcase,
  MapPin,
  Calendar,
  ChevronDown,
  Mail,
  Linkedin,
  Github,
  Code,
  Database,
  Cloud,
  FileText,
  Layout,
  GitBranch,
  Server,
  Layers,
  CheckCircle,
  Atom, // For React
  Redo2, // For Redux
  SquareTerminal, // For Node.js/CLI
  Rocket, // For Django
  TestTube, // For testing (Jest, pytest, etc.)
  MousePointerClick, // General tech icon fallback
  Type, // For TypeScript
  Palette, // For CSS/Styling
  BookOpen, // For Medium
  ShoppingBag, // For e-commerce/marketplace (Poshmark)
  Monitor, // For data dashboard
  Shield, // For security/authentication (JWT)
  Users, // For collaboration/teams
  Twitter,
  Menu,
  X, // For X (formerly Twitter)
} from 'lucide-react';

// Data from the provided resume
const yourName = "Shiv Kumar";
const yourTitle = "Senior Frontend Engineer | React Expertise";
const yourSummary = "Frontend Engineering professional with 7 years of experience in designing and leading frontend development teams, expert in React and Next.js. Key achievements include the development of a Micro-frontend Architecture for scalable deployment across teams and the migration of over 20 high-traffic pages from Ruby on Rails to React, achieving a 45% reduction in page load times. A 30% enhancement in team efficiency, as well as a significant improvement in responsiveness and user engagement through various frontend solutions, has been delivered.";
const yourEmail = "contact@theshiva.tech"; // Updated Email link
const yourLinkedIn = "https://www.linkedin.com/in/shiv-kumar-201415/";
const yourGithub = "https://github.com/shivkumar5";
const yourMedium = "https://medium.com/@theshiva5";
const yourX = "https://x.com/theShiva5"; // Added X link

const companies = [
  {
    id: 1,
    name: 'Entropik',
    logo: 'https://cdn.prod.website-files.com/63d0ecc632a91d417f163394/63da1ac19e0ef0bff4e142d5_logo-2.svg', // Updated Entropik logo
    duration: '04/2023 - Present',
    location: 'Bangalore, India',
    projects: [
      {
        id: 101,
        name: 'Micro-frontend Architecture',
        tasks: [
          'Developed a Micro-frontend Architecture for scalable deployment across teams.',
        ],
        technologies: ['React.js', 'Microservices', 'Webpack Module Federation'], // Assuming Webpack Module Federation based on Zenius entry
      },
      {
        id: 102,
        name: 'UX Insights Prototype Testing',
        tasks: [
          'Designed UX insights for prototype testing using React & Canvas, increasing user research clarity by 40%.',
        ],
        technologies: ['React.js', 'HTML', 'JavaScript', 'Canvas'],
      },
      {
        id: 103,
        name: 'Mobile Eye-tracking System',
        tasks: [
          'Developed a mobile-compatible eye-tracking system with sub-3 second calibration accuracy, enhancing research precision.',
        ],
        technologies: ['JavaScript', 'Mobile Development'], // Assuming JavaScript for web-based system
      },
       {
        id: 104,
        name: 'Customizable React Video Player',
        tasks: [
          'Built a customizable React video player with advanced features, boosting engagement by 25%.',
        ],
        technologies: ['React.js', 'JavaScript', 'HTML', 'CSS'],
      },
       {
        id: 105,
        name: 'Browser Timer Issues Troubleshooting',
        tasks: [
          'Troubleshooted browser timer issues for inactive tabs, reducing timing discrepancies by 60%.',
        ],
        technologies: ['JavaScript', 'Web Performance'],
      },
       {
        id: 106,
        name: 'Real-time Collaborative Editor',
        tasks: [
          'Contributed in building a real-time collaborative editor using Tiptap/ProseMirror, enabling seamless multi-user content editing.',
        ],
        technologies: ['JavaScript', 'WebSockets', 'Tiptap', 'ProseMirror'],
      },
    ],
  },
  {
    id: 2,
    name: 'Zenius Education',
    logo: 'https://www.zenius.net/_next/image?url=%2Flogo%2Fv2%2Fzenius-logo-dark.png&w=3840&q=75', // Updated Zenius logo
    duration: '09/2021 - 03/2023',
    location: 'Indonesia, (Remote)',
    projects: [
      {
        id: 201,
        name: 'Zenius.net Platform',
        tasks: [
          'Designed & developed Zenius.net using Next.js & React.js, serving 1M+ monthly active users.',
          'Managed a frontend team, reducing platform load times by 40% and bounce rates by 15%.',
        ],
        technologies: ['Next.js', 'React.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
      },
      {
        id: 202,
        name: 'Learning & Payment Management Platform',
        tasks: [
          'Architected a learning & payment management platform with Webpack Module Federation, enabling modular deployments.',
        ],
        technologies: ['Webpack Module Federation', 'Microservices', 'React.js'], // Assuming React context
      },
      {
        id: 203,
        name: 'UI/UX Revamp',
        tasks: [
          'Analyzed and Revamped UI/UX for core pages, increasing session duration by 20% and boosting NPS by 10 points.',
        ],
        technologies: ['UI/UX Design', 'React.js', 'CSS'], // Assuming React context
      },
       {
        id: 204,
        name: 'AWS Deployment & Optimization',
        tasks: [
          'Deployed & optimized the platform on AWS (S3 + CloudFront), cutting content delivery latency by 50%.',
        ],
        technologies: ['AWS', 'AWS S3', 'AWS CloudFront'],
      },
       {
        id: 205,
        name: 'SEO and SSR Improvement',
        tasks: [
          'Improved SEO and SSR capabilities for Next.js applications, boosting search rankings.',
        ],
        technologies: ['Next.js', 'SEO', 'SSR'],
      },
    ],
  },
   {
    id: 3,
    name: 'Poshmark',
    logo: 'https://d2gjrq7hs8he14.cloudfront.net/webpack4/logo-poshmark-magenta@2x-817f6e64db4f84be0421a7e07ca9a86c1c88fd3e7dfa5ef7f9e4231ddd0fdc99.png', // Updated Poshmark logo
    duration: '09/2019 - 08/2021',
    location: 'Chennai, India',
    projects: [
      {
        id: 301,
        name: 'Ruby on Rails to React Migration',
        tasks: [
          'Migrated 20+ high-traffic pages from Ruby on Rails to React, reducing page load times by 45%.',
        ],
        technologies: ['React.js', 'Ruby on Rails', 'JavaScript'],
      },
      {
        id: 302,
        name: 'Customer Support Module',
        tasks: [
          'Built a customer support module handling 10K+ monthly queries, improving resolution time by 30%.',
        ],
        technologies: ['React.js', 'JavaScript', 'Node.js'], // Assuming Node.js for backend based on skills
      },
      {
        id: 303,
        name: 'SEO & Performance Optimization',
        tasks: [
          'Optimized SEO & performance for product listings, increasing organic traffic by 20%.',
        ],
        technologies: ['SEO', 'Web Performance', 'React.js'],
      },
       {
        id: 304,
        name: 'Accessibility Enhancement',
        tasks: [
          'Enhanced Accessibility (WCAG 2.1 compliance) for inclusive user experiences.',
        ],
        technologies: ['Accessibility', 'WCAG 2.1', 'HTML', 'CSS', 'React.js'],
      },
    ],
  },
   {
    id: 4,
    name: 'Tata Consultancy Services',
    logo: 'https://www.tcs.com/content/dam/global-tcs/en/images/home/tcs-logo-white-new.svg', // Updated TCS logo
    duration: '07/2018 - 09/2019',
    location: 'Bangalore, India',
    projects: [
      {
        id: 401,
        name: 'Angular 4 to React Migration',
        tasks: [
          'Migrated a large-scale Angular 4 application to React with Material UI, improving scalability & maintainability.',
        ],
        technologies: ['React.js', 'Angular 4', 'Material UI'],
      },
      {
        id: 402,
        name: 'Real-time Data Dashboard',
        tasks: [
          'Developed a real-time data dashboard using D3.js, reducing reporting overhead by 40%.',
        ],
        technologies: ['D3.js', 'JavaScript', 'Real-time Data'],
      },
      {
        id: 403,
        name: 'Secure Session Management',
        tasks: [
          'Implemented & integrated secure session management with JWT, increasing system security compliance by 25%.',
        ],
        technologies: ['JWT', 'Security', 'Authentication'], // Assuming Node.js/backend context
      },
       {
        id: 404,
        name: 'Cross-functional Team Collaboration',
        tasks: [
          'Collaborated and coordinated with cross-functional teams across 3 continents, ensuring 100% on-time delivery.',
        ],
        technologies: ['Agile', 'Scrum', 'Team Collaboration'],
      },
    ],
  },
];

// Data from the provided resume
const skills = [
  'JavaScript (ES6+)', 'TypeScript', 'HTML', 'CSS', 'SASS', 'Python',
  'React.js', 'Next.js', 'Vue.js', 'Node.js', 'jQuery', 'React Hooks',
  'Redux (Toolkit)', 'Context API', 'Flux', 'React Router', 'REST',
  'GraphQL', 'Apollo Client', 'WebSockets', 'React Query',
  'Jest', 'Mocha', 'Chai.js', 'RTL', 'Enzyme', 'Cypress',
  'Docker', 'Unit Testing', 'E2E Testing', 'Test Driven Development (TDD)',
  'Webpack', 'Babel', 'Vite', 'NPM', 'Yarn', 'Lighthouse', 'Web Vitals',
  'Tailwind CSS', 'Chakra UI', 'Styled Components', 'AWS', 'Netlify',
  'Git', 'GitHub', 'GitLab', 'Figma', 'Figma Wireframes', 'Sketch', 'Mockups',
  'Agile', 'Scrum', 'Microservices', 'Responsive Web App', 'Canvas',
  'Mobile Development', 'Web Performance', 'UI/UX Design', 'SEO', 'SSR',
  'AWS S3', 'AWS CloudFront', 'D3.js', 'Real-time Data', 'JWT', 'Security',
  'Authentication', 'Team Collaboration', 'Tiptap', 'ProseMirror'
];

// Helper function to get technology icons using lucide-react
const getTechnologyIcon = (tech) => {
  const iconMap = {
    'JavaScript (ES6+)': <Code size={16} />,
    'TypeScript': <Type size={16} />,
    'HTML': <FileText size={16} />,
    'CSS': <Layout size={16} />,
    'SASS': <Palette size={16} />,
    'Python': <Code size={16} />,
    'React.js': <Atom size={16} />,
    'Next.js': <Atom size={16} />, // Using Atom for Next.js as well
    'Vue.js': <Atom size={16} />, // Using Atom for Vue.js as well
    'Node.js': <SquareTerminal size={16} />,
    'jQuery': <Code size={16} />, // Using Code for jQuery
    'React Hooks': <Atom size={16} />,
    'Redux (Toolkit)': <Redo2 size={16} />,
    'Context API': <Atom size={16} />, // Using Atom for Context API
    'Flux': <Redo2 size={16} />, // Using Redo2 for Flux
    'React Router': <Atom size={16} />, // Using Atom for React Router
    'REST': <Server size={16} />,
    'GraphQL': <GitBranch size={16} />, // Using GitBranch for GraphQL schema
    'Apollo Client': <GitBranch size={16} />, // Using GitBranch for Apollo Client
    'WebSockets': <Server size={16} />, // Using Server for WebSockets
    'React Query': <Atom size={16} />, // Using Atom for React Query
    'Jest': <TestTube size={16} />,
    'Mocha': <TestTube size={16} />,
    'Chai.js': <TestTube size={16} />,
    'RTL': <TestTube size={16} />, // Using TestTube for React Testing Library
    'Enzyme': <TestTube size={16} />,
    'Cypress': <TestTube size={16} />,
    'Docker': <Layers size={16} />,
    'Unit Testing': <TestTube size={16} />,
    'E2E Testing': <TestTube size={16} />,
    'Test Driven Development (TDD)': <TestTube size={16} />,
    'Webpack': <Layers size={16} />, // Using Layers for module bundler
    'Babel': <Code size={16} />, // Using Code for transpiler
    'Vite': <Layers size={16} />, // Using Layers for build tool
    'NPM': <Layers size={16} />, // Using Layers for package manager
    'Yarn': <Layers size={16} />, // Using Layers for package manager
    'Lighthouse': <CheckCircle size={16} />, // Using CheckCircle for performance tool
    'Web Vitals': <CheckCircle size={16} />, // Using CheckCircle for performance metrics
    'Tailwind CSS': <Palette size={16} />,
    'Chakra UI': <Palette size={16} />,
    'Styled Components': <Palette size={16} />,
    'AWS': <Cloud size={16} />,
    'Netlify': <Cloud size={16} />, // Using Cloud for hosting
    'Git': <GitBranch size={16} />,
    'GitHub': <Github size={16} />,
    'GitLab': <GitBranch size={16} />, // Using GitBranch for GitLab
    'Figma': <Layout size={16} />, // Using Layout for design tool
    'Figma Wireframes': <Layout size={16} />,
    'Sketch': <Layout size={16} />,
    'Mockups': <Layout size={16} />,
    'Agile': <GitBranch size={16} />,
    'Scrum': <GitBranch size={16} />,
    'Microservices': <Server size={16} />,
    'Responsive Web App': <Layout size={16} />,
    'Canvas': <Layout size={16} />, // Using Layout for Canvas
    'Mobile Development': <Layout size={16} />, // Using Layout for mobile
    'Web Performance': <CheckCircle size={16} />,
    'UI/UX Design': <Layout size={16} />,
    'SEO': <CheckCircle size={16} />,
    'SSR': <Server size={16} />, // Using Server for Server-Side Rendering
    'AWS S3': <Cloud size={16} />,
    'AWS CloudFront': <Cloud size={16} />,
    'D3.js': <Monitor size={16} />, // Using Monitor for data visualization
    'Real-time Data': <Server size={16} />,
    'JWT': <Shield size={16} />,
    'Security': <Shield size={16} />,
    'Authentication': <Shield size={16} />,
    'Team Collaboration': <Users size={16} />,
    'Tiptap': <FileText size={16} />, // Using FileText for editor library
    'ProseMirror': <FileText size={16} />, // Using FileText for editor library
  };
  // Return the icon component or a default icon
  return iconMap[tech] || <MousePointerClick size={16} />;
};


function App() {
  const [expandedCompany, setExpandedCompany] = useState(null);

  const toggleExpand = (companyId) => {
    setExpandedCompany(expandedCompany === companyId ? null : companyId);
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Basic error handler for images
  const handleImageError = (e) => {
    console.error('Image failed to load:', e.target.src);
    e.target.onerror = null; // Prevent infinite loop if fallback also fails
    e.target.src = 'https://placehold.co/60x60/cccccc/000000?text=Error'; // Fallback placeholder
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">{yourName}</h1>
            <p className="text-xl opacity-90 hidden md:block">{yourTitle}</p> {/* Hide title on mobile */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:underline text-lg">About</a></li>
              <li><a href="#experience" className="hover:underline text-lg">Experience</a></li>
              <li><a href="#skills" className="hover:underline text-lg">Skills</a></li>
              <li><a href="#contact" className="hover:underline text-lg">Contact</a></li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-blue-600 bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8">
            <button onClick={toggleMobileMenu} className="absolute top-4 right-4 text-white focus:outline-none">
              <X size={30} />
            </button>
            <nav>
              <ul className="flex flex-col items-center space-y-6">
                <li><a href="#about" className="text-white text-2xl hover:underline" onClick={closeMobileMenu}>About</a></li>
                <li><a href="#experience" className="text-white text-2xl hover:underline" onClick={closeMobileMenu}>Experience</a></li>
                <li><a href="#skills" className="text-white text-2xl hover:underline" onClick={closeMobileMenu}>Skills</a></li>
                <li><a href="#contact" className="text-white text-2xl hover:underline" onClick={closeMobileMenu}>Contact</a></li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      {/* About Me Section */}
      <section id="about" className="container mx-auto p-6 my-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <img
            src="photo.jpg" // Image source from public folder
            alt="Your Photo"
            className="w-48 h-48 rounded-full object-cover shadow-md mb-6 md:mb-0 border-4 border-purple-300"
            onError={handleImageError} // Add error handler
          />
          <p className="text-lg leading-relaxed text-gray-700">
            {yourSummary}
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto p-6 my-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Experience</h2>
        <div className="space-y-8">
          {companies.map((company) => (
            <div key={company.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
              <div
                className="flex items-center p-5 cursor-pointer bg-white hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleExpand(company.id)}
              >
                <img
                  src={company.logo}
                  alt={`${company.name} Logo`}
                  className="w-14 h-14 object-contain mr-5 rounded-full border border-gray-300 p-1"
                  onError={handleImageError} // Add error handler
                />
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>
                  <div className="flex items-center text-gray-600 text-sm mt-1 space-x-4">
                    <span className="flex items-center"><Calendar size={16} className="mr-1"/> {company.duration}</span>
                    <span className="flex items-center"><MapPin size={16} className="mr-1"/> {company.location}</span>
                  </div>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${expandedCompany === company.id ? 'rotate-180' : ''}`}
                />
              </div>
              {expandedCompany === company.id && (
                <div className="p-5 bg-gray-50 border-t border-gray-200">
                  <h4 className="text-lg font-semibold mb-4 text-gray-800">Projects & Contributions:</h4>
                  <div className="space-y-6">
                    {company.projects.map((project) => (
                      <div key={project.id} className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
                        <h5 className="text-md font-semibold mb-3 text-gray-800">{project.name}</h5>
                        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                          {project.tasks.map((task, index) => (
                            <li key={index} className="flex items-start">
                               <span className="mr-2 text-blue-500">●</span> {task}
                            </li>
                          ))}
                        </ul>
                        <div>
                          <h6 className="text-sm font-medium mb-2 text-gray-800">Technologies Used:</h6>
                          <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1.5 rounded-full border border-blue-200"
                              >
                                {getTechnologyIcon(tech)} <span className="ml-1">{tech}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto p-6 my-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Skills</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="flex items-center bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full border border-green-200 shadow-sm"
            >
               {getTechnologyIcon(skill)} <span className="ml-2">{skill}</span>
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto p-6 my-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Contact</h2>
        <div className="flex flex-col items-center space-y-6">
          <p className="text-lg text-gray-700">Feel free to reach out!</p>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Email Link */}
            <a
              href={`mailto:${yourEmail}`}
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center text-lg font-medium"
            >
              <Mail size={24} className="mr-2"/>
              {yourEmail}
            </a>
            {/* LinkedIn Link */}
            <a
              href={yourLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition-colors duration-200 flex items-center text-lg font-medium"
            >
              <Linkedin size={24} className="mr-2"/>
              LinkedIn
            </a>
            {/* GitHub Link */}
             <a
              href={yourGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors duration-200 flex items-center text-lg font-medium"
            >
              <Github size={24} className="mr-2"/>
              GitHub
            </a>
            {/* Medium Link */}
             <a
              href={yourMedium}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 flex items-center text-lg font-medium"
            >
              <BookOpen size={24} className="mr-2"/>
              Medium
            </a>
            {/* X (Twitter) Link */}
             <a
              href={yourX}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors duration-200 flex items-center text-lg font-medium"
            >
              <Twitter size={24} className="mr-2"/>
              X (Twitter)
            </a>
            {/* Add other contact links */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-6 mt-12">
        <p>&copy; {new Date().getFullYear()} {yourName}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
