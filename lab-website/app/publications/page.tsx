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
            §Equal contributions
          </p>
          <p className="text-sm text-muted-foreground">
            *Corresponding author
          </p>
          <p className="text-sm text-muted-foreground">
            ‡Senior author
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
              Ocampo RF, Orosco C, Huang B, West MS, Jain PK, <span className="font-medium">Taylor DW</span> Architecture of a DNA-guided Cas12a. <span className="italic">bioRxiv</span>, 2026. [View]
            </p>

            <p className="text-foreground leading-relaxed">
              Peggs CMD, Rakestraw N, <span className="font-medium">Jain P</span> Utilizing CRISPR/Cas9 Gene Editing Techniques for Knockout of Genes in Escherichia coli Bacteria. <span className="italic">UF Journal of Undergraduate Research</span>, 2025. [View]
            </p>

            <p className="text-foreground leading-relaxed">
              Anamisis K, Beerensson K, Rakestraw N, <span className="font-medium">Jain P</span> CRISPR-Mediated Gene Editing Tool Development for Patients with Usher Syndrome Type II. <span className="italic">UF Journal of Undergraduate Research</span>, 2024. [View]
            </p>

            <p className="text-foreground leading-relaxed">
              Rananaware SR, Shoemaker GM, Pizzano BLM, Vesco EK, Sandoval LSW, Lewis JG, Bodin AP, Flannery SJ, Lange IH, Pedada D, Fang A, Antal SG, Aguilar D, Rakestraw NR, Karalkar VN, Meister KS, Nguyen LT, and <span className="font-medium">Jain PK*</span> AsCas12a tolerates insertions in target DNA. <span className="italic">Nucleic Acids Res.</span> 2025 Sep 23;53(17). [View] [*Corresponding author]
            </p>

            <p className="text-foreground leading-relaxed">
              Iyyappan R<sup>§</sup>, Niu Y<sup>§</sup>, Hao M, Pajdzik K, Rakestraw NR, Jain PK, He C, <span className="font-medium">Zong C*</span>, and <span className="font-medium">Jiang Z*</span> Single-nucleotide resolution epitranscriptomic profiling uncovers dynamic m6A regulation in bovine preimplantation development. <span className="italic">bioRxiv.</span> 2025 Jul 10:2025-07. [View] [§Equal contributions][*Corresponding authors]
            </p>

            <p className="text-foreground leading-relaxed">
              Orosco C<sup>§</sup>, Rananaware SR<sup>§</sup>, Huang B, Hanna MP, Ahmadimashhadi MR, Lewis JG, Baugh MP, Bodin AP, Flannery SJ, Lange IH, Fang ZR, Karalkar VN, Meister KS, and <span className="font-medium">Jain PK*</span> DNA-guided CRISPR/Cas12 for RNA targeting. <span className="italic">medRxiv.</span> 2024 Nov 21:2024-11. [View] [§Equal contributions][*Corresponding author]
            </p>

            <p className="text-foreground leading-relaxed">
              Jia Y, Horvath K, Rananaware SR, Jain PK, and Sampath J Exploring the thermostability of CRISPR–Cas12b using molecular dynamics simulations. <span className="italic">Molecular Systems Design &amp; Engineering</span>, 2026. [View]
            </p>

            <p className="text-foreground leading-relaxed">
              Nguyen LT<sup>§</sup>, Rakestraw NR<sup>§</sup>, Pizzano BL, Young CB, Huang Y, Beerensson KT, Fang A, Antal SG, Anamiss KV, Peggs CM, Yan J, Jing Y, Burdine RD, Adamson B, Toettcher JE, <span className="font-medium">Myhrvold C*</span>, and <span className="font-medium">Jain PK*</span> Efficient Genome Editing with Chimeric Oligonucleotide-Directed Editing. <span className="italic">Nature Communications</span>, 2026. [View] [§Equal contributions][*Corresponding authors]
            </p>

            <p className="text-foreground leading-relaxed">
              Rananaware SR, Meister KS, Shoemaker GM, Vesco EK, Sandoval LS, Lewis JG, Bodin AP, Karalkar VN, Lange IH, Pizzano BL, Chang M, M. Reza Ahmadimashhadi MR, Flannery SJ, Nguyen LT, Wang GP, and <span className="font-medium">Jain PK*</span> PAM-free diagnostics with diverse type V CRISPR-Cas systems. <span className="italic">medRxiv.</span> 2024:2024-05. [View] [*Corresponding author]
            </p>

            <p className="text-foreground leading-relaxed">
              Xun G, Zhu Z, Lu J, Singh N, <span className="font-medium">Jain PK<sup>‡</sup></span>, and <span className="font-medium">Zhao H*</span> Harnessing Noncanonical crRNA for Highly Efficient Genome Editing. <span className="italic">Nature Communications</span>, 2024, 15, 3823 (2024). https://doi.org/10.1038/s41467-024-48012-x [View]. [‡Senior author]
            </p>

            <p className="text-foreground leading-relaxed">
              Nguyen LT, Macaluso NC, Rakestraw NR, Carman DR, Pizzano BLM, Hautamaki RC, and <span className="font-medium">Jain PK*</span> Harnessing Non-canonical crRNAs to Improve Functionality of Cas12a Orthologs. <span className="italic">Cell Reports</span>, 2024, 43 (2), doi.org/10.1016/j.celrep.2024.113777. [View] [SSRN-2023][medRxiv-2021] [*Corresponding author]
            </p>

            <p className="text-foreground leading-relaxed">
              Rananaware SR, Vesco EK, Shoemaker GM, Anekar SS, Sandoval LSW, Meister KS, Macaluso NC, Nguyen LT, and <span className="font-medium">Jain, PK*</span>, Programmable RNA detection with CRISPR-Cas12a. <span className="italic">Nature Communications</span>, 2023, 14 (5409), doi.org/10.1038/s41467-023-41006-1. [View] [Research Square, 2023] [bioRxiv, 2023] [*Corresponding author]
            </p>

            <p className="text-foreground leading-relaxed">
              Shashank PR, Parker BM<sup>§</sup>, Rananaware SR<sup>§</sup>, Plotkin D, Couch C, Yang LG, Nguyen LT, Prasannakumar NR, Braswell WE, <span className="font-medium">Jain PK<sup>‡</sup></span>, and <span className="font-medium">Kawahara AY*</span>, CRISPR-based diagnostics detects invasive insect pests. <span className="italic">Molecular Ecology Resources</span>, 2023, 00, 1–15, doi.org/10.1111/1755-0998.13881. [View] [bioRxiv, 2023][§Equal contributions][‡Senior author]
            </p>

            <p className="text-foreground leading-relaxed">
              Nguyen LT<sup>§</sup>, Rananaware SR<sup>§</sup>, Yang LG<sup>§</sup>, Macaluso NC<sup>§</sup>, Ocana-Ortiz JE, Meister KS, Pizzano BLM, Sandoval LSW, Hautamaki RC, Fang ZR, Joseph SM, Shoemaker GM, Carman DR, Chang L, Rakestraw NR, Zachary JF, Guerra S, Perez A, <span className="font-medium">Jain PK*</span>, Engineering Highly Thermostable Cas12b via De Novo Structural Analyses for One-Pot Detection of Nucleic Acids <span className="italic">Cell Reports Medicine</span>, 2023, 4(5), 101037 https://doi.org/10.1016/j.xcrm.2023.101037 [View] [Highlighted on the cover] [medRxiv, 2022] [SSRN, 2023] [*Corresponding author][§Equal contributions]
            </p>

            <p className="text-foreground leading-relaxed">
              Shen Y, Khatri B, Rananaware S, Li D, Ostrov DA, <span className="font-medium">Jain PK<sup>‡</sup></span>, Lessard CJ, and <span className="font-medium">Nguyen CQ*</span> Ancestral origins are associated with SARS-CoV-2 susceptibility and protection in a Florida patient population <span className="italic">PLOS One</span>, 2023, https://doi.org/10.1371/journal.pone.0276700 [‡Senior author] [Download pdf] [View] [bioRxiv version-2022]
            </p>

            <p className="text-foreground leading-relaxed">
              Wei X, Wang X, Zhang Z, Luo Y, Wang Z, Xiong W, <span className="font-medium">Jain PK<sup>‡</sup></span>, Monnier JR, Wang H, Hu TY, Tang C, Albrecht H, and <span className="font-medium">Liu C*</span> A Click Chemistry Amplified Nanopore (CAN) Assay for Ultrasensitive Quantification of HIV p24 Antigen in Clinical Samples <span className="italic">Nature Communications</span>, 2022, 13, 6852 https://doi.org/10.1038/s41467-022-34273-x [‡Senior author]
            </p>

            <p className="text-foreground leading-relaxed">
              Nguyen, LT, Macaluso N, Pizzano B, Cash M, Spacek J, Karasek J, Miller MR, Lednicky JA, Dinglasan RD, Salemi M, and <span className="font-medium">Jain PK*</span> A Thermostable Cas12b from Brevibacillus Leverages One-pot Discrimination of SARS-CoV-2 Variants of Concern <span className="italic">eBioMedicine- THE LANCET</span>, 2022, https://doi.org/10.1016/j.ebiom.2022.103926 [*Corresponding author] [medRxiv] [Preprints with THE LANCET] [Download pdf] [View]
            </p>

            <p className="text-foreground leading-relaxed">
              Nguyen, LT, Rananaware SR, Pizzano BLM, Brandon ST, and <span className="font-medium">Jain PK*</span> Clinical validation of engineered CRISPR/Cas12a for rapid SARS-CoV-2 detection. <span className="italic">Communications Medicine- Nature</span>, 2022, https://doi.org/10.1038/s43856-021-00066-4 [*Corresponding author] [Download pdf] [View]
            </p>

            <p className="text-foreground leading-relaxed">
              Chiu CW, Xian M, Stephany JL, Xia X, Chiang CC, Ren F, Tsai CT, Shan SS, Liao YT, Esquivel-Upshaw JF, Rananaware SR, Nguyen LT, Macaluso NC, <span className="font-medium">Jain PK<sup>‡</sup></span>, Cash MN, Mavian CN, Salemi M, Leon ME, Chang CW, Lin J, and <span className="font-medium">Pearton SJ*</span> Rapid SARS-CoV-2 Diagnosis Using Disposable Strips and a Metal-oxide-semiconductor Field-effect Transistor Platform, <span className="italic">Journal of Vacuum Science &amp; Technology B</span>, 2022, doi.org/10.1116/6.0001615, 40, 023204. [‡Senior author] [View] [News]
            </p>

            <p className="text-foreground leading-relaxed">
              Nguyen LT, Gurijala, J, Rananaware SR, Pizzano BLM, Brandon ST, and <span className="font-medium">Jain PK*</span> CRISPR-ENHANCE: An enhanced nucleic acid detection platform using Cas12a. <span className="italic">Methods</span>, 2022, 10.1016/j.ymeth.2021.02.001 [*Corresponding author] [View]
            </p>

            <p className="text-foreground leading-relaxed">
              Shen Y, Ostrov DA, Santosh Rananaware SR, <span className="font-medium">Jain PK<sup>‡</sup></span>, <span className="font-medium">Nguyen CQ*</span> Identification of risk and protective human leukocyte antigens in COVID-19 using genotyping and structural modeling <span className="italic">medRxiv</span>, 2021, https://doi.org/10.1101/2021.05.04.21256636 [‡Senior author] [Download pdf] [View]
            </p>

            <p className="text-foreground leading-relaxed">
              Nguyen LT, Smith, BM, <span className="font-medium">Jain PK*</span> Enhancement of trans-cleavage activity of Cas12a with engineered crRNA enables amplified nucleic acid detection <span className="italic">Nature Communications</span>, 2020, 11, 4906 [*Corresponding author] [Download pdf] [View] [BioRxiv version]
            </p>

            <p className="text-foreground leading-relaxed">
              Downing M and <span className="font-medium">Jain PK*</span>, Mesoporous silica nanoparticles: synthesis, properties, and biomedical applications. <span className="italic">Nanoparticles for Biomedical Applications</span>, 2019; 267-281, Book Chapter. [*Corresponding author] [View]
            </p>

            <p className="text-foreground leading-relaxed">
              <span className="font-medium">Jain PK*</span>, Lo JH, Rananaware S, Downing M, Panda A, Tai M, Raghavan S, Fleming HE and <span className="font-medium">Bhatia SN*</span>. Non-viral delivery of CRISPR/Cas9 complex using CRISPR-GPS nanocomplexes. <span className="italic">Nanoscale</span>, 2019; 11, 21317-21323 [*Co-corresponding author] [Download pdf] [View]
            </p>

            <p className="text-foreground leading-relaxed">
              Jain PK, and <span className="font-medium">Friedman SH*</span>. A universal photo-cleavable clickable reagent for the reversible end labeling of any nucleic acid. <span className="italic">ChemBioChem</span>, 2018; 19, 1264. [Download pdf] [View] [F1000Prime recommendation] [Very Important Paper][ChemistryViews][Cover]
            </p>

            <p className="text-foreground leading-relaxed">
              Jain PK, Ramanan V, Schepers AG, Dalvie N, Panda A, Fleming HE and <span className="font-medium">Bhatia SN*</span>. Development of light-activated CRISPR using photocleavable protectors of guide RNAs. <span className="italic">Angewandte Chemie International Edition</span>, 2016; 55, 12440. [Download pdf] [View] [News articles] [Altmetrics]
            </p>

            <p className="text-foreground leading-relaxed">
              Sarode BR, Jain PK and <span className="font-medium">Friedman SH*</span>. Polymerizing Insulin with Photocleavable Linkers to Make Light-Sensitive Macropolymer Depot Materials. <span className="italic">Macromolecular Bioscience</span>, 2016; 16 (8): 1138-1146. [Download pdf] [View] [Featured on the cover]
            </p>

            <p className="text-foreground leading-relaxed">
              Dudani JS, Jain PK, Kwong GA, Stevens KR and <span className="font-medium">Bhatia SN*</span>. Photoactivated Spatiotemporally-Responsive Nanosensors of in Vivo Protease Activity. <span className="italic">ACS Nano</span>, 2015; 9(12), 11708-11717. [Download pdf] [View]
            </p>

            <p className="text-foreground leading-relaxed">
              Kala A, Jain PK and <span className="font-medium">Friedman SH*</span>. Patterning of cells through patterning of biology. <span className="italic">Molecular BioSystems</span>, 2014;10, 1689-1692. [Download pdf] [View]
            </p>

            <p className="text-foreground leading-relaxed">
              Kala A, Jain PK, Karunakaran D, Shah S and <span className="font-medium">Friedman SH*</span>. The synthesis of tetra-modified RNA for the multidimensional control of gene expression via light-activated RNA interference. <span className="italic">Nature protocols</span>, 2014; 9(1), 11-20. [Download pdf] [View]
            </p>

            <p className="text-foreground leading-relaxed">
              Jain PK, Karunakaran D and <span className="font-medium">Friedman SH*</span>. Construction of a Photoactivated Insulin Depot. <span className="italic">Angewandte Chemie International Edition</span>, 2013; 52, 1404-1409. [Download pdf] [View] [Featured on the frontispiece] [News articles]
            </p>

            <p className="text-foreground leading-relaxed">
              Jain PK, Shah S and <span className="font-medium">Friedman SH*</span>. Patterning of gene expression using new photolabile groups applied to light activated RNAi. <span className="italic">Journal of the American Chemical Society</span>, 2011; 133(3), 440-446. [Download pdf] [View]
            </p>

            <p className="text-foreground leading-relaxed">
              Shah S, Jain PK, Kala A, Karunakaran D and <span className="font-medium">Friedman SH*</span>. Light-activated RNA interference using double-stranded siRNA precursors modified using a remarkable regiospecificity of diazo-based photolabile groups. <span className="italic">Nucleic Acids Research</span>, 2009; 37(13), 4508-4517. [Download pdf] [View] [Featured on the cover]
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
