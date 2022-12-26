import React, { useState } from "react";
import { Trash, ThumbsUp } from "phosphor-react";
import Avatar from "../Avatar";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { ICommentsProps } from "../Post";

interface ICommentListProps {
  comments: ICommentsProps;
  handleRemove: (id: string) => void;
}

const CommentList: React.FC<ICommentListProps> = ({
  comments,
  handleRemove,
}) => {
  const [countLike, setCountLike] = useState(0);

  const publishedDateRelativeToNow = formatDistanceToNow(
    new Date(comments.date),
    {
      locale: ptBR,
      addSuffix: true,
    }
  );

  return (
    <div className="flex gap-4">
      <Avatar isComments={true} useBorder={false} />
      <div className="w-full gap-4">
        <div className="p-4 bg-gray-700 rounded-lg w-full">
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <strong>Devon lane</strong>
              <time
                title="19 de novembro as 10:36"
                dateTime="2022-11-19 1240:30"
                className="text-gray-500 mt-2"
              >
                {publishedDateRelativeToNow}
              </time>
            </div>
            <button
              className="hover:text-red-500"
              title="Deletar comentário"
              onClick={() => handleRemove(comments.id)}
            >
              <Trash size={24} />
            </button>
          </div>
          <p className="mt-5">{comments.comment}</p>
        </div>
        <footer className="mt-4 flex">
          <div
            className={`flex text-gray-400 hover:text-green-300 cursor-pointer`}
            onClick={() => setCountLike(countLike + 1)}
          >
            <ThumbsUp size={24} className="mr-4 " />
            <p className="mr-2">Aplaudir</p>
            &bull; <p className="ml-2">{countLike}</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CommentList;
