import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/marketing/ContactForm";

export const metadata = {
  title: "Contact | MaestrosAI",
  description:
    "Get in touch for a tailored walkthrough or to discuss your insurance AI needs.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <Section
        id="demo"
        eyebrow="Get in touch"
        title="Request a demo"
        description="Share your details and we’ll arrange a walkthrough of our solutions: agentic AI driven insurance model office, climate risk, legacy systems transformation, or dynamic MI dashboards with predictive capabilities."
      >
        <div className="max-w-2xl">
          <ContactForm />
        </div>
      </Section>
    </main>
  );
}
