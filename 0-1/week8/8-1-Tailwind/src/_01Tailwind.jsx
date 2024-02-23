

const Youtube = () => {
  return (
    <>
    <div className="grid grid-cols-12 gap-2 ">
        <div className="col-span-2">Home</div>
        <div className="col-span-2">About</div>
        <input className="col-span-4" type="text" placeholder="Search..." />
        <div className="col-span-2">Sign In</div>
        <div className="col-span-2">Sign Up</div>
    </div>
    <br />
    <div className="flex">
        <div className="w-[20%]">Home</div>
        <div className="w-[20%]">About</div>
        <input className="w-[20%]" type="text" placeholder="Search..." />
        <div className="w-[20%]">Sign In</div>
        <div className="w-[20%]">Sign Up</div>
    </div>

    <h1 className="text-center m-10 underline text-4xl ">Responsive</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-gray-800 p-4">1</div>
        <div className="bg-gray-800 p-4">2</div>
        <div className="bg-gray-800 p-4">3</div>
        <div className="bg-gray-800 p-4">4</div>
    </div>

    </>

  )
}

export default Youtube