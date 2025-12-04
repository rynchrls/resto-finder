import dotenv from "dotenv";

dotenv.config({ path: '.env' });

export const PORT = (process.env.PORT || 5001) as number;
export const CODE = process.env.CODE as string;
export const FSQUARE_API_KEY = process.env.FSQUARE_API_KEY as string;
export const LLM_MODEL = process.env.LLM_MODEL as string;
export const FSQUARE_URL = process.env.FSQUARE_URL as string;
