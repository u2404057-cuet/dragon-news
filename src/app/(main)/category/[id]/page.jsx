import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import NewsCard from "@/components/NewsCard";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await res.json();
  return data.data;
};

export const getNewsByCategory = async (category_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`
  );
  const data = await res.json();
  return data.data;
};

const CategoryPage = async ({ params }) => {
  const { id } = await params;
  const categories = await getCategories();
  const news = await getNewsByCategory(id);
  return (
    <div className="grid grid-cols-4 gap-4 container mx-auto mt-20">
      <div className="">
        <LeftSideBar categories={categories} activeId={id}></LeftSideBar>
      </div>
      <div className="col-span-2 space-y-2">
        { news.length > 0 ? news.map((n) => (
          <div key={n._id} className="bg-base-300 p-3 rounded-2xl">
            <NewsCard news={n}></NewsCard>
          </div>
        )): <h2>No data found</h2>}
      </div>
      <div className="">
        <div className="flex flex-col gap-3">
          <p className="font-bold text-lg">Login With</p>
          <button className="btn w-full btn-outline btn-info">
            <Link href={"/login"} className="flex gap-2">
              <FaGoogle />
              Login with Google
            </Link>
          </button>
          <button className="btn w-full btn-outline">
            <Link href={"/login"} className="flex gap-2">
              <FaGithub />
              Login with Github
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
