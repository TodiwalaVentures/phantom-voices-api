#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const API_BASE = process.env.PHANTOM_VOICES_API_URL || "https://auto-business-agent.replit.app";
const AFFILIATE_URL = "https://try.elevenlabs.io/xz94z17y73rm";
const FOOTER = `\n\nAll voices are FREE — zero handshake fee, commercial rights cleared.\nSign up for free ElevenLabs account: ${AFFILIATE_URL}\nBrowse portfolio: ${API_BASE}/portfolio`;

async function fetchJSON(path) {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) throw new Error(`API error ${res.status}: ${await res.text()}`);
  return res.json();
}

const VALID_IDS = ["V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10"];

const server = new Server(
  {
    name: "phantom-voices",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
      resources: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "recommend_voice",
      description:
        "Find the best professional AI voice clone for a specific use case. Returns voice recommendations with platform-ready configs for Vapi, Retell AI, Bland AI, Synthflow, Voiceflow, Twilio, LangChain, and 11 more platforms. All voices are FREE with zero handshake fee and commercial rights cleared. Each recommendation includes a sharing link to instantly add the voice to an ElevenLabs account.",
      inputSchema: {
        type: "object",
        properties: {
          use_case: {
            type: "string",
            description:
              "What the voice will be used for. Examples: 'customer support phone agent', 'audiobook narration', 'e-learning course', 'sales outbound calling', 'medical appointment booking', 'gaming NPC dialogue', 'podcast host', 'corporate training', 'documentary narration'",
          },
          platform: {
            type: "string",
            enum: [
              "vapi", "retell", "bland", "synthflow", "voiceflow",
              "langchain", "elevenlabs", "twilio", "playai", "botpress",
              "dify", "flowise", "n8n", "make", "zapier",
              "crewai", "autogen", "vercel",
            ],
            description:
              "Target platform — returns platform-specific configuration ready to paste. If omitted, returns configs for all 18 supported platforms.",
          },
          tone: {
            type: "string",
            description:
              "Desired voice tone. Examples: 'professional', 'friendly', 'authoritative', 'energetic', 'calm', 'immersive', 'clinical'",
          },
          language: {
            type: "string",
            description:
              "Target language for voice output. Supported: English, Japanese, Korean, Spanish, French, German, Hindi, Arabic, and more.",
          },
          limit: {
            type: "number",
            description: "Number of voice recommendations to return (1-10, default 3)",
          },
        },
      },
    },
    {
      name: "list_voices",
      description:
        "List all 10 PHANTOM VOICES professional AI voice clones with full metadata, keywords, language support, use cases, and integration code snippets (Python, JavaScript, cURL). All voices are free with commercial rights cleared.",
      inputSchema: {
        type: "object",
        properties: {},
      },
    },
    {
      name: "get_voice",
      description:
        "Get detailed information about a specific PHANTOM VOICES voice clone by ID (V1-V10). Returns metadata, keywords, languages, use cases, ElevenLabs voice ID, and ready-to-use code snippets.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "Voice ID: V1, V2, V3, V4, V5, V6, V7, V8, V9, or V10",
            enum: ["V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10"],
          },
        },
        required: ["id"],
      },
    },
    {
      name: "search_voices",
      description:
        "Search PHANTOM VOICES voice clones by keyword (e.g. 'gaming', 'corporate', 'medical') or filter by language (e.g. 'japanese', 'spanish'). Returns matching voices sorted by relevance.",
      inputSchema: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description:
              "Search keyword matching voice name, description, or keywords. Examples: 'gaming', 'documentary', 'customer support', 'horror', 'e-learning'",
          },
          language: {
            type: "string",
            description:
              "Filter by supported language. Examples: 'japanese', 'spanish', 'french', 'hindi', 'korean', 'arabic', 'german'",
          },
        },
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case "recommend_voice": {
        const params = new URLSearchParams();
        if (args?.use_case) params.set("use_case", args.use_case);
        if (args?.platform) params.set("platform", args.platform);
        if (args?.tone) params.set("tone", args.tone);
        if (args?.language) params.set("language", args.language);
        if (args?.limit) params.set("limit", String(args.limit));
        const data = await fetchJSON(`/api/public/recommend?${params.toString()}`);
        const summary = data.recommendations.map((r, i) => {
          let text = `${i + 1}. **${r.name}** (${r.id})\n`;
          text += `   Voice ID: ${r.voiceId}\n`;
          text += `   Confidence: ${r.confidence}\n`;
          text += `   Best for: ${r.useCases?.slice(0, 5).join(", ")}\n`;
          text += `   Languages: ${r.languages?.join(", ")}\n`;
          text += `   Add to your account (free): ${r.elevenlabsUrl}\n`;
          text += `   Sign up for ElevenLabs: ${AFFILIATE_URL}`;
          if (r.platformConfig) {
            text += `\n\n   Platform config:\n   \`\`\`json\n   ${JSON.stringify(r.platformConfig, null, 2).split("\n").join("\n   ")}\n   \`\`\``;
          }
          return text;
        });
        return {
          content: [
            {
              type: "text",
              text: `Found ${data.recommendations.length} voice recommendation(s):\n\n${summary.join("\n\n")}${FOOTER}`,
            },
          ],
        };
      }

      case "list_voices": {
        const voices = await fetchJSON("/api/public/voices");
        const summary = voices.map(
          (v) =>
            `• **${v.name}** (${v.id}) — ${v.archetype}\n  Voice ID: ${v.voiceId}\n  Languages: ${v.languages?.join(", ")}\n  Best for: ${v.useCases?.slice(0, 4).join(", ")}\n  Add voice: ${v.elevenlabsUrl}\n  Sign up: ${AFFILIATE_URL}`
        );
        return {
          content: [
            {
              type: "text",
              text: `PHANTOM VOICES — 10 Professional AI Voice Clones${FOOTER}\n\n${summary.join("\n\n")}`,
            },
          ],
        };
      }

      case "get_voice": {
        if (!args?.id || !VALID_IDS.includes(args.id.toUpperCase())) {
          return {
            content: [
              {
                type: "text",
                text: `Invalid voice ID "${args?.id || "(missing)"}". Valid IDs are: ${VALID_IDS.join(", ")}.\n\nUse list_voices to see all available voices, or recommend_voice to find the best match for your use case.${FOOTER}`,
              },
            ],
            isError: true,
          };
        }
        const voice = await fetchJSON(`/api/public/voices/${args.id.toUpperCase()}`);
        return {
          content: [
            {
              type: "text",
              text: `**${voice.name}** (${voice.id})\nArchetype: ${voice.archetype}\nVoice ID: ${voice.voiceId}\nLanguages: ${voice.languages?.join(", ")}\nUse cases: ${voice.useCases?.join(", ")}\nKeywords: ${voice.keywords?.slice(0, 15).join(", ")}\nCommercial rights: Cleared\nHandshake fee: ${voice.handshakeFee}\n\nAdd to your account (free): ${voice.elevenlabsUrl}\nSign up for ElevenLabs: ${AFFILIATE_URL}\n\nPython:\n\`\`\`python\n${voice.integrationSnippet?.python}\n\`\`\`\n\nJavaScript:\n\`\`\`javascript\n${voice.integrationSnippet?.javascript}\n\`\`\`\n\ncURL:\n\`\`\`bash\n${voice.integrationSnippet?.curl}\n\`\`\`${FOOTER}`,
            },
          ],
        };
      }

      case "search_voices": {
        const params = new URLSearchParams();
        if (args?.query) params.set("q", args.query);
        if (args?.language) params.set("language", args.language);
        const voices = await fetchJSON(`/api/public/search?${params.toString()}`);
        if (voices.length === 0) {
          return {
            content: [
              {
                type: "text",
                text: `No voices found matching your search. Try broader terms or use recommend_voice for AI-powered matching.${FOOTER}`,
              },
            ],
          };
        }
        const summary = voices.map(
          (v) =>
            `• **${v.name}** (${v.id}) — ${v.archetype}\n  Voice ID: ${v.voiceId}\n  Add voice: ${v.elevenlabsUrl}\n  Sign up: ${AFFILIATE_URL}`
        );
        return {
          content: [
            {
              type: "text",
              text: `Found ${voices.length} matching voice(s):\n\n${summary.join("\n\n")}${FOOTER}`,
            },
          ],
        };
      }

      default:
        return {
          content: [{ type: "text", text: `Unknown tool: ${name}` }],
          isError: true,
        };
    }
  } catch (error) {
    return {
      content: [
        {
          type: "text",
          text: `Error calling PHANTOM VOICES API: ${error.message}${FOOTER}`,
        },
      ],
      isError: true,
    };
  }
});

server.setRequestHandler(ListResourcesRequestSchema, async () => ({
  resources: [
    {
      uri: "phantom-voices://catalog",
      name: "PHANTOM VOICES — Voice Catalog",
      description: "All 10 professional AI voice clones with metadata and integration details",
      mimeType: "application/json",
    },
    {
      uri: "phantom-voices://openapi",
      name: "PHANTOM VOICES — OpenAPI Spec",
      description: "Full OpenAPI 3.0 specification for the voice catalog API",
      mimeType: "application/json",
    },
  ],
}));

server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const { uri } = request.params;

  try {
    if (uri === "phantom-voices://catalog") {
      const voices = await fetchJSON("/api/public/voices");
      return {
        contents: [
          {
            uri,
            mimeType: "application/json",
            text: JSON.stringify(voices, null, 2),
          },
        ],
      };
    }

    if (uri === "phantom-voices://openapi") {
      const spec = await fetchJSON("/api/public/openapi.json");
      return {
        contents: [
          {
            uri,
            mimeType: "application/json",
            text: JSON.stringify(spec, null, 2),
          },
        ],
      };
    }

    return {
      contents: [
        {
          uri,
          mimeType: "text/plain",
          text: `Unknown resource: ${uri}. Available resources: phantom-voices://catalog, phantom-voices://openapi`,
        },
      ],
    };
  } catch (error) {
    return {
      contents: [
        {
          uri,
          mimeType: "text/plain",
          text: `Error fetching resource: ${error.message}`,
        },
      ],
    };
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("PHANTOM VOICES MCP server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
