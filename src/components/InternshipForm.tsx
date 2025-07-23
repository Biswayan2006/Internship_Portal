import React, { useState } from "react";

type Internship = {
  title: string;
  description: string;
  thumbnail: string;
  visibility: "public" | "private";
  applicationStartDate: string;
  applicationEndDate: string;
  company?: string;
  location?: string;
  type?: string;
  duration?: string;
  stipend?: string;
  skills?: string[];
};

interface InternshipFormProps {
  internship: Internship;
  onChange: (updated: Internship) => void;
  onSave: () => void;
  onCancel: () => void;
  isNew?: boolean;
}

const InternshipForm: React.FC<InternshipFormProps> = ({
  internship,
  onChange,
  onSave,
  onCancel,
  isNew = false,
}) => {
  const [local, setLocal] = useState(internship);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLocal({ ...local, [e.target.name]: e.target.value });
    onChange({ ...local, [e.target.name]: e.target.value });
  };
  
  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const skillsArray = e.target.value.split(',').map(skill => skill.trim()).filter(Boolean);
    setLocal({ ...local, skills: skillsArray });
    onChange({ ...local, skills: skillsArray });
  };

  const handleVisibility = (v: "public" | "private") => {
    const updatedInternship = { ...local, visibility: v };
    setLocal(updatedInternship);
    onChange(updatedInternship);
  };

  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">Title</label>
          <input
            name="title"
            value={local.title}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            required
          />
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">Description</label>
          <textarea
            name="description"
            value={local.description}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 min-h-[120px] focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">Company</label>
          <input
            name="company"
            value={local.company || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">Location</label>
          <input
            name="location"
            value={local.location || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">Type</label>
          <select
            name="type"
            value={local.type || ''}
            onChange={handleChange as any}
            className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          >
            <option value="">Select type</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="On-site">On-site</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">Duration</label>
          <input
            name="duration"
            value={local.duration || ''}
            onChange={handleChange}
            placeholder="e.g. 3 months"
            className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">Stipend</label>
          <input
            name="stipend"
            value={local.stipend || ''}
            onChange={handleChange}
            placeholder="e.g. ₹15,000/month"
            className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">Skills (comma separated)</label>
          <input
            name="skills"
            value={local.skills?.join(', ') || ''}
            onChange={handleSkillsChange}
            placeholder="e.g. React, JavaScript, Tailwind"
            className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">Thumbnail URL</label>
          <input
            name="thumbnail"
            value={local.thumbnail}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            required
          />
          {local.thumbnail && (
            <div className="mt-2 relative w-full h-32 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700">
              <img src={local.thumbnail} alt="Thumbnail preview" className="w-full h-full object-cover" />
            </div>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">Application Start Date</label>
          <input
            type="date"
            name="applicationStartDate"
            value={local.applicationStartDate || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">Application End Date</label>
          <input
            type="date"
            name="applicationEndDate"
            value={local.applicationEndDate || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            required
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4 mt-6">
        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Visibility:</span>
        <button
          type="button"
          className={`px-3 py-1 rounded-full text-sm font-semibold border transition-colors ${local.visibility === "public" ? "bg-primary-600 text-white border-primary-600" : "bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border-neutral-300 dark:border-neutral-700"}`}
          onClick={() => handleVisibility("public")}
        >
          Public
        </button>
        <button
          type="button"
          className={`px-3 py-1 rounded-full text-sm font-semibold border transition-colors ${local.visibility === "private" ? "bg-primary-600 text-white border-primary-600" : "bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border-neutral-300 dark:border-neutral-700"}`}
          onClick={() => handleVisibility("private")}
        >
          Private
        </button>
      </div>
      
      <div className="flex gap-4 justify-end pt-4 border-t border-neutral-200 dark:border-neutral-800">
        <button
          type="button"
          className="btn-outline"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="button"
          className="btn-primary"
          onClick={onSave}
        >
          Save Internship
        </button>
      </div>
    </form>
  );
};

export default InternshipForm;
