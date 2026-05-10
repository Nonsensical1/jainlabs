import LifeSimulation from "@/components/LifeSimulation"

export default function OutreachPage() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-24 pb-16">
      {/* Background Life Particles */}
      <div className="absolute inset-0 z-0 opacity-80">
        <LifeSimulation edgeBias />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="bg-background/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-border/50">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Outreach
          </h1>
          <p className="mt-4 text-foreground leading-relaxed">
            We are committed to sharing our passion for science with the broader community
            and fostering the next generation of researchers.
          </p>

          <section className="mt-12">
            <h2 className="text-lg font-semibold text-foreground">Programs</h2>
            
            <div className="mt-6 space-y-8">
              <div>
                <h3 className="font-medium text-foreground">
                  <a href="https://www.floridamuseum.ufl.edu/earth-systems/scientist-in-every-florida-school/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                    Scientist in Every Florida School
                  </a>
                </h3>
                <p className="mt-2 text-foreground">
                  The Scientist in Every Florida School, a program within the Thompson Earth Systems Institute at UF bring together K-12 students and scientists for performing STEM research. Dr. Jain mentored 2 senior students from Palm Beach County School for Fall 2020 on CRISPR-based projects.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-foreground">MRET Program</h3>
                <p className="mt-2 text-foreground">
                  The Multidisciplinary Research Experiences for Teachers (MRET) is a program to bring together K-5 teachers, engineering faculty, and students into the lab for 6 weeks to bolster STEM research. The Jain lab hosted 2 teachers for the Summer 2019.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-foreground">CRISPR Workshop</h3>
                <p className="mt-2 text-foreground">
                  The Herbert Wertheim College of Engineering organized the 43rd Annual Summer Institute for the Southeastern Consortium for Minorities in Engineering (SECME) in June 2019. The Jain lab organized a CRISPR workshop for the teachers.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-lg font-semibold text-foreground">Get Involved</h2>
            <p className="mt-4 text-foreground">
              Interested in participating in one of our programs or partnering with us on outreach initiatives?{" "}
              <a href="/contact" className="underline hover:no-underline">Contact us</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
