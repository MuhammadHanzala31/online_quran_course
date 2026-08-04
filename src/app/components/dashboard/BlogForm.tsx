"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { BlogInput, Blog } from "@/app/components/dashboard/BlogCard";
import TagInput from "./TagInput";
import RichTextEditor from "./RichTextEditor";
import ImageDropzone from "./ImageDropZone";


interface BlogFormProps {
  initial?: Blog;
  onSubmit: (input: BlogInput) => void;
  submitLabel: string;
}

export default function BlogForm({ initial, onSubmit, submitLabel }: BlogFormProps) {
  const router = useRouter();
  const [title, setTitle] = useState(initial?.title ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [image, setImage] = useState(initial?.image ?? "");
  const [content, setContent] = useState(initial?.content ?? "");
  const [tags, setTags] = useState<string[]>(initial?.tags ?? []);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Please add a title for your post.");
      return;
    }
    setError("");
    onSubmit({ title: title.trim(), description: description.trim(), image, content, tags });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-extrabold text-brand-dark">
          {initial ? "Edit Post" : "Create New Post"}
        </h1>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-brand-dark mb-1.5">
            Title <span className="text-brand-green">*</span>
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. 10 Tips for Building with Next.js"
            className="w-full px-4 py-2.5 rounded-xl border border-brand-dark/15 text-sm focus:outline-none focus:border-brand-green"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-brand-dark mb-1.5">
            Short Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="A short summary shown on the blog card…"
            rows={3}
            className="w-full px-4 py-2.5 rounded-xl border border-brand-dark/15 text-sm focus:outline-none focus:border-brand-green resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-brand-dark mb-1.5">
            Featured Image
          </label>
          <ImageDropzone value={image} onChange={setImage} />
        </div>

        <div>
          <label className="block text-sm font-semibold text-brand-dark mb-1.5">
            Content
          </label>
          <RichTextEditor
            value={content}
            onChange={setContent}
            placeholder="Write your blog content here…"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-brand-dark mb-1.5">Tags</label>
          <TagInput tags={tags} onChange={setTags} />
        </div>

        {error && <p className="text-sm text-red-600 font-medium">{error}</p>}

        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            className="px-6 py-2.5 rounded-full bg-green-600 text-white font-semibold text-sm hover:bg-brand-green-dark transition-colors shadow-sm cursor-pointer"
          >
            {submitLabel}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-2.5 rounded-full bg-amber-600 text-white font-semibold text-sm hover:bg-brand-dark hover:text-white transition-colors cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}