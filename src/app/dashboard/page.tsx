"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { getAllBlogs, deleteBlog } from "../../utils/Storage";
import BlogCard from "../components/dashboard/BlogCard";
import { Blog } from "../components/dashboard/BlogCard";

export default function HomePage() {
  const [blogs, setBlogs] = useState<Blog[] | null>(null);
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  useEffect(() => {
    setBlogs(getAllBlogs());
  }, []);

  const allTags = useMemo(() => {
    if (!blogs) return [];
    const set = new Set<string>();
    blogs.forEach((b) => b.tags.forEach((t) => set.add(t)));
    return Array.from(set);
  }, [blogs]);

  const filtered = useMemo(() => {
    if (!blogs) return [];
    return blogs.filter((b) => {
      const matchesSearch =
        !search ||
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.description.toLowerCase().includes(search.toLowerCase());
      const matchesTag = !activeTag || b.tags.includes(activeTag);
      return matchesSearch && matchesTag;
    });
  }, [blogs, search, activeTag]);

  const handleDelete = (id: string) => {
    if (!window.confirm("Delete this post? This cannot be undone.")) return;
    deleteBlog(id);
    setBlogs(getAllBlogs());
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-brand-dark">All Posts</h1>
          <p className="text-brand-dark-soft mt-1">
            Manage your blog posts — view, edit, or delete anytime.
          </p>
        </div>
        <Link
          href="/upload"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-brand-green text-white font-semibold text-sm hover:bg-brand-green-dark transition-colors shadow-sm"
        >
          + New Post
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search posts by title or description…"
          className="w-full sm:max-w-sm px-4 py-2.5 rounded-full border border-brand-dark/15 text-sm focus:outline-none focus:border-brand-green"
        />
        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag(null)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                activeTag === null
                  ? "bg-brand-dark text-white"
                  : "bg-brand-dark-light text-brand-dark-soft hover:bg-brand-yellow-light"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                  activeTag === tag
                    ? "bg-brand-green text-white"
                    : "bg-brand-yellow-light text-brand-yellow-dark hover:bg-brand-yellow"
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {blogs === null ? (
        <p className="text-brand-dark-soft text-sm">Loading posts…</p>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 border-2 border-dashed border-brand-dark/10 rounded-2xl">
          <p className="text-brand-dark-soft mb-4">
            {blogs.length === 0
              ? "No posts yet. Create your first one!"
              : "No posts match your search/filter."}
          </p>
          {blogs.length === 0 && (
            <Link
              href="/dashboard/upload"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-yellow text-brand-dark font-semibold text-sm hover:bg-brand-yellow-dark transition-colors"
            >
              + Create a post
            </Link>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((blog) => (
            <BlogCard key={blog.id} blog={blog} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}