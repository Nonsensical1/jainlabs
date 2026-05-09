export default function MembersPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Members
        </h1>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-foreground">Principal Investigator</h2>
          <div className="mt-4">
            <p className="text-foreground font-medium">Priya Jain, Ph.D.</p>
            <p className="text-muted-foreground">Associate Professor</p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-foreground">Postdoctoral Fellows</h2>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-foreground font-medium">Michael Chen, Ph.D.</p>
              <p className="text-muted-foreground">Machine learning for drug discovery</p>
            </div>
            <div>
              <p className="text-foreground font-medium">Sarah Williams, Ph.D.</p>
              <p className="text-muted-foreground">Protein structure prediction</p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-foreground">Graduate Students</h2>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-foreground font-medium">Alex Rivera</p>
              <p className="text-muted-foreground">Single-cell transcriptomics</p>
            </div>
            <div>
              <p className="text-foreground font-medium">Emily Zhang</p>
              <p className="text-muted-foreground">Network biology</p>
            </div>
            <div>
              <p className="text-foreground font-medium">James Thompson</p>
              <p className="text-muted-foreground">Spatial genomics</p>
            </div>
            <div>
              <p className="text-foreground font-medium">Aisha Patel</p>
              <p className="text-muted-foreground">Computational immunology</p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-foreground">Undergraduate Researchers</h2>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-foreground font-medium">David Kim</p>
              <p className="text-muted-foreground">Data visualization</p>
            </div>
            <div>
              <p className="text-foreground font-medium">Maya Johnson</p>
              <p className="text-muted-foreground">Algorithm development</p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-foreground">Alumni</h2>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-foreground font-medium">Lisa Park, Ph.D.</p>
              <p className="text-muted-foreground">Now: Assistant Professor, Stanford University</p>
            </div>
            <div>
              <p className="text-foreground font-medium">Robert Liu, Ph.D.</p>
              <p className="text-muted-foreground">Now: Research Scientist, Google DeepMind</p>
            </div>
            <div>
              <p className="text-foreground font-medium">Jennifer Brown, Ph.D.</p>
              <p className="text-muted-foreground">Now: Senior Scientist, Genentech</p>
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
  )
}
