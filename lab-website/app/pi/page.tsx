import Image from "next/image"
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Award, 
  GraduationCap, 
  Briefcase, 
  Building2, 
  Sparkles, 
  BookOpen, 
  Rocket, 
  Compass 
} from "lucide-react"
import LifeSimulation from "@/components/LifeSimulation"

export default function PIPage() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-24 pb-16">
      {/* Background Life Particles */}
      <div className="absolute inset-0 z-0 opacity-80">
        <LifeSimulation edgeBias />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="bg-background/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-border/50 shadow-sm">
          {/* Header Profile Section */}
          <div className="flex flex-col md:flex-row gap-8 items-start pb-8 border-b border-border/60">
            <div className="w-44 h-52 md:w-56 md:h-64 shrink-0 bg-muted rounded-xl overflow-hidden relative shadow-md border border-border/40">
              <Image 
                src="/pi-headshot.jpg" 
                alt="Dr. Piyush K. Jain" 
                fill 
                sizes="(max-width: 768px) 176px, 224px" 
                className="object-cover" 
                priority 
              />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                  <Award className="w-3.5 h-3.5" />
                  NAI Senior Member (Class of 2025)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  BioFlorida Researcher & Developer of the Year (2026)
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
                Dr. Piyush K. Jain, Ph.D.
              </h1>

              <p className="mt-2 text-lg md:text-xl font-medium text-primary">
                Exxon Mobil Gator Alumni Faculty Endowed Professor & Associate Professor
              </p>

              <div className="mt-2 space-y-1 text-sm md:text-base text-muted-foreground">
                <p>Department of Chemical Engineering, University of Florida</p>
                <p>Affiliate Faculty, Department of Molecular Genetics & Microbiology</p>
                <p>Member, Mechanisms of Oncogenesis Program, UF Health Cancer Center</p>
              </div>

              {/* Action Buttons / Quick Contact */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:jainp@ufl.edu"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-xs"
                >
                  <Mail className="w-4 h-4" />
                  jainp@ufl.edu
                </a>
                <a
                  href="tel:18165221229"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors border border-border/50"
                >
                  <Phone className="w-4 h-4" />
                  (816) 522-1229
                </a>
                <a
                  href="https://scholar.google.com/citations?user=W4vS-2wAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors border border-border/50"
                >
                  <BookOpen className="w-4 h-4" />
                  Google Scholar
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
                <a
                  href="https://www.che.ufl.edu/jain/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors border border-border/50"
                >
                  <Building2 className="w-4 h-4" />
                  Department Profile
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>
          </div>

          {/* Biography & Research Overview */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Compass className="w-6 h-6 text-primary" />
              Biography & Research Vision
            </h2>
            <div className="mt-4 space-y-4 text-foreground/90 leading-relaxed text-base md:text-lg">
              <p>
                Dr. Piyush K. Jain is the Exxon Mobil Gator Alumni Faculty Endowed Professor and tenured Associate Professor in the Department of Chemical Engineering at the University of Florida. He also holds affiliate appointments in the Department of Molecular Genetics & Microbiology at the College of Medicine and is an active member of the Mechanisms of Oncogenesis Program at the UF Health Cancer Center.
              </p>
              <p>
                Leading the NanoBiomolecular Precision Lab (Jain Lab), Dr. Jain integrates biomolecular engineering, synthetic biology, and nucleic acid chemistry to create next-generation genome editing tools and ultrasensitive molecular diagnostics. His research has yielded fundamental breakthroughs, including the world’s first DNA-guided CRISPR endonuclease (published in <em>Nature Biotechnology</em>), atomic-resolution cryo-EM structures uncovering non-target strand cleavage in CRISPR-Cas12i (<em>Nature Structural & Molecular Biology</em>), novel CRISPR-Cas12 CODE precision genome editing (<em>Nature Communications</em>), and ex vivo CRISPR-engineered donor organs during machine perfusion (<em>Nature Reviews Bioengineering</em>).
              </p>
              <p>
                Dr. Jain’s scientific discoveries have been highlighted by over 10,000 news outlets globally, featured in a TEDx talk, and supported by more than $15 million in extramural research funding from the National Institutes of Health (NIH), the Centers for Disease Control and Prevention (CDC), the United States Department of Agriculture (USDA), and industry partnerships. He is the recipient of the prestigious NIH Maximizing Investigators’ Research Award (MIRA R35) and has been named a Senior Member of the National Academy of Inventors (NAI, Class of 2025).
              </p>
              <p>
                As an innovator and serial entrepreneur, Dr. Jain holds 49 active patent filings (48 from UF) and 2 issued U.S. patents. He is the co-founder and President of CasNx, Inc., a venture-backed biotechnology startup translating ex vivo organ genome editing to the clinic, which won the Nucleate Florida Grand Prize, Pitch GNV, and was recognized as one of TechCrunch Disrupt’s Top 9 Biotech Startups in 2025.
              </p>
            </div>
          </section>

          {/* Academic Positions & Appointments */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-primary" />
              Academic Appointments & Leadership
            </h2>
            <div className="mt-6 border-l-2 border-primary/40 pl-4 space-y-6">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-foreground">Exxon Mobil Gator Alumni Faculty Endowed Professor</h3>
                  <span className="text-sm font-medium text-primary">2025 – Present</span>
                </div>
                <p className="text-muted-foreground text-sm">University of Florida, Department of Chemical Engineering</p>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-foreground">Associate Professor (with tenure)</h3>
                  <span className="text-sm font-medium text-primary">2024 – Present</span>
                </div>
                <p className="text-muted-foreground text-sm">University of Florida, Department of Chemical Engineering</p>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-foreground">Affiliate Faculty</h3>
                  <span className="text-sm font-medium text-primary">2022 – Present</span>
                </div>
                <p className="text-muted-foreground text-sm">University of Florida College of Medicine, Department of Molecular Genetics & Microbiology</p>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-foreground">Member, Mechanisms of Oncogenesis</h3>
                  <span className="text-sm font-medium text-primary">2019 – Present</span>
                </div>
                <p className="text-muted-foreground text-sm">UF Health Cancer Center</p>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-foreground">Shah Rising Star Endowed Professor</h3>
                  <span className="text-sm font-medium text-muted-foreground">2021 – 2025</span>
                </div>
                <p className="text-muted-foreground text-sm">University of Florida, Department of Chemical Engineering</p>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-foreground">Assistant Professor</h3>
                  <span className="text-sm font-medium text-muted-foreground">2018 – 2024</span>
                </div>
                <p className="text-muted-foreground text-sm">University of Florida, Department of Chemical Engineering</p>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-foreground">Research Scientist</h3>
                  <span className="text-sm font-medium text-muted-foreground">2018</span>
                </div>
                <p className="text-muted-foreground text-sm">Massachusetts Institute of Technology (MIT), Koch Institute & IMES (Prof. Sangeeta N. Bhatia Lab)</p>
              </div>
            </div>
          </section>

          {/* Education & Training */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education & Postdoctoral Training
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-card border border-border/60 shadow-xs">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Postdoctoral Fellowship</span>
                <h3 className="text-base font-bold text-foreground mt-1">Massachusetts Institute of Technology (MIT)</h3>
                <p className="text-xs text-muted-foreground mt-0.5">2013 – 2018 | Cambridge, MA</p>
                <p className="text-sm text-foreground/80 mt-3">
                  Advisor: Prof. Sangeeta N. Bhatia<br />
                  Koch Institute for Integrative Cancer Research & Institute for Medical Engineering and Science (IMES)
                </p>
              </div>

              <div className="p-5 rounded-xl bg-card border border-border/60 shadow-xs">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Doctor of Philosophy (Ph.D.)</span>
                <h3 className="text-base font-bold text-foreground mt-1">University of Missouri-Kansas City (UMKC)</h3>
                <p className="text-xs text-muted-foreground mt-0.5">2006 – 2013 | Kansas City, MO</p>
                <p className="text-sm text-foreground/80 mt-3">
                  Pharmaceutical Sciences (Minor: Chemistry)<br />
                  Advisor: Prof. Simon H. Friedman<br />
                  Dissertation: <em>Light Activated Biomacromolecules</em>
                </p>
              </div>

              <div className="p-5 rounded-xl bg-card border border-border/60 shadow-xs">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Bachelor of Pharmacy (B.Pharm.)</span>
                <h3 className="text-base font-bold text-foreground mt-1">Dr. Hari Singh Gour University</h3>
                <p className="text-xs text-muted-foreground mt-0.5">2002 – 2006 | Sagar, MP, India</p>
                <p className="text-sm text-foreground/80 mt-3">
                  Central University of India<br />
                  Department of Pharmaceutical Sciences
                </p>
              </div>
            </div>
          </section>

          {/* Awards & Honors */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Honors, Endowments & Selected Awards
            </h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-card/60 border border-border/50">
                <span className="text-xs font-bold text-primary">2026</span>
                <h3 className="text-base font-semibold text-foreground">BioFlorida Researcher & Developer of the Year</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Selected across 107,000+ Florida biotech and life sciences researchers for outstanding impact in therapeutics and diagnostics.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card/60 border border-border/50">
                <span className="text-xs font-bold text-primary">2026</span>
                <h3 className="text-base font-semibold text-foreground">UF Innovate Innovation Fund Award</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Awarded for translational commercialization and high-impact technology development at the University of Florida.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card/60 border border-border/50">
                <span className="text-xs font-bold text-primary">2025</span>
                <h3 className="text-base font-semibold text-foreground">Senior Member, National Academy of Inventors (NAI)</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Class of 2025. Conferred to inventors who have demonstrated remarkable innovation producing tangible benefits to society.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card/60 border border-border/50">
                <span className="text-xs font-bold text-primary">2024 – Present</span>
                <h3 className="text-base font-semibold text-foreground">Exxon Mobil Gator Alumni Faculty Endowed Professorship</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Prestigious university endowment honoring faculty excellence and transformative research leadership.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card/60 border border-border/50">
                <span className="text-xs font-bold text-primary">2023</span>
                <h3 className="text-base font-semibold text-foreground">UF Provost Excellence Award for Assistant Professors</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Only 10 junior faculty selected across the entire University of Florida for distinguished research and scholarship.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card/60 border border-border/50">
                <span className="text-xs font-bold text-primary">2023</span>
                <h3 className="text-base font-semibold text-foreground">Herbert Wertheim College of Engineering (HWCOE) Excellence Award</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Awarded to the single top assistant professor in the College of Engineering for outstanding research achievements.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card/60 border border-border/50">
                <span className="text-xs font-bold text-primary">2022</span>
                <h3 className="text-base font-semibold text-foreground">NIH Maximizing Investigators’ Research Award (MIRA R35)</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  National Institute of General Medical Sciences (NIGMS R35GM147788) multi-year award providing flexible research funding.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card/60 border border-border/50">
                <span className="text-xs font-bold text-primary">2021 – 2024</span>
                <h3 className="text-base font-semibold text-foreground">Shah Rising Star Endowed Professorship</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Endowed professorship recognizing high-potential rising stars in engineering and biomedical sciences at UF.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card/60 border border-border/50">
                <span className="text-xs font-bold text-primary">2020</span>
                <h3 className="text-base font-semibold text-foreground">XPRIZE Rapid COVID-19 Testing Semifinalist</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Global recognition for rapid, accurate, and scalable molecular diagnostics developed during the COVID-19 pandemic.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card/60 border border-border/50">
                <span className="text-xs font-bold text-primary">2006 – 2013</span>
                <h3 className="text-base font-semibold text-foreground">UMKC Chancellor’s Doctoral Fellowship & Outstanding Graduate Award</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  School of Graduate Studies award honoring premier doctoral research performance and academic distinction.
                </p>
              </div>
            </div>
          </section>

          {/* Entrepreneurship & Innovation */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Rocket className="w-6 h-6 text-primary" />
              Startups, Translation & Intellectual Property
            </h2>
            <div className="mt-6 space-y-4">
              <div className="p-5 rounded-xl bg-card border border-border/60 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-bold text-foreground">CasNx, Inc.</h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-primary/10 text-primary">Cofounder & President (CEO 2024–2025)</span>
                </div>
                <p className="text-sm text-foreground/85 mt-2 leading-relaxed">
                  A biotechnology spinoff developing CRISPR-based ex vivo organ editing during normothermic machine perfusion to treat terminal organ disease and optimize donor organs for transplantation. CasNx was the Grand Prize Winner of Nucleate Florida (2024), Pitch GNV winner, Cade Prize Finalist, and selected among TechCrunch Disrupt’s Top 9 Biotech Startups in 2025.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-card border border-border/60 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-bold text-foreground">CRISPR, LLC</h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-secondary text-secondary-foreground">Founder (2022 – Present)</span>
                </div>
                <p className="text-sm text-foreground/85 mt-2 leading-relaxed">
                  Innovation holding and translational commercialization venture accelerating molecular diagnostic applications, precision enzyme tools, and next-generation CRISPR platforms.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-card border border-border/60 shadow-xs">
                <h3 className="text-lg font-bold text-foreground">Patent Portfolio</h3>
                <p className="text-sm text-foreground/85 mt-1 leading-relaxed">
                  Over <strong>49 active patent filings</strong> (including 48 originating at the University of Florida), <strong>2 issued U.S. patents</strong>, and intellectual property licensed to biotechnology companies including Glympse Bio.
                </p>
              </div>
            </div>
          </section>

          {/* Professional Leadership */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              Professional Service & Community Leadership
            </h2>
            <ul className="mt-4 space-y-2.5 text-foreground/90 list-disc list-inside leading-relaxed text-sm md:text-base">
              <li><strong>Conference Co-Organizer:</strong> CRISPR2027 Conference (Amalfi Coast, Italy, 2027)</li>
              <li><strong>Journal Editorial Leadership:</strong> Guest Editor, <em>Methods</em> Journal (Elsevier), Special Issues on CRISPR and Precision Diagnostics</li>
              <li><strong>Session Chair & Organizer:</strong> Chaired over 15 conference sessions across AIChE, BMES, and ACS annual meetings</li>
              <li><strong>Peer Reviewer:</strong> Grant review panels for the National Institutes of Health (NIH), National Science Foundation (NSF), and leading academic journals including <em>Nature Biotechnology</em>, <em>Nature Chemical Biology</em>, <em>Science Advances</em>, and <em>Nucleic Acids Research</em></li>
            </ul>
          </section>

          {/* Contact & Location Information */}
          <section className="mt-12 pt-8 border-t border-border/60">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              Office & Laboratory Location
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-card/60 border border-border/50">
                <h3 className="text-base font-bold text-foreground">Faculty Office</h3>
                <address className="mt-2 text-sm text-muted-foreground not-italic leading-relaxed">
                  Prof. Piyush K. Jain<br />
                  Cancer & Genetics Research Complex (CGRC)<br />
                  2033 Mowry Road, Room 463<br />
                  Gainesville, FL 32608<br />
                  Phone: (816) 522-1229<br />
                  Email: <a href="mailto:jainp@ufl.edu" className="text-primary hover:underline font-medium">jainp@ufl.edu</a>
                </address>
              </div>

              <div className="p-5 rounded-xl bg-card/60 border border-border/50">
                <h3 className="text-base font-bold text-foreground">Laboratory Address</h3>
                <address className="mt-2 text-sm text-muted-foreground not-italic leading-relaxed">
                  NanoBiomolecular Precision Lab (Jain Lab)<br />
                  Cancer & Genetics Research Complex (CGRC)<br />
                  2033 Mowry Road, Room 375E<br />
                  Gainesville, FL 32608<br />
                  Department: Chemical Engineering, University of Florida
                </address>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

