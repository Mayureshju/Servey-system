import React, { useState, useEffect } from "react";
import { apiConnector } from "../services/apiConnector";
import { endpoints } from "../services/apis";
const { GETALLSERVEY_API } = endpoints;
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
const Dashboard = () => {
  const [allServeys, seytAllServeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      navigate("/login");
    } else {
      getallServeys();
    }
  }, [location]);

  async function getallServeys() {
    try {
      setLoading(true);
      const response = await apiConnector("GET", GETALLSERVEY_API);
      console.log(response);
      seytAllServeys(response?.data?.surveys);
      setLoading(false);
    } catch (error) {
      console.log("Survey API ERROR:", error);
    }
  }

  return (
    <div className="ml-[10%] max-w-[80%] mt-24 relative overflow-x-auto shadow-md sm:rounded-lg">
    {
        loading ? (<Spinner/>) : ( <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs bg-white border-b dark:bg-gray-800 dark:border-gray-700 uppercase ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Person Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Gender
            </th>
            <th scope="col" className="px-6 py-3">
              Nationality
            </th>
            <th scope="col" className="px-6 py-3">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
              Message
            </th>
          </tr>
        </thead>
        <tbody>
          {allServeys.map((servey) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={servey._id}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {servey.firstname + " " + servey.lastname}
              </th>
              <td className="px-6 py-4">{servey.email}</td>
              <td className="px-6 py-4">{servey.phoneNumber}</td>
              <td className="px-6 py-4">{servey.gender}</td>
              <td className="px-6 py-4">{servey.nationality}</td>
              <td className="px-6 py-4">{servey.address}</td>
              <td className="px-6 py-4">{servey.message}</td>
            </tr>
          ))}
        </tbody>
      </table>)
    }
     
    </div>
  );
};

export default Dashboard;
