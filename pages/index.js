import Head from "next/head";
import Link from "next/dist/client/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Users list</title>
        <meta name="keywords" content="users , hi , mahmoud" />
      </Head>
      <div className=" min-h-[60vh]">
        <h1>
          Homepage
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          recusandae quasi. Sint officiis nostrum eius omnis perspiciatis,
          molestiae voluptates quos?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          recusandae quasi. Sint officiis nostrum eius omnis perspiciatis,
          molestiae voluptates quos?{" "}
        </p>
        <Link href="/users">
          <a className=" block rounded w-40 bg-blue-600 text-white py-2 px-3 w-fit mt-5 mx-auto">
            see users list
          </a>
        </Link>
      </div>
    </>
  );
}
