import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { RxCross1 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const ReportsUsersDetails = () => {
    const reportDetails = {
        restorationName: "Hope After Storm",
        reportDetails: "The content shared by this user appears to be illegal and should be reviewed.",
        reportedBy: "Bashar Islam",
        reportUser: "Mr. Hisham Islam",
        reportEmail: "demo@gmail.com",
        reportPhone: "028232949834",
        reportedEmail: "demo@gmail.com",
        reportedPhone: "028232949834",
    };

    return (
        <div className="px-4 py-5">
            <Link to="/reports" className="text-2xl font-semibold mb-5 flex items-center gap-2"><IoArrowBack className='text-2xl' />Report User Details</Link>

            {/* Report Details Section */}
            <div className="space-y-5 bg-[#58d6ff] p-5 rounded-lg shadow-md mb-5">
                <div className="flex relative items-center gap-10 flex-wrap">
                    <img className='max-w-[200px] max-h-[200px] rounded-xl' src="https://img.freepik.com/free-photo/full-shot-people-posing-wedding_23-2149956421.jpg" alt="" />
                    {/* Restoration Name */}
                    <div className='col-span-2 space-y-3'>
                        <div >
                            <h3 className="font-semibold text-xl text-gray-100">Restoration Name</h3>
                            <p className='text-gray-100'>{reportDetails.restorationName}</p>
                        </div>

                        {/* Report Details */}
                        <div>
                            <h3 className="font-semibold text-xl text-gray-100">Report Details</h3>
                            <p className='text-gray-100'>{reportDetails.reportDetails}</p>
                        </div>
                    </div>
                    <button className='absolute top-0 right-0 text-3xl text-white hover:text-red-500 duration-500'><RiDeleteBin6Line /></button>
                </div>


            </div>
            <div className='grid lg:grid-cols-2 gap-5'>
                <div className="space-y-5 bg-blue-50 p-5 rounded-lg ">
                    <img className='w-20 rounded-full h-20' src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                    {/* Reported By */}
                    <div className='border-b-2 border-[#58d6ff] pb-3'>
                        <h3 className="font-medium text-gray-700">Reported By</h3>
                        <p>{reportDetails.reportedBy}</p>
                    </div>


                    <div className='border-b-2 border-[#58d6ff] pb-3'>
                        <h3 className="font-medium text-gray-700">Phone Number</h3>
                        <p>{reportDetails.reportPhone}</p>
                    </div>
                    {/* Report User Email */}
                    <div className='border-b-2 border-[#58d6ff] pb-3'>
                        <h3 className="font-medium text-gray-700">Email</h3>
                        <p>{reportDetails.reportEmail}</p>
                    </div>

                </div>
                {/* Report User Phone Number */}

                <div className="space-y-5 bg-blue-50 p-5 rounded-lg ">
                    <img className='w-20 rounded-full h-20' src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                    {/* Report User */}
                    <div className='border-b-2 border-[#58d6ff] pb-3'>
                        <h3 className="font-medium text-gray-700">Report User</h3>
                        <p>{reportDetails.reportUser}</p>
                    </div>
                    {/* Reported User Email */}
                    <div className='border-b-2 border-[#58d6ff] pb-3'>
                        <h3 className="font-medium text-gray-700">Reported Email</h3>
                        <p>{reportDetails.reportedEmail}</p>
                    </div>

                    {/* Reported User Phone Number */}
                    <div className='border-b-2 border-[#58d6ff] pb-3'>
                        <h3 className="font-medium text-gray-700">Reported Phone Number</h3>
                        <p>{reportDetails.reportedPhone}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ReportsUsersDetails;
