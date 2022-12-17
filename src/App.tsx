import { Header, Post, Sidebar } from "./components";
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <div className="gap-9  mx-8 my-auto py-10 px-24   items-start flex flex-col md:flex-row">
        <Sidebar />
        <Post />
      </div>
    </div>
  );
}

export default App;
