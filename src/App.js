import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Loading from "./pages/Loading";
import Submain from "./pages/Submain";
import Experience from "./pages/Experience";
import Road from "./pages/Road";
import Request from "./pages/Request";
import RequestCheck from "./pages/RequestCheck";
import Review from "./pages/Review";
import Schedule from "./pages/Schedule";
import ModalBasic from "./pages/ModalBasic";

// 다른 페이지로 자연스럽게 넘어가기 위해 추가함
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <div>
          <Routes>
            <Route path="/" element={<Loading />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/Submain" element={<Submain />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Road" element={<Road />} />
            <Route path="/Request" element={<Request />} />
            <Route path="/RequestCheck" element={<RequestCheck />} />
            <Route path="/Review" element={<Review />} />
            <Route path="/Schedule" element={<Schedule />} />
            <Route path="/ModalBasic" element={<ModalBasic />} />
          </Routes>
        </div>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
