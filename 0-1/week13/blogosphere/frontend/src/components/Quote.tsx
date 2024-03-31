import UI from '../assets/UI.png'

const Quote = () => {

  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
        <div className="max-w-md text-center">
          <img src={UI} alt="UI" className="h-50 w-60 object-cover mx-auto my-auto" />
        </div>
      </div>
    </div>
  );
}


export default Quote