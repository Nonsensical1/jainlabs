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
            {/* Headshot — drop an image file at /public/pi-headshot.jpg and uncomment the img tag */}
            <div className="w-40 h-48 md:w-48 md:h-56 shrink-0 bg-muted rounded-xl overflow-hidden relative">
              {/* <img src="/pi-headshot.jpg" alt="Dr. Piyush K. Jain" className="w-full h-full object-cover" /> */}
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Dr. Piyush K. Jain
              </h1>
              <p className="mt-2 text-muted-foreground">
                Exxon Mobil Gator Alumni Faculty Endowed Professor & Associate Professor | University of Florida
              </p>
            </div>
          </div>

          <div className="mt-12 space-y-6 text-foreground leading-relaxed">
            <p>
              As a Shah Rising Star Professor and Associate Professor at UF, Dr. Jain’s team is developing next-generation diagnostics and genome-editing technologies. His work is routinely published in high-impact journals and has been highlighted by over 10,000 news websites including a TEDx talk. He has over 40 pending or issued patents and co-founded multiple startups, including CasNx.
            </p>
            <p>
              His research endeavors have been generously funded, with his projects securing 15 NIH, CDC, and USDA grants, raising substantial funding of up to $20 million. Dr. Jain has been honored as the Senior Member of the National Academy of Inventors (NAI), the Exxon Mobil Gator Alumni Faculty Endowed Professor, the Shah Rising Star Endowed Professor, the UF Provost Excellence Award for Assistant Professors, and the NIH MIRA-ESI award (R35) by the NIGMS.
            </p>
            <p>
              Dr. Jain received a bachelor’s in pharmacy from India and an interdisciplinary Ph.D. at the University of Missouri-Kansas City in Prof. Simon Friedman‘s lab, where he pioneered light-responsive biochemical tools. Subsequently, as a postdoc at MIT in Prof. Sangeeta Bhatia’s lab, Dr. Jain continued to develop light-responsive nanosensors and gene-editing technologies.
            </p>
          </div>

          <section className="mt-12">
            <h2 className="text-lg font-semibold text-foreground">Education</h2>
            <ul className="mt-4 space-y-2 text-foreground list-disc list-inside">
              <li>Postdoctoral Associate, MIT (Advisor: Prof. Sangeeta N. Bhatia)</li>
              <li>Ph.D. Pharmaceutical Sciences/Chemistry, University of Missouri-Kansas City (Advisor: Prof. Simon H. Friedman)</li>
              <li>B.Pharm, Dr. Hari Singh Gour University, India</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-lg font-semibold text-foreground">Contact</h2>
            <div className="mt-4 space-y-1 text-foreground">
              <p>University of Florida</p>
              <p>Department of Chemical Engineering</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
