// Lightweight client-side anti-spam helpers for public forms.

export const HONEYPOT_FIELD = "company_website";

/** Hidden field must stay empty; bots that fill every input get blocked. */
export function isHoneypotTripped(data: FormData) {
  return String(data.get(HONEYPOT_FIELD) ?? "").trim() !== "";
}

/** Forms submitted faster than a human could type are almost always bots. */
export const MIN_FILL_MS = 3000;

export function isTooFast(startedAt: number, min = MIN_FILL_MS) {
  return Date.now() - startedAt < min;
}

/** Simple per-browser rate limit: N submissions per rolling window. */
export function checkRateLimit(
  key: string,
  { max = 3, windowMs = 10 * 60 * 1000 }: { max?: number; windowMs?: number } = {},
): { allowed: boolean; retryAfterMs: number } {
  if (typeof window === "undefined") return { allowed: true, retryAfterMs: 0 };
  const storageKey = `rl:${key}`;
  const now = Date.now();
  let stamps: number[] = [];
  try {
    stamps = (JSON.parse(window.localStorage.getItem(storageKey) ?? "[]") as number[]).filter(
      (t) => typeof t === "number" && now - t < windowMs,
    );
  } catch {
    stamps = [];
  }
  if (stamps.length >= max) {
    const oldest = Math.min(...stamps);
    return { allowed: false, retryAfterMs: windowMs - (now - oldest) };
  }
  stamps.push(now);
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(stamps));
  } catch {
    /* storage unavailable — fail open */
  }
  return { allowed: true, retryAfterMs: 0 };
}

export function formatWait(ms: number) {
  const minutes = Math.ceil(ms / 60000);
  return minutes <= 1 ? "a minute" : `${minutes} minutes`;
}
