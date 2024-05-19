import Container from "./components/Container/page";
import { Header } from "./components/header/header";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center py-4 w-full">
      <Header />
      <Container />
    </section>
  );
}
