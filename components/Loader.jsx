const Loader = () => (
  <div>
    <div className="flex flex-col items-center justify-center m-10">
      <div className="flex flex-wrap justify-start p-5 pt-0 cursor-pointer w-96">
        <div>
          <div
            className="bg-gray-300 rounded-xl item animate-pulse"
            style={{ width: 400, height: 260 }}></div>
        </div>
        <div className="w-full">
          <div className="flex flex-row items-center justify-between pt-2">
            <div className="w-5 pr-3 ">
              <div className="w-20 h-8 bg-gray-300 rounded-full animate-pulse"></div>
            </div>
            <div className="w-5 pr-3 ">
              <div className="w-24 h-8 bg-gray-300 rounded-full animate-pulse"></div>
            </div>
            <div className="w-5 pr-3 ">
              <div className="w-20 h-8 bg-gray-300 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between pt-1">
            <div className="w-5 pr-1 ">
              <div className="w-24 h-8 bg-gray-300 rounded-full animate-pulse"></div>
            </div>
            <div className="w-5 pr-1 ">
              <div className="w-24 h-8 bg-gray-300 rounded-full animate-pulse"></div>
            </div>
            <div className="w-5 pr-1 ">
              <div className="w-24 h-8 bg-gray-300 rounded-full animate-pulse"></div>
            </div>
            <div className="w-5 pr-1 ">
              <div className="w-20 h-8 bg-gray-300 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="w-5 pt-1">
            <div className="w-56 h-8 bg-gray-300 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader;
