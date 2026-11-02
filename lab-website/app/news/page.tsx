import LifeSimulation from "@/components/LifeSimulation"

export default function NewsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-24 pb-16">
      {/* Background Life Particles */}
      <div className="absolute inset-0 z-0 opacity-80">
        <LifeSimulation edgeBias />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="bg-background/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-border/50">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            News
          </h1>

          <div className="mt-12 space-y-10">
            <article>
              <p className="text-muted-foreground">Oct 14, 2026</p>
              <h2 className="mt-1 text-lg font-medium text-foreground">
                <a href="https://doi.org/10.1038/s41594-026-01894-5" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Architecture of a DNA-guided Cas12a published in Nature Structural &amp; Molecular Biology
                </a>
              </h2>
              <p className="mt-2 text-foreground">
                Collaborating with researchers at UT Austin, Jain Lab members Carlos Orosco, Boyu Huang, and Dr. Jain used cryo-electron microscopy (cryo-EM) to reveal the atomic structure of DNA-guided Cas12a. The study shows how an engineered single strand of DNA folds into a unique &quot;hairpin bridge&quot; to guide the complex to target RNA, enabling ultra-precise viral diagnostics and safer RNA-targeting therapies.
              </p>
            </article>

            <article>
              <p className="text-muted-foreground">Jun 29, 2026</p>
              <h2 className="mt-1 text-lg font-medium text-foreground">
                <a href="https://doi.org/10.1038/s44222-026-00462-2" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Dr. Jain and colleagues review ex vivo gene editing of donor organs in Nature Reviews Bioengineering
                </a>
              </h2>
              <p className="mt-2 text-foreground">
                Dr. Jain and collaborators published a review on CRISPR-based ex vivo gene editing and machine perfusion for donor organs, addressing latent viral infections and allograft optimization to improve patient outcomes in transplantation medicine.
              </p>
            </article>

            <article>
              <p className="text-muted-foreground">May 15, 2026</p>
              <h2 className="mt-1 text-lg font-medium text-foreground">
                <a href="https://news.ufl.edu/2026/05/worlds-first-dna-guided-crispr/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  UF News features Jain Lab breakthrough: World&apos;s first DNA-guided CRISPR published in Nature Biotechnology
                </a>
              </h2>
              <p className="mt-2 text-foreground">
                Jain Lab researchers developed the world&apos;s first DNA-guided CRISPR system (&Psi;DNA), overturning the long-standing paradigm that CRISPR enzymes require guide RNA. Published in Nature Biotechnology, the DNA-guided system offers superior molecular stability, reduced off-target effects, and 100% accuracy in detecting viral RNA from clinical samples.
              </p>
            </article>

            <article>
              <p className="text-muted-foreground">Apr 13, 2026</p>
              <h2 className="mt-1 text-lg font-medium text-foreground">
                <a href="https://doi.org/10.1038/s41467-026-71624-4" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Jain Lab co-develops CODE precision genome editing system in Nature Communications
                </a>
              </h2>
              <p className="mt-2 text-foreground">
                In a collaboration between the Jain Lab (including Noah Rakestraw, Briana Pizzano, and Dr. Jain) and Princeton University, researchers introduced CODE (Chimeric Oligonucleotide-Directed Editing). Published in Nature Communications, this search-and-replace genome editing platform couples engineered nCas9-DNA polymerase fusions with chimeric guides to execute precise DNA edits without double-strand breaks.
              </p>
            </article>

            <article>
              <p className="text-muted-foreground">Sep 5, 2025</p>
              <h2 className="mt-1 text-lg font-medium text-foreground">
                <a href="https://doi.org/10.1093/nar/gkaf887" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Jain Lab discovers AsCas12a tolerates target DNA insertions in Nucleic Acids Research
                </a>
              </h2>
              <p className="mt-2 text-foreground">
                A multi-member Jain Lab study published in Nucleic Acids Research revealed that AsCas12a can tolerate target DNA insertions, providing fundamental insights into CRISPR-Cas12 target recognition mechanisms and informing guide RNA design for precision genome editing.
              </p>
            </article>

            <article>
              <p className="text-muted-foreground">Aug 22, 2025</p>
              <h2 className="mt-1 text-lg font-medium text-foreground">
                <a href="https://www.gainesville.com/story/news/2025/08/22/uf-scientists-work-to-create-healthier-transplant-organs/85674481007/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Dr. Jain’s work featured in the Gainesville Sun
                </a>
              </h2>
              <p className="mt-2 text-foreground">
                A CRISPR-based method to remove viruses from donor organs before transplant using a normothermic pump, to cleanse organs. This technology aims to reduce post-transplant viral infections and improve patient outcomes.
              </p>
            </article>

            <article>
              <p className="text-muted-foreground">Feb 20, 2025</p>
              <h2 className="mt-1 text-lg font-medium text-foreground">
                <a href="https://news.ufl.edu/2025/02/nai-senior-members/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Dr. Jain named Senior Member of the National Academy of Inventors
                </a>
              </h2>
              <p className="mt-2 text-foreground">
                Jain and his team create diagnostics and a comprehensive suite of precise genome-editing tools using CRISPR, a gene editing tool that allows scientists to modify DNA in living organisms.
              </p>
            </article>

            <article>
              <p className="text-muted-foreground">Oct 28, 2024</p>
              <h2 className="mt-1 text-lg font-medium text-foreground">
                <a href="https://aiche.confex.com/aiche/2024/meetingapp.cgi/Paper/700317" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Jain lab member presents at 2024 AIChE annual meeting
                </a>
              </h2>
              <p className="mt-2 text-foreground">
                August Bodin, a Jain Lab member, presented on Repurposing CRISPR-Cas12 for RNA Detection at the 2024 AIChE annual meeting at San Diego.
              </p>
            </article>

            <article>
              <p className="text-muted-foreground">Oct 16, 2024</p>
              <h2 className="mt-1 text-lg font-medium text-foreground">
                <a href="https://journals.flvc.org/UFJUR/article/view/135367" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Jain lab’s work featured in the UF journal for undergraduate research
                </a>
              </h2>
              <p className="mt-2 text-foreground">
                Researchers successfully created a HEK293T cell line with the mutation of interest using homology-directed repair, and are now testing and optimizing prime editors to address the mutation in both cell lines and patient-derived induced pluripotent stem cells differentiated into photoreceptor precursor cells.
              </p>
            </article>

            <article>
              <p className="text-muted-foreground">Jun 24, 2024</p>
              <h2 className="mt-1 text-lg font-medium text-foreground">
                <a href="https://che.ufl.edu/nih-awards-2-8-million-to-uf-researchers-to-develop-at-home-hiv-test-kit/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Dr. Jain awarded $2.8 million to develop at-home HIV test kit
                </a>
              </h2>
              <p className="mt-2 text-foreground">
                A new, easy-to-use HIV-detection test kit being developed at the University of Florida using advanced CRISPR technology shows promise as an early-warning alarm system that could save millions of lives.
              </p>
            </article>

            <article>
              <p className="text-muted-foreground">Sep 21, 2023</p>
              <h2 className="mt-1 text-lg font-medium text-foreground">
                <a href="https://ufhealth.org/news/2023/uf-researchers-genetic-detection-discovery-has-implications-for-medical-diagnostic-testing" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Dr. Jain’s work featured in the UF Health News
                </a>
              </h2>
              <p className="mt-2 text-foreground">
                University of Florida researchers have found a new use for “genetic scissors” to detect RNA, a discovery that could lead to faster, more accurate and less expensive diagnostic tests for a host of diseases. The genetic scissors are a protein complex known as CRISPR-Cas12a.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}
