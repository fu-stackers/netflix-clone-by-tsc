import { Outlet } from "react-router-dom";
import { MovieModalProvider } from "../context/MovieModalContext";
import Header from "../Header";

function Layout() {
  return (
    <MovieModalProvider>
      <div className="min-h-screen bg-zinc-950 text-white">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </MovieModalProvider>
  );
}

export default Layout;