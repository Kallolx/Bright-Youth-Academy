import { motion } from 'framer-motion';

import { BorderBeam } from '../ui/border-beam';

const Contact = () => {
  return (
    <section className="py-20 bg-[#0D0C13]">
      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 font-dmSans"
        >
          Contact with us!
        </motion.h2>

        {/* Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 group"
        >
          {/* Border Beam Effect */}
          <BorderBeam
            size={200}
            duration={3}
            colorFrom="#A656F7"
            colorTo="#3C81F6"
            className="opacity-70"
          />

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="relative group/name">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg bg-[#1D1C29] text-white border border-white/10 focus:outline-none placeholder:text-gray-500 transition-all duration-300"
                />
                <span className="group-hover/name:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                <span className="group-hover/name:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
              </div>

              {/* Email */}
              <div className="relative group/email">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-[#1D1C29] text-white border border-white/10 focus:outline-none placeholder:text-gray-500 transition-all duration-300"
                />
                <span className="group-hover/email:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                <span className="group-hover/email:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
              </div>
            </div>

            {/* Message */}
            <div className="relative group/message">
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-[#1D1C29] text-white border border-white/10 focus:outline-none placeholder:text-gray-500 resize-none transition-all duration-300"
              />
              <span className="group-hover/message:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
              <span className="group-hover/message:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full border border-white/10 text-white font-medium py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 