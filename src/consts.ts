// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'DrakeLeLionBlanc';
export const SITE_DESCRIPTION = 'Speedrunner & Streamer - Personal bests, events, and gaming showcases';

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

// Navigation Items
export const NAV_ITEMS = [
  { name: 'Welcome', href: '/welcome' },
  { name: 'Speedruns', href: '/speedruns' },
  { name: 'Events', href: '/events' },
  { name: 'Twitch', href: '/twitch' },
  { name: 'Showcases', href: '/showcases' },
  { name: 'Fursona', href: '/fursona' },
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
