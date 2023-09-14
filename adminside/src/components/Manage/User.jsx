import React, { useState, useEffect } from "react";
import { HiPencil } from "react-icons/hi";
import { Link } from "react-router-dom";
import axios from "axios";
import { MdDelete } from "react-icons/md";

const User = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get("http://localhost:3000/user/getall"); // Update the URL here
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUserData();
  }, []);

  const handleDeleteClick = async (userId) => {
    if (window.confirm("Are you sure you want to delete this User?")) {
      try {
        await axios.delete(`http://localhost:3000/user/${userId}`);
        fetchData(); // Update the table after deletion
      } catch (error) {
        console.error("Error deleting User:", error);
      }
    }
  };

  
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between py-4">
        <h1 className="text-2xl font-bold">Manage User</h1>
        <Link to="/add-user" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
          Add new user
        </Link>
      </div>
      <table className="min-w-full border-collapse border border-gray-800">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="px-4 py-2">NAME</th>
            <th className="px-4 py-2">MOBILE NUMBER</th>
            <th className="px-4 py-2">STATUS</th>
            <th className="px-4 py-2">EMAIL</th>
            <th className="px-4 py-2">REG. ON</th>
            <th className="px-4 py-2">EDIT</th>
            <th className="px-4 py-2">ACTION</th>
            <th className="px-4 py-2">PERMISSIONS</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.mobileNumber}</td>
              <td className="border px-4 py-2">{user.status}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.registeredOn}</td>
              <td className="border px-4 py-2">
                <Link to={`/edit-user/${user._id}`} className="flex items-center text-blue-500 hover:text-blue-900">
                  <HiPencil className="mr-1" /> Edit
                </Link>
                <button onClick={() => handleDeleteClick(user._id)} className="flex items-center px-2 py-5 rounded-md text-red-500 hover:text-blue-900">
                  <MdDelete className="mr-1" />
                  Delete
                </button>
              </td>

              <td className="border px-4 py-2">-</td>
              <td className="border px-4 py-2">{user.permissions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
