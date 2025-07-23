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
    company: "TechInnovate",
    location: "New York, NY",
    type: "Remote",
    duration: "3 months",
    stipend: "₹15,000/month",
    skills: ["React", "JavaScript", "Tailwind CSS"],
    applicationStartDate: "2023-11-01",
    applicationEndDate: "2023-12-15",
  },
  {
    id: "2",
    title: "Backend Developer Intern",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80",
    date: "2024-07-21 09:30 AM",
    posterName: "Priya Singh",
    posterAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    company: "DataSystems Inc.",
    location: "San Francisco, CA",
    type: "Hybrid",
    duration: "6 months",
    stipend: "₹20,000/month",
    skills: ["Node.js", "MongoDB", "Express"],
    applicationStartDate: "2023-10-15",
    applicationEndDate: "2023-11-30",
  },
  {
    id: "3",
    title: "UI/UX Designer Intern",
    thumbnail: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&q=80",
    date: "2024-07-20 02:15 PM",
    posterName: "Rahul Verma",
    posterAvatar: "https://randomuser.me/api/portraits/men/65.jpg",
    company: "CreativeDesign Co.",
    location: "Boston, MA",
    type: "On-site",
    duration: "4 months",
    stipend: "₹18,000/month",
    skills: ["Figma", "Adobe XD", "UI/UX"],
    applicationStartDate: "2023-12-01",
    applicationEndDate: "2024-01-15",
  },
  {
    id: "4",
    title: "Data Science Intern",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=facearea&w=400&q=80",
    date: "2024-07-19 11:45 AM",
    posterName: "Neha Gupta",
    posterAvatar: "https://randomuser.me/api/portraits/women/68.jpg",
    company: "DataMinds Analytics",
    location: "Bangalore, India",
    type: "Remote",
    duration: "5 months",
    stipend: "₹22,000/month",
    skills: ["Python", "Machine Learning", "SQL"],
    applicationStartDate: "2024-01-15",
    applicationEndDate: "2024-02-28",
  },
];

const InternshipListPage = () => {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4 text-neutral-900 dark:text-neutral-100">
          Internship Opportunities
        </h1>
        <p className="text-center text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto">
          Discover exciting internship opportunities and kickstart your career with hands-on experience in your field of interest.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internships.map((internship) => (
            <InternshipCard key={internship.id} {...internship} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default InternshipListPage;
