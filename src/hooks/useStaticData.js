// src/hooks/useStaticData.js
import { useEffect, useMemo, useState } from 'react';

// Import JSON as raw strings (bypass vite:json)
import artistsRaw from '../data/artists.json?raw';
import servicesRaw from '../data/services.json?raw';
import aboutRaw from '../data/about.json?raw';
import contactRaw from '../data/contact.json?raw';
import growthRaw from '../data/growth.json?raw';

// ---- helpers ----
function safeParse(raw, fallback) {
  try {
    // Ensure it's a string (defensive)
    const text = typeof raw === 'string' ? raw : String(raw ?? '');
    return JSON.parse(text);
  } catch (e) {
    console.error('Failed to parse JSON:', e);
    return fallback;
  }
}

function slugify(s) {
  return String(s || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function lastPathSegment(p) {
  if (!p) return '';
  const parts = String(p).split('/');
  return parts.filter(Boolean).pop() || '';
}

// Parse once at module load
const ARTISTS = safeParse(artistsRaw, []);
const SERVICES = safeParse(servicesRaw, {});
const ABOUT = safeParse(aboutRaw, { company: {}, founder: {} });
const CONTACT = safeParse(contactRaw, {});
const GROWTH = safeParse(growthRaw, {});

// Map for quick access
const DATA_MAP = {
  artists: ARTISTS,
  services: SERVICES,
  about: ABOUT,
  contact: CONTACT,
  growth: GROWTH,
};

// ---- main generic hook ----
export function useStaticData(dataType) {
  // Data is already available synchronously; we still expose loading/error shape
  const [state, setState] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    try {
      if (!(dataType in DATA_MAP)) {
        throw new Error(`Unknown data type: ${dataType}`);
      }
      setState({ data: DATA_MAP[dataType], loading: false, error: null });
    } catch (err) {
      console.error(`Failed to load ${dataType} data:`, err);
      setState({ data: null, loading: false, error: err });
    }
  }, [dataType]);

  return state;
}

// ---- specific hooks ----
export function useArtists() {
  return useStaticData('artists');
}
export function useServices() {
  return useStaticData('services');
}
export function useAbout() {
  return useStaticData('about');
}
export function useContact() {
  return useStaticData('contact');
}
export function useGrowth() {
  return useStaticData('growth');
}

// ---- find one artist by slug/id/title/pageUrl ----
export function useArtist(slug) {
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Normalize query: accept raw slug, id, title, or last segment of pageUrl
  const wanted = useMemo(() => {
    const seg = lastPathSegment(slug);
    return slugify(seg || slug);
  }, [slug]);

  useEffect(() => {
    try {
      // match by id, slug, title (slugified), or pageUrl’s last segment
      const found = ARTISTS.find((a) => {
        const byId = slugify(a.id) === wanted; // your JSON uses "id"
        const bySlug = a.slug && slugify(a.slug) === wanted; // support if present
        const byTitle = a.title && slugify(a.title) === wanted;
        const byPage = a.pageUrl && slugify(lastPathSegment(a.pageUrl)) === wanted;
        return byId || bySlug || byTitle || byPage;
      });

      if (!found) {
        throw new Error(`Artist not found: ${slug}`);
      }

      setArtist(found);
      setError(null);
    } catch (err) {
      console.error(`Failed to load artist ${slug}:`, err);
      setArtist(null);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [wanted, slug]);

  return { artist, loading, error };
}

// ---- utility (non-hook) API ----
export const staticData = {
  artists: ARTISTS,
  services: SERVICES,
  about: ABOUT,
  contact: CONTACT,
  growth: GROWTH,

  getArtistBySlug(slug) {
    const key = slugify(lastPathSegment(slug) || slug);
    return ARTISTS.find((a) => {
      const byId = slugify(a.id) === key;
      const bySlug = a.slug && slugify(a.slug) === key;
      const byTitle = a.title && slugify(a.title) === key;
      const byPage = a.pageUrl && slugify(lastPathSegment(a.pageUrl)) === key;
      return byId || bySlug || byTitle || byPage;
    });
  },

  getArtistsList() {
    return ARTISTS;
  },

  getFeaturedArtists() {
    return ARTISTS.filter((a) => a.featured);
  },

  getServicesByVertical(vertical) {
    return SERVICES?.[vertical] || {};
  },
};
