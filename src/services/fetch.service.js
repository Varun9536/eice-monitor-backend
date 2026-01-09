import fetch from "node-fetch";

import { sessionStore } from "../store/tokenStore.js";
import { serverURL } from "../config/config.js";


export async function fetchRequest(body) {
    console.log(serverURL)
  const res = await fetch( serverURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" , "Authorization": `Bearer ${sessionStore.token}`  },
    body: JSON.stringify(body),
  });

  return res.json();
}


export async function fetchRequestLogin(body) {
    console.log(serverURL)
  const res = await fetch( serverURL, {
    method: "POST",
    headers: { "Content-Type": "application/json"  },
    body: JSON.stringify(body),
  });

  return res.json();
}

