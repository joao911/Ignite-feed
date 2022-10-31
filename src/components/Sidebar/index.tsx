import React from "react";

// import { Container } from './styles';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-800 overflow-hidden rounded-md max-w-[28rem]">
      <img
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
        alt=""
        className="h-40 w-full"
      />
      <div className="flex flex-col items-center pt-11">
        <strong className="font-bold">João Paulo </strong>
        <span className="text-gray-500">developer</span>
      </div>
      <footer className="border-t-2 border-gray-600 mt-[1.5rem]  py-8  flex justify-center items-center">
        <div>
          <a
            href="#"
            className="pt-3 pb-[14px] px-4 rounded border border-green-500 font-bold text-green-500"
          >
            Editar seu perfil
          </a>
        </div>
      </footer>
    </aside>
  );
};

export default Sidebar;
