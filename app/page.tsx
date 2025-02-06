import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Dna,
  FlaskRoundIcon as Flask,
  Microscope,
  Building2,
  Users,
  Lightbulb,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://www.aganitha.ai/wp-content/uploads/2023/05/aganitha-logo.png"
              alt="Aganitha Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Disease Areas
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Solutions
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Case Studies
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Company
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Blogs
            </Link>
          </nav>
          <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
            Contact Us
          </Button>
        </div>
      </header>
      <div className="fixed top-16 w-full z-40 animate-in slide-in-from-top duration-500">
        <a href="https://pmwcintl.com/" target="_blank" rel="noopener noreferrer" className="block">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 shadow-md">
            <div className="container mx-auto px-4 py-3">
              <div className="flex items-center gap-4 justify-center animate-pulse">
                <div className="relative group cursor-pointer">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-m2gU9OCg7nziKnJDUEwBz1aKTsLVJN.png"
                    alt="PMWC Conference 2025"
                    width={200}
                    height={60}
                    className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
                <p className="text-sm text-gray-700 max-w-3xl animate-fade-in">
                  We have participated in the PMWC conference which provides an exceptional forum for the exchange of
                  information about the latest advances in technology (e.g., DNA sequencing technology), in clinical
                  implementation (e.g., cancer and beyond), research, and in all aspects related to the regulatory and
                  reimbursement sectors.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <main>
        <section className="min-h-screen pt-44 pb-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70"></div>
          <div className="container mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold">
                    <span className="text-gray-900">
                      We make
                      <br />
                      AI work for{" "}
                    </span>
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      Science
                    </span>
                  </h1>
                  <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
                    Aganitha partners with global biopharma to bring better medicines to market faster.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-blue-100 shadow-lg">
                    <h3 className="text-sm uppercase tracking-wider text-blue-600 font-medium mb-4">From Data to:</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        {
                          name: "Targets & Biomarkers",
                          icon: "🎯",
                        },
                        {
                          name: "Small molecules",
                          icon: "⚛️",
                        },
                        {
                          name: "Antibodies",
                          icon: "🧬",
                        },
                        {
                          name: "Enzymes",
                          icon: "🔬",
                        },
                        {
                          name: "ASO",
                          icon: "🧪",
                        },
                        {
                          name: "mRNA",
                          icon: "🧫",
                        },
                        {
                          name: "Gene Tx",
                          icon: "🔋",
                        },
                        {
                          name: "CMC",
                          icon: "⚗️",
                        },
                      ].map((item) => (
                        <div
                          key={item.name}
                          className="group relative bg-gradient-to-br from-white to-blue-50 p-3 rounded-xl border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-md"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                              {item.icon}
                            </span>
                            <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                              {item.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-purple-100 shadow-lg">
                    <h3 className="text-sm uppercase tracking-wider text-purple-600 font-medium mb-4">Powered by:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {[
                        {
                          name: "Aquatic & Generative AI",
                          icon: "🤖",
                          description: "Advanced AI models and algorithms",
                        },
                        {
                          name: "Computational Biology",
                          icon: "🧬",
                          description: "Biological data analysis and modeling",
                        },
                        {
                          name: "Computational Chemistry",
                          icon: "⚗️",
                          description: "Chemical structure and interaction analysis",
                        },
                      ].map((item) => (
                        <div
                          key={item.name}
                          className="group bg-gradient-to-br from-white to-purple-50 p-4 rounded-xl border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-md"
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                              {item.icon}
                            </span>
                            <div>
                              <h4 className="font-medium text-gray-700 group-hover:text-purple-600 transition-colors">
                                {item.name}
                              </h4>
                              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  Discover Our Solutions →
                </Button>
              </div>

              <div className="relative order-first lg:order-last mt-[-600px]">
                <Image
                  src="https://www.aganitha.ai/wp-content/uploads/2024/02/ai-1024x745.png"
                  alt="DNA Structure"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
              
            </div>
          </div>
        </section>

        {/* Features Grid Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto text-center">
          <h1 style={{ fontSize: '39px' }} className=" font-bold mb-10 ">Transforming biopharma R&D powered by deep science & deep tech
          </h1>
             <div className="container text-justify mb-10">
              <p>Aganitha is a new generation in silico company that integrates high-throughput sciences with deep learning-based generative models to solve complex drug discovery and development challenges.

             Bringing a new drug to market takes $1-2B and 6-12 years. Advances in scRNA, multiomics, long read sequencing, structural biology, first principles based chemistry etc. now allows us to take far less time, at a lower cost and a higher probability of success.
             Our services and solutions help drive this transformation with the following foundational elements.</p>
            </div>
          </div>
          <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: Brain,
                  title: "AI & Deep Learning",
                  desc: "Advanced AI models for drug discovery",
                  gradient: "from-blue-50 to-blue-100/50",
                  iconColor: "text-blue-600",
                },
                {
                  icon: Dna,
                  title: "Computational Biology",
                  desc: "Biological data analysis",
                  gradient: "from-purple-50 to-purple-100/50",
                  iconColor: "text-purple-600",
                },
                {
                  icon: Flask,
                  title: "Drug Development",
                  desc: "Accelerated R&D process",
                  gradient: "from-indigo-50 to-indigo-100/50",
                  iconColor: "text-indigo-600",
                },
                {
                  icon: Microscope,
                  title: "Research Solutions",
                  desc: "Innovative research tools",
                  gradient: "from-violet-50 to-violet-100/50",
                  iconColor: "text-violet-600",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`space-y-4 p-6 bg-gradient-to-br ${item.gradient} rounded-xl hover:scale-105 transition-transform duration-300`}
                >
                  <item.icon className={`h-10 w-10 ${item.iconColor}`} />
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl text-center text-red-400 font-bold mb-12">Why aganitha?</h2>
            <h3 className="text-4xl font-bold mb-16 ">
              Leverage our experience and strengths to build transformational solutions in biopharma
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Building2,
                  title: "Multi-domain skills",
                  description:
                    "We have built a broad multi-domain team that combines deep expertise in computational biology, ADME, PK/PD, and ChemE across multiple contexts for our customers.",
                },
                {
                  icon: Users,
                  title: "Solutions foundation",
                  description:
                    "Our technical architecture and computational platform enable us to build high-performance solutions that combine multiple computational processes and emerging cloud infrastructure for resource-effective computing.",
                },
                {
                  icon: Lightbulb,
                  title: "Deep Focus",
                  description:
                    "We are deeply invested in life biosciences industry, continually developing solutions, competencies, and strong teams across the drug research & development value chain.",
                },
                {
                  icon: Brain,
                  title: "Agile + Enterprise-grade",
                  description:
                    "We combine agile development to get things done with the required security of enterprise-grade development - version control, documentation, testing, technology + design skills, and solid team execution + long-term scaling.",
                },
                {
                  icon: Flask,
                  title: "Client teams + Research laboratories",
                  description:
                    "We make it easy for clients to engage with us in different projects while ensuring their client-focused teams highly skilled and dedicated resources.",
                },
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-300 rounded-xl hover:bg-blue-300 transition-colors group">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-800 text-justify leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-16">
              Discover our offerings across the biopharma value chain
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Our Solutions",
                  description:
                    "Explore our end-to-end solutions across the drug discovery value chain from target discovery to therapeutic development",
                  icon: Lightbulb,
                },
                {
                  title: "Our Services",
                  description: "Offering end-to-end computational services and technology to complement biopharma R&D and computational biology.",
                  icon: Users,
                },
                {
                  title: "Case Studies",
                  description:
                    "Making client solutions drive discovery and development by building computational biology, cheminformatics, and AI/ML solutions",
                  icon: Building2,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-8 border border-gray-300 rounded-xl shadow-lg hover:bg-blue-300 transition-all duration-300 group"
                >
                  <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                    <item.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <Button variant="outline" className="group-hover:bg-blue-50">
                    Read More <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Learn more about our platform, solutions,
              <br />
              and services
            </h2>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-6 text-lg">
              Contact Us
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div>
              <h4 className="font-semibold mb-4">Disease Areas</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                    Immunology
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                    Rare Diseases
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                    Oncology
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                    CNS Disorders
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                    Target Language Model
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                    Computational Biology
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                    Computational Chemistry
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                    Systems Biology
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                    Disease Analysis
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                    Proteomics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                    Spatial Biology
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                    ADME Data Pipeline
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                    Medium
                  </Link>
                </li>
              </ul>
            </div>
          </div>

           <div className="flex flex-col items-center justify-center text-center pt-8 border-t border-gray-100 mb-0">
            <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Aganitha AI Inc., All Rights Reserved
            </p>
          </div>


        </div>
      </footer>
    </div>
  )
}

