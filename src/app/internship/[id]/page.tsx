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
  },
  {
    id: "2",
    title: "Backend Developer Intern",
    description:
      "Join our backend team to design robust APIs and services. You'll work with Node.js, databases, and cloud infrastructure.",
    thumbnail:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80",
    visibility: "private" as "private",
  },
  {
    id: "3",
    title: "UI/UX Designer Intern",
    description:
      "Collaborate with product and engineering to design user-centric interfaces and experiences. Use Figma, Adobe XD, and more.",
    thumbnail:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&q=80",
    visibility: "public" as "public",
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
        }
      : {
          title: "",
          description: "",
          thumbnail: "",
          visibility: "public" as "public",
        };
  });

  if (!internship || !params?.id) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-950">
        <div className="text-center text-neutral-500">Internship not found.</div>
      </main>
    );
  }

  const handleApplyClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
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
            <p className="text-neutral-700 dark:text-neutral-300 mb-6">
              {internship.description}
            </p>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-neutral-500">Visibility:</span>
              <span className={`px-2 py-1 rounded text-xs font-semibold ${internship.visibility === "public" ? "bg-blue-100 text-blue-700" : "bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200"}`}>
                {internship.visibility.charAt(0).toUpperCase() + internship.visibility.slice(1)}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                onClick={handleApplyClick}
                disabled={uploading || applied}
              >
                {applied ? "Applied" : uploading ? "Uploading..." : "Apply & Upload Resume"}
              </button>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
                disabled={uploading || applied}
              />
              {resume && !uploading && (
                <span className="text-green-600 text-sm">{resume.name} uploaded!</span>
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
