import axios from "axios";

export const getProject = async (projectId: number) => {
  const key = process.env.BEHANCE_API_KEY;
  const { data } = await axios(`https://www.behance.net/v2/projects/${projectId}?api_key=u_n_m_o_c_k_200`);
  return data;
};
