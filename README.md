<p align="center">
  <strong>PHANTOM VOICES</strong><br>
  <em>10 Professional AI Voice Clones &mdash; Zero Fee, Instant API Access via ElevenLabs</em>
</p>

<p align="center">
  <a href="#license"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License: MIT"></a>
  <img src="https://img.shields.io/badge/voices-10-blueviolet" alt="Voices: 10">
  <img src="https://img.shields.io/badge/fee-zero-brightgreen" alt="Fee: Zero">
  <img src="https://img.shields.io/badge/languages-9%2B-blue" alt="Languages: 9+">
  <a href="https://www.npmjs.com/package/phantom-voices"><img src="https://img.shields.io/npm/v/phantom-voices.svg" alt="npm version"></a>
</p>

---

**PHANTOM VOICES** is an open, free-to-use catalog of 10 commercially-cleared, professional voice clones hosted on ElevenLabs. Every voice is available through a REST API with zero handshake fees. [Sign up for a free ElevenLabs account](https://try.elevenlabs.io/xz94z17y73rm) and start generating speech instantly.

## Quick Links

| Resource | URL |
|----------|-----|
| Portfolio | `https://auto-business-agent.replit.app/portfolio` |
| OpenAPI Spec | `https://auto-business-agent.replit.app/api/public/openapi.json` |
| Postman Collection | See [Postman Guide](../submissions/POSTMAN_WORKSPACE_GUIDE.md) |
| MCP Server (Claude) | [`phantom-voices-mcp`](../mcp-server/) |
| npm Package | [`phantom-voices`](https://www.npmjs.com/package/phantom-voices) |
| Custom GPT | See [GPT Config](../custom-gpt/GPT_CONFIG.md) |

---

## Voice Catalog

| ID | Archetype | ElevenLabs Voice ID |
|----|-----------|---------------------|
| V1 | Spatial-Ready Immersive | `vfaqCOvlrKi4Zp7C2IAm` |
| V2 | Premium Multilingual Briefing Specialist | `tlETan7Okc4pzjD0z62P` |
| V3 | Authoritative Multilingual Baritone | `n32p8A7EZ9CiVeRYpBY9` |
| V4 | Conversational E-Learning Authentic | `kVBPcEMsUF1nsAO1oNWw` |
| V5 | Energetic Multi-Sector Character & Narrator | `chcMmmtY1cmQh2ye1oXi` |
| V6 | Urban Truth-Teller | `U1Vk2oyatMdYs096Ety7` |
| V7 | High-Energy Youthful Retail & Commercial Specialist | `DfE5EkknFF950NR6OMui` |
| V8 | Narrative Sage | `8ZBQD0m1R6EIchgSltwB` |
| V9 | Clinical B2B Unbiased Assistant | `wDsJlOXPqcvIUKdLXjDs` |
| V10 | Advanced Sci-Fi Technical Companion | `VukfMVtvHInVUWoMNPiQ` |

---

## Try It Now

### List all voices

```bash
curl https://auto-business-agent.replit.app/api/public/voices
```

### Get a single voice

```bash
curl https://auto-business-agent.replit.app/api/public/voices/V3
```

### Search voices

```bash
curl "https://auto-business-agent.replit.app/api/public/search?q=multilingual+baritone"
```

### Recommend a voice

```bash
curl "https://auto-business-agent.replit.app/api/public/recommend?useCase=e-learning&language=spanish&platform=vapi"
```

---

## AI Agent Integration

PHANTOM VOICES provides ready-to-paste configuration for **18 platforms**:

| Category | Platforms |
|----------|-----------|
| Voice Agent Builders | Vapi, Retell AI, Bland AI, Synthflow, Voiceflow |
| AI Frameworks | LangChain, CrewAI, AutoGen (Microsoft), Vercel AI SDK |
| Direct API | ElevenLabs API |
| Telephony | Twilio |
| Low-Code / No-Code | Botpress, Dify.ai, Flowise, n8n, Make (Integromat), Zapier |
| Conversational AI | Play.ai |

Every API response includes a `platformConfigs` object with the exact JSON config for each platform.

---

## Add to Claude Desktop

Use the [MCP Server](../mcp-server/) to give Claude direct access to the voice catalog.

Add the following to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "phantom-voices": {
      "command": "npx",
      "args": ["phantom-voices-mcp"],
      "env": {
        "PHANTOM_VOICES_API_URL": "https://auto-business-agent.replit.app"
      }
    }
  }
}
```

Then ask Claude things like:

- *"Find me a multilingual voice for a corporate training video"*
- *"Which voice is best for a sci-fi game NPC?"*
- *"Give me the Vapi config for voice V9"*

---

## Add to ChatGPT

A ready-made Custom GPT configuration is available at [`distribution/custom-gpt/GPT_CONFIG.md`](../custom-gpt/GPT_CONFIG.md). It includes:

- System instructions
- OpenAPI Action spec
- Conversation starters

Import the action spec from `https://auto-business-agent.replit.app/api/public/openapi.json` in the GPT Builder.

---

## npm Package

Install the client library:

```bash
npm install phantom-voices
```

Quick example:

```javascript
const PhantomVoices = require("phantom-voices");

const client = new PhantomVoices("https://auto-business-agent.replit.app");

// List all voices
const voices = await client.listVoices();

// Get a specific voice
const voice = await client.getVoice("V3");

// Search voices
const results = await client.search("multilingual baritone");

// Get a recommendation
const pick = await client.recommend({
  useCase: "corporate training",
  language: "french",
  platform: "vapi",
});
```

See the full [npm package README](../npm-package/README.md) for details.

---

## License

MIT

---

<p align="center">
  <strong>Start using PHANTOM VOICES for free</strong><br>
  <a href="https://try.elevenlabs.io/xz94z17y73rm">Sign up for ElevenLabs</a> to generate speech with any of the 10 voices instantly.
</p>
