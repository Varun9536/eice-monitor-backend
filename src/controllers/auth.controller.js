import { fetchRequestLogin } from "../services/fetch.service.js";
import { sessionStore } from "../store/tokenStore.js";


export async function login(req, res) {
  const { username, password } = req.body;
  
  const data = await fetchRequestLogin({
    jsonrpc: "2.0",
    method: "user.login",
    params: { username, password },
    id: 1,
  });

 

  if (data.error) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  sessionStore.token = data.result;
  res.status(200).json({ message: "Login successful" , result : "successful" });
}

export function logout(req, res) {
  sessionStore.token = null;
  res.json({ message: "Logged out" });
}
