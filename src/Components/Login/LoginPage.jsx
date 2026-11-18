import Footer from "./Footer"
import Intro from "./Intro"
import Log from "./Log"

const LoginPage = () => {
  return (
    <div className="h-[500px]">
      <div className="flex">
          <div className="w-7/12 border-2">
              <Intro />
          </div>
          <div className="w-5/12 border-2">
              <Log />
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default LoginPage