import React, { useState } from "react";
// import { Route, Routes } from "react-router";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import './App.scss';
import { Language } from "./utils/functions/language";

export const App: React.FC = () => {
  const [lang, setLang] = useState<string>('en');

  return (
    <div className="app">
      <Language.Provider value={lang}>
        <Header setLang={setLang} />

        <Body />

        <Footer/>
      </Language.Provider>

      {/* <Routes>
        <Route path="/" element={} />
        <Route path="*" element={} />
      </Routes> */}
    </div>
  );
};
