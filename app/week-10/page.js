"use client";

import ShoppingList from "./shopping-list/page.js";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="p-4 bg-cyan-900 min-h-screen w-full">
    <h1 className=" text-3xl text-amber-100 mb-10">Web Application(week-10):</h1>

      {!user && (
        <>
            <div className="items-center flex flex-col mt-40">
                <p className="border-3 border-black mt-4 w-80 h-25 bg-amber-950 p-4 text-3xl text-amber-100 rounded-2xl">Please sign in to continue.</p>
                <button onClick={gitHubSignIn} className="border-2 border-black mt-2 w-35 bg-green-800 rounded-lg text-amber-100 p-2 cursor-pointer transition-colors hover:bg-green-600">Sign in with GitHub</button>
            </div>
        </>
      )}
      {user && (
        <>
            <h1 className="text-3xl text-amber-100">Welcome, {user.displayName ?? "User"}!</h1>
            <p className="text-sm text-amber-100">{user.email}</p>

            <button onClick={firebaseSignOut} className="border-2 border-black mt-5 w-25 bg-green-800 rounded-lg text-amber-100 p-2 cursor-pointer transition-colors hover:bg-green-600">Log Out</button>

            <div>
                <ShoppingList userVerified = {user}/>
            </div>
        </>
      )}
    </main>
  );
}
