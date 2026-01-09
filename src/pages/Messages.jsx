import React from "react";

function Messages() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Messages</h1>

      <div className="space-y-4">
        <div className="bg-white p-5 rounded shadow">
          <div className="flex justify-between">
            <h2 className="font-semibold">John Doe</h2>
            <span className="text-sm text-gray-400">2 min ago</span>
          </div>
          <p className="text-gray-600 mt-2">
            Can you update me on the order status?
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <div className="flex justify-between">
            <h2 className="font-semibold">Admin Team</h2>
            <span className="text-sm text-gray-400">1 hour ago</span>
          </div>
          <p className="text-gray-600 mt-2">
            New product has been added successfully.
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <div className="flex justify-between">
            <h2 className="font-semibold">Support</h2>
            <span className="text-sm text-gray-400">Yesterday</span>
          </div>
          <p className="text-gray-600 mt-2">
            Your ticket has been resolved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Messages;


