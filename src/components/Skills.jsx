const frontendSkills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React.js',
  'Next.js',
  'Redux',
  'Bootstrap',
  'Tailwind CSS',
]

const backendSkills = [
  'Node.js',
  'Express.js',
  'MongoDB',
  'MySQL',
  'JWT Authentication',
  'RESTful APIs',
  'Middleware',
  'RBAC',
  'Laravel Basics',
]

const Skills = () => {
  return (
    <section id="skills" className="py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Technical Skills
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto leading-7 text-sm sm:text-base">
            Specialized in modern frontend and backend technologies
            for building scalable, responsive, and high-performance web applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">

          {/* Frontend Skills */}
          <div className="glass rounded-3xl p-6 sm:p-8 hover:border-blue-500/40 transition-all duration-300">

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 text-center sm:text-left">

              <div className="w-14 h-14 mx-auto sm:mx-0 rounded-2xl bg-blue-500/20 flex items-center justify-center text-2xl shrink-0">
                💻
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-400">
                  Frontend Technologies
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 leading-6">
                  Modern UI Development & Responsive Design
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
              {frontendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 sm:px-5 py-2 sm:py-3 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <span className="font-medium text-gray-200 text-sm sm:text-base">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="glass rounded-3xl p-6 sm:p-8 hover:border-purple-500/40 transition-all duration-300">

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 text-center sm:text-left">

              <div className="w-14 h-14 mx-auto sm:mx-0 rounded-2xl bg-purple-500/20 flex items-center justify-center text-2xl shrink-0">
                ⚙️
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-purple-400">
                  Backend Technologies
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 leading-6">
                  API Development, Authentication & Database Management
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
              {backendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 sm:px-5 py-2 sm:py-3 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <span className="font-medium text-gray-200 text-sm sm:text-base">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills