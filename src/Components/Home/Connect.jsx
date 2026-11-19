const Connect = () => {
  return (
    <div className="">
      <div className="w-full max-w-[400px] mx-auto px-5 py-7">
        <div className="flex items-center justify-between mb-9">
          <div className="flex items-center gap-3">
            <img
              src=""
              className="w-14 h-14 rounded-full object-cover"
              alt="Profile"
            />

            <div>
              <h2 className="font-semibold text-[16px]">_xhiv.am</h2>
              <p className="text-gray-500 font-bold tracking-[4px] text-sm">
                SHIVAM
              </p>
            </div>
          </div>

          <button className="text-blue-600 text-sm font-medium">Switch</button>
        </div>

        <div className="flex justify-between items-center mb-5">
          <h2 className="font-semibold text-[17px]">Suggested for you</h2>
          <button className="font-semibold text-sm">See all</button>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="" className="w-14 h-14 rounded-full object-cover" />

              <div>
                <h3 className="font-semibold text-[16px]">Virat Kohli</h3>
                <p className="text-gray-500 text-sm">Suggested for you</p>
              </div>
            </div>
            <button className="text-blue-600 font-semibold text-sm">
              Follow
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="" className="w-14 h-14 rounded-full object-cover" />

              <div>
                <h3 className="font-semibold text-[16px]">Virat Kohli</h3>
                <p className="text-gray-500 text-sm">Suggested for you</p>
              </div>
            </div>
            <button className="text-blue-600 font-semibold text-sm">
              Follow
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="" className="w-14 h-14 rounded-full object-cover" />

              <div>
                <h3 className="font-semibold text-[16px]">Virat Kohli</h3>
                <p className="text-gray-500 text-sm">Suggested for you</p>
              </div>
            </div>
            <button className="text-blue-600 font-semibold text-sm">
              Follow
            </button>
          </div>

          <div className="flex w-[280px] items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="" className="w-14 h-14 rounded-full object-cover" />

              <div>
                <h3 className="font-semibold text-[16px]">Virat Kohli</h3>
                <p className="text-gray-500 text-sm">Suggested for you</p>
              </div>
            </div>
            <button className="text-blue-600 font-semibold text-sm">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
