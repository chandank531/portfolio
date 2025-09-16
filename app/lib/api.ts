export const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export async function postContact(data: { name: string; email: string; message: string }) {
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function getGlobalViews() {
  const res = await fetch("/api/views", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch global views");
  return res.json();
}

