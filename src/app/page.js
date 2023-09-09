"use client";

import Head from "next/head";
import Login from "@/components/auth/Login";

// import '@feather-icons/dist/feather.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>
      <Login />
    </>
  );
}
