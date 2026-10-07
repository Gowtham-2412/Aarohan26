/* Use the Drive artwork as the spine card texture instead of MP4 posters. */
(function installCardMediaSource() {
    const nativeFetch = window.fetch.bind(window);
    const projectsUrl = 'assets/data/projects.json';
    const driveUrl = 'assets/data/aarohandata.json';
    window.fetch = function cardMediaFetch(input, init) {
        const url = typeof input === 'string' ? input : input && input.url;
        if (!url || !url.endsWith(projectsUrl)) return nativeFetch(input, init);
        return nativeFetch(driveUrl, init).then(response => response.json()).then(driveCards => {
            // Aarohan is the sole source of card content. The engine expects a
            // CMS-shaped video object, so provide an image-backed compatibility
            // object without reintroducing any projects.json fields.
            const transformed = driveCards.sort((a, b) => {
                const left = Date.parse(a.completionDate || a.date || '') || 0;
                const right = Date.parse(b.completionDate || b.date || '') || 0;
                return left - right;
            }).map((card, index) => {
                const driveId = card.imageURL ? new URL(card.imageURL).searchParams.get('id') : null;
                // lh3 serves the file directly and sends permissive CORS headers;
                // Drive's thumbnail redirect often taints WebGL image textures.
                const imageURL = driveId
                    ? `https://lh3.googleusercontent.com/d/${driveId}=w1600&v=aarohan-2`
                    : 'assets/images/ar-logo.png';
                const category = String(card.type || 'event').toLowerCase();
                const meta = [card.date, card.time, card.venue].filter(Boolean).join(' • ');
                return {
                ...card,
                index,
                tags: category.toUpperCase(),
                imageURL,
                // The spine label uses subhead; keep the full description in
                // body for the detail view and show the timeline metadata here.
                subhead: meta,
                body: card.description,
                video: {
                    thumbnail: imageURL,
                    url: imageURL,
                    mimeType: 'image/jpeg'
                }
                };
            });
            // Keep the browser-side image alive while WebGL initializes. This
            // also retries transient Drive/CDN failures before the first draw.
            transformed.forEach(card => {
                if (!card.imageURL.startsWith('http')) return;
                const image = new Image();
                image.crossOrigin = 'anonymous';
                image.decoding = 'async';
                image.src = card.imageURL;
                Object.defineProperty(card, 'imageElement', { value: image, enumerable: false });
            });
            return new Response(JSON.stringify(transformed), { status: 200, headers: { 'Content-Type': 'application/json' } });
        });
    };
})();
