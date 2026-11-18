import TextBox from "./Ui/TextBox"

const Log = () => {
  return (
    <div className="h-screen py-24 px-16 flex flex-col gap-3">
        <h1 className="text-gray-900 font-semibold mb-3">Log into instagram</h1>
        <TextBox placeholder="Mobile number, username or email"/>
        <TextBox placeholder="Password"/>
        <button  className="bg-blue-400 py-2 w-full text-white">Log in</button>
        <button  className="hover:bg-gray-100 py-2 w-full">Forgot Password ?</button>
        <div className="mt-8 flex flex-col">
          <button className="">Log in with Facebook</button>
          <button className="">Create new account</button>
          <img className="h-3 w-16" src="images/meta.jpg" alt="" />
        </div>
    </div>
  )
}

export default Log