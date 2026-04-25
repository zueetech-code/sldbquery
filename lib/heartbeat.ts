export type HeartbeatStatus = "online" | "offline"

const OFFLINE_THRESHOLD_MS = 20 * 60 * 1000 // 10 minutes

export function resolveHeartbeatStatus(
  lastSeen?: string | null
): HeartbeatStatus {
  if (!lastSeen) return "offline"

  const lastSeenTime = new Date(lastSeen).getTime()
  const now = Date.now()

  return now - lastSeenTime > OFFLINE_THRESHOLD_MS
    ? "offline"
    : "online"
}
