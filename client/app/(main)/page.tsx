import { BlogData } from "@/type";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getBlogsData } from "@/lib/actions/blogs.action";
import BlogCard from "@/components/BlogCard";

export default async function Home() {
  const cookieStore = cookies();
  const token: string | undefined = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/login");
    return;
  }

  const blogsData: BlogData[] = await getBlogsData(token);

  return (
    <main className="mx-[2rem] lg:mx-[10rem]">
      <div className="text-[#333333] text-[2rem] font-bold py-10">
        Latest Blogs
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {blogsData.length > 0 ? (
          blogsData.map((blog) => <BlogCard key={blog.id} blog={blog} />)
        ) : (
          <div className="text-[#333333] text-[1rem] font-medium">
            No blogs found
          </div>
        )}
      </div>
    </main>
  );
}
