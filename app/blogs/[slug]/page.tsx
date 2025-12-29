"use client";

import { BlogDetail } from "@/app/components/blog/blog-detail";
import { Navbar18 } from "@/app/components/navbar/navbar";
import { Footer7, Footer7Defaults } from "@/app/components/footer/Footer7";

import {
  getArticleBySlug,
  getRelatedArticles,
  defaultBlogButton,
} from "@/app/data/blog-articles";
import { notFound, useParams } from "next/navigation";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedPosts = getRelatedArticles(article.slug, article.category);

  const blogProps = {
    button: defaultBlogButton,
    category: article.category,
    readTime: article.readTime,
    heading: article.heading,
    image: article.image,
    postDetails: article.postDetails,
    introduction: article.introduction,
    sections: article.sections,
    conclusion: article.conclusion,
    relatedPostsHeading: "Artículos relacionados",
    relatedPosts: relatedPosts,
  };

  return (
    <div className="flex flex-col bg-white">
      <Navbar18 />
      <BlogDetail {...blogProps} />
      <Footer7 {...Footer7Defaults} />
    </div>
  );
}
