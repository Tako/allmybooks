import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Container } from './style/components/Container';
import List from "./pages/BookList";
import React from 'react';
import { ResumeContainer } from "./pages/Resume/ResumeContainer";

export default function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <List /> } />
          <Route path="/book-detail/:id" element={ <ResumeContainer /> } />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};
