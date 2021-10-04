import Image from 'next/image';
import { parseISO, format } from 'date-fns';

// import ViewCounter from 'components/ViewCounter';

const editUrl = (slug) => `https://github.com/leerob/leerob.io/edit/main/data/blog/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`https://leerob.io/blog/${slug}`)}`;

export default function BlogLayout({ children, frontMatter }) {
  return (
    <div
      title={`${frontMatter.title} – Lee Robinson`}
      description={frontMatter.summary}
      image={`https://leerob.io${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <article>
        <h1>{frontMatter.title}</h1>
        <div>
          <div>
            <Image alt="Lee Robinson" height={24} width={24} src="/avatar.jpg" />
            <p>
              {frontMatter.by}
              {'wootsbot / '}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p>
            {frontMatter.readingTime.text}
            {` • `}
            {/* <ViewCounter slug={frontMatter.slug} /> */}
          </p>
        </div>
        <div className="wootsbot-article">{children}</div>

        <div>
          <a href={discussUrl(frontMatter.slug)} target="_blank" rel="noopener noreferrer">
            {'Discuss on Twitter'}
          </a>
          {` • `}
          <a href={editUrl(frontMatter.slug)} target="_blank" rel="noopener noreferrer">
            {'Edit on GitHub'}
          </a>
        </div>
      </article>
    </div>
  );
}
