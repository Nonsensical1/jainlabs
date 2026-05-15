import Image from "next/image"
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
                <Image src="/Member-headshots/Boyu.png" alt="Boyu Huang" fill className="object-cover" />
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
                <Image src="/Member-headshots/Noah.jpeg" alt="Noah Rakestraw" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Noah Rakestraw</h3>
                <p className="text-sm font-medium text-foreground mt-1">BS (Summa Cum Laude): Occidental College (Biochemistry)</p>
                <p className="text-sm font-medium text-foreground mt-1">Prior research: Inscripta: Digital Genome Engineering Company</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Noah is an NIH CBI T32 Predoctoral Fellow and a Biomedical Sciences Ph.D. student working on protein discovery and engineering for gene editing applications. He hopes that the lab’s work on fundamental genetic engineering technologies will eventually translate to use in clinical settings.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Carlos1.png" alt="Carlos Orosco" fill className="object-cover" />
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
                <Image src="/Member-headshots/Briana.jpeg" alt="Briana Pizzano" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Briana Pizzano</h3>
                <p className="text-sm font-medium text-foreground mt-1">BS: University of Florida (Biological Engineering)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Briana Pizzano is from Boston, MA, US, and grew up partly there and partly in Georgia, US. She did her undergraduate work and 12 credits of graduate work in Biological Engineering (with a minor in biomolecular engineering) before applying to the Chemical Engineering ME to continue doing research in Dr. Jain’s lab. She enjoys cooking vegan Italian food for friends, taking care of her plants and animal companion, reading, aerial/acroyoga (when pandemic & health factors permit), and observing wildlife/spending time outdoors. She is enthusiastic about transitioning to the PhD program.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Daisy.jpeg" alt="Daisy Aguilar Aguilar" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Daisy Aguilar Aguilar</h3>
                <p className="text-sm font-medium text-foreground mt-1">BS: North Carolina State University (Chemical Engineering)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Daisy is currently working on the creation of an integrative device for the early detection of HIV-1 using the CRISPR/Cas system
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Dhruv.jpeg" alt="Dhruv Champaneri" fill className="object-cover" />
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
                <Image src="/Member-headshots/Dheeraj.jpg" alt="Dheeraj Pedada" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Dheeraj Pedada</h3>
                <p className="text-sm font-medium text-foreground mt-1">BE: University of Delaware (Chemical Engineering)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Dheeraj is a 2nd year Ph.D. Student and is currently working on developing a point-of-care testing device for HIV-1 and also on engineering a new Cas3 platform for genome editing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">Research Assistants</h2>
          <div className="mt-6 space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Dipan.jpg" alt="Dipan Das" fill className="object-cover" />
              </div>
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
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Aaryan.jpg" alt="Aaryan Pasupuleti" fill className="object-cover" />
              </div>
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
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Victor.jpeg" alt="Victor Vargas" fill className="object-cover" />
              </div>
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
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/August.jpeg" alt="August Bodin" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">August Bodin</h3>
                <p className="text-sm font-medium text-foreground mt-1">BS: University of Florida (Chemical Engineering)</p>
                <p className="text-sm font-medium text-foreground mt-1">MS: University of Florida (Chemical Engineering)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  August graduated from UF with a Bachelor’s degree in chemical engineering and now is in graduate school. August is developing various nucleic acid detection methods.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">Undergraduate Researchers</h2>
          <div className="mt-6 space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Jordan.jpeg" alt="Jordan Lewis" fill className="object-cover" />
              </div>
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
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Ian.png" alt="Ian Lange" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Ian Lange</h3>
                <p className="text-sm font-medium text-foreground mt-1">Major: Chemical Engineering</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Ian is helping with the development of various nucleic acid detection methods.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Coleen.jpg" alt="Coleen Peggs" fill className="object-cover" />
              </div>
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
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Kate.jpeg" alt="Kate Beerensson" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Kate Beerensson</h3>
                <p className="text-sm font-medium text-foreground mt-1">Major: Biomedical Engineering</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Kate is driven on the development of novel genome editors.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Sydney.jpeg" alt="Sydney Antal" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Sydney Antal</h3>
                <p className="text-sm font-medium text-foreground mt-1">Major: Chemical Engineering</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Sydney is currently working on optimizing CRISPR/Cas systems for disease detection and genome editing. Her research, which she has presented at multiple symposiums, focusing on using CRISPR to address global health challenges.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Anne.jpg" alt="Anne Fang" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Anne Fang</h3>
                <p className="text-sm font-medium text-foreground mt-1">Major: Biochemistry</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Ann is developing novel multiplexed CRISPR-based detection platforms and Psi-DNA.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Suraj.jpeg" alt="Suraj Raghunathan" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Suraj Raghunathan</h3>
                <p className="text-sm font-medium text-foreground mt-1">Major: Biochemistry</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Suraj is an undergraduate researcher.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Yasmin.jpeg" alt="Yasmin Elhabashy" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Yasmin Elhabashy</h3>
                <p className="text-sm font-medium text-foreground mt-1">Major: Chemical Engineering</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Yasmin is interested in developing various bioinformatics pipelines and is helping to develop novel precise RNA editing technologies.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Nayan.jpeg" alt="Nayan Shah" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Nayan Shah</h3>
                <p className="text-sm font-medium text-foreground mt-1">Major: Microbiology and Cell Science</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Nayan works on exploring CRISPR-Cas12 systems using novel ψ-DNA guides to study RNA targeting mechanisms.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Lina.jpg" alt="Lina Mourad" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Lina Mourad</h3>
                <p className="text-sm font-medium text-foreground mt-1">Major: Chemical Engineering</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Lina works on multiple projects including the development of various RNA detection methods.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Divya.png" alt="Divya Adabala" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Divya Adabala</h3>
                <p className="text-sm font-medium text-foreground mt-1">Major: Chemical Engineering</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Divya explores the potential of relaxases and topoisomerases as novel genome editing tools.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Kayli.jpg" alt="Kayli Zimmerman" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Kayli Zimmerman</h3>
                <p className="text-sm font-medium text-foreground mt-1">BS: University of Florida (Chemical Engineering)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Kayli is currently working on a project that involves using CRISPR reactions to create a device for early HIV detection.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Shruti.jpeg" alt="Shruti Sreekanth" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Shruti Sreekanth</h3>
                <p className="text-sm font-medium text-foreground mt-1">Major: Health Science</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Shruti is currently exploring the potential of relaxases and topoisomerases as novel genome editing tools.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/mahi1.jpg" alt="Mahika Balaraju" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Mahika Balaraju</h3>
                <p className="text-sm font-medium text-foreground mt-1">Major: Microbiology and Cell Sciences</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Mahika is currently Working on novel CRISPR technologies and optimizing its performance and delivery at in-vitro stage, specifically focused on the knockdown aspect and expanding capabilities of the CRISPR protein complex.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Ivy.jpeg" alt="Ivy Browning" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Ivy Browning</h3>
                <p className="text-sm font-medium text-foreground mt-1">Major: Chemical Engineering</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Ivy is an undergraduate researcher.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">Lab Alumni</h2>
          <div className="mt-6 space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-24 h-24 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Santosh.jpeg" alt="Santosh Rananaware" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Santosh Rananaware</h3>
                <p className="text-sm font-medium text-foreground mt-1">BS | MSc (Honors): Birla Institute of Technology- Goa, India (Chemical Engineering | Physics)</p>
                <p className="text-sm font-medium text-foreground mt-1">Prior research: CSIR-National Chemical Laboratory</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Santosh Rananaware recently successfully defended his PhD. Before transitioning into the PhD program, Santosh researched in Jain Lab as an MS student. During his time in the lab, he worked on numerous projects including the development of various RNA detection methods such as SAHARA and SPLENDID.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-24 h-24 shrink-0 bg-muted rounded-md overflow-hidden relative"></div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Long Nguyen | PhD</h3>
                <p className="text-sm font-medium text-foreground mt-1">BS | MS: Georgia Institute of Technology (Chemical Engineering)</p>
                <p className="text-sm font-medium text-foreground mt-1">PhD: University of Florida (Chemical Engineering | Jain Lab)</p>
                <p className="text-sm font-medium text-foreground mt-1">Current: PBI2 Distinguished Postdoc Scholar at Princeton University (Cameron Myrhvold and Jared Toettcher labs)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Long is the first PhD student who graduated from Jain Lab. During his time in the lab, Long led the development of CRISPR-based ENHANCE, SPADE, SPLENDID, cCRISPR, and many other gene editing and diagnostic projects and published 6 first/co-first author papers.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-24 h-24 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Mike.png" alt="Mike Hanna" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Mike Hanna, PhD</h3>
                <p className="text-sm font-medium text-foreground mt-1">BS: University of Florida (Biochemistry)</p>
                <p className="text-sm font-medium text-foreground mt-1">PhD: University of Florida (Chemical Biology | Prof. Michael Harris | Biochemistry of ribonucleotide reductase)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Research Interest: Dr. Hanna developed new CRISPR-based tools and devices for cancer detection.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-24 h-24 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Minji.jpg" alt="Minji Chang" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Minji Chang</h3>
                <p className="text-sm font-medium text-foreground mt-1">BS: University of Illinois- Urbana Champaign (Chemical Engineering)</p>
                <p className="text-sm font-medium text-foreground mt-1">MS: Carnegie Mellon University (Chemical Engineering)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Minji’s research interests include nanobiotechnology, drug delivery, and gene editing. When not in the lab, Minji enjoys golf, other outdoor activities, traveling, and playing musical instruments. She hails from Seoul, South Korea.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-24 h-24 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Raymond.jpeg" alt="Raymond Cole Hautamaki" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Raymond Cole Hautamaki | MS</h3>
                <p className="text-sm font-medium text-foreground mt-1">BS | MS: University of Florida (Microbiology and Cell Science)</p>
                <p className="text-sm font-medium text-foreground mt-1">Current: MRes student at Imperial College London (Systems and Synthetic Biology)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Cole worked on the development of cCRISPR and other genome engineering projects.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-24 h-24 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Reza.png" alt="Reza Ahamadimashhadi" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Reza Ahamadimashhadi</h3>
                <p className="text-sm font-medium text-foreground mt-1">BS: Imam Reza International University (Biomedical Engineering)</p>
                <p className="text-sm font-medium text-foreground mt-1">MS: Ca ‘Foscari University of Venice (Nanomaterials)</p>
                <p className="text-sm font-medium text-foreground mt-1">MS: Kyoto Institute of Technology (Material Science)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Reza is a PhD student interested in developing novel amplification-free detection methods.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-24 h-24 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Zoe.jpeg" alt="Zoe Fang" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Zoe Fang | BS</h3>
                <p className="text-sm font-medium text-foreground mt-1">BS: University of Florida (Microbiology)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Zoe worked on multiple projects on CRISPR-based tools.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-24 h-24 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Grace.jpeg" alt="Grace Shoemaker" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Grace Shoemaker | BS</h3>
                <p className="text-sm font-medium text-foreground mt-1">BS: University of Florida (Chemical Engineering)</p>
                <p className="text-sm font-medium text-foreground mt-1">NSF Graduate Research Fellow</p>
                <p className="text-sm font-medium text-foreground mt-1">Current: PhD student at Johns Hopkins University (Chemical Engineering)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Grace worked on the development of SAHARA and SPLENDID and many other CRISPR engineering projects
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-24 h-24 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/dylan.jpeg" alt="Dylan Carman" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Dylan Carman | BS</h3>
                <p className="text-sm font-medium text-foreground mt-1">BS: University of Florida (Chemical Engineering)</p>
                <p className="text-sm font-medium text-foreground mt-1">NSF Graduate Research Fellow</p>
                <p className="text-sm font-medium text-foreground mt-1">Current: PhD student at Johns Hopkins University (Chemical Engineering)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Dylan worked on the development of cCRISPR project.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-24 h-24 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Nicolas.png" alt="Nicolas Macaluso" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Nicolas Macaluso | MS Thesis</h3>
                <p className="text-sm font-medium text-foreground mt-1">BS | MS: University of Florida (Chemical Engineering)</p>
                <p className="text-sm font-medium text-foreground mt-1">Teaching & Outstanding Gator Awards</p>
                <p className="text-sm font-medium text-foreground mt-1">Current: PhD student at Johns Hopkins University (Chemical Engineering)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Nico worked on several projects including the development of cCRISPR, SPADE, and SPLENDID.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-24 h-24 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Emma.jpeg" alt="Emma Vesco" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Emma Vesco | BS</h3>
                <p className="text-sm font-medium text-foreground mt-1">BS: University of Florida (Chemical Engineering)</p>
                <p className="text-sm font-medium text-foreground mt-1">Departmental Awards</p>
                <p className="text-sm font-medium text-foreground mt-1">Current: PhD student at Baylor College of Medicine (Chemical Engineering)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Emma worked on several projects including the development of SAHARA.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-24 h-24 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Ayushma.jpeg" alt="Ayushma Joshi" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Ayushma Joshi</h3>
                <p className="text-sm font-medium text-foreground mt-1">BTech: Vellore Institute of Technology, India (Biological Engineering)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Ayushma was a student assistant while pursuing Masters in Computer science at the University of Florida. Her research interests involve comparative genomics and machine learning.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-24 h-24 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Katelyn.jpeg" alt="Katelyn Meister" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Katelyn Meister</h3>
                <p className="text-sm font-medium text-foreground mt-1">Major: Chemical Engineering</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Katelyn worked on multiple projects including the development of various RNA detection methods. Katelyn joined MIT to pursue PhD in Chemical Engineering.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-24 h-24 shrink-0 bg-muted rounded-md overflow-hidden relative"></div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Vedant Karalkar</h3>
                <p className="text-sm font-medium text-foreground mt-1">Major: Computer Science & Engineering</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Vedant worked on the development of rapid CRISPR-based assays.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-24 h-24 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Katerina.jpeg" alt="Katerina Anamisis" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Katerina Anamisis</h3>
                <p className="text-sm font-medium text-foreground mt-1">University Research Scholar</p>
                <p className="text-sm font-medium text-foreground mt-1">Major: Biochemistry</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Katerina worked on treating Usher’s syndrome with genome editors.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-24 h-24 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Sarah.jpeg" alt="Sarah Flannery" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Sarah Flannery</h3>
                <p className="text-sm font-medium text-foreground mt-1">Major: Chemical Engineering</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Sarah contributed toward developing novel nucleic acid detection platforms.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-24 h-24 shrink-0 bg-muted rounded-md overflow-hidden relative"></div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Michael Baugh</h3>
                <p className="text-sm font-medium text-foreground mt-1">Major: Chemical Engineering</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Michael worked on developing methods to target RNA.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-24 h-24 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Lilia.jpeg" alt="Lilia Yang" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Lilia Yang</h3>
                <p className="text-sm font-medium text-foreground mt-1">BS: Prairie View A&M University (Chemical Engineering)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Lilia Yang was born and raised in Southern California for 18 years before attending Prairie View A&M University in Texas. She decided to continue her journey eastward, ultimately choosing the University of Florida for her Ph.D. in chemical engineering to work on CRISPR-Cas systems for diagnostics and gene editing purposes. Her hobbies involve making inedible foods, learning about perennial edible plants, and getting lost when exploring parts of Gainesville. Currently, Lilia is working in industry.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-24 h-24 shrink-0 bg-muted rounded-md overflow-hidden relative"></div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Kendall Long</h3>
                <p className="text-sm font-medium text-foreground mt-1">BS: University of Florida (Virology)</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Kendall Long was a Biomedical Science Ph.D. student and rotated in Jain lab. Her interests include genome engineering, CRISPR-Cas systems, and viral vectors. She loves to run and hike.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-border pb-8 last:border-0">
              <div className="w-24 h-24 shrink-0 bg-muted rounded-md overflow-hidden relative">
                <Image src="/Member-headshots/Sucheta.png" alt="Sucheta Karmakar" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Sucheta Karmakar</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Sucheta was a visiting fellow at the lab from India
                </p>
              </div>
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
