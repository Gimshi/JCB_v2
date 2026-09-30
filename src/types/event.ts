export type EventStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";

export interface ChurchEvent {
  id: string;
  title: string;
  slug: string;
  description?: string | null;
  dateStart: string | Date;
  dateEnd?: string | Date | null;
  location: string;
  campus?: string | null;
  category?: string | null;
  bannerUrl?: string | null;
  status: EventStatus;
  featured?: boolean;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface CreateEventInput {
  title: string;
  description?: string;
  dateStart: string;
  dateEnd?: string;
  location: string;
  campus?: string;
  category?: string;
  bannerUrl?: string;
  status?: EventStatus;
  featured?: boolean;
}
