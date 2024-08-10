import { Outlet } from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer";


function Layout() {
    return (
      <div className="flex flex-col items-center gap-5 justify-evenly mx-auto w-full lg:max-w-4xl">
        <Header />
        <main className="mb-6">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  };
  
  export default Layout;