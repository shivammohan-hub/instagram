const TextBox = (props) => {
    let placeholder = props.placeholder ;
  return (
    <div className="">
        <input className="w-full text-gray-800 placeholder-gray-700 font-medium text-sm outline-none border hover:border-black py-5 px-4 rounded-2xl" type="text"  placeholder={placeholder} />
    </div>
  )
}

export default TextBox