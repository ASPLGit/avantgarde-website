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

        <div className="w-full px-6 flex justify-center">
          <div className="md:backdrop-blur-xl backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 max-w-4xl w-full overflow-hidden p-4 2xl:p-6">

            <div className="text-center">
              <h3 className="font-medium text-sm 2xl:text-lg text-white tracking-wide p-2 sm:p-4 md:pt-0">
                Automation & Digitization Consultancy
              </h3>
            </div>

            <div className="text-center">
              <h3 className="font-medium text-sm 2xl:text-lg text-white tracking-wide p-2 sm:p-4 md:pt-0">
                Integrated Operational Solutions
              </h3>
            </div>

            <div className="text-center">
              <h3 className="font-medium text-sm 2xl:text-lg text-white tracking-wide p-2 sm:p-4 md:pt-0">
                People & Technology Expertise
              </h3>
            </div>

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
      {/* <section className="py-16 sm:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Still Using Excel to Run Your Business?
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Let us consult on transforming your processes with innovative,
              enterprise-level solutions at small business prices, including
              integrated billing, customer relationship, vendor, and inventory
              management.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <a href="#contact">Transform Your Business Today</a>
              </Button>
            </div>
          </div>
        </div>
      </section> */}


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
          className="bg-cover bg-center h-150"
          style={{
            backgroundImage: "url('/images/cayman-islands.jpg')",
          }}
        />

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content Wrapper */}
        <div className=" absolute top-50 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Floating Card */}
          <div className="
      bg-white/95
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
      <section id="comparison" className="py-10 sm:pb-24 bg-muted sm:pt-60">
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
    shadow-md
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
    shadow-xl
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
      {/* <section id="team" className="py-16 sm:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Meet Our Leadership
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Decades of combined experience in compliance, technology, and
              financial services.
            </p>
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-32 h-40 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/kenneth-adumekwe.jpeg"
                      alt="Kenneth Adumekwe"
                      width={128}
                      height={160}
                      className="w-full h-full object-cover scale-150 object-[center_25%]"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Kenneth Adumekwe
                    </h3>
                    <p className="text-secondary font-medium">
                      Founder & CEO, Yomoken | Avantgarde Solutions Ltd
                    </p>
                  </div>
                </div>
                <div className="mt-6 text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Kenneth is the visionary and innovative founder and CEO of
                    Yomoken, pioneering reusable privacy-first ID verification
                    using zero-knowledge proofs, decentralized identities, and
                    blockchain to transform age and identity verification.
                    Compliant with the UK{"'"}s Online Safety Act and Cayman
                    regulatory requirements, his vision bridges cutting-edge
                    tech with regulatory excellence.
                  </p>
                  <p>
                    With over 20 years in executive compliance and risk
                    management, Kenneth has led at top firms including KPMG,
                    PricewaterhouseCoopers London, and TDG Plc London. In the
                    Cayman Islands, he specialized in AML compliance, serving as
                    Director of Risk Management at KPMG Cayman Islands
                    (2008-2018), establishing frameworks, leading inspections,
                    and acting as MLRO.
                  </p>
                  <p>
                    He has since provided AML compliance services at DMS
                    Governance, The Maples Group, and Paget-Brown Trust Company
                    Limited. Most recently, as Head of Governance, Risk &
                    Compliance at Hawksford Governance Services Cayman Limited
                    where he acts as the AMLCO and MLRO.
                  </p>
                  <p className="text-sm">
                    <strong>Certifications:</strong> International Compliance
                    Diploma (Merit, 2010), AML/CA (2009), ACIS (2003), CAIA
                    Fundamentals (2019), LLB Honours in Law & Politics - Cardiff
                    University (1998)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-32 h-40 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/hasmukh-kholakiya2.webp"
                      alt="Hasmukh Kholakiya"
                      width={128}
                      height={160}
                      className="w-full h-full object-cover scale-150 object-[center_30%]"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Hasmukh Kholakiya
                    </h3>
                    <p className="text-secondary font-medium">
                      Co-Founder, Yomoken | Founder & Owner, AplombSoft Pvt.
                      Ltd
                    </p>
                  </div>
                </div>
                <div className="mt-6 text-muted-foreground leading-relaxed space-y-4">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

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
            <div className="relative bg-background border border-border sm:rounded-3xl rounded-xl shadow-lg pt-20 pb-10 px-8 sm:px-10 hover:shadow-2xl transition-all duration-300">

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
            </div>



            {/* ================= Hasmukh ================= */}
            <div className="relative bg-background border border-border sm:rounded-3xl rounded-xl shadow-lg pt-20 pb-10 px-8 sm:px-10 hover:shadow-2xl transition-all duration-300">

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
            </div>

          </div>

        </div>
      </section>


      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 sm:py-24 bg-primary text-primary-foreground"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-balance">
                Get Your Free Compliance Health Check
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/90 leading-relaxed">
                Avantgarde provides a free initial health check to advise on how
                you can improve your compliance and back office processes.
                Contact us today to get started.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Ken Adumekwe</p>
                    <p className="text-primary-foreground/80">
                      Founder, Avantgarde Solutions Ltd
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/80 text-sm">Email</p>
                    <a
                      href="mailto:Ken@yomoken.net"
                      className="font-semibold text-lg hover:underline"
                    >
                      Ken@yomoken.net
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/80 text-sm">
                      Telephone
                    </p>
                    <a
                      href="tel:+13459266408"
                      className="font-semibold text-lg hover:underline"
                    >
                      +1 (345) 926-6408
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="https://www.aplombsoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  <span>Technology Partner: AplombSoft India</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/cayman-islands.jpg"
                alt="Cayman Islands - Our home base"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/40" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground font-medium text-lg">
                  Proudly serving the Cayman Islands business community
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6" />
              <span className="font-semibold">Avantgarde Solutions Ltd</span>
            </div>
            <p className="text-background/70 text-sm">
              &copy; {new Date().getFullYear()} Avantgarde Solutions Ltd. All
              rights reserved.
            </p>
            <Link
              href="https://www.aplombsoft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/70 hover:text-background text-sm inline-flex items-center gap-1"
            >
              Powered by AplombSoft
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
          <div className="mt-4 pt-4 border-t border-background/20 text-center">
            <p className="text-background/60 text-xs">
              Avantgarde Solutions Ltd holds a Cayman Islands Trade and Business
              Licence No. 123286
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
