import React from 'react';
import List from "./pages/List";
import Resume from "./pages/Resume";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { Container } from './style/components/Container';

export default function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <List /> } />
          <Route path="/book-detail" element={ <Resume /> } />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};
