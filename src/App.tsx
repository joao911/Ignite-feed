import { Header, Post, Sidebar } from "./components";
import { map } from "lodash";
import "./global.css";

function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/joao911.png",
        name: "João Paulo",
        role: "Desenvolvedor frot end",
      },
      content: [
        { type: "paragraph", content: "Fala galera" },
        {
          type: "paragraph",
          content: "Acabei de subir mais um projeto pro meu portifólio",
        },
        { type: "link", content: "joao911/fundamentos" },
      ],
      publishAta: new Date("2022-05-03 20:00:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/joao911.png",
        name: "João Paulo",
        role: "Desenvolvedor frot end",
      },
      content: [
        { type: "paragraph", content: "Fala galera" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa, É um projeto que fiz pra aprimorar meus conhecimentos em tailwind css",
        },
        { type: "link", content: "joao911/fundamentos" },
      ],
      publishAta: new Date("2022-10-03 20:00:00"),
    },
  ];

  return (
    <div>
      <Header />
      <div className="gap-9  mx-8 my-auto py-10 px-24   items-start flex flex-col md:flex-row">
        <Sidebar />

        <div className="flex flex-col gap-9 w-full">
          {map(posts, (item) => (
            <Post item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
