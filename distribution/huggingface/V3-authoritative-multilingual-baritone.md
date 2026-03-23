---
tags:
- text-to-speech
- tts
- elevenlabs
- voice-clone
- professional-voice
- multilingual
- urdu
- japanese
- french
license: other
license_name: commercial-rights-cleared
library_name: elevenlabs
pipeline_tag: text-to-speech
---

# Authoritative Multilingual Baritone — PHANTOM VOICES V3

**Professional AI Voice Clone (PVC)** — Verified on ElevenLabs

## Overview

| Property | Value |
|----------|-------|
| **Voice ID** | `n32p8A7EZ9CiVeRYpBY9` |
| **Archetype** | Authoritative South Asian Baritone |
| **Languages** | Urdu, Japanese, French |
| **Commercial Rights** | Cleared |
| **Handshake Fee** | £0.00 (Zero) |
| **Model** | `eleven_multilingual_v2` |

## Description

Authoritative South Asian Baritone. Verified Professional Voice Clone (PVC) on ElevenLabs. Deep resonance for cinematic trailers, legacy documentary projects, global documentary narration, historical documentaries, Bollywood narrative, and keynote presentations. Hindi/Urdu specialist with multilingual capability. Clean audio conversational delivery for e-learning courses, online course narration, tutorial modules, instructional walkthroughs, and corporate training content. Ideal for cinema trailers, commercials, corporate training, medical/healthcare narration, legal compliance content, SaaS demos, education modules, e-learning courses, audiobook narration, gaming dialogue, and spatial audio applications. High-fidelity clean audio with API-native integration. Also verified for Japanese-language narration via ElevenLabs Multilingual v2 — tested with native Japanese script for bilingual AI assistant, Japanese corporate narration, and Japanese-English bilingual content delivery. Also verified for French-language luxury brand narration via ElevenLabs Multilingual v2 — when prompted with French source language, delivers an extremely refined luxury French spokesperson tone ideal for high-end brand campaigns, fashion house narration, perfume and cosmetics advertising, luxury automotive, and prestige product launches. Commercial Rights Cleared.

## Quick Integration

### Python
```python
# Sign up free: https://try.elevenlabs.io/xz94z17y73rm
import requests

url = "https://api.elevenlabs.io/v1/text-to-speech/n32p8A7EZ9CiVeRYpBY9"
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
  "https://api.elevenlabs.io/v1/text-to-speech/n32p8A7EZ9CiVeRYpBY9",
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
const audio = await speak("V3", "Hello world", "YOUR_API_KEY");
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
3. Use the voice ID `n32p8A7EZ9CiVeRYpBY9` in your API calls
4. Or install `phantom-voices` from npm for a simpler integration

## Links

- [Add this voice to your ElevenLabs library](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/n32p8A7EZ9CiVeRYpBY9)
- [Full PHANTOM VOICES catalog (API)](https://auto-business-agent.replit.app/api/public/voices)
- [OpenAPI Specification](https://auto-business-agent.replit.app/api/public/openapi.json)

## About PHANTOM VOICES

Fleet of 10 professional AI voice clones available for instant API integration. Zero handshake fee. Commercial rights cleared on all assets.
