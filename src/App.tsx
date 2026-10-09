import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tv" element={<PlaceholderPage title="TV Shows" />} />
        <Route path="/movies" element={<PlaceholderPage title="Movies" />} />
        <Route path="/new" element={<PlaceholderPage title="New & Popular" />} />
        <Route path="/my-list" element={<PlaceholderPage title="My List" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;