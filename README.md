<p align="center">
  <strong>PHANTOM VOICES</strong><br>
  <em>10 Professional AI Voice Clones &mdash; Zero Fee, Instant API Access via ElevenLabs</em>
</p>

<p align="center">
  <a href="#license"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License: MIT"></a>
  <img src="https://img.shields.io/badge/voices-10-blueviolet" alt="Voices: 10">
  <img src="https://img.shields.io/badge/fee-zero-brightgreen" alt="Fee: Zero">
  <img src="https://img.shields.io/badge/languages-9%2B-blue" alt="Languages: 9+">
  <img src="https://img.shields.io/badge/platforms-29-orange" alt="Platforms: 29">
  <a href="https://www.npmjs.com/package/phantom-voices"><img src="https://img.shields.io/npm/v/phantom-voices.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/phantom-voices-mcp"><img src="https://img.shields.io/npm/v/phantom-voices-mcp.svg?label=mcp" alt="MCP version"></a>
</p>

---

**PHANTOM VOICES** is an open, free-to-use catalog of 10 commercially-cleared, professional voice clones hosted on ElevenLabs. Every voice is available through a REST API with zero handshake fees. [Sign up for a free ElevenLabs account](https://try.elevenlabs.io/xz94z17y73rm) and start generating speech instantly.

## Quick Links

| Resource | URL |
|----------|-----|
| Voice Portfolio | [auto-business-agent.replit.app/portfolio](https://auto-business-agent.replit.app/portfolio) |
| OpenAPI Spec | [auto-business-agent.replit.app/api/public/openapi.json](https://auto-business-agent.replit.app/api/public/openapi.json) |
| Postman Collection | [auto-business-agent.replit.app/api/public/postman.json](https://auto-business-agent.replit.app/api/public/postman.json) |
| MCP Server (Claude) | [phantom-voices-mcp on npm](https://www.npmjs.com/package/phantom-voices-mcp) |
| npm Package | [phantom-voices on npm](https://www.npmjs.com/package/phantom-voices) |
| AI Plugin | [auto-business-agent.replit.app/.well-known/ai-plugin.json](https://auto-business-agent.replit.app/.well-known/ai-plugin.json) |

---

## Voice Catalog

| ID | Archetype | ElevenLabs Voice ID | Add to Account |
|----|-----------|---------------------|----------------|
| V1 | Spatial-Ready Immersive | `vfaqCOvlrKi4Zp7C2IAm` | [Add V1](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/vfaqCOvlrKi4Zp7C2IAm) |
| V2 | Premium Multilingual Briefing Specialist | `tlETan7Okc4pzjD0z62P` | [Add V2](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/tlETan7Okc4pzjD0z62P) |
| V3 | Authoritative Multilingual Baritone | `n32p8A7EZ9CiVeRYpBY9` | [Add V3](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/n32p8A7EZ9CiVeRYpBY9) |
| V4 | Conversational E-Learning Authentic | `kVBPcEMsUF1nsAO1oNWw` | [Add V4](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/kVBPcEMsUF1nsAO1oNWw) |
| V5 | Energetic Multi-Sector Character & Narrator | `chcMmmtY1cmQh2ye1oXi` | [Add V5](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/chcMmmtY1cmQh2ye1oXi) |
| V6 | Urban Truth-Teller | `U1Vk2oyatMdYs096Ety7` | [Add V6](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/U1Vk2oyatMdYs096Ety7) |
| V7 | High-Energy Youthful Retail & Commercial Specialist | `DfE5EkknFF950NR6OMui` | [Add V7](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/DfE5EkknFF950NR6OMui) |
| V8 | Narrative Sage | `8ZBQD0m1R6EIchgSltwB` | [Add V8](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/8ZBQD0m1R6EIchgSltwB) |
| V9 | Clinical B2B Unbiased Assistant | `wDsJlOXPqcvIUKdLXjDs` | [Add V9](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/wDsJlOXPqcvIUKdLXjDs) |
| V10 | Advanced Sci-Fi Technical Companion | `VukfMVtvHInVUWoMNPiQ` | [Add V10](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/VukfMVtvHInVUWoMNPiQ) |

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
curl "https://auto-business-agent.replit.app/api/public/recommend?use_case=customer+support&platform=vapi"
```

### Compare a voice vs stock alternatives

```bash
curl "https://auto-business-agent.replit.app/api/public/compare?voice_id=V3"
```

### Get voice of the week

```bash
curl https://auto-business-agent.replit.app/api/public/voice-of-the-week
```

---

## AI Agent Integration

PHANTOM VOICES provides ready-to-paste configuration for **29 platforms**:

| Category | Platforms |
|----------|-----------|
| Voice Agent Builders | Vapi, Retell AI, Bland AI, Synthflow, Voiceflow, Play.ai |
| AI Frameworks | LangChain, CrewAI, AutoGen (Microsoft), Vercel AI SDK |
| Direct API | ElevenLabs API |
| Telephony | Twilio |
| Low-Code / No-Code | Botpress, Dify.ai, Flowise, n8n, Make (Integromat), Zapier |
| Video AI | HeyGen, Synthesia, D-ID, Pictory, InVideo, Colossyan, Fliki, Runway, Descript, Kapwing, Lumen5 |

Every API response includes a `platformConfigs` object with the exact JSON config for each platform.

---

## Add to Claude Desktop

Install the [MCP Server](https://www.npmjs.com/package/phantom-voices-mcp) to give Claude direct access to the voice catalog:

```bash
npm install -g phantom-voices-mcp
```

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

Create a Custom GPT that searches and recommends voices:

1. Go to [chat.openai.com/gpts/editor](https://chat.openai.com/gpts/editor)
2. Name: **PHANTOM VOICES — Voice Clone Finder**
3. Import the action spec from:
   ```
   https://auto-business-agent.replit.app/api/public/openapi.json
   ```
4. Set Authentication to **None**
5. Publish

The GPT will automatically call the API to search voices and return platform-ready configs.

---

## npm Package

Install the client library:

```bash
npm install phantom-voices
```

Quick example:

```javascript
const { listVoices, getVoice, searchVoices, speak, SIGNUP_URL } = require("phantom-voices");

const voices = listVoices();
console.log(voices);

const voice = getVoice("V3");
console.log(voice.name, voice.voiceId);

const gaming = searchVoices({ query: "gaming" });
const japanese = searchVoices({ language: "japanese" });

// Generate speech (requires ElevenLabs API key)
// Sign up free: https://try.elevenlabs.io/xz94z17y73rm
const response = await speak("V1", "Hello world", "YOUR_API_KEY");
const audioBuffer = await response.arrayBuffer();
```

---

## Embed on Your Website

Add a searchable voice catalog widget to any website:

```html
<div data-phantom-voices></div>
<script src="https://auto-business-agent.replit.app/embed/widget.js"></script>
```

---

## API Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/public/voices` | List all 10 voices |
| `GET /api/public/voices/:id` | Get voice by ID (V1-V10) |
| `GET /api/public/search?q=&language=` | Search voices |
| `GET /api/public/recommend?use_case=&platform=&tone=&language=` | AI recommendations |
| `GET /api/public/compare?voice_id=` | Compare vs stock voices |
| `GET /api/public/voice-of-the-week` | Featured voice |
| `GET /api/public/preview/:voiceId` | Audio preview (MP3) |
| `GET /api/public/openapi.json` | OpenAPI 3.0 spec |
| `GET /api/public/postman.json` | Postman Collection v2.1 |
| `GET /api/public/manifest.json` | Agent discovery manifest |
| `GET /.well-known/ai-plugin.json` | ChatGPT plugin manifest |
| `GET /.well-known/agent.json` | Agent discovery standard |
| `GET /llms.txt` | LLM-readable site description |
| `GET /sitemap.xml` | Dynamic sitemap |

---

## License

MIT

---

<p align="center">
  <strong>Start using PHANTOM VOICES for free</strong><br>
  <a href="https://try.elevenlabs.io/xz94z17y73rm">Sign up for ElevenLabs</a> to generate speech with any of the 10 voices instantly.
</p>
