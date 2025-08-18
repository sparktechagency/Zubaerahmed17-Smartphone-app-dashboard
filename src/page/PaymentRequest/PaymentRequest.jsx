import React, { useState } from 'react';
import { Modal, Button } from 'antd';  // Import Ant Design components
import { FaEye } from 'react-icons/fa';  // For "View" icon

const PaymentRequest = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState(null); // Store selected payment request for modal

    // Sample data for payment requests
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

    // Close the modal
    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedRequest(null);
    };

    // Modal action: Approve or Decline
    const handleApproval = (status) => {
        // Logic to handle approval or decline (e.g., update status in the database)
        console.log(`Request ${status}:`, selectedRequest);
        setIsModalVisible(false); // Close modal after action
    };

    return (
        <div className="py-5 px-3">
            <h1 className="text-2xl font-semibold mb-4">Payment Request List</h1>

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
                                    onClick={() => showModal(request)} // Show modal with request details
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
                            <Button
                                className="w-full py-2 bg-green-500 text-white"
                                onClick={() => handleApproval("Approved")}
                            >
                                Approve
                            </Button>
                            <Button
                                className="w-full py-2 bg-red-500 text-white"
                                onClick={() => handleApproval("Declined")}
                            >
                                Decline
                            </Button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default PaymentRequest;
