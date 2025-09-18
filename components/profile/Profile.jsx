"use client"
import React, { useEffect, useState } from 'react'
import {  FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { CiLocationOn, CiStar } from "react-icons/ci";
import EditProfile from './EditProfile';
import { RxCross2 } from 'react-icons/rx';
import { MdModeEditOutline, MdOutlineMailOutline } from "react-icons/md";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { useRouter } from 'next/navigation';


const Profile = () => {
    const [showEditProfile, setShowEditProfile] = useState(false);
    const { user } = useSelector((state) => state.auth);
    const router = useRouter();
    
    useEffect(()=>{
        if(!user){
            router.replace('/');
        }

    },[user,router])

    return (
        <>
            <section className="relative pt-32 pb-20">
                {/* Top Background */}
                <div className="absolute top-0 left-0 w-full h-60 bg-gradient-to-b from-gray-900 via-black to-transparent z-0" />

                <div className="w-full max-w-6xl mx-auto px-6 md:px-8 relative z-10">
                    {/* Profile Picture */}
                    <div className="flex items-center justify-center sm:justify-start mb-8">
                        <div className="relative group w-32 h-32">
                            {user?.user?.profilePicture ? (
                                <>
                                    <img
                                        src={user?.user?.profilePicture}
                                        alt={user?.user?.fullName || "User Avatar"}
                                        className="w-32 h-32 border-4 border-white/40 rounded-full object-cover shadow-xl"
                                    />
                                    <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
                                        <MdModeEditOutline className="text-3xl text-white" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="w-32 h-32 border-4 border-white/40 rounded-full bg-gradient-to-tr from-gray-700 to-gray-900 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                                        {user?.user?.fullName?.slice(0, 2).toUpperCase() || "NA"}
                                    </div>
                                    <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
                                        <MdModeEditOutline className="text-3xl text-white" />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* User Info */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10 bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg">
                        <div>
                            <h3 className="font-manrope font-bold text-3xl text-white drop-shadow-md">
                                {user?.user?.fullName || "NA"}
                            </h3>
                            <p className="text-gray-300 flex items-center gap-2"><MdOutlineMailOutline />{user?.user?.email || "NA"}</p>
                            <p className="text-gray-300 flex items-center gap-2">
                                <HiOutlineDevicePhoneMobile  /> {user?.user?.phoneNumber || "NA"}
                            </p>
                            <p className="text-gray-300 flex items-center gap-2">
                                <CiLocationOn /> {user?.user?.address || "NA"}
                            </p>
                        </div>
                        <button
                            onClick={() => setShowEditProfile(true)}
                            className="flex items-center gap-2 px-5 py-3 cursor-pointer rounded-full bg-gradient-to-r from-black to-gray-800 text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            <FaRegEdit className="text-lg" />
                            Edit Profile
                        </button>   
                    </div>

                    {/* Interests */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md">
                        <div className="flex items-center gap-2 mb-4">
                            <CiStar className="text-2xl text-yellow-400" />
                            <h4 className="text-lg font-semibold text-white">Interests</h4>
                        </div>
                        <ul className="flex flex-wrap gap-3">
                            {user?.user?.interests?.length > 0 ? (
                                user.user.interests.map((int, i) => (
                                    <li key={i} className="px-5 py-2 rounded-full bg-gradient-to-r from-white to-gray-200 text-gray-800 font-medium shadow">
                                        {int.label || int}
                                    </li>
                                ))
                            ) : (
                                <li className="text-gray-400 italic">No interests added</li>
                            )}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Edit Modal */}
            {showEditProfile && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-2xl shadow-xl relative w-full max-w-lg">
                        <button
                            onClick={() => setShowEditProfile(false)}
                            className="absolute top-1 right-1 cursor-pointer text-gray-500 hover:text-gray-800 transition"
                        >
                            <RxCross2 className="text-2xl" />
                        </button>
                        <EditProfile onClose={() => setShowEditProfile(false)} user={user?.user} />
                    </div>
                </div>
            )}
        </>
    )
}

export default Profile
