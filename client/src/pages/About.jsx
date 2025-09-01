import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-base-100 text-base-content">
      
      {/* Top Section */}
      <div className="py-10 px-6 mx-4 mt-2 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }} // jaise hi visible hoga animate
          className="text-5xl font-serif font-bold mb-4"
        >
          About
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-2xl mx-auto text-lg opacity-90"
        >
          Simple, secure, and lightning-fast conversations — built for everyone.
        </motion.p>
      </div>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg opacity-80 leading-relaxed">
            We’re a passionate team of developers and designers who believe that
            communication should be seamless and fun. ChatApp was created to
            bring people closer with an elegant, secure, and easy-to-use
            messaging platform. From friends to professionals — our app makes
            conversations smooth and engaging.
          </p>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          src="https://img.freepik.com/free-vector/team-concept-illustration_114360-678.jpg"
          alt="Who We Are"
          className="rounded-xl shadow-lg"
        />
      </section>

      {/* Our Mission */}
      <section className="bg-base-200 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            src="https://img.freepik.com/free-vector/goal-achievement-concept_23-2148281174.jpg"
            alt="Our Mission"
            className="rounded-xl shadow-lg"
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg opacity-80 leading-relaxed">
              Our mission is to build the fastest and most secure chat
              experience. With real-time syncing, end-to-end encryption, and a
              clutter-free interface, ChatApp is designed for users who value
              both <span className="font-semibold">privacy and performance</span>.
              We constantly innovate to ensure your conversations are smooth and protected.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl font-bold mb-6"
        >
          Why Choose ChatApp?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "🔒 Secure & Private",
              text: "End-to-end encryption ensures that only you and the person you’re chatting with can read messages.",
            },
            {
              title: "⚡ Lightning Fast",
              text: "Optimized for speed so your conversations sync instantly across all your devices.",
            },
            {
              title: "🎨 Clean & Modern",
              text: "A beautifully designed interface that is simple, intuitive, and user-friendly for everyone.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="p-6 bg-base-200 rounded-xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="opacity-80">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
