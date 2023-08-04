"use client";
import { Suspense, useEffect, useState } from "react";
import Box from "./Box";
import Loading from "@/app/loading";

export default function Pretense() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true); // Set loading to true initially

  const getData = async () => {
    setLoading(true); // Set loading to true before fetching data
    try {
      const response = await fetch("/api/pretense");
      const { data } = await response.json(); // Parse the response data
      setQuote(data); // Assuming the response contains a 'quote' field
    } catch (error: any) {
      console.log(error.message);
    }
    setLoading(false); // Set loading to false after fetching data (whether successful or not)
  };

  useEffect(() => {
    getData(); // Fetch data on component mount
  }, []); // Run only once on mount, so leave the dependency array empty

  return (
    <>
      {loading ? (
        <Loading /> // Show loading state while fetching data
      ) : (
        <Box quote={quote} /> // Show Box component when data is available
      )}
      {/* <Suspense fallback={<Loading />}>
        <Box quote={quote} />
      </Suspense> */}

      <button
        onClick={getData}
        className="mt-12 bg-[#1989E6] text-white text-lg px-12 py-4 rounded-2xl hover:bg-[#1921BE] duration-150"
        disabled={loading} // Disable the button while loading
      >
        {loading ? "Loading..." : "Another One"}
      </button>
    </>
  );
}
