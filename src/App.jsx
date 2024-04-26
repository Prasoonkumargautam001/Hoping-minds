import React from "react";
import { Route, Routes } from "react-router-dom";
import UserList from "./Axios/UserList";
import FakeApiList from "./Axios/FakeApiList";
import PostData from "./Axios/PostData";
import ClassComponent from "./Class Component/CalssComponent";
import Navbar from "./components/Navbar";
import Conditional from "./Conditional/Conditional";
import HomePage from "./components/HomePage";
import NamedCompoenet from "./components/NamedCompoenet";
import NotesInput from "./Notes/NotesInput";
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/axios" element={<UserList />} />
        <Route path="/axios/2" element={<FakeApiList />} />
        <Route path="/axios/post" element={<PostData />} />
        <Route path="/class" element={<ClassComponent />} />
        <Route path="/conditional" element={<Conditional />} />
        <Route path="/notes" element={<NotesInput />} />
        <Route path={"/:name"} element={<NamedCompoenet name={name}/>} />

      </Routes>
    </div>
  );
};

export default App;
