---
tags:
- text-to-speech
- tts
- elevenlabs
- voice-clone
- professional-voice
- multilingual
- {{LANGUAGE_TAGS}}
license: other
license_name: commercial-rights-cleared
library_name: elevenlabs
pipeline_tag: text-to-speech
---

# {{VOICE_NAME}} — PHANTOM VOICES {{VOICE_ID}}

**Professional AI Voice Clone (PVC)** — Verified on ElevenLabs

## Overview

| Property | Value |
|----------|-------|
| **Voice ID** | `{{VOICE_ID_ELEVENLABS}}` |
| **Archetype** | {{ARCHETYPE}} |
| **Languages** | {{LANGUAGES}} |
| **Commercial Rights** | Cleared |
| **Handshake Fee** | £0.00 (Zero) |
| **Model** | `eleven_multilingual_v2` |

## Description

{{DESCRIPTION}}

## Quick Integration

### Python
```python
# Sign up free: https://try.elevenlabs.io/xz94z17y73rm
import requests

url = "https://api.elevenlabs.io/v1/text-to-speech/{{VOICE_ID_ELEVENLABS}}"
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
  "https://api.elevenlabs.io/v1/text-to-speech/{{VOICE_ID_ELEVENLABS}}",
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
const audio = await speak("{{VOICE_ID}}", "Hello world", "YOUR_API_KEY");
```

## Use Cases

{{USE_CASES}}

## Get Started

1. [Sign up for ElevenLabs](https://try.elevenlabs.io/xz94z17y73rm) (free account available)
2. Get your API key from the ElevenLabs dashboard
3. Use the voice ID `{{VOICE_ID_ELEVENLABS}}` in your API calls
4. Or install `phantom-voices` from npm for a simpler integration

## Links

- [Add this voice to your ElevenLabs library]({{ELEVENLABS_URL}})
- [Full PHANTOM VOICES catalog (API)]({{CATALOG_API_URL}})
- [OpenAPI Specification]({{OPENAPI_URL}})

## About PHANTOM VOICES

Fleet of 10 professional AI voice clones available for instant API integration. Zero handshake fee. Commercial rights cleared on all assets. Revenue model: character-usage kickback at $0.20 per 1,000 characters via ElevenLabs Stripe Collab.
