const Contact = () => {
  return (
    <section id="contact" className="py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Contact Me
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto leading-7 text-sm sm:text-base">
            Let's connect and build something amazing together.
          </p>
        </div>

        <div className="glass p-6 sm:p-10 rounded-3xl">

          <div className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-black/30 border border-gray-200 dark:border-white/10 outline-none text-sm sm:text-base"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-black/30 border border-gray-200 dark:border-white/10 outline-none text-sm sm:text-base"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-black/30 border border-gray-200 dark:border-white/10 outline-none text-sm sm:text-base"
            ></textarea>

            <button className="w-full py-4 bg-blue-500 rounded-xl hover:bg-blue-600 transition">
              Send Message
            </button>
          </div>

          <div className="mt-10 text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            <p className="break-all sm:break-normal">
              Email: vikasfrontenddeveloper007@gmail.com
            </p>

            <p className="mt-2">
              Phone: +91 7011719443
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-6">
              <a
                href="https://github.com/jojovikas"
                target="_blank"
                className="hover:text-blue-400 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/vikas-kumar-mondal-2b3781135/"
                target="_blank"
                className="hover:text-blue-400 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact