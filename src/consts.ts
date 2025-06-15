// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'DrakeLeLionBlanc';
export const SITE_DESCRIPTION = 'Speedrunner & Streamer - Personal bests, events, and gaming showcases';

// Base path for GitHub Pages deployment
export const BASE_PATH = '/portfolio';

// Helper function to prepend base path to internal links
export function withBasePath(path: string): string {
  return path.startsWith('/') ? `${BASE_PATH}${path}` : `${BASE_PATH}/${path}`;
}

// Social Media Links
export const SOCIAL_LINKS = {
  twitch: 'https://twitch.tv/drakelelionblanc',
  speedruncom: 'https://speedrun.com/user/DrakeLeLionBlanc',
  github: 'https://github.com/drakelelionblanc',
  bluesky: 'https://bsky.app/profile/drakelelionblanc',
  discord: 'https://discord.gg/drakelelionblanc',
  tiktok: 'https://tiktok.com/@drakelelionblanc',
  youtube: 'https://youtube.com/@drakelelionblanc'
} as const;

// Navigation Items with base path
export const NAV_ITEMS = [
  { name: 'Welcome', href: '/portfolio/welcome' },
  { name: 'Speedruns', href: '/portfolio/speedruns' },
  { name: 'Events', href: '/portfolio/events' },
  { name: 'Twitch', href: '/portfolio/twitch' },
  { name: 'Showcases', href: '/portfolio/showcases' },
  { name: 'Fursona', href: '/portfolio/fursona' },
] as const;

// Speedrun Categories
export const SPEEDRUN_PLATFORMS = {
  PC: 'PC',
  CONSOLE: 'Console'
} as const;

export const RANK_COLORS = {
  TOP_10: 'text-yellow-500',
  TOP_50: 'text-orange-500',
  TOP_100: 'text-blue-500',
  DEFAULT: 'text-gray-500'
} as const;
