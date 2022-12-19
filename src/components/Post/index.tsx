import React, { useEffect, useState } from "react";
import Avatar from "../Avatar";
import CommentList from "../CommentList";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { filter, map } from "lodash";
import { v4 as uuidv4 } from "uuid";

interface IPost {
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: {
    type: string;
    content: string;
  }[];

  publishAta: Date;
}

export interface ICommentsProps {
  comment: string;
  date: string;
  id: string;
}

interface IPostProps {
  item: IPost;
}

const Post: React.FC<IPostProps> = ({ item }) => {
  const [comments, setComments] = useState<ICommentsProps[]>([]);
  const [newComments, setNewComments] = useState("");

  const publishAtFormatted = format(
    item.publishAta,
    "d 'de' LLLL 'ás' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(item.publishAta, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleChange = (event: any) => {
    setNewComments(event.target.value);
  };

  const handleCreateNewComment = (e: any) => {
    e.preventDefault();
    setComments([
      ...comments,
      {
        id: uuidv4(),
        date: new Date().toJSON(),
        comment: newComments,
      },
    ]);
    setNewComments("");
  };

  const handleRemove = (id: string) => {
    setComments(filter(comments, (item) => item.id !== id));
  };

  useEffect(() => {
    console.log("comments: ", comments);
  }, [comments]);

  return (
    <article className="bg-gray-800 p-10 w-full rounded-md">
      <header>
        <div className="flex justify-between">
          <div className="flex">
            <Avatar useBorder={true} image={item.author.avatarUrl} />

            <div className="flex pl-4 flex-col">
              <p className="font-bold mt-3">{item.author.name}</p>
              <p className="text-gray-500 mt-3">{item.author.role}</p>
            </div>
          </div>
          <div className="mt-2">
            <time
              title={publishAtFormatted}
              dateTime={item.publishAta.toISOString()}
              className="text-gray-500"
            >
              {publishedDateRelativeToNow}
            </time>
          </div>
        </div>
      </header>
      <div className="mt-6">
        <p className="mb-6">Fala galera</p>
        {map(item.content, (item, index) =>
          item.type === "paragraph" ? (
            <p className="mb-6" key={index}>
              {item.content}
            </p>
          ) : (
            <p className="mb-6 text-green-500 font-bold hover:text-green-300">
              <a href="#">{item.content}</a>{" "}
            </p>
          )
        )}

        <p className="mb-6 text-green-500 font-bold hover:text-green-300">
          <a href="#">#NovoProjeto </a>{" "}
        </p>
      </div>
      <form
        onSubmit={handleCreateNewComment}
        className="w-full mt-[1.5rem] pt-[1.5rem] border-t-2 border-gray-600"
      >
        <strong className="leading-6 text-gray-100">Deixe seu feedback</strong>
        <textarea
          value={newComments}
          onChange={handleChange}
          className="w-full bg-gray-900 border-none resize-none h-24 p-4 rounded-md text-gray-100 leading-5 mt-4"
        />
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
        {map(comments, (item, index) => (
          <CommentList key={index} comments={item} />
        ))}
      </div>
    </article>
  );
};

export default Post;
