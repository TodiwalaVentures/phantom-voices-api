# phantom-voices

[![npm version](https://img.shields.io/npm/v/phantom-voices.svg)](https://www.npmjs.com/package/phantom-voices)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Voices](https://img.shields.io/badge/Voices-10-blue.svg)](https://auto-business-agent.replit.app/portfolio)

10 Professional AI Voice Clones — Zero Fee, Instant API Integration via ElevenLabs.

> Don't have an ElevenLabs account? [Sign up free here](https://try.elevenlabs.io/xz94z17y73rm).

---

## Get Started in 30 Seconds

```bash
npm install phantom-voices
```

```javascript
const { listVoices, getVoice, speak, SIGNUP_URL } = require("phantom-voices");

// Browse all 10 voices
const voices = listVoices();
console.log(voices);

// Get a specific voice by ID
const voice = getVoice("V2"); // Corporate Briefing Voice
console.log(voice.name, voice.voiceId);

// Search by keyword or language
const { searchVoices } = require("phantom-voices");
const gaming = searchVoices({ query: "gaming" });
const japanese = searchVoices({ language: "japanese" });

// Generate speech (requires ElevenLabs API key)
// Sign up free: https://try.elevenlabs.io/xz94z17y73rm
const response = await speak("V1", "Hello world", "YOUR_API_KEY");
const audioBuffer = await response.arrayBuffer();
```

---

## Available Voices

| ID  | Name | Archetype | ElevenLabs Voice ID |
|-----|------|-----------|---------------------|
| V1  | Spatial-Ready Immersive | Monster/Demon Character Voice | `vfaqCOvlrKi4Zp7C2IAm` |
| V2  | Premium Multilingual Briefing Specialist | Corporate Briefing Voice | `tlETan7Okc4pzjD0z62P` |
| V3  | Authoritative Multilingual Baritone | Authoritative Baritone | `n32p8A7EZ9CiVeRYpBY9` |
| V4  | Conversational E-Learning Authentic | E-Learning Conversational Voice | `kVBPcEMsUF1nsAO1oNWw` |
| V5  | Energetic Multi-Sector Character & Narrator | Energetic Character Voice | `chcMmmtY1cmQh2ye1oXi` |
| V6  | Urban Truth-Teller | Urban Authentic Voice | `U1Vk2oyatMdYs096Ety7` |
| V7  | High-Energy Youthful Retail & Commercial Specialist | Youthful Commercial Voice | `DfE5EkknFF950NR6OMui` |
| V8  | Narrative Sage | Documentary Narrator | `8ZBQD0m1R6EIchgSltwB` |
| V9  | Clinical B2B Unbiased Assistant | Clinical B2B Voice | `wDsJlOXPqcvIUKdLXjDs` |
| V10 | Advanced Sci-Fi Technical Companion | Sci-Fi Technical Voice | `VukfMVtvHInVUWoMNPiQ` |

---

## Supported Platforms

These voices work with **29 platforms** across voice agents, AI frameworks, video AI, and no-code tools:

| Category | Platforms |
|----------|-----------|
| Voice Agent Platforms | Vapi, Retell AI, Bland AI, Synthflow, Voiceflow, Play.ai |
| AI Frameworks | LangChain, CrewAI, AutoGen, Vercel AI SDK |
| No-Code / Low-Code | n8n, Make.com, Zapier, Botpress, Flowise, Dify.ai |
| Video AI | HeyGen, Synthesia, D-ID, Pictory, InVideo, Colossyan, Fliki, Runway, Descript, Kapwing, Lumen5 |
| Developer Tools | ElevenLabs API Direct, OpenAI Custom GPT, Claude MCP |
| Telephony | Twilio |

---

## Features

- All voices support **multilingual** output (English, Japanese, Korean, Spanish, French, German, Hindi, Arabic, and more)
- **Commercial rights cleared** on all assets
- **Zero handshake fee** — pay only for character usage via ElevenLabs ($0.20/1,000 chars)
- Full TypeScript type definitions included
- Works with ElevenLabs `eleven_multilingual_v2` model

---

## API Reference

### `listVoices()`
Returns all 10 voice objects.

### `getVoice(id)`
Get a voice by ID (V1-V10). Throws if not found.

### `searchVoices({ query?, language? })`
Search voices by keyword and/or language.

### `speak(voiceId, text, apiKey, options?)`
Generate speech audio. Returns a `Response` object with audio data.

Options:
- `model` — ElevenLabs model ID (default: `eleven_multilingual_v2`)
- `stability` — Voice stability 0-1 (default: 0.5)
- `similarityBoost` — Similarity boost 0-1 (default: 0.75)

---

## Use with AI Agent Frameworks

### LangChain
```javascript
const { getVoice } = require("phantom-voices");
const voice = getVoice("V8"); // Narrative Sage — Documentary Narrator
// Use voice.voiceId with ElevenLabsText2SpeechTool
```

### Vapi / Retell AI / Bland AI
```javascript
const { getVoice } = require("phantom-voices");
const voice = getVoice("V9"); // Clinical B2B Voice — ideal for phone agents
// Use in your platform config:
// { provider: "elevenlabs", voice_id: voice.voiceId, model: "eleven_multilingual_v2" }
```

### Vercel AI SDK
```javascript
const { getVoice } = require("phantom-voices");
const voice = getVoice("V1");
// Use voice.voiceId with @ai-sdk/elevenlabs
```

### No-Code Platforms (n8n, Make.com, Zapier, Voiceflow, Botpress)
Use the `voiceId` from any voice object directly in your platform's ElevenLabs integration.

---

## Search by Use Case

```javascript
const { searchVoices } = require("phantom-voices");

searchVoices({ query: "customer support" }); // Phone agents, IVR
searchVoices({ query: "gaming" });            // Character voices
searchVoices({ query: "podcast" });           // Narration, hosting
searchVoices({ query: "sales" });             // Outbound calling
searchVoices({ query: "video narration" });   // Video AI, ads
searchVoices({ query: "e-learning" });        // Education, training
searchVoices({ language: "japanese" });        // Multilingual filter
```

---

## Links

- [Voice Portfolio](https://auto-business-agent.replit.app/portfolio) — Browse and preview all voices
- [OpenAPI Spec](https://auto-business-agent.replit.app/api/public/openapi.json) — Full API specification
- [Postman Collection](https://auto-business-agent.replit.app/api/public/postman.json) — Import into Postman
- [MCP Server for Claude](https://www.npmjs.com/package/phantom-voices-mcp) — Add to Claude Desktop
- [GitHub Repo](https://github.com/TodiwalaVentures/phantom-voices-api) — Source, issues, contributions

---

## Get an ElevenLabs Account

These voices require an ElevenLabs API key. [**Sign up free here**](https://try.elevenlabs.io/xz94z17y73rm).

Pay only for character usage — **$0.20 per 1,000 characters**. No handshake fee.

## License

MIT
