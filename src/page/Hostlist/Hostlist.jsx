import React, { useState } from 'react';
import { Table, Modal, ConfigProvider } from 'antd'; // Importing Table and Modal from Ant Design
import { FaEye } from 'react-icons/fa'; // Importing eye icon for "view"
import { CiLocationOn } from 'react-icons/ci'; // Import location icon
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';
import Url from '../../redux/baseApi/forImageUrl';

const Hostlist = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedHost, setSelectedHost] = useState(null); // To store the selected host details

    // Sample data for the table
    const hostData = [
        {
            sl: 1,
            hostName: "Afsana Hamid Mim",
            email: "afsana.mim@example.com",
            phoneNumber: "49857964674",
            completed: "Yes",
            dateTime: "20-23 June 2025, 11:10 PM",
            actions: "View Details",
            eventDetails: 'A charming mountain-view venue with elegant gardens and rustic overnight cabins. Perfect for intimate weddings and peaceful weekend celebrations.',
            location: 'New York, USA',
            eventName: 'Maplewood Lodge & Gardens',
            image: 'https://img.freepik.com/free-photo/full-shot-people-posing-wedding_23-2149956421.jpg',
        },
        {
            sl: 2,
            hostName: "John Doe",
            email: "john.doe@example.com",
            phoneNumber: "4965734342",
            completed: "No",
            dateTime: "15-16 July 2025, 7:00 PM",
            actions: "View Details",
            eventDetails: 'An exclusive venue for a special birthday party with scenic views and luxury amenities.',
            location: 'Los Angeles, USA',
            eventName: 'Sunset Park',
            image: 'https://img.freepik.com/free-photo/full-shot-people-posing-party_23-2149956421.jpg',
        },
        {
            sl: 3,
            hostName: "Mark Smith",
            email: "mark.smith@example.com",
            phoneNumber: "49857964675",
            completed: "Yes",
            dateTime: "5-8 August 2025, 9:00 AM",
            actions: "View Details",
            eventDetails: 'A beautiful garden with an elegant ballroom and an open-air amphitheater.',
            location: 'Miami, USA',
            eventName: 'Green Park Events',
            image: 'https://img.freepik.com/free-photo/full-shot-people-posing-wedding_23-2149956421.jpg',
        },
    ];

    // Handle modal visibility and set selected host data
    const showModal = (host) => {
        setSelectedHost(host);
        setIsModalVisible(true);
    };

    // Handle modal close
    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedHost(null); // Clear selected host
    };

    const [showFilter, setShowFilter] = useState(false);
    const showFilterItem = () => {
        setShowFilter(!showFilter);
    };

    // Define columns for the table
    const columns = [
        {
            title: '#SL',
            dataIndex: 'sl',
            key: 'sl',
        },
        {
            title: 'Host Name',
            dataIndex: 'hostName',
            key: 'hostName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'Completed',
            dataIndex: 'completed',
            key: 'completed',
        },
        {
            title: 'Time & Date',
            dataIndex: 'dateTime',
            key: 'dateTime',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (text, record) => (
                <button
                    className="text-gray-500 hover:text-blue-700"
                    onClick={() => showModal(record)} // Show modal on click
                >
                    <FaEye className="text-xl " />
                </button>
            ),
        },
    ];

    return (
        <div className="py-5 px-3">
            <div className="flex relative items-center justify-between mb-5">
                <h1 className="lg:text-4xl text-2xl font-semibold">Host list</h1>
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

            <ConfigProvider
                theme={{
                    components: {
                        Table: {
                            zIndexBase: 0,
                            headerBg: "#59d8ff",
                            headerColor: "#fff",
                            headerBorderRadius: 5,
                        },
                    },
                }}
            >

                <Table
                    columns={columns}
                    dataSource={hostData}
                    pagination={{ pageSize: 5 }}
                />
            </ConfigProvider>

            {/* Modal for displaying booking details */}
            <Modal
                visible={isModalVisible}
                onCancel={handleCancel}

                footer={null}
                width={500}
            >
                {selectedHost && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
                        <img className='w-20 h-20 rounded-full' src={selectedHost.image} alt="" />
                        <p className='py-2 text-base flex items-center justify-between'><strong>Host Name:</strong> {selectedHost.hostName}</p>
                        <p className='py-2 text-base flex items-center justify-between'><strong>Email:</strong> {selectedHost.email}</p>
                        <p className='py-2 text-base flex items-center justify-between'><strong>Phone Number:</strong> {selectedHost.phoneNumber}</p>
                        <p className='py-2 text-base flex items-center justify-between'><strong>Completed:</strong> {selectedHost.completed}</p>
                        <p className='py-2 text-base flex items-center justify-between'><strong>Time & Date:</strong> {selectedHost.dateTime}</p>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Hostlist;
