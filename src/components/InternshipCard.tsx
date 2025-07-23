"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface InternshipCardProps {
  id: string;
  title: string;
  thumbnail: string;
  date?: string;
  posterName?: string;
  posterAvatar?: string;
  company?: string;
  location?: string;
  skills?: string[];
  applicationStartDate?: string;
  applicationEndDate?: string;
}

const InternshipCard: React.FC<InternshipCardProps> = ({
  id,
  title,
  thumbnail,
  date,
  posterName,
  posterAvatar,
  company,
  location,
  skills,
  applicationStartDate,
  applicationEndDate,
}) => {
  const router = useRouter();

  // Check if application period is active
  const getApplicationStatus = () => {
    if (!applicationStartDate || !applicationEndDate) return "Unknown";
    
    const today = new Date();
    const startDate = new Date(applicationStartDate);
    const endDate = new Date(applicationEndDate);
    endDate.setHours(23, 59, 59, 999); // Set to end of day
    
    if (today < startDate) return "Upcoming";
    if (today > endDate) return "Closed";
    return "Open";
  };

  const status = applicationStartDate && applicationEndDate ? getApplicationStatus() : null;

  return (
    <div
      className="card hover:shadow-lg transition-all cursor-pointer mb-6 hover:scale-[1.01] overflow-hidden"
      onClick={() => router.push(`/internship/${id}`)}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${title}`}
    >
      <div className="relative w-full h-40">
        <Image
          src={thumbnail}
          alt={title}
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {status && (
          <div className="absolute top-3 right-3">
            <span className={`badge ${status === "Open" ? "badge-success" : status === "Upcoming" ? "badge-warning" : "badge-danger"}`}>
              {status}
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2 line-clamp-1">
          {title}
        </h2>
        
        {company && (
          <div className="flex items-center gap-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-neutral-700 dark:text-neutral-300">{company}</span>
          </div>
        )}
        
        {location && (
          <div className="flex items-center gap-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-neutral-700 dark:text-neutral-300">{location}</span>
          </div>
        )}
        
        {applicationStartDate && applicationEndDate && (
          <div className="flex items-center gap-2 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <span className="text-xs text-neutral-600 dark:text-neutral-400">
              {new Date(applicationStartDate).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' })} - {new Date(applicationEndDate).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
        )}
        
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {skills.slice(0, 3).map((skill, index) => (
              <span key={index} className="badge badge-primary text-xs">{skill}</span>
            ))}
            {skills.length > 3 && <span className="badge badge-secondary text-xs">+{skills.length - 3}</span>}
          </div>
        )}
        
        {posterName && posterAvatar && (
          <div className="flex items-center mt-4 pt-3 border-t border-neutral-200 dark:border-neutral-800">
            <div className="w-7 h-7 relative mr-2">
              <Image
                src={posterAvatar}
                alt={posterName}
                className="rounded-full border border-neutral-300 dark:border-neutral-700 object-cover"
                fill
                sizes="28px"
              />
            </div>
            <span className="text-sm text-neutral-700 dark:text-neutral-300 truncate">
              {posterName}
            </span>
            {date && (
              <span className="text-xs text-neutral-500 ml-auto">
                {date}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InternshipCard;
