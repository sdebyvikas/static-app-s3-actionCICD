const About = () => {
  return (
    <section id="about" className="py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            About Me
          </h2>

          <p className="text-gray-600 dark:text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto leading-7 text-sm sm:text-base">
            Passionate MERN Stack Developer focused on building scalable,
            responsive, and high-performance web applications.
          </p>
        </div>

        <div className="glass rounded-3xl p-6 sm:p-8 md:p-14 leading-8 text-gray-700 dark:text-gray-300">
          <div className="max-w-5xl mx-auto text-sm sm:text-base">

            <p>
              I am a passionate MERN Stack Developer with experience in building
              modern, scalable, and high-performance web applications.
            </p>

            <p className="mt-6">
              I specialize in React.js, Next.js, Node.js, Express.js,
              MongoDB, MySQL, JWT Authentication, REST APIs,
              and responsive UI development.
            </p>

            <p className="mt-6">
              I have worked on e-commerce platforms, HRMS systems,
              property rental management applications, and fitness websites.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About