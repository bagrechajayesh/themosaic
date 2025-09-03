// build-cms.js - Run this during your build process
const fs = require('fs').promises;
const path = require('path');

class StaticCMSBuilder {
    constructor(config) {
        this.githubRepo = config.githubRepo;
        this.githubToken = config.githubToken; // Optional: for higher rate limits
        this.outputDir = config.outputDir || './public/data';
        this.dataDir = config.dataDir || '_data';
        this.baseUrl = `https://api.github.com/repos/${this.githubRepo}/contents/${this.dataDir}`;
    }

    async fetchWithAuth(url) {
        const headers = {
            'User-Agent': 'Static-CMS-Builder',
            'Accept': 'application/vnd.github.v3+json'
        };

        if (this.githubToken) {
            headers.Authorization = `token ${this.githubToken}`;
        }

        const response = await fetch(url, { headers });
        
        if (!response.ok) {
            throw new Error(`GitHub API Error: ${response.status} ${response.statusText}`);
        }

        return response.json();
    }

    async ensureOutputDir() {
        try {
            await fs.mkdir(this.outputDir, { recursive: true });
        } catch (error) {
            console.log('Output directory exists or created');
        }
    }

    async fetchContentFromGitHub(contentType) {
        try {
            console.log(`📡 Fetching ${contentType} from GitHub...`);
            
            const files = await this.fetchWithAuth(`${this.baseUrl}/${contentType}`);
            const content = [];

            // Process JSON files
            for (const file of files) {
                if (file.name.endsWith('.json')) {
                    try {
                        const fileContent = await this.fetchWithAuth(file.download_url);
                        // GitHub API returns base64 encoded content for files > certain size
                        let jsonContent;
                        if (typeof fileContent === 'string') {
                            jsonContent = JSON.parse(atob(fileContent));
                        } else {
                            jsonContent = fileContent;
                        }
                        
                        content.push({
                            filename: file.name,
                            ...jsonContent
                        });
                    } catch (error) {
                        console.warn(`⚠️ Failed to process ${file.name}:`, error.message);
                    }
                }
            }

            console.log(`✅ Loaded ${content.length} ${contentType} items`);
            return content;

        } catch (error) {
            console.warn(`⚠️ Failed to fetch ${contentType}:`, error.message);
            return [];
        }
    }

    async fetchSingleFile(filename) {
        try {
            console.log(`📄 Fetching ${filename}...`);
            const fileContent = await this.fetchWithAuth(`${this.baseUrl}/${filename}`);
            
            let content;
            if (typeof fileContent === 'string') {
                content = JSON.parse(atob(fileContent));
            } else {
                content = fileContent;
            }
            
            return content;
        } catch (error) {
            console.warn(`⚠️ Failed to fetch ${filename}:`, error.message);
            return null;
        }
    }

    async buildStaticContent() {
        console.log('🚀 Building static CMS content...');
        
        await this.ensureOutputDir();

        // Fetch all content types
        const [artists, services, about, contact] = await Promise.all([
            this.fetchContentFromGitHub('artists'),
            this.fetchContentFromGitHub('services'),
            this.fetchSingleFile('about.json'),
            this.fetchSingleFile('contact.json')
        ]);

        // Create comprehensive content bundle
        const contentBundle = {
            artists: artists || [],
            services: services || [],
            about: about || {
                content: "At Mosaic, we believe that every artist is a unique piece of a larger creative puzzle...",
                lastUpdated: new Date().toISOString()
            },
            contact: contact || {
                email: "hello@mosaicrepresentation.com",
                phone: "+1 (555) 123-4567",
                location: "Los Angeles, CA\nNew York, NY"
            },
            metadata: {
                buildTime: new Date().toISOString(),
                version: Date.now(),
                totalItems: (artists?.length || 0) + (services?.length || 0)
            }
        };

        // Write individual files for granular loading
        await Promise.all([
            fs.writeFile(
                path.join(this.outputDir, 'content.json'), 
                JSON.stringify(contentBundle, null, 2)
            ),
            fs.writeFile(
                path.join(this.outputDir, 'artists.json'), 
                JSON.stringify(contentBundle.artists, null, 2)
            ),
            fs.writeFile(
                path.join(this.outputDir, 'services.json'), 
                JSON.stringify(contentBundle.services, null, 2)
            ),
            fs.writeFile(
                path.join(this.outputDir, 'metadata.json'), 
                JSON.stringify(contentBundle.metadata, null, 2)
            )
        ]);

        console.log('✨ Static content generation complete!');
        console.log(`📊 Generated: ${contentBundle.artists.length} artists, ${contentBundle.services.length} services`);
        
        return contentBundle;
    }

    // Generate fallback content in case GitHub is unavailable during build
    async generateFallbackContent() {
        const fallback = {
            artists: [
                {
                    title: "Sarah Johnson",
                    type: "Screenwriter",
                    description: "Award-winning writer specializing in psychological thrillers and character-driven dramas."
                },
                {
                    title: "Marcus Chen",
                    type: "Director", 
                    description: "Visionary director known for innovative storytelling techniques."
                },
                {
                    title: "Elena Rodriguez",
                    type: "Novelist",
                    description: "Bestselling author of contemporary fiction."
                }
            ],
            services: [
                {
                    title: "Career Development",
                    description: "Strategic career planning, project selection, and long-term brand development."
                },
                {
                    title: "Contract Negotiation", 
                    description: "Expert negotiation ensuring fair compensation and favorable terms."
                },
                {
                    title: "Content Development",
                    description: "Collaborative development of original content from concept through production."
                }
            ],
            about: {
                content: "At Mosaic, we believe that every artist is a unique piece of a larger creative puzzle. Founded with a passion for discovering and nurturing exceptional talent, we specialize in representing writers, directors, and visionary creators.",
                lastUpdated: new Date().toISOString()
            },
            contact: {
                email: "hello@mosaicrepresentation.com",
                phone: "+1 (555) 123-4567",
                location: "Los Angeles, CA\nNew York, NY"
            },
            metadata: {
                buildTime: new Date().toISOString(),
                version: Date.now(),
                fallback: true
            }
        };

        await fs.writeFile(
            path.join(this.outputDir, 'fallback.json'),
            JSON.stringify(fallback, null, 2)
        );

        return fallback;
    }
}

// Build script execution
async function build() {
    const config = {
        githubRepo: 'bagrechajayesh/themosaic', // Your repo
        githubToken: process.env.GITHUB_TOKEN, // Optional: set in environment
        outputDir: './public/data',
        dataDir: '_data'
    };

    const builder = new StaticCMSBuilder(config);
    
    try {
        const content = await builder.buildStaticContent();
        
        // Always generate fallback for emergency use
        await builder.generateFallbackContent();
        
        console.log('🎉 Build completed successfully!');
        process.exit(0);
        
    } catch (error) {
        console.error('❌ Build failed:', error);
        
        // Try to generate fallback content
        try {
            await builder.generateFallbackContent();
            console.log('💾 Fallback content generated');
        } catch (fallbackError) {
            console.error('❌ Even fallback generation failed:', fallbackError);
        }
        
        process.exit(1);
    }
}

// Export for use in other scripts
module.exports = { StaticCMSBuilder };

// Run if called directly
if (require.main === module) {
    build();
}