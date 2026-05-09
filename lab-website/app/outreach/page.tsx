export default function OutreachPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
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
              <h3 className="font-medium text-foreground">Summer Research Program</h3>
              <p className="text-muted-foreground">High School Students | June - August</p>
              <p className="mt-2 text-foreground">
                An 8-week immersive program introducing high school students to computational biology research. 
                Students work alongside lab members on real projects.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-foreground">Science Saturday Workshops</h3>
              <p className="text-muted-foreground">K-12 Students & Families | Monthly, September - May</p>
              <p className="mt-2 text-foreground">
                Monthly hands-on workshops exploring topics in science and technology. 
                Activities are designed to be fun and accessible for all ages.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-foreground">Undergraduate Mentorship</h3>
              <p className="text-muted-foreground">College Students | Year-round</p>
              <p className="mt-2 text-foreground">
                One-on-one mentorship for undergraduates interested in research careers. 
                Includes guidance on applications, research skills, and career development.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-foreground">Community Science Talks</h3>
              <p className="text-muted-foreground">General Public | Quarterly</p>
              <p className="mt-2 text-foreground">
                Public lectures making cutting-edge research accessible to everyone. 
                Topics range from AI in medicine to the future of biotechnology.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-foreground">Initiatives</h2>
          
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-medium text-foreground">Diversity in STEM</h3>
              <p className="mt-2 text-foreground">
                We are committed to increasing representation of underrepresented groups in science. 
                Our initiatives include targeted recruitment, mentorship programs, and partnerships with minority-serving institutions.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-foreground">Open Science</h3>
              <p className="mt-2 text-foreground">
                All our software is open-source and freely available. We publish preprints, share data openly, 
                and contribute to community resources to accelerate scientific progress.
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
  )
}
