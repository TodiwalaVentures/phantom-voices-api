# PHANTOM VOICES — Claude MCP Server

Connect 10 free professional AI voice clones directly to Claude Desktop. Ask Claude to find, recommend, and configure voices for any use case across 29 platforms.

## Quick Setup (2 minutes)

### 1. Install

```bash
# Option A: Install globally from npm
npm install -g phantom-voices-mcp

# Option B: Clone and install locally
git clone https://github.com/YOUR_USERNAME/phantom-voices-mcp
cd phantom-voices-mcp
npm install
```

### 2. Add to Claude Desktop

Open your Claude Desktop config file:

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
- **Linux**: `~/.config/Claude/claude_desktop_config.json`

Add the PHANTOM VOICES server:

```json
{
  "mcpServers": {
    "phantom-voices": {
      "command": "npx",
      "args": ["phantom-voices-mcp"]
    }
  }
}
```

Or if installed locally:

```json
{
  "mcpServers": {
    "phantom-voices": {
      "command": "node",
      "args": ["/path/to/phantom-voices-mcp/index.js"]
    }
  }
}
```

### 3. Restart Claude Desktop

Close and reopen Claude Desktop. You'll see the PHANTOM VOICES tools available in the tools menu.

## What You Can Ask Claude

Once connected, Claude can:

- **"Find me a voice for customer support phone calls on Vapi"** — Returns the best matching voice with a ready-to-paste Vapi config
- **"What voices do you have for audiobook narration?"** — Searches and returns matching voices
- **"Show me all available voices"** — Lists all 10 professional voice clones
- **"I need a clinical, neutral voice for a medical IVR on Retell AI"** — AI-powered recommendation with platform config
- **"Get me the details for V9"** — Full details including code snippets for Python, JavaScript, and cURL

## Available Tools

| Tool | Description |
|------|-------------|
| `recommend_voice` | AI-powered voice recommendation with platform configs for 29 platforms |
| `list_voices` | Browse all 10 professional voice clones |
| `get_voice` | Get detailed info for a specific voice (V1-V10) |
| `search_voices` | Search by keyword or filter by language |

## Available Resources

| Resource | Description |
|----------|-------------|
| `phantom-voices://catalog` | Full voice catalog as JSON |
| `phantom-voices://openapi` | OpenAPI 3.0 specification |

## Supported Platforms

Every recommendation includes ready-to-paste configs for:

**Voice Agents:** Vapi, Retell AI, Bland AI, Synthflow, Voiceflow, Play.ai
**AI Frameworks:** LangChain, CrewAI, AutoGen, Vercel AI SDK
**No-Code:** Botpress, Dify.ai, Flowise, n8n, Make, Zapier
**Video AI:** HeyGen, Synthesia, D-ID, Pictory, InVideo, Colossyan, Fliki, Runway, Descript, Kapwing, Lumen5
**Telephony:** Twilio
**Direct:** ElevenLabs API

## All Voices Are Free

- Zero handshake fee
- Commercial rights cleared
- No API key needed to browse the catalog
- ElevenLabs API key needed only for text-to-speech generation

Sign up for a free ElevenLabs account: https://try.elevenlabs.io/xz94z17y73rm

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PHANTOM_VOICES_API_URL` | `https://auto-business-agent.replit.app` | Base URL of the PHANTOM VOICES API |
