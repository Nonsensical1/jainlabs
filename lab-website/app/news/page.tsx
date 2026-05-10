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
