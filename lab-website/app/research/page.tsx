import LifeSimulation from "@/components/LifeSimulation"

const researchAreas = [
  {
    number: 1,
    title: "Discovery and Engineering of Novel CRISPR/Cas Systems",
    description:
      "We are interested in discovering and engineering novel CRISPR/Cas systems towards improving the repertoire for gene editing, gene correction, and diagnostics. Our lab is also investigating the mechanism of various Type II, V, and VI CRISPR systems.",
    publications: [],
  },
  {
    number: 2,
    title: "Enhanced Sensitivity, Specificity, and Control of CRISPR/Cas Systems",
    description:
      "We focus on understanding the CRISPR/Cas mechanisms to engineer novel genome editing tools with improved activity, specificity, sensitivity, and function. To edit genes at precise location and time, we created a light-activatable CRISPR-PLUS (CRISPR-precise light-mediated unveiling of sgRNAs) system by incorporating a photocleavable complementary oligonucleotide to the guide RNA, which allowed precise control of genome editing with light. We also demonstrated precise control of CRISPR activity with multiple different sgRNAs concurrently using CRISPR-PLUS in vitro, enabling the multiplexing capabilities of CRISPR-PLUS. We recently discovered that CRISPR-PLUS demonstrates significant improvement in specificity of CRISPR, which is currently being investigated in our lab. In addition, we also discovered various modifications on crRNAs that can drastically enhance the sensitivity and specificity of CRISPR/Cas systems.",
    publications: [
      {
        title: "Development of CRISPR as an Antiviral Strategy to Combat SARS-CoV-2 and Influenza",
        authors: "Nguyen et al.",
        journal: "Cell, 2020",
        href: "https://www.cell.com/cell/fulltext/S0092-8674(20)30856-7",
      },
      {
        title: "CRISPR-PLUS: Light-activated CRISPR for precise genome editing",
        authors: "Jain et al.",
        journal: "Angew. Chem., 2016",
        href: "https://onlinelibrary.wiley.com/doi/full/10.1002/anie.201606123",
      },
      {
        title: "Engineering of CRISPR-Cas12b for enhanced sensitivity and specificity",
        authors: "Nguyen et al.",
        journal: "Nature Communications, 2020",
        href: "https://www.nature.com/articles/s41467-020-18615-1",
      },
    ],
  },
  {
    number: 3,
    title: "Targeted Delivery of CRISPR/Cas Systems with Improved Genomic Integration",
    description:
      "We are engineering both non-viral and viral vectors for delivery for efficient editing and genome integration. Recently we developed an efficient targeted delivery system in vitro and in vivo, using guiding peptide sequences (GPS) carrying a lipid tail, cell-penetrating domain, and a targeting domain. When mixed with CRISPR/Cas, we discovered that these peptide-lipids form nanocomplexes electrostatically (CRISPR-GPS) and can deliver the complexes to a variety of cell lines and can be potentially applied in vivo.",
    publications: [
      {
        title: "Efficient Delivery of Genome-Editing Proteins using CRISPR-GPS",
        authors: "Jain et al.",
        journal: "Nanoscale, 2019",
        href: "https://pubs.rsc.org/en/content/articlelanding/2019/nr/c9nr01786k",
      },
    ],
  },
  {
    number: 4,
    title: "CRISPR/Cas as Improved Diagnostics",
    description:
      "We recently discovered that modified crRNAs for LbCas12a systems can increase the speed of trans-cleavage by 3.2-fold, making it one of the fastest reported CRISPR/Cas in terms of trans-cleavage activity — we termed it CRISPR-ENHANCE. Using CRISPR-ENHANCE, we observed up to femtomolar sensitivity of nucleic acid detection without any target amplification. We applied the technology for improved detection of SARS-CoV-2 RNA using paper-based diagnostics as well as for detecting prostate cancer, HIV & HCV genes. We also discovered a significant improvement in specificity of detection by several-fold (up to 8.8-fold) with CRISPR-ENHANCE.",
    publications: [
      {
        title: "CRISPR-ENHANCE: Rapid and enhanced detection of nucleic acids",
        authors: "Nguyen et al.",
        journal: "Nature Communications, 2020",
        href: "https://www.nature.com/articles/s41467-020-18615-1",
      },
    ],
  },
]

export default function ResearchPage() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-24 pb-16">
      {/* Background Life Particles */}
      <div className="absolute inset-0 z-0 opacity-80">
        <LifeSimulation edgeBias />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="bg-background/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-border/50">
          {/* Page Header */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Research Overview
          </h1>
          <p className="mt-6 text-lg text-foreground/80 leading-relaxed max-w-[900px]">
            Our laboratory develops next-generation diagnostics and genome-editing technologies. We combine bioinformatics, protein and nucleic acid engineering, bioorganic chemistry, directed evolution, and machine learning to create cutting-edge tools for the targeted delivery, detection, and repair of DNA, RNA, and proteins.
          </p>

          {/* Divider */}
          <hr className="my-12 border-border/40" />

          {/* Research Areas — continuous document flow */}
          <div className="space-y-20">
            {researchAreas.map((area) => (
              <section key={area.number}>
                {/* Numbered heading */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  <span className="text-muted-foreground mr-3">{area.number}.</span>
                  {area.title}
                </h2>

                {/* Two-column: text + image placeholder */}
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                  {/* Description */}
                  <div className="lg:col-span-3">
                    <p className="text-foreground/80 leading-relaxed">
                      {area.description}
                    </p>
                  </div>

                  {/* Image placeholder */}
                  <div className="lg:col-span-2">
                    <div className="w-full aspect-[4/3] bg-muted/60 rounded-xl flex items-center justify-center">
                      <span className="text-sm text-muted-foreground">Research figure</span>
                    </div>
                  </div>
                </div>

                {/* Key Publications */}
                {area.publications.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                      Key Publications
                    </h3>
                    <ul className="space-y-3">
                      {area.publications.map((pub, j) => (
                        <li key={j} className="pl-4 border-l-2 border-border/40">
                          <a
                            href={pub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                          >
                            {pub.title}
                          </a>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {pub.authors} — <em>{pub.journal}</em>
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
