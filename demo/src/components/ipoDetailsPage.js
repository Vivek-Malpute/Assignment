import React, { useEffect, useState } from "react";
import { LeftOutlined } from "@ant-design/icons";
import { Steps } from "antd";

const { Step } = Steps;
const IpoDetailsPage = () => {
    const [imageUrl,setImageUrl] = useState("");
    const [companyName,setCompanyName] = useState("")
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const Imgvalue = searchParams.get('ImageUrl'); 
        setImageUrl(Imgvalue)
        const companyvalue = searchParams.get('companyName'); 
        setCompanyName(companyvalue)
    }, [])
    
    
  const items = [
    {
      title: "Bidding starts",
      description: "12 Dec 2023",
    },
    {
      title: "Bidding ends",
      description: "15 Dec 2023",
    },
    {
      title: "Allotment finalization",
      description: "18 Dec 2023",
    },
    {
      title: "Refund initialization",
      description: "18 Dec 2023",
    },
    {
      title: "Demat transfer",
      description: "18 Dec 2023",
    },
    {
      title: "Listing Date",
      description: "21 Dec 2023",
    },
  ];

  const handleOnClick = () => {
    window.location.href = "/ipoListPage";
  };
  return (
    <div className="px-4 py-4">
      <div className="border border-gray-200 rounded-lg py-3 px-4">
        <span
          className="text-gray-500 text-sm mr-2 cursor-pointer"
          onClick={handleOnClick}
        >
          Home{" "}
        </span>
        <span className="text-gray-500 text-sm mr-2">{">"} </span>
        <span className="text-gray-500 text-sm cursor-pointer">
          Market Watch{" "}
        </span>

        <div className="mt-8 flex items-center w-full">
          <div className="flex hidden sm:flex">
            <LeftOutlined className="border border-gray-200 rounded-lg px-2 py-2 cursor-pointer" onClick={handleOnClick} />
          </div>

          <div className="flex cursor-pointer lg:ml-8 md:ml-8">
            <img
              src={imageUrl && imageUrl}
              alt="Company Logo"
              className="w-[50px] rounded-full border border-gray-300"
            />
            <div className="flex flex-col ml-4 content-center">
              <span className="font-semibold text-xl">{companyName && companyName}</span>
              <span className="text-sm text-gray-500">{companyName && companyName} Private Limited</span>
            </div>
          </div>

          <div className="flex items-center ml-auto hidden sm:flex">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/parakeet-line/48/downloads-folder.png"
              alt="logo"
            />
            <button
              type="primary"
              className="bg-[#14143c] hover:bg-[#14143c] px-8 text-white rounded-lg py-2 ml-4"
            >
              Apply Now
            </button>
          </div>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-200 mt-4 px-4 py-4">
          <span className="font-semibold ">IPO Details</span>
          <div className="rounded-lg border border-gray-200 mt-4 px-4 py-4 mb-2">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 w-full grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Issue Size</span>
                <span className="font-bold text-sm text-[#14143c]">
                  ₹3,600 - 3,700 Cr.
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Price Range</span>
                <span className="font-bold text-sm text-[#14143c]">
                  ₹ 100 - 200
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Minimum amount </span>
                <span className="font-bold text-sm text-[#14143c]">
                  ₹ 50,000
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Lot Size</span>
                <span className="font-bold text-sm text-[#14143c]">
                  150 shares/lots
                </span>
              </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 w-full mt-6 grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Issue dates</span>
                <span className="font-bold text-sm text-[#14143c]">
                  12 Dec - 15 Dec 22
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Listed on</span>
                <span className="font-bold text-sm text-[#14143c]">
                  15 Dec 22
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Listed price </span>
                <span className="font-bold text-sm text-[#14143c]">₹ 150</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Listing gains</span>
                <span className="font-bold text-sm text-[#14143c]">
                  ₹ 10 (10.0%)
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-lg border w-full border-gray-200 mt-8 px-4 py-4">
          <span className="font-semibold">IPO Timeline</span>
          <div className="mt-4">
            <Steps
              current={7}
              labelPlacement="vertical"
              className="custom-steps"
            >
              {items.map((item, index) => (
                <Step
                  key={index}
                  title={<span className="font-bold">{item.title}</span>}
                  description={
                    <span className="font-semibold">{item.description}</span>
                  }
                />
              ))}
            </Steps>
          </div>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-200 mt-8 px-4 py-4">
          <span className="font-semibold">About the Company</span>
          <p className="text-sm text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint
          </p>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IpoDetailsPage;
