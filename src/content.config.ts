import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
	}),
});

const speedruns = defineCollection({
	loader: glob({ base: './src/content/speedruns', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) => z.object({
		game: z.string(),
		image: image(),
		categories: z.array(z.object({
			name: z.string(),
			personalBest: z.string(),
			rank: z.number(),
			videoUrl: z.string().optional(),
			platform: z.string(),
			date: z.coerce.date(),
		})),
		featured: z.boolean().default(false),
		order: z.number().default(0),
	}),
});

const events = defineCollection({
	loader: glob({ base: './src/content/events', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		type: z.enum(['speedrun', 'charity', 'community', 'showcase']),
		date: z.coerce.date(),
		endDate: z.coerce.date().optional(),
		description: z.string(),
		playlistUrl: z.string().optional(),
		participants: z.array(z.string()).optional(),
		fundraisingTotal: z.string().optional(),
		image: image().optional(),
		featured: z.boolean().default(false),
	}),
});

const showcases = defineCollection({
	loader: glob({ base: './src/content/showcases', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		event: z.string(),
		game: z.string(),
		category: z.string(),
		finalTime: z.string(),
		placement: z.number().optional(),
		date: z.coerce.date(),
		videoUrl: z.string().optional(),
		notes: z.string().optional(),
		image: image().optional(),
	}),
});

export const collections = { 
	blog, 
	speedruns, 
	events, 
	showcases 
};
