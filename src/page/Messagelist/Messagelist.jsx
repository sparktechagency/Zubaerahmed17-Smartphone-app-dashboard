import React, { useState } from 'react';
import { Modal, Button } from 'antd';  // Importing Ant Design components
import { FaEye } from 'react-icons/fa'; // Importing eye icon for "view"
import { CiLocationOn } from 'react-icons/ci'; // Import location icon
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';

const Messagelist = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);  // Modal visibility state
    const [selectedMessage, setSelectedMessage] = useState(null);  // To store the selected message data

    // Sample data for the table
    const messageData = [
        {
            sl: 1,
            userName: "Bashar",
            email: "info@gmail.com",
            phoneNumber: "089999******",
            completed: "No",
            dateTime: "11 April, 2025, 10 AM",
            message: "Hi, I’d like to exchange this dress. I’d like to exchange this dress. I’d like to exchange this dress.",
            actions: "View Details",
            imageUrl: "https://randomuser.me/api/portraits/men/61.jpg",
        },
        {
            sl: 2,
            userName: "John Doe",
            email: "john.doe@example.com",
            phoneNumber: "9876543210",
            completed: "Yes",
            dateTime: "12 April, 2025, 2 PM",
            message: "This is another message from John Doe.",
            actions: "View Details",
            imageUrl: "https://randomuser.me/api/portraits/men/62.jpg",
        },
        // Add more data if necessary
    ];

    // Handle modal visibility and set selected message data
    const showModal = (message) => {
        setSelectedMessage(message);
        setIsModalVisible(true);
    };

    // Handle modal close
    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedMessage(null);  // Clear selected message
    };

    const handleMarkAsRead = () => {
        console.log("Message marked as read");
        // Logic to mark the message as read (optional)
        setIsModalVisible(false);  // Close modal after action
    };

    const handleMarkAsUnread = () => {
        console.log("Message marked as unread");
        // Logic to mark the message as unread (optional)
        setIsModalVisible(false);  // Close modal after action
    };
    const [showFilter, setShowFilter] = useState(false);
    const showFilterItem = () => {
        setShowFilter(!showFilter);
    };

    return (
        <div className="py-5 px-3">


            <div className="flex relative items-center justify-between mb-5">
                <h1 className="lg:text-4xl text-2xl font-semibold">Message List</h1>
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


            {/* Table displaying message data */}
            <table className="min-w-full table-auto border-collapse border border-gray-200">
                <thead className="bg-[#59d8ff] text-white">
                    <tr>
                        <th className="py-3 px-5 text-left border-b">#SL</th>
                        <th className="py-3 px-5 text-left border-b">User Name</th>
                        <th className="py-3 px-5 text-left border-b">Email</th>
                        <th className="py-3 px-5 text-left border-b">Phone Number</th>
                        <th className="py-3 px-5 text-left border-b">Completed</th>
                        <th className="py-3 px-5 text-left border-b">Time</th>
                        <th className="py-3 px-5 text-left border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {messageData.map((message, index) => (
                        <tr key={index} className="border-b hover:bg-gray-100">
                            <td className="py-3 px-5">{message.sl}</td>
                            <td className="py-3 px-5">{message.userName}</td>
                            <td className="py-3 px-5">{message.email}</td>
                            <td className="py-3 px-5">{message.phoneNumber}</td>
                            <td className="py-3 px-5">{message.completed}</td>
                            <td className="py-3 px-5">{message.dateTime}</td>
                            <td className="py-3 px-5">
                                <button
                                    className="text-blue-500 hover:text-blue-700"
                                    onClick={() => showModal(message)} // Show modal on click
                                >
                                    <FaEye className="text-xl" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal for displaying message details */}
            <Modal
                title="Message"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}

                width={500}
            >
                {selectedMessage && (
                    <div className="p-5 ">
                        {/* Left side: User details */}
                        <div className="w-full ">
                            <div className="flex items-start text-base gap-5 mb-4">
                                <img
                                    src={selectedMessage.imageUrl}
                                    alt="Profile"
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <div>
                                    <h2 className="text-xl font-semibold">{selectedMessage.userName}</h2>
                                    <p className="text-base">{selectedMessage.email}</p>
                                    <p className="text-base">{selectedMessage.phoneNumber}</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">Time</h3>
                                    <p>{selectedMessage.dateTime}</p>

                                </div>
                            </div>

                        </div>
                        <div className='w-full'>
                            <h3 className="text-xl font-semibold">Message Details</h3>
                            <p>{selectedMessage.message}</p>
                        </div>

                        {/* Right side: Event details */}

                    </div>
                )}

                {/* Modal actions */}
                <div className="flex justify-end gap-3 mt-5">
                    <button
                        type="primary"
                        onClick={handleMarkAsRead}
                        className="bg-[#59d8ff] text-white py-3 px-8 rounded-lg text-base"
                    >
                        Read
                    </button>
                    <button
                        onClick={handleMarkAsUnread}
                        className="border border-[#59d8ff] text-[#59d8ff] py-3 px-8 rounded-lg te"
                    >
                        Unread
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default Messagelist;
