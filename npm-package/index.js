const VOICES = {
  V1: { id: "V1", name: "Spatial-Ready Immersive", voiceId: "vfaqCOvlrKi4Zp7C2IAm", archetype: "Monster/Demon Character Voice", languages: ["English", "Japanese", "Korean", "Spanish", "French", "German", "Hindi", "Arabic"] },
  V2: { id: "V2", name: "Premium Multilingual Briefing Specialist", voiceId: "tlETan7Okc4pzjD0z62P", archetype: "Corporate Briefing Voice", languages: ["English", "Japanese", "Korean", "Spanish", "French", "German", "Hindi", "Arabic", "Mandarin", "Urdu"] },
  V3: { id: "V3", name: "Authoritative Multilingual Baritone", voiceId: "n32p8A7EZ9CiVeRYpBY9", archetype: "Authoritative Baritone", languages: ["English", "Japanese", "Korean", "Spanish", "French", "German", "Hindi", "Arabic"] },
  V4: { id: "V4", name: "Conversational E-Learning Authentic", voiceId: "kVBPcEMsUF1nsAO1oNWw", archetype: "E-Learning Conversational Voice", languages: ["English", "Japanese", "Korean", "Spanish", "French", "German", "Hindi", "Arabic"] },
  V5: { id: "V5", name: "Energetic Multi-Sector Character & Narrator", voiceId: "chcMmmtY1cmQh2ye1oXi", archetype: "Energetic Character Voice", languages: ["English", "Japanese", "Korean", "Spanish", "French", "German", "Hindi", "Arabic"] },
  V6: { id: "V6", name: "Urban Truth-Teller", voiceId: "U1Vk2oyatMdYs096Ety7", archetype: "Urban Authentic Voice", languages: ["English", "Japanese", "Korean", "Spanish", "French", "German", "Hindi", "Arabic"] },
  V7: { id: "V7", name: "High-Energy Youthful Retail & Commercial Specialist", voiceId: "DfE5EkknFF950NR6OMui", archetype: "Youthful Commercial Voice", languages: ["English", "Japanese", "Korean", "Spanish", "French", "German", "Hindi", "Arabic", "Portuguese"] },
  V8: { id: "V8", name: "Narrative Sage", voiceId: "8ZBQD0m1R6EIchgSltwB", archetype: "Documentary Narrator", languages: ["English", "Japanese", "Korean", "Spanish", "French", "German", "Hindi", "Arabic"] },
  V9: { id: "V9", name: "Clinical B2B Unbiased Assistant", voiceId: "wDsJlOXPqcvIUKdLXjDs", archetype: "Clinical B2B Voice", languages: ["English", "Japanese", "Korean", "Spanish", "French", "German", "Hindi", "Arabic"] },
  V10: { id: "V10", name: "Advanced Sci-Fi Technical Companion", voiceId: "VukfMVtvHInVUWoMNPiQ", archetype: "Sci-Fi Technical Voice", languages: ["English", "Japanese", "Korean", "Spanish", "French", "German", "Hindi", "Arabic"] },
};

const SIGNUP_URL = "https://try.elevenlabs.io/xz94z17y73rm";
const API_BASE = "https://api.elevenlabs.io/v1";

function listVoices() {
  return Object.values(VOICES);
}

function getVoice(id) {
  const voice = VOICES[id.toUpperCase()];
  if (!voice) throw new Error(`Voice ${id} not found. Available: ${Object.keys(VOICES).join(", ")}`);
  return voice;
}

function searchVoices({ query, language } = {}) {
  let results = Object.values(VOICES);
  if (query) {
    const q = query.toLowerCase();
    results = results.filter(v =>
      v.name.toLowerCase().includes(q) ||
      v.archetype.toLowerCase().includes(q)
    );
  }
  if (language) {
    const lang = language.toLowerCase();
    results = results.filter(v =>
      v.languages.some(l => l.toLowerCase().includes(lang))
    );
  }
  return results;
}

async function speak(voiceId, text, apiKey, options = {}) {
  if (!apiKey) {
    throw new Error(
      `ElevenLabs API key required. Get one free: ${SIGNUP_URL}`
    );
  }

  const voice = typeof voiceId === "string" && VOICES[voiceId.toUpperCase()]
    ? VOICES[voiceId.toUpperCase()]
    : null;
  const resolvedId = voice ? voice.voiceId : voiceId;

  const response = await fetch(
    `${API_BASE}/text-to-speech/${resolvedId}`,
    {
      method: "POST",
      headers: {
        "xi-api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        model_id: options.model || "eleven_multilingual_v2",
        voice_settings: {
          stability: options.stability ?? 0.5,
          similarity_boost: options.similarityBoost ?? 0.75,
        },
      }),
    }
  );

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`ElevenLabs API error (${response.status}): ${err}`);
  }

  return response;
}

module.exports = {
  VOICES,
  SIGNUP_URL,
  listVoices,
  getVoice,
  searchVoices,
  speak,
};
