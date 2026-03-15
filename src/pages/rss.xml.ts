import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const inbox = await getCollection('inbox');
  const sent = await getCollection('sent');
  const logs = await getCollection('logs');

  const emailItems = [...inbox, ...sent].map((item: any) => ({
    title: item.data.title,
    pubDate: new Date(item.data.date),
    description: item.data.preview,
    link: `/${item.collection}/${item.id}`,
  }));

  const logItems = logs.map((item: any) => ({
    title: item.data.title || 'Log',
    pubDate: new Date(item.data.date),
    description: (item.body || '').slice(0, 160),
    link: `/logs/${item.id}`,
  }));

  const allItems = [...emailItems, ...logItems].sort(
    (a, b) => b.pubDate.getTime() - a.pubDate.getTime()
  );

  return rss({
    title: 'mailto:setyawanadi',
    description: 'Personal site of Adi Setyawan — designer, developer, and creative thinker.',
    site: context.site!.toString(),
    items: allItems,
  });
}
