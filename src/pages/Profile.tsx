
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const Profile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  
  // Handle invalid userIds
  React.useEffect(() => {
    // If userId is not a number, redirect to 404
    if (userId && isNaN(Number(userId))) {
      navigate('/not-found');
    }
  }, [userId, navigate]);
  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800">Travel Website</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="text-gray-800 hover:text-blue-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link to={`/profile/${userId}`} className="text-gray-800 hover:text-blue-600 transition-colors">Profile</Link>
              </li>
            </ul>
          </nav>
        </header>
        
        <main>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">User Profile</h2>
            <p className="text-gray-600 mb-2">User ID: {userId}</p>
            <p className="text-gray-600 mb-2">Name: Sample User</p>
            <p className="text-gray-600 mb-2">Email: user@example.com</p>
            <p className="text-gray-600 mb-2">Favorite Destinations: Paris, Tokyo, New York</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
