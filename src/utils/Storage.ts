import { Blog, BlogInput } from "@/app/components/dashboard/BlogCard";

const KEY = "myblog:posts";

function isBrowser() {
  return typeof window !== "undefined";
}

function readAll(): Blog[] {
 
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Blog[]) : [];
  } catch {
    return [];
  }
}

function writeAll(blogs: Blog[]) {
  if (!isBrowser()) return;
  window.localStorage.setItem(KEY, JSON.stringify(blogs));
}

export function getAllBlogs(): Blog[] {
  return readAll().sort((a, b) => b.createdAt - a.createdAt);
}

export function getBlogById(id: string): Blog | undefined {
  return readAll().find((b) => b.id === id);
}

export function createBlog(input: BlogInput): Blog {
  const blogs = readAll();
  const now = Date.now();
  const blog: Blog = {
    ...input,
    id: `${now}-${Math.random().toString(36).slice(2, 9)}`,
    createdAt: now,
    updatedAt: now,
  };
  blogs.push(blog);
  writeAll(blogs);
  return blog;
}

export function updateBlog(id: string, input: BlogInput): Blog | undefined {
  const blogs = readAll();
  const idx = blogs.findIndex((b) => b.id === id);
  if (idx === -1) return undefined;
  const updated: Blog = {
    ...blogs[idx],
    ...input,
    updatedAt: Date.now(),
  };
  blogs[idx] = updated;
  writeAll(blogs);
  return updated;
}

export function deleteBlog(id: string) {
  const blogs = readAll().filter((b) => b.id !== id);
  writeAll(blogs);
}