import { getProject } from "../src/";

import { kcomnu, unmock } from "unmock";

beforeEach(async () => await unmock()); // <- start unmock
afterEach(async () => await kcomnu()); // <- end unmock

test("get project", async () => {
  process.env.API_KEY = "u_n_m_o_c_k_200";
  const project = await getProject(123);
  expect(project.id).toBe(123);
});
