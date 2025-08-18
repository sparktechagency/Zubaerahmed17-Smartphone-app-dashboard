import React, { useState } from 'react';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';

const BookingRequest = () => {
    const [showFilter, setShowFilter] = useState(false);

    const showFilterItem = () => {
        setShowFilter(!showFilter);
    };

    // Sample booking request data
    const bookingData = [
        {
            name: 'Afsana Hamid Mim',
            location: 'New York, US',
            eventName: 'Maplewood Lodge & Gardens',
            eventCategory: 'Wedding Venue',
            imageUrl: 'https://randomuser.me/api/portraits/men/61.jpg',
            eventImage: 'https://img.freepik.com/free-photo/full-shot-people-posing-wedding_23-2149956421.jpg',
        },
        {
            name: 'Afsana Hamid Mim',
            location: 'New York, US',
            eventName: 'Maplewood Lodge & Gardens',
            eventCategory: 'Wedding Venue',
            imageUrl: 'https://randomuser.me/api/portraits/men/61.jpg',
            eventImage: 'https://img.freepik.com/free-photo/full-shot-people-posing-wedding_23-2149956421.jpg',
        },
        {
            name: 'Afsana Hamid Mim',
            location: 'New York, US',
            eventName: 'Maplewood Lodge & Gardens',
            eventCategory: 'Wedding Venue',
            imageUrl: 'https://randomuser.me/api/portraits/men/61.jpg',
            eventImage: 'https://img.freepik.com/free-photo/full-shot-people-posing-wedding_23-2149956421.jpg',
        },
        // Add more data if necessary
    ];

    return (
        <div className="py-5 px-3">
            <div className="flex relative items-center justify-between">
                <h1 className="text-4xl font-semibold">Booking Request List</h1>
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
                {bookingData.map((booking, index) => (
                    <div key={index} className="bg-white mt-5 rounded-lg border-2 border-[#59d8ff] p-4 gap-5 flex items-center justify-between">
                        {/* Profile Image */}
                        <img className="w-16 h-16 rounded-full object-cover" src={booking.imageUrl} alt={booking.name} />

                        {/* Details */}
                        <div className="ml-4 w-full flex flex-col justify-between">
                            <h3 className="font-semibold text-xl">{booking.name}</h3>
                            <p className="text-gray-600 text-sm">{booking.location}</p>

                            <hr />
                            <div className=" flex items-center justify-between mt-2">
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
                                    <span>{booking.eventCategory}</span>
                                </div>
                            </div>
                        </div>

                        {/* View Details Button */}
                        <div className='min-w-48 flex flex-col items-end'>
                            <img className='rounded-xl max-w-48' src={booking.eventImage} alt="" />
                            <button className="bg-[#59d8ff] text-white px-4 py-2 rounded-md ml-auto mt-4">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* show modal here for showing card details */}
            <div>
                
            </div>

        </div>
    );
};

export default BookingRequest;
