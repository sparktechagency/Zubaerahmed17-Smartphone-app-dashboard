import React from 'react';
import { FaEye } from 'react-icons/fa'; // Importing eye icon for "view"
import { Modal } from 'antd';  // Modal for showing the payment request details

const ReportsUsers = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);  // Store selected request data

  // Sample data for the table
  const paymentRequests = [
    {
      id: 1,
      teamLeadName: "John Doe",
      teamName: "Sales Team",
      mainBalance: "$3000",
      withdrawalBalance: "$900",
      availableBalance: "$1000"
    },
    {
      id: 2,
      teamLeadName: "Jane Smith",
      teamName: "Marketing Team",
      mainBalance: "$5000",
      withdrawalBalance: "$1200",
      availableBalance: "$1500"
    },
    {
      id: 3,
      teamLeadName: "Alice Johnson",
      teamName: "Tech Team",
      mainBalance: "$4500",
      withdrawalBalance: "$1000",
      availableBalance: "$1300"
    }
  ];

  // Show modal with selected request details
  const showModal = (request) => {
    setSelectedRequest(request);
    setIsModalVisible(true);
  };

  // Close modal
  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedRequest(null);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-4">Payment Request</h1>

      {/* Payment Request Table */}
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead className="bg-[#58d6ff] text-white">
          <tr>
            <th className="py-3 px-5 text-left border-b">#SI</th>
            <th className="py-3 px-5 text-left border-b">Team Lead Name</th>
            <th className="py-3 px-5 text-left border-b">Team Name</th>
            <th className="py-3 px-5 text-left border-b">Main Balance</th>
            <th className="py-3 px-5 text-left border-b">Withdrawal Balance</th>
            <th className="py-3 px-5 text-left border-b">Available Balance</th>
            <th className="py-3 px-5 text-left border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {paymentRequests.map((request, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="py-3 px-5">{request.id}</td>
              <td className="py-3 px-5">{request.teamLeadName}</td>
              <td className="py-3 px-5">{request.teamName}</td>
              <td className="py-3 px-5">{request.mainBalance}</td>
              <td className="py-3 px-5">{request.withdrawalBalance}</td>
              <td className="py-3 px-5">{request.availableBalance}</td>
              <td className="py-3 px-5">
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => showModal(request)}  // Show modal with selected request details
                >
                  <FaEye className="text-xl" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for displaying withdrawal request details */}
      <Modal
        title="Withdrawal Request"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={600}
      >
        {selectedRequest && (
          <div className="text-black">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-semibold">Withdrawal Balance:</p>
              <p>{selectedRequest.withdrawalBalance}</p>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <p className="font-semibold">Main Balance:</p>
              <p>{selectedRequest.mainBalance}</p>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <p className="font-semibold">Available Balance:</p>
              <p>{selectedRequest.availableBalance}</p>
            </div>

            {/* Approve/Decline buttons */}
            <div className="flex justify-between gap-4">
              <button className="w-full py-2 bg-green-500 text-white rounded-md">
                Approve
              </button>
              <button className="w-full py-2 bg-red-500 text-white rounded-md">
                Decline
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ReportsUsers;
