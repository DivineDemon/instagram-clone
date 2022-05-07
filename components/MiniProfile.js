/* eslint-disable @next/next/no-img-element */
import React from "react";

function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="https://lh3.googleusercontent.com/ogw/ADea4I51tAioLLXaORYgQAYasUYcPAt2i1OJcluPIn-SwdI=s32-c-mo"
        alt="user"
        className="rounded-full border p-[2px] h-16 w-16"
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">mushood_7</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
}

export default MiniProfile;
