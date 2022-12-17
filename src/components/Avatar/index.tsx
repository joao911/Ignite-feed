import React from "react";

// import { Container } from './styles';
interface IAvatar {
  useBorder?: boolean;
  isComments?: boolean;
}

const Avatar: React.FC<IAvatar> = ({ useBorder, isComments = false }) => {
  return (
    <img
      src="https://github.com/joao911.png"
      alt=""
      className={`rounded ${
        isComments
          ? "w-[3.1rem] h-[3.1rem] rounded-lg"
          : "w-28 h-28 border-4 rounded"
      } ${
        useBorder
          ? "border-gray-800 outline outline-offset-2 outline-4 outline-green-500"
          : ""
      } `}
    />
  );
};

export default Avatar;
