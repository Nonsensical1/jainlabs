export default function ResearchPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
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
            <span className="italic"> Under Review</span>. 2025.
          </p>

          <p className="text-foreground leading-relaxed">
            <span className="font-medium">Bodin A</span>, <span className="font-medium">Jain PK#</span>. 
            Repurposing CRISPR-Cas12 for RNA Detection. 
            <span className="italic"> AIChE Annual Meeting</span>. 2024 Oct 28.
          </p>

          <p className="text-foreground leading-relaxed">
            <span className="font-medium">Jain PK#</span>, et al. 
            CRISPR-Mediated Gene Editing Tool Development for Patients with Usher Syndrome Type II. 
            <span className="italic"> UF Journal for Undergraduate Research</span>. 2024 Oct 16.
          </p>

          <p className="text-foreground leading-relaxed">
            <span className="font-medium">Jain PK#</span>, et al. 
            A Click Chemistry Amplified Nanopore (CAN) Assay for Ultrasensitive Quantification of HIV p24 Antigen in Clinical Samples. 
            <span className="italic"> Nature Communications</span>. 2022 Nov 11.
          </p>

          <p className="text-foreground leading-relaxed">
            <span className="font-medium">Nguyen LT*, Macaluso N*, Pizzano BL</span>, Cash M, Spacek J, Karasek J, Miller M, Lednicky J, Dinglasan R, Salemi M, <span className="font-medium">Jain PK#</span>. 
            A Thermostable Cas12b from Brevibacillus Leverages One-Pot Discrimination of SARS-CoV-2 Variants of Concern. 
            <span className="italic"> EBioMedicine</span>. 2022 Mar 12.
          </p>

          <p className="text-foreground leading-relaxed">
            <span className="font-medium">Nguyen LT, Rananaware SR, Pizzano BL, Stone BT</span>, <span className="font-medium">Jain PK#</span>. 
            Clinical validation of engineered CRISPR/Cas12a for rapid SARS-CoV-2 detection. 
            <span className="italic"> Communications Medicine (Nature Portfolio)</span>. 2022 Jan 12.
          </p>

          <p className="text-foreground leading-relaxed">
            <span className="font-medium">Nguyen LT, Smith BM</span>, <span className="font-medium">Jain PK#</span>. 
            Enhancement of trans-cleavage activity of Cas12a with engineered crRNA enables amplified nucleic acid detection. 
            <span className="italic"> Nature Communications</span>. 2020 Sep 30.
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
  )
}
