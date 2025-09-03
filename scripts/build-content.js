// scripts/build-content.js
import { Octokit } from '@octokit/rest';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN || process.env.VITE_GITHUB_TOKEN
});

const REPO_OWNER = 'bagrechajayesh';
const REPO_NAME = 'themosaic';
const DATA_FOLDER = '_data';
const OUTPUT_DIR = path.join(__dirname, '../src/data');

// Fallback content based on your existing data structure
const FALLBACK_CONTENT = {
  artists: [
    {
      slug: "arvind-sivakumaran",
      name: "Arvind Sivakumaran",
      role: "Filmmaker • Scholar • Writer",
      bio: "Arvind graduated in Film Production from Victoria Motion Picture School, B.C., Canada in 2002. He also holds a degree in English Literature from St. Xaviers College, Mumbai.",
      education: [
        {
          degree: "Film Production",
          institution: "Victoria Motion Picture School, B.C., Canada",
          year: "2002"
        },
        {
          degree: "English Literature", 
          institution: "St. Xavier's College, Mumbai"
        }
      ],
      expertise: ["Film Production", "Literary Analysis", "Screenwriting", "Cross-Cultural Storytelling"]
    },
    {
      slug: "vinay-choudary",
      name: "Vinay Choudary",
      role: "Writer • Director • Script Consultant",
      bio: "Vinay is a versatile Indian screenwriter and director with 1000+ TV episodes, feature films, and a Prime Video web series.",
      experience: [
        { type: "Television", description: "1000+ episodes across various genres" },
        { type: "Feature Films", description: "Multiple theatrical releases" },
        { type: "Digital Content", description: "Prime Video web series" }
      ],
      expertise: ["Screenwriting", "Direction", "Script Consultation", "Story Development"]
    },
    {
      slug: "steven-hanulik",
      name: "Steven Hanulik", 
      role: "Filmmaker • Copywriter",
      bio: "Steven has 20 years of experience in film, broadcast, and ad marketing. Co-creator of Canada's first 3D stop-motion short 'Skeleton Girl', and writer of 'Middle of Nowhere' and 'Lily'.",
      notableWorks: [
        { title: "Skeleton Girl", description: "Canada's first 3D stop-motion short film" },
        { title: "Middle of Nowhere", description: "Feature film screenplay" },
        { title: "Lily", description: "Original screenplay" }
      ],
      expertise: ["3D Stop-Motion", "Film Production", "Copywriting", "Ad Marketing"]
    }
  ],
  services: {
    entertainment: {
      title: "Entertainment Services",
      description: "Comprehensive creative services for writers, directors, and entertainment professionals",
      services: [
        "Script Consulting & Analysis",
        "Screenplay Writing & Development", 
        "Talent Representation & Management",
        "Project Development & Packaging"
      ]
    },
    growth: {
      title: "Growth Services", 
      description: "Strategic business development and scaling solutions",
      services: [
        "POSH Compliance Guidance",
        "Effective Communication Skills",
        "Creative Thinking Workshops",
        "Business Development Strategy"
      ]
    },
    legal: {
      title: "Legal Services",
      description: "Comprehensive legal support for creative industries",
      services: [
        "Entertainment Law & Contracts",
        "Business Contract Drafting",
        "Intellectual Property Protection", 
        "Corporate Law & Compliance"
      ]
    }
  },
  about: {
    company: {
      name: "The Mosaic",
      tagline: "Where Talent Meets Opportunity",
      description: "A collective of storytellers, artists, strategists, and legal experts working at the intersection of creativity and business."
    },
    founder: {
      name: "Jayesh Bagrecha",
      title: "Founder • Strategic Business Leader",
      bio: "With over a decade of experience in strategic business leadership, operations, and transformation, Jayesh has worked across diverse industries most notably in media, retail, healthcare, and business consulting.",
      image: "/founders/jayesh-bagrecha.jpg"
    }
  },
  contact: {
    email: "jayesh@themosaic.pro",
    phone: "+91 7276789555",
    whatsapp: "917276789555",
    location: "Mumbai, Maharashtra, India",
    social: {
      instagram: "",
      twitter: "",
      linkedin: ""
    }
  },
  growth: {
    programs: {
      posh: {
        title: "POSH Compliance Guidance",
        description: "End-to-end POSH programs: policy drafting, IC setup & certification, awareness sessions, and compliance audits.",
        partner: "Yellow Spark",
        modules: [
          "Understanding the POSH Act: scope, definitions, duties",
          "What constitutes sexual harassment: examples & grey areas", 
          "IC constitution, roles, powers, timelines and due process",
          "Receiving and recording complaints: intake to closure"
        ]
      },
      communication: {
        title: "Effective Communication Skills",
        description: "Public speaking, business writing, voice & accent, executive presence.",
        programs: [
          { title: "Public Speaking Intensive", description: "Structure, storytelling, delivery and stage confidence" },
          { title: "Business Communication", description: "Concise writing, stakeholder updates, meeting etiquette" },
          { title: "Voice & Accent", description: "Pronunciation, intonation, clarity and pace" },
          { title: "Executive Presence", description: "Gravitas, clarity, influence for managers and leaders" }
        ]
      },
      creative: {
        title: "Creative Thinking Workshop", 
        description: "Open minds, break ruts, and solve real problems with practical tools.",
        benefits: [
          { title: "Break mental ruts", description: "Reframe challenges and see patterns others miss" },
          { title: "Experiment safely", description: "Rapid ideation, prototyping and evidence‑based testing" },
          { title: "Solve real problems", description: "Facilitated sprints that land on actionable solutions" },
          { title: "Build innovation muscle", description: "Habits, rituals and cadences that sustain creativity" }
        ]
      }
    }
  }
};

async function fetchFileContent(filePath) {
  try {
    console.log(`Fetching: ${filePath}`);
    const response = await octokit.rest.repos.getContent({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path: filePath,
    });

    if (response.data.type === 'file') {
      const content = Buffer.from(response.data.content, 'base64').toString();
      return JSON.parse(content);
    }
    return null;
  } catch (error) {
    console.warn(`Failed to fetch ${filePath}:`, error.message);
    return null;
  }
}

async function fetchAllDataFiles() {
  try {
    console.log('Fetching data directory contents...');
    const response = await octokit.rest.repos.getContent({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path: DATA_FOLDER,
    });

    const dataFiles = response.data.filter(file => 
      file.type === 'file' && file.name.endsWith('.json')
    );

    console.log(`Found ${dataFiles.length} JSON files`);

    const content = {};
    
    for (const file of dataFiles) {
      const fileName = file.name.replace('.json', '');
      const fileContent = await fetchFileContent(`${DATA_FOLDER}/${file.name}`);
      
      if (fileContent) {
        content[fileName] = fileContent;
        console.log(`✓ Loaded ${fileName}`);
      } else {
        console.warn(`✗ Failed to load ${fileName}, using fallback`);
        content[fileName] = FALLBACK_CONTENT[fileName] || {};
      }
    }

    return content;
  } catch (error) {
    console.error('Failed to fetch data directory:', error.message);
    console.log('Using complete fallback content');
    return FALLBACK_CONTENT;
  }
}

async function generateStaticContent() {
  console.log('🚀 Starting static content generation...');
  
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  try {
    // Fetch all data from GitHub
    const data = await fetchAllDataFiles();
    
    // Merge with fallbacks to ensure complete data
    const mergedData = {
      ...FALLBACK_CONTENT,
      ...data,
      // Ensure artists array exists and includes your current artists
      artists: [
        ...(FALLBACK_CONTENT.artists || []),
        ...(data.artists || [])
      ].filter((artist, index, self) => 
        index === self.findIndex(a => a.slug === artist.slug)
      ),
      // Add generation metadata
      _meta: {
        generated: new Date().toISOString(),
        source: 'github',
        repository: `${REPO_OWNER}/${REPO_NAME}`,
        fallbackUsed: Object.keys(data).length === 0
      }
    };

    // Write individual files for easier imports
    await Promise.all([
      fs.promises.writeFile(
        path.join(OUTPUT_DIR, 'artists.json'),
        JSON.stringify(mergedData.artists, null, 2)
      ),
      fs.promises.writeFile(
        path.join(OUTPUT_DIR, 'services.json'),
        JSON.stringify(mergedData.services, null, 2)
      ),
      fs.promises.writeFile(
        path.join(OUTPUT_DIR, 'about.json'),
        JSON.stringify(mergedData.about, null, 2)
      ),
      fs.promises.writeFile(
        path.join(OUTPUT_DIR, 'contact.json'),
        JSON.stringify(mergedData.contact, null, 2)
      ),
      fs.promises.writeFile(
        path.join(OUTPUT_DIR, 'growth.json'),
        JSON.stringify(mergedData.growth, null, 2)
      ),
      fs.promises.writeFile(
        path.join(OUTPUT_DIR, 'all-data.json'),
        JSON.stringify(mergedData, null, 2)
      ),
      // Create index file for easy imports
      fs.promises.writeFile(
        path.join(OUTPUT_DIR, 'index.js'),
        `// Auto-generated static data exports
// Generated: ${mergedData._meta.generated}

export { default as artists } from './artists.json';
export { default as services } from './services.json'; 
export { default as about } from './about.json';
export { default as contact } from './contact.json';
export { default as growth } from './growth.json';
export { default as allData } from './all-data.json';

// Helper functions
export function getArtistBySlug(slug) {
  const artists = require('./artists.json');
  return artists.find(artist => artist.slug === slug);
}

export function getArtistsList() {
  return require('./artists.json');
}

export function getServicesList() {
  return require('./services.json');
}
`
      )
    ]);

    console.log('✅ Static content generation completed!');
    console.log(`📁 Files written to: ${OUTPUT_DIR}`);
    console.log(`📊 Generated data for ${mergedData.artists.length} artists`);
    console.log(`🔄 Fallback used: ${mergedData._meta.fallbackUsed ? 'Yes' : 'No'}`);
    
    return mergedData;
  } catch (error) {
    console.error('❌ Failed to generate static content:', error);
    
    // Write fallback content as emergency backup
    await fs.promises.writeFile(
      path.join(OUTPUT_DIR, 'emergency-fallback.json'),
      JSON.stringify(FALLBACK_CONTENT, null, 2)
    );
    
    throw error;
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateStaticContent()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}

export default generateStaticContent;