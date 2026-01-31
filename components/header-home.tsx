import React from "react";
import Image from "next/image";
const HeaderHome = () => {
  return (
    <nav className="flex justify-center border-b-2 p-6 text-xl font-semibold drop-shadow-xl">
      <div className="flex justify-between items-center w-full">
        <div className="font-normal text-[16px] flex items-center gap-3">
          <div className="h-12 w-12 border-2 border-gray-400 rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src={"/icon.jpg"}
              alt={"image"}
              width={40}
              height={40}
              className="object-cover rounded-full h-full w-full"
            />
          </div>
          Admin
        </div>
        <div>
          <span>SafeRoute</span>
        </div>
        <div>Hehe</div>
      </div>
    </nav>
  );
};

export default HeaderHome;
