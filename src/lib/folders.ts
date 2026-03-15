export const folderMap: Record<string, { collection: string; label: string }> = {
  inbox: { collection: 'inbox', label: 'Inbox' },
  sent: { collection: 'sent', label: 'Sent' },
  drafts: { collection: 'drafts', label: 'Drafts' },
  notes: { collection: 'notes', label: 'Notes' },
  archive: { collection: 'archive', label: 'Archive' },
  starred: { collection: 'starred', label: 'Starred' },
};

export type EmailEntry = {
  id: string;
  data: {
    title: string;
    from: string;
    fromEmail: string;
    date: Date;
    preview: string;
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

export const FORMSPREE_URL = 'https://formspree.io/f/xjgeajby';
