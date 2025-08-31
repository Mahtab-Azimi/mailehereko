import React from "react";
import { Star } from "lucide-react";

export default function Card({ item }) {
  return (
    <div className="relative rounded-xl overflow-hidden group">
      {/* Rating badge */}
      <div className="absolute top-4 left-4 z-20 bg-black/75 rounded-md px-2 py-1 flex items-center gap-1">
        <Star className="w-4 h-4 text-yellow-400" />
        <p className="text-yellow-400 text-sm font-medium">
          {Number(item.vote_average).toFixed(1)}
        </p>
      </div>

      {/* Poster image */}
      <div className="rounded-lg overflow-hidden">
        <img
          src={item.poster_path}
          alt={item.original_title || item.original_name}
          className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Title */}
      <div className="p-3">
        <h3 className="text-white text-lg font-semibold">
          {item.original_title || item.original_name}
        </h3>
      </div>
    </div>
  );
}
