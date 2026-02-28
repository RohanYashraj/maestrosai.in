import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/marketing/ContactForm";
import { Mail, MessageSquare, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Contact | MaestrosAI",
  description:
    "Get in touch with our insurance AI experts for a tailored walkthrough or project evaluation.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      {/* Page Header */}
      <section className="py-20 bg-ink text-white relative overflow-hidden">
        <Container>
          <div className="max-w-3xl relative z-10">
            <div className="inline-block mb-4 px-3 py-1 border border-accent/20 rounded-full bg-accent/5">
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-accent uppercase">
                Channel_Open
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tight">
              Design your AI roadmap.
            </h1>
            <p className="text-xl text-muted-foreground/80 font-light leading-relaxed">
              Connect with our solutions team to discuss underwriting
              automation, actuarial-grade analytics, or compliance-first AI
              integration.
            </p>
          </div>
        </Container>

        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
      </section>

      {/* Form Section */}
      <section id="demo" className="py-24">
        <Container>
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Left Column: Context/Trust */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h3 className="text-xl font-serif font-bold text-ink mb-6 pb-2 border-b border-ink/5">
                  Direct Channels
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-sm bg-surface/5 flex items-center justify-center border border-surface/10">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-ink uppercase tracking-wider">
                        Email
                      </p>
                      <p className="text-muted-foreground">
                        solutions@maestrosai.in
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-sm bg-surface/5 flex items-center justify-center border border-surface/10">
                      <MessageSquare className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-ink uppercase tracking-wider">
                        Support
                      </p>
                      <p className="text-muted-foreground">
                        Available for live demos
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-accent/10 bg-accent/2 rounded-sm">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                  <h4 className="font-bold text-ink uppercase tracking-wide text-sm">
                    Enterprise Security
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your data remains yours. We prioritize GDP compliance,
                  SOC2-ready processes, and secure data handling for all
                  partnership inquiries.
                </p>
              </div>

              <div className="text-[10px] font-mono text-ink/20 space-y-1">
                <p>{">"} STATUS: LISTENING</p>
                <p>{">"} LATENCY: OPTIMIZED</p>
                <p>{">"} PRIORITY: HIGH</p>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-2">
              <div className="bg-surface p-8 md:p-12 border border-ink/5 shadow-sm relative">
                <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-accent/20 pointer-events-none" />
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
