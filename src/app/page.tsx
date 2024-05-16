import Container from "./Container/page";
import { Header } from "./header/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-4">
      <Header />
      <Container />
    </main>
  );
}
