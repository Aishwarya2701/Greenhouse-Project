import { motion } from 'framer-motion';
import { Plane as Plant } from 'lucide-react';

interface Plant {
  name: string;
  temperature: string;
  moisture: string;
  pH: string;
  humidity: string;
  effects: string;
  solutions: string;
}

const plants: Plant[] = [
  { name: "Tomato", temperature: "20-30°C", moisture: "Moderate", pH: "6.0-6.8", humidity: "Moderate", effects: "Wilting, blossom-end rot, poor fruiting", solutions: "Mulching, proper irrigation, calcium supplements" },
  { name: "Wheat", temperature: "15-25°C", moisture: "Low", pH: "6.0-7.5", humidity: "Low", effects: "Stunted growth, fungal diseases", solutions: "Proper drainage, fungicide treatment" },
  { name: "Rice", temperature: "25-35°C", moisture: "High", pH: "5.0-6.5", humidity: "High", effects: "Drought stress, yellowing leaves", solutions: "Maintain water levels, use drought-resistant varieties" },
  { name: "Corn", temperature: "18-30°C", moisture: "Moderate", pH: "5.8-7.0", humidity: "Moderate", effects: "Kernel abortion, poor pollination", solutions: "Timely irrigation, pest management" },
  { name: "Soybean", temperature: "20-28°C", moisture: "Moderate", pH: "6.0-7.0", humidity: "Moderate", effects: "Reduced pod formation, leaf curling", solutions: "Proper fertilization, deep watering" },
  { name: "Potato", temperature: "10-20°C", moisture: "High", pH: "5.0-6.5", humidity: "Low", effects: "Small tubers, disease susceptibility", solutions: "Proper hilling, cool storage post-harvest" },
  { name: "Lettuce", temperature: "10-22°C", moisture: "Moderate", pH: "6.0-6.5", humidity: "High", effects: "Bolting, bitter taste", solutions: "Shading, maintaining cool temperatures" },
  { name: "Strawberry", temperature: "15-25°C", moisture: "High", pH: "5.5-6.5", humidity: "High", effects: "Poor fruit development, fungal infections", solutions: "Drip irrigation, mulching" },
  { name: "Carrot", temperature: "15-25°C", moisture: "Moderate", pH: "6.0-6.8", humidity: "Low", effects: "Cracking, stunted growth", solutions: "Loose, well-drained soil, proper spacing" },
  { name: "Pepper", temperature: "18-30°C", moisture: "Moderate", pH: "5.5-6.8", humidity: "Moderate", effects: "Sunscaled, flower drop", solutions: "Mulching, shade protection" }
];

export function PlantCompatibilityTable() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Plant className="text-green-500" />
        Plant Suitability Analysis
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Plant
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Temperature
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Moisture
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                pH Level
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Humidity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Effects
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Solutions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {plants.map((plant, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="hover:bg-gray-50"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {plant.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {plant.temperature}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {plant.moisture}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {plant.pH}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {plant.humidity}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {plant.effects}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {plant.solutions}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}