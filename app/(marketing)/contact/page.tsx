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
        description="Share your details and we’ll arrange a walkthrough of our solutions—underwriting, claims, actuarial, or legacy modernization."
      >
        <div className="max-w-2xl">
          <ContactForm />
        </div>
      </Section>
    </main>
  );
}
