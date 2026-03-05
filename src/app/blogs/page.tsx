import React from "react";
import BlogCard from "../components/blogs/BlogCard";
import RecentBlogsCard from "../components/blogs/RecentBlogsCard";
import BlogBanner from "../components/blogs/BlogBanner";
import Image from "next/image";

type Post = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: any;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch(
    "https://powderblue-cattle-168578.hostingersite.com/wp-json/wp/v2/posts?_embed&per_page=6&_fields=id,slug,title,excerpt,date,featured_media,_embedded",
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function Page() {
  const posts = await getPosts();
  console.log(posts[0]);

  return (
    <div>
      <BlogBanner />

      <div className="flex lg:flex-row flex-col max-w-7xl gap-5 w-full lg:px-0 px-9 mx-auto">
        {/* LEFT SIDE */}
        <div className="flex gap-6 flex-col w-full lg:w-[65%] my-5">
          <span className="font-poppins text-2xl text-black font-semibold border-b border-[#B4B4B4] pb-3">
            Blogs world
          </span>

          {posts.map((post) => {
            const image =
              post._embedded?.["wp:featuredmedia"]?.[0]?.href ||
              post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.medium?.source_url ||
              null

            console.log(image)


            const author =
              post._embedded?.author?.[0]?.name || "Admin";

            const formattedDate = formatDate(post.date);

            const excerpt = post.excerpt.rendered
              .replace(/<[^>]+>/g, "")
              .slice(0, 140);

            const markup = { __html: post.title.rendered }

            return (
              <div
                key={post.id}   // ✅ KEY ADDED
                className="flex flex-col gap-4 items-center lg:flex-row"
              >
                {/* IMAGE SAFE RENDER */}
                {image && (
                  <Image
                    src={image}
                    alt={post.title.rendered}
                    width={400}
                    height={250}
                    className="rounded-lg object-cover"
                  />
                )}

                <div className="flex flex-col gap-3.5">
                  <div className="flex gap-6">
                    <h6 className="text-black font-semibold text-[12px] font-poppins">
                      {author}
                    </h6>
                    <h6 className="text-black font-semibold text-[12px] font-poppins">
                      {formattedDate}
                    </h6>
                  </div>

                  <h3
                    className="text-[#098A46] text-[24px] font-medium font-poppins"

                  >{post.title.rendered}</h3>

                  <p className="text-[#535353] font-poppins text-[16px] w-[90%]">
                    {excerpt}...
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex gap-6 flex-col w-full lg:w-[35%] my-5">
          <span className="font-poppins text-2xl text-black font-semibold border-b border-[#B4B4B4] pb-3">
            Recent post
          </span>

          <RecentBlogsCard />
          <RecentBlogsCard />
          <RecentBlogsCard />
          <RecentBlogsCard />

          <BlogCard flexDirection="flex-col" />

          <span className="font-poppins text-2xl text-black font-semibold border-b border-[#B4B4B4] pb-3">
            Tags
          </span>

          <div className="grid grid-cols-3 gap-2">
            <div className="py-2 border border-[#B4B4B4] flex justify-center">
              lorem ipsum
            </div>
            <div className="py-2 border border-[#B4B4B4] flex justify-center">
              lorem ipsum
            </div>
            <div className="py-2 border border-[#B4B4B4] flex justify-center">
              lorem ipsum
            </div>
          </div>

          <span className="font-poppins text-2xl text-black font-semibold border-b border-[#B4B4B4] pb-3">
            Newsletter
          </span>

          <div className="bg-white shadow-2xl shadow-gray-600 flex flex-col gap-3 p-5">
            <h5 className="text-[16px] font-medium">
              The most important Islamic news and events of the day.
            </h5>

            <span className="text-[#535353] text-[16px]">
              Prophethood refers to the belief in a religious
            </span>

            <div className="border border-[#979797] p-2 flex items-center">
              <input
                type="text"
                placeholder="Your email address"
                className="outline-none w-[80%]"
              />
              <button className="pl-2 border-l border-[#098A46] text-[#098A46]">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

