import TextBox from "../Ui/TextBox"

const Log = () => {
  return (
    <div className="py-24 px-16 flex flex-col gap-3">
        <h1 className="text-gray-900 font-semibold mb-3">Log into instagram</h1>
        <TextBox placeholder="Mobile number, username or email"/>
        <TextBox placeholder="Password"/>
        <button  className="bg-blue-300 py-2 w-full text-white mt-3 rounded-full py-3 text-sm">Log in</button>
        <button  className="hover:bg-gray-100 py-2 w-full text-sm rounded-full hover:bg-gray-100 font-semibold text-gray-700">Forgot Password ?</button>
        <div className="mt-8 flex flex-col items-center">
          <button className="bg-gray-100 py-3 w-full text-sm rounded-full hover:bg-gray-100 font-semibold text-gray-700 hover:bg-gray-200 flex items-center justify-center gap-3">
            <img className="h-3.5 w-auto" src="images/facebook.png" alt="" />
            Log in with Facebook</button>
          <button className="border border-blue-600 font-medium py-2 w-full text-[#0064e0] mt-3 rounded-full py-3 text-sm hover:bg-gray-100">Create new account</button>
          <img className="h-3 w-auto mt-7" src="images/meta.jpg" alt="" />
        </div>
    </div>
  )
}

export default Log