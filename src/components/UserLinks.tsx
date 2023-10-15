"use client";

import { useCartStore } from "@/utils/store";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const UserLinks = () => {
  const { status } = useSession();
  const { clearCart } = useCartStore()
  const handleLogOut = () => {
    signOut()
    clearCart()
  }

  return (
    <div>
      {status === "authenticated" ? (
        <div>
          <Link href="/orders">Orders</Link>
          <Link href="/"className="ml-4 cursor-pointer" onClick={handleLogOut}>Logout</Link>
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default UserLinks;