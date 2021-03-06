import React from "react";
import Link from "next/dist/client/link";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Error = () => {
  const router = useRouter()
  useEffect(()=>{
    setTimeout(() => {
      // router.go(-1)
      router.push("/")
    }, 3000);
  })

  return (
    <div className="text-center">
      <h1>Oooops...</h1>
      <h2>that page cannot be found.</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a className=" underline text-blue-600">Homepage</a>
        </Link>{" "}
      </p>
    </div>
  );
}
export default Error
