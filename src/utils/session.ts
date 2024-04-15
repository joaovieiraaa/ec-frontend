import { randomString } from "./helpers";

export function generateToken() {
  const session = localStorage;
  if (!session._token) session.setItem("_token", randomString(32));

  return session.getItem("_token");
}
