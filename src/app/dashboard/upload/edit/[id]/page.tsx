"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Blog, BlogInput } from "@/app/components/dashboard/BlogCard";
import { getBlogById, updateBlog } from "@/utils/Storage";
import BlogForm from "@/app/components/dashboard/BlogForm";


export default function EditBlogPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null | undefined>(undefined);

  useEffect(() => {
    setBlog(getBlogById(id) ?? null);
  }, [id]);

  const handleSubmit = (input: BlogInput) => {
    updateBlog(id, input);
    router.push(`/dashboard/upload/view/${id}`);
  };

  if (blog === undefined) {
    return <p className="text-center text-brand-dark-soft py-20">Loading…</p>;
  }

  if (blog === null) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-brand-dark mb-2">Post not found</h1>
        <Link
          href="/"
          className="inline-flex px-5 py-2.5 rounded-full bg-brand-green text-white font-semibold text-sm hover:bg-brand-green-dark transition-colors mt-4"
        >
          Back to all posts
        </Link>
      </div>
    );
  }

  return <BlogForm initial={blog} onSubmit={handleSubmit} submitLabel="Save Changes" />;
}