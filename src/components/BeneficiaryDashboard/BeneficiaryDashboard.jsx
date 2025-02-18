import React, { useState } from 'react';
import './BeneficiaryDashboard.css';

function BeneficiaryDashboard() {
  const [subsidies, setSubsidies] = useState([200, 150, 300]); // Dummy data for subsidies
  const [applications, setApplications] = useState([
    { id: 1, schemeName: 'Education Subsidy', description: 'Support for tuition fees' },
    { id: 2, schemeName: 'Housing Assistance', description: 'Subsidy for housing costs' },
  ]); // Dummy data for applications
  const [payments, setPayments] = useState([
    { amount: 200, transactionId: 'TXN1234', date: '01/01/2025' },
    { amount: 150, transactionId: 'TXN1235', date: '02/01/2025' },
  ]); // Dummy data for payments
  const [notification, setNotification] = useState('');
  const [newApplication, setNewApplication] = useState({
    schemeName: '',
    description: '',
  });

  const handleApplyForScheme = () => {
    if (!newApplication.schemeName || !newApplication.description) {
      setNotification('Please fill in all fields to apply.');
      return;
    }
    setApplications([...applications, { ...newApplication, id: applications.length + 1 }]);
    setNewApplication({ schemeName: '', description: '' });
    setNotification('Application submitted successfully!');
  };

  const handleReceiveSubsidy = (amount) => {
    const transactionId = `TXN${Math.floor(Math.random() * 10000)}`;
    const date = new Date().toLocaleDateString();
    setPayments([...payments, { amount, transactionId, date }]);
    setSubsidies([...subsidies, amount]);
    setNotification(`Subsidy of $${amount} received.`);
  };

  return (
    <div className="dashboard-container benediciary-dashboard">
      <h1 className="dashboard-title">Beneficiary Dashboard</h1>

      <div className="dashboard-overview">
        <h2 className="section-title">Dashboard Overview</h2>
        <p>Total Received Subsidies: ${subsidies.reduce((total, amount) => total + amount, 0)}</p>
        <p>Total Pending Applications: {applications.length}</p>
      </div>

      <div className="application-section">
        <h2 className="section-title">Apply for Scheme</h2>
        {notification && <div className="notification">{notification}</div>}
        <input
          type="text"
          placeholder="Scheme Name"
          value={newApplication.schemeName}
          onChange={(e) => setNewApplication({ ...newApplication, schemeName: e.target.value })}
          className="input-field"
        />
        <textarea
          placeholder="Description"
          value={newApplication.description}
          onChange={(e) => setNewApplication({ ...newApplication, description: e.target.value })}
          className="input-field textarea-field"
        />
        <button onClick={handleApplyForScheme} className="submit-button">
          Apply
        </button>
      </div>

      <div className="payments-section">
        <h2 className="section-title">View Payments</h2>
        <table className="payments-table">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index}>
                <td>{payment.transactionId}</td>
                <td>${payment.amount}</td>
                <td>{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="notifications-section">
        <h2 className="section-title">Notifications</h2>
        <ul className="notifications-list">
          {applications.map((app) => (
            <li key={app.id}>{app.schemeName}: Application under review</li>
          ))}
          {subsidies.length > 0 && <li>Last subsidy received: ${subsidies[subsidies.length - 1]}</li>}
        </ul>
      </div>
    </div>
  );
}

export default BeneficiaryDashboard;
