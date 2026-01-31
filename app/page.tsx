import Login from "@/components/auth/Login";
import PostButton from "@/components/post-button";

import Link from "next/link";

const Home = () => {
  return (
    <>
      {/*<main {className="min-h-screen bg-[radial-gradient(ellipse_at_top,#38bdf8,#1e40af)]">
      <div>
        <Login />
      </div>
    </main>
    */}
      <div className="flex flex-col gap-15">
        <div>
          <h1>Welcome to SafeRoute, John Doe!</h1>
          <div>
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <div className="flex gap-5 my-3 w-full">
              <div className="bg-gray-300 w-100 h-50 rounded-md"></div>
              <div className="bg-gray-300 w-100 h-50 rounded-md"></div>
              <div className="bg-gray-300 w-100 h-50 rounded-md"></div>
            </div>
            <div className="bg-gray-300 w-full h-60 rounded-md"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">
              Articles and Announcements
            </h1>
            <PostButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
