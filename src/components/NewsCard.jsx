"use client";
import Image from "next/image";
import { FaEye, FaRegBookmark } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import Rating from "react-rating";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center p-2 bg-base-200 rounded-2xl">
        <div className="flex gap-2 items-center">
          <div className="">
            <Image
              src={news.author.img}
              alt={news.author.name}
              width={40}
              height={40}
              className="rounded-full"
            ></Image>
          </div>
          <div className="">
            <h4 className="">{news.author.name}</h4>
            <p className="">{news.author?.published_date}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <FaRegBookmark />
          <IoMdShare />
        </div>
      </div>
      <h1 className="font-bold text-3xl">{news.title}</h1>
      <Image
        src={news.image_url}
        alt="main image"
        width={1400}
        height={1000}
        className="w-full"
      ></Image>
      <p className="line-clamp-3 border-b border-gray-300  mb-4">{news.details}</p>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Rating
            className="space-x-2 "
            initialRating={news.rating?.number}
            emptySymbol={<FaRegStar className="text-yellow-400" />}
            fullSymbol={<FaStar className="text-yellow-400" />}
            placeholderSymbol={<FaStarHalfAlt className="text-yellow-400" />}
            readonly
          />
          <p className="">{news.rating.number}</p>
        </div>
        <div className="flex gap-3 items-center">
        <FaEye />
        <p className="">{news.total_view}</p>

        </div>
      </div>
    </div>
  );
};

export default NewsCard;
