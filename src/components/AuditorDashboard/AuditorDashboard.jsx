import React, { useState } from 'react';
import './AuditorDashboard.css'

function AuditorDashboard() {
  const [schemes, setSchemes] = useState([
    { id: 1, name: 'Scheme A', description: 'Description of Scheme A', subsidyAmount: 1000 },
    { id: 2, name: 'Scheme B', description: 'Description of Scheme B', subsidyAmount: 2000 },
    // Add more schemes as needed
  ]);

  const [transactions, setTransactions] = useState([
    { id: 1, schemeId: 1, beneficiaryId: 101, amount: 500, date: '2025-01-01', transactionHash: '0x123abc' },
    { id: 2, schemeId: 2, beneficiaryId: 102, amount: 1500, date: '2025-01-02', transactionHash: '0x456def' },
    // Add more transactions as needed
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const results = transactions.filter(
      (transaction) =>
        transaction.schemeId.toString().includes(query) ||
        transaction.beneficiaryId.toString().includes(query) ||
        transaction.date.includes(query)
    );
    setFilteredTransactions(results);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setFilteredTransactions(transactions);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Auditor Dashboard</h1>

      <h2 className="text-2xl font-semibold mb-4">Overview</h2>
      <p>Total Schemes: {schemes.length}</p>
      <p>Total Transactions: {transactions.length}</p>
      <p>Filtered Transactions: {filteredTransactions.length}</p> {/* Display filtered transaction count */}

      <h2 className="text-2xl font-semibold mb-4">View Schemes</h2>
      <ul className="list-disc pl-5 mb-4">
        {schemes.map((scheme) => (
          <li key={scheme.id}>
            <strong>{scheme.name}</strong>: {scheme.description} (Subsidy Amount: Rs.{scheme.subsidyAmount})
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Transaction Tracker</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Scheme ID, Beneficiary ID, or Date"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded mb-2 w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2"
        >
          Search
        </button>
        <button
          onClick={handleClearSearch}
          className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400"
        >
          Clear
        </button>
      </div>

      <table className="min-w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Transaction ID</th>
            <th className="border border-gray-300 p-2">Scheme ID</th>
            <th className="border border-gray-300 p-2">Beneficiary ID</th>
            <th className="border border-gray-300 p-2">Amount</th>
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Transaction Hash</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="border border-gray-300 p-2">{transaction.id}</td>
              <td className="border border-gray-300 p-2">{transaction.schemeId}</td>
              <td className="border border-gray-300 p-2">{transaction.beneficiaryId}</td>
              <td className="border border-gray-300 p-2">Rs.{transaction.amount}</td>
              <td className="border border-gray-300 p-2">{transaction.date}</td>
              <td className="border border-gray-300 p-2">{transaction.transactionHash}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mb-4">Blockchain Simulation</h2>
      <div className="border border-gray-300 p-4 mb-4">
        <h3 className="font-semibold">Transaction Hashes:</h3>
        {transactions.map((transaction) => (
          <div key={transaction.id}>
            <strong>Transaction ID: {transaction.id}</strong> - Hash: {transaction.transactionHash}
          </div>
        ))}
        <h3 className="font-semibold mt-4">Simplified Merkle Proof:</h3>
        <p>This section would include a demonstration of how Merkle proofs work in a real application.</p>
      </div>
    </div>
  );
}

export default AuditorDashboard;
