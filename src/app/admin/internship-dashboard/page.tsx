"use client";

import React, { useState } from "react";
import AdminProfile from "@/components/AdminProfile";
import InternshipCard from "@/components/InternshipCard";
import { useRouter } from "next/navigation";

// Mock admin profile data
const initialProfile = {
  name: "Admin User",
  bio: "I manage internship opportunities at IIC.",
  avatar: "https://randomuser.me/api/portraits/men/11.jpg",
};

// Mock internship data (should match other pages)
const internships = [
  {
    id: "1",
    title: "Frontend Developer Intern",
    company: "TechInnovate",
    location: "New York, NY",
    type: "Remote",
    duration: "3 months",
    stipend: "₹15,000/month",
    skills: ["React", "JavaScript", "Tailwind CSS"],
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=400&q=80",
    date: "2024-07-22 10:00 AM",
    posterName: "Amit Sharma",
    posterAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    applicationStartDate: "2023-11-01",
    applicationEndDate: "2023-12-15",
  },
  {
    id: "2",
    title: "Backend Developer Intern",
    company: "DataSystems Inc.",
    location: "San Francisco, CA",
    type: "Hybrid",
    duration: "6 months",
    stipend: "₹20,000/month",
    skills: ["Node.js", "Express", "MongoDB"],
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80",
    date: "2024-07-21 09:30 AM",
    posterName: "Priya Singh",
    posterAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    applicationStartDate: "2023-10-15",
    applicationEndDate: "2023-11-30",
  },
];

const AdminDashboardPage = () => {
  const [profile, setProfile] = useState(initialProfile);
  const router = useRouter();

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-neutral-900 dark:text-neutral-100">
        Admin Dashboard
      </h1>
      <AdminProfile profile={profile} onProfileChange={setProfile} />
      <div className="flex items-center justify-between max-w-2xl mx-auto mb-4">
        <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">Openings</h2>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 shadow transition-colors flex items-center"
          title="Add new opening"
          onClick={() => router.push("/internship/new")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
        </button>
      </div>
      <div className="flex flex-col gap-4 max-w-2xl mx-auto">
        {internships.map((internship) => (
          <InternshipCard key={internship.id} {...internship} />
        ))}
      </div>
    </main>
  );
};

export default AdminDashboardPage;
