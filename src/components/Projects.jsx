const projects = [
  {
    title: 'AIM Software - Comviva (Tech Mahindra)',
    desc: 'Lead management and customer handling software developed for managing Comviva (Tech Mahindra) customer workflows, operations, and business processes. Led the complete project architecture and development.',
    link: '#',
  },
  {
    title: 'Candico India (Next.js)',
    desc: 'Modern e-commerce website with responsive UI, API integration, and optimized frontend performance using Next.js.',
    link: 'https://www.candicoindia.in/',
  },
  {
    title: 'Nestfin',
    desc: 'Property rental management platform built using MERN stack with scalable APIs and authentication workflows.',
    link: 'https://nestfin.app/',
  },
  {
    title: 'Nestfin Tenant',
    desc: 'Tenant management application for booking, property management, and tenant workflows.',
    link: 'https://tenants.nestfin.app/home',
  },
  {
    title: 'Impulse Fitness',
    desc: 'Fitness and health technology website with backend integration and responsive UI.',
    link: 'https://www.impulsehealthtech.com/',
  },
  {
    title: 'Blue Planet CRM',
    desc: 'Full MERN stack CRM platform with Admin, Teacher, and Candidate login systems along with complete LSM services integration.',
    link: 'http://crm.bizclockinfotech.com/',
  },
  {
    title: 'HRMS Portal',
    desc: 'Complete HRMS portal for managing employees, HR workflows, authentication, and administration systems using MERN stack.',
    link: '#',
  },
  {
    title: 'LMS Project',
    desc: 'Learning Management System developed using MERN stack with Admin, Teacher, and Candidate modules.',
    link: '#',
  },
  {
    title: 'Psychology Master Class',
    desc: 'Educational institute website developed using HTML, CSS, and JavaScript for competitive exam coaching and online learning.',
    link: 'https://psychologymasterclass.in/',
  },
  {
    title: 'Neelkanth Education',
    desc: 'Educational coaching institute website developed and managed using WordPress platform.',
    link: 'https://neelkantheducation.com/',
  },
  {
    title: 'Network Net India',
    desc: 'Computer education institute website developed using HTML, CSS, JavaScript, and Bootstrap.',
    link: 'https://networknetindia.com/',
  },
  {
    title: 'Yoga Universe',
    desc: 'Yoga and wellness platform promoting healthy lifestyle, yoga education, and holistic wellness.',
    link: 'https://yogawebdev.netlify.app/',
  },
]

const Projects = () => {
  return (
<section id="projects" className="py-12 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold gradient-text">
        Projects
      </h2>

      <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto leading-7 text-sm sm:text-base">
        Some of my featured projects focused on scalable architecture,
        responsive UI, and modern web development.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="glass rounded-3xl p-6 sm:p-8 hover:-translate-y-2 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
        >

          {/* Project Icon */}
          <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl mb-6">
            🚀
          </div>

          {/* Content */}
          <div className="flex flex-col h-full">

            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-400">
              {project.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-7 text-sm sm:text-base flex-grow">
              {project.desc}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 w-full text-center px-5 py-3 bg-blue-500 rounded-2xl hover:bg-blue-600 hover:scale-[1.02] transition duration-300 font-medium"
            >
              Live Demo
            </a>

          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  )
}

export default Projects