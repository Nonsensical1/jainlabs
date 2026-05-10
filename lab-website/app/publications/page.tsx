import LifeSimulation from "@/components/LifeSimulation"

export default function ResearchPage() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-24 pb-16">
      {/* Background Life Particles */}
      <div className="absolute inset-0 z-0 opacity-80">
        <LifeSimulation edgeBias />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="bg-background/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-border/50">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Publications
          </h1>
          
          <p className="mt-6 text-sm text-muted-foreground">
            *Equal contribution
          </p>
          <p className="text-sm text-muted-foreground">
            #Corresponding author
          </p>

          <div className="mt-8">
            <a 
              href="http://scholar.google.com/citations?user=qtpo58sAAAAJ&hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
            >
              [For a full list of publications on Google Scholar, click here]
            </a>
          </div>

          <div className="mt-12 space-y-8">
            <p className="text-foreground leading-relaxed">
              <span className="font-medium">Huang B, Orosco C, Pizzano B, Rakestraw N</span>, <span className="font-medium">Jain PK#</span>. 
              A CRISPR-based method to remove viruses from donor organs before transplant using a normothermic pump. 
              <span className="italic"> Molecular Therapy</span>. 2024 Sep 21:S1525-0016(24)00609-0.
            </p>

            <p className="text-foreground leading-relaxed">
              <span className="font-medium">Pizzano B*, Huang B*</span>, Reitsema C, Wang C, Lu Y, <span className="font-medium">Xie F, Orosco C, Rakestraw N, Jain PK#</span>. 
              Design and engineering of an engineered, thermostable Cas12a. 
              <span className="italic"> iScience</span>. 2024 Oct 18; 27(10):110825.
            </p>

            <p className="text-foreground leading-relaxed">
              <span className="font-medium">Pizzano B, Xie F, Orosco C, Huang B, Rakestraw N, Jain PK#</span>. 
              Evolution of the CRISPR-Cas System. 
              <span className="italic"> Chemical Reviews</span>. 2024 Feb 28; 124(4):1588-1647.
            </p>

            <p className="text-foreground leading-relaxed">
              <span className="font-medium">Pizzano B, Orosco C, Xie F, Huang B, Rakestraw N, Jain PK#</span>. 
              Harnessing Cas9 for Nucleic Acid Detection. 
              <span className="italic"> Trends in Biochemical Sciences</span>. 2023 Dec 11:S0968-0004(23)00273-0.
            </p>

            <p className="text-foreground leading-relaxed">
              <span className="font-medium">Orosco C*, Pizzano B*</span>, Wang C, <span className="font-medium">Jain PK#</span>. 
              Engineered liposomes for in vivo delivery of CRISPR-Cas systems. 
              <span className="italic"> Methods in Enzymology</span>. 2023; 681:365-388.
            </p>

            <p className="text-foreground leading-relaxed">
              <span className="font-medium">Pizzano B*, Orosco C*, Xie F*</span>, Huang B, <span className="font-medium">Rakestraw N, Jain PK#</span>. 
              Engineered nanoparticles for the delivery of CRISPR-Cas systems. 
              <span className="italic"> Methods in Enzymology</span>. 2023; 681:331-364.
            </p>

            <p className="text-foreground leading-relaxed">
              Saha S, Zhao E, <span className="font-medium">Jain PK#</span>. 
              Targeted genome engineering for the management of infectious diseases. 
              <span className="italic"> Trends in Molecular Medicine</span>. 2022 Dec; 28(12):1075-1087.
            </p>

            <p className="text-foreground leading-relaxed">
              <span className="font-medium">Saha S*, Zhao E*</span>, Li T, <span className="font-medium">Jain PK#</span>. 
              A highly sensitive, one-pot, single-temperature CRISPR-Cas12a assay for clinical detection of HPV. 
              <span className="italic"> Biosensors and Bioelectronics</span>. 2022 Dec 15; 218:114757.
            </p>

            <p className="text-foreground leading-relaxed">
              Dhanushkodi NR*, <span className="font-medium">Jain PK*</span>, Nanjundan N, et al. 
              Light-controlled, specific, and reversible targeting of DNA by a CRISPR-Cas9 platform. 
              <span className="italic"> Journal of the American Chemical Society</span>. 2021 May 12; 143(18):6860-6869.
            </p>

            <p className="text-foreground leading-relaxed">
              <span className="font-medium">Jain PK</span>, et al. 
              Development of light-activated CRISPR using guide RNAs with photocleavable protectors. 
              <span className="italic"> Angewandte Chemie International Edition</span>. 2020 Jan; 59(2):645-649.
            </p>

            <p className="text-foreground leading-relaxed">
              <span className="font-medium">Jain PK*#</span>, Lo JH, <span className="font-medium">Rananaware SR, Downing M, Panda A</span>, Tai M, Raghavan S, Fleming HE, Bhatia SN#. 
              Non-viral delivery of CRISPR/Cas9 complex using CRISPR-GPS nanocomplexes. 
              <span className="italic"> Nanoscale</span>. 2019 Oct 29.
            </p>

            <p className="text-foreground leading-relaxed">
              <span className="font-medium">Downing M</span>, <span className="font-medium">Jain PK#</span>. 
              Chapter 16 – Mesoporous silica nanoparticles: synthesis, properties, and biomedical applications. 
              <span className="italic"> Nanoparticles for Biomedical Applications</span>. 2019 Nov 29.
            </p>

            <p className="text-foreground leading-relaxed">
              <span className="font-medium">Jain PK</span>, et al. 
              The ULTIMATE Reagent: A Universal Photocleavable and Clickable Reagent for the Regiospecific and Reversible End Labeling of Any Nucleic Acid. 
              <span className="italic"> ChemBioChem</span>. 2018 Dec.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
