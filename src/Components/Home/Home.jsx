import Connect from "./Connect"
import Navbar from "./Navbar"
import Post from "./Post"
import Stories from "./Stories"

const Home = () => {
  return (
    <div className="flex ">
        <div className="">
            <Navbar />
        </div>
        <div className="w-1/2 flex flex-col items-center ml-24">
            <Stories />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
        <div className="w-1/2 flex flex-col items-center  ">
            <Connect />
        </div>
        
    </div>
  )
}

export default Home