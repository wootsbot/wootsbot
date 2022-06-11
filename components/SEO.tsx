import { NextSeo, LogoJsonLd } from 'next-seo';
import siteConfig from '@/utils/site-config';

export type SEOProps = {
  title?: string;
  description?: string;
  openGraph?: any;
};
const SEO = ({ title, description, openGraph }: SEOProps) => (
  <NextSeo
    title={title}
    description={description}
    openGraph={{ title, description, ...openGraph }}
    titleTemplate={siteConfig.seo.titleTemplate}
  />
);

export { LogoJsonLd as BlogSeo };
export default SEO;
