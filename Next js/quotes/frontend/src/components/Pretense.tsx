"use client";
import { useEffect, useState } from "react";
import Box from "./Box";
import Loading from "@/app/loading";

export default function Pretense() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/pretense");
      const { data } = await response.json(); // Parse the response data
      setQuote(data); // Assuming the response contains a 'quote' field
    } catch (error: any) {
      console.log(error.message);
    }
    setLoading(false);
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
