"use client";

import { Button } from "@/components/ui/button";
import { Ellipsis } from "lucide-react";
import { useState } from "react";

const Notification = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="bg-gray-300 max-w-200 rounded-md p-4">
        <div className="flex justify-between">
          <h2 className="font-semibold text-lg">Notification</h2>
          <Button
            variant={"link"}
            className="cursor-pointer"
            onClick={handleModal}
          >
            <Ellipsis />
          </Button>
        </div>
        {modal && (
          <div className="bg-gray-500 absolute right-140 top-35 w-20 p-2 rounded-md text-white drop-shadow-lg">
            <ul>
              <li className="flex flex-col">
                <Button variant={"link"} className="text-white no-underline">
                  Delete
                </Button>
                <Button variant={"link"} className="text-white">
                  Check
                </Button>
              </li>
            </ul>
          </div>
        )}
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eaque!
          Beatae asperiores quidem a adipisci impedit error, officia minima?
          Nisi magnam blanditiis explicabo amet ullam cum labore consectetur hic
          id!
        </p>
      </div>
      <div className="bg-gray-300 max-w-200 rounded-md p-3">
        <div className="flex justify-between">
          <h2 className="font-semibold text-lg">Notification</h2>
          <Button variant={"link"} className="cursor-pointer">
            <Ellipsis />
          </Button>
        </div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eaque!
          Beatae asperiores quidem a adipisci impedit error, officia minima?
          Nisi magnam blanditiis explicabo amet ullam cum labore consectetur hic
          id!
        </p>
      </div>
      <div className="bg-gray-300 max-w-200 rounded-md p-4">
        <div className="flex justify-between">
          <h2 className="font-semibold text-lg">Notification</h2>
          <Button variant={"link"} className="cursor-pointer">
            <Ellipsis />
          </Button>
        </div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eaque!
          Beatae asperiores quidem a adipisci impedit error, officia minima?
          Nisi magnam blanditiis explicabo amet ullam cum labore consectetur hic
          id!
        </p>
      </div>
      <div className="bg-gray-300 max-w-200 rounded-md p-4">
        <div className="flex justify-between">
          <h2 className="font-semibold text-lg">Notification</h2>
          <Button variant={"link"} className="cursor-pointer">
            <Ellipsis />
          </Button>
        </div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eaque!
          Beatae asperiores quidem a adipisci impedit error, officia minima?
          Nisi magnam blanditiis explicabo amet ullam cum labore consectetur hic
          id!
        </p>
      </div>
    </div>
  );
};

export default Notification;
