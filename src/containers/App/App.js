import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout, Main } from "../../pages";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
};
