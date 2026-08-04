"use client";

import { useRouter } from "next/navigation";
import { createBlog } from "@/utils/Storage";
import { BlogInput } from "@/app/components/dashboard/BlogCard";
import BlogForm from "@/app/components/dashboard/BlogForm";

export default function UploadPage() {
  const router = useRouter();

  const handleSubmit = (input: BlogInput) => {
    const blog = createBlog(input);
    router.push(`/dashboard/upload/view/${blog.id}`);
  };

  return <BlogForm onSubmit={handleSubmit} submitLabel="Publish Post" />;
}