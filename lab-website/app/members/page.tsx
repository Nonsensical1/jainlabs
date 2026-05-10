import LifeSimulation from "@/components/LifeSimulation"

export default function MembersPage() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-24 pb-16">
      {/* Background Life Particles */}
      <div className="absolute inset-0 z-0 opacity-80">
        <LifeSimulation edgeBias />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="bg-background/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-border/50">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Team
        </h1>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-foreground">Principal Investigator</h2>
          <div className="mt-4">
            <p className="text-foreground font-medium">Piyush K. Jain, Ph.D.</p>
            <p className="text-muted-foreground">Principal Investigator</p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">Postdocs</h2>
          <div className="mt-6 space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Boyu Huang, PhD</h3>
                <p className="text-sm font-medium text-foreground mt-1">BS: Wuhan University (Biology)</p>
                <p className="text-sm font-medium text-foreground mt-1">PhD: Chinese Academy of Sciences (Genetics | Prof. Jian-Kang Zhu | class 1 CRISPR systems)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Boyu is currently working on Developing novel precise DNA and RNA editing technologies and developing novel CRISPR screening systems. In his doctoral stage, he worked on Type I CRISPR-Cas systems inducing large fragments deletions in plants.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">PhD Students</h2>
          <div className="mt-6 space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Noah Rakestraw</h3>
                <p className="text-sm font-medium text-foreground mt-1">BS (Summa Cum Laude): Occidental College (Biochemistry)</p>
                <p className="text-sm font-medium text-foreground mt-1">Prior research: Inscripta: Digital Genome Engineering Company</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Noah is an NIH CBI T32 Predoctoral Fellow and a Biomedical Sciences Ph.D. student working on protein discovery and engineering for gene editing applications. He hopes that the lab&apos;s work on fundamental genetic engineering technologies will eventually translate to use in clinical settings.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Dhruv Champaneri</h3>
                <p className="text-sm font-medium text-foreground mt-1">BS: Rutgers University (Biotechnology)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Dhruv is a 2nd year Ph.D student in the Biomedical Sciences program under the Genetics concentration. His research explores the molecular mechanisms underlying in vitro DNA fragment assembly and developing adeno-associated virus (AAV) – based delivery system for gene editing applications.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Dheeraj Pedada</h3>
                <p className="text-sm font-medium text-foreground mt-1">BE: University of Delaware (Chemical Engineering)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Dheeraj is a 2nd year Ph.D. Student and is currently working on developing a point-of-care testing device for HIV-1 and also on engineering a new Cas3 platform for genome editing.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Carlos Orosco</h3>
                <p className="text-sm font-medium text-foreground mt-1">BS: Georgia Institute of Technology (Chemical Engineering)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Carlos Orosco is a Ph.D. student in the Chemical Engineering Department who joined the Jain Lab in Spring 2023. His main research interests are in biotechnology and bio-molecular engineering. He was born and raised in Bolivia and moved to the United States to pursue undergraduate and graduate studies. In his free time, he enjoys listening to music and playing video games.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Briana Pizzano</h3>
                <p className="text-sm font-medium text-foreground mt-1">BS: University of Florida (Biological Engineering)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Briana Pizzano is from Boston, MA, US, and grew up partly there and partly in Georgia, US. She did her undergraduate work and 12 credits of graduate work in Biological Engineering (with a minor in biomolecular engineering) before applying to the Chemical Engineering ME to continue doing research in Dr. Jain&apos;s lab. She enjoys cooking vegan Italian food for friends, taking care of her plants and animal companion, reading, aerial/acroyoga (when pandemic &amp; health factors permit), and observing wildlife/spending time outdoors. She is enthusiastic about transitioning to the PhD program.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Daisy Aguilar Aguilar</h3>
                <p className="text-sm font-medium text-foreground mt-1">BS: North Carolina State University (Chemical Engineering)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Daisy is currently working on the creation of an integrative device for the early detection of HIV-1 using the CRISPR/Cas system.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">Research Assistants</h2>
          <div className="mt-6 space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative"></div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Dipan Das</h3>
                <p className="text-sm font-medium text-foreground mt-1">BS: Presidency University, India (Chemistry)</p>
                <p className="text-sm font-medium text-foreground mt-1">MS: University of Florida (Chemistry)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Dipan is a Research Assistant who joined the Jain Lab in Spring 2025 after completing graduate studies. His work focuses on synthesizing organic molecules, including DNA/RNA and peptides, and developing CRISPR-based electrochemical devices. Originally from India, he enjoys music, video games, and soccer outside the lab.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative"></div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Aaryan Pasupuleti</h3>
                <p className="text-sm font-medium text-foreground mt-1">MS: University of Florida (Computer Science)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Aaryan was a Software Engineer at Verizon before beginning masters at the University of Florida. His interests include web development and machine learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">Masters Students</h2>
          <div className="mt-6 space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative"></div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Victor Vargas</h3>
                <p className="text-sm font-medium text-foreground mt-1">BS: University of Florida (Chemical Engineering)</p>
                <p className="text-sm font-medium text-foreground mt-1">MS: University of Florida (Chemical Engineering)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Victor works on the Semi-comprehensive development of inexpensive prototypes for in-field use. These are designed to complement biomolecular assays and protocols developed by the lab.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative"></div>
              <div>
                <h3 className="text-xl font-medium text-foreground">August Bodin</h3>
                <p className="text-sm font-medium text-foreground mt-1">BS: University of Florida (Chemical Engineering)</p>
                <p className="text-sm font-medium text-foreground mt-1">MS: University of Florida (Chemical Engineering)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  August graduated from UF with a Bachelor&apos;s degree in chemical engineering and now is in graduate school. August is developing various nucleic acid detection methods.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">Undergraduate Researchers</h2>
          <div className="mt-6 space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative"></div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Coleen Peggs</h3>
                <p className="text-sm font-medium text-foreground mt-1">University Research Scholar</p>
                <p className="text-sm font-medium text-foreground mt-1">Major: Senior in the College of Public Health and Health Professions, majoring in Public Health, minoring in Pathogenesis and Chemistry.</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  She is currently working on utilizing CRISPR/Cas9 to edit antibiotic resistance genes in E. Coli. In her free time, you can find her Hiking and exercising! Connect with her on LinkedIn
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative"></div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Kate Beerensson</h3>
                <p className="text-sm font-medium text-foreground mt-1">Major: Biomedical Engineering</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Kate is driven on the development of novel genome editors.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative"></div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Sydney Antal</h3>
                <p className="text-sm font-medium text-foreground mt-1">Major: Chemical Engineering</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Sydney is currently working on optimizing CRISPR/Cas systems for disease detection and genome editing. Her research, which she has presented at multiple symposiums, focusing on using CRISPR to address global health challenges.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative"></div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Anne Fang</h3>
                <p className="text-sm font-medium text-foreground mt-1">Major: Biochemistry</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Ann is developing novel multiplexed CRISPR-based detection platforms and Psi-DNA.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative"></div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Suraj Raghunathan</h3>
                <p className="text-sm font-medium text-foreground mt-1">Major: Biochemistry</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Suraj is an undergraduate researcher.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative"></div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Yasmin Elhabashy</h3>
                <p className="text-sm font-medium text-foreground mt-1">Major: Chemical Engineering</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Yasmin is interested in developing various bioinformatics pipelines and is helping to develop novel precise RNA editing technologies.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative"></div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Jordan Lewis</h3>
                <p className="text-sm font-medium text-foreground mt-1">Honors and University Research Scholar</p>
                <p className="text-sm font-medium text-foreground mt-1">Major: Chemical Engineering</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Jordan works on multiple projects including the development of various RNA detection methods.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative"></div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Ian Lange</h3>
                <p className="text-sm font-medium text-foreground mt-1">Major: Chemical Engineering</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Ian is helping with the development of various nucleic acid detection methods.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-foreground">Lab Alumni</h2>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-foreground font-medium">Former Members</p>
              <p className="text-muted-foreground">Information coming soon...</p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-foreground">Join Us</h2>
          <p className="mt-4 text-foreground">
            We are always looking for motivated individuals to join our team. If you are interested in 
            pursuing graduate studies or postdoctoral research, please{" "}
            <a href="/contact" className="underline hover:no-underline">contact us</a>.
          </p>
        </section>
        </div>
      </div>
    </div>
  )
}
