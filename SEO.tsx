import Head from "next/head";
import { FC, ReactNode } from "react";

interface SEOTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  url?: string;
  image?: string;
  twitterHandle?: string;
  children?: ReactNode;
}

const SEOTags: FC<SEOTagsProps> = ({
  title = process.env.NEXT_PUBLIC_SEO_DEFAULT_TITLE,
  description = process.env.NEXT_PUBLIC_SEO_DEFAULT_DESCRIPTION,
  keywords = process.env.NEXT_PUBLIC_SEO_DEFAULT_KEYWORDS,
  author = process.env.NEXT_PUBLIC_SEO_DEFAULT_AUTHOR,
  url = process.env.NEXT_PUBLIC_SEO_DEFAULT_URL,
  image = process.env.NEXT_PUBLIC_SEO_DEFAULT_IMAGE,
  twitterHandle = process.env.NEXT_PUBLIC_SEO_DEFAULT_TWWITER_HANDLE,
  children,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {children}
    </Head>
  );
};

export default SEOTags;
