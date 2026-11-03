import Image from "next/image"
import LifeSimulation from "@/components/LifeSimulation"

export default function PIPage() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-24 pb-16">
      {/* Background Life Particles */}
      <div className="absolute inset-0 z-0 opacity-80">
        <LifeSimulation edgeBias />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="bg-background/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-border/50">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-64 h-76 md:w-80 md:h-96 shrink-0 bg-muted rounded-xl overflow-hidden relative">
              <Image 
                src="/pi-headshot.jpg" 
                alt="Dr. Piyush K. Jain" 
                fill 
                sizes="(max-width: 768px) 256px, 320px" 
                className="object-cover" 
                priority 
              />
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Dr. Piyush K. Jain
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                Exxon Mobil Gator Alumni Faculty Endowed Professor & Associate Professor | University of Florida
              </p>
              <p className="mt-2 text-muted-foreground">
                Department of Chemical Engineering | Affiliate Faculty, Molecular Genetics & Microbiology | Member, UF Health Cancer Center
              </p>
              <div className="mt-4 space-y-1 text-sm text-foreground">
                <p>
                  Email:{" "}
                  <a href="mailto:jainp@ufl.edu" className="underline hover:no-underline">
                    jainp@ufl.edu
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:18165221229" className="underline hover:no-underline">
                    (816) 522-1229
                  </a>
                </p>
                <p>
                  <a 
                    href="https://scholar.google.com/citations?user=W4vS-2wAAAAJ" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="underline hover:no-underline"
                  >
                    Google Scholar
                  </a>
                  {" | "}
                  <a 
                    href="https://www.che.ufl.edu/jain/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="underline hover:no-underline"
                  >
                    Department Profile
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-6 text-foreground leading-relaxed">
            <p>
              As the Exxon Mobil Gator Alumni Faculty Endowed Professor and tenured Associate Professor at the University of Florida, Dr. Jain leads the NanoBiomolecular Precision Lab (Jain Lab), developing next-generation CRISPR gene-editing technologies, synthetic biology platforms, and ultrasensitive molecular diagnostics. His work is routinely published in premier scientific journals and has been highlighted by over 10,000 global news outlets, including a TEDx talk.
            </p>
            <p>
              His research program has secured over $15 million in extramural funding across 15 NIH, CDC, and USDA grants and corporate partnerships. Dr. Jain’s key scientific discoveries include the world’s first DNA-guided CRISPR endonuclease (published in <em>Nature Biotechnology</em>), atomic-resolution cryo-EM structures uncovering non-target strand cleavage in CRISPR-Cas12i (<em>Nature Structural & Molecular Biology</em>), novel CRISPR-Cas12 CODE precision genome editing (<em>Nature Communications</em>), and ex vivo CRISPR organ engineering during normothermic machine perfusion (<em>Nature Reviews Bioengineering</em>).
            </p>
            <p>
              Dr. Jain has been honored as a Senior Member of the National Academy of Inventors (NAI, Class of 2025), the 2026 BioFlorida Researcher & Developer of the Year, the Exxon Mobil Gator Alumni Faculty Endowed Professor, the Shah Rising Star Endowed Professor, the UF Provost Excellence Award for Assistant Professors, the HWCOE College Excellence Award for Assistant Professors, and the NIH MIRA R35 Award from NIGMS.
            </p>
            <p>
              Dr. Jain received his Bachelor of Pharmacy from Dr. Hari Singh Gour Central University in India and completed an interdisciplinary Ph.D. in Pharmaceutical Sciences (Minor: Chemistry) at the University of Missouri-Kansas City under Prof. Simon H. Friedman, pioneering light-responsive biochemical tools. Subsequently, as a postdoctoral associate and research scientist at MIT in Prof. Sangeeta N. Bhatia’s laboratory (Koch Institute & IMES), he developed light-responsive nanosensors and gene-editing technologies.
            </p>
          </div>

          <section className="mt-12">
            <h2 className="text-lg font-semibold text-foreground">Academic Appointments</h2>
            <ul className="mt-4 space-y-2 text-foreground list-disc list-inside">
              <li>Exxon Mobil Gator Alumni Faculty Endowed Professor, University of Florida (2025–Present)</li>
              <li>Associate Professor (with tenure), Department of Chemical Engineering, University of Florida (2024–Present)</li>
              <li>Affiliate Faculty, Department of Molecular Genetics & Microbiology, College of Medicine, University of Florida (2022–Present)</li>
              <li>Member, Mechanisms of Oncogenesis Program, UF Health Cancer Center (2019–Present)</li>
              <li>Shah Rising Star Endowed Professor, University of Florida (2021–2025)</li>
              <li>Assistant Professor, Department of Chemical Engineering, University of Florida (2018–2024)</li>
              <li>Research Scientist, Massachusetts Institute of Technology, Koch Institute & IMES (2018)</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-lg font-semibold text-foreground">Education & Training</h2>
            <ul className="mt-4 space-y-2 text-foreground list-disc list-inside">
              <li>Postdoctoral Associate, Massachusetts Institute of Technology (Advisor: Prof. Sangeeta N. Bhatia) (2013–2018)</li>
              <li>Ph.D. Pharmaceutical Sciences / Chemistry, University of Missouri-Kansas City (Advisor: Prof. Simon H. Friedman; Dissertation: <em>Light Activated Biomacromolecules</em>) (2006–2013)</li>
              <li>B.Pharm., Dr. Hari Singh Gour University, Sagar, India (2002–2006)</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-lg font-semibold text-foreground">Awards & Honors</h2>
            <ul className="mt-4 space-y-2 text-foreground list-disc list-inside">
              <li>BioFlorida Researcher & Developer of the Year (2026)</li>
              <li>UF Innovate Innovation Fund Award (2026)</li>
              <li>Senior Member, National Academy of Inventors (NAI, Class of 2025)</li>
              <li>Exxon Mobil Gator Alumni Faculty Endowed Professorship (2024–Present)</li>
              <li>UF Provost Excellence Award for Assistant Professors (2023)</li>
              <li>UF Herbert Wertheim College of Engineering (HWCOE) Excellence Award for Assistant Professors (2023)</li>
              <li>NIH Maximizing Investigators’ Research Award (MIRA R35), NIGMS (2022)</li>
              <li>Shah Rising Star Endowed Professorship, University of Florida (2021–2024)</li>
              <li>XPRIZE Rapid COVID-19 Testing Competition Semifinalist (2020)</li>
              <li>Outstanding Graduate Student Award, UMKC School of Graduate Studies (2012)</li>
              <li>Chancellor’s Doctoral Fellowship, University of Missouri-Kansas City (2006–2011)</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-lg font-semibold text-foreground">Startups & Commercialization</h2>
            <ul className="mt-4 space-y-2 text-foreground list-disc list-inside">
              <li><strong>CasNx, Inc.:</strong> Cofounder & President (CEO 2024–2025). Developing CRISPR-based ex vivo organ editing during normothermic machine perfusion. Grand Prize Winner of Nucleate Florida, Pitch GNV, Cade Prize Finalist, and selected among TechCrunch Disrupt’s Top 9 Biotech Startups (2025).</li>
              <li><strong>CRISPR, LLC:</strong> Founder (2022–Present). Commercialization and incubator holding entity for molecular diagnostics and CRISPR innovations.</li>
              <li><strong>Intellectual Property:</strong> 49 active patent filings (48 originating at UF), 2 issued U.S. patents, 1 licensed to Glympse Bio.</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-lg font-semibold text-foreground">Professional Leadership & Service</h2>
            <ul className="mt-4 space-y-2 text-foreground list-disc list-inside">
              <li>Co-organizer, CRISPR2027 Conference (Amalfi Coast, Italy, 2027)</li>
              <li>Guest Editor, <em>Methods</em> Journal (Elsevier), Special Issues on CRISPR Technologies</li>
              <li>Conference Session Chair for 15+ AIChE, BMES, and ACS sessions</li>
              <li>Grant Reviewer for NIH, NSF, and peer reviewer for leading international journals</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-lg font-semibold text-foreground">Contact & Office</h2>
            <div className="mt-4 space-y-1 text-foreground leading-relaxed">
              <p><strong>Office:</strong> Cancer & Genetics Research Complex (CGRC), Room 463, 2033 Mowry Road, Gainesville, FL 32608</p>
              <p><strong>Laboratory:</strong> Cancer & Genetics Research Complex (CGRC), Room 375E, 2033 Mowry Road, Gainesville, FL 32608</p>
              <p><strong>Department:</strong> Department of Chemical Engineering, University of Florida</p>
              <p><strong>Phone:</strong> (816) 522-1229</p>
              <p><strong>Email:</strong> <a href="mailto:jainp@ufl.edu" className="underline hover:no-underline">jainp@ufl.edu</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

