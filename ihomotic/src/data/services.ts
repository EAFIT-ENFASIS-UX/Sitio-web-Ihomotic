import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'home-automation',
    icon: 'Home',
    title: 'services.items.home_automation.title',
    description: 'services.items.home_automation.description',
  },
  {
    id: 'smart-lighting',
    icon: 'Lightbulb',
    title: 'services.items.smart_lighting.title',
    description: 'services.items.smart_lighting.description',
  },
  {
    id: 'security-cctv',
    icon: 'Shield',
    title: 'services.items.security_cctv.title',
    description: 'services.items.security_cctv.description',
  },
  {
    id: 'energy-saving',
    icon: 'Zap',
    title: 'services.items.energy_saving.title',
    description: 'services.items.energy_saving.description',
  },
  {
    id: 'voice-control',
    icon: 'Mic',
    title: 'services.items.voice_control.title',
    description: 'services.items.voice_control.description',
  },
  {
    id: 'iot-integration',
    icon: 'Wifi',
    title: 'services.items.iot_integration.title',
    description: 'services.items.iot_integration.description',
  },
]
