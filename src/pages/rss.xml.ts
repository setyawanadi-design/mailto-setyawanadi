import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts');
  const logs = await getCollection('logs');

  const postItems = (posts as any[]).map((item) => ({
    title: item.data.title,
    pubDate: new Date(item.data.date),
    description: (item.body || '').replace(/[#*_`\[\]()>-]/g, '').trim().slice(0, 160),
    link: `/${item.data.category}/${item.id}`,
  }));

  const logItems = (logs as any[]).map((item) => ({
    title: item.data.title || 'Log',
    pubDate: new Date(item.data.date),
    description: (item.body || '').slice(0, 160),
    link: `/logs/${item.id}`,
  }));

  const allItems = [...postItems, ...logItems].sort(
    (a, b) => b.pubDate.getTime() - a.pubDate.getTime()
  );

  return rss({
    title: 'mailto:setyawanadi',
    description: 'Personal site of Adi Setyawan — designer, developer, and creative thinker.',
    site: context.site!.toString(),
    items: allItems,
  });
}
