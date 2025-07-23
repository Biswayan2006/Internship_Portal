"use client";

import React, { useRef, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import InternshipForm from "@/components/InternshipForm";

// Mock data (should match the listing page for demo)
const internships = [
  {
    id: "1",
    title: "Frontend Developer Intern",
    description:
      "Work with our frontend team to build beautiful, scalable web applications. You'll use React, Tailwind CSS, and modern web technologies.",
    thumbnail:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=400&q=80",
    visibility: "public" as "public",
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
    description:
      "Join our backend team to design robust APIs and services. You'll work with Node.js, databases, and cloud infrastructure.",
    thumbnail:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80",
    visibility: "private" as "private",
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
    description:
      "Collaborate with product and engineering to design user-centric interfaces and experiences. Use Figma, Adobe XD, and more.",
    thumbnail:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&q=80",
    visibility: "public" as "public",
    company: "CreativeDesign Co.",
    location: "Boston, MA",
    type: "On-site",
    duration: "4 months",
    stipend: "₹18,000/month",
    skills: ["Figma", "Adobe XD", "UI/UX"],
    applicationStartDate: "2023-12-01",
    applicationEndDate: "2024-01-15",
  },
];

// Mock session (replace with real auth/session logic)
const session = {
  user: {
    name: "Admin User",
    role: "admin", // change to "user" to test non-admin view
  },
};

const InternshipDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [resume, setResume] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [applied, setApplied] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [internship, setInternship] = useState(() => {
    const found = internships.find((i) => i.id === params?.id);
    return found
      ? {
          title: found.title,
          description: found.description,
          thumbnail: found.thumbnail,
          visibility: found.visibility,
          company: found.company,
          location: found.location,
          type: found.type,
          duration: found.duration,
          stipend: found.stipend,
          skills: found.skills,
          applicationStartDate: found.applicationStartDate,
          applicationEndDate: found.applicationEndDate,
        }
      : {
          title: "",
          description: "",
          thumbnail: "",
          visibility: "public" as "public",
          company: "",
          location: "",
          type: "",
          duration: "",
          stipend: "",
          skills: [],
          applicationStartDate: "",
          applicationEndDate: "",
        };
  });

  if (!internship || !params?.id) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-950">
        <div className="text-center text-neutral-500">Internship not found.</div>
      </main>
    );
  }

  // Check if application period is active
  const isApplicationOpen = () => {
    if (!internship.applicationStartDate || !internship.applicationEndDate) return false;
    
    const today = new Date();
    const startDate = new Date(internship.applicationStartDate);
    const endDate = new Date(internship.applicationEndDate);
    endDate.setHours(23, 59, 59, 999); // Set to end of day
    
    return today >= startDate && today <= endDate;
  };

  const getApplicationStatus = () => {
    if (!internship.applicationStartDate || !internship.applicationEndDate) return "Unknown";
    
    const today = new Date();
    const startDate = new Date(internship.applicationStartDate);
    const endDate = new Date(internship.applicationEndDate);
    endDate.setHours(23, 59, 59, 999); // Set to end of day
    
    if (today < startDate) return "Upcoming";
    if (today > endDate) return "Closed";
    return "Open";
  };

  const handleApplyClick = () => {
    if (isApplicationOpen()) {
      fileInputRef.current?.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setResume(file);
      setUploading(true);
      // Simulate upload
      setTimeout(() => {
        setUploading(false);
        setApplied(true);
      }, 1500);
    }
  };

  const handleEdit = () => setEditMode(true);
  const handleCancel = () => setEditMode(false);
  const handleSave = () => {
    // Here you would save to backend
    setEditMode(false);
  };
  const handleChange = (updated: typeof internship) => {
    setInternship(updated);
  };

  const isAdmin = session.user.role === "admin";

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-10 px-4 flex flex-col items-center">
      <div className="w-full max-w-xl bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6 border border-neutral-200 dark:border-neutral-800">
        {isAdmin && !editMode && (
          <div className="flex justify-end mb-2">
            <button
              className="text-blue-600 hover:underline flex items-center gap-1"
              onClick={handleEdit}
              title="Edit internship"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13h3l8-8a2.828 2.828 0 00-4-4l-8 8v3zm0 0v3h3" /></svg>
              Edit
            </button>
          </div>
        )}
        {isAdmin && editMode ? (
          <InternshipForm
            internship={internship}
            onChange={handleChange}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        ) : (
          <>
            <img
              src={internship.thumbnail}
              alt={internship.title}
              className="w-full h-56 object-cover rounded-lg mb-6 border border-neutral-200 dark:border-neutral-800"
            />
            <h1 className="text-2xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
              {internship.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {internship.skills && internship.skills.map((skill, index) => (
                <span key={index} className="badge badge-primary">{skill}</span>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {internship.company && (
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700 dark:text-neutral-300">{internship.company}</span>
                </div>
              )}
              
              {internship.location && (
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700 dark:text-neutral-300">{internship.location}</span>
                </div>
              )}
              
              {internship.type && (
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700 dark:text-neutral-300">{internship.type}</span>
                </div>
              )}
              
              {internship.duration && (
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700 dark:text-neutral-300">{internship.duration}</span>
                </div>
              )}
              
              {internship.stipend && (
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700 dark:text-neutral-300">{internship.stipend}</span>
                </div>
              )}
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Description</h2>
              <p className="text-neutral-700 dark:text-neutral-300">
                {internship.description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex flex-col">
                <span className="text-sm text-neutral-500">Application Period</span>
                <div className="flex items-center gap-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    {internship.applicationStartDate && new Date(internship.applicationStartDate).toLocaleDateString()} - {internship.applicationEndDate && new Date(internship.applicationEndDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-sm text-neutral-500">Status</span>
                <span className={`badge mt-1 ${getApplicationStatus() === "Open" ? "badge-success" : getApplicationStatus() === "Upcoming" ? "badge-warning" : "badge-danger"}`}>
                  {getApplicationStatus()}
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-sm text-neutral-500">Visibility:</span>
                <span className={`badge ${internship.visibility === "public" ? "badge-primary" : "badge-secondary"}`}>
                  {internship.visibility.charAt(0).toUpperCase() + internship.visibility.slice(1)}
                </span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center border-t border-neutral-200 dark:border-neutral-800 pt-6">
              <button
                className={`btn ${isApplicationOpen() ? "btn-primary" : "btn-outline"} w-full sm:w-auto`}
                onClick={handleApplyClick}
                disabled={uploading || applied || !isApplicationOpen()}
              >
                {applied ? "Applied Successfully" : uploading ? "Uploading..." : isApplicationOpen() ? "Apply & Upload Resume" : getApplicationStatus() === "Upcoming" ? "Applications Open Soon" : "Applications Closed"}
              </button>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
                disabled={uploading || applied || !isApplicationOpen()}
              />
              {resume && !uploading && (
                <div className="flex items-center gap-2 text-success-600 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{resume.name} uploaded!</span>
                </div>
              )}
            </div>
          </>
        )}
      </div>
      <button
        className="mt-8 text-blue-600 hover:underline text-sm"
        onClick={() => router.back()}
      >
        ← Back to listings
      </button>
    </main>
  );
};

export default InternshipDetailPage;
