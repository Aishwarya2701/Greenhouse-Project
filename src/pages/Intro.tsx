import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';

export function Intro() {
  return (
    <PageTransition>
      <div className="pt-20">
        <div 
          className="relative h-[80vh] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('https://img.freepik.com/premium-vector/smart-farming-farmer-hand-using-tablet-control-temperature-humidity-light-large-greenhouse-with-rows-bell-pepper-tomatoes-cucumbers-eggplants-illustration_273525-10.jpg?w=1480')`
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center z-10">
              <h1 className="text-6xl font-bold text-white-bold mb-6">
                Smart Greenhouse
                <br />
                <span className="text-white-400">Monitoring System</span>
              </h1>
              <p className="text-xl font-bold text-white bg-gray-800 p-4 rounded-lg max-w-2xl mx-auto">
                An innovative IoT solution for monitoring and maintaining optimal growing conditions
                in modern greenhouses.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="Modern Greenhouse"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Next-Generation Plant Care
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our smart greenhouse system combines advanced IoT sensors, real-time monitoring,
                and intelligent analytics to ensure your plants thrive in optimal conditions.
              </p>
              <ul className="space-y-4">
                {[
                  'Real-time environmental monitoring',
                  'Advanced air quality analysis',
                  'Plant health tracking',
                  'Automated alerts and notifications',
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center text-gray-700"
                  >
                    <span className="h-2 w-2 bg-green-500 rounded-full mr-3" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center py-6 mt-16">
          <p className="text-lg">© 2025 Smart Greenhouse Project. All rights reserved.</p>
          <p className="text-sm">Designed & Developed with ❤️  by Team AirLeaf</p>
        </footer>
      </div>
    </PageTransition>
  );
}
