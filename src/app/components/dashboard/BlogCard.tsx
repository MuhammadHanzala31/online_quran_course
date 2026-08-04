"use client";

import Link from "next/link";


export interface Blog {
  id: string;
  title: string;
  description: string;
  image: string; // data URL of featured image
  content: string; // rich text HTML
  tags: string[];
  createdAt: number;
  updatedAt: number;
}

export type BlogInput = Omit<Blog, "id" | "createdAt" | "updatedAt">;

interface BlogCardProps {
  blog: Blog;
  onDelete: (id: string) => void;
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function formatDate(ts: number) {
  return new Date(ts).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogCard({ blog, onDelete }: BlogCardProps) {
  return (
    <div className="group bg-white overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col">
      <Link href={`/blog/${blog.id}`} className="block">
        <div className="h-44 w-full bg-gray-100 overflow-hidden">
          {blog.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
              No image
            </div>
          )}
        </div>
      </Link>

      <div className="p-4 flex-1 flex flex-col bg-white">
        <p className="text-xs text-gray-500 mb-1">{formatDate(blog.createdAt)}</p>
        <Link href={`/blog/${blog.id}`}>
          <h3 className="font-bold text-gray-900 leading-snug line-clamp-2 hover:text-[#098A46] transition-colors">
            {blog.title || "Untitled post"}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mt-1.5 line-clamp-2 flex-1">
          {blog.description || stripHtml(blog.content).slice(0, 120)}
        </p>

        {blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {blog.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-semibold px-2 py-0.5 bg-[#FFB706]/15 text-[#FFB706]"
              >
                #{tag}
              </span>
            ))}
            {blog.tags.length > 3 && (
              <span className="text-[11px] font-semibold px-2 py-0.5 bg-gray-100 text-gray-500">
                +{blog.tags.length - 3}
              </span>
            )}
          </div>
        )}

        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-100">
          <Link
            href={`/dashboard/upload/view/${blog.id}`}
            className="flex-1 text-center text-xs font-semibold py-2 bg-[#098A46] text-white hover:bg-[#076e38] transition-colors"
          >
            View
          </Link>
          <Link
            href={`/dashboard/upload/edit/${blog.id}`}
            className="flex-1 text-center text-xs font-semibold py-2 bg-[#FFB706] text-gray-900 hover:bg-[#e5a405] transition-colors"
          >
            Edit
          </Link>
          <button
            onClick={() => onDelete(blog.id)}
            className="flex-1 text-center text-xs font-semibold py-2 bg-gray-700 text-white hover:bg-gray-800 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}