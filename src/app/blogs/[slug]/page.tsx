// import React from "react";
// import Image from "next/image";

// type Post = {
//   id: number;
//   slug: string;
//   date: string;
//   title: { rendered: string };
//   content: { rendered: string };
//   excerpt: { rendered: string };
//   _embedded?: any;
// };

// async function getPost(slug: string): Promise<Post> {
//   const res = await fetch(
//     `https://powderblue-cattle-168578.hostingersite.com/wp-json/wp/v2/posts?slug=${slug}&_embed&_fields=id,slug,title,excerpt,content,date,featured_media,_embedded`,
//     { next: { revalidate: 60 } }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch post");
//   }

//   const posts = await res.json();
//   if (posts.length === 0) {
//     throw new Error("Post not found");
//   }

//   return posts[0];
// }

// async function getAllPosts(): Promise<Post[]> {
//   const res = await fetch(
//     "https://powderblue-cattle-168578.hostingersite.com/wp-json/wp/v2/posts?_embed&per_page=100&_fields=id,slug",
//     { next: { revalidate: 60 } }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch posts");
//   }

//   return res.json();
// }

// function formatDate(dateString: string) {
//   return new Date(dateString).toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });
// }

// export async function generateStaticParams() {
//   const posts = await getAllPosts();
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

// export default async function BlogPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const post = await getPost(slug);

//   const image =
//     post._embedded?.["wp:featuredmedia"]?.[0]?.href ||
//     post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.medium?.source_url ||
//     null;

//   const author = post._embedded?.author?.[0]?.name || "Admin";
//   const formattedDate = formatDate(post.date);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Banner/Header */}
//       <div className="w-full bg-gradient-to-r from-[#098A46] to-[#076a35] py-12">
//         <div className="max-w-4xl mx-auto px-9 lg:px-0">
//           <h1
//             className="text-4xl lg:text-5xl text-white font-poppins font-semibold text-balance"
//             dangerouslySetInnerHTML={{ __html: post.title.rendered }}
//           />
//           <div className="flex gap-6 mt-6 text-white">
//             <span className="font-poppins text-sm lg:text-base">{author}</span>
//             <span className="font-poppins text-sm lg:text-base">
//               {formattedDate}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Featured Image */}
//       {image && (
//         <div className="w-full bg-gray-100 py-8">
//           <div className="max-w-4xl mx-auto px-9 lg:px-0">
//             <Image
//               src={image}
//               alt={post.title.rendered}
//               width={800}
//               height={450}
//               className="rounded-lg object-cover w-full"
//               priority
//             />
//           </div>
//         </div>
//       )}

//       {/* Main Content */}
//       <div className="max-w-4xl mx-auto px-9 lg:px-0 py-12">
//         <article className="prose prose-sm lg:prose-base max-w-none">
//           <div
//             className="font-poppins text-[#535353] leading-relaxed text-base lg:text-lg"
//             dangerouslySetInnerHTML={{ __html: post.content.rendered }}
//           />
//         </article>

//         {/* Back to Blogs Link */}
//         <div className="mt-12 pt-8 border-t border-[#B4B4B4]">
//           <a
//             href="/blogs"
//             className="inline-block text-[#098A46] font-poppins font-semibold hover:underline"
//           >
//             ← Back to Blogs
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

type Post = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: any;
};

async function getPost(slug: string): Promise<Post | null> {
  try {
    const res = await fetch(
      `https://powderblue-cattle-168578.hostingersite.com/wp-json/wp/v2/posts?slug=${slug}&_embed&_fields=id,slug,title,excerpt,content,date,_embedded`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      return null;
    }

    const posts = await res.json();

    if (!posts || posts.length === 0) {
      return null;
    }

    return posts[0];
  } catch (error) {
    return null;
  }
}

async function getAllPosts(): Promise<{ slug: string }[]> {
  try {
    const res = await fetch(
      "https://powderblue-cattle-168578.hostingersite.com/wp-json/wp/v2/posts?_fields=slug&per_page=100",
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      return [];
    }

    return res.json();
  } catch {
    return [];
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const image =
    post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.medium
      ?.source_url ||
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    null;

  const author = post._embedded?.author?.[0]?.name || "Admin";
  const formattedDate = formatDate(post.date);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-[#098A46] to-[#076a35] py-12">
        <div className="max-w-4xl mx-auto px-9 lg:px-0">
          <h1
            className="text-4xl lg:text-5xl text-white font-poppins font-semibold text-balance"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          <div className="flex gap-6 mt-6 text-white">
            <span className="font-poppins text-sm lg:text-base">
              {author}
            </span>

            <span className="font-poppins text-sm lg:text-base">
              {formattedDate}
            </span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {image && (
        <div className="w-full bg-gray-100 py-8">
          <div className="max-w-4xl mx-auto px-9 lg:px-0">
            <Image
              src={image}
              alt={post.title.rendered}
              width={800}
              height={450}
              className="rounded-lg object-cover w-full"
              priority
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-9 lg:px-0 py-12">
        <article className="prose prose-sm lg:prose-base max-w-none">
          <div
            className="font-poppins text-[#535353] leading-relaxed text-base lg:text-lg"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </article>

        {/* Back Button */}
        <div className="mt-12 pt-8 border-t border-[#B4B4B4]">
          <a
            href="/blogs"
            className="inline-block text-[#098A46] font-poppins font-semibold hover:underline"
          >
            ← Back to Blogs
          </a>
        </div>
      </div>
    </div>
  );
}
