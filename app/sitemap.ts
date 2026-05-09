import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://clyneisenhuth.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/case-studies/product-reviews`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/case-studies/incentivized-reviews`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/case-studies/item-fulfillment`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/case-studies/single-account`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
