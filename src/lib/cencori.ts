import { cencori as cencoriAdapter } from "cencori";

/**
 * Cencori model adapter for the Vercel AI SDK.
 *
 * Reads the Cencori API key from the CENCORI_API_KEY environment variable.
 * Used by the chat API route to stream secure, protected responses.
 */
export const cencori = cencoriAdapter;

