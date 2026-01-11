import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description?: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogUrl?: string;
    jsonLd?: object;
}

const SEO = ({
    title,
    description = "대한민국 대표 태양광 전문기업 썬그린에너지(SunGreen Energy). 전국 2,500건 이상의 시공 실적과 최고의 기술력으로 주택용, 상업용 태양광 및 RE100 솔루션을 제공합니다.",
    keywords = "썬그린에너지, 썬그린, SunGreen, 태양광 시공, 전국 태양광, RE100 컨설팅, 신재생에너지 No1, 박이순 대표",
    ogTitle,
    ogDescription,
    ogImage = "https://ssungreen.com/sungreen-logo.png",
    ogUrl = window.location.href,
    jsonLd,
}: SEOProps) => {
    useEffect(() => {
        // Update Title - Prioritize Brand Name if not already there
        const fullTitle = title.includes('썬그린') ? title : `${title} | 썬그린에너지`;
        document.title = fullTitle;

        // Update Meta Tags
        const updateMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
            let element = document.querySelector(`meta[${attr}="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attr, name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        updateMeta('description', description);
        updateMeta('keywords', keywords);
        updateMeta('og:title', ogTitle || fullTitle, 'property');
        updateMeta('og:description', ogDescription || description, 'property');
        updateMeta('og:image', ogImage, 'property');
        updateMeta('og:url', ogUrl, 'property');
        updateMeta('og:type', 'website', 'property');

        // Twitter Tags
        updateMeta('twitter:card', 'summary_large_image');
        updateMeta('twitter:title', ogTitle || fullTitle);
        updateMeta('twitter:description', ogDescription || description);
        updateMeta('twitter:image', ogImage);

        // Update Canonical Tag
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', ogUrl);

        // Update JSON-LD
        let script = document.querySelector('script[type="application/ld+json"]');
        if (jsonLd) {
            if (!script) {
                script = document.createElement('script');
                script.setAttribute('type', 'application/ld+json');
                document.head.appendChild(script);
            }
            script.textContent = JSON.stringify(jsonLd);
        } else if (script) {
            script.remove();
        }

    }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, jsonLd]);

    return null;
};

export default SEO;
