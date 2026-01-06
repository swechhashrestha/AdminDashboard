import React from "react";

function Home() {
  return (
    <div className="space-y-6 bg-gray-300">
      <h1 className="text-2xl font-semibold mb-6">Dashboard User</h1>
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-blue-950 text-white p-3 w-40 items-center rounded shadow">
          <p className="text-white text-xl">Earning</p>
          <h2 className="text-2xl font-bold">$628</h2>
        </div>

        <div className="bg-white text-blue-800 p-3 w-40 items-center rounded shadow">
          <p className="text-blue-900 text-xl">Share</p>
          <h2 className="text-2xl font-bold">2434</h2>
        </div>

        <div className="bg-white text-blue-800 p-3 w-40 items-center rounded shadow">
          <p className="text-blue-900 text-xl">Likes</p>
          <h2 className="text-2xl font-bold">1259</h2>
        </div>

        <div className="bg-white  text-blue-800 p-3 w-40 items-center rounded shadow">
          <p className="text-blue-900 text-xl">Rating</p>
          <h2 className="text-2xl font-bold">8.5</h2>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white text-black p-3 rounded shadow">
          <div className="flex justify-between mb-4">
            <h2 className="font-semibold">Result</h2>
            <button className="bg-yellow-400 text-white px-3 py-1 rounded text-sm">
              Check Now
            </button>
          </div>

          <div className="flex items-end justify-center mt-25 gap-7 h-70">
            <div className="w-10 bg-yellow-400 h-40"></div>
            <div className="w-10 bg-blue-900 h-72"></div>
            <div className="w-10 bg-yellow-400 h-44"></div>
            <div className="w-10 bg-blue-900 h-56"></div>
            <div className="w-10 bg-yellow-400 h-58"></div>
            <div className="w-10 bg-blue-900 h-60"></div>
            <div className="w-10 bg-yellow-400 h-48"></div>
            <div className="w-10 bg-blue-900 h-70"></div>
            <div className="w-10 bg-yellow-400 h-62"></div>
            <div className="w-10 bg-blue-900 h-42"></div>
            <div className="w-10 bg-yellow-400 h-38"></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow w-60 ml-15">
          <h2 className="mb-4 font-semibold">Progress</h2>

          {/* Circle */}
          <div className="flex justify-center mb-4">
            <div className="relative w-36 h-36">
              <div className="absolute inset-0 rounded-full border-[12px] border-gray-200"></div>
              <div className="absolute inset-0 rounded-full border-[12px] border-yellow-400 border-t-transparent rotate-45"></div>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                85%
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="text-center text-sm text-gray-600 space-y-2 mb-4">
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>

          <button className="w-full bg-yellow-400 text-white py-2 mt-2 rounded-md">
            Check now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
