import React, { useState } from 'react';
import './GovernmentDashboard.css'; // Import the CSS file

function GovernmentDashboard() {
  const [schemes, setSchemes] = useState([
    { id: 1, name: 'Skill Development Scheme', eligibility: 'Unemployed Youth', amount: 5000, duration: '6 months' },
    { id: 2, name: 'Health Insurance Scheme', eligibility: 'Low-income Families', amount: 3000, duration: '1 year' },
  ]);
  
  const [beneficiaries, setBeneficiaries] = useState([
    { id: 1, name: 'John Doe', scheme: 'Skill Development Scheme' },
    { id: 2, name: 'Jane Smith', scheme: 'Health Insurance Scheme' },
  ]);
  
  const [transactions, setTransactions] = useState([]);
  const [newScheme, setNewScheme] = useState({
    name: '',
    eligibility: '',
    amount: '',
    duration: '',
  });
  
  const [fundAmount, setFundAmount] = useState(0);
  const [error, setError] = useState('');

  const handleCreateScheme = () => {
    if (!newScheme.name || !newScheme.eligibility || !newScheme.amount || !newScheme.duration) {
      setError('Please fill in all fields.');
      return;
    }
    setSchemes([...schemes, { ...newScheme, id: schemes.length + 1 }]);
    setNewScheme({ name: '', eligibility: '', amount: '', duration: '' });
    setError('');
  };

  const handleDisburseFunds = () => {
    if (beneficiaries.length === 0) {
      setError('No beneficiaries to disburse funds.');
      return;
    }
    setTransactions([...transactions, { amount: fundAmount, timestamp: new Date().toLocaleString() }]);
    setFundAmount(0);
    setError('');
  };

  const totalAllocated = transactions.reduce((total, transaction) => total + transaction.amount, 0);

  return (
    <div className="dashboard-container">
      <h1 className="title">Government Dashboard</h1>
      
      <h2 className="section-title">Dashboard Overview</h2>
      <div className="overview">
        <p>Total Schemes: {schemes.length}</p>
        <p>Total Beneficiaries: {beneficiaries.length}</p>
        <p>Total Funds Allocated: Rs.{totalAllocated}</p>
      </div>

      <h2 className="section-title">Create Scheme</h2>
      {error && <div className="error-message">{error}</div>}
      <div className="form-section">
        <input
          type="text"
          placeholder="Scheme Name"
          value={newScheme.name}
          onChange={(e) => setNewScheme({ ...newScheme, name: e.target.value })}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Eligibility Criteria"
          value={newScheme.eligibility}
          onChange={(e) => setNewScheme({ ...newScheme, eligibility: e.target.value })}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Subsidy Amount"
          value={newScheme.amount}
          onChange={(e) => setNewScheme({ ...newScheme, amount: e.target.value })}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Duration"
          value={newScheme.duration}
          onChange={(e) => setNewScheme({ ...newScheme, duration: e.target.value })}
          className="input-field"
        />
        <button onClick={handleCreateScheme} className="submit-button">
          Create Scheme
        </button>
      </div>

      <h2 className="section-title">Disburse Funds</h2>
      <div className="form-section">
        <input
          type="number"
          placeholder="Fund Amount"
          value={fundAmount}
          onChange={(e) => setFundAmount(e.target.value)}
          className="input-field"
        />
        <button onClick={handleDisburseFunds} className="submit-button">
          Disburse Funds
        </button>
      </div>

      <h2 className="section-title">View Transactions</h2>
      <ul className="transaction-list">
        {transactions.map((transaction, index) => (
          <li key={index} className="transaction-item">
            {transaction.timestamp}: Rs.{transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GovernmentDashboard;
