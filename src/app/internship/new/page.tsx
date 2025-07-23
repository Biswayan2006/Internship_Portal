"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import InternshipForm from "@/components/InternshipForm";

const NewInternshipPage = () => {
  const router = useRouter();
  const [internship, setInternship] = useState({
    title: "",
    description: "",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80",
    visibility: "public" as "public" | "private",
    company: "",
    location: "",
    type: "Remote",
    duration: "",
    stipend: "",
    skills: [],
    applicationStartDate: "",
    applicationEndDate: "",
  });

  const handleChange = (updated: typeof internship) => {
    setInternship(updated);
  };

  const handleSave = () => {
    // In a real app, this would save to a database
    console.log("Saving new internship:", internship);
    
    // Redirect to admin dashboard after saving
    router.push("/admin/internship-dashboard");
  };

  const handleCancel = () => {
    router.push("/admin/internship-dashboard");
  };

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            Create New Internship
          </h1>
          <button
            onClick={handleCancel}
            className="btn btn-outline"
          >
            Cancel
          </button>
        </div>
        
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-soft p-6">
          <InternshipForm
            internship={internship}
            onChange={handleChange}
            onSave={handleSave}
            onCancel={handleCancel}
            isNew={true}
          />
        </div>
      </div>
    </main>
  );
};

export default NewInternshipPage;