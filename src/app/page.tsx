import Container from "./Container/page";
import { Header } from "./header/header";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center py-4">
      <Header />
      <Container />
    </section>
  );
}
