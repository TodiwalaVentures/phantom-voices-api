# PHANTOM VOICES — Voice Agent Marketplace Listing Guide

> Step-by-step instructions for listing PHANTOM VOICES clones on the top voice-agent marketplaces.
> All voices are **Verified Professional Voice Clones (PVC)** on ElevenLabs with **Commercial Rights Cleared** and a **handshake fee of $0.00**.

**ElevenLabs Affiliate Signup:** <https://try.elevenlabs.io/xz94z17y73rm>

---

## Voice ID Quick Reference

| Voice | Name | ElevenLabs Voice ID | Sharing Link |
|-------|------|---------------------|--------------|
| V1 | Spatial-Ready Immersive | `vfaqCOvlrKi4Zp7C2IAm` | [Add to Account](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/vfaqCOvlrKi4Zp7C2IAm) |
| V2 | Premium Multilingual Briefing Specialist | `tlETan7Okc4pzjD0z62P` | [Add to Account](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/tlETan7Okc4pzjD0z62P) |
| V3 | Authoritative Multilingual Baritone | `n32p8A7EZ9CiVeRYpBY9` | [Add to Account](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/n32p8A7EZ9CiVeRYpBY9) |
| V4 | Conversational E-Learning Authentic | `kVBPcEMsUF1nsAO1oNWw` | [Add to Account](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/kVBPcEMsUF1nsAO1oNWw) |
| V5 | Energetic Multi-Sector Character & Narrator | `chcMmmtY1cmQh2ye1oXi` | [Add to Account](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/chcMmmtY1cmQh2ye1oXi) |
| V6 | Urban Truth-Teller | `U1Vk2oyatMdYs096Ety7` | [Add to Account](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/U1Vk2oyatMdYs096Ety7) |
| V7 | High-Energy Youthful Retail & Commercial Specialist | `DfE5EkknFF950NR6OMui` | [Add to Account](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/DfE5EkknFF950NR6OMui) |
| V8 | Narrative Sage | `8ZBQD0m1R6EIchgSltwB` | [Add to Account](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/8ZBQD0m1R6EIchgSltwB) |
| V9 | Clinical B2B Unbiased Assistant | `wDsJlOXPqcvIUKdLXjDs` | [Add to Account](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/wDsJlOXPqcvIUKdLXjDs) |
| V10 | Advanced Sci-Fi Technical Companion | `VukfMVtvHInVUWoMNPiQ` | [Add to Account](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/VukfMVtvHInVUWoMNPiQ) |

---

## Prerequisites

Before submitting to any marketplace:

1. **ElevenLabs account** — Sign up free: <https://try.elevenlabs.io/xz94z17y73rm>
2. **Add the voices to your ElevenLabs Voice Lab** — Click the sharing links above to add each voice instantly
3. **Obtain your ElevenLabs API key** — Settings > API Keys in the ElevenLabs dashboard
4. **Note the model**: All voices use `eleven_multilingual_v2`

---

## 1. Vapi

**Best voices for phone agents:** V2 (Premium Multilingual Briefing Specialist), V3 (Authoritative Multilingual Baritone), V9 (Clinical B2B Unbiased Assistant)

### Why these voices?

- **V2** — Multilingual capability with Mid-Atlantic/Arabic fusion; ideal for international support lines and cross-border SaaS calls
- **V3** — Deep authoritative baritone that commands trust on corporate and legal compliance calls; Hindi/Urdu/French/Japanese multilingual
- **V9** — Clinical neutral tone with zero-bias delivery; perfect for IVR, legal compliance, and data-driven phone interactions

### Step-by-step setup

1. Log in to your Vapi dashboard at <https://dashboard.vapi.ai>
2. Navigate to **Assistants** > Create or edit an assistant
3. In the **Voice** section, select **ElevenLabs** as the provider
4. Connect your ElevenLabs API key if not already linked (Settings > Integrations)
5. Once connected, the PHANTOM VOICES clones appear in the voice picker automatically
6. Select the desired voice by its voice ID

### Voice config JSON (paste into Vapi API calls)

**V2 — Premium Multilingual Briefing Specialist:**
```json
{
  "voice": {
    "provider": "11labs",
    "voiceId": "tlETan7Okc4pzjD0z62P",
    "model": "eleven_multilingual_v2",
    "stability": 0.5,
    "similarityBoost": 0.75
  }
}
```
[Add V2 to your account](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/tlETan7Okc4pzjD0z62P)

**V3 — Authoritative Multilingual Baritone:**
```json
{
  "voice": {
    "provider": "11labs",
    "voiceId": "n32p8A7EZ9CiVeRYpBY9",
    "model": "eleven_multilingual_v2",
    "stability": 0.5,
    "similarityBoost": 0.75
  }
}
```
[Add V3 to your account](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/n32p8A7EZ9CiVeRYpBY9)

**V9 — Clinical B2B Unbiased Assistant:**
```json
{
  "voice": {
    "provider": "11labs",
    "voiceId": "wDsJlOXPqcvIUKdLXjDs",
    "model": "eleven_multilingual_v2",
    "stability": 0.5,
    "similarityBoost": 0.75
  }
}
```
[Add V9 to your account](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/wDsJlOXPqcvIUKdLXjDs)

### Developer docs

<https://docs.vapi.ai/customization/voice>

> Need an ElevenLabs API key? Sign up free: <https://try.elevenlabs.io/xz94z17y73rm>

---

## 2. Retell AI

**Best voices for inbound/outbound:** V7 (High-Energy Youthful Retail & Commercial Specialist), V9 (Clinical B2B Unbiased Assistant), V3 (Authoritative Multilingual Baritone)

### Why these voices?

- **V7** — High-energy, youthful tone that drives conversions on outbound sales calls and retail follow-ups
- **V9** — Neutral, clinical precision for inbound support, compliance workflows, and data-driven customer interactions
- **V3** — Deep authoritative baritone for executive-level inbound calls, legal and financial services

### Step-by-step setup

1. Log in to your Retell AI dashboard at <https://www.retellai.com>
2. Navigate to **Agents** > Create or edit an agent
3. In the **Voice** configuration section, select **ElevenLabs** as the voice provider
4. Paste the `voice_id` from below into the voice ID field
5. Set the model to `eleven_multilingual_v2`
6. Ensure your ElevenLabs API key is configured in Retell's integration settings

### Voice config JSON (paste into Retell agent config)

**V7 — High-Energy Youthful Retail & Commercial Specialist:**
```json
{
  "voice_id": "DfE5EkknFF950NR6OMui",
  "voice_provider": "elevenlabs",
  "voice_model": "eleven_multilingual_v2",
  "voice_temperature": 0.5
}
```
[Add V7 to your account](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/DfE5EkknFF950NR6OMui)

**V9 — Clinical B2B Unbiased Assistant:**
```json
{
  "voice_id": "wDsJlOXPqcvIUKdLXjDs",
  "voice_provider": "elevenlabs",
  "voice_model": "eleven_multilingual_v2",
  "voice_temperature": 0.5
}
```
[Add V9 to your account](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/wDsJlOXPqcvIUKdLXjDs)

**V3 — Authoritative Multilingual Baritone:**
```json
{
  "voice_id": "n32p8A7EZ9CiVeRYpBY9",
  "voice_provider": "elevenlabs",
  "voice_model": "eleven_multilingual_v2",
  "voice_temperature": 0.5
}
```
[Add V3 to your account](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/n32p8A7EZ9CiVeRYpBY9)

### Developer docs

<https://docs.retellai.com>

> Need an ElevenLabs API key? Sign up free: <https://try.elevenlabs.io/xz94z17y73rm>

---

## 3. Bland AI

**Best voices for cold calling:** V7 (High-Energy Youthful Retail & Commercial Specialist), V2 (Premium Multilingual Briefing Specialist)

### Why these voices?

- **V7** — Upbeat, Gen-Z energy that breaks through cold-call resistance; vibrant and engaging for retail, product launches, and sales campaigns
- **V2** — Professional multilingual briefing tone that builds instant credibility on international cold calls; fluent across Spanish, French, German, Arabic, Hindi, and Mandarin contexts

### Step-by-step setup

1. Log in to your Bland AI dashboard at <https://app.bland.ai>
2. Navigate to **Phone Agents** > Create or edit an agent
3. In the API call configuration, set `voice` to `"elevenlabs"` and provide the `voice_id`
4. Ensure your ElevenLabs API key is configured in Bland's settings (Settings > Integrations > ElevenLabs)
5. Test the voice with a sample call before deploying

### Voice config JSON (paste into Bland API calls)

**V7 — High-Energy Youthful Retail & Commercial Specialist:**
```json
{
  "voice": "elevenlabs",
  "voice_id": "DfE5EkknFF950NR6OMui",
  "voice_settings": {
    "stability": 0.5,
    "similarity_boost": 0.75
  }
}
```
[Add V7 to your account](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/DfE5EkknFF950NR6OMui)

**V2 — Premium Multilingual Briefing Specialist:**
```json
{
  "voice": "elevenlabs",
  "voice_id": "tlETan7Okc4pzjD0z62P",
  "voice_settings": {
    "stability": 0.5,
    "similarity_boost": 0.75
  }
}
```
[Add V2 to your account](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/tlETan7Okc4pzjD0z62P)

### Developer docs

<https://docs.bland.ai>

> Need an ElevenLabs API key? Sign up free: <https://try.elevenlabs.io/xz94z17y73rm>

---

## 4. Synthflow

**Best voices for automated flows:** V4 (Conversational E-Learning Authentic), V9 (Clinical B2B Unbiased Assistant)

### Why these voices?

- **V4** — Authentic, down-to-earth conversational tone that feels natural in automated customer flows; ideal for appointment booking, onboarding sequences, and educational workflows
- **V9** — Clinical precision for compliance-grade automated flows; zero-bias delivery for financial services, healthcare, and B2B automation pipelines

### Step-by-step setup

1. Log in to your Synthflow dashboard at <https://app.synthflow.ai>
2. Navigate to **Voice Configuration** in your agent or workflow settings
3. Select **Import from third-party** > **ElevenLabs**
4. Connect your ElevenLabs API key if not already linked
5. Paste the voice ID from below
6. Set the model to `eleven_multilingual_v2`
7. Save and test with a sample interaction

### Voice config JSON (paste into Synthflow configuration)

**V4 — Conversational E-Learning Authentic:**
```json
{
  "voiceId": "kVBPcEMsUF1nsAO1oNWw",
  "provider": "elevenlabs",
  "model": "eleven_multilingual_v2",
  "stability": 0.5,
  "similarityBoost": 0.75
}
```
[Add V4 to your account](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/kVBPcEMsUF1nsAO1oNWw)

**V9 — Clinical B2B Unbiased Assistant:**
```json
{
  "voiceId": "wDsJlOXPqcvIUKdLXjDs",
  "provider": "elevenlabs",
  "model": "eleven_multilingual_v2",
  "stability": 0.5,
  "similarityBoost": 0.75
}
```
[Add V9 to your account](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/wDsJlOXPqcvIUKdLXjDs)

### Developer docs

<https://docs.synthflow.ai>

> Need an ElevenLabs API key? Sign up free: <https://try.elevenlabs.io/xz94z17y73rm>

---

## 5. Voiceflow

**Best voices for chatbots:** V4 (Conversational E-Learning Authentic), V5 (Energetic Multi-Sector Character & Narrator), V7 (High-Energy Youthful Retail & Commercial Specialist)

### Why these voices?

- **V4** — Authentic, relatable conversational delivery that keeps chatbot users engaged; natural tone for e-learning bots, FAQ assistants, and onboarding flows
- **V5** — Dynamic, energetic narrator voice that brings personality to interactive chatbot experiences; versatile for multi-sector bots spanning education, gaming, and brand storytelling
- **V7** — Youthful, high-energy tone perfect for retail chatbots, product recommendation bots, and Gen-Z-targeted customer engagement

### Step-by-step setup

1. Log in to your Voiceflow workspace at <https://creator.voiceflow.com>
2. Open your project or create a new one
3. Add a **Text-to-Speech** block (or **ElevenLabs TTS** integration block)
4. In the block settings, select **ElevenLabs** as the TTS provider
5. Connect your ElevenLabs API key (Project Settings > Integrations)
6. Paste the voice ID from below into the voice configuration
7. Set the model to `eleven_multilingual_v2`
8. Connect the TTS block to your conversation flow and test

### Voice config JSON (paste into Voiceflow TTS block)

**V4 — Conversational E-Learning Authentic:**
```json
{
  "voiceId": "kVBPcEMsUF1nsAO1oNWw",
  "provider": "elevenlabs",
  "model": "eleven_multilingual_v2",
  "stability": 0.5,
  "similarityBoost": 0.75
}
```
[Add V4 to your account](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/kVBPcEMsUF1nsAO1oNWw)

**V5 — Energetic Multi-Sector Character & Narrator:**
```json
{
  "voiceId": "chcMmmtY1cmQh2ye1oXi",
  "provider": "elevenlabs",
  "model": "eleven_multilingual_v2",
  "stability": 0.5,
  "similarityBoost": 0.75
}
```
[Add V5 to your account](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/chcMmmtY1cmQh2ye1oXi)

**V7 — High-Energy Youthful Retail & Commercial Specialist:**
```json
{
  "voiceId": "DfE5EkknFF950NR6OMui",
  "provider": "elevenlabs",
  "model": "eleven_multilingual_v2",
  "stability": 0.5,
  "similarityBoost": 0.75
}
```
[Add V7 to your account](https://elevenlabs.io/app/voice-lab/share/ad827f2c0300d36094ca79e518b1a5df8c3609eb269353c30dcec3ac8878a437/DfE5EkknFF950NR6OMui)

### Developer docs

<https://www.voiceflow.com/docs>

> Need an ElevenLabs API key? Sign up free: <https://try.elevenlabs.io/xz94z17y73rm>

---

## Voice-to-Platform Suitability Matrix

| Use Case | Vapi | Retell AI | Bland AI | Synthflow | Voiceflow |
|----------|------|-----------|----------|-----------|-----------|
| Phone support (inbound) | V9, V2 | V9, V3 | — | V9 | — |
| Phone sales (outbound) | V2, V3 | V7, V9 | V7, V2 | V4 | — |
| Cold calling | V2 | V7 | V7, V2 | — | — |
| Customer service chatbot | — | — | — | V4, V9 | V4, V7 |
| E-learning / training bot | — | — | — | V4 | V4, V5 |
| Retail / product bot | — | V7 | V7 | — | V7, V5 |
| IVR / automated system | V9 | V9 | — | V9 | — |
| Multilingual support | V2, V3 | V3 | V2 | — | V5 |
| Compliance / legal | V9, V3 | V9, V3 | — | V9 | — |
| Executive briefing | V3, V2 | V3 | V2 | — | — |

---

## Universal ElevenLabs API Config (all platforms)

For any platform that accepts a raw ElevenLabs TTS API call, use this template:

```bash
curl -X POST "https://api.elevenlabs.io/v1/text-to-speech/VOICE_ID_HERE" \
  -H "xi-api-key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "text": "Your text here",
    "model_id": "eleven_multilingual_v2",
    "voice_settings": {
      "stability": 0.5,
      "similarity_boost": 0.75
    }
  }' \
  --output output.mp3
```

Replace `VOICE_ID_HERE` with the voice ID from the reference table above.

---

## Additional Resources

- **Live Portfolio:** `https://auto-business-agent.replit.app/portfolio`
- **OpenAPI Spec:** `https://auto-business-agent.replit.app/api/public/openapi.json`
- **npm Package:** `npm install phantom-voices`
- **MCP Server (Claude Desktop):** See `distribution/mcp-server/`
- **Custom GPT (ChatGPT):** See `distribution/custom-gpt/`
- **Hugging Face Model Cards:** See `distribution/huggingface/`

---

**Sign up for ElevenLabs (free tier available):** <https://try.elevenlabs.io/xz94z17y73rm>

All PHANTOM VOICES clones are Verified Professional Voice Clones (PVC) with Commercial Rights Cleared and zero handshake fee.
