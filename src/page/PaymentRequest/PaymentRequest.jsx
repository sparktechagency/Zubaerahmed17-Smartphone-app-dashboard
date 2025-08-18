import React, { useState } from 'react';
import { Modal, Button } from 'antd';  // Import Ant Design components
import { FaEye } from 'react-icons/fa';  // For "View" icon
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';

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

    const [showFilter, setShowFilter] = useState(false);
    const showFilterItem = () => {
        setShowFilter(!showFilter);
    };

    return (
        <div className="py-5 px-3">

            <div className="flex relative items-center justify-between mb-5">
                <h1 className="lg:text-4xl text-2xl font-semibold">Payment Request List</h1>
                <button
                    onClick={showFilterItem}
                    className="flex items-center text-xl gap-2 bg-[#59d8ff] px-3 py-2 rounded-md text-white hover:bg-[#2cb2d6]"
                >
                    Filter
                    <HiAdjustmentsHorizontal className="text-2xl" />
                </button>
                {showFilter && (
                    <div className="absolute z-20 right-0 top-12 mt-2 p-4 w-64 bg-white rounded-lg shadow-lg">
                        <div className="flex flex-col gap-4">
                            <div>
                                <label htmlFor="month" className="text-sm font-semibold text-gray-700">Select Month</label>
                                <select id="month" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md">
                                    <option value="">Select Month</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="year" className="text-sm font-semibold text-gray-700">Select Year</label>
                                <select id="year" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md">
                                    <option value="">Select Year</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                </select>
                            </div>
                            <button onClick={showFilterItem} className="w-full py-2 mt-4 bg-[#59d8ff] text-white rounded-md hover:bg-[#2cb2d6]">
                                Apply Filter
                            </button>
                        </div>
                    </div>
                )}
            </div>



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
                                    className=" hover:text-blue-700"
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
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
                width={500}
            >
                {selectedRequest && (
                    <div className="text-black">
                        <h2 className='text-2xl font-semibold my-5 text-center'>Withdrawal Request</h2>
                        <div className="mb-4 flex bg-[#58d5ff2c] p-2 rounded-lg items-center justify-between">
                            <p className="font-semibold">Withdrawal Balance:</p>
                            <p>{selectedRequest.withdrawalBalance}</p>
                        </div>

                        <div className="mb-4 flex bg-[#58d5ff2c] p-2 rounded-lg items-center justify-between">
                            <p className="font-semibold">Main Balance:</p>
                            <p>{selectedRequest.mainBalance}</p>
                        </div>

                        <div className="mb-4 flex bg-[#58d5ff2c] p-2 rounded-lg items-center justify-between">
                            <p className="font-semibold">Available Balance:</p>
                            <p>{selectedRequest.availableBalance}</p>
                        </div>

                        {/* Approve/Decline buttons */}
                        <div className="flex justify-between gap-4">
                            <button
                                className="w-full py-2 bg-[#58d6ff] rounded-lg text-white"
                                onClick={() => handleApproval("Approved")}
                            >
                                Approve
                            </button>
                            <button
                                className="w-full py-2 bg-red-500 rounded-lg text-white"
                                onClick={() => handleApproval("Declined")}
                            >
                                Decline
                            </button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default PaymentRequest;
