import React, { useState } from 'react';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';
import { Modal, Button, Pagination } from 'antd'; // Import Modal, Button, and Pagination from Ant Design
import { CiLocationOn } from 'react-icons/ci';

const BookingRequest = () => {
    const [showFilter, setShowFilter] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false); // Modal state
    const [selectedBooking, setSelectedBooking] = useState(null); // Selected booking data for modal
    const [currentPage, setCurrentPage] = useState(1); // Pagination state
    const [bookingsPerPage] = useState(3); // Number of bookings per page

    const showFilterItem = () => {
        setShowFilter(!showFilter);
    };

    const showModal = (booking) => {
        setSelectedBooking(booking); // Set the selected booking data to show in modal
        setIsModalVisible(true); // Open modal
    };

    const handleCancel = () => {
        setIsModalVisible(false); // Close modal
        setSelectedBooking(null); // Clear selected booking data
    };

    // Sample booking request data
    const bookingData = [
        {
            name: 'Afsana Hamid Mim',
            location: 'New York, US',
            eventName: 'Maplewood Lodge & Gardens',
            eventCategory: 'Wedding Venue',
            eventDate: '20-23 June 2025',
            eventTime: '11:10 PM',
            guests: 12,
            price: 5500,
            imageUrl: 'https://randomuser.me/api/portraits/men/61.jpg',
            eventImage: 'https://img.freepik.com/free-photo/full-shot-people-posing-wedding_23-2149956421.jpg',
            phoneNumber: '49857964674',
            eventDetails: 'A charming mountain-view venue with elegant gardens and rustic overnight cabins. Perfect for intimate weddings and peaceful weekend celebrations.',
        },
        {
            name: 'John Doe',
            location: 'Los Angeles, US',
            eventName: 'Sunset Park',
            eventCategory: 'Birthday Party',
            eventDate: '15-16 July 2025',
            eventTime: '7:00 PM',
            guests: 50,
            price: 5000,
            imageUrl: 'https://randomuser.me/api/portraits/men/62.jpg',
            eventImage: 'https://img.freepik.com/free-photo/full-shot-people-posing-party_23-2149956421.jpg',
            phoneNumber: '4965734342',
            eventDetails: 'An exclusive venue for a special birthday party with scenic views and luxury amenities.',
        },
        {
            name: 'Mark Smith',
            location: 'Miami, US',
            eventName: 'Ocean View Resort',
            eventCategory: 'Conference',
            eventDate: '5-8 August 2025',
            eventTime: '9:00 AM',
            guests: 200,
            price: 15000,
            imageUrl: 'https://randomuser.me/api/portraits/men/63.jpg',
            eventImage: 'https://img.freepik.com/free-photo/full-shot-businessman-at-conference_23-2149956422.jpg',
            phoneNumber: '49857964675',
            eventDetails: 'A luxurious resort offering a spacious venue for conferences and meetings with ocean views.',
        },
        {
            name: 'Mark Smith',
            location: 'Miami, US',
            eventName: 'Ocean View Resort',
            eventCategory: 'Conference',
            eventDate: '5-8 August 2025',
            eventTime: '9:00 AM',
            guests: 200,
            price: 15000,
            imageUrl: 'https://randomuser.me/api/portraits/men/63.jpg',
            eventImage: 'https://img.freepik.com/free-photo/full-shot-businessman-at-conference_23-2149956422.jpg',
            phoneNumber: '49857964675',
            eventDetails: 'A luxurious resort offering a spacious venue for conferences and meetings with ocean views.',
        },
        {
            name: 'Mark Smith',
            location: 'Miami, US',
            eventName: 'Ocean View Resort',
            eventCategory: 'Conference',
            eventDate: '5-8 August 2025',
            eventTime: '9:00 AM',
            guests: 200,
            price: 15000,
            imageUrl: 'https://randomuser.me/api/portraits/men/63.jpg',
            eventImage: 'https://img.freepik.com/free-photo/full-shot-businessman-at-conference_23-2149956422.jpg',
            phoneNumber: '49857964675',
            eventDetails: 'A luxurious resort offering a spacious venue for conferences and meetings with ocean views.',
        },
        // Add more data if necessary
    ];

    // Pagination Logic
    const indexOfLastBooking = currentPage * bookingsPerPage;
    const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
    const currentBookings = bookingData.slice(indexOfFirstBooking, indexOfLastBooking);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="py-5 px-3">
            <div className="flex relative items-center justify-between">
                <h1 className="lg:text-4xl text-2xl font-semibold">Booking Request List</h1>
                <button
                    onClick={showFilterItem}
                    className="flex items-center text-xl gap-2 bg-[#59d8ff] px-3 py-2 rounded-md text-white hover:bg-[#2cb2d6]"
                >
                    Filter
                    <HiAdjustmentsHorizontal className="text-2xl" />
                </button>
                {showFilter && (
                    <div className="absolute right-0 top-12 mt-2 p-4 w-64 bg-white rounded-lg shadow-lg">
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

            {/* Booking Card Section */}
            <div className="my-10">
                {currentBookings.map((booking, index) => (
                    <div key={index} className="bg-white mt-5 rounded-lg border-2 border-[#59d8ff] p-4 gap-5 flex items-center justify-between flex-wrap lg:flex-nowrap">
                        {/* Profile Image */}
                        <img className="w-16 h-16 rounded-full object-cover" src={booking.imageUrl} alt={booking.name} />

                        {/* Details */}
                        <div className="ml-4 w-full flex flex-col justify-between">
                            <h3 className="font-semibold text-xl">{booking.name}</h3>
                            <p className="text-gray-600 text-sm">{booking.location}</p>

                            <hr />
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex flex-col justify-between">
                                    <span className="font-medium">Event Name</span>
                                    <span>{booking.eventName}</span>
                                </div>
                                <div className="flex flex-col justify-between mt-1">
                                    <span className="font-medium">Event Category</span>
                                    <span>{booking.eventCategory}</span>
                                </div>
                                <div className="flex flex-col justify-between mt-1">
                                    <span className="font-medium">Location</span>
                                    <span>{booking.location}</span>
                                </div>
                            </div>
                        </div>

                        {/* View Details Button */}
                        <div className='min-w-48 flex flex-col items-end'>
                            <img className='rounded-xl max-w-48' src={booking.eventImage} alt="" />
                            <button className="bg-[#59d8ff] text-white px-4 py-2 rounded-md ml-auto mt-4" onClick={() => showModal(booking)}>
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className='flex items-center justify-end'>
                <Pagination
                    current={currentPage}
                    pageSize={bookingsPerPage}
                    total={bookingData.length}
                    onChange={handlePageChange}
                    showSizeChanger={false}
                    style={{ textAlign: 'right', marginTop: '20px' }}
                />
            </div>

            {/* Modal for Showing Event Details */}
            <Modal
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
                width={1200}
            >
                {selectedBooking && (
                    <div className='p-5 grid lg:grid-cols-2 gap-8'>
                        <div>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                                <div className="">
                                    <div className="text-lg font-semibold">Event Title</div>
                                    <div>{selectedBooking.eventName}</div>
                                </div>
                                <div className="">
                                    <div className="text-lg font-semibold">Event Category</div>
                                    <div>{selectedBooking.eventCategory}</div>
                                </div>
                                <div className="">
                                    <div className="text-lg font-semibold">Date</div>
                                    <div>{selectedBooking.eventDate}</div>
                                </div>
                                <div className="">
                                    <div className="text-lg font-semibold">Time</div>
                                    <div>{selectedBooking.eventTime}</div>
                                </div>
                                <div className="">
                                    <div className="text-lg font-semibold">Guest</div>
                                    <div>{selectedBooking.guests}</div>
                                </div>
                                <div className="">
                                    <div className="text-lg font-semibold">Price</div>
                                    <div>${selectedBooking.price}</div>
                                </div>
                                <div className="">
                                    <div className="text-lg font-semibold">Location</div>
                                    <div>{selectedBooking.location}</div>
                                </div>
                                <div className="">
                                    <div className="text-lg font-semibold">Phone Number</div>
                                    <div>{selectedBooking.phoneNumber}</div>
                                </div>
                            </div>
                            <hr className='my-4' />
                            <div className="mt-4 text-lg">
                                <div className="font-semibold">Event Details</div>
                                <div>{selectedBooking.eventDetails}</div>
                            </div>
                            <div className='my-10 flex justify-between items-center flex-wrap gap-5'>
                                <div className='flex items-center gap-5'>
                                    <img className='w-20 rounded-full ' src="https://randomuser.me/api/portraits/men/61.jpg" alt="" />
                                    <div>
                                        <h2 className='text-lg font-semibold'>{selectedBooking.name}</h2>
                                        <h3 className='flex items-center gap-2'> <CiLocationOn /> {selectedBooking.location}</h3>
                                    </div>
                                </div>
                                <div>
                                    <h2 className='text-lg font-semibold'>Phone Number</h2>
                                    <h3 className='flex items-center gap-2'> <CiLocationOn /> {selectedBooking.phoneNumber}</h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img className='rounded-xl w-full' src="https://img.freepik.com/free-photo/full-shot-people-posing-wedding_23-2149956421.jpg" alt="" />
                        </div>
                        <div className="flex items-center gap-3">
                            <button className='bg-[#59d8ff] py-3 px-8 rounded-lg text-white font-semibold' type="primary" onClick={handleCancel}>
                                Approve
                            </button>
                            <button className='border border-[#59d8ff] py-3 px-8 rounded-lg font-semibold' type="danger" onClick={handleCancel}>
                                Decline
                            </button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default BookingRequest;
