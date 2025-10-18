import { Linkedin, Mail } from "lucide-react";
import logo from ".../public/boehm white.png"; 

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-clash">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight"><img src="/boehm white.png" alt="Company logo" className="h-8 md:h-10" />
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/company/boehmtech"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@boehmtech.co"
              className="transition-opacity hover:opacity-70"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-block">
            <div className="border border-border px-6 py-2 text-sm tracking-[0.2em] font-light">
              UNDER CONSTRUCTION
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Our Website is
            <br />
            Under Construction
          </h1>

          {/* Description */}
          <div className="space-y-4 text-muted-foreground max-w-2xl mx-auto">
            <p className="text-base md:text-lg leading-relaxed">
              We're engineering something intelligent, efficient, and beautiful — just like the systems we build.
            </p>
            <p className="text-sm md:text-base">
              Stay tuned while we fine-tune the experience.
            </p>
          </div>

          {/* Social Links */}
          <div className="pt-8 space-y-3">
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="text-muted-foreground">Connect with us on</span>
              <a
                href="https://linkedin.com/company/boehmtech"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline underline-offset-4 transition-all"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="text-muted-foreground">Reach out at</span>
              <a
                href="mailto:info@boehmtech.co"
                className="font-medium hover:underline underline-offset-4 transition-all"
              >
                info@boehmtech.co
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/company/boehmtech"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@boehmtech.co"
              className="transition-opacity hover:opacity-70"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p>© 2025 boehmtech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
