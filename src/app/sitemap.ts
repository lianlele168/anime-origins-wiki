import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://animeorigins.robloxwikihub.com';
  const d = new Date().toISOString();

  return [
    { url: baseUrl, lastModified: d, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/codes/`, lastModified: d, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/tier-list/`, lastModified: d, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/trait-simulator/`, lastModified: d, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/evolution-guide/`, lastModified: d, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/beginner-guide/`, lastModified: d, changeFrequency: 'monthly', priority: 0.7 },
  ];
}
