"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface InternshipCardProps {
  id: string;
  title: string;
  thumbnail: string;
  date: string;
  posterName: string;
  posterAvatar: string;
}

const InternshipCard: React.FC<InternshipCardProps> = ({
  id,
  title,
  thumbnail,
  date,
  posterName,
  posterAvatar,
}) => {
  const router = useRouter();

  return (
    <div
      className="flex items-center gap-4 bg-white dark:bg-neutral-900 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer p-4 mb-6 border border-neutral-200 dark:border-neutral-800 max-w-2xl mx-auto hover:scale-[1.01]"
      onClick={() => router.push(`/internship/${id}`)}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${title}`}
    >
      <img
        src={thumbnail}
        alt={title}
        className="w-20 h-20 object-cover rounded-lg border border-neutral-200 dark:border-neutral-800 flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold truncate text-neutral-900 dark:text-neutral-100">
            {title}
          </h2>
          <span className="text-xs text-neutral-500 ml-2 whitespace-nowrap">
            {date}
          </span>
        </div>
        <div className="flex items-center mt-2">
          <img
            src={posterAvatar}
            alt={posterName}
            className="w-7 h-7 rounded-full border border-neutral-300 dark:border-neutral-700 mr-2"
          />
          <span className="text-sm text-neutral-700 dark:text-neutral-300 truncate">
            {posterName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;
