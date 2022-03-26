import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="
    flex
    justify-between
    items-center
    mb-10
    border-b-2
    py-3
    "
    >
      <div className="mr-auto">
        <img className=" w-[40%]" src="/images/logo.png" alt="logo" />
      </div>
      <Link href="/">
        <a className="nav-link">Home</a>
      </Link>
      <Link href="/about">
        <a className="nav-link">About</a>
      </Link>
      <Link href="/users">
        <a className="nav-link">Users listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
