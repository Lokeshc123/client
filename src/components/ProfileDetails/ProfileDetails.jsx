import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import { updateUser } from '../../helper/sendData';

const ProfileDetails = ({ user }) => {

    const updateProfile = async () => {
        try {
            const data = {
                name: name,
                email: email,
                avatar: images,
            }
            const response = await updateUser(data);
            console.log(response);



        }
        catch (error) {
            console.log(error);
        }
    }
    const [name, setName] = useState(user?.name || "Login Please"); // Assuming name is in user object
    const [email, setEmail] = useState(user?.email || "Login Please"); // Assuming email is in user object
    const [images, setImages] = useState(); // Assuming avatar URL is in user object
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');



    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };
    const handleImage = (e) => {
        const file = e.target.files[0];
        setFileToBase(file);
        console.log(file);
    }

    const setFileToBase = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImages(reader.result);
        }

    }

    // Implement password change logic here (e.g., call an API)

    return (
        <div className="flex flex-col space-y-4">
            <div className="flex items-center mb-4">
                <img src={user?.avatar?.url} alt="User avatar" className="w-32 h-32 rounded-full object-cover" />
                <label htmlFor="avatar-upload" className="bg-transparent text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-2 ml-4">
                    Change Avatar
                </label>
                <input
                    type="file"
                    id="avatar-upload"
                    accept="image/*"
                    hidden
                    onChange={handleImage}
                />
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="font-bold text-gray-700">
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary"
                    value={name}
                    onChange={(e) => setName(e.target.value)}

                />
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="font-bold text-gray-700">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                />
            </div>

            <Link
                onClick={updateProfile}
                className="bg-primary py-2 px-4 rounded-md text-center text-white hover:bg-secondary transition-colors duration-200 inline-block"
            >
                Save Changes
            </Link>
        </div>
    );
};

export default ProfileDetails;
