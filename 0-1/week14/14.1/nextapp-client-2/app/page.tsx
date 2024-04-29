// http://localhost:3000/

import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Next.Js App</h1>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem accusantium tempore pariatur voluptates esse natus similique. Alias ad sapiente, debitis obcaecati, voluptas, labore totam corrupti laborum aliquid esse in similique?        </p>
        <div className="flex justify-center gap-4">
          <Link href="/signup">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
              Sign Up
            </button>
          </Link>
          <Link href="/signin">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:ring-blue-300">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
