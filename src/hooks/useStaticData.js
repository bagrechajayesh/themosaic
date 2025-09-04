// src/hooks/useStaticData.js
import { useEffect, useMemo, useState } from 'react';

// Import JSON as raw strings (bypass vite:json)
import artistsRaw from '../data/artists.json?raw';
import servicesRaw from '../data/services.json?raw';
import aboutRaw   from '../data/about.json?raw';
import contactRaw from '../data/contact.json?raw';
import growthRaw  from '../data/growth.json?raw';

// ---- helpers ----
function safeParse(raw, fallback) {
  try {
    const text = typeof raw === 'string' ? raw : String(raw ?? '');
    return JSON.parse(text);
  } catch (e) {
    console.error('Failed to parse JSON:', e);
    return fallback;
  }
}
const slugify = (s) =>
  String(s || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
const lastSeg = (p) => (p ? String(p).split('/').filter(Boolean).pop() : '');

// ---- parse & normalize once ----
const RAW_ARTISTS = safeParse(artistsRaw, []);
const RAW_SERVICES = safeParse(servicesRaw, {});
const RAW_ABOUT = safeParse(aboutRaw, {});
const RAW_CONTACT = safeParse(contactRaw, {});
const RAW_GROWTH = safeParse(growthRaw, {});

// Normalize artists to have: slug, name, bio, role, image
const ARTISTS = RAW_ARTISTS.map((a) => {
  const slug =
    a.slug ??
    a.id ??
    slugify(lastSeg(a.pageUrl)) ??
    slugify(a.title) ??
    slugify(a.name);
  return {
    ...a,
    slug,
    name: a.name ?? a.title ?? a.id ?? slug,
    bio: a.bio ?? a.description ?? '',
    role: a.role ?? '',
    image: a.image ?? `/artists/${slug}.jpg`, // your components also fallback to .png at runtime
  };
});

// Normalize about: if only {content}, fold into the expected company structure
const ABOUT =
  RAW_ABOUT && RAW_ABOUT.company
    ? RAW_ABOUT
    : {
        company: {
          name: 'The Mosaic',
          tagline: 'Where Talent Meets Opportunity',
          description: RAW_ABOUT?.content || 'The Mosaic operates at the intersection of creativity and business.',
          location: 'Mumbai, Maharashtra, India',
        },
        founder: {
          name: 'Jayesh Bagrecha',
          title: 'Founder • Strategic Business Leader',
          image: '/founders/jayesh-bagrecha.jpg',
          bio: '',
          additionalBio: '',
        },
      };

const SERVICES = RAW_SERVICES;
const CONTACT = RAW_CONTACT;
const GROWTH = RAW_GROWTH;

const DATA_MAP = { artists: ARTISTS, services: SERVICES, about: ABOUT, contact: CONTACT, growth: GROWTH };

// ---- generic hook ----
export function useStaticData(dataType) {
  const [state, setState] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    try {
      if (!(dataType in DATA_MAP)) throw new Error(`Unknown data type: ${dataType}`);
      setState({ data: DATA_MAP[dataType], loading: false, error: null });
    } catch (err) {
      console.error(`Failed to load ${dataType} data:`, err);
      setState({ data: null, loading: false, error: err });
    }
  }, [dataType]);

  return state;
}

// ---- specific hooks ----
export const useArtists = () => useStaticData('artists');
export const useServices = () => useStaticData('services');
export const useAbout = () => useStaticData('about');
export const useContact = () => useStaticData('contact');
export const useGrowth = () => useStaticData('growth');

// ---- find one artist by slug/id/title/pageUrl ----
export function useArtist(slug) {
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const wanted = useMemo(() => slugify(lastSeg(slug) || slug), [slug]);

  useEffect(() => {
    try {
      const found = ARTISTS.find((a) => {
        const keyId = slugify(a.id);
        const keySlug = slugify(a.slug);
        const keyTitle = slugify(a.title || a.name);
        const keyPage = slugify(lastSeg(a.pageUrl));
        return [keyId, keySlug, keyTitle, keyPage].includes(wanted);
      });
      if (!found) throw new Error(`Artist not found: ${slug}`);
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

// ---- utility API ----
export const staticData = {
  artists: ARTISTS,
  services: SERVICES,
  about: ABOUT,
  contact: CONTACT,
  growth: GROWTH,
  getArtistBySlug(slug) {
    const key = slugify(lastSeg(slug) || slug);
    return ARTISTS.find((a) =>
      [a.id, a.slug, a.title, a.name, lastSeg(a.pageUrl)].some((v) => slugify(v) === key)
    );
  },
  getArtistsList() { return ARTISTS; },
  getFeaturedArtists() { return ARTISTS.filter((a) => a.featured); },
  getServicesByVertical(vertical) { return SERVICES?.[vertical] || {}; },
};
