import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";

export function Gallery() {
  return (
    <PageTransition>
      <div className="relative w-full h-screen">
        {/* Embedded YouTube Video */}
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/BD7Zdy0Kk3s?autoplay=1&mute=1&loop=1&playlist=BD7Zdy0Kk3s&controls=0"
          title="Smart Greenhouse Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>

        {/* Overlay Content */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold">Smart Greenhouse Project</h1>
            <p className="text-xl mt-4">Revolutionizing agriculture with technology</p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p className="text-lg">© 2025 Smart Greenhouse Project. All rights reserved.</p>
        <p className="text-sm">Designed & Developed with ❤️ by Team AirLeaf</p>
      </footer>
    </PageTransition>
  );
}
