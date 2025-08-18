import React, { useState, useEffect } from "react";
import { Modal, Pagination } from "antd";
import { FaAngleLeft } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";

const Earnings = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const [searchText, setSearchText] = useState("");
  const [searchDate, setSearchDate] = useState("");

  // Demo Data for Earnings (Used for testing purposes)
  const earningsData = [
    {
      id: 1,
      transactionId: "TX12345",
      currency: "USD",
      amount: "$500",
      status: "Completed",
      paymentMethod: "Credit Card",
      updatedAt: "2023-03-01T10:00:00Z",
    },
    {
      id: 2,
      transactionId: "TX12346",
      currency: "USD",
      amount: "$250",
      status: "Pending",
      paymentMethod: "PayPal",
      updatedAt: "2023-03-05T14:30:00Z",
    },
    {
      id: 3,
      transactionId: "TX12347",
      currency: "EUR",
      amount: "$450",
      status: "Completed",
      paymentMethod: "Debit Card",
      updatedAt: "2023-03-10T08:45:00Z",
    },
    {
      id: 4,
      transactionId: "TX12348",
      currency: "GBP",
      amount: "$100",
      status: "Failed",
      paymentMethod: "Bank Transfer",
      updatedAt: "2023-03-15T12:00:00Z",
    },
  ];

  // Filter Earnings based on search text
  const [filteredEarnings, setFilteredEarnings] = useState([]);
  useEffect(() => {
    let filteredData = earningsData;

    // Filter by Name (or other field)
    if (searchText.trim() !== "") {
      filteredData = filteredData.filter((row) =>
        row.transactionId?.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // Filter by Date
    if (searchDate.trim() !== "") {
      filteredData = filteredData.filter(
        (row) => new Date(row.updatedAt).toISOString().split("T")[0] === searchDate
      );
    }

    setFilteredEarnings(filteredData);
  }, [searchText, searchDate, earningsData]);

  const showModal = (transaction) => {
    setSelectedTransaction(transaction);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedTransaction(null);
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const [showFilter, setShowFilter] = useState(false);
  const showFilterItem = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="w-full p-5 overflow-x-auto min-h-[calc(100vh-70px)]">
      <div className="flex relative items-center justify-between mb-5">
        <h1 className="lg:text-4xl text-2xl font-semibold">Earnings list</h1>
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

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border-[#58d6ff] min-w-[1000px]">
          <thead className="bg-[#58d6ff] text-white border">
            <tr>
              <th className="border-gray-300 px-4 py-3 text-left">Transaction ID</th>
              <th className="border-gray-300 px-4 py-3 text-left">Currency</th>
              <th className="border-gray-300 px-4 py-3 text-left">Amount</th>
              <th className="border-gray-300 px-4 py-3 text-left">Status</th>
              <th className="border-gray-300 px-4 py-3 text-left">Payment Method</th>
              <th className="border-gray-300 px-4 py-3 text-left">Date</th>
              <th className="border-gray-300 px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEarnings.map((row) => (
              <tr key={row?.id} className="hover:bg-gray-50 border">
                <td className="border-gray-300 px-4 py-3">{row?.transactionId}</td>
                <td className="border-gray-300 px-4 py-3">{row?.currency}</td>
                <td className="border-gray-300 px-4 py-3">{row?.amount}</td>
                <td className="border-gray-300 px-4 py-3">Success</td>
                <td className="border-gray-300 px-4 py-3">{row?.status}</td>
                <td className="border-gray-300 px-4 py-3">{new Date(row?.updatedAt).toLocaleDateString()}</td>
                <td className="border-gray-300 px-4 py-3">
                  <div onClick={() => showModal(row)} className="cursor-pointer">
                    <IoEyeOutline className="text-2xl font-semibold" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={earningsData?.length || 0}
          onChange={onPageChange}
          showSizeChanger={false}
        />
      </div>

      {/* Modal for Transaction Details */}
      <Modal visible={isModalVisible} onCancel={handleCancel} footer={null} width={500}>
        {selectedTransaction && (
          <div className="text-black">
            <h2 className="text-2xl font-semibold mb-4 text-center">Transaction Details</h2>

            <div className="mb-4 flex items-center justify-between">
              <p className="font-semibold">Transaction ID:</p>
              <p>{selectedTransaction?.transactionId}</p>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <p className="font-semibold">Currency:</p>
              <p>{selectedTransaction?.currency}</p>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <p className="font-semibold">Amount:</p>
              <p>{selectedTransaction?.amount}</p>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <p className="font-semibold">Status:</p>
              <p>{selectedTransaction?.status}</p>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <p className="font-semibold">Payment Method:</p>
              <p>{selectedTransaction?.paymentMethod}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Earnings;
