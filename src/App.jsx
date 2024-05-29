import News from "./News";
import NavElement from "./NavElement";
import "./App.css";
import { useState } from "react";

const getNews = () => {
  const news = [];
  news.push(
    <News
      title={"Hello World"}
      content={
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      }
      picture={
        "https://www.sz-ybbs.ac.at/fileadmin/DATA/_processed_/f/d/csm_20221128_KoopFHStPoe_2_b6d2ce55be.jpg"
      }
    ></News>
  );

  return news;
};

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send data to server
    // ...
  };
  return (
    <>
      <NavElement />
      {/* Area for all news */}
      <div className="rounded-md p-4 ">{getNews()}</div>
      <center>
        <div className="p-4 w-3/4 rounded-md m-12 justify-center items-center shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col w-full ">
            <h1 className="mb-4">Kontakt</h1>

            <label className="flex flex-col items-center my-2">
              Name:
              <input
                type="text"
                name="name"
                value={name}
                className="w-1/2 rounded-md h-8 mt-1 text-black p-1 border-1 border-black"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label className="flex flex-col items-center my-2">
              Email:
              <input
                type="email"
                name="email"
                className="w-1/2 rounded-md h-8 mt-1 text-black p-1 border-1 border-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label className="flex flex-col items-center my-2">
              Nachricht:
              <textarea
                name="message"
                value={message}
                className="w-1/2 rounded-md h-32 mt-1 text-black p-1 border-1 border-black resize-none"
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <div className="items-center">
              <input
                type="submit"
                value="Submit"
                className="mt-4 rounded-md bg-black text-fontWhite p-2 w-1/4  cursor-pointer "
              />
            </div>
          </form>
        </div>
      </center>
    </>
  );
}

export default App;
