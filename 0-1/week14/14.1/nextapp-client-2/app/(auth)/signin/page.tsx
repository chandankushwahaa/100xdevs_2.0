
"use client"

import Link from 'next/link';

export default function Signin() {

  function handler(){
    console.log('Sign in button clicked')
  }

  return <div className="mt-10 flex justify-center flex-col">
    <div className="flex justify-center">
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
          <div className="px-10">
            <div className="text-3xl font-extrabold">
              Sign in
            </div>
          </div>
          <div className="pt-2">
            <LabelledInput label="Email" placeholder="chandan@gmail.com" />
            <LabelledInput label="Password" type={"password"} placeholder="123456" />
            <button onClick={handler} type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign in</button>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">Don't have an account? <Link href="/signup" className="text-blue-500">Sign Up</Link></p>
        </div>
    </div>
  </div>
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
}

function LabelledInput({ label, placeholder, type }: LabelledInputType) {
  const uniqueId = `input-${label.toLowerCase()}`; // Generate a unique ID based on the label
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
      <input
        type={type || "text"}
        id={uniqueId}  // Use the generated unique ID
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

