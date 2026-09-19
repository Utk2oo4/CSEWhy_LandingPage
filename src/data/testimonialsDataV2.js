// AICF Twitter images — used across all courses as a preview
import aicfTwitter1 from '../assets/testimonials-img/aicf/twitter/aicf1.jpeg';
import aicfTwitter2 from '../assets/testimonials-img/aicf/twitter/aicf2.jpeg';
import aicfTwitter3 from '../assets/testimonials-img/aicf/twitter/aicf3.jpeg';

// ─── Course order & metadata ────────────────────────────────────────────────
export const COURSES_V2 = [
  {
    id: 'Pyq',
    label: 'PYQ Mastery 2027',
    highlight: 'PYQ Mastery',
    subtitle: 'See how aspirants are using PYQs to understand the exam and prepare smarter.'
  },
  {
    id: 'Monthly Magazine',
    label: 'Current Affairs Magazine',
    highlight: 'Current Affairs',
    subtitle: 'How aspirants are using our monthly magazine to stay updated without the overload.'
  },
  {
    id: 'Csat',
    label: 'CSAT Power Pack 2027',
    highlight: 'CSAT Power Pack',
    subtitle: 'Real stories from aspirants who made CSAT practice more focused and manageable.'
  },
  {
    id: 'Aiforupsc',
    label: 'Master AI for UPSC',
    highlight: 'Master AI',
    subtitle: 'See how aspirants are using AI to save time, learn faster and prepare smarter.'
  },
  {
    id: 'Foundation notes',
    label: 'UPSC Foundation Package',
    highlight: 'Foundation Package',
    subtitle: 'How our foundation resources are helping aspirants build a stronger base for UPSC.'
  },
  {
    id: 'Publicpolicy',
    label: 'Public Policy Fellowship',
    highlight: 'Public Policy',
    subtitle: 'Stories from aspirants exploring public policy beyond the UPSC syllabus.'
  },
  {
    id: 'AICF',
    label: 'AI Creator Fellowship',
    highlight: 'AI Creator',
    subtitle: 'See how aspiring creators are learning, building and turning their ideas into reality.'
  },
  {
    id: 'PersonalityDevelopment',
    label: 'Personality Development Program',
    highlight: 'Personality Development',
    subtitle: 'Real experiences from aspirants working on confidence, communication and interview skills.'
  },
  {
    id: 'MasterclassAiforupsc',
    label: 'AI Masterclass for UPSC Aspirants',
    highlight: 'AI Masterclass',
    subtitle: 'How aspirants are discovering practical ways to bring AI into their UPSC preparation.'
  },
];

// ─── Shared preview images ──────────────────────────────────────────────────
// Using the same 3 AICF screenshots across all courses for layout preview.
// Replace each course entry with its real images when available.
const previewImages = [
  { imageUrl: aicfTwitter1, platform: 'Twitter', alt: 'Testimonial screenshot from a CSEWhy learner' },
  { imageUrl: aicfTwitter2, platform: 'Twitter', alt: 'Testimonial screenshot from a CSEWhy learner' },
  { imageUrl: aicfTwitter3, platform: 'Twitter', alt: 'Testimonial screenshot from a CSEWhy learner' },
];

// ─── All testimonials ───────────────────────────────────────────────────────
export const ALL_TESTIMONIALS = COURSES_V2.flatMap((course) =>
  previewImages.map((img, i) => ({
    id: `${course.id}-preview-${i}`,
    course: course.id,
    platform: img.platform,
    imageUrl: img.imageUrl,
    alt: `${course.label} testimonial from a CSEWhy learner`,
    createdAt: '2025-06-16T10:24:00Z',
  }))
);

/**
 * Returns all testimonials for a given course id, mixed from all platforms.
 */
export function getTestimonialsForCourse(courseId) {
  return ALL_TESTIMONIALS.filter((t) => t.course === courseId);
}
