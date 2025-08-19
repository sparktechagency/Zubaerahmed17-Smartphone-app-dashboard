import React, { useState } from 'react';
import { Modal } from 'antd';  // Modal from Ant Design
import { FaEye } from 'react-icons/fa';  // Eye icon for "View" 
import { Link } from 'react-router-dom';

const ReportsList = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedReport, setSelectedReport] = useState(null); // To store selected report details
    const [showFilter, setShowFilter] = useState(false);  // Toggle for filter

    // Sample data for the table
    const reportsData = [
        {
            sl: 1,
            reportedBy: "John Doe",
            teamName: "Marketing",
            phoneNumber: "1234567890",
            completed: "Yes",
            type: "Urgent",
            date: "2023-06-12",
            actions: "View Details",
            details: "Detailed description of the report goes here.",
        },
        {
            sl: 2,
            reportedBy: "Jane Smith",
            teamName: "Sales",
            phoneNumber: "9876543210",
            completed: "No",
            type: "Normal",
            date: "2023-06-13",
            actions: "View Details",
            details: "Another detailed description for this report.",
        },
        {
            sl: 3,
            reportedBy: "Alice Johnson",
            teamName: "HR",
            phoneNumber: "5555555555",
            completed: "Yes",
            type: "High Priority",
            date: "2023-06-14",
            actions: "View Details",
            details: "Further details for this report...",
        },
    ];

    // Show modal with selected report details
    const showModal = (report) => {
        setSelectedReport(report);
        setIsModalVisible(true);
    };

    // Close modal
    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedReport(null);
    };

    // Toggle filter visibility
    const showFilterItem = () => {
        setShowFilter(!showFilter);
    };

    return (
        <div className="p-5">
            <h1 className="text-2xl font-semibold mb-5">Reports List</h1>

            {/* Filter Button */}


            {/* Filter Options */}
            {showFilter && (
                <div className="absolute right-0 top-12 mt-2 p-4 w-64 bg-white rounded-lg shadow-lg z-10">
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

            {/* Reports Table */}
            <table className="min-w-full table-auto border-collapse border border-gray-200">
                <thead className="bg-[#58d6ff] text-white">
                    <tr>
                        <th className="py-3 px-5 text-left border-b">#SI</th>
                        <th className="py-3 px-5 text-left border-b">Reported By</th>
                        <th className="py-3 px-5 text-left border-b">Team Name</th>
                        <th className="py-3 px-5 text-left border-b">Phone Number</th>
                        <th className="py-3 px-5 text-left border-b">Completed</th>
                        <th className="py-3 px-5 text-left border-b">Type</th>
                        <th className="py-3 px-5 text-left border-b">Date</th>
                        <th className="py-3 px-5 text-left border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {reportsData.map((report, index) => (
                        <tr key={index} className="border-b hover:bg-gray-100">
                            <td className="py-3 px-5">{report.sl}</td>
                            <td className="py-3 px-5">{report.reportedBy}</td>
                            <td className="py-3 px-5">{report.teamName}</td>
                            <td className="py-3 px-5">{report.phoneNumber}</td>
                            <td className="py-3 px-5">{report.completed}</td>
                            <td className="py-3 px-5">{report.type}</td>
                            <td className="py-3 px-5">{report.date}</td>
                            <td className="py-3 px-5">
                                <Link to={`/reports/${report.sl}`} className=" hover:text-blue-700">
                                    <FaEye className="text-xl" />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal for viewing report details */}
            <Modal
                title="Report Details"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
                width={600}
            >
                {selectedReport && (
                    <div className="text-black">
                        <div className="mb-4 flex items-center justify-between">
                            <p className="font-semibold">Reported By:</p>
                            <p>{selectedReport.reportedBy}</p>
                        </div>

                        <div className="mb-4 flex items-center justify-between">
                            <p className="font-semibold">Team Name:</p>
                            <p>{selectedReport.teamName}</p>
                        </div>

                        <div className="mb-4 flex items-center justify-between">
                            <p className="font-semibold">Phone Number:</p>
                            <p>{selectedReport.phoneNumber}</p>
                        </div>

                        <div className="mb-4 flex items-center justify-between">
                            <p className="font-semibold">Completed:</p>
                            <p>{selectedReport.completed}</p>
                        </div>

                        <div className="mb-4 flex items-center justify-between">
                            <p className="font-semibold">Type:</p>
                            <p>{selectedReport.type}</p>
                        </div>

                        <div className="mb-4 flex items-center justify-between">
                            <p className="font-semibold">Date:</p>
                            <p>{selectedReport.date}</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">Details:</p>
                            <p>{selectedReport.details}</p>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default ReportsList;
