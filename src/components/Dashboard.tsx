import { Plane as Plant, Thermometer, Droplets, Sun, Wind } from 'lucide-react';
import { useStore } from '../store/store';

export function Dashboard() {
  const { sensorData } = useStore();
  const { aqi, plants } = sensorData;

  return (
    <div className="p-6 space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Wind className="text-blue-500" />
          Air Quality Index
        </h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-4xl font-bold">{aqi.value}</p>
            <p className={`text-lg ${getAQIColor(aqi.status)}`}>{aqi.status}</p>
          </div>
          <p className="text-gray-500">Last updated: {formatDate(aqi.timestamp)}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plants.map((plant) => (
          <div key={plant.id} className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Plant className="text-green-500" />
              {plant.name}
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <Stat
                icon={<Droplets className="text-blue-500" />}
                label="Moisture"
                value={`${plant.moisture}%`}
              />
              <Stat
                icon={<Thermometer className="text-red-500" />}
                label="Temperature"
                value={`${plant.temperature}°C`}
              />
              <Stat
                icon={<Sun className="text-yellow-500" />}
                label="Light"
                value={`${plant.light}%`}
              />
            </div>
            <div className="mt-4">
              <p className={`text-lg ${getHealthColor(plant.health)}`}>
                Health: {plant.health}
              </p>
              <p className="text-sm text-gray-500">
                Last updated: {formatDate(plant.lastUpdated)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-2">{icon}</div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  );
}

function getAQIColor(status: string) {
  switch (status) {
    case 'Good':
      return 'text-green-500';
    case 'Moderate':
      return 'text-yellow-500';
    case 'Unhealthy':
      return 'text-orange-500';
    case 'Very Unhealthy':
      return 'text-red-500';
    case 'Hazardous':
      return 'text-purple-500';
    default:
      return 'text-gray-500';
  }
}

function getHealthColor(health: string) {
  switch (health) {
    case 'Excellent':
      return 'text-green-500';
    case 'Good':
      return 'text-blue-500';
    case 'Fair':
      return 'text-yellow-500';
    case 'Poor':
      return 'text-red-500';
    default:
      return 'text-gray-500';
  }
}

function formatDate(timestamp: string) {
  return new Date(timestamp).toLocaleString();
}