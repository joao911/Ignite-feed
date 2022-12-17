import React from "react";
import { PencilLine } from "phosphor-react";
import Avatar from "../Avatar";

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-800 overflow-hidden rounded-md w-full md:min-w-[20rem] md:max-w-[28rem]">
      <img
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt=""
        className="h-40 w-full"
      />
      <div className="flex flex-col items-center relative bottom-8">
        <Avatar useBorder={true} />
        <strong className="font-bold mt-5">João Paulo </strong>
        <span className="text-gray-500">developer</span>
      </div>
      <footer className="border-t-2 border-gray-600 mt-[1.5rem]  py-8  flex justify-center items-center ">
        <div className="pt-3 pb-[14px] px-4 rounded border border-green-500 font-bold text-green-500 w-52 flex items-center hover:bg-green-500 hover:text-white duration-300">
          <PencilLine className="mr-4" size={20} />
          <a href="#" className="">
            Editar seu perfil
          </a>
        </div>
      </footer>
    </aside>
  );
};

export default Sidebar;
