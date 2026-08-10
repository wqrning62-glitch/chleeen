import { env } from "cloudflare:workers";

export function isAdminEmail(email: string) {
  const allowed = (env.ADMIN_EMAILS || "")
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);

  return allowed.includes(email.trim().toLowerCase());
}
