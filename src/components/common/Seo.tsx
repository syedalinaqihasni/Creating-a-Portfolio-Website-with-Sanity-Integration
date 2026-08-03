import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  pathname?: string;
}

const Seo = ({ 
  title = 'Syed Ali Naqi Hasni | Portfolio',
  description = 'Portfolio of Syed Ali Naqi Hasni - Software Developer, Designer, and Technology Enthusiast',
  image = '/og-image.jpg', 
  article = false,
  pathname = ''
}: SeoProps) => {
  const siteUrl = window.location.origin;
  const canonical = pathname ? `${siteUrl}${pathname}` : siteUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={canonical} />
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:site_name" content="Syed Ali Naqi Hasni Portfolio" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  );
};

export default Seo;