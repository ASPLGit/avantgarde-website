import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  FileCheck,
  Users,
  CheckCircle,
  Mail,
  Phone,
  ExternalLink,
  Cog,
  Layers,
  Brain,
  Linkedin,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-hidden" id="top">
      {/* Header */}
      <SiteHeader />

      {/* Hero Section */}

      <section className="relative w-full pt-30 h-auto 2xl:h-screen pb-20 flex flex-col 2xl:gap-20 gap-10 items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-section-background.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/5 to-transparent" />

        <div className="relative z-10 text-center max-w-4xl 2xl:max-w-full px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl 2xl:text-8xl font-bold leading-tight">
            SAAS Provider & <br />
            Consultancy for Business Transformation
          </h1>

          <p className="mt-6 text-white text-base 2xl:text-lg max-w-2xl mx-auto">
            Your SaaS solution partner specializing in automation and
            digital transformation. Empowering businesses to operate
            efficiently and scale without operational complexity.
          </p>
          <div className="mt-8">
            <Link href='#services' className="px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition">
              Learn More
            </Link>
          </div>

        </div>

        <div className="relative z-10 w-full px-6 flex justify-center 2xl:mt-10 sm:mt-5 mt-3">

          <div className="
      max-w-4xl w-full
      rounded-2xl
      bg-black/10
      backdrop-blur-xl
      border border-white/20
      px-6 py-6 sm:px-10 sm:py-8
      text-center
      shadow-2xl
      relative
      overflow-hidden
    ">

            {/* Subtle Glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />

            <p className="text-white/80 text-sm sm:text-base tracking-wide">
              Custom built automation for any Business:
            </p>

            <h3 className="mt-3 text-white text-lg sm:text-2xl 2xl:text-3xl font-semibold leading-relaxed">
              “Show Us Your Lowest Quote. <br />
              <span className="block mt-1 text-white font-bold">
                We’ll Beat It. Guaranteed.”
              </span>
            </h3>

          </div>

        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 sm:py-24 2xl:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          {/* ================= HEADER ================= */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="
        text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl
        font-bold text-foreground
        leading-tight tracking-tight
      ">
              Enterprise-Level Consultancy at Small Business Prices
            </h2>

            <p className="
        sm:mt-6
        text-base sm:text-lg 2xl:text-xl
        text-muted-foreground
        leading-relaxed
      ">
              Through our strategic partnership with{" "}
              <Link
                href="https://www.aplombsoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary font-semibold hover:underline inline-flex items-center gap-1"
              >
                AplombSoft
                <ExternalLink className="h-4 w-4" />
              </Link>
              , Avantgarde enables the delivery of bespoke AI-enhanced
              integrated back and middle office solutions at low prices.
              AplombSoft has a proven track record of helping international
              companies transform their operations.
            </p>
          </div>

          {/* ================= BODY TEXT ================= */}
          <div className="mt-14 max-w-4xl mx-auto space-y-6">
            <p className="text-base sm:text-lg 2xl:text-xl text-muted-foreground leading-relaxed text-center">
              Although no-code application builders can design your business application, you need to manage, maintain, and ensure it is built to scale. AplombSoft and Avantgarde ensure that AI is used correctly and managed so that any bugs are fixed and the initial build can be scaled, legislating for future developments.
            </p>

            <p className="text-base sm:text-lg 2xl:text-xl text-muted-foreground leading-relaxed text-center">
              Via this collaboration, Cayman companies can achieve a complete transformation of their compliance and operational processes. This streamlines administration and operations, creating more time and resources dedicated to growing your business all at low fees designed to support small businesses.
            </p>

            <p className="text-base sm:text-lg 2xl:text-xl text-muted-foreground leading-relaxed text-center">
              Leveraging over 20 years of professional experience, Avantgarde also assists fund operators in identifying and selecting the right service providers to meet their specific needs and budget.
            </p>
          </div>

          {/* ================= CARDS ================= */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">

            {/* ================= CARD 1 ================= */}
            <div className="
    group relative overflow-hidden
    rounded-3xl
    bg-muted/40
    p-10
    shadow-sm
    transition-all duration-300
    hover:-translate-y-2 hover:shadow-2xl
  ">
              {/* Background Icon */}
              <Cog className="
      absolute -bottom-10 -right-10
      w-40 h-40
      text-muted-foreground/10
      transition-transform duration-500
      group-hover:rotate-45
    " />

              <div className="relative z-10 text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                  Automation & Digitization Consultancy
                </h3>

                <p className="mt-6 text-muted-foreground leading-relaxed text-base sm:text-lg">
                  Expert guidance on automating and digitizing compliance workflows
                  aligned with Cayman and international standards.
                </p>
              </div>
            </div>


            {/* ================= CARD 2 ================= */}
            <div className="
    group relative overflow-hidden
    rounded-3xl
    bg-[#FDF1FF]
    p-10
    shadow-sm
    transition-all duration-300
    hover:-translate-y-2 hover:shadow-2xl
  ">
              {/* Background Icon */}
              <Layers className="
      absolute -bottom-10 -right-10
      w-40 h-40
      text-muted-foreground/10
      transition-transform duration-500
      group-hover:scale-125
    " />

              <div className="relative z-10 text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                  Integrated Operational Solutions
                </h3>

                <p className="mt-6 text-muted-foreground leading-relaxed text-base sm:text-lg">
                  Tailored recommendations that integrate and streamline
                  your entire operational ecosystem.
                </p>
              </div>
            </div>


            {/* ================= CARD 3 ================= */}
            <div className="
    group relative overflow-hidden
    rounded-3xl
    bg-[#F6FFEF]
    p-10
    shadow-sm
    transition-all duration-300
    hover:-translate-y-2 hover:shadow-2xl
  ">
              {/* Background Icon */}
              <Brain className="
      absolute -bottom-10 -right-10
      w-40 h-40
      text-muted-foreground/10
      transition-all duration-500
      group-hover:animate-pulse
    " />

              <div className="relative z-10 text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                  People & Technology Expertise
                </h3>

                <p className="mt-6 text-muted-foreground leading-relaxed text-base sm:text-lg">
                  Combining seasoned professionals with cutting-edge
                  technology to deliver measurable impact.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* Excel Pain Point Section */}
      <section className="relative py-20 sm:py-24 2xl:py-32 bg-muted">

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">

            {/* Heading */}
            <h2 className="
        text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl
        font-bold
        text-foreground
        leading-tight tracking-tight
      ">
              Still Using Excel to Run Your Business?
            </h2>

            {/* Description */}
            <p className="
        mt-6
        text-base sm:text-lg md:text-xl 2xl:text-2xl
        text-muted-foreground
        leading-relaxed
      ">
              Let us consult on transforming your processes with innovative,
              enterprise-level solutions at small business prices including
              integrated billing, customer relationship management, vendor,
              and inventory systems.
            </p>

            {/* CTA Link */}
            <div className="mt-10">
              <Link
                href="#contact"
                className="
            inline-flex items-center justify-center
            px-6 sm:px-8 2xl:px-10
            py-3 sm:py-4
            rounded-full
            bg-black text-white
            text-sm sm:text-base 2xl:text-lg
            font-medium
            transition-all duration-300
            hover:bg-gray-800 hover:scale-105
          "
              >
                Transform Your Business Today
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* What Sets Us Apart + Services Section */}
      <section
        id="services"
        className="relative"
      >
        {/* Background Image */}
        <div
          className="bg-cover bg-center h-150 flex justify-center"
          style={{
            backgroundImage: "url('/images/cayman-islands.jpg')",
          }}
        />

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content Wrapper */}
        <div className="flex items-center justify-center w-full">
        <div className=" absolute sm:top-30 top-50 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Floating Card */}
          <div className="
      bg-white/70
      backdrop-blur-xl
      sm:rounded-3xl rounded-lg
      shadow-[0_25px_60px_rgba(0,0,0,0.08)]
      p-6 sm:p-12 lg:p-16
    ">
            <div className="grid lg:grid-cols-2 sm:gap-16 gap-8 items-start">
              {/* LEFT SIDE */}
              <div>
                <h2 className="
             text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl
            font-bold
            text-black
            leading-tight
          ">
                  What Sets Us Apart
                </h2>

                <p className="
            sm:mt-6 mt-4
            text-base sm:text-lg
            text-gray-600
            leading-relaxed
            max-w-xl
          ">
                  Avantgarde provides innovative consultancy covering the automation
                  and digitization of your entire back and middle office processes,
                  not just isolated advice. Unlike no-code platforms that offer quick
                  but limited solutions, our partnership with AplombSoft delivers
                  custom-built, scalable AI-enhanced systems tailored for long-term
                  growth and compliance in complex environments such as Cayman
                  Islands regulated businesses.
                </p>

                {/* CTA */}
                <div className="mt-10">
                  <a
                    href="#contact"
                    className="
                inline-flex items-center justify-center
                px-8 py-4
                rounded-full
                bg-black text-white
                text-sm sm:text-base
                font-medium
                transition-all duration-300
                hover:bg-gray-800 hover:scale-105
              "
                  >
                    Transform Your Business Today
                  </a>
                </div>
              </div>

              {/* RIGHT SIDE CHECKLIST */}
              <div className="2xl:space-y-8 sm:space-y-5 space-y-4 md:block hidden">
                {[
                  "Free initial operations and systems health check to assess your automation and digitisation needs",
                  "Guidance on complete automation solutions for compliance",
                  "Recommendations for process audits",
                  "Business risk assessments consultancy",
                  "IT consultancy services",
                  "Innovative SAAS recommendations for compliance and operational efficiency",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="
                mt-1
              ">
                      <img src="/images/check-icon.svg" alt="check icon" className="min-w-6 min-h-6 w-6 h-6" />
                    </div>

                    <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <div className="2xl:space-y-8 sm:space-y-5 space-y-4 md:hidden block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-40 mb-20">
        {[
          "Free initial operations and systems health check to assess your automation and digitisation needs",
          "Guidance on complete automation solutions for compliance",
          "Recommendations for process audits",
          "Business risk assessments consultancy",
          "IT consultancy services",
          "Innovative SAAS recommendations for compliance and operational efficiency",
        ].map((item) => (
          <div key={item} className="flex items-start gap-4">
            <div className="
                mt-1
              ">
              <img src="/images/check-icon.svg" alt="check icon" className="min-w-6 min-h-6 w-6 h-6" />
            </div>

            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              {item}
            </p>
          </div>
        ))}

      </div>


      {/* No-Code vs Custom Builds Comparison */}
      <section id="comparison" className="py-10 sm:pb-24  bg-gradient-to-b from-[#ffffff] to-muted sm:pt-40">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              No-Code vs. Custom Builds
            </h2>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Why Avantgarde’s approach excels here’s how custom builds compare
              to no-code platforms for compliance and operations.
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">

            {/* No-Code Column */}
            <div className="
    rounded-3xl
    border border-border
    bg-card
    p-8
    shadow-sm
  ">
              <h3 className="text-xl font-semibold text-foreground text-center sm:h-14">
                No-Code Builds
              </h3>

              <div className="mt-10 sm:space-y-2 space-y-1">

                {[
                  "Fast: Days to weeks for basic apps.",
                  "Low upfront, scales with add-ons.",
                  "Limited scalability with complex data.",
                  "Locked into platform ecosystems.",
                  "Self-managed scaling & bug fixes.",
                  "Vendor lock-in and limited APIs.",
                  "Platform-dependent security.",
                  "Best for MVPs or simple tools.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 min-h-[60px]">
                    <div className="min-w-6 min-h-6 h-6 w-6 flex items-center justify-center rounded-full bg-red-100 text-red-500 text-sm mt-1">
                      ✕
                    </div>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}

              </div>
            </div>

            {/* Custom Column */}
            <div className="
    rounded-3xl
    bg-sky-100
    border border-sky-300 overflow-hidden
    p-8
    shadow-sm
    relative
  ">
              <div className="absolute top-0 right-0 bg-sky-500 text-white text-xs px-4 py-1 rounded-bl-xl">
                Recommended
              </div>

              <h3 className="text-xl font-semibold text-foreground text-center">
                Custom Builds <br />
                <span className="text-sm text-muted-foreground">
                  (Avantgarde + AplombSoft)
                </span>
              </h3>

              <div className="mt-10 sm:space-y-2 space-y-1">

                {[
                  "Efficient planning for mission-critical results.",
                  "Lower long-term cost, no platform fees.",
                  "Built to scale with future growth.",
                  "Fully bespoke AI integrations.",
                  "Professional maintenance & optimization.",
                  "Seamless integration with any system.",
                  "Tailored for CIMA, AML & compliance.",
                  "Enterprise automation for regulated firms.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 min-h-[60px]">
                    <div className="min-w-6 min-h-6 h-6 w-6 flex items-center justify-center rounded-full bg-green-200 text-green-600 text-sm mt-1">
                      ✓
                    </div>

                    <p className="text-sm sm:text-base text-foreground leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}

              </div>
            </div>

          </div>


          {/* Bottom Note */}
          <p className="mt-16 text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Custom solutions ensure your systems are bug-free, scalable, and
            future-proof — prioritizing long-term transformation over quick fixes.
          </p>

        </div>
      </section>


      {/* Team Section */}
      <section id="team" className="py-20 sm:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Meet Our Leadership
            </h2>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Decades of combined experience in compliance, technology, and
              financial services.
            </p>
          </div>

          {/* Team Grid */}
          <div className="mt-24 grid lg:grid-cols-2 lg:gap-16 gap-24">

            {/* ================= Kenneth ================= */}
            <div className="relative bg-background border border-border sm:rounded-xl rounded-md shadow-sm pt-20 pb-10 px-8 sm:px-10 transition-all duration-300">

              {/* Image */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white">
                  <Image
                    src="/images/kenneth-adumekwe.jpeg"
                    alt="Kenneth Adumekwe"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center sm:mt-6 mt-3">
                <h3 className="text-2xl font-bold text-foreground">
                  Kenneth Adumekwe
                </h3>

                <p className="mt-2 text-secondary font-medium">
                  Founder & CEO, Yomoken | Avantgarde Solutions Ltd
                </p>
              </div>

              <div className="mt-8 text-muted-foreground leading-relaxed space-y-4 text-sm sm:text-base text-left">
                <p>
                  Kenneth is the visionary and innovative founder and CEO of Yomoken, pioneering reusable privacy-first ID verification using zero-knowledge proofs, decentralized identities, and blockchain to transform age and identity verification. Compliant with the UK's Online Safety Act and Cayman regulatory requirements, his vision bridges cutting-edge tech with regulatory excellence.
                </p>
                <p>
                  With over 20 years in executive compliance and risk management, Kenneth has led at top firms including KPMG, PricewaterhouseCoopers London, and TDG Plc London. In the Cayman Islands, he specialized in AML compliance, serving as Director of Risk Management at KPMG Cayman Islands (2008-2018), establishing frameworks, leading inspections, and acting as MLRO.
                </p>
                <p>
                  He has since provided AML compliance services at DMS Governance, The Maples Group, and Paget-Brown Trust Company Limited. Most recently, as Head of Governance, Risk & Compliance at Hawksford Governance Services Cayman Limited where he acts as the AMLCO and MLRO.
                </p>
                <p className="text-sm">
                  <strong>Certifications:</strong> International Compliance
                  Diploma (Merit, 2010), AML/CA (2009), ACIS (2003), CAIA
                  Fundamentals (2019), LLB Honours in Law & Politics - Cardiff
                  University (1998)
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-border flex justify-center sm:justify-start">
                <Link
                  href="https://www.linkedin.com/in/kenneth-adumekwe-488b0717"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-blue-600 transition"
                >
                  <Linkedin className="h-4 w-4" />
                  View LinkedIn Profile
                </Link>
              </div>
            </div>



            {/* ================= Hasmukh ================= */}
            <div className="relative bg-background border border-border sm:rounded-xl rounded-md shadow-sm pt-20 pb-10 px-8 sm:px-10 transition-all duration-300">

              {/* Image */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white">
                  <Image
                    src="/images/hasmukh-kholakiya2.webp"
                    alt="Hasmukh Kholakiya"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center sm:mt-6 mt-3">
                <h3 className="text-2xl font-bold text-foreground">
                  Hasmukh Kholakiya
                </h3>

                <p className="mt-2 text-secondary font-medium">
                  Co-Founder, Yomoken | Founder & Owner, AplombSoft Pvt.
                  Ltd
                </p>
              </div>

              <div className="mt-8 text-muted-foreground leading-relaxed space-y-4 text-sm sm:text-base text-left">
                <p>
                  Hasmukh Kholakiya is the Co-Founder of Yomoken and the
                  Founder & Owner of{" "}
                  <Link
                    href="https://www.aplombsoft.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary font-medium hover:underline"
                  >
                    AplombSoft Pvt. Ltd.
                  </Link>
                  , headquartered in Ahmedabad, India, with 18+ years of
                  experience in enterprise software architecture, product
                  engineering, and technology leadership.
                </p>
                <p>
                  He specializes in delivering mission-critical financial and
                  hedge fund software solutions, having collaborated with
                  reputed U.S.-based family offices and hedge fund technology
                  vendors to design and implement secure, scalable, and
                  high-performance platforms that meet strict compliance,
                  security, and performance standards.
                </p>
                <p>
                  His expertise also includes Web3 and blockchain-based
                  solution design on the Ethereum ecosystem, enabling
                  decentralized architectures, smart contract integrations, and
                  blockchain-enabled financial workflows aligned with modern
                  digital asset and fintech requirements.
                </p>
                <p>
                  With deep expertise in the Microsoft .NET ecosystem, modern
                  web architectures, API-driven systems, and cloud-ready
                  platforms, Hasmukh focuses on building reliable, future-ready
                  products to help clients achieve long-term growth,
                  operational efficiency, and technological excellence.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-border flex justify-center sm:justify-start">
                <Link
                  href="https://www.linkedin.com/in/hkholakiyaaspl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-blue-600 transition"
                >
                  <Linkedin className="h-4 w-4" />
                  View LinkedIn Profile
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* Healthcare Section */}
      <section id="healthcare" className="py-20 sm:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="sm:rounded-3xl rounded-lg bg-white shadow-[0_25px_60px_rgba(0,0,0,0.04)] p-6 sm:p-10 lg:p-14">

            <div className="grid lg:grid-cols-2 gap-12 items-stretch">

              {/* LEFT SIDE */}
              <div className="flex flex-col justify-between">

                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                    Get Your Free Compliance Health Check
                  </h2>

                  <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Avantgarde provides a free initial health check to advise on how
                    you can improve your compliance and back office processes.
                    Contact us today to get started.
                  </p>
                </div>

                {/* AplombSoft Highlight Card */}
                <div className="mt-12 bg-muted rounded-2xl p-6 border border-border">

                  <p className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
                    Technology Partner
                  </p>

                  <div className="mt-3 flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        AplombSoft
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1 max-w-md">
                        Delivering enterprise-grade AI-enhanced, scalable and compliant
                        software solutions for regulated businesses.
                      </p>
                    </div>

                    <Link
                      href="https://www.aplombsoft.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
                    >
                      Visit Website
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

              </div>

              {/* RIGHT SIDE IMAGE */}
              <div className="relative sm:rounded-3xl rounded-lg overflow-hidden shadow-xl min-h-[350px]">

                <img
                  src="/images/cayman-islands.jpg"
                  alt="Cayman Islands - Our home base"
                  className="object-cover w-full h-full"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute inset-0 flex items-end p-6 sm:p-10">
                  <p className="text-white text-xl sm:text-2xl font-semibold leading-relaxed max-w-md">
                    Proudly serving the Cayman Islands business community
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Speak Directly With Us
            </h3>
            <p className="mt-4 text-muted-foreground">
              Reach out to discuss your compliance and operational transformation needs.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div className="group rounded-2xl border border-border p-8 text-center shadow-sm hover:shadow-xl transition duration-300">

              {/* ICON WRAPPER */}
              <div className="relative mx-auto w-16 h-16">

                {/* Rotating Border */}
                <div className="
        absolute inset-0 rounded-2xl
        opacity-0 group-hover:opacity-40
        transition-opacity duration-500
      ">
                  <div className="
          absolute inset-0 rounded-2xl
          border-2 border-black
          animate-[spin_2s_linear_infinite]
        " />
                </div>

                {/* Inner Box */}
                <div className="
        relative z-10
        w-full h-full
        rounded-2xl
        bg-muted
        flex items-center justify-center
        group-hover:bg-black
        transition-colors duration-300
      ">
                  <Users className="h-6 w-6 text-foreground group-hover:text-white transition-colors duration-300" />
                </div>

              </div>

              <p className="mt-6 font-semibold text-lg text-foreground">
                Ken Adumekwe
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                Founder, Avantgarde Solutions Ltd
              </p>
            </div>


            {/* CARD 2 */}
            <div className="group rounded-2xl border border-border p-8 text-center shadow-sm hover:shadow-xl transition duration-300">

              <div className="relative mx-auto w-16 h-16">

                <div className="
        absolute inset-0 rounded-2xl
        opacity-0 group-hover:opacity-40
        transition-opacity duration-500
      ">
                  <div className="
          absolute inset-0 rounded-2xl
          border-2 border-black
          animate-[spin_2s_linear_infinite]
        " />
                </div>

                <div className="relative z-10 w-full h-full rounded-2xl bg-muted flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                  <Mail className="h-6 w-6 text-foreground group-hover:text-white transition-colors duration-300" />
                </div>

              </div>

              <p className="mt-6 text-sm text-muted-foreground">Email</p>
              <a
                href="mailto:Ken@yomoken.net"
                className="font-semibold text-lg text-foreground hover:underline"
              >
                Ken@yomoken.net
              </a>
            </div>


            {/* CARD 3 */}
            <div className="group rounded-2xl border border-border p-8 text-center shadow-sm hover:shadow-xl transition duration-300">

              <div className="relative mx-auto w-16 h-16">

                <div className="
        absolute inset-0 rounded-2xl
        opacity-0 group-hover:opacity-40
        transition-opacity duration-500
      ">
                  <div className="
          absolute inset-0 rounded-2xl
          border-2 border-black
          animate-[spin_2s_linear_infinite]
        " />
                </div>

                <div className="relative z-10 w-full h-full rounded-2xl bg-muted flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                  <Phone className="h-6 w-6 text-foreground group-hover:text-white transition-colors duration-300" />
                </div>

              </div>

              <p className="mt-6 text-sm text-muted-foreground">Telephone</p>
              <a
                href="tel:+13459266408"
                className="font-semibold text-lg text-foreground hover:underline"
              >
                +1 (345) 926-6408
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* footer */}

      <footer className="py-20 bg-black relative text-white">
        <img src="/images/footer-tree.svg" alt="tree img" className="absolute sm:-bottom-10 -bottom-20 sm:-right-5 -right-10 w-50 h-auto sm:opacity-50 opacity-30" />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* ================= LEFT COLUMN ================= */}
            <div>

              {/* Logo */}
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/logo-text-white.svg"
                  alt="logo with text"
                  width={234}
                  height={50}
                  className="h-12 w-auto"
                />
              </Link>

              {/* Quote */}
              <div className="mt-10 max-w-md">
                <p className="text-sm uppercase tracking-wide text-white/60 font-medium">
                  Custom built automation for any Business
                </p>

                <p className="mt-4 text-xl sm:text-2xl font-semibold leading-relaxed">
                  “Show Us Your Lowest Quote. <br />
                  We’ll Beat It. Guaranteed.”
                </p>
              </div>

            </div>


            {/* ================= RIGHT COLUMN ================= */}
            <div className="flex md:justify-end">

              <div className="
          w-full max-w-sm
          rounded-2xl
          bg-white/5
          backdrop-blur-md
          border border-white/10
          p-8
          relative
          overflow-hidden
          hover:bg-white/10
          transition
        ">

                {/* Subtle Accent Glow */}
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-white/5 rounded-full blur-3xl" />

                <p className="text-xs uppercase tracking-wide text-white/60 font-medium">
                  Powered by
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white">
                  AplombSoft
                </h3>

                <p className="mt-4 text-sm text-white/70 leading-relaxed">
                  Enterprise-grade AI-enhanced, scalable software solutions
                  engineered for regulated and growth-focused businesses.
                </p>

                <Link
                  href="https://www.aplombsoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
              mt-6 inline-flex items-center justify-center gap-2
              px-6 py-3
              rounded-full
              bg-white text-black
              text-sm font-medium
              hover:bg-gray-200
              transition
            "
                >
                  Visit AplombSoft
                  <ExternalLink className="h-4 w-4" />
                </Link>

              </div>

            </div>

          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-6 border-t border-white/10 text-center">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Avantgarde Solutions Ltd. All rights reserved.
            </p>

            <p className="mt-3 text-xs text-white/40">
              Avantgarde Solutions Ltd holds a Cayman Islands Trade and Business
              Licence No. 123286
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}
