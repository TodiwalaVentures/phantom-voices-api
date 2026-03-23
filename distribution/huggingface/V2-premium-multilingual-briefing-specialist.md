---
tags:
- text-to-speech
- tts
- elevenlabs
- voice-clone
- professional-voice
- multilingual
- spanish
- french
- german
- arabic
- hindi
- mandarin
license: other
license_name: commercial-rights-cleared
library_name: elevenlabs
pipeline_tag: text-to-speech
---

# Premium Multilingual Briefing Specialist — PHANTOM VOICES V2

**Professional AI Voice Clone (PVC)** — Verified on ElevenLabs

## Overview

| Property | Value |
|----------|-------|
| **Voice ID** | `tlETan7Okc4pzjD0z62P` |
| **Archetype** | Premium Multilingual Briefing Specialist — Mid-Atlantic/Arabic fusion |
| **Languages** | Spanish, French, German, Arabic, Hindi, Mandarin |
| **Commercial Rights** | Cleared |
| **Handshake Fee** | £0.00 (Zero) |
| **Model** | `eleven_multilingual_v2` |

## Description

Premium Multilingual Briefing Specialist — Mid-Atlantic/Arabic fusion. Verified Professional Voice Clone (PVC) on ElevenLabs. Specialist for global commerce, cross-border SaaS, international business briefings, executive narratives, and multilingual corporate communications. Fluent delivery in Spanish, French, German, Arabic, Hindi, and Mandarin contexts. Clean audio conversational tone optimized for e-learning courses, online course narration, tutorial walkthroughs, and instructional content. Ideal for financial reports, global news narration, case studies, LinkedIn ads, internal communications, onboarding guides, education modules, corporate training, documentary narration, gaming dialogue, medical/healthcare content, and legal compliance explainers. High-trust bilingual profile with API-native and spatial-ready integration. Commercial Rights Cleared.

## Quick Integration

### Python
```python
# Sign up free: https://try.elevenlabs.io/xz94z17y73rm
import requests

url = "https://api.elevenlabs.io/v1/text-to-speech/tlETan7Okc4pzjD0z62P"
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
  "https://api.elevenlabs.io/v1/text-to-speech/tlETan7Okc4pzjD0z62P",
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
const audio = await speak("V2", "Hello world", "YOUR_API_KEY");
```

## Use Cases

- Gaming
- E-Learning
- Corporate Training
- Documentary Narration
- Medical/Healthcare

## Get Started

1. [Sign up for ElevenLabs](https://try.elevenlabs.io/xz94z17y73rm) (free account available)
2. Get your API key from the ElevenLabs dashboard
3. Use the voice ID `tlETan7Okc4pzjD0z62P` in your API calls
4. Or install `phantom-voices` from npm for a simpler integration

## Links

- [Add this voice to your ElevenLabs library](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/tlETan7Okc4pzjD0z62P)
- [Full PHANTOM VOICES catalog (API)](https://auto-business-agent.replit.app/api/public/voices)
- [OpenAPI Specification](https://auto-business-agent.replit.app/api/public/openapi.json)

## About PHANTOM VOICES

Fleet of 10 professional AI voice clones available for instant API integration. Zero handshake fee. Commercial rights cleared on all assets.
