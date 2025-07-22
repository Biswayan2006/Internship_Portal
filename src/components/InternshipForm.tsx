import React, { useState } from "react";

type Internship = {
  title: string;
  description: string;
  thumbnail: string;
  visibility: "public" | "private";
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

  const handleVisibility = (v: "public" | "private") => {
    setLocal({ ...local, visibility: v });
    onChange({ ...local, visibility: v });
  };

  return (
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">Title</label>
        <input
          name="title"
          value={local.title}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">Description</label>
        <textarea
          name="description"
          value={local.description}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 min-h-[80px]"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">Thumbnail URL</label>
        <input
          name="thumbnail"
          value={local.thumbnail}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
          required
        />
        {local.thumbnail && (
          <img src={local.thumbnail} alt="Thumbnail preview" className="w-32 h-20 object-cover rounded mt-2 border border-neutral-200 dark:border-neutral-700" />
        )}
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-neutral-700 dark:text-neutral-300">Visibility:</span>
        <button
          type="button"
          className={`px-3 py-1 rounded-full text-sm font-semibold border transition-colors ${local.visibility === "public" ? "bg-blue-600 text-white border-blue-600" : "bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 border-neutral-400 dark:border-neutral-600"}`}
          onClick={() => handleVisibility("public")}
        >
          Public
        </button>
        <button
          type="button"
          className={`px-3 py-1 rounded-full text-sm font-semibold border transition-colors ${local.visibility === "private" ? "bg-blue-600 text-white border-blue-600" : "bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 border-neutral-400 dark:border-neutral-600"}`}
          onClick={() => handleVisibility("private")}
        >
          Private
        </button>
      </div>
      <div className="flex gap-4 justify-end">
        <button
          type="button"
          className="px-4 py-2 rounded bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-600"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="button"
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 font-semibold"
          onClick={onSave}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default InternshipForm;
