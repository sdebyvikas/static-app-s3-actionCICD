import { motion } from 'framer-motion'
import {
  FiDownload,
  FiMail,
  FiArrowRight,
} from 'react-icons/fi'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-28 pb-16 overflow-hidden">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-14 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >

          {/* Current Company Badge */}
          <div className="flex justify-center lg:justify-start mb-6">
            <div className="inline-flex items-center justify-center sm:justify-start gap-2 px-4 sm:px-5 py-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm max-w-full sm:max-w-fit text-center sm:text-left leading-6">

              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0"></span>

              <span className="break-words">
                Currently Working at
                <span className="font-semibold text-white ml-1">
                  Bizclock Infotech Pvt. Ltd.
                </span>
              </span>
            </div>
          </div>

          <p className="text-blue-400 mb-3 text-sm sm:text-base">
            Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Vikas <span className="gradient-text">Kumar</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mt-4">
            MERN Stack Developer
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-6 leading-8 max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base">
            Results-driven MERN Stack Developer with expertise in React.js,
            Next.js, Redux, Node.js, Express.js, MongoDB, and scalable web applications.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mt-10">

            <a
              href="#projects"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition duration-300 font-semibold"
            >
              <FiArrowRight />
              View Projects
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 hover:bg-white/10 transition duration-300 font-semibold"
            >
              <FiMail />
              Contact Me
            </a>

            <a
              href="/Vikas_Mern_Developer.pdf"
              target="_blank"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 hover:bg-white/10 transition duration-300 font-semibold"
            >
              <FiDownload />
              Resume
            </a>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10 mt-14 max-w-lg mx-auto lg:mx-0">

            <div>
              <h3 className="text-3xl sm:text-5xl font-bold text-blue-400">
                3+
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">
                Years Exp.
              </p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-5xl font-bold text-blue-400">
                10+
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-5xl font-bold text-blue-400">
                12+
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">
                Technologies
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center order-1 lg:order-2 relative"
        >

          <div className="absolute w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] bg-blue-500/20 blur-[120px] rounded-full"></div>

          <img
            src="/Image.png"
            alt="profile"
            className="relative z-10 w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] rounded-full object-cover border-4 border-blue-500 shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero