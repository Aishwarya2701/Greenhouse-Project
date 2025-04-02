import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { Dashboard } from '../components/Dashboard';
import { Leaf, AlertCircle, Thermometer, Droplets, Cpu, Battery, Wrench, Check } from 'lucide-react';
import { PlantMonitor3D } from '../components/PlantMonitor3D';
import { PlantCompatibilityTable } from '../components/PlantCompatibilityTable';
import { GreenhouseFact } from '../components/GreenhouseFact';

export function PlantHealth() {
  const components = [
    { name: 'Node MCU', icon: <Cpu className="w-6 h-6" /> },
    { name: 'Soil Moisture Sensor', icon: <Droplets className="w-6 h-6" /> },
    { name: 'DHT11', icon: <Thermometer className="w-6 h-6" /> },
    { name: 'Battery', icon: <Battery className="w-6 h-6" /> },
    { name: 'Jumper Wires', icon: <Wrench className="w-6 h-6" /> },
    { name: 'Water Pump', icon: <Droplets className="w-6 h-6" /> },
  ];

  const advantages = [
    'Real-time temperature, humidity, and soil moisture tracking',
    'Alerts users to prevent plant stress',
    'Prevents overwatering and dehydration',
    'Remote access with data insights',
    'Reduces manual monitoring effort',
    'Ensures healthier plant growth',
    'Data-driven gardening decisions',
    'Easy to use with low maintenance',
  ];

  return (
    <PageTransition>
      <div className="pt-20">
        <div className="bg-gradient-to-br from-green-500 via-green-400 to-emerald-300 py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl font-bold text-white mb-6">
                Plant Health Monitoring
              </h1>
              <p className="text-xl text-green-50">
                Advanced IoT sensors and real-time analytics for optimal plant growth
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16">
          <GreenhouseFact />

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="text-red-500 w-8 h-8" />
                <h2 className="text-3xl font-bold text-gray-800">Problem Statement</h2>
              </div>
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 bg-red-500 rounded-full mt-2.5" />
                  Maintaining plant health requires balanced temperature, humidity, and soil moisture
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 bg-red-500 rounded-full mt-2.5" />
                  Manual monitoring is time-consuming and often inaccurate
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 bg-red-500 rounded-full mt-2.5" />
                  Plants may suffer from overwatering, dehydration, or stress, affecting growth
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <PlantMonitor3D />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Live Monitoring Dashboard</h2>
            <Dashboard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <PlantCompatibilityTable />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Components Used</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {components.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 text-center"
                >
                  <div className="flex justify-center mb-4 text-green-500">
                    {component.icon}
                  </div>
                  <p className="text-gray-800 font-medium">{component.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">How It Works</h2>
            <p className="text-lg text-gray-600">
              The sensor network collects environmental data and sends it to the ESP8266 (Node MCU).
              The ESP then processes and transmits this data to our cloud database for storage and visualization.
              This enables real-time monitoring, historical analysis, and automated responses through the water pump system.
              <a 
                href="https://thingspeak.mathworks.com/channels/2867628" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:underline ml-1"
              >
                View the Live Dashboard
              </a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Advantages</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Check className="text-green-500 w-5 h-5" />
                    <p className="text-gray-700">{advantage}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
