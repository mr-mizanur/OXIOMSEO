
import Hero from "./components/Hero";
import Process from "./components/Process";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Success from "./components/Success";
import Team from "./components/Team";

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Services />
      <Success />
      <Process />
      <Team />
    </div>
  );
}
