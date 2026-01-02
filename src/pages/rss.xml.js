import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import siteConfig from '../data/site-config.ts';
import { sortItemsById } from '../utils/data-utils.ts';

export async function GET(context) {
    const stacks = (await getCollection('stacks')).sort(sortItemsById);
    return rss({
        title: siteConfig.title,
        description: siteConfig.description,
        site: context.site,
        items: stacks.map((item) => ({
            title: item.data.title,
            description: item.data.excerpt,
            link: `/stacks/${item.id}/`,
            pubDate: item.data.publishDate
        }))
    });
}
