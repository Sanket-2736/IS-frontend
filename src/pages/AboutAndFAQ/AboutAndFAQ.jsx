import React, { useState } from 'react';
import './About.css';

function AboutAndFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl my-25 about-container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gradient">About & FAQ</h1>

      <section className="mb-8 p-6 border border-gray-300 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105">
        <h2 className="text-3xl font-semibold mb-4">About SubsidyChain</h2>
        <p>
          SubsidyChain is a cutting-edge platform that leverages blockchain technology to ensure transparency and prevent fraud in subsidy distribution. By utilizing a decentralized ledger, every transaction is securely recorded and verified, providing an immutable history of all fund allocations. This transparency builds trust among beneficiaries and government entities, ensuring that funds reach their intended recipients without manipulation.
        </p>
      </section>

      <section className="mb-8 p-6 border border-gray-300 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105">
        <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
        <ol className="list-decimal list-inside">
          <li>
            <strong>Application Submission:</strong> Beneficiaries apply for various subsidy schemes based on their eligibility criteria.
          </li>
          <li>
            <strong>Verification Process:</strong> Government officials review and verify applications to ensure they meet the necessary criteria.
          </li>
          <li>
            <strong>Fund Allocation:</strong> Once approved, funds are allocated to the beneficiaries’ accounts through a secure transaction on the blockchain.
          </li>
          <li>
            <strong>Transaction Record:</strong> Each fund distribution is recorded on the blockchain, creating a transparent and auditable history of transactions.
          </li>
          <li>
            <strong>Notifications:</strong> Beneficiaries receive notifications regarding their application status and fund disbursement.
          </li>
        </ol>
      </section>

      <section className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105">
        <h2 className="text-3xl font-semibold mb-4">FAQ</h2>
        {[
          {
            question: "1. How does SubsidyChain ensure security?",
            answer: "SubsidyChain utilizes advanced encryption techniques and decentralized storage to secure transaction data, making it nearly impossible for unauthorized parties to alter or access sensitive information."
          },
          {
            question: "2. What is blockchain technology?",
            answer: "Blockchain technology is a distributed ledger system that records transactions across multiple computers, ensuring that the information is transparent, secure, and immutable. Each block in the chain contains a set of transactions that are cryptographically linked to the previous block."
          },
          {
            question: "3. How can I trust this system?",
            answer: "The trust in SubsidyChain comes from its transparent nature. All transactions are recorded on the blockchain, allowing any stakeholder to audit the fund distribution process independently. Additionally, regular audits by third-party organizations enhance credibility."
          }
        ].map((item, index) => (
          <div key={index} className="border-b border-gray-200 mb-4 pb-2">
            <h3
              className="font-semibold cursor-pointer flex items-center justify-between"
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <span className={`ml-2 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                &#9662; {/* Down caret symbol */}
              </span>
            </h3>
            {openIndex === index && (
              <p className="mt-2 transition-opacity duration-300 opacity-100">{item.answer}</p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

export default AboutAndFAQ;
