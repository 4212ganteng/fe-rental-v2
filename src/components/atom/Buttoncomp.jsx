import Title from "antd/es/skeleton/Title";
import React from "react";

export default function Buttoncomp({ title, onclick }) {
  return (
    <>
      <div className="flex justify-end max-w-lg">
        <button
          onClick={onclick}
          className="bg-blue-500 text-slate-200 py-2 px-4 rounded-md "
        >
          {title}
        </button>
      </div>
    </>
  );
}
