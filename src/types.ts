export interface AQIData {
  value: number;
  status: 'Good' | 'Moderate' | 'Unhealthy' | 'Very Unhealthy' | 'Hazardous';
  timestamp: string;
}

export interface PlantHealth {
  id: string;
  name: string;
  moisture: number;
  temperature: number;
  light: number;
  health: 'Excellent' | 'Good' | 'Fair' | 'Poor';
  lastUpdated: string;
}

export interface SensorData {
  aqi: AQIData;
  plants: PlantHealth[];
}