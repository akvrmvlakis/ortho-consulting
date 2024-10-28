export default function Home() {
  return (
    <>
      <div className="flex flex-col bg-[url('/images/home-hero-bg.jpg')] items-center justify-center bg-cover min-h-screen bg-fixed z-10">
        <div className="bg-black p-10">
          <h1 className="text-white xl:text-6xl text-2xl">COMPANY LOGO</h1>
        </div>
        <div className="flex flex-col items-center justify-center my-10">
          <button className="bg-white text-xl text-black font-bold rounded px-4 py-3 min-w-[300px] md:min-w-[400px] my-2 hover:bg-yellow-500">
            Dentists - Sign Up Today
          </button>
          <button className="bg-white text-xl text-black font-bold rounded px-4 py-3 min-w-[300px] md:min-w-[400px] my-2 hover:bg-yellow-500">
            Member Login Portal
          </button>
        </div>
      </div>
      <div className="flex flex-col bg-[url('/images/home-hero-bg.jpg')] bg-cover min-h-screen"></div>
    </>
  )
}
