// fallback-content.js
const fallbackArtists = [
    {
        title: "Screenwriter",
        description: "Award-winning writer specializing in psychological thrillers and character-driven dramas. Recent credits include \"Midnight Confession\" and \"The Last Memory.\"",
        image: "https://via.placeholder.com/300x200?text=Screenwriter"
    },
    {
        title: "Director", 
        description: "Visionary director known for innovative storytelling techniques. His latest film \"Echoes of Tomorrow\" premiered at Sundance to critical acclaim.",
        image: "https://via.placeholder.com/300x200?text=Director"
    },
    {
        title: "Novelist",
        description: "Bestselling author of contemporary fiction. Her novel \"Fragments of Light\" spent 12 weeks on the New York Times bestseller list.",
        image: "https://via.placeholder.com/300x200?text=Novelist"
    },
    {
        title: "Playwright",
        description: "Tony-nominated playwright whose works explore themes of identity and belonging. Currently developing his first television series.",
        image: "https://via.placeholder.com/300x200?text=Playwright"
    }
];

const fallbackServices = [
    {
        title: "Career Management",
        description: "Strategic career planning, project selection, and long-term brand development tailored to each artist's unique vision."
    },
    {
        title: "Contract Negotiation",
        description: "Expert contract negotiation ensuring fair compensation and favorable terms for film, TV, publishing, and digital media projects."
    },
    {
        title: "Content Development",
        description: "Collaborative development of original content, from initial concept through production, connecting artists with the right partners."
    },
    {
        title: "Industry Connections",
        description: "Leveraging our extensive network of producers, publishers, and executives to create meaningful professional relationships."
    },
    {
        title: "Marketing & PR",
        description: "Strategic public relations and marketing support to build and maintain a strong professional presence in the industry."
    },
    {
        title: "Opportunity Identification",
        description: "Identifying and securing opportunities that align with artistic goals and career trajectory across multiple platforms."
    }
];

// Export for use in main script
window.fallbackContent = {
    artists: fallbackArtists,
    services: fallbackServices
};
