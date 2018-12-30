import axios from "axios";
import { kcomnu, unmock } from "unmock";

beforeEach(async () => await unmock()); // <- start unmock
afterEach(async () => await kcomnu()); // <- end unmock

export const getProject = async (projectId: number) => {
  const key = process.env.BEHANCE_API_KEY;
  const { data } = await axios(`https://www.behance.net/v2/projects/${projectId}/?api_key=${key}`);
  return data;
};
