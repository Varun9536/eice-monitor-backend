import { sessionStore } from "../store/tokenStore.js";


export function requireLogin(req, res, next) {
  if (!sessionStore.token) {
    return res.status(401).json({ message: "NOT_LOGGED_IN" });
  }
  next();
}
