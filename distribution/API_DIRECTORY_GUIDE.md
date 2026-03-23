# PHANTOM VOICES — Complete Distribution & Integration Guide

Your 10 Professional Voice Clones are ready for global distribution. This guide covers API directories, AI agent frameworks, and no-code/low-code platforms — every channel where developers and builders can discover and use your voices.

---

## Voice Clone Reference Table

| ID  | Name | ElevenLabs Voice ID | Best For |
|-----|------|---------------------|----------|
| V1  | Spatial-Ready Immersive | `vfaqCOvlrKi4Zp7C2IAm` | Gaming, Horror, RPG Villains, VR/AR |
| V2  | Premium Multilingual Briefing Specialist | `tlETan7Okc4pzjD0z62P` | Corporate, Briefings, Multilingual |
| V3  | Authoritative Multilingual Baritone | `n32p8A7EZ9CiVeRYpBY9` | Documentary, Authority, News |
| V4  | Conversational E-Learning Authentic | `kVBPcEMsUF1nsAO1oNWw` | E-Learning, Training, Education |
| V5  | Energetic Multi-Sector Character & Narrator | `chcMmmtY1cmQh2ye1oXi` | Characters, Animation, Narration |
| V6  | Urban Truth-Teller | `U1Vk2oyatMdYs096Ety7` | Podcasts, Urban Content, Authenticity |
| V7  | High-Energy Youthful Retail & Commercial | `DfE5EkknFF950NR6OMui` | Retail, Ads, Social Media, Youth |
| V8  | Narrative Sage | `8ZBQD0m1R6EIchgSltwB` | Audiobooks, Documentary, Storytelling |
| V9  | Clinical B2B Unbiased Assistant | `wDsJlOXPqcvIUKdLXjDs` | Medical, Legal, B2B, Clinical |
| V10 | Advanced Sci-Fi Technical Companion | `VukfMVtvHInVUWoMNPiQ` | Sci-Fi, Tech, AI Assistants, Gaming |

**ElevenLabs Signup (Affiliate):** https://try.elevenlabs.io/xz94z17y73rm
**Model:** `eleven_multilingual_v2`
**Handshake Fee:** £0.00 (Zero)
**Commercial Rights:** Cleared on all voices

---

## PART 1: API Directory Submissions

Your OpenAPI spec is live at `/api/public/openapi.json` and ready for submission.

### 1. RapidAPI
- Go to: https://rapidapi.com/provider
- Click "Add New API"
- Import from URL: `https://auto-business-agent.replit.app/api/public/openapi.json`
- Category: **Media** > **Speech**
- Pricing: Free (your revenue comes from ElevenLabs character usage)
- Add all 10 voice IDs to the API description so developers can search for them

### 2. APIs.guru (OpenAPI Directory)
- Go to: https://apis.guru/
- Submit a PR to their GitHub repo: https://github.com/APIs-guru/openapi-directory
- Add your spec under the appropriate category
- This feeds into many API discovery tools and search engines

### 3. Public APIs (GitHub — 250k+ stars)
- Submit a PR to: https://github.com/public-apis/public-apis
- Category: Machine Learning
- Auth: No (your public endpoints are open)
- HTTPS: Yes
- This is one of the most starred repos on GitHub — high visibility

### 4. Postman Public Workspaces
- Go to: https://www.postman.com/explore
- Create a public workspace: "PHANTOM VOICES — AI Voice Clones"
- Import your OpenAPI spec from `https://auto-business-agent.replit.app/api/public/openapi.json`
- Add example requests for each voice ID (V1-V10)
- Developers can fork your collection and start testing instantly
- Add environment variables template with ElevenLabs API key placeholder

### 5. Programmable Web
- Go to: https://www.programmableweb.com/
- Click "Add an API" and fill in your details
- API Type: REST
- Category: Voice, Speech, AI

### 6. API List
- Go to: https://apilist.fun/
- Submit your API with the OpenAPI spec URL

### 7. Any API
- Go to: https://any-api.com/
- Submit your OpenAPI spec URL for automatic documentation generation

### 8. OpenAPI.Tools
- Go to: https://openapi.tools/
- Register your spec to appear in OpenAPI ecosystem tooling

### 9. API Harmony (IBM)
- Go to: https://developer.ibm.com/apis/
- Submit under AI/Machine Learning category

### 10. Awesome APIs (GitHub)
- Submit a PR to: https://github.com/TonnyL/Awesome_APIs
- Category: Machine Learning / Voice
- Another popular curated list

### 11. Free APIs (GitHub)
- Submit a PR to: https://github.com/Free-API-Hub/Free-APIs
- Your catalog is free to query — perfect fit

### 12. n8n Community Nodes
- Publish a custom n8n node to npm: `n8n-nodes-phantom-voices`
- This makes your voices discoverable inside n8n's node browser
- See Part 3 for n8n integration details

### Your API Details for Submissions

| Field | Value |
|-------|-------|
| **API Name** | PHANTOM VOICES |
| **Description** | 10 Professional AI Voice Clones. Zero Fee. Instant API Integration via ElevenLabs. Multilingual. Commercial rights cleared. |
| **Category** | Voice / Speech / AI / Text-to-Speech |
| **Auth Required** | No (public catalog endpoints) |
| **Spec Format** | OpenAPI 3.0 |
| **Spec URL** | `https://auto-business-agent.replit.app/api/public/openapi.json` |
| **Base URL** | `https://auto-business-agent.replit.app` |
| **Endpoints** | `/api/public/voices`, `/api/public/voices/{id}`, `/api/public/search` |
| **Pricing** | Free |
| **Signup Link** | https://try.elevenlabs.io/xz94z17y73rm |

---

## PART 2: AI Agent Framework Integration

These frameworks let AI developers plug your voice IDs directly into their agents, bots, and AI applications.

### LangChain (Python & JavaScript)

LangChain has an official ElevenLabs integration. Developers can use your voice IDs directly.

**Python — Using ElevenLabs Tool:**
```python
# pip install langchain-community elevenlabs
from langchain_community.tools.eleven_labs.text2speech import ElevenLabsText2SpeechTool

# PHANTOM VOICES — Voice IDs (pick any)
PHANTOM_VOICES = {
    "V1": "vfaqCOvlrKi4Zp7C2IAm",  # Monster/Demon — Gaming, Horror
    "V2": "tlETan7Okc4pzjD0z62P",  # Corporate Briefing — Multilingual
    "V3": "n32p8A7EZ9CiVeRYpBY9",  # Authoritative Baritone — Documentary
    "V4": "kVBPcEMsUF1nsAO1oNWw",  # E-Learning — Training
    "V5": "chcMmmtY1cmQh2ye1oXi",  # Energetic Character — Animation
    "V6": "U1Vk2oyatMdYs096Ety7",  # Urban Truth-Teller — Podcasts
    "V7": "DfE5EkknFF950NR6OMui",  # Youthful Retail — Ads, Social
    "V8": "8ZBQD0m1R6EIchgSltwB",  # Narrative Sage — Audiobooks
    "V9": "wDsJlOXPqcvIUKdLXjDs",  # Clinical B2B — Medical, Legal
    "V10": "VukfMVtvHInVUWoMNPiQ", # Sci-Fi Technical — AI Assistants
}

# Don't have an account? Sign up free: https://try.elevenlabs.io/xz94z17y73rm

tts = ElevenLabsText2SpeechTool(
    model="eleven_multilingual_v2",
    voice=PHANTOM_VOICES["V8"],  # Narrative Sage for storytelling
)

audio = tts.run("Welcome to the PHANTOM VOICES fleet.")
tts.play(audio)
```

**Python — Streaming with LangChain LLM:**
```python
from langchain.llms import OpenAI
from elevenlabs import generate, stream

llm = OpenAI(temperature=0.7, streaming=True)
response = llm.predict("Tell a short sci-fi story")

audio_stream = generate(
    text=response,
    voice="VukfMVtvHInVUWoMNPiQ",  # V10 — Sci-Fi Technical
    model="eleven_multilingual_v2",
    stream=True
)
stream(audio_stream)
```

**JavaScript/TypeScript — LangChain.js:**
```typescript
// npm install @langchain/community
// Need an API key? Sign up free: https://try.elevenlabs.io/xz94z17y73rm
import { ElevenLabsTextToSpeechTool } from "@langchain/community/tools/elevenlabs";

const tts = new ElevenLabsTextToSpeechTool({
  model: "eleven_multilingual_v2",
  voice: "8ZBQD0m1R6EIchgSltwB", // V8 — Narrative Sage
});

const audio = await tts.invoke("Your text here");
```

---

### Vercel AI SDK

The Vercel AI SDK supports ElevenLabs as a speech provider. Your voice IDs work directly in Next.js apps.

```typescript
// npm install ai @ai-sdk/elevenlabs
// Need an API key? Sign up free: https://try.elevenlabs.io/xz94z17y73rm
import { experimental_generateSpeech as generateSpeech } from "ai";
import { elevenlabs } from "@ai-sdk/elevenlabs";

// PHANTOM VOICES — use any voice ID
const result = await generateSpeech({
  model: elevenlabs.speech("eleven_multilingual_v2"),
  voice: "vfaqCOvlrKi4Zp7C2IAm", // V1 — Spatial-Ready Immersive
  text: "Welcome to PHANTOM VOICES.",
});

// result.audio contains the generated speech
const audioBuffer = result.audio;
```

---

### CrewAI

CrewAI agents can use your voices for audio output in multi-agent workflows.

```python
# pip install crewai elevenlabs
# Need an API key? Sign up free: https://try.elevenlabs.io/xz94z17y73rm
from crewai import Agent, Task, Crew
from elevenlabs import generate, play

# PHANTOM VOICES IDs
NARRATOR_VOICE = "8ZBQD0m1R6EIchgSltwB"     # V8 — Narrative Sage
ASSISTANT_VOICE = "wDsJlOXPqcvIUKdLXjDs"     # V9 — Clinical B2B
PRESENTER_VOICE = "DfE5EkknFF950NR6OMui"      # V7 — Youthful Retail

# After your CrewAI agent produces text output:
def speak_result(text, voice_id):
    audio = generate(
        text=text,
        voice=voice_id,
        model="eleven_multilingual_v2",
    )
    play(audio)

# Example: narrator agent reads the final report
narrator = Agent(
    role="Narrator",
    goal="Read the research report aloud",
    backstory="Professional audiobook narrator"
)

# After crew.kickoff(), speak the result:
# speak_result(crew_output, NARRATOR_VOICE)
```

---

### AutoGen (Microsoft)

AutoGen multi-agent systems can use your voices for conversational AI output.

```python
# pip install pyautogen elevenlabs
# Need an API key? Sign up free: https://try.elevenlabs.io/xz94z17y73rm
from autogen import ConversableAgent
from elevenlabs import generate, play

VOICE_MAP = {
    "assistant": "wDsJlOXPqcvIUKdLXjDs",  # V9 — Clinical B2B
    "narrator": "8ZBQD0m1R6EIchgSltwB",    # V8 — Narrative Sage
    "character": "vfaqCOvlrKi4Zp7C2IAm",   # V1 — Monster/Demon
}

# Sign up free: https://try.elevenlabs.io/xz94z17y73rm

def text_to_speech(text, role="assistant"):
    audio = generate(
        text=text,
        voice=VOICE_MAP.get(role, VOICE_MAP["assistant"]),
        model="eleven_multilingual_v2",
    )
    play(audio)

assistant = ConversableAgent(
    name="Phantom_Assistant",
    system_message="You are a helpful assistant. Keep responses concise.",
)

# Hook into agent reply to add voice output
# text_to_speech(assistant_reply, "assistant")
```

---

### Microsoft Semantic Kernel (.NET / Python)

```csharp
// dotnet add package Microsoft.SemanticKernel
// Use ElevenLabs REST API with HttpClient

using System.Net.Http;
using System.Text.Json;

var voiceIds = new Dictionary<string, string>
{
    ["V1"] = "vfaqCOvlrKi4Zp7C2IAm",  // Monster/Demon
    ["V3"] = "n32p8A7EZ9CiVeRYpBY9",  // Authoritative Baritone
    ["V8"] = "8ZBQD0m1R6EIchgSltwB",  // Narrative Sage
    ["V9"] = "wDsJlOXPqcvIUKdLXjDs",  // Clinical B2B
};

// Sign up free: https://try.elevenlabs.io/xz94z17y73rm

async Task<byte[]> SpeakAsync(string text, string voiceId, string apiKey)
{
    var client = new HttpClient();
    client.DefaultRequestHeaders.Add("xi-api-key", apiKey);

    var body = new { text, model_id = "eleven_multilingual_v2",
        voice_settings = new { stability = 0.5, similarity_boost = 0.75 } };

    var response = await client.PostAsJsonAsync(
        $"https://api.elevenlabs.io/v1/text-to-speech/{voiceId}", body);

    return await response.Content.ReadAsByteArrayAsync();
}
```

---

### Spring AI (Java)

```java
// For Java/Spring Boot applications
// Add to pom.xml: spring-web dependency

import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;

public class PhantomVoices {
    // PHANTOM VOICES — All 10 Voice IDs
    public static final String V1 = "vfaqCOvlrKi4Zp7C2IAm"; // Monster/Demon
    public static final String V2 = "tlETan7Okc4pzjD0z62P"; // Corporate Briefing
    public static final String V3 = "n32p8A7EZ9CiVeRYpBY9"; // Authoritative Baritone
    public static final String V4 = "kVBPcEMsUF1nsAO1oNWw"; // E-Learning
    public static final String V5 = "chcMmmtY1cmQh2ye1oXi"; // Energetic Character
    public static final String V6 = "U1Vk2oyatMdYs096Ety7"; // Urban Truth-Teller
    public static final String V7 = "DfE5EkknFF950NR6OMui"; // Youthful Retail
    public static final String V8 = "8ZBQD0m1R6EIchgSltwB"; // Narrative Sage
    public static final String V9 = "wDsJlOXPqcvIUKdLXjDs"; // Clinical B2B
    public static final String V10 = "VukfMVtvHInVUWoMNPiQ"; // Sci-Fi Technical

    // Sign up free: https://try.elevenlabs.io/xz94z17y73rm

    public byte[] speak(String text, String voiceId, String apiKey) {
        RestTemplate rest = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.set("xi-api-key", apiKey);
        headers.setContentType(MediaType.APPLICATION_JSON);

        String body = String.format(
            "{\"text\":\"%s\",\"model_id\":\"eleven_multilingual_v2\"," +
            "\"voice_settings\":{\"stability\":0.5,\"similarity_boost\":0.75}}",
            text);

        HttpEntity<String> entity = new HttpEntity<>(body, headers);
        ResponseEntity<byte[]> response = rest.exchange(
            "https://api.elevenlabs.io/v1/text-to-speech/" + voiceId,
            HttpMethod.POST, entity, byte[].class);

        return response.getBody();
    }
}
```

---

### Haystack (deepset)

```python
# pip install haystack-ai elevenlabs
# Need an API key? Sign up free: https://try.elevenlabs.io/xz94z17y73rm
from elevenlabs import generate, play

PHANTOM_VOICES = {
    "narrator": "8ZBQD0m1R6EIchgSltwB",     # V8 — Narrative Sage
    "assistant": "wDsJlOXPqcvIUKdLXjDs",     # V9 — Clinical B2B
    "character": "chcMmmtY1cmQh2ye1oXi",      # V5 — Energetic Character
}

# Use in a Haystack pipeline as a post-processing step:
# After your RAG pipeline returns text, convert to speech
def pipeline_to_speech(pipeline_output, voice_role="narrator"):
    audio = generate(
        text=pipeline_output["answers"][0].answer,
        voice=PHANTOM_VOICES[voice_role],
        model="eleven_multilingual_v2",
    )
    play(audio)
```

---

### LlamaIndex

```python
# pip install llama-index elevenlabs
# Need an API key? Sign up free: https://try.elevenlabs.io/xz94z17y73rm
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
from elevenlabs import generate, play

# After querying your LlamaIndex:
index = VectorStoreIndex.from_documents(documents)
query_engine = index.as_query_engine()
response = query_engine.query("Summarize the document")

# Speak the response with PHANTOM VOICES
audio = generate(
    text=str(response),
    voice="n32p8A7EZ9CiVeRYpBY9",  # V3 — Authoritative Baritone
    model="eleven_multilingual_v2",
)
play(audio)
```

---

### Dify.ai

Dify is an open-source LLM app builder with visual workflow support.

1. Go to your Dify workspace
2. In your app workflow, add an **HTTP Request** node after your LLM node
3. Configure the HTTP Request:
   - Method: POST
   - URL: `https://api.elevenlabs.io/v1/text-to-speech/8ZBQD0m1R6EIchgSltwB` (V8 — Narrative Sage)
   - Headers: `xi-api-key: YOUR_API_KEY` (get one at https://try.elevenlabs.io/xz94z17y73rm), `Content-Type: application/json`
   - Body: `{"text": "{{llm_output}}", "model_id": "eleven_multilingual_v2", "voice_settings": {"stability": 0.5, "similarity_boost": 0.75}}`
4. The response is audio binary data — save or stream to user

---

### Flowise

Flowise is a drag-and-drop LLM orchestration tool. Get an ElevenLabs API key at https://try.elevenlabs.io/xz94z17y73rm

1. Open Flowise canvas
2. Add a **Custom Tool** node
3. Set the tool to call ElevenLabs TTS with your voice ID
4. Connect it to the output of your LLM chain
5. Voice IDs to use:
   - `8ZBQD0m1R6EIchgSltwB` (V8 — Narrative Sage) for reading responses
   - `wDsJlOXPqcvIUKdLXjDs` (V9 — Clinical B2B) for factual answers
   - `vfaqCOvlrKi4Zp7C2IAm` (V1 — Monster/Demon) for gaming/creative

---

## PART 3: No-Code / Low-Code Platform Integration

### n8n

n8n has an official ElevenLabs community node.

**Setup:**
1. In n8n, go to Settings > Community Nodes
2. Install: `n8n-nodes-elevenlabs`
3. Add ElevenLabs credentials (API key from https://try.elevenlabs.io/xz94z17y73rm)

**Workflow — Text to Speech:**
```
Webhook Trigger → ElevenLabs TTS Node → Respond to Webhook
```

Configure the ElevenLabs TTS Node:
- Voice ID: `8ZBQD0m1R6EIchgSltwB` (V8 — Narrative Sage)
- Model: `eleven_multilingual_v2`
- Text: `{{ $json.text }}`

**Workflow — AI Chatbot with Voice:**
```
Webhook → OpenAI Chat → ElevenLabs TTS → Respond with Audio
```

**All 10 Voice IDs for n8n:**
| Use When | Voice ID | Name |
|----------|----------|------|
| Gaming/Horror content | `vfaqCOvlrKi4Zp7C2IAm` | V1 — Monster/Demon |
| Corporate briefings | `tlETan7Okc4pzjD0z62P` | V2 — Corporate |
| Documentary/news | `n32p8A7EZ9CiVeRYpBY9` | V3 — Authoritative |
| Training/education | `kVBPcEMsUF1nsAO1oNWw` | V4 — E-Learning |
| Animated/character | `chcMmmtY1cmQh2ye1oXi` | V5 — Energetic |
| Podcast/authentic | `U1Vk2oyatMdYs096Ety7` | V6 — Urban |
| Ads/social media | `DfE5EkknFF950NR6OMui` | V7 — Youthful |
| Audiobooks/stories | `8ZBQD0m1R6EIchgSltwB` | V8 — Narrative |
| Medical/legal/B2B | `wDsJlOXPqcvIUKdLXjDs` | V9 — Clinical |
| Sci-fi/tech/AI | `VukfMVtvHInVUWoMNPiQ` | V10 — Sci-Fi |

---

### Make.com (Integromat)

Get an ElevenLabs API key at https://try.elevenlabs.io/xz94z17y73rm

**Setup:**
1. Add an HTTP module
2. Configure:
   - Method: POST
   - URL: `https://api.elevenlabs.io/v1/text-to-speech/VOICE_ID_HERE`
   - Headers:
     - `xi-api-key`: Your ElevenLabs API key
     - `Content-Type`: `application/json`
   - Body:
     ```json
     {
       "text": "{{your_text_variable}}",
       "model_id": "eleven_multilingual_v2",
       "voice_settings": {
         "stability": 0.5,
         "similarity_boost": 0.75
       }
     }
     ```
3. Output: Binary audio data (MP3)
4. Connect to Google Drive, Dropbox, or email to deliver the audio

**Example Scenarios:**
- RSS Feed → Summarize with AI → Speak with V8 (`8ZBQD0m1R6EIchgSltwB`) → Upload to podcast host
- Form submission → Generate voiceover with V7 (`DfE5EkknFF950NR6OMui`) → Send via email
- Slack message → Translate → Speak in target language with V2 (`tlETan7Okc4pzjD0z62P`) → Reply

---

### Zapier

Get an ElevenLabs API key at https://try.elevenlabs.io/xz94z17y73rm

**Setup:**
1. Trigger: Choose your trigger (email, form, schedule, etc.)
2. Action: **Webhooks by Zapier** > POST
3. Configure:
   - URL: `https://api.elevenlabs.io/v1/text-to-speech/8ZBQD0m1R6EIchgSltwB`
   - Payload Type: JSON
   - Data:
     - `text`: Your text input
     - `model_id`: `eleven_multilingual_v2`
     - `voice_settings`: `{"stability": 0.5, "similarity_boost": 0.75}`
   - Headers:
     - `xi-api-key`: Your API key
     - `Content-Type`: `application/json`

**Popular Zap Ideas:**
- New blog post → Generate audio version with V8 → Upload to S3
- Customer support ticket closed → Generate summary audio with V9 → Send to manager
- Daily weather → Speak forecast with V3 → Push notification

---

### Voiceflow

Voiceflow is a conversational AI platform with built-in ElevenLabs support.

1. In your Voiceflow project, go to **Settings** > **Voice**
2. Select **ElevenLabs** as the TTS provider
3. Enter your API key (get one at https://try.elevenlabs.io/xz94z17y73rm)
4. Set Custom Voice ID to any PHANTOM VOICES ID:
   - `wDsJlOXPqcvIUKdLXjDs` — V9 for customer service bots
   - `kVBPcEMsUF1nsAO1oNWw` — V4 for training chatbots
   - `DfE5EkknFF950NR6OMui` — V7 for retail/sales bots
5. All dialogue blocks will now use your chosen PHANTOM VOICE

---

### Botpress

Get an ElevenLabs API key at https://try.elevenlabs.io/xz94z17y73rm

1. In Botpress Studio, go to **Integration Hub**
2. Search for ElevenLabs or add a custom **HTTP Call** card
3. Configure the API call with your voice ID:
   - URL: `https://api.elevenlabs.io/v1/text-to-speech/wDsJlOXPqcvIUKdLXjDs` (V9)
   - Method: POST
   - Headers: `xi-api-key: YOUR_KEY`
   - Body: `{"text": "{{event.preview}}", "model_id": "eleven_multilingual_v2"}`
4. Connect the audio output to a voice response node

---

### Bubble.io

Get an ElevenLabs API key at https://try.elevenlabs.io/xz94z17y73rm

1. Go to **Plugins** > **API Connector**
2. Add a new API called "PHANTOM VOICES TTS"
3. Configure:
   - Authentication: Private key in header (`xi-api-key`)
   - API Call: POST `https://api.elevenlabs.io/v1/text-to-speech/[voiceId]`
   - Initialize with one of your voice IDs (e.g., `8ZBQD0m1R6EIchgSltwB`)
   - Body: JSON with `text`, `model_id`, `voice_settings`
4. Use in workflows: Button click → PHANTOM VOICES TTS → Play audio

---

### FlutterFlow (Mobile Apps)

Get an ElevenLabs API key at https://try.elevenlabs.io/xz94z17y73rm

1. Go to **API Calls** in your FlutterFlow project
2. Create a new API Call:
   - Name: PHANTOM VOICES TTS
   - Method: POST
   - URL: `https://api.elevenlabs.io/v1/text-to-speech/DfE5EkknFF950NR6OMui` (V7)
   - Headers: `xi-api-key`, `Content-Type: application/json`
   - Body: `{"text": "[textVariable]", "model_id": "eleven_multilingual_v2"}`
3. Response type: Binary (audio)
4. Trigger from any button or event in your mobile app

---

### Retool

Get an ElevenLabs API key at https://try.elevenlabs.io/xz94z17y73rm

1. Create a new **REST API** resource
2. Base URL: `https://api.elevenlabs.io/v1`
3. Default headers: `xi-api-key: YOUR_KEY`
4. Create a query:
   - POST `/text-to-speech/{{voiceSelect.value}}`
   - Body: `{"text": {{textInput.value}}, "model_id": "eleven_multilingual_v2"}`
5. Add a dropdown with all 10 PHANTOM VOICES IDs for voice selection

---

### Streamlit (Python Web Apps)

```python
# pip install streamlit elevenlabs
import streamlit as st
from elevenlabs import generate

VOICES = {
    "V1 — Monster/Demon": "vfaqCOvlrKi4Zp7C2IAm",
    "V2 — Corporate Briefing": "tlETan7Okc4pzjD0z62P",
    "V3 — Authoritative Baritone": "n32p8A7EZ9CiVeRYpBY9",
    "V4 — E-Learning": "kVBPcEMsUF1nsAO1oNWw",
    "V5 — Energetic Character": "chcMmmtY1cmQh2ye1oXi",
    "V6 — Urban Truth-Teller": "U1Vk2oyatMdYs096Ety7",
    "V7 — Youthful Retail": "DfE5EkknFF950NR6OMui",
    "V8 — Narrative Sage": "8ZBQD0m1R6EIchgSltwB",
    "V9 — Clinical B2B": "wDsJlOXPqcvIUKdLXjDs",
    "V10 — Sci-Fi Technical": "VukfMVtvHInVUWoMNPiQ",
}

# Sign up free: https://try.elevenlabs.io/xz94z17y73rm

st.title("PHANTOM VOICES — Text to Speech")
voice = st.selectbox("Select Voice", list(VOICES.keys()))
text = st.text_area("Enter text")

if st.button("Generate Speech"):
    audio = generate(text=text, voice=VOICES[voice], model="eleven_multilingual_v2")
    st.audio(audio, format="audio/mp3")
```

---

### Gradio (Hugging Face Spaces)

```python
# pip install gradio elevenlabs
import gradio as gr
from elevenlabs import generate

VOICES = {
    "V1 — Monster/Demon": "vfaqCOvlrKi4Zp7C2IAm",
    "V2 — Corporate Briefing": "tlETan7Okc4pzjD0z62P",
    "V3 — Authoritative Baritone": "n32p8A7EZ9CiVeRYpBY9",
    "V4 — E-Learning": "kVBPcEMsUF1nsAO1oNWw",
    "V5 — Energetic Character": "chcMmmtY1cmQh2ye1oXi",
    "V6 — Urban Truth-Teller": "U1Vk2oyatMdYs096Ety7",
    "V7 — Youthful Retail": "DfE5EkknFF950NR6OMui",
    "V8 — Narrative Sage": "8ZBQD0m1R6EIchgSltwB",
    "V9 — Clinical B2B": "wDsJlOXPqcvIUKdLXjDs",
    "V10 — Sci-Fi Technical": "VukfMVtvHInVUWoMNPiQ",
}

def speak(text, voice_name, api_key):
    audio = generate(
        text=text,
        voice=VOICES[voice_name],
        model="eleven_multilingual_v2",
        api_key=api_key,
    )
    return audio

demo = gr.Interface(
    fn=speak,
    inputs=[
        gr.Textbox(label="Text to speak"),
        gr.Dropdown(choices=list(VOICES.keys()), label="PHANTOM VOICE"),
        gr.Textbox(label="ElevenLabs API Key", type="password"),
    ],
    outputs=gr.Audio(label="Generated Speech"),
    title="PHANTOM VOICES — AI Voice Clone Fleet",
    description="10 Professional Voice Clones. Zero Fee. Get an API key at https://try.elevenlabs.io/xz94z17y73rm",
)

demo.launch()
```

Deploy this on Hugging Face Spaces for a free, always-on demo that drives voice usage.

---

## PART 4: SEO Infrastructure (Already Live)

Your app includes:
- `/sitemap.xml` — Dynamic sitemap with all voice pages
- `/robots.txt` — Search engine guidance (public pages allowed, dashboard protected)
- JSON-LD structured data on the portfolio page
- Open Graph and Twitter Card meta tags
- Canonical URL and keyword meta tags
- Rich description optimized for voice/TTS search terms

### Sitemap Submission

Submit your sitemap to search engines:
1. **Google Search Console**: https://search.google.com/search-console — Add property, verify, submit sitemap URL
2. **Bing Webmaster Tools**: https://www.bing.com/webmasters — Add site, submit sitemap
3. Your sitemap URL: `https://auto-business-agent.replit.app/sitemap.xml`

---

## PART 5: Quick Copy-Paste Voice ID Blocks

For easy pasting into any platform that asks for a voice ID:

**Single voice (most popular — Narrative Sage):**
```
8ZBQD0m1R6EIchgSltwB
```

**All 10 as JSON:**
```json
{
  "V1": "vfaqCOvlrKi4Zp7C2IAm",
  "V2": "tlETan7Okc4pzjD0z62P",
  "V3": "n32p8A7EZ9CiVeRYpBY9",
  "V4": "kVBPcEMsUF1nsAO1oNWw",
  "V5": "chcMmmtY1cmQh2ye1oXi",
  "V6": "U1Vk2oyatMdYs096Ety7",
  "V7": "DfE5EkknFF950NR6OMui",
  "V8": "8ZBQD0m1R6EIchgSltwB",
  "V9": "wDsJlOXPqcvIUKdLXjDs",
  "V10": "VukfMVtvHInVUWoMNPiQ"
}
```

**As environment variable (for .env files):**
```
PHANTOM_VOICE_V1=vfaqCOvlrKi4Zp7C2IAm
PHANTOM_VOICE_V2=tlETan7Okc4pzjD0z62P
PHANTOM_VOICE_V3=n32p8A7EZ9CiVeRYpBY9
PHANTOM_VOICE_V4=kVBPcEMsUF1nsAO1oNWw
PHANTOM_VOICE_V5=chcMmmtY1cmQh2ye1oXi
PHANTOM_VOICE_V6=U1Vk2oyatMdYs096Ety7
PHANTOM_VOICE_V7=DfE5EkknFF950NR6OMui
PHANTOM_VOICE_V8=8ZBQD0m1R6EIchgSltwB
PHANTOM_VOICE_V9=wDsJlOXPqcvIUKdLXjDs
PHANTOM_VOICE_V10=VukfMVtvHInVUWoMNPiQ
ELEVENLABS_MODEL=eleven_multilingual_v2
ELEVENLABS_SIGNUP=https://try.elevenlabs.io/xz94z17y73rm
```

**As Python dict:**
```python
PHANTOM_VOICES = {
    "V1": "vfaqCOvlrKi4Zp7C2IAm",   # Monster/Demon
    "V2": "tlETan7Okc4pzjD0z62P",   # Corporate Briefing
    "V3": "n32p8A7EZ9CiVeRYpBY9",   # Authoritative Baritone
    "V4": "kVBPcEMsUF1nsAO1oNWw",   # E-Learning
    "V5": "chcMmmtY1cmQh2ye1oXi",   # Energetic Character
    "V6": "U1Vk2oyatMdYs096Ety7",   # Urban Truth-Teller
    "V7": "DfE5EkknFF950NR6OMui",   # Youthful Retail
    "V8": "8ZBQD0m1R6EIchgSltwB",   # Narrative Sage
    "V9": "wDsJlOXPqcvIUKdLXjDs",   # Clinical B2B
    "V10": "VukfMVtvHInVUWoMNPiQ",  # Sci-Fi Technical
}
```

---

## PART 4: Voice Agent Platforms (Revenue-Generating Discovery)

These platforms use ElevenLabs under the hood. Every character generated through your shared voices earns your kickback. The goal: get your voice IDs into the hands of developers building phone bots, customer service agents, sales assistants, and enterprise voice systems.

### How the Revenue Flow Works

```
Developer on Vapi/Retell/Bland/Synthflow/Dialora
    → Adds your shared voice to their ElevenLabs account (via sharing link)
    → Builds voice agent using your voice_id
    → Agent handles calls (1,000s-1,000,000s of characters per day)
    → ElevenLabs tracks character usage
    → You earn $0.20 per 1,000 characters via Stripe Collab
```

A single busy call center agent using your voice can generate 50,000+ characters/day = $10/day from one integration.

---

### 4.1 Vapi (Developer-First Voice Agent Orchestration)

**URL:** https://vapi.ai
**Why it matters:** Vapi is the most popular developer-first voice agent platform. Developers paste their ElevenLabs API key, and all shared voices in their account are immediately available. Vapi handles telephony (inbound/outbound calls), WebSocket streaming, and tool calling.

**How developers discover your voices:**
1. Developer signs up for ElevenLabs (your affiliate link earns 22% commission)
2. They click your PVC sharing link → voice auto-adds to their account
3. They connect ElevenLabs API key to Vapi → your voices appear in their voice picker
4. They select your voice for their agent → every call generates character revenue for you

**Ready-to-paste Vapi assistant config using PHANTOM VOICES:**

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

**Voice recommendations for Vapi use cases:**

| Vapi Use Case | Recommended Voice | Voice ID |
|---------------|-------------------|----------|
| Customer support hotline | V9 Clinical B2B | `wDsJlOXPqcvIUKdLXjDs` |
| Sales outbound dialer | V7 Youthful Retail | `DfE5EkknFF950NR6OMui` |
| Medical appointment booking | V8 Narrative Sage | `8ZBQD0m1R6EIchgSltwB` |
| Legal intake calls | V3 Authoritative Baritone | `n32p8A7EZ9CiVeRYpBY9` |
| Tech support agent | V10 Sci-Fi Technical | `VukfMVtvHInVUWoMNPiQ` |
| E-learning phone tutor | V4 Conversational E-Learning | `kVBPcEMsUF1nsAO1oNWw` |
| Multilingual IVR | V2 Premium Multilingual | `tlETan7Okc4pzjD0z62P` |

**Outreach targets:**
- Vapi Discord community (thousands of active builders)
- Vapi documentation "Custom Voices" section — submit a community guide
- r/vapi subreddit
- Vapi templates marketplace — create a template using your voice

---

### 4.2 Retell AI (Enterprise Phone AI — Healthcare, Call Centers)

**URL:** https://retellai.com
**Why it matters:** Retell AI is HIPAA/SOC2/GDPR compliant. Healthcare clinics, law firms, and enterprise call centers use it. These are high-volume, long-call deployments = massive character usage.

**How developers discover your voices:**
1. In the Retell dashboard, developers click the Voice field on their agent
2. They can search for ElevenLabs voices by **name** or **Voice ID**
3. They paste your Voice ID directly → it imports automatically
4. Alternatively, they add your voice to their ElevenLabs account first (via sharing link), then it appears in Retell's voice picker

**Ready-to-paste Retell agent config:**

```json
{
  "voice_id": "wDsJlOXPqcvIUKdLXjDs",
  "voice_provider": "elevenlabs",
  "voice_model": "eleven_flash_v2_5",
  "voice_temperature": 0.5
}
```

**Voice recommendations for Retell use cases:**

| Retell Use Case | Recommended Voice | Voice ID |
|-----------------|-------------------|----------|
| Patient appointment scheduling | V8 Narrative Sage | `8ZBQD0m1R6EIchgSltwB` |
| Legal client intake | V9 Clinical B2B | `wDsJlOXPqcvIUKdLXjDs` |
| Insurance claims processing | V3 Authoritative Baritone | `n32p8A7EZ9CiVeRYpBY9` |
| HR onboarding calls | V4 Conversational E-Learning | `kVBPcEMsUF1nsAO1oNWw` |
| Financial advisory | V2 Premium Multilingual | `tlETan7Okc4pzjD0z62P` |

**Outreach targets:**
- Retell AI community Slack/Discord
- Healthcare AI developer forums
- HIPAA-compliant voice AI comparison articles (pitch your voices as pre-verified options)

---

### 4.3 Bland AI (Enterprise Scale — 1M+ Concurrent Calls)

**URL:** https://bland.ai
**Why it matters:** Bland AI handles massive scale. A single enterprise client on Bland could generate millions of characters per day across their call fleet. This is the highest revenue potential per integration.

**How developers discover your voices:**
1. In the Bland AI API, developers specify `"voice": "elevenlabs"` and paste your `voice_id`
2. Bland connects to ElevenLabs to generate the speech
3. No additional setup needed — just the voice ID

**Ready-to-paste Bland API call config:**

```json
{
  "phone_number": "+1234567890",
  "task": "You are a professional customer support agent...",
  "voice": "elevenlabs",
  "voice_id": "wDsJlOXPqcvIUKdLXjDs",
  "voice_settings": {
    "stability": 0.5,
    "similarity_boost": 0.75
  },
  "model": "enhanced",
  "language": "en",
  "max_duration": 300
}
```

**Volume estimation:**
- Average phone call = 2-5 minutes = 1,500-3,750 characters
- Enterprise deployment with 1,000 calls/day = 1.5M-3.75M characters/day
- Your revenue at $0.20/1k chars = $300-$750/day from ONE Bland deployment

**Outreach targets:**
- Bland AI enterprise partnership programme
- LinkedIn — target CTOs/CIOs who post about voice AI automation
- Enterprise AI procurement forums

---

### 4.4 Synthflow (No-Code Voice Agent Builder)

**URL:** https://synthflow.ai
**Why it matters:** Synthflow is aimed at sales teams and agencies who don't code. They browse voice libraries visually. Making your voice easy to find and paste is the entire game.

**How developers discover your voices:**
1. In the Synthflow dashboard, under Voice Configuration, they click "Import from third-party provider"
2. They paste your ElevenLabs Voice ID
3. Preview plays automatically
4. They assign it to their agent

**Voice recommendations for Synthflow use cases:**

| Synthflow Use Case | Recommended Voice | Voice ID |
|--------------------|-------------------|----------|
| Sales follow-up calls | V7 Youthful Retail | `DfE5EkknFF950NR6OMui` |
| Lead qualification | V5 Energetic Multi-Sector | `chcMmmtY1cmQh2ye1oXi` |
| Real estate showing booking | V4 Conversational E-Learning | `kVBPcEMsUF1nsAO1oNWw` |
| Restaurant reservation | V6 Urban Truth-Teller | `U1Vk2oyatMdYs096Ety7` |

**Outreach targets:**
- Synthflow community forums
- No-code AI automation YouTube channels (offer your voices for demo videos)
- AI agency Facebook groups

---

### 4.5 Dialora (No-Code, Sub-400ms Latency)

**URL:** https://dialora.ai
**Why it matters:** Dialora has native ElevenLabs and OpenAI integration with ultra-low latency. Aimed at SMBs and agencies. Same discovery model — they paste your Voice ID.

**Outreach targets:**
- Dialora community forums
- SMB automation communities
- AI agency directories

---

### Discovery Strategy: How to Get Found

Your voices need to be in front of developers at the exact moment they're choosing a voice for their agent. Here's the multi-channel approach:

#### Step 1: Maximize ElevenLabs Voice Library Visibility
- Ensure all 10 PVCs are published in the Voice Library with "Shared" and "Discoverable" toggled ON
- Apply for the **HQ badge** on each voice (boosts search ranking)
- Use rich, keyword-packed descriptions mentioning specific use cases: "customer support", "sales agent", "medical", "legal", "IVR"
- Add preview clips that demonstrate the voice in a phone agent scenario (not just reading text — simulate a call greeting)

#### Step 2: Community Seeding
Post in these specific communities with ready-to-paste configs:

| Community | Format | Link |
|-----------|--------|------|
| Vapi Discord | "Free PVC voices for your agents" + config snippets | discord.gg/vapi |
| r/artificial | "10 free professional voices for AI agents" | reddit.com/r/artificial |
| r/ChatGPT | "Custom voices for voice agents" | reddit.com/r/ChatGPT |
| Hacker News (Show HN) | "PHANTOM VOICES — 10 free PVC voices for AI builders" | news.ycombinator.com |
| Product Hunt | Launch PHANTOM VOICES as a free resource | producthunt.com |
| Dev.to | Tutorial: "How to add professional voices to your Vapi/Retell agent" | dev.to |
| Indie Hackers | "I built a free voice API for AI agent builders" | indiehackers.com |
| AI Twitter/X | Thread: "10 free professional voice clones for your AI agents" | x.com |

#### Step 3: Content Marketing
Create these specific pieces of content:

1. **"How to Build a Professional-Sounding Vapi Phone Agent in 5 Minutes"** — tutorial using your Voice ID
2. **"The Best ElevenLabs Voices for Customer Support Agents"** — listicle featuring your voices
3. **"Free vs Paid Voices for AI Call Centers: Why Professional Clones Win"** — positions your PVCs
4. **"Building a Multilingual Phone Bot with Retell AI + PHANTOM VOICES"** — tutorial
5. **YouTube video**: Screen recording of setting up a Vapi agent with your voice, start to finish

#### Step 4: Direct Developer Outreach
- Search GitHub for repos that use `elevenlabs` + `vapi` or `retell` — open issues offering your voice IDs as free alternatives
- Search npm for packages that integrate ElevenLabs — submit PRs adding your voices as examples
- Search Vapi/Retell documentation for "custom voice" guides — suggest your voices in feedback

#### Step 5: Create a "Voice Agent Starter Kit"
A single page on your PHANTOM VOICES portfolio with:
- All 10 voice IDs in copy-paste format
- Platform-specific config snippets (Vapi, Retell, Bland, Synthflow, Dialora)
- Audio previews of each voice in a phone agent scenario
- One-click sharing links for each voice
- Affiliate signup link embedded throughout

---

---

## PART 5: AI Assistant Integrations (Claude MCP, OpenAI GPTs)

### 5.1 Claude Desktop — PHANTOM VOICES MCP Server (Custom)

**What it is:** A custom MCP server (`phantom-voices-mcp`) that connects Claude Desktop directly to your PHANTOM VOICES API. Claude can recommend, search, and browse all 10 voice clones with platform-ready configs. Every API call hits your analytics, and every recommendation includes your affiliate link.

**Available at:** `distribution/mcp-server/` (ready to publish to npm as `phantom-voices-mcp`)

**4 Tools Exposed to Claude:**
- `recommend_voice` — AI-powered voice recommendation with platform configs for 29 platforms
- `list_voices` — Browse all 10 professional voice clones
- `get_voice` — Get detailed info for a specific voice (V1-V10) with code snippets
- `search_voices` — Search by keyword or filter by language

**2 Resources Exposed to Claude:**
- `phantom-voices://catalog` — Full voice catalog as JSON
- `phantom-voices://openapi` — OpenAPI 3.0 specification

**Setup for developers (paste into claude_desktop_config.json):**

```json
{
  "mcpServers": {
    "phantom-voices": {
      "command": "npx",
      "args": ["phantom-voices-mcp"]
    }
  }
}
```

**What developers can ask Claude once installed:**
- "Find me a voice for customer support phone calls on Vapi"
- "What voices do you have for audiobook narration?"
- "I need a clinical, neutral voice for a medical IVR on Retell AI"
- "Show me all available voices"
- "Get me the details for V9 including code snippets"

**Revenue path:** Claude calls your recommend endpoint → developer sees affiliate link → adds voice → uses characters → your Stripe Collab revenue.

**Publishing to npm:**
```bash
cd distribution/mcp-server
npm publish
```

### 5.1b Claude Desktop via ElevenLabs MCP Server (Official — For Speech Generation)

The official ElevenLabs MCP server (`elevenlabs-mcp`) handles actual text-to-speech generation. Developers can combine BOTH servers: use `phantom-voices-mcp` to find the right voice, then `elevenlabs-mcp` to generate speech with it.

```json
{
  "mcpServers": {
    "phantom-voices": {
      "command": "npx",
      "args": ["phantom-voices-mcp"]
    },
    "ElevenLabs": {
      "command": "uvx",
      "args": ["elevenlabs-mcp"],
      "env": {
        "ELEVENLABS_API_KEY": "<their-api-key>"
      }
    }
  }
}
```

Once both are installed, a developer can say: "Find me a voice for corporate training, then read this report aloud using it." Claude discovers the voice via your MCP server and generates speech via the ElevenLabs MCP server.

---

### 5.2 Custom GPTs (OpenAI GPT Actions)

**What it is:** Your PHANTOM VOICES API already has an OpenAPI spec at `/api/public/openapi.json`. This can be imported directly into the OpenAI GPT Builder to create a Custom GPT that helps developers discover and integrate your voices.

**How to create the GPT:**

1. Go to https://chatgpt.com/gpts/editor
2. Name: "PHANTOM VOICES — Professional Voice Clone Finder"
3. Description: "Find the perfect professional voice clone for your AI agent, app, or content project. 10 verified PVCs on ElevenLabs — zero cost, commercial rights cleared."
4. Instructions: "You help developers find the right professional voice clone for their project. Use the API to search voices by use case, language, or style. Always include the ElevenLabs voice_id and the sharing link. Recommend the signup link https://try.elevenlabs.io/xz94z17y73rm for new users."
5. Actions: Import your OpenAPI spec URL
6. Publish as "Everyone"

**Revenue path:** Users discover voices through ChatGPT → click sharing links → add voices to their ElevenLabs accounts → use them in their projects → character usage generates your kickback.

---

### Quick-Copy Voice ID Block (for posting in communities)

```
PHANTOM VOICES — 10 Free Professional Voice Clones for AI Agents
All verified PVCs on ElevenLabs. Zero handshake fee. Commercial rights cleared.

V1  vfaqCOvlrKi4Zp7C2IAm  — Gaming/Horror/Immersive
V2  tlETan7Okc4pzjD0z62P  — Multilingual/Corporate
V3  n32p8A7EZ9CiVeRYpBY9  — Documentary/Authority
V4  kVBPcEMsUF1nsAO1oNWw  — E-Learning/Training
V5  chcMmmtY1cmQh2ye1oXi  — Characters/Animation
V6  U1Vk2oyatMdYs096Ety7  — Podcasts/Urban
V7  DfE5EkknFF950NR6OMui  — Retail/Ads/Social
V8  8ZBQD0m1R6EIchgSltwB  — Audiobooks/Storytelling
V9  wDsJlOXPqcvIUKdLXjDs  — Medical/Legal/B2B
V10 VukfMVtvHInVUWoMNPiQ  — Sci-Fi/Tech/AI Assistant

Model: eleven_multilingual_v2
Signup: https://try.elevenlabs.io/xz94z17y73rm
API Docs: [YOUR_DEPLOYED_URL]/api/public/openapi.json
Portfolio: [YOUR_DEPLOYED_URL]/portfolio
```
