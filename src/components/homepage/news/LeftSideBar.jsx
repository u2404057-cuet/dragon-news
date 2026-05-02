import Link from "next/link";

const leftSideBar = ({ categories, activeId }) => {
  return (
    <div>
      <p className="mb-2 font-bold text-lg">Category</p>
      <ul className="flex flex-col gap-2">
        {categories.news_category.map((category) => (
          <Link key={category.category_id} href={`/category/${category.category_id}`}>
            <li className={`p-3 hover:bg-gray-200 ${activeId == category.category_id ? "bg-base-300" : " "}`}>
              {category.category_name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default leftSideBar;
