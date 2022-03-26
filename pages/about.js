import Head from "next/dist/shared/lib/head";

const About = () => {
  return (
    <>
    <Head>
      <title>About</title>
      <meta name="keywords" content="users , hi , mahmoud" />
    </Head>
    <div className="min-h-[60vh]">
      <h1>About</h1>
      {Array(8).fill(" ").map((el) => (
      <p key={el}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, beatae iusto? Fugiat beatae doloremque quae vitae! Asperiores laborum sint a!</p>
      ))}
    </div>
    </>
  );
}

export default About;