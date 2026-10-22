import { FiPhoneCall } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-50 flex flex-col gap-3 sm:gap-4">

      {/* Call Button */}
      <a
        href="tel:+917011719443"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-500 hover:scale-110 transition duration-300 shadow-lg flex items-center justify-center text-xl sm:text-2xl"
      >
        <FiPhoneCall />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917011719443"
        target="_blank"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 hover:scale-110 transition duration-300 shadow-lg flex items-center justify-center text-xl sm:text-2xl"
      >
        <FaWhatsapp />
      </a>

    </div>
  )
}

export default FloatingButtons