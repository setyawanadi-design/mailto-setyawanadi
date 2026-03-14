---
title: "POSM Deployment Tracker — Field Operations Tool"
from: "setyawanadi"
fromEmail: "setyawanadi@hotmail.com"
date: 2025-09-15
preview: "A spreadsheet-based tracking system for managing POSM deployments across 20+ retail locations..."
tags: ["dev", "career"]
---

This project was built to solve a real problem: tracking Point of Sale Materials deployments across dozens of retail locations with no budget for enterprise software.

![Deployment tracking dashboard](https://picsum.photos/seed/tracker/800/400)

## The Problem

Managing POSM deployments across 20+ sites meant tracking hundreds of individual items. The existing process was:

1. Receive deployment schedule via email
2. Manually assign teams to locations
3. Track progress through WhatsApp group chats
4. Compile completion reports by hand at end of day

This led to missed deadlines, double-deployments, and reports that were always a day behind.

## The Solution

A Google Sheets-based tracking system with automated reporting.

### System Architecture

| Component | Tool | Purpose |
|-----------|------|---------|
| Data entry | Google Sheets | Field teams log completion |
| Automation | Google Apps Script | Auto-generates daily reports |
| Dashboard | Google Data Studio | Visual status overview |
| Alerts | Email triggers | Notifies for overdue tasks |

### Deployment Status Codes

| Code | Status | Action Required |
|------|--------|-----------------|
| `P` | Pending | Not yet started |
| `IP` | In Progress | Team on-site |
| `C` | Completed | Verified and documented |
| `X` | Blocked | Issue needs resolution |
| `S` | Skipped | Rescheduled for later |

## Key Features

The tracker included several features that made field work smoother:

- **Real-time status** — Field teams update directly from their phones
- **Auto-generated daily reports** — No more manual compilation
- **Overdue alerts** — Automatic email when tasks pass deadline
- **Photo documentation** — Teams upload completion photos per site
- **Historical data** — Track trends across deployment cycles

![Field team using the tracker on mobile](https://picsum.photos/seed/mobile-tracker/800/450)

## Results

After three months of use:

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Report delivery time | Next day | Same day | -24 hours |
| Deployment accuracy | 82% | 96% | +14% |
| Material waste | ~15% | ~5% | -10% |
| Manager oversight time | 3 hrs/day | 45 min/day | -75% |

## Lessons Learned

1. **Build for the user, not the manager** — The field teams needed something simple on their phones, not a complex dashboard
2. **Google Sheets is underrated** — For small teams without IT budget, Sheets + Apps Script is incredibly powerful
3. **Automate the boring parts** — Nobody should spend hours compiling reports that a script can generate in seconds

> The best tool is the one your team will actually use.
