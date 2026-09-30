export type UserRole = "SUPER_ADMIN" | "ADMIN_ACARA" | "BENDAHARA";

export interface UserSession {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string | null;
}

export * from "./event";
export * from "./finance";
