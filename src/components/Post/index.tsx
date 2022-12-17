import React from "react";
import Avatar from "../Avatar";
import CommentList from "../CommentList";

// import { Container } from './styles';

const Post: React.FC = () => {
  return (
    <article className="bg-gray-800 p-10 w-full rounded-md">
      <header>
        <div className="flex justify-between">
          <div className="flex">
            <Avatar useBorder={true} />

            <div className="flex pl-4 flex-col">
              <p className="font-bold mt-3">João Paulo </p>
              <p className="text-gray-500 mt-3">Dev front end</p>
            </div>
          </div>
          <div className="mt-2">
            <time
              title="19 de novembro as 10:36"
              dateTime="2022-11-19 10:36:30"
              className="text-gray-500"
            >
              Publicado á uma hora
            </time>
          </div>
        </div>
      </header>
      <div className="mt-6">
        <p className="mb-6">Fala galera</p>
        <p className="mb-6">
          Acabei de subir mais um projeto no meu portifa, É um projeto que fiz
          pra aprimorar meus conhecimentos em tailwind css{" "}
        </p>
        <p className="mb-6 text-green-500 font-bold hover:text-green-300">
          <a href="#">joao911/fundamentos</a>{" "}
        </p>
        <p className="mb-6 text-green-500 font-bold hover:text-green-300">
          <a href="#">#NovoProjeto </a>{" "}
        </p>
      </div>
      <form className="w-full mt-[1.5rem] pt-[1.5rem] border-t-2 border-gray-600">
        <strong className="leading-6 text-gray-100">Deixe seu feedback</strong>
        <textarea className="w-full bg-gray-900 border-none resize-none h-24 p-4 rounded-md text-gray-100 leading-5 mt-4" />
        <footer>
          <button
            className="py-[1rem] px-4 mt-4 rounded-lg border-none bg-green-500 text-white font-bold cursor-pointer hover:bg-green-300 duration-100"
            type="submit"
          >
            Publicar
          </button>
        </footer>
      </form>
      <div className="mt-7 flex flex-col gap-6">
        <CommentList />
        <CommentList />

        <CommentList />

        <CommentList />
      </div>
    </article>
  );
};

export default Post;
