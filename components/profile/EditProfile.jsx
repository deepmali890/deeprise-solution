"use client"
import { updateProfile } from '@/redux/slices/auth.slice';
import React, { useState } from 'react'
import { MdEdit } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

const options = [
  { value: 'website-development', label: 'Website Development' },
  { value: 'app-development', label: 'Mobile App Development' },
  { value: 'seo', label: 'SEO (Search Engine Optimization)' },
  { value: 'digital-marketing', label: 'Digital Marketing' },
  { value: 'ecommerce', label: 'E-commerce Solutions' },
  { value: 'branding', label: 'Branding & Logo Design' },
  { value: 'ui-ux', label: 'UI/UX Design' },
  { value: 'content-writing', label: 'Content Writing' },
  { value: 'social-media', label: 'Social Media Management' },
  { value: 'custom-software', label: 'Custom Software Development' },
];


const EditProfile = ({ onClose, user }) => {
  const [selectedOption, setSelectedOption] = useState(
    user?.interests?.map((i) => ({ value: i, label: i })) || []
  );
  const [previewImage, setPreviewImage] = useState(user?.profilePicture || null);
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fullName: user?.fullName || '',
    phoneNumber: user?.phoneNumber || '',
    address: user?.address || '',
    profilePicture: user?.profilePicture || '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profilePicture: file });
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('phoneNumber', formData.phoneNumber);
    data.append('address', formData.address);
    if (formData.profilePicture) {
      data.append('profilePicture', formData.profilePicture);
    }
    selectedOption.forEach((i) => data.append('interests', i.value));

    try {
      await dispatch(updateProfile(data)).unwrap();
      onClose();
    } catch (error) {
      console.error("Update profile failed:", error);
    }
  };

  return (
    <div className="relative w-full max-w-2xl bg-white border border-slate-200 shadow-lg rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-black via-gray-800 to-gray-900 p-5 text-center">
        <h2 className="text-2xl font-semibold text-white flex items-center justify-center gap-2">
          <MdEdit className="text-white" /> Edit Profile
        </h2>
        <p className="text-sm text-gray-300 mt-1">Update your details & keep your profile fresh ✨</p>
      </div>

      {/* Form */}
      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Profile Picture */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Profile Picture
            </label>
            {previewImage && (
              <div className="mb-3 relative w-24 h-24">
                <img
                  src={previewImage}
                  alt="Profile Preview"
                  className="w-24 h-24 rounded-full object-cover border"
                />
                <label
                  htmlFor="profilePicture"
                  className="absolute bottom-0 right-0 bg-black rounded-full shadow p-1 cursor-pointer"
                >
                  <MdEdit className="text-white text-xl" />
                </label>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              name="profilePicture"
              onChange={handleFileChange}
              className="hidden"
              id="profilePicture"
            />
          </div>

          {/* Full Name & Phone - Side by Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-sm text-slate-600">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-black focus:ring-1 focus:ring-black"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm text-slate-600">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-black focus:ring-1 focus:ring-black"
                placeholder="+1 (123) 456-7890"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block mb-2 text-sm text-slate-600">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-black focus:ring-1 focus:ring-black"
              placeholder="123 Main St, Anytown, USA"
            />
          </div>

          {/* Interests */}
          <div>
            <label className="block mb-2 text-sm text-slate-600">Interests</label>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
              className="text-black"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-black py-2 px-4 text-sm font-medium text-white shadow-md transition-all hover:bg-gray-900 focus:bg-gray-800 active:bg-gray-700"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditProfile;
