import { Routes, Route } from "react-router-dom";
import Landing from "./pages/LandingPage";
import Home from "./pages/Home";
import CodeView from "./pages/CodeView";

export default function App() {

return (

<Routes>

<Route path="/" element={<Landing />} />

<Route path="/editor" element={<Home />} />

<Route path="/code/:slug" element={<CodeView />} />

</Routes>

);

}