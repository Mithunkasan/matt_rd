const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");
const path = require("path");

// Define your domain name
const siteUrl = "https://mattrd.com/";

// Define the menu items with URLs, changefreq, and priority
const menuItems = [
  { label: 'Home', href: '/', changefreq: 'daily', priority: 1.0 },
  { label: 'About Us', href: '/whatwedo', changefreq: 'monthly', priority: 0.8 },
  { label: 'Our Process', href: '/ourprocesses', changefreq: 'monthly', priority: 0.8 },
  { label: 'Why Choose Us', href: '/whychooseus', changefreq: 'monthly', priority: 0.8 },
  { label: 'Research Proposal Writing', href: '/ServiceDetail/Research-Article-Writing', changefreq: 'monthly', priority: 0.7 },
  { label: 'Literature Review & Research Design', href: '/ServiceDetail/Review-Article-Writing-and-Editing', changefreq: 'monthly', priority: 0.7 },
  { label: 'Thesis/Dissertation Writing', href: '/ServiceDetail/Thesis-and-Dissertation-Writing', changefreq: 'monthly', priority: 0.7 },
  { label: 'Publication & Journal Support', href: '/ServiceDetail/Publication-Support', changefreq: 'monthly', priority: 0.7 },
  { label: 'Data Collection & Analysis', href: '/ServiceDetail/Plagiarism-Free-Writing-and-Editing', changefreq: 'monthly', priority: 0.7 },
  { label: 'Workshops & Training', href: '/ServiceDetail/Proposal-Writing-and-Editing', changefreq: 'monthly', priority: 0.7 },
  { label: 'Grant Writing & Ethical Compliance', href: '/ServiceDetail/Phd-End-to-End-Assistance', changefreq: 'monthly', priority: 0.7 },
  { label: 'Implementation Support', href: '/ServiceDetail/Proofreading-Services', changefreq: 'monthly', priority: 0.7 },
  { label: 'Case Studies', href: '/project', changefreq: 'monthly', priority: 0.7 },
  { label: 'Our Gallery', href: '/clienttestimonials', changefreq: 'monthly', priority: 0.7 },
  { label: 'Research Guidelines', href: '/researchgiudelines', changefreq: 'monthly', priority: 0.7 },
  { label: 'FAQ', href: '/faq', changefreq: 'monthly', priority: 0.7 },
  { label: 'Contact Us', href: '/contactuspage', changefreq: 'monthly', priority: 0.8 },
  { label: 'LandingNavbar', href: '/Research-Article-Writing', changefreq: 'monthly', priority: 0.8 },
]; 

async function generateSitemap() {
  // Create a sitemap stream
  const sitemap = new SitemapStream({ hostname: siteUrl });

  // Add each page from the menuItems array to the sitemap
  menuItems.forEach((item) => {
    sitemap.write({
      url: item.href,
      changefreq: item.changefreq,
      priority: item.priority,
    });
  });

  // End the sitemap stream
  sitemap.end();

  // Generate the sitemap and write it to the public directory
  const sitemapData = await streamToPromise(sitemap);
  fs.writeFileSync(path.resolve(__dirname, "public", "sitemap.xml"), sitemapData);

  console.log("Sitemap generated successfully at /public/sitemap.xml");
}

// Run the function to generate the sitemap
generateSitemap().catch((error) => {
  console.error("Error generating sitemap:", error);
});
