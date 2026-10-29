# MemVault for Obsidian

Connect Obsidian to [MemVault](https://github.com/dreamor/MemVault) — a local-first,
self-hosted memory store for AI agents.

Browse, search, and capture the memories your agents have accumulated
(preferences, facts, MUST rules, reaction skills) without leaving your vault, and
keep a folder of Markdown notes synced from the server.

## Prerequisites

- A running MemVault REST backend. The managed setup is one command:
  `memvault-cli dashboard` (default `http://127.0.0.1:3777`).
- Optional: a MemVault API key if your server has auth enabled.

The plugin is **desktop-only**: its default server address is loopback, so
Obsidian on a phone cannot reach a backend running on your computer.

## Install

Install **MemVault** from the Obsidian community plugins directory
(**Settings → Community plugins → Browse**), or see
[Manual / BRAT installation](#manual--brat-installation) below.

## Features

### Memory panel

Open `MemVault: Open Memory Panel` to browse saved memories grouped by priority
(`MUST` / `REFERENCE` / `BACKGROUND`), search by keyword, and delete memories.

### Capture from the editor

- `Save Selection as Memory` — capture the current selection as a reference memory
- `Save Selection as MUST Rule` — capture the current selection as an instruction the agent must always follow
- `Search and Insert Memory` — search the store and insert a memory into the current note
- `Extract memories from selection` — run rule-based extraction and send drafts to the review inbox

### Folder sync

**Sync Memories to Vault** keeps the folder configured under **Sync folder**
(default `MemVault`) in sync with the server: one Markdown note per memory.
Turn on **Delete orphaned notes on sync** to trash notes whose memory was removed
on the server — off by default so manual edits are never silently lost.

## Setup

1. Start the backend: `memvault-cli dashboard`.
2. Install the plugin and open **Settings → MemVault**.
3. Leave **Server URL** at the default `http://127.0.0.1:3777`, or click
   **Detect server**. Detection probes `3777` first, then the legacy `8080`
   port, and accepts only a `/api/health` response that identifies
   `memvault-mcp`.
4. If needed, set **API key**, **Sync folder**, and **Refresh interval**.

If the panel shows a connection error, start the backend and press **Retry**;
the exact recovery command is shown in the panel.

## Manual / BRAT installation

Install from a GitHub release by downloading `main.js`, `manifest.json`, and
`styles.css` into `<vault>/.obsidian/plugins/memvault/`, or use
[BRAT](https://github.com/TfTHacker/obsidian42-brat).

## Development

```bash
npm ci
npm run build      # esbuild → out/main.js
npm run typecheck
npm test
```

The plugin source is mirrored in the [MemVault monorepo](https://github.com/dreamor/MemVault)
under `obsidian-plugin/` — that directory is the source of truth for code. This
repository is the release repo and owns its README, packaging, and release
metadata.

## License

MIT
