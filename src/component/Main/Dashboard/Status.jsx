import { IoLogoEuro } from "react-icons/io";
import { useGetDashboardStatusQuery } from "../../../redux/features/dashboard/dashboardApi";
import dashboardIcon from "/public/logo/dashboard-icon.png";
import subsciption from "/public/logo/subscribtion.png";
import { FaArrowTrendUp } from "react-icons/fa6";

const Status = () => {
  const { data, isLoading } = useGetDashboardStatusQuery();

  const alldata = data?.data?.attributes;


  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 items-center gap-5">

      {/* Total Renter User Card */}
      <div className="shadow-[0_4px_10px_rgba(0,0,0,0.2)] p-5 rounded-lg border-2 border-[#59d8ff] bg-white">
        <div className="flex items-center gap-5 ">
          <img src={dashboardIcon} className="w-16" alt="" />
          <div>
            <h2 className="text-xl font-semibold">Total Users</h2>
            <h2 className="text-4xl font-semibold">500</h2>
          </div>
        </div>
      </div>
      <div className="shadow-[0_4px_10px_rgba(0,0,0,0.2)] p-5 rounded-lg border-2 border-[#59d8ff] bg-white">
        <div className="flex items-center gap-5 ">
          <img src={dashboardIcon} className="w-16" alt="" />
          <div>
            <h2 className="text-xl font-semibold">Complete Booking</h2>
            <h2 className="text-4xl font-semibold">500</h2>
          </div>
        </div>
      </div>
      <div className="shadow-[0_4px_10px_rgba(0,0,0,0.2)] p-5 rounded-lg border-2 border-[#59d8ff] bg-white">
        <div className="flex items-center gap-5 ">
          <img src={dashboardIcon} className="w-16" alt="" />
          <div>
            <h2 className="text-xl font-semibold">Total Host</h2>
            <h2 className="text-4xl font-semibold">500</h2>
          </div>
        </div>
      </div>
      <div className="shadow-[0_4px_10px_rgba(0,0,0,0.2)] p-5 rounded-lg border-2 border-[#59d8ff] bg-white">
        <div className="flex items-center gap-5 ">
          <img src={dashboardIcon} className="w-16" alt="" />
          <div>
            <h2 className="text-xl font-semibold">Total Revenue</h2>
            <h2 className="text-4xl font-semibold">500</h2>
          </div>
        </div>
      </div>
      <div className="shadow-[0_4px_10px_rgba(0,0,0,0.2)] p-5 rounded-lg border-2 border-[#59d8ff] bg-white">
        <div className="flex items-center gap-5 ">
          <img src={dashboardIcon} className="w-16" alt="" />
          <div>
            <h2 className="text-xl font-semibold">Granted Balance</h2>
            <h2 className="text-4xl font-semibold">500</h2>
          </div>
        </div>
      </div>
  


    </div>
  );
};

export default Status;