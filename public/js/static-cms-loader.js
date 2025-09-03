// static-cms-loader.js - Client-side loader for pre-built content
class StaticContentLoader {
    constructor(options = {}) {
        this.dataPath = options.dataPath || '/data';
        this.fallbackEnabled = options.fallbackEnabled !== false;
        this.cache = new Map();
        this.loadingPromises = new Map();
    }

    // Load content with caching and fallback
    async loadContent(contentType = 'content') {
        // Return cached content if available
        if (this.cache.has(contentType)) {
            return this.cache.get(contentType);
        }

        // Return existing promise if already loading
        if (this.loadingPromises.has(contentType)) {
            return this.loadingPromises.get(contentType);
        }

        // Create new loading promise
        const loadingPromise = this._fetchContent(contentType);
        this.loadingPromises.set(contentType, loadingPromise);

        try {
            const content = await loadingPromise;
            this.cache.set(contentType, content);
            return content;
        } finally {
            this.loadingPromises.delete(contentType);
        }
    }

    async _fetchContent(contentType) {
        const urls = [
            `${this.dataPath}/${contentType}.json`,
            this.fallbackEnabled ? `${this.dataPath}/fallback.json` : null
        ].filter(Boolean);

        for (const url of urls) {
            try {
                console.log(`📡 Loading ${contentType} from ${url}`);
                
                const response = await fetch(url, {
                    cache: 'no-cache', // Always get fresh content
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }

                const data = await response.json();
                
                // If loading full content bundle, return specific section
                if (contentType !== 'content' && data[contentType]) {
                    return data[contentType];
                }
                
                return data;
                
            } catch (error) {
                console.warn(`⚠️ Failed to load ${url}:`, error.message);
                
                // If this was the fallback, we're out of options
                if (url.includes('fallback.json')) {
                    throw new Error('All content sources failed');
                }
            }
        }

        throw new Error(`No content source available for ${contentType}`);
    }

    // Render artists section
    async renderArtists(containerId = '.artists-grid') {
        try {
            const artists = await this.loadContent('artists');
            const container = document.querySelector(containerId);
            
            if (!container) {
                console.warn('Artists container not found');
                return;
            }

            if (!artists || artists.length === 0) {
                console.log('No artists data available');
                return;
            }

            // Clear existing content
            container.innerHTML = '';
            
            artists.forEach((artist, index) => {
                const artistCard = this.createArtistCard(artist, index);
                container.appendChild(artistCard);
            });

            console.log(`✅ Rendered ${artists.length} artists`);
            
        } catch (error) {
            console.error('Failed to render artists:', error);
            // Keep fallback HTML content
        }
    }

    createArtistCard(artist, index) {
        const card = document.createElement('div');
        card.className = 'artist-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <h3>${this.escapeHtml(artist.title || 'Artist')}</h3>
            <p class="artist-type">${this.escapeHtml(artist.type || 'Creative Professional')}</p>
            <p>${this.escapeHtml(artist.description || 'Talented professional in the creative industry.')}</p>
            ${artist.credits ? `<div class="artist-credits">${this.escapeHtml(artist.credits)}</div>` : ''}
        `;

        // Add hover effects
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });

        return card;
    }

    // Render services section
    async renderServices(containerId = '.services-grid') {
        try {
            const services = await this.loadContent('services');
            const container = document.querySelector(containerId);
            
            if (!container) {
                console.warn('Services container not found');
                return;
            }

            if (!services || services.length === 0) {
                console.log('No services data available');
                return;
            }

            container.innerHTML = '';
            
            services.forEach((service, index) => {
                const serviceCard = this.createServiceCard(service, index);
                container.appendChild(serviceCard);
            });

            console.log(`✅ Rendered ${services.length} services`);
            
        } catch (error) {
            console.error('Failed to render services:', error);
        }
    }

    createServiceCard(service, index) {
        const card = document.createElement('div');
        card.className = 'service-item';
        card.style.animationDelay = `${index * 0.15}s`;
        
        card.innerHTML = `
            <h3>${this.escapeHtml(service.title || 'Service')}</h3>
            <p>${this.escapeHtml(service.description || 'Professional service offering.')}</p>
        `;

        return card;
    }

    // Update about section
    async renderAbout(containerId = '.about-text') {
        try {
            const about = await this.loadContent('about');
            const container = document.querySelector(containerId);
            
            if (!container || !about) {
                console.log('About section not updated');
                return;
            }

            if (about.content) {
                container.innerHTML = this.escapeHtml(about.content);
                console.log('✅ About section updated');
            }
            
        } catch (error) {
            console.error('Failed to render about:', error);
        }
    }

    // Update contact information
    async renderContact(containerId = '.contact-info') {
        try {
            const contact = await this.loadContent('contact');
            const container = document.querySelector(containerId);
            
            if (!container || !contact) {
                console.log('Contact section not updated');
                return;
            }

            container.innerHTML = `
                <div class="contact-item">
                    <strong>Email:</strong> ${this.escapeHtml(contact.email || 'hello@mosaicrepresentation.com')}
                </div>
                <div class="contact-item">
                    <strong>Phone:</strong> ${this.escapeHtml(contact.phone || '+1 (555) 123-4567')}
                </div>
                <div class="contact-item">
                    <strong>Location:</strong> <br>${this.escapeHtml(contact.location || 'Los Angeles, CA\nNew York, NY').replace(/\n/g, '<br>')}
                </div>
            `;
            
            console.log('✅ Contact section updated');
            
        } catch (error) {
            console.error('Failed to render contact:', error);
        }
    }

    // Render all sections
    async renderAll() {
        console.log('🎨 Rendering all CMS content...');
        
        // Show loading state
        this.showLoadingState();

        try {
            // Load all sections in parallel for better performance
            await Promise.allSettled([
                this.renderArtists(),
                this.renderServices(),
                this.renderAbout(),
                this.renderContact()
            ]);

            console.log('✨ All content rendered successfully');
            
        } catch (error) {
            console.error('Some content failed to render:', error);
        } finally {
            this.hideLoadingState();
        }
    }

    // Utility methods
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    showLoadingState() {
        document.body.classList.add('cms-loading');
    }

    hideLoadingState() {
        document.body.classList.remove('cms-loading');
    }

    // Get build metadata
    async getBuildInfo() {
        try {
            const metadata = await this.loadContent('metadata');
            return metadata;
        } catch (error) {
            return null;
        }
    }
}

// Initialize and auto-load when DOM is ready
document.addEventListener('DOMContentLoaded', async function() {
    console.log('🚀 Initializing Static CMS...');
    
    // Create global instance
    window.staticCMS = new StaticContentLoader({
        dataPath: '/data',
        fallbackEnabled: true
    });

    // Load content
    await window.staticCMS.renderAll();

    // Display build info in console
    const buildInfo = await window.staticCMS.getBuildInfo();
    if (buildInfo) {
        console.log('📝 Content built at:', buildInfo.buildTime);
        console.log('🔢 Content version:', buildInfo.version);
        if (buildInfo.fallback) {
            console.log('⚠️ Using fallback content');
        }
    }
});

// Add CSS for loading states and animations
const style = document.createElement('style');
style.textContent = `
    .cms-loading {
        cursor: wait;
    }
    
    .artist-card, .service-item {
        opacity: 0;
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .artist-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .artist-card:hover {
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }
    
    .artist-credits {
        font-size: 0.9em;
        color: #666;
        margin-top: 0.5em;
        font-style: italic;
    }
    
    .contact-item {
        margin-bottom: 1em;
        padding: 0.5em 0;
    }
    
    .contact-item strong {
        color: #333;
    }
`;
document.head.appendChild(style);

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { StaticContentLoader };
}