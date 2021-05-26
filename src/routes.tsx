import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ChatPage from "./pages/Chatpage";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/chat" component={ChatPage} />
    </BrowserRouter>
  );
}

export default Routes;
