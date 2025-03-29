import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';

export function Gallery() {
  const images = [
    {
      url: './dist/assets/aqi dash1.jpg',
      title: 'AQI Dashboard',
      description: 'AQI dashboard for real time analysis',
    },
    {
      url: './dist/assets/aqi1.jpg',
      title: 'AQI Sensor Network',
      description: 'Advanced IoT sensors for environmental monitoring',
    },
    {
      url: './dist/assets/plant dash1.jpg',
      title: 'Plant Dashboard',
      description: 'Healthy plants thriving in optimal conditions',
    },
    {
      url: './dist/assets/plant sensor1.jpg',
      title: 'Plant Health Monitoring',
      description: 'Promoting sustainable farming practices',
    },
  ];

  return (
    <PageTransition>
      <div className="pt-20">
        <div className="bg-gradient-to-b from-purple-50 to-white py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl font-bold text-gray-800 mb-6">
                Project Gallery
              </h1>
              <p className="text-xl text-gray-600">
                Explore our smart greenhouse monitoring system in action
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                      <p className="text-sm">{image.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center py-6 mt-16">
          <p className="text-lg">© 2025 Smart Greenhouse Project. All rights reserved.</p>
          <p className="text-sm">Designed & Developed with ❤️ by Team AirLeaf</p>
        </footer>
      </div>
    </PageTransition>
  );
}