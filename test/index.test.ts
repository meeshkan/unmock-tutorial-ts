import { getProject } from "../src/";

import { unmock } from "unmock";

beforeEach(async () => await unmock({
  signature: "my-secret-signature",
})); // <- start unmock

test("get project", async () => {
  process.env.API_KEY = "u_n_m_o_c_k_200";
  const project = await getProject(28);
  expect(project.id).toBe(28);
});
