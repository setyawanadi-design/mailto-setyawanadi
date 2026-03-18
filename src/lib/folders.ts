export const folderMap: Record<string, { category: string | null; label: string }> = {
  inbox: { category: 'inbox', label: 'Inbox' },
  sent: { category: 'sent', label: 'Sent' },
  drafts: { category: 'drafts', label: 'Drafts' },
  notes: { category: 'notes', label: 'Notes' },
  archive: { category: 'archive', label: 'Archive' },
  starred: { category: null, label: 'Starred' },
};

export type EmailEntry = {
  id: string;
  body?: string;
  data: {
    title: string;
    date: Date;
    category: string;
    pinned?: boolean;
    tags?: string[];
    attachments?: { name: string; url: string; size: string }[];
  };
};

export function sortMessages(items: EmailEntry[]): EmailEntry[] {
  return [...items].sort((a, b) => {
    if (a.data.pinned && !b.data.pinned) return -1;
    if (!a.data.pinned && b.data.pinned) return 1;
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });
}

export function generatePreview(body: string | undefined): string {
  if (!body) return '';
  return body.replace(/[#*_`\[\]()>-]/g, '').trim().slice(0, 160);
}

export function getItemsByFolder(allPosts: EmailEntry[], folder: string): EmailEntry[] {
  const info = folderMap[folder];
  if (!info) return [];

  if (folder === 'starred') {
    return allPosts.filter((item) => item.data.pinned);
  }

  return allPosts.filter((item) => item.data.category === info.category);
}

export const folderIcons: Record<string, string> = {
  inbox:
    '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>',
  sent:
    '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
  drafts:
    '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
  notes:
    '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  archive:
    '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',
  starred:
    '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
};

export const FORMSPREE_URL = 'https://formspree.io/f/xjgeajby';
