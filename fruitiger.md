<!DOCTYPE html>

<html lang="en"><head><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/><style>
    :root {
      --frutiger-lime: #32cd32;
      --frutiger-sky: #00aaff;
      --glossy-gradient: linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.05) 100%);
    }
    .glass-panel {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.4);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
    }
    .glossy-button {
      background: linear-gradient(to bottom, #7abcff 0%, #60abf8 44%, #4096ee 100%);
      border: 1px solid #1e70bf;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), 0 2px 4px rgba(0,0,0,0.2);
      text-shadow: 0 1px 1px rgba(0,0,0,0.2);
      transition: all 0.2s;
    }
    .glossy-button:hover {
      filter: brightness(1.1);
      transform: translateY(-1px);
    }
    .active-email {
      background: linear-gradient(180deg, #e0f2fe 0%, #bae6fd 100%) !important;
      border-left: 5px solid var(--frutiger-sky) !important;
    }
    .sidebar-gradient {
      background: linear-gradient(135deg, #e0f2fe 0%, #ffffff 100%);
    }
    .bubble-accent {
      position: absolute;
      border-radius: 50%;
      background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(255,255,255,0));
      pointer-events: none;
    }
  
    #expand-toggle:checked ~ [data-purpose="post-list"] {
      display: none !important;
    }
    #expand-toggle:checked ~ main[data-purpose="reading-pane"] {
      flex: 1 1 0% !important;
    }
    #expand-toggle:checked ~ main [data-icon="expand"] {
      display: none;
    }
    #expand-toggle:checked ~ main [data-icon="collapse"] {
      display: inline-block;
    }
    #expand-toggle:not(:checked) ~ main [data-icon="collapse"] {
      display: none;
    }
  </style>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Blog Inbox - Personal Journal</title>
<!-- BEGIN: Tailwind Configuration -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'email-bg': '#f3f4f6',
            'email-sidebar': '#2d3748',
            'email-accent': '#3182ce',
            'email-border': '#e2e8f0',
          }
        }
      }
    }
  </script>
<!-- END: Tailwind Configuration -->
<style data-purpose="layout-styles">
    /* Custom scrollbar for a cleaner UI look */
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: #cbd5e0;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #a0aec0;
    }
    
    .active-email {
      border-left: 4px solid #3182ce;
      background-color: #ebf8ff;
    }
  
    #expand-toggle:checked ~ [data-purpose="post-list"] {
      display: none !important;
    }
    #expand-toggle:checked ~ main[data-purpose="reading-pane"] {
      flex: 1 1 0% !important;
    }
    #expand-toggle:checked ~ main [data-icon="expand"] {
      display: none;
    }
    #expand-toggle:checked ~ main [data-icon="collapse"] {
      display: inline-block;
    }
    #expand-toggle:not(:checked) ~ main [data-icon="collapse"] {
      display: none;
    }
  </style>
</head>
<body class="bg-gradient-to-br from-sky-50 to-white h-screen flex overflow-hidden font-sans text-slate-800"><input class="hidden" id="expand-toggle" type="checkbox"/>
<!-- BEGIN: Sidebar Navigation -->
<aside class="w-64 sidebar-gradient text-slate-700 flex flex-col h-full border-r border-blue-100 relative overflow-hidden" data-purpose="sidebar-navigation">
<div class="p-6">
<h1 class="text-xl font-bold text-white tracking-tight"><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">BlogBox</span></h1>
<button class="mt-6 w-full hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow transition duration-200 text-sm font-medium glossy-button">
        + New Post
      </button>
</div>
<nav class="flex-1 px-4 space-y-1">
<div class="pb-2">
<p class="px-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Folders</p>
<a class="flex items-center space-x-3 px-2 py-2 rounded-lg bg-sky-100 text-blue-700 font-semibold" href="#">
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
<span class="text-sm">Recent Posts</span>
<span class="ml-auto text-xs bg-email-accent px-2 rounded-full text-white">4</span>
</a>
<a class="flex items-center space-x-3 px-2 py-2 rounded-lg hover:bg-white/50 transition text-slate-600" href="#">
<svg class="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
<span class="text-sm">Archive</span>
</a>
<a class="flex items-center space-x-3 px-2 py-2 rounded-lg hover:bg-white/50 transition text-slate-600" href="#">
<svg class="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
<span class="text-sm">About Me</span>
</a>
<a class="flex items-center space-x-3 px-2 py-2 rounded-lg hover:bg-white/50 transition text-slate-600" href="#">
<svg class="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
<span class="text-sm">Newsletter</span>
</a>
</div>
</nav>
<div class="p-6 border-t border-slate-800">
<div class="flex items-center space-x-3">
<div class="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">JD</div>
<div class="text-xs">
<p class="text-white font-medium">John Doe</p>
<p class="text-slate-500">Author</p>
</div>
</div>
</div>
<div class="bubble-accent w-20 h-20 -top-5 -left-5 opacity-40"></div><div class="bubble-accent w-32 h-32 -bottom-10 -right-10 opacity-20"></div></aside>
<!-- END: Sidebar Navigation -->
<!-- BEGIN: Email List Column -->
<section class="w-96 bg-white/80 backdrop-blur-sm border-r border-blue-100 flex flex-col h-full" data-purpose="post-list">
<div class="p-4 border-b border-email-border flex justify-between items-center bg-white sticky top-0">
<div class="relative w-full">
<input class="w-full pl-10 pr-4 py-2 bg-gray-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-400" placeholder="Search posts..." type="text"/>
<svg class="w-4 h-4 absolute left-3 top-3 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
</div>
</div>
<div class="flex-1 overflow-y-auto">
<!-- Post Entry 1 (Active) -->
<article class="p-4 border-b border-email-border cursor-pointer active-email hover:bg-blue-50 transition" data-purpose="email-summary-item">
<div class="flex justify-between items-start mb-1">
<span class="font-bold text-sm truncate pr-2">Designing in the Dark</span>
<span class="text-xs text-slate-500 shrink-0">10:45 AM</span>
</div>
<p class="text-xs font-semibold text-email-accent mb-1">UI/UX, Minimalism</p>
<p class="text-sm text-slate-600 line-clamp-2">How reducing visual noise changed my creative process. In this post, we explore why less is often more when it comes to digital interfaces...</p>
</article>
<!-- Post Entry 2 -->
<article class="p-4 border-b border-email-border cursor-pointer hover:bg-gray-50 transition" data-purpose="email-summary-item">
<div class="flex justify-between items-start mb-1">
<span class="font-bold text-sm truncate pr-2">The Future of Semantic Web</span>
<span class="text-xs text-slate-500 shrink-0">Oct 12</span>
</div>
<p class="text-xs font-semibold text-slate-400 mb-1">Technology</p>
<p class="text-sm text-slate-500 line-clamp-2">Exploring the evolution of HTML5 and how metadata is shaping the way we build modern applications...</p>
</article>
<!-- Post Entry 3 -->
<article class="p-4 border-b border-email-border cursor-pointer hover:bg-gray-50 transition" data-purpose="email-summary-item">
<div class="flex justify-between items-start mb-1">
<span class="font-bold text-sm truncate pr-2">A Guide to Minimalist Living</span>
<span class="text-xs text-slate-500 shrink-0">Oct 10</span>
</div>
<p class="text-xs font-semibold text-slate-400 mb-1">Lifestyle</p>
<p class="text-sm text-slate-500 line-clamp-2">Starting the journey of decluttering not just my physical space, but my digital life as well. Lessons learned from 30 days...</p>
</article>
<!-- Post Entry 4 -->
<article class="p-4 border-b border-email-border cursor-pointer hover:bg-gray-50 transition" data-purpose="email-summary-item">
<div class="flex justify-between items-start mb-1">
<span class="font-bold text-sm truncate pr-2">Coffee and Code</span>
<span class="text-xs text-slate-500 shrink-0">Sep 28</span>
</div>
<p class="text-xs font-semibold text-slate-400 mb-1">Personal</p>
<p class="text-sm text-slate-500 line-clamp-2">My morning ritual is more than just caffeine; it's a dedicated space for deep thinking and problem-solving before the noise...</p>
</article>
</div>
</section>
<!-- END: Email List Column -->
<!-- BEGIN: Reading Pane -->
<main class="flex-1 bg-white flex flex-col h-full" data-purpose="reading-pane">
<!-- Reading Pane Header Actions -->
<header class="h-14 glass-panel flex items-center justify-between px-6 shrink-0 z-10">
<div class="flex items-center space-x-4">
<button class="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-blue-200 bg-white/80 hover:bg-sky-50 text-blue-600 text-sm font-semibold transition shadow-sm" title="Comment">
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
<span>Reply</span>
</button>
<button class="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-blue-200 bg-white/80 hover:bg-sky-50 text-blue-600 text-sm font-semibold transition shadow-sm" title="Share">
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
<span>Forward</span>
</button>
<button class="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-blue-200 bg-white/80 hover:bg-sky-50 text-blue-600 text-sm font-semibold transition shadow-sm" title="Save for later">
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
<span>Archive</span>
</button><label class="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-blue-200 bg-white/80 hover:bg-sky-50 text-blue-600 text-sm font-semibold transition shadow-sm cursor-pointer" for="expand-toggle" title="Expand View">
<span class="material-symbols-outlined text-base" data-icon="expand">open_in_full</span>
<span class="material-symbols-outlined text-base" data-icon="collapse">close_fullscreen</span>
<span>Expand</span>
</label>
</div>
<div class="flex items-center space-x-2 text-slate-400">
<button class="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-blue-200 bg-white/80 hover:bg-sky-50 text-blue-600 text-sm font-semibold transition shadow-sm"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button>
<button class="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-blue-200 bg-white/80 hover:bg-sky-50 text-blue-600 text-sm font-semibold transition shadow-sm"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button>
</div>
</header>
<!-- Post Content Area -->
<article class="flex-1 overflow-y-auto p-8 lg:p-12" data-purpose="blog-post-content">
<div class="max-w-3xl mx-auto">
<!-- Post Meta -->
<div class="mb-8 border-b border-email-border pb-6">
<h2 class="text-3xl font-bold text-slate-900 mb-4">Designing in the Dark: Why Minimalism Matters</h2>
<div class="flex items-center justify-between">
<div class="flex items-center space-x-3">
<div class="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">JD</div>
<div>
<p class="text-sm font-bold text-slate-900">John Doe <span class="text-slate-400 font-normal">&lt;john@personal-journal.me&gt;</span></p>
<p class="text-xs text-slate-500">To: You &lt;reader@blogbox.app&gt;</p>
</div>
</div>
<div class="text-right">
<p class="text-xs text-slate-500">Today, 10:45 AM (2 hours ago)</p>
</div>
</div>
</div>
<!-- Post Body -->
<div class="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
<p>
            The modern digital landscape is a cacophony of notifications, vibrant banners, and intrusive pop-ups. In this environment, <strong>minimalism</strong> is not just an aesthetic choice; it’s a form of respect for the user's attention.
          </p>
<p>
            When we "design in the dark"—stripping away the unnecessary—we force ourselves to focus on the core functionality. I've found that by limiting my palette to a few shades and focusing purely on typography, the message of the content becomes much clearer.
          </p>
<img alt="Minimalist Workspace" class="rounded-lg shadow-sm border border-email-border w-full rounded-2xl border-4 border-white shadow-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV0T9qkY7bM9ScuRs5kOaOgOY6OrFErmt6N8Nfi5E4djHVjkLpOtvyiEcVnShDhfKiCFjVOLaUr9_-sfwCx6HfMX5Tmfktd9FpRMGjdx5s7XHFhfrzdy4vX01ScAdnI8Xdv-_QAmzPAL4QQK7nuYI3k9f5zMauJJMiikK3AAZR5ubK70En7sahRcV6NMhxBE918KD7Cnz0yiZNLqyt572DXePkka8ZQRs-qJ0HxKRIRsgpiEQgNiRTGBBEwGt62b39GzBWI2svt0c"/>
<p class="text-sm text-center text-slate-400 italic">"Simplicity is the ultimate sophistication." — Leonardo da Vinci</p>
<h3 class="text-xl font-bold text-slate-800 mt-8 mb-4">Three Principles for a Quieter Web</h3>
<ul class="list-disc pl-5 space-y-2">
<li><strong>Constraint as a Tool:</strong> Use fewer fonts and colors to create hierarchy.</li>
<li><strong>Negative Space:</strong> Let the content breathe. White space is not empty space; it’s a powerful layout element.</li>
<li><strong>Intentionality:</strong> Every element on the page should serve a specific purpose. If it doesn't help the user achieve their goal, it's clutter.</li>
</ul>
<p>
            In future posts, I'll be diving deeper into the technical implementation of these principles using Tailwind CSS and semantic HTML. Stay tuned.
          </p>
<div class="mt-12 pt-8 border-t border-dashed border-slate-200">
<p class="text-sm text-slate-500">Best regards,</p>
<p class="text-sm font-bold text-slate-800">John</p>
<div class="mt-4 flex space-x-2">
<span class="px-2 py-1 bg-slate-100 text-[10px] rounded uppercase font-bold tracking-widest text-slate-500">Sent via BlogBox Mobile</span>
</div>
</div>
</div>
</div>
</article>
<!-- Quick Reply Footer -->
<footer class="p-4 border-t border-email-border bg-gray-50" data-purpose="reply-footer">
<div class="max-w-3xl mx-auto flex items-center space-x-3">
<div class="flex-1 bg-white/90 border border-blue-200 rounded-2xl p-4 text-sm text-slate-500 cursor-text hover:border-blue-400 transition shadow-inner">
          Click here to <span class="text-email-accent font-medium">Reply (Comment)</span> to this post...
        </div>
</div>
</footer>
</main>
<!-- END: Reading Pane -->
</body></html><!-- MISSING_IMAGES:
- Profile avatar for 'John Doe' placeholder was used (JD text div)
- Blog post featured image placeholder was used (https://placehold.co/800x400)
-->