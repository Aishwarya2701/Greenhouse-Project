import { create } from 'zustand';
import type { SensorData } from '../types';

interface Store {
  sensorData: SensorData;
  updateSensorData: (data: Partial<SensorData>) => void;
}

// Mock initial data
const initialData: SensorData = {
  aqi: {
    value: 42,
    status: 'Good',
    timestamp: new Date().toISOString(),
  },
  plants: [
    {
      id: '1',
      name: 'Tomato Plant',
      moisture: 65,
      temperature: 24,
      light: 80,
      health: 'Excellent',
      lastUpdated: new Date().toISOString(),
    },
    {
      id: '2',
      name: 'Basil',
      moisture: 55,
      temperature: 23,
      light: 75,
      health: 'Good',
      lastUpdated: new Date().toISOString(),
    },
  ],
};

export const useStore = create<Store>((set) => ({
  sensorData: initialData,
  updateSensorData: (data) =>
    set((state) => ({
      sensorData: { ...state.sensorData, ...data },
    })),
}));