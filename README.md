# MemVault for Obsidian

Connect Obsidian to [MemVault](https://github.com/dreamor/MemVault) — a self-hosted memory vault for AI agents.

Browse, search, and capture the memories your agents have accumulated (preferences, facts, MUST rules, reaction skills) without leaving your vault, and keep a folder of Markdown notes two-way-synced with the server.

## Prerequisites

- A running [MemVault server](https://github.com/dreamor/MemVault) (Docker: `ghcr.io/dreamor/memvault`)
- Optional: a MemVault API key if your server has auth enabled

## Features

### Memory panel

Open `MemVault: Open Memory Panel` to browse saved memories grouped by priority (`MUST` / `REFERENCE` / `BACKGROUND`), search by keyword, and jump straight into the source note.

### Capture from the editor

- `Save Selection as Memory` — capture the current selection as a reference memory
- `Save Selection as MUST Rule` — capture the current selection as an instruction the agent must always follow
- `Search and Insert Memory` — search the vault and insert a memory into the current note

### Folder sync

The plugin keeps the folder configured under **Sync folder** (default `MemVault`) in sync with the vault: one Markdown note per memory, refreshed automatically. Turn on **Delete orphans** to drop notes whose memory was removed on the server.

## Setup

1. Install the plugin and open **Settings → MemVault**.
2. Set **Server URL** (default `http://127.0.0.1:8080`) and, if needed, **API key**.
3. Adjust **Sync folder** and **Refresh interval** to taste (orphan cleanup defaults to off).

## Manual installation

Until the plugin lands in the community directory, install from a GitHub release by downloading `main.js`, `manifest.json`, and `styles.css` into `<vault>/.obsidian/plugins/memvault/`, or use [BRAT](https://github.com/TfTHacker/obsidian42-brat).

## Development

```bash
npm ci
npm run build      # esbuild → out/main.js
npm run typecheck
npm test
```

The plugin source is mirrored in the [MemVault monorepo](https://github.com/dreamor/MemVault) under `obsidian-plugin/` — this repository is the canonical home for plugin development and releases.

## License

MIT
