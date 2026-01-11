import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description?: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogUrl?: string;
}

const SEO = ({
    title,
    description = "썬그린에너지(SunGreen Energy) - 태양광 발전시설 설계, 시공, 유지보수 전문기업. 정부 인증 업체로 신뢰할 수 있는 태양광 솔루션을 제공합니다.",
    keywords = "썬그린, 썬그린에너지, 썬그린 에너지, SunGreen, 태양광, RE100, 신재생에너지",
    ogTitle,
    ogDescription,
    ogImage = "https://ssungreen.com/sungreen-logo.png",
    ogUrl = window.location.href,
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

    }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl]);

    return null;
};

export default SEO;
