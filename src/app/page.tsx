import {
  Button,
  Container,
  Navbar,
  OrangeSubHeading,
  Section,
  SeperationLine,
  SubHeading,
} from "@/components/index";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Section className="h-135 flex flex-col justify-center items-center gap-6">
          <OrangeSubHeading>
            For fast moving engineering teams.
          </OrangeSubHeading>
          <h1 className="font-bold max-w-sm text-center text-4xl">
            Manage and stimulate agentic{" "}
            <span className="text-red-400/80">workflows</span>
          </h1>
          <SubHeading>
            We empower developersand technical teams to create, simulate, and
            manage AI-driver workflows visually
          </SubHeading>
          <div className="flex gap-4">
            <Button>Start building</Button>
            <button className="px-5 py-2 border border-neutral-100 rounded-lg cursor-pointer hover:bg-neutral-300 transition-colors duration-300">
              View pricing
            </button>
          </div>
          <h5 className="text-sm text-neutral-400">
            Some Blah Blab Blah is written with svgs
          </h5>
        </Section>
        <SeperationLine />
      </Container>
    </>
  );
}
