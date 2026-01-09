import React from "react";

function Files() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Files</h1>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white p-5 rounded shadow">
          <i className="fa-solid fa-file-pdf text-red-500 text-3xl"></i>
          <h2 className="mt-3 font-semibold">Invoice.pdf</h2>
          <p className="text-sm text-gray-400">2.4 MB</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <i className="fa-solid fa-file-excel text-green-500 text-3xl"></i>
          <h2 className="mt-3 font-semibold">Product.docx</h2>
          <p className="text-sm text-gray-400">1.2 MB</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <i className="fa-solid fa-file-image text-blue-500 text-3xl"></i>
          <h2 className="mt-3 font-semibold">Design.png</h2>
          <p className="text-sm text-gray-400">3.8 MB</p>
        </div>
      </div>
    </div>
  );
}

export default Files;


