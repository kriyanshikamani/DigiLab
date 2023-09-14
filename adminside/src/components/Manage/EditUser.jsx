import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const { userId } = useParams();
  const [userid, setUserId] = useState(null);
  const [editeduserName, setEditedUserName] = useState('');
  const [editedMobileNumber, setEditedMobileNumber] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log("user ID:", userId);
    if (userId) {
      // Fetch the testcategory data for editing
      fetchUserData();
    }
  }, [userId]);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/user/${userId}`);
      const updatedUser = response?.data;
      setEditedUserName(updatedUser.name); // Set the edited category name
      setEditedMobileNumber(updatedUser.mobileNumber);
      setEditedEmail(updatedUser.email);
      setUserId(updatedUser);
    } catch (error) {
      console.error("Error fetching testcategory data:", error);
    }
  };

  const handleUpdateClick = async () => {
    try {
      await axios.put(`http://localhost:3000/user/${userId}`, {
        name: editeduserName,
        email: editedEmail,
        mobileNumber: editedMobileNumber,
      });
      alert("User updated successfully.");
      navigate("/user");
      // Handle success (e.g., show a success message or navigate back)
    } catch (error) {
      console.error("Error updating user:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="container bg-white p-6">
      <div className="container mx-auto mt-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Update User</h1>
        <div className="mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={editeduserName}
                onChange={(e) => setEditedUserName(e.target.value)}
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>

            <div className="col-span-1">
              <input
                type="text"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={editedMobileNumber}
                onChange={(e) => setEditedMobileNumber(e.target.value)}
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>
            <div className="col-span-1">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={editedEmail}
                onChange={(e) => setEditedEmail(e.target.value)}
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleUpdateClick}
        >
          Save
        </button>
        <ToastContainer className="mt-4 " />
      </div>
    </div>
  );
};

export default EditUser;
