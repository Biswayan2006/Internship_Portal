import React, { useState, ChangeEvent } from "react";

interface AdminProfileProps {
  profile: {
    name: string;
    bio: string;
    avatar: string;
  };
  onProfileChange: (profile: { name: string; bio: string; avatar: string }) => void;
}

const AdminProfile: React.FC<AdminProfileProps> = ({ profile, onProfileChange }) => {
  const [editing, setEditing] = useState<{ name: boolean; bio: boolean }>({ name: false, bio: false });
  const [localProfile, setLocalProfile] = useState(profile);
  const [avatarUploading, setAvatarUploading] = useState(false);

  const handleEdit = (field: "name" | "bio") => setEditing((e) => ({ ...e, [field]: true }));
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLocalProfile({ ...localProfile, [e.target.name]: e.target.value });
  };
  const handleSave = (field: "name" | "bio") => {
    setEditing((e) => ({ ...e, [field]: false }));
    onProfileChange(localProfile);
  };
  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatarUploading(true);
      // Simulate upload
      setTimeout(() => {
        setAvatarUploading(false);
        setLocalProfile({ ...localProfile, avatar: URL.createObjectURL(e.target.files![0]) });
        onProfileChange({ ...localProfile, avatar: URL.createObjectURL(e.target.files![0]) });
      }, 1200);
    }
  };

  return (
    <div className="flex flex-col items-center bg-white dark:bg-neutral-900 rounded-xl shadow p-6 border border-neutral-200 dark:border-neutral-800 max-w-md mx-auto mb-8">
      <div className="relative group mb-4">
        <img
          src={localProfile.avatar}
          alt={localProfile.name}
          className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
        />
        <label className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-1 cursor-pointer shadow-lg hover:bg-blue-700 transition-colors" title="Change profile picture">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleAvatarChange}
            disabled={avatarUploading}
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13h3l8-8a2.828 2.828 0 00-4-4l-8 8v3zm0 0v3h3" /></svg>
        </label>
        {avatarUploading && <div className="absolute inset-0 bg-white/70 flex items-center justify-center rounded-full">Uploading...</div>}
      </div>
      <div className="w-full text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          {editing.name ? (
            <>
              <input
                name="name"
                value={localProfile.name}
                onChange={handleChange}
                className="text-xl font-bold text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 rounded px-2 py-1 mr-2"
              />
              <button onClick={() => handleSave("name")}
                className="text-blue-600 hover:underline text-sm">Save</button>
            </>
          ) : (
            <>
              <span className="text-xl font-bold text-neutral-900 dark:text-neutral-100">{localProfile.name}</span>
              <button onClick={() => handleEdit("name")}
                className="ml-2 text-neutral-400 hover:text-blue-600" title="Edit name">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13h3l8-8a2.828 2.828 0 00-4-4l-8 8v3zm0 0v3h3" /></svg>
              </button>
            </>
          )}
        </div>
        <div className="flex items-center justify-center gap-2">
          {editing.bio ? (
            <>
              <textarea
                name="bio"
                value={localProfile.bio}
                onChange={handleChange}
                className="text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 rounded px-2 py-1 mr-2 min-h-[40px]"
                rows={2}
              />
              <button onClick={() => handleSave("bio")}
                className="text-blue-600 hover:underline text-sm">Save</button>
            </>
          ) : (
            <>
              <span className="text-neutral-700 dark:text-neutral-300">{localProfile.bio}</span>
              <button onClick={() => handleEdit("bio")}
                className="ml-2 text-neutral-400 hover:text-blue-600" title="Edit bio">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13h3l8-8a2.828 2.828 0 00-4-4l-8 8v3zm0 0v3h3" /></svg>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
