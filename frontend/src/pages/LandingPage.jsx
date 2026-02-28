import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  const cards = [
    {
      title: "Instant Code Sharing",
      desc: "Generate a unique link and share your code with anyone instantly.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      title: "Multi File Projects",
      desc: "Organize complex snippets across multiple files easily.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Developer First UI",
      desc: "Minimal interface focused entirely on writing and reading code.",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      title: "Debug Faster",
      desc: "Send your snippet to teammates and fix bugs instantly.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Teaching Friendly",
      desc: "Perfect tool for Students and Teachers demonstrating code examples.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Team Collaboration",
      desc: "Share snippets across teams and collaborate efficiently.",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <div className="bg-[#0b0b0f] text-white overflow-x-hidden">
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-purple-600 blur-[200px] opacity-30 rounded-full -top-40 -left-40"></div>

        <div className="absolute w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-blue-500 blur-[200px] opacity-30 rounded-full bottom-0 right-0"></div>
      </div>

      {/* NAVBAR */}

      <nav className="flex justify-between items-center px-6 md:px-10 py-5 md:py-6 border-b border-white/10 backdrop-blur-lg">
        <h1 className="text-lg md:text-xl font-bold">CodeMesh 🕸️</h1>

        <button
          onClick={() => navigate("/editor")}
          className="px-4 md:px-5 py-2 bg-white text-black rounded-lg font-semibold hover:scale-105 transition text-sm md:text-base cursor-crosshair"
        >
          Launch Editor 🦎
        </button>
      </nav>

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 pt-20 md:pt-28 pb-20 md:pb-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            The Best and Fastest Tool For
            <span className="text-purple-400">
              <TypeAnimation
                sequence={[
                  " Share Code",
                  2000,
                  " Debug Code",
                  2000,
                  " Enjoy Code",
                  2000,
                ]}
                speed={40}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className="mt-6 text-gray-400 text-base md:text-lg max-w-xl mx-auto md:mx-0">
            CodeMesh is a developer focused platform for instantly sharing code
            using simple shareable links and also compare code with AI generated
            code which is the optimized version of the code so you get the more
            clear, clean and optimized code.
          </p>

          <button
            onClick={() => navigate("/editor")}
            className="mt-8 px-8 py-3 md:py-4 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 hover:scale-105 transition w-full sm:w-auto cursor-crosshair"
          >
            Start Sharing Code
          </button>
        </motion.div>

        {/* Floating Code Card */}

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5 md:p-6 shadow-2xl w-full"
        >
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>

          <pre className="text-xs sm:text-sm text-gray-300 font-mono overflow-x-auto cursor-crosshair">
            <button className="font-bold cursor-crosshair">
              <span className="text-red-600 font-extrabold">// No</span> Signup
              and Login Required
            </button>
            <br />
            <br />
            {`function greet(name){
  return "Hello " + name
}

console.log(greet("Developer"))

`}
          </pre>
        </motion.div>
      </section>

      {/* FEATURES GRID */}

      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        className="max-w-7xl mx-auto px-6 py-20 md:py-24"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
          Powerful Features
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                scale: 1.05,
              }}
              className="group relative p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg cursor-pointer overflow-hidden"
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition bg-gradient-to-r ${card.gradient}`}
              />

              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 relative z-10">
                {card.title}
              </h3>

              <p className="text-gray-400 text-sm md:text-base relative z-10">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* LIVE PREVIEW */}

      <section className="py-20 md:py-28 bg-white/5">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Beautiful Code Viewing
            </h2>

            <p className="text-gray-400">
              Share your code and let others view your code in a clean, readable
              interface designed specifically for developers.
            </p>
          </div>

          <div className="bg-black border border-white/10 rounded-xl p-5 md:p-6 font-mono text-xs sm:text-sm overflow-x-auto">
            {`const add = (a,b) => {
  return a + b
}

console.log(add(2,5))`}
          </div>
        </div>
      </section>

      {/* WHY DEVELOPERS LOVE CODEMESH */}

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Why Developers Love CodeMesh
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 */}

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg text-center"
          >
            <div className="text-4xl mb-4">🖼️</div>

            <h3 className="text-xl font-semibold mb-3">
              Friendly User Interface
            </h3>

            <p className="text-gray-400 text-sm">
              Clean interface where you can Paste Code, Format with AI and Share
              instantly.
            </p>
          </motion.div>

          {/* Card 2 */}

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg text-center"
          >
            <div className="text-4xl mb-4">⚡</div>

            <h3 className="text-xl font-semibold mb-3">Instant Sharing</h3>

            <p className="text-gray-400 text-sm">
              Generate a Shareable Link and send your Code instantly to anyone.
            </p>
          </motion.div>

          {/* Card 3 */}

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg text-center"
          >
            <div className="text-4xl mb-4">🧠</div>

            <h3 className="text-xl font-semibold mb-3">
              Clean AI Optimized Code Reading
            </h3>

            <p className="text-gray-400 text-sm">
              View Shared Code in a clean readable format and compare it with AI
              Optimized Code.
            </p>
          </motion.div>
        </div>
      </section>
      {/* CTA */}

      <section className="text-center py-20 md:py-28 px-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Start Sharing Code Today
        </h2>

        <button
          onClick={() => navigate("/editor")}
          className="mt-8 px-8 md:px-10 py-3 md:py-4 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 hover:scale-105 transition w-full sm:w-auto cursor-crosshair"
        >
          Click🕸️To Launch CodeMesh Editor
        </button>
      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 py-6 md:py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} CodeMesh
      </footer>
    </div>
  );
}
