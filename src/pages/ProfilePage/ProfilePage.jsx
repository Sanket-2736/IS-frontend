import React from 'react';

const ProfilePage = () => {
  const userDetails = {
    name: 'John Doe',
    username: 'johndoe123',
    email: 'john.doe@example.com',
    dob: '1995-05-20',
    language: 'English',
    phone: '123-456-7890',
    country: 'USA',
  };

  const savedPages = [
    { title: 'React Basics', url: 'https://example.com/react-basics' },
    { title: 'Tailwind CSS Guide', url: 'https://example.com/tailwind-css-guide' },
    { title: 'JavaScript Best Practices', url: 'https://example.com/js-best-practices' },
  ];

  const browsingHistory = [
    { title: 'Vue.js Tutorial', date: '2024-10-21', url: 'https://example.com/vue-tutorial' },
    { title: 'CSS Grid vs Flexbox', date: '2024-10-20', url: 'https://example.com/css-grid-flexbox' },
    { title: 'Understanding Async/Await', date: '2024-10-19', url: 'https://example.com/async-await' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-purple-300 p-6">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-5xl">
        {/* User Profile Section */}
        <div className="mb-12 flex flex-col items-center">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-2 rounded-full shadow-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white"
            />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mt-6">{userDetails.name}</h2>
        </div>

        {/* User Details Table */}
        <div className="overflow-x-auto mb-12">
          <h3 className="text-3xl font-bold text-gray-700 mb-6">User Details</h3>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="py-3 px-6 text-left">Field</th>
                <th className="py-3 px-6 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-6 text-gray-600">Username</td>
                <td className="py-3 px-6">{userDetails.username}</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="py-3 px-6 text-gray-600">Email</td>
                <td className="py-3 px-6">{userDetails.email}</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-6 text-gray-600">Date of Birth</td>
                <td className="py-3 px-6">{userDetails.dob}</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="py-3 px-6 text-gray-600">Language</td>
                <td className="py-3 px-6">{userDetails.language}</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-6 text-gray-600">Phone</td>
                <td className="py-3 px-6">{userDetails.phone}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-6 text-gray-600">Country</td>
                <td className="py-3 px-6">{userDetails.country}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Saved Pages Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-700 mb-4">Saved Pages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedPages.map((page, index) => (
              <a
                key={index}
                href={page.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-lg text-white hover:scale-105 transform transition duration-300"
              >
                <h4 className="text-xl font-semibold mb-2">{page.title}</h4>
                <p className="text-sm">Visit page</p>
              </a>
            ))}
          </div>
        </div>

        {/* Browsing History Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-700 mb-4">Browsing History</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {browsingHistory.map((history, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-pink-400 to-red-500 p-6 rounded-lg shadow-lg text-white hover:scale-105 transform transition duration-300"
              >
                <p className="text-lg font-semibold mb-1">{history.title}</p>
                <p className="text-sm">{history.date}</p>
                <a
                  href={history.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline hover:text-white"
                >
                  View page
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
