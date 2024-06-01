// src/data/galleryData.js
import imagePaths from './imagePaths';

const galleryData = [
  { title: 'Feeding Time', images: imagePaths.slice(0, 2), description: 'Cows being fed.', size: 'large' },
  { title: 'Vaccination', images: imagePaths.slice(2, 4), description: 'Routine checkup.', size: 'medium' },
  { title: 'Farm Visit', images: imagePaths.slice(4, 6), description: 'Inspecting livestock.', size: 'medium' },
  { title: 'Grazing', images: imagePaths.slice(6, 8), description: 'Open field grazing.', size: 'large' },
  { title: 'Milk Collection', images: imagePaths.slice(8, 10), description: 'Daily harvest.', size: 'medium' },
  { title: 'Vet Training', images: imagePaths.slice(10, 12), description: 'Skill development.', size: 'medium' },
  { title: 'Community Meeting', images: imagePaths.slice(12, 14), description: 'Local engagement.', size: 'medium' },
  { title: 'Healthy Herd', images: imagePaths.slice(14, 16), description: 'Strong livestock.', size: 'large' },
  { title: 'Barn Maintenance', images: imagePaths.slice(16, 18), description: 'Clean and tidy barns.', size: 'medium' },
  { title: 'Equipment Check', images: imagePaths.slice(18, 20), description: 'Ensuring everything works.', size: 'medium' },
  { title: 'Feeding Time', images: imagePaths.slice(20, 22), description: 'Cows being fed.', size: 'medium' },
];

export default galleryData;
