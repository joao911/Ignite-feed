import { Header, Sidebar } from "./components";
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <div className="max-w-[28rem]  mx-8 my-auto px-16 py-8 grid grid-cols-1 gap-2  items-start">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
