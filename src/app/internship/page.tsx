import React from "react";
import InternshipCard from "@/components/InternshipCard";

// Mock data for demonstration
const internships = [
  {
    id: "1",
    title: "Frontend Developer Intern",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=400&q=80",
    date: "2024-07-22 10:00 AM",
    posterName: "Amit Sharma",
    posterAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "2",
    title: "Backend Developer Intern",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80",
    date: "2024-07-21 09:30 AM",
    posterName: "Priya Singh",
    posterAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "3",
    title: "UI/UX Designer Intern",
    thumbnail: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&q=80",
    date: "2024-07-20 02:15 PM",
    posterName: "Rahul Verma",
    posterAvatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const InternshipListPage = () => {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-neutral-900 dark:text-neutral-100">
        Internship Opportunities
      </h1>
      <div className="flex flex-col gap-4 max-w-2xl mx-auto">
        {internships.map((internship) => (
          <InternshipCard key={internship.id} {...internship} />
        ))}
      </div>
    </main>
  );
};

export default InternshipListPage;
