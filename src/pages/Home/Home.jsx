import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './Home.css'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => navigate('/registration');
  const handleLearnMore = () => navigate('/about');
  const handleApply = (scheme) => navigate(`/apply/${scheme}`);

  const data = {
    labels: ['E-Thela Sahaayata Yojana', 'Pradhan Mantri Kaushal Vikas Yojana', 'Gatidhara Scheme', 'Shilpi Samridhi Yojana'],
    datasets: [
      {
        label: 'Total Subsidy Amount Distributed',
        data: [3000, 1500, 4500, 2500],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: { y: { beginAtZero: true } },
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <section className="hero text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Ensuring Transparent and Trustworthy Subsidy Distribution</h1>
        <p className="text-lg text-gray-700 mb-6">
          SubsidyChain revolutionizes the way subsidies are distributed, ensuring transparency and accountability.
        </p>
      </section>

      <div className="text-center my-10">
        <button onClick={handleGetStarted} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition mr-4">Get Started</button>
        <button onClick={handleLearnMore} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition">Learn More</button>
      </div>

      <section className="features mb-10">
        <h2 className="text-3xl font-bold text-center mb-6">Key Features</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <li className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Transparency</h3>
            <p className="text-gray-700">All transactions are recorded on a public ledger, ensuring transparency.</p>
          </li>
          <li className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Security</h3>
            <p className="text-gray-700">Built on blockchain technology to protect against fraud and unauthorized access.</p>
          </li>
          <li className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Ease of Use</h3>
            <p className="text-gray-700">User-friendly interface designed for all levels of users.</p>
          </li>
        </ul>
      </section>

      <section className="statistics mb-10">
        <h2 className="text-3xl font-bold text-center mb-6">Statistics Overview</h2>
        <div className="text-center mb-6">
          <Bar data={data} options={options} />
        </div>
        <p className="text-lg text-gray-700 text-center mb-4">The chart above illustrates the total subsidy amount distributed across various schemes.</p>
      </section>

      <section className="schemes mb-10">
        <h2 className="text-3xl font-bold text-center mb-6">Available Subsidy Schemes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['E-Thela Sahaayata Yojana', 'Gatidhara Scheme', 'Shilpi Samridhi Yojana'].map((scheme) => (
            <div key={scheme} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{scheme}</h3>
              <p className="text-gray-700 mb-4">Apply now to benefit from this government subsidy program.</p>
              <button onClick={() => handleApply(scheme)} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials mb-10">
        <h2 className="text-3xl font-bold text-center mb-6">User Testimonials</h2>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <p className="text-gray-700 mb-2">"SubsidyChain has completely transformed the way subsidies are handled. The transparency and security are unmatched!"</p>
          <cite className="block font-semibold">- John Doe, Beneficiary</cite>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <p className="text-gray-700 mb-2">"The ease of use and reliability of SubsidyChain has made my job as an auditor so much simpler!"</p>
          <cite className="block font-semibold">- Jane Smith, Auditor</cite>
        </div>
      </section>
    </div>
  );
}

export default Home;