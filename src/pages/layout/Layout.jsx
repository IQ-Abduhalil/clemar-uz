import { Outlet } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

export function Layout() {
  return (
    <>
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
