// Import all your images here
import ankiCards from '../../public/anki_cards.png';
import birdFeeder from '../../public/bird_feeder.jpg';
import housingDigitalization from '../../public/housing_digitalization.png';
import hpcConference from '../../public/hpc_conference.png';
import incentivizedDataPlatform from '../../public/incentivized_data_platform.png';
import llmHotelSearch from '../../public/llm_hotel_search.png';
import personalServer from '../../public/personal_server.png';
import pmParticleStation from '../../public/pm_particle_station.png';
import summerSchool from '../../public/summer_school.png';
import workflow from '../../public/workflow.jpg';
// Add more image imports as needed

// Export all images in an object
export const images = {
  llmHotelSearch,
  ankiCards,
  housingDigitalization,
  summerSchool,
  workflow,
  incentivizedDataPlatform,
  hpcConference,
  personalServer,
  birdFeeder,
  pmParticleStation,
  // Add more images here
} as const;

// Type for image keys
export type ImageKey = keyof typeof images; 