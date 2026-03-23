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

# Energetic Multi-Sector Character & Narrator — PHANTOM VOICES V5

**Professional AI Voice Clone (PVC)** — Verified on ElevenLabs

## Overview

| Property | Value |
|----------|-------|
| **Voice ID** | `chcMmmtY1cmQh2ye1oXi` |
| **Archetype** | Energetic Multi-Sector Character & Narrator |
| **Languages** | English, Multilingual |
| **Commercial Rights** | Cleared |
| **Handshake Fee** | £0.00 (Zero) |
| **Model** | `eleven_multilingual_v2` |

## Description

Energetic Multi-Sector Character & Narrator. Verified Professional Voice Clone (PVC) on ElevenLabs. Dynamic and engaging voice for interactive education, high-speed tutorials, modern brand storytelling, and youthful content creation. Versatile multi-sector coverage including RPG characters, open-world NPCs, historical narration, animation, audiobooks, and gaming dialogue. E-Learning-Boost enabled for instructional content, corporate training, and conversational onboarding. Also ideal for medical/healthcare narration, legal compliance explainers, SaaS demos, deep authoritative delivery, documentary narration, and clean audio applications. Draft-ready professional base with API-native and spatial-ready integration. Commercial Rights Cleared.

## Quick Integration

### Python
```python
# Sign up free: https://try.elevenlabs.io/xz94z17y73rm
import requests

url = "https://api.elevenlabs.io/v1/text-to-speech/chcMmmtY1cmQh2ye1oXi"
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
  "https://api.elevenlabs.io/v1/text-to-speech/chcMmmtY1cmQh2ye1oXi",
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
const audio = await speak("V5", "Hello world", "YOUR_API_KEY");
```

## Use Cases

- Gaming
- E-Learning
- Audiobooks
- Corporate Training
- Documentary Narration
- SaaS Demos
- Medical/Healthcare

## Get Started

1. [Sign up for ElevenLabs](https://try.elevenlabs.io/xz94z17y73rm) (free account available)
2. Get your API key from the ElevenLabs dashboard
3. Use the voice ID `chcMmmtY1cmQh2ye1oXi` in your API calls
4. Or install `phantom-voices` from npm for a simpler integration

## Links

- [Add this voice to your ElevenLabs library](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/chcMmmtY1cmQh2ye1oXi)
- [Full PHANTOM VOICES catalog (API)](https://auto-business-agent.replit.app/api/public/voices)
- [OpenAPI Specification](https://auto-business-agent.replit.app/api/public/openapi.json)

## About PHANTOM VOICES

Fleet of 10 professional AI voice clones available for instant API integration. Zero handshake fee. Commercial rights cleared on all assets.
