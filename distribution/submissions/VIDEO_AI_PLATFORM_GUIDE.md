# PHANTOM VOICES — Video AI Platform Integration Guide

Get your 10 professional voice clones into video AI platforms. Every video generated with your voice IDs drives character usage = Stripe Collab revenue.

**ElevenLabs Affiliate Signup:** https://try.elevenlabs.io/xz94z17y73rm

## Voice ID Quick Reference

| ID | Name | ElevenLabs Voice ID | Best For Video |
|----|------|---------------------|----------------|
| V1 | Spatial-Ready Immersive | `vfaqCOvlrKi4Zp7C2IAm` | Game trailers, horror, cinematic |
| V2 | Premium Multilingual Briefing | `tlETan7Okc4pzjD0z62P` | Corporate videos, presentations, talking heads |
| V3 | Authoritative Multilingual Baritone | `n32p8A7EZ9CiVeRYpBY9` | Documentaries, cinematic narration, authority |
| V4 | Conversational E-Learning | `kVBPcEMsUF1nsAO1oNWw` | Tutorial videos, explainers, training |
| V5 | Energetic Multi-Sector Character | `chcMmmtY1cmQh2ye1oXi` | YouTube, animation, dynamic content |
| V6 | Urban Truth-Teller | `U1Vk2oyatMdYs096Ety7` | Social media, TikTok, Instagram Reels |
| V7 | High-Energy Youthful Retail | `DfE5EkknFF950NR6OMui` | Product videos, ads, promos, social |
| V8 | Narrative Sage | `8ZBQD0m1R6EIchgSltwB` | Documentaries, audiobooks, long-form narration |
| V9 | Clinical B2B Unbiased | `wDsJlOXPqcvIUKdLXjDs` | Medical videos, legal explainers, corporate |
| V10 | Advanced Sci-Fi Technical | `VukfMVtvHInVUWoMNPiQ` | Tech demos, sci-fi trailers, AI content |

**Add any voice to your account (free):** Visit the ElevenLabs sharing link for each voice at: `https://elevenlabs.io/app/voice-lab/share/[share_hash]/[voice_id]`

---

## 1. HeyGen — AI Video Generation

**Integration type:** Direct ElevenLabs voice support in dashboard + API

**Best voices for HeyGen:**
- V2 (`tlETan7Okc4pzjD0z62P`) — Corporate talking head videos, multilingual presentations
- V4 (`kVBPcEMsUF1nsAO1oNWw`) — Training and onboarding videos
- V7 (`DfE5EkknFF950NR6OMui`) — Product demos, marketing videos

**Dashboard setup:**
1. Go to https://app.heygen.com
2. Create a new video → Select your avatar
3. Under Voice, choose **ElevenLabs** as the provider
4. Paste the voice ID (e.g., `tlETan7Okc4pzjD0z62P` for V2)
5. Connect your ElevenLabs API key in Settings → Integrations
6. The voice will appear in your voice picker for all future videos

**API config (paste into your HeyGen API call):**
```json
{
  "voice": {
    "type": "elevenlabs",
    "voice_id": "tlETan7Okc4pzjD0z62P"
  }
}
```

**Docs:** https://docs.heygen.com

Don't have an ElevenLabs account? Sign up free: https://try.elevenlabs.io/xz94z17y73rm

---

## 2. Synthesia — AI Avatar Videos

**Integration type:** Direct ElevenLabs custom voice import

**Best voices for Synthesia:**
- V2 (`tlETan7Okc4pzjD0z62P`) — Professional corporate presentations
- V3 (`n32p8A7EZ9CiVeRYpBY9`) — Authoritative, documentary-style videos
- V9 (`wDsJlOXPqcvIUKdLXjDs`) — Clinical/neutral B2B content

**Setup:**
1. Go to https://app.synthesia.io
2. Navigate to **My Voices** → **Add Voice**
3. Select **ElevenLabs** as the source
4. Paste the ElevenLabs voice ID
5. Name the voice (e.g., "PHANTOM V2 - Corporate Briefing")
6. The voice appears in your voice dropdown for all Synthesia videos

**API config:**
```json
{
  "voice_id": "tlETan7Okc4pzjD0z62P",
  "voice_provider": "elevenlabs",
  "model": "eleven_multilingual_v2"
}
```

**Docs:** https://docs.synthesia.io

Sign up for ElevenLabs: https://try.elevenlabs.io/xz94z17y73rm

---

## 3. D-ID — Talking Avatar Videos

**Integration type:** Direct ElevenLabs support in API + Studio

**Best voices for D-ID:**
- V2 (`tlETan7Okc4pzjD0z62P`) — Professional talking head videos
- V4 (`kVBPcEMsUF1nsAO1oNWw`) — Conversational, relatable avatars
- V8 (`8ZBQD0m1R6EIchgSltwB`) — Narrator-style avatar presentations

**D-ID Studio setup:**
1. Go to https://studio.d-id.com
2. Create a new video → Choose your avatar image/video
3. Voice → select **ElevenLabs** → paste voice ID
4. Enter your script → Generate

**D-ID API config (ready to paste):**
```json
{
  "source_url": "your_avatar_image_url",
  "script": {
    "type": "text",
    "input": "Your script here",
    "provider": {
      "type": "elevenlabs",
      "voice_id": "tlETan7Okc4pzjD0z62P",
      "model_id": "eleven_multilingual_v2"
    }
  }
}
```

**API code example:**
```javascript
fetch('https://api.d-id.com/talks', {
  method: 'POST',
  headers: {
    'Authorization': 'Basic YOUR_D-ID_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    source_url: 'avatar_image_url',
    script: {
      type: 'text',
      input: 'Your script text',
      provider: {
        type: 'elevenlabs',
        voice_id: 'tlETan7Okc4pzjD0z62P',
        model_id: 'eleven_multilingual_v2'
      }
    }
  })
});
```

**Docs:** https://docs.d-id.com/reference/createtalk

Sign up for ElevenLabs: https://try.elevenlabs.io/xz94z17y73rm

---

## 4. Pictory — Blog-to-Video

**Integration type:** ElevenLabs voiceover integration

**Best voices for Pictory:**
- V8 (`8ZBQD0m1R6EIchgSltwB`) — Long-form blog narration
- V4 (`kVBPcEMsUF1nsAO1oNWw`) — Conversational explainers
- V2 (`tlETan7Okc4pzjD0z62P`) — Professional business content

**Setup:**
1. Go to https://app.pictory.ai
2. Create a video from your blog/article/script
3. In the editor, go to **Voiceover** tab
4. Select **ElevenLabs** as the voice provider
5. Paste the voice ID
6. Generate voiceover — it will narrate your entire video

**Docs:** https://pictory.ai/blog/api

Sign up for ElevenLabs: https://try.elevenlabs.io/xz94z17y73rm

---

## 5. InVideo AI — AI Video Creation

**Integration type:** ElevenLabs voiceover support

**Best voices for InVideo:**
- V7 (`DfE5EkknFF950NR6OMui`) — Marketing, social media videos
- V5 (`chcMmmtY1cmQh2ye1oXi`) — Energetic YouTube content
- V6 (`U1Vk2oyatMdYs096Ety7`) — Social media, authentic tone

**Setup:**
1. Go to https://ai.invideo.io
2. Generate your video with AI
3. In the editor, go to **Voiceover** → **Edit**
4. Select ElevenLabs as voice provider
5. Paste the voice ID for professional narration
6. Re-generate the voiceover with your selected voice

**Docs:** https://invideo.io/ai

Sign up for ElevenLabs: https://try.elevenlabs.io/xz94z17y73rm

---

## 6. Colossyan — Enterprise Video

**Integration type:** ElevenLabs custom voice support

**Best voices for Colossyan:**
- V2 (`tlETan7Okc4pzjD0z62P`) — Enterprise presentations, multilingual
- V3 (`n32p8A7EZ9CiVeRYpBY9`) — Authority content, leadership comms
- V9 (`wDsJlOXPqcvIUKdLXjDs`) — Compliance training, HR content

**Setup:**
1. Go to https://app.colossyan.com
2. Create video → select avatar
3. Voice → **Custom Voice** → **ElevenLabs**
4. Paste voice ID
5. Generate — works with all Colossyan avatar templates

**Docs:** https://www.colossyan.com/api-docs

Sign up for ElevenLabs: https://try.elevenlabs.io/xz94z17y73rm

---

## 7. Fliki — Text-to-Video

**Integration type:** Built-in ElevenLabs integration

**Best voices for Fliki:**
- V5 (`chcMmmtY1cmQh2ye1oXi`) — Engaging social content
- V7 (`DfE5EkknFF950NR6OMui`) — Ad and promo videos
- V8 (`8ZBQD0m1R6EIchgSltwB`) — Long-form content narration

**Setup:**
1. Go to https://app.fliki.ai
2. Create video → add scenes
3. For each scene, go to **Voice** selector
4. Choose **ElevenLabs** → paste voice ID
5. Fliki has built-in ElevenLabs support — no API key config needed in some plans

**Docs:** https://fliki.ai/resources

Sign up for ElevenLabs: https://try.elevenlabs.io/xz94z17y73rm

---

## 8. Runway — Video Generation + Voiceover

**Integration type:** Generate video in Runway, add voiceover via ElevenLabs API

**Best voices for Runway:**
- V1 (`vfaqCOvlrKi4Zp7C2IAm`) — Cinematic trailers, immersive content
- V3 (`n32p8A7EZ9CiVeRYpBY9`) — Documentary narration, cinematic voiceover
- V10 (`VukfMVtvHInVUWoMNPiQ`) — Sci-fi, futuristic content

**Workflow:**
1. Generate your video in Runway (Gen-2, Gen-3, etc.)
2. Export the video
3. Generate voiceover audio via ElevenLabs API:
```bash
curl -X POST "https://api.elevenlabs.io/v1/text-to-speech/n32p8A7EZ9CiVeRYpBY9" \
  -H "xi-api-key: YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d '{"text":"Your narration text","model_id":"eleven_multilingual_v2"}' \
  --output narration.mp3
```
4. Import both video and audio into your editor and combine

**Docs:** https://docs.runwayml.com

Sign up for ElevenLabs: https://try.elevenlabs.io/xz94z17y73rm

---

## 9. Descript — Video/Podcast Editing

**Integration type:** ElevenLabs integration in Settings

**Best voices for Descript:**
- V6 (`U1Vk2oyatMdYs096Ety7`) — Podcast editing, authentic voiceover
- V5 (`chcMmmtY1cmQh2ye1oXi`) — Dynamic content, character voice
- V8 (`8ZBQD0m1R6EIchgSltwB`) — Documentary-style post-production

**Setup:**
1. Open Descript → **Settings** → **Integrations**
2. Connect your **ElevenLabs** API key
3. In your project, go to **Stock Voices** or use the AI voice feature
4. Search for the voice ID or generate audio externally and import
5. Use Descript's timeline editor to sync voiceover with video

**Docs:** https://www.descript.com/help

Sign up for ElevenLabs: https://try.elevenlabs.io/xz94z17y73rm

---

## 10. Kapwing — Online Video Editor

**Integration type:** Import ElevenLabs-generated audio

**Best voices for Kapwing:**
- V7 (`DfE5EkknFF950NR6OMui`) — Social media clips, ads
- V4 (`kVBPcEMsUF1nsAO1oNWw`) — Tutorial and how-to videos
- V6 (`U1Vk2oyatMdYs096Ety7`) — Authentic social content

**Workflow:**
1. Generate voiceover via ElevenLabs API with your chosen voice ID
2. In Kapwing, upload your video
3. Add the generated audio file to the timeline
4. Sync and edit as needed

**Docs:** https://www.kapwing.com/resources

Sign up for ElevenLabs: https://try.elevenlabs.io/xz94z17y73rm

---

## 11. Lumen5 — Video Creation

**Integration type:** AI narration with ElevenLabs voices

**Best voices for Lumen5:**
- V8 (`8ZBQD0m1R6EIchgSltwB`) — Blog-to-video narration
- V2 (`tlETan7Okc4pzjD0z62P`) — Professional business videos
- V4 (`kVBPcEMsUF1nsAO1oNWw`) — Educational content

**Setup:**
1. Go to https://lumen5.com
2. Create video from text/blog/URL
3. Under **AI Voiceover**, select ElevenLabs if available
4. Paste voice ID for professional narration
5. If direct integration is not available, generate audio via ElevenLabs API and upload as custom voiceover

**Docs:** https://lumen5.com/learn

Sign up for ElevenLabs: https://try.elevenlabs.io/xz94z17y73rm

---

## Voice-to-Platform Suitability Matrix

| Voice | HeyGen | Synthesia | D-ID | Pictory | InVideo | Colossyan | Fliki | Runway | Descript | Kapwing | Lumen5 |
|-------|--------|-----------|------|---------|---------|-----------|-------|--------|----------|---------|--------|
| V1 | | | | | | | | Best | | | |
| V2 | Best | Best | Best | Good | | Best | | | | | Good |
| V3 | | Good | | | | Good | | Good | | | |
| V4 | Good | | Good | Good | | | | | | Good | Good |
| V5 | | | | | Good | | Good | | Good | | |
| V6 | | | | | Good | | | | Best | Good | |
| V7 | Good | | | | Best | | Good | | | Best | |
| V8 | | | Good | Best | | | Good | | Good | | Best |
| V9 | | Good | | | | Good | | | | | |
| V10 | | | | | | | | Good | | | |

---

## Universal ElevenLabs TTS Config (works on any platform)

For any platform that supports custom API calls or audio file upload:

```bash
curl -X POST "https://api.elevenlabs.io/v1/text-to-speech/VOICE_ID_HERE" \
  -H "xi-api-key: YOUR_ELEVENLABS_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "text": "Your script text here",
    "model_id": "eleven_multilingual_v2",
    "voice_settings": {
      "stability": 0.5,
      "similarity_boost": 0.75
    }
  }' \
  --output voiceover.mp3
```

Replace `VOICE_ID_HERE` with any voice ID from the table above.

Need an ElevenLabs account? **Sign up free:** https://try.elevenlabs.io/xz94z17y73rm
