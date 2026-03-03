export interface Voice {
  id: string;
  name: string;
  voiceId: string;
  archetype: string;
  languages: string[];
}

export interface SpeakOptions {
  model?: string;
  stability?: number;
  similarityBoost?: number;
}

export interface SearchOptions {
  query?: string;
  language?: string;
}

export declare const VOICES: Record<string, Voice>;
export declare const SIGNUP_URL: string;

export declare function listVoices(): Voice[];
export declare function getVoice(id: string): Voice;
export declare function searchVoices(options?: SearchOptions): Voice[];
export declare function speak(
  voiceId: string,
  text: string,
  apiKey: string,
  options?: SpeakOptions
): Promise<Response>;
