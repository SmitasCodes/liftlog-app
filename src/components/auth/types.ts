import type { ReactNode } from "react";

export interface LoginData {
  username: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export interface AuthLayouts {
  title: string;
  children: ReactNode;
}
