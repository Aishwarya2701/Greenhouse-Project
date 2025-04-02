import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { Wind, Cpu, Gauge, Cloud, Wifi, Database, LineChart, Zap } from 'lucide-react';
import { AQISensor3D } from '../components/AQISensor3D';

export function AQIProject() {
  const technicalStacks = [
    {
      title: 'Microcontroller',
      icon: <Cpu className="w-8 h-8" />,
      description: 'Node MCU ESP8266',
      number: '01'
    },
    {
      title: 'Sensor Variety',
      icon: <Gauge className="w-8 h-8" />,
      description: 'Equipped with DHT11 and MQ2 sensors for air quality monitoring. Data is stored in Blynk Cloud.',
      number: '02'
    },
    {
      title: 'Data Processing Algorithms',
      icon: <LineChart className="w-8 h-8" />,
      description: 'Sensor data is processed and visualized. Cloud integration ensures secure storage and easy data retrieval.',
      number: '03'
    },
    {
      title: 'Further Enhancements',
      icon: <Wifi className="w-8 h-8" />,
      description: 'Wireless connectivity (Wi-Fi, Bluetooth) enables remote monitoring and smart home integration with IoT platforms like Home Assistant. Real-time data sync improves system usability.',
      number: '04'
    }
  ];

  const benefits = [
    {
      title: 'Real-time Monitoring',
      description: 'Continuous tracking of air quality parameters',
      icon: <Gauge className="w-6 h-6" />
    },
    {
      title: 'Health Awareness',
      description: 'Immediate alerts for harmful air conditions',
      icon: <Wind className="w-6 h-6" />
    },
    {
      title: 'Data Analytics',
      description: 'Advanced analysis of air quality trends',
      icon: <LineChart className="w-6 h-6" />
    },
    {
      title: 'Energy Efficient',
      description: 'Low power consumption for sustainable operation',
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <PageTransition>
      <div className="pt-20">
        <div className="bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl font-bold text-white mb-6">
                Air Quality Index Monitoring
              </h1>
              <p className="text-xl text-blue-50">
                Advanced IoT-based air quality monitoring for optimal environmental conditions
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Wind className="text-blue-500 w-8 h-8" />
                <h2 className="text-3xl font-bold text-gray-800">Aim & Objectives</h2>
              </div>
              <p className="text-lg text-gray-600">
                The objective of the Air Quality Index (AQI) is to communicate the level of air pollution 
                to the public in a simple and understandable way. It provides a numerical value that 
                represents the overall air quality, helping people assess potential health risks and take 
                necessary precautions based on pollution levels.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <AQISensor3D />
            </motion.div>
          </div>

          {/* Technical Stacks */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Technical Stack</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {technicalStacks.map((stack, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden"
                >
                  <span className="absolute top-0 right-0 bg-blue-500 text-white text-4xl font-bold py-2 px-4 rounded-bl-xl opacity-10">
                    {stack.number}
                  </span>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-blue-500">{stack.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800">{stack.title}</h3>
                  </div>
                  <p className="text-gray-600">{stack.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="container mx-auto px-6 py-16">
          {/* System Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">System Architecture</h2>
            <p className="text-lg text-gray-600 mb-6">
              The system uses MQ2 sensors to sense the presence of harmful gases/compounds in the air 
              and constantly transmit this data. This keeps measuring air quality level and reports it. 
              The sensors interact with ESP8266 and processes this data and transmits it over the application. This allows the owner of the device to monitor 
              air pollution in different areas with the data and act against it.
              <a 
                href="https://blynk.cloud/dashboard/447458/global/devices/1/organization/447458/devices/1481916/dashboard" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:underline ml-1"
              >
                View the Live Dashboard
              </a>
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <Gauge className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-800">Data Collection</h4>
                <p className="text-gray-600">Multiple sensors gathering air quality data</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <Database className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-800">Processing</h4>
                <p className="text-gray-600">Real-time data analysis and storage</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <Cloud className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-800">Cloud Integration</h4>
                <p className="text-gray-600">Secure cloud storage and accessibility</p>
              </div>
            </div>
          </motion.div>

          {/* Impact and Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Impact and Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex justify-center mb-4 text-blue-500">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-center">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center py-6 mt-16">
          <p className="text-lg">© 2025 Smart Greenhouse Project. All rights reserved.</p>
          <p className="text-sm">Designed & Developed with ❤️ by Team AirLeaf</p>
        </footer>
        </div>
      </div>
    </PageTransition>
  );
}
