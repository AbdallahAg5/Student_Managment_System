import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Login from "./Components/Pages/Login";
import About from "./Components/Pages/About";
import Contacts from "./Components/Pages/Contacts";
import Student from "./Components/Pages/Student";
import Teacher from "./Components/Pages/Teacher";
import Administrator from "./Components/Pages/Administrator";

import { BsMoonFill } from "react-icons/bs";
import { MdWbSunny } from "react-icons/md";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState(true);
  const [menu, setMenu] = useState(true);

  menu
    ? (document.body.style.overflow = "auto")
    : (document.body.style.overflow = "hidden");

  const handleMode = () => {
    if (mode) {
      setMode(false);
    } else {
      setMode(true);
    }
  };

  const handleMenu = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      setMenu(true);
    }
  });
  const handleBlur = () => {
    setMenu(true);
  };

  const BtnRef = useRef();
  useEffect(() => {
    window.onscroll = function () {
      if (this.scrollY >= 500) {
        BtnRef.current.classList.add("show");
      } else {
        BtnRef.current.classList.remove("show");
      }
    };
    BtnRef.current.onclick = function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="App" id={mode ? "light" : "dark"}>
        <Nav mode={mode} menu={menu} goback={handleBlur} />
        <div onClick={handleBlur} className={menu ? null : "blur"}></div>
        <span
          className="mode"
          id={menu ? null : "span-go"}
          style={mode ? { color: "#2B084C" } : { color: "white" }}
          onClick={() => handleMode()}
        >
          {mode ? <BsMoonFill /> : <MdWbSunny />}
        </span>
        <Routes>
          <Route path="/" exact element={<Main mode={mode} />} />
          <Route path="/Login" element={<Login mode={mode} />}>
            <Route exact index element={<Student exact />} />
            <Route exact path="Student" element={<Student />}></Route>
            <Route path="Teacher" element={<Teacher />}></Route>
            <Route path="Administrator" element={<Administrator />}></Route>
          </Route>
          <Route path="/About" element={<About mode={mode} />} />
          <Route path="/Contacts" element={<Contacts mode={mode} />} />
        </Routes>
        <Footer />
        <span ref={BtnRef} className="up">
          <p>&#10140;</p>
        </span>
        <span className="menu" onClick={() => handleMenu()}>
          {menu ? <CgMenu /> : <CgClose />}
        </span>
      </div>
    </BrowserRouter>
  );
}

export default App;
