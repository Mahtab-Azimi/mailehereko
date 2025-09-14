
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Card({ item, routeTo }) {
  const CardImage = (
    <img
      src={item.poster_path}
      alt={item.original_title || item.original_name}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-[8px]"
    />
  );

  return (
    <div className="relative rounded-[12px] overflow-hidden group w-full bg-[#121829fa] p-2">
      {/* ریـتینگ */}
      <div className="absolute top-4 left-4 bg-[#000000bf] rounded-[8px] px-2 py-1 flex items-center z-20">
        <Star className="w-4 h-4 stroke-[#ffad49]" />
        <p className="ml-1 text-[#ffad49] text-[16px] font-poppins font-medium">
          {Number(item.vote_average).toFixed(1)}
        </p>
      </div>

      {/* تصویر کارت */}
      {routeTo ? (
        <Link
          to={routeTo}
          className="inline-block w-full h-[400px] rounded-[8px] overflow-hidden"
        >
          {CardImage}
        </Link>
      ) : (
        <div className="inline-block w-full h-[400px] rounded-[8px] overflow-hidden">
          {CardImage}
        </div>
      )}

      {/* عنوان کارت */}
      <div className="p-2 mb-2">
        {routeTo ? (
          <Link
            to={routeTo}
            className="block text-[#ebeef5] font-bold font-poppins"
          >
            {item.original_title || item.original_name}
          </Link>
        ) : (
          <span className="block text-[#ebeef5] font-bold font-poppins">
            {item.original_title || item.original_name}
          </span>
        )}
      </div>
    </div>
  );
}
