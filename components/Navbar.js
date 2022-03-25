import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return ( 
    <nav>
      <div className="logo">
        <Image src="/images/logo.png" alt="logo" width={200} height={125} />
      </div>
      <Link  href="/">Home</Link>
      <Link  href="/about">About</Link>
      <Link  href="/users">Users listing</Link>
    </nav>
  );
}

export default Navbar;