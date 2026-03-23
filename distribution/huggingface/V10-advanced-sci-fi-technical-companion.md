---
tags:
- text-to-speech
- tts
- elevenlabs
- voice-clone
- professional-voice
- multilingual
license: other
license_name: commercial-rights-cleared
library_name: elevenlabs
pipeline_tag: text-to-speech
---

# Advanced Sci-Fi Technical Companion — PHANTOM VOICES V10

**Professional AI Voice Clone (PVC)** — Verified on ElevenLabs

## Overview

| Property | Value |
|----------|-------|
| **Voice ID** | `VukfMVtvHInVUWoMNPiQ` |
| **Archetype** | Technical Unbiased Synthetic Voice — Advanced Sci-Fi Technical Companion |
| **Languages** | English, Multilingual |
| **Commercial Rights** | Cleared |
| **Handshake Fee** | £0.00 (Zero) |
| **Model** | `eleven_multilingual_v2` |

## Description

Technical Unbiased Synthetic Voice — Advanced Sci-Fi Technical Companion. Verified Professional Voice Clone (PVC) on ElevenLabs. Advanced AI companion for experimental AI, decentralized agent systems, deep authoritative delivery, and corporate logic applications. Clean audio conversational tone for e-learning courses, e-learning modules, online course narration, tutorial walkthroughs, instructional modules, and corporate training content. Ideal for cyberpunk and futuristic content, virtual assistant applications, technical documentation, legal compliance workflows, sci-fi gaming characters, animation, audiobook narration, commercials, internal communications, medical/healthcare narration, SaaS demos, B2B communications, documentary narration, and spatial audio experiences. Neutral-grade precision with clean audio and API-native integration. Commercial Rights Cleared.

## Quick Integration

### Python
```python
# Sign up free: https://try.elevenlabs.io/xz94z17y73rm
import requests

url = "https://api.elevenlabs.io/v1/text-to-speech/VukfMVtvHInVUWoMNPiQ"
headers = {
    "xi-api-key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "text": "Your text here",
    "model_id": "eleven_multilingual_v2",
    "voice_settings": {"stability": 0.5, "similarity_boost": 0.75}
}
response = requests.post(url, json=data, headers=headers)
with open("output.mp3", "wb") as f:
    f.write(response.content)
```

### JavaScript
```javascript
// Sign up free: https://try.elevenlabs.io/xz94z17y73rm
const response = await fetch(
  "https://api.elevenlabs.io/v1/text-to-speech/VukfMVtvHInVUWoMNPiQ",
  {
    method: "POST",
    headers: {
      "xi-api-key": "YOUR_API_KEY",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: "Your text here",
      model_id: "eleven_multilingual_v2",
      voice_settings: { stability: 0.5, similarity_boost: 0.75 },
    }),
  }
);
const audioBlob = await response.blob();
```

### npm Package
```bash
npm install phantom-voices
```
```javascript
const { speak } = require("phantom-voices");
const audio = await speak("V10", "Hello world", "YOUR_API_KEY");
```

## Use Cases

- Gaming
- E-Learning
- Corporate Training
- Documentary Narration
- SaaS Demos
- Medical/Healthcare

## Get Started

1. [Sign up for ElevenLabs](https://try.elevenlabs.io/xz94z17y73rm) (free account available)
2. Get your API key from the ElevenLabs dashboard
3. Use the voice ID `VukfMVtvHInVUWoMNPiQ` in your API calls
4. Or install `phantom-voices` from npm for a simpler integration

## Links

- [Add this voice to your ElevenLabs library](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/VukfMVtvHInVUWoMNPiQ)
- [Full PHANTOM VOICES catalog (API)](https://auto-business-agent.replit.app/api/public/voices)
- [OpenAPI Specification](https://auto-business-agent.replit.app/api/public/openapi.json)

## About PHANTOM VOICES

Fleet of 10 professional AI voice clones available for instant API integration. Zero handshake fee. Commercial rights cleared on all assets.
