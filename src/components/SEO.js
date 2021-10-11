import { NextSeo } from 'next-seo';
import siteConfig from '@/utils/site-config';

const SEO = ({ title, description }) => (
  <NextSeo
    title={title}
    description={description}
    openGraph={{ title, description }}
    titleTemplate={siteConfig.seo.titleTemplate}
  />
);

export default SEO;
