const experiences = [
  {
    company: 'Bizclock Infotech Private Limited',
    role: 'MERN Stack / Frontend Developer',
    duration: 'Dec 2024 – Present',
    points: [
      'Developed responsive frontend applications using React.js.',
      'Built scalable REST APIs using Node.js and Express.js.',
      'Integrated MongoDB and MySQL databases.',
      'Implemented JWT authentication and secure API workflows.',
    ],
  },
  {
    company: 'Neelkanth Education',
    role: 'Website Developer (Frontend)',
    duration: 'Jun 2024 – Dec 2024',
    points: [
      'Developed responsive web applications using React.js and JavaScript.',
      'Integrated APIs using Axios and Fetch API.',
      'Improved UI/UX and application accessibility.',
    ],
  },
  {
    company: 'SD Educom',
    role: 'Website Designer / Frontend Developer',
    duration: 'Apr 2023 – Jun 2024',
    points: [
      'Created responsive layouts using HTML, CSS, and Bootstrap.',
      'Developed interactive UI features with JavaScript.',
      'Ensured cross-browser compatibility and modern design consistency.',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-12 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Experience
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto leading-7">
            My professional journey in frontend and full-stack development,
            building scalable and high-performance web applications.
          </p>
        </div>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-8 md:p-10 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

                <div>
                  <h3 className="text-2xl font-bold text-blue-400">
                    {exp.company}
                  </h3>

                  <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
                    {exp.role}
                  </p>
                </div>

                <div className="px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm w-fit">
                  {exp.duration}
                </div>
              </div>

              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-7">
                {exp.points.map((point, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience