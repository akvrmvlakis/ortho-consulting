import Image from "next/image"

// import whatever from "../../public/images"

export default function Home() {
  return (
    <>
      <div className="flex flex-col bg-[url('/images/home-hero-bg.jpg')] bg-cover min-h-screen bg-fixed"></div>
      <div className="flex flex-col bg-[url('/images/home-hero-bg.jpg')] bg-cover min-h-screen"></div>
    </>
  )
}
