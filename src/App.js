import React, { Suspense } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ModalBasic from "./pages/ModalBasic";

// 다른 페이지로 자연스럽게 넘어가기 위해 추가함
import { AnimatePresence } from "framer-motion";

const Loading_s = React.lazy(() => import('./pages/Loading_s'));
const Main = React.lazy(() => import('./pages/Main'));
const Loading = React.lazy(() => import('./pages/Loading'));
const Submain = React.lazy(() => import('./pages/Submain'));
const Experience = React.lazy(() => import('./pages/Experience'));
const Request = React.lazy(() => import('./pages/Request'));
const RequestCheck = React.lazy(() => import('./pages/RequestCheck'));
const Review = React.lazy(() => import('./pages/Review'));
const Schedule = React.lazy(() => import('./pages/Schedule'));

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <div>
          <Suspense fallback={<Loading_s />}>
            <Routes>
              <Route path="/" element={<Loading />} />
              <Route path="/Main" element={<Main />} />
              <Route path="/Submain" element={<Submain />} />
              <Route path="/Experience" element={<Experience />} />
              <Route path="/Request" element={<Request />} />
              <Route path="/RequestCheck" element={<RequestCheck />} />
              <Route path="/Review" element={<Review />} />
              <Route path="/Schedule" element={<Schedule />} />
              <Route path="/ModalBasic" element={<ModalBasic />} />
            </Routes>
          </Suspense>
        </div>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
