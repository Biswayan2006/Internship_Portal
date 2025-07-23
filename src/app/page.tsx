import Image from "next/image";
import Link from "next/link";

import InternshipCard from "@/components/InternshipCard";

// Mock data for featured internships
const featuredInternships = [
  {
    id: "1",
    title: "Frontend Developer Intern",
    company: "TechInnovate",
    location: "New York, NY",
    type: "Remote",
    duration: "3 months",
    stipend: "₹15,000/month",
    skills: ["React", "JavaScript", "Tailwind CSS"],
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
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
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    posterName: "Priya Singh",
    posterAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    applicationStartDate: "2023-10-15",
    applicationEndDate: "2023-11-30",
  },
  {
    id: "3",
    title: "UI/UX Designer Intern",
    company: "CreativeDesign Co.",
    location: "Boston, MA",
    type: "On-site",
    duration: "4 months",
    stipend: "₹18,000/month",
    skills: ["Figma", "Adobe XD", "UI/UX"],
    thumbnail: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    posterName: "Rahul Verma",
    posterAvatar: "https://randomuser.me/api/portraits/men/65.jpg",
    applicationStartDate: "2023-12-01",
    applicationEndDate: "2024-01-15",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
      <main className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            Discover Your Perfect Internship
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Kickstart your career with hands-on experience at leading companies
          </p>
        </div>

        {/* Featured Internships */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Featured Opportunities
            </h2>
            <Link 
              href="/internship" 
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredInternships.map((internship) => (
              <InternshipCard 
                key={internship.id}
                id={internship.id}
                title={internship.title}
                thumbnail={internship.thumbnail}
                company={internship.company}
                location={internship.location}
                skills={internship.skills}
                type={internship.type}
                duration={internship.duration}
                stipend={internship.stipend}
                posterName={internship.posterName}
                posterAvatar={internship.posterAvatar}
                applicationStartDate={internship.applicationStartDate}
                applicationEndDate={internship.applicationEndDate}
              />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-700 dark:to-accent-700 rounded-2xl p-8 sm:p-10 text-center shadow-soft">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Ready to start your professional journey?</h2>
          <p className="text-white mb-6 max-w-2xl mx-auto">Browse our curated list of internships and find the perfect opportunity to develop your skills and build your career.</p>
          <Link 
            href="/internship" 
            className="inline-block bg-white text-primary-600 hover:bg-neutral-50 font-semibold px-6 py-3 rounded-lg transition-colors shadow-sm hover:shadow-md"
          >
            Explore All Internships
          </Link>
        </section>
      </main>
    </div>
  );
}
