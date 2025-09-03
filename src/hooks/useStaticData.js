// src/hooks/useStaticData.js
import { useState, useEffect } from 'react';

// Static imports for build-time data
import artistsData from '../data/artists.json';
import servicesData from '../data/services.json';
import aboutData from '../data/about.json';
import contactData from '../data/contact.json';
import growthData from '../data/growth.json';

// Main hook for accessing static data
export function useStaticData(dataType) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      let result;
      switch (dataType) {
        case 'artists':
          result = artistsData;
          break;
        case 'services':
          result = servicesData;
          break;
        case 'about':
          result = aboutData;
          break;
        case 'contact':
          result = contactData;
          break;
        case 'growth':
          result = growthData;
          break;
        default:
          throw new Error(`Unknown data type: ${dataType}`);
      }
      
      setData(result);
      setError(null);
    } catch (err) {
      console.error(`Failed to load ${dataType} data:`, err);
      setError(err);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [dataType]);

  return { data, loading, error };
}

// Specific hooks for each data type
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

// Hook to get a specific artist by slug
export function useArtist(slug) {
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const foundArtist = artistsData.find(a => a.slug === slug);
      if (!foundArtist) {
        throw new Error(`Artist not found: ${slug}`);
      }
      setArtist(foundArtist);
      setError(null);
    } catch (err) {
      console.error(`Failed to load artist ${slug}:`, err);
      setError(err);
      setArtist(null);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  return { artist, loading, error };
}

// Utility functions for direct access (no hooks)
export const staticData = {
  artists: artistsData,
  services: servicesData,
  about: aboutData,
  contact: contactData,
  growth: growthData,
  
  // Helper methods
  getArtistBySlug(slug) {
    return this.artists.find(artist => artist.slug === slug);
  },
  
  getArtistsList() {
    return this.artists;
  },
  
  getFeaturedArtists() {
    return this.artists.filter(artist => artist.featured);
  },
  
  getServicesByVertical(vertical) {
    return this.services[vertical] || {};
  }
};