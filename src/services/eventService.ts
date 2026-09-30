import { ChurchEvent } from "@/types";

export const MOCK_EVENTS: ChurchEvent[] = [
  {
    id: "evt-1",
    title: "Ibadah Raya Minggu (KU 1, KU 2, KU 3)",
    slug: "ibadah-raya-minggu",
    description: "Ibadah mingguan tatap muka dan live streaming dengan pujian penyembahan serta khotbah berseri firman Tuhan.",
    dateStart: new Date(Date.now() + 86400000 * 2).toISOString(),
    location: "Grand Lotus Ballroom, Pakuwon Mall Lt. 4, Surabaya",
    campus: "Surabaya Main Campus",
    category: "Ibadah Raya",
    bannerUrl: "/images/asset-church.jpg",
    status: "PUBLISHED",
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "evt-2",
    title: "Army of God (AOG) Youth Service",
    slug: "army-of-god-youth-service",
    description: "Komunitas generasi muda, pelajar dan mahasiswa. Menyalakan api kebangunan rohani anak muda.",
    dateStart: new Date(Date.now() + 86400000 * 1).toISOString(),
    location: "Main Sanctuary Pakuwon & Regional Youth Center",
    campus: "Surabaya & Global",
    category: "Youth & Teens",
    bannerUrl: "/images/beranda.jpg",
    status: "PUBLISHED",
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "evt-3",
    title: "Doa Fajar Menara Doa Syafaat",
    slug: "doa-fajar-syafaat",
    description: "Doa fajar serentak menopang kegerakan misi, pemulihan keluarga, dan doa syafaat bagi bangsa-bangsa.",
    dateStart: new Date(Date.now() + 86400000 * 3).toISOString(),
    location: "Chapel Prayer Tower, Surabaya & Zoom Live",
    campus: "Surabaya Main Campus",
    category: "Doa & Puasa",
    bannerUrl: "/images/ibadah.jpg",
    status: "PUBLISHED",
    featured: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "evt-4",
    title: "EagleKidz Children Ministry Festival",
    slug: "eaglekidz-children-ministry",
    description: "Ibadah anak interaktif dengan kelas balita, kelas pratama, dan kegiatan kreatif iman anak.",
    dateStart: new Date(Date.now() + 86400000 * 2).toISOString(),
    location: "EagleKidz Hall, Pakuwon Mall Lt. 4",
    campus: "Surabaya Main Campus",
    category: "Anak & Balita",
    bannerUrl: "/images/pelayanan.jpg",
    status: "PUBLISHED",
    featured: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];

export async function getEvents(): Promise<ChurchEvent[]> {
  try {
    // If Prisma is connected, fetch from database; otherwise return mock
    return MOCK_EVENTS;
  } catch {
    return MOCK_EVENTS;
  }
}

export async function getFeaturedEvents(): Promise<ChurchEvent[]> {
  const events = await getEvents();
  return events.filter(e => e.featured);
}
