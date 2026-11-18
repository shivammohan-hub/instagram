const Intro = () => {
  return (
    <div className="p-12 h-screen">
    <div className="">
      <img className="h-16 w-auto" src="images/logo.png" alt="" />
    </div>
    <div className="h-screen flex flex-col items-center pt-8">
        <h1 className="text-4xl text-center font-medium">See everyday moments from your <br /><span className="inline-block bg-gradient-to-r from-[#ff6347] via-[#ff0069] to-[#d300c5] bg-clip-text text-transparent mt-4 "> close friends</span>.</h1>
        <img className="h-96 w-auto" src="images/intro.png" alt="" />
    </div>
    </div>
  )
}

export default Intro