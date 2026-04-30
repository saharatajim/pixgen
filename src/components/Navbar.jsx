"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const userData=authClient.useSession()
  const user=userData?.data?.user

  const signOut=async()=>{
 await authClient.signOut();
  }
  return (
    <div className=" shadow  px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/allphotos"}>All Photos</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          {!user&&<ul className="flex space-x-5 items-center  text-sm">
            <li>
              <Link href={"/signup"}>SignUp</Link>
            </li>
            <li>
              <Link href={"/signin"}>SignIn</Link>
            </li>
          </ul>}
          {user &&
          <div className="flex gap-3 items-center">
            <div className="flex items-center gap-4">
              <Avatar>
        <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
        <Avatar.Fallback>S</Avatar.Fallback>
      </Avatar>
              <p>{user.name}</p>
            </div>
            <button className="btn  p-1 rounded-full active:scale-95" onClick={signOut}>
               <Link href={"/signin"}>Logout</Link>
            </button>
            </div>}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;