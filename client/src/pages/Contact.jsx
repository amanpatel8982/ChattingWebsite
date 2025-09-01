import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-base-100 text-base-content">
      
      {/* Top Section */}
      <div className="py-10 px-6 mx-4 mt-2 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-5xl font-serif font-bold mb-4"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-2xl mx-auto text-lg opacity-90"
        >
          We’d love to hear from you! Whether you have a question, feedback, or
          just want to say hello — reach out to us.
        </motion.p>
      </div>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg opacity-80 leading-relaxed">
            Have questions or need support? Our team is here to help. Fill out the form
            or reach us directly through our contact information.
          </p>

          <div className="space-y-4">
            <p className="text-lg">📍 123, ChatApp Street, Tech City</p>
            <p className="text-lg">📧 support@chatapp.com</p>
            <p className="text-lg">📞 +91 98765 43210</p>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-base-200 p-8 rounded-xl shadow-lg space-y-6"
        >
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary/90 transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </section>
    </div>
  );
}
