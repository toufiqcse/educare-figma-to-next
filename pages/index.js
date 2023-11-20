import Community from "@/components/Community/Community";
import Divider from "@/components/Divider/Divider";
import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
        <Divider />
        <Features />
        <Divider />
        <Community />
        <Divider />
      </section>
    </>
  );
}
