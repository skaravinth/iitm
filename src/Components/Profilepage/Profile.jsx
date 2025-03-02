import React, { useState, useEffect } from 'react';
import ben from '../../assets/profile.jpg';
import { MdMailOutline } from 'react-icons/md';
import { IoMdCall } from 'react-icons/io';
import { FiEdit } from 'react-icons/fi';

function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const userData = JSON.parse(localStorage.getItem("userData"));
    useEffect(() => {

        const userData = JSON.parse(localStorage.getItem("userData"));
        const storedName =  userData?.user.name;
        const storedEmail = userData?.user.email;
        const storedPhone =userData?.user.phone_number ;

        setName(storedName);
        setEmail(storedEmail);
        setPhone(storedPhone);
    }, []);

    const handleEditClick = () => {
        if (isEditing) {
            // Save updated values to localStorage
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('phone', phone);
        }
        setIsEditing(!isEditing);
    };

    return (
        <div className='w-md flex flex-col mx-auto rounded-lg shadow-md overflow-hidden p-6 bg-white'>
            <div className='flex flex-col items-center mb-6'>
                <div className='mb-3'>
                    <img
                        src={ben}
                        alt='Profile'
                        className='h-50 w-50 rounded-xl object-cover'
                    />
                </div>
                <div>
                    {isEditing ? (
                        <input
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='text-xl font-bold text-center border-b border-gray-400 outline-none'
                        />
                    ) : (
                        <div className='text-xl font-bold'>{name}</div>
                    )}
                </div>
            </div>
            <div className='space-y-3 mb-6 ml-16'>
                <div className='flex items-center'>
                    <MdMailOutline className='text-blue-500 mr-3 text-xl mt-2' />
                    {isEditing ? (
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='text-sm border-b border-gray-400 outline-none'
                        />
                    ) : (
                        <div className='text-sm'>{email}</div>
                    )}
                </div>
                <div className='flex items-center'>
                    <IoMdCall className='text-blue-500 mr-3 text-xl mt-3' />
                    {isEditing ? (
                        <input
                            type='text'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className='text-sm border-b border-gray-400 outline-none'
                        />
                    ) : (
                        <div className='text-sm'>{phone}</div>
                    )}
                </div>
            </div>
            <button
                onClick={handleEditClick}
                className='flex items-center justify-center w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600'
            >
                <FiEdit className='mr-2' /> {isEditing ? 'Save' : 'Edit'}
            </button>
        </div>
    );
}

export default Profile;
