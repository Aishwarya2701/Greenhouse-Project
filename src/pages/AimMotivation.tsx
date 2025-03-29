import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { Target, Lightbulb, Plane as Plant, Wind } from 'lucide-react';

export function AimMotivation() {
  const goals = [
    {
      icon: <Target className="h-8 w-8 text-green-500" />,
      title: 'Sustainable Agriculture',
      description: 'Promote sustainable farming practices through smart technology integration.',
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      title: 'Resource Optimization',
      description: 'Maximize resource efficiency while minimizing environmental impact.',
    },
    {
      icon: <Plant className="h-8 w-8 text-green-600" />,
      title: 'Plant Health',
      description: 'Ensure optimal growing conditions for healthier and more productive plants.',
    },
    {
      icon: <Wind className="h-8 w-8 text-blue-500" />,
      title: 'Air Quality',
      description: 'Monitor and maintain ideal air quality for plant growth.',
    },
  ];

  return (
    <PageTransition>
      <div className="pt-20">
        <div className="bg-gradient-to-b from-green-50 to-white py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl font-bold text-gray-800 mb-6">
                Our Vision & Mission
              </h1>
              <p className="text-xl text-gray-600">
                Creating sustainable and efficient greenhouse environments through
                innovative IoT solutions and smart monitoring systems.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Why Smart Greenhouse Monitoring?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                In today's rapidly changing climate, traditional greenhouse management
                faces numerous challenges. Our smart monitoring system addresses these
                challenges by providing:
              </p>
              <ul className="space-y-4">
                {[
                  'Real-time environmental data analysis',
                  'Predictive maintenance alerts',
                  'Resource usage optimization',
                  'Enhanced crop yield and quality',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-gray-700"
                  >
                    <span className="h-2 w-2 bg-green-500 rounded-full mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://terraconnect.io/wp-content/uploads/2024/01/MicrosoftTeams-image-129.jpg"
                alt="Smart Greenhouse Technology"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Our Goals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {goals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 text-center"
                >
                  <div className="flex justify-center mb-4">{goal.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {goal.title}
                  </h3>
                  <p className="text-gray-600">{goal.description}</p>
                </motion.div>
              ))}
            </div>
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