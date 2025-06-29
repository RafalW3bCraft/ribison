import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../utils/constants';

const SEOHead = ({ 
  title, 
  description, 
  keywords = '', 
  canonical = '',
  ogImage = '/images/logo.png'
}) => {
  const fullTitle = title ? `${title} | ${COMPANY_INFO.name}` : COMPANY_INFO.name;
  const defaultDescription = `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}. Premium chemical solutions for agriculture, construction, paints, ceramics, and specialty applications.`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta */}
      <meta name="author" content={COMPANY_INFO.name} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};

export default SEOHead;