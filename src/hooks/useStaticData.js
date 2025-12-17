// src/hooks/useStaticData.js
import { useEffect, useState } from "react";

import servicesRaw from "../data/services.json?raw";
import aboutRaw from "../data/about.json?raw";
import contactRaw from "../data/contact.json?raw";
import growthRaw from "../data/growth.json?raw";

function safeParse(raw, fallback) {
  try {
    const text = typeof raw === "string" ? raw : String(raw ?? "");
    return JSON.parse(text);
  } catch (e) {
    console.error("Failed to parse JSON:", e);
    return fallback;
  }
}

// Parse once
const RAW_SERVICES = safeParse(servicesRaw, {});
const RAW_ABOUT = safeParse(aboutRaw, {});
const RAW_CONTACT = safeParse(contactRaw, {});
const RAW_GROWTH = safeParse(growthRaw, {});

const ABOUT =
  RAW_ABOUT && RAW_ABOUT.company
    ? RAW_ABOUT
    : {
        company: {
          name: "The Mosaic",
          tagline: "Growth and Legal",
          description:
            RAW_ABOUT?.content ||
            "The Mosaic supports growth decisions and RERA-focused legal work with practical, execution-led deliverables.",
          location: "Mumbai, Maharashtra, India",
        },
        founder: {
          name: "Jayesh Bagrecha",
          title: "Founder",
          image: "/founders/jayesh-bagrecha.jpg",
          bio: "",
          additionalBio: "",
        },
      };

const SERVICES = RAW_SERVICES;
const CONTACT = RAW_CONTACT;
const GROWTH = RAW_GROWTH;

const DATA_MAP = {
  services: SERVICES,
  about: ABOUT,
  contact: CONTACT,
  growth: GROWTH,
};

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

export const useServices = () => useStaticData("services");
export const useAbout = () => useStaticData("about");
export const useContact = () => useStaticData("contact");
export const useGrowth = () => useStaticData("growth");

// Optional convenience export (keeps existing pattern stable)
export const staticData = {
  services: SERVICES,
  about: ABOUT,
  contact: CONTACT,
  growth: GROWTH,
  getServicesByVertical(vertical) {
    return SERVICES?.[vertical] || {};
  },
};
