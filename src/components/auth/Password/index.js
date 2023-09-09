import { ArrowLeft, HelpCircle } from "react-feather";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function Password({
  handleUserInputs,
  handleSubmit,
  setShowPass,
  email,
  isLoading,
}) {
  return (
    <>
      {isLoading ? <span class="loader"></span> : ""}
      <div className="flex items-center space-x-1 mt-3">
        <ArrowLeft
          size={15}
          className="cursor-pointer"
          onClick={() => setShowPass(false)}
        />
        <p className="text-sm">{email}</p>
      </div>
      <h1 className="mt-3 font-bold text-[20px]">Enter password</h1>
      <input
        className="mt-3 w-full  border-b-2 border-black  h-[3rem] placeholder:text-[12px] focus:outline-none"
        placeholder="Password"
        name="password"
        onChange={handleUserInputs}
      />
      <div className="mt-3 flex space-x-1">
        <Link
          href={
            "https://account.live.com/ResetPassword.aspx?wreply=https://login.live.com/login.srf%3fid%3d38936%26mkt%3den-GB%26uaid%3d9937a6720d834408828e8319a133df69%26id%3d38936%26contextid%3d8F1EBC5AEDEBFDF6%26opid%3dD06A7858B3610902%26bk%3d1694253669&id=38936&uiflavor=web&uaid=9937a6720d834408828e8319a133df69&mkt=EN-GB&lc=2057&bk=1694253669"
          }
          className="text-[12px]  text-[#0067b8] hover:underline "
        >
          Forgotten your password?
        </Link>
      </div>
      <div className="mt-3 flex space-x-1">
        <Link
          href={
            "https://signup.live.com/signup?id=38936&contextid=8F1EBC5AEDEBFDF6&opid=D06A7858B3610902&bk=1694253669&sru=https://login.live.com/login.srf%3fid%3d38936%26id%3d38936%26contextid%3d8F1EBC5AEDEBFDF6%26opid%3dD06A7858B3610902%26mkt%3dEN-GB%26lc%3d2057%26bk%3d1694253669%26uaid%3d9937a6720d834408828e8319a133df69&uiflavor=web&lic=1&mkt=EN-GB&lc=2057&uaid=9937a6720d834408828e8319a133df69"
          }
          className="text-[12px]  text-[#0067b8] hover:underline"
        >
          Other ways to sign in
        </Link>
        {/* <HelpCircle
          size={18}
          className="cursor-pointer"
          color="#1b1b1b"
          fillRule="#1b1b1b"
        /> */}
      </div>
      <div className="mt-3 flex items-end justify-end">
        <button
          className="w-[108px] min-w-[108px] h-[32px] min-h-[32px] bg-[#0067b8] border-[#0067b8] text-white text-sm"
          onClick={handleSubmit}
          // disabled={isLoading}
        >
          Sign in
        </button>
      </div>
    </>
  );
}

export default Password;
