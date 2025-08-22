export default function About() {
  return (
    <div className="bg-base-100 text-base-content">
     
      <div className=" py-10 px-6 mx-4 mt-2 text-center">
        <h1 className="text-5xl font-serif font-bold mb-4">About </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Simple, secure, and lightning-fast conversations — built for everyone.
        </p>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg opacity-80 leading-relaxed">
            We’re a passionate team of developers and designers who believe that
            communication should be seamless and fun. ChatApp was created to
            bring people closer with an elegant, secure, and easy-to-use
            messaging platform. From friends to professionals — our app makes
            conversations smooth and engaging.
          </p>
        </div>
        <img
          src="https://img.freepik.com/free-vector/team-concept-illustration_114360-678.jpg"
          alt="Who We Are"
          className="rounded-xl shadow-lg"
        />
      </section>

   
      <section className="bg-base-200 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://img.freepik.com/free-vector/goal-achievement-concept_23-2148281174.jpg"
            alt="Our Mission"
            className="rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg opacity-80 leading-relaxed">
              Our mission is to build the fastest and most secure chat
              experience. With real-time syncing, end-to-end encryption, and a
              clutter-free interface, ChatApp is designed for users who value
              both **privacy and performance**. We constantly innovate to ensure
              your conversations are smooth and protected.
            </p>
          </div>
        </div>
      </section>

      
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose ChatApp?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-base-200 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">🔒 Secure & Private</h3>
            <p className="opacity-80">
              End-to-end encryption ensures that only you and the person you’re
              chatting with can read messages.
            </p>
          </div>
          <div className="p-6 bg-base-200 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">⚡ Lightning Fast</h3>
            <p className="opacity-80">
              Optimized for speed so your conversations sync instantly across
              all your devices.
            </p>
          </div>
          <div className="p-6 bg-base-200 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">🎨 Clean & Modern</h3>
            <p className="opacity-80">
              A beautifully designed interface that is simple, intuitive, and
              user-friendly for everyone.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
