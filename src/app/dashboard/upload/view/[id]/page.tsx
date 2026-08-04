"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { deleteBlog, getBlogById } from "@/utils/Storage";
import { Blog } from "@/app/components/dashboard/BlogCard";


export default function ViewBlogPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null | undefined>(undefined);

  useEffect(() => {
    setBlog(getBlogById(id) ?? null);
    console.log(id, "id");
  }, [id]);

  const handleDelete = () => {
    if (!window.confirm("Delete this post? This cannot be undone.")) return;
    deleteBlog(id);
    router.push("/");
  };

  if (blog === undefined) {
    return <p className="text-center text-brand-dark-soft py-20">Loading…</p>;
  }

  if (blog === null) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-brand-dark mb-2">Post not found</h1>
        <p className="text-brand-dark-soft mb-6">
          This post may have been deleted or the link is incorrect.
        </p>
        <Link
          href="/"
          className="inline-flex px-5 py-2.5 rounded-full bg-brand-green text-white font-semibold text-sm hover:bg-brand-green-dark transition-colors"
        >
          Back to all posts
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <Link href="/" className="text-sm font-semibold text-brand-green-dark hover:underline">
        ← Back to all posts
      </Link>

      {blog.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-72 sm:h-96 object-cover rounded-2xl mt-6 border border-brand-dark/10"
        />
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-yellow-light text-brand-yellow-dark"
          >
            #{tag}
          </span>
        ))}
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-4 leading-tight">
        {blog.title}
      </h1>
      <p className="text-sm text-brand-dark-soft/70 mt-2">
        Published {new Date(blog.createdAt).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        {blog.updatedAt !== blog.createdAt &&
          ` · Updated ${new Date(blog.updatedAt).toLocaleDateString()}`}
      </p>

      {blog.description && (
        <p className="text-lg text-brand-dark-soft mt-4 font-medium border-l-4 border-brand-green pl-4">
          {blog.description}
        </p>
      )}

      <div
        className="prose-content mt-8 text-brand-dark leading-relaxed"
        dangerouslySetInnerHTML={{ __html: blog.content || "<p>No content yet.</p>" }}
      />

      <div className="flex items-center gap-3 mt-10 pt-6 border-t border-brand-dark/10">
        <Link
          href={`/blog/${blog.id}/edit`}
          className="px-5 py-2.5 rounded-full bg-brand-yellow text-brand-dark font-semibold text-sm hover:bg-brand-yellow-dark transition-colors"
        >
          Edit Post
        </Link>
        <button
          onClick={handleDelete}
          className="px-5 py-2.5 rounded-full bg-brand-dark-light text-brand-dark font-semibold text-sm hover:bg-brand-dark hover:text-white transition-colors"
        >
          Delete Post
        </button>
      </div>
    </article>
  );
}