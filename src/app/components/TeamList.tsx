"use client";
import { useState } from "react";

function TeamList() {
  return (
    <div className=" h-[calc(100vh-148px)]  overflow-auto  bg-gray-100 p-4 hide-scrollbar">
      <div className="bg-blue-100 w-96  p-8 rounded-lg shadow-lg flex flex-col  ">
        <div className="flex justify-center w-full text-gray-700 text-sm mb-4">
          <p>Name</p>
        </div>

        <div>
          <p>Players</p>
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
            <li>e</li>
            <li>f</li>
            <li>g</li>
            <li>h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TeamList;
