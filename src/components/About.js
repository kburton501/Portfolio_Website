import React from "react";
/**
 * @todo: Center navbar in smaller devices
 *
 */
export default function About() {
  return (
    <div className="grid grid-cols-2 h-full divide-current divide-x-2 name-text">
      <div className="text-current h-100">
        <img
          src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
          alt="..."
          class="shadow-sm m-4 p-4 rounded-full align-middle "
        />
      </div>
      <div className="text-white h-100 m-2 p-2 ">
        <h1 className="text-2xl m-2 p-2 text-current text-right font-mono">
          {" "}
          About //
        </h1>
        <p className="text-white m-2 p-2 font-mono">
          <p class="mb-3 font-normal ">
            Portland State University Graduate with a Bachelor's Degree in
            Computer Science.
          </p>
          <p>
            A beginning is the time for taking the most delicate care that the
            balances are correct. This every sister of the Bene Gesserit knows.
            To
          </p>
          <p>– from “Manual of Muad’Dib” by the Princess Irulan</p>
        </p>
      </div>
    </div>
    /** 
    <div className="flex justify-center">
      <div className="flex flex-col items-center bg-white m-11 rounded-lg border drop-shadow-2xl shadow-md md:flex-row  hover:bg-gray-100">
        <img
          class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-96 md:rounded-none md:rounded-l-lg"
          src="https://images.unsplash.com/photo-1616684552752-f36d0f9f5f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
          alt=""
        />
        <div class="flex flex-col m-3 text-green">
          <h5 class="mb-2 text-2xl font-bold text-yellow">About</h5>
          <p class="mb-3 font-normal ">
            Portland State University Graduate with a Bachelor's Degree in
            Computer Science.
          </p>
          <p>
            A beginning is the time for taking the most delicate care that the
            balances are correct. This every sister of the Bene Gesserit knows.
            To
          </p>
          <p>– from “Manual of Muad’Dib” by the Princess Irulan</p>
        </div>
      </div>
    </div>
    */
  );
}
