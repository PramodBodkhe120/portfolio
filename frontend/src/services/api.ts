const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

export type Project = {
  title: string;
  summary: string;
  impact: string;
  stack: string[];
  url: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export type AdminMessage = ContactPayload & {
  id: number;
  created_at: string;
  is_read: boolean;
};

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(detail || `Request failed with ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export const api = {
  sendMessage: (payload: ContactPayload) =>
    request<{ status: string }>("/api/contact", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  getAdminMessages: (token: string) =>
    request<AdminMessage[]>("/api/admin/messages", {
      headers: {
        "X-Admin-Token": token,
      },
    }),
  markMessageRead: (id: number, token: string) =>
    request<AdminMessage>(`/api/admin/messages/${id}/read`, {
      method: "PATCH",
      headers: {
        "X-Admin-Token": token,
      },
    }),
};

