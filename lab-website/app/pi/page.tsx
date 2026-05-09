export default function PIPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Dr. Priya Jain
        </h1>
        <p className="mt-2 text-muted-foreground">
          Associate Professor | Department of Bioengineering | University of Washington
        </p>

        <div className="mt-12 space-y-6 text-foreground leading-relaxed">
          <p>
            Dr. Priya Jain is an Associate Professor in the Department of Bioengineering at the University of Washington. 
            Her research focuses on developing computational methods to understand complex biological systems, 
            with particular emphasis on machine learning approaches for genomics and drug discovery.
          </p>
          <p>
            Prior to joining UW, Dr. Jain completed her postdoctoral training at the Broad Institute of MIT and Harvard 
            and received her Ph.D. in Computational Biology from Stanford University. Her work has been recognized with 
            numerous awards including the NIH Director&apos;s New Innovator Award and the NSF CAREER Award.
          </p>
          <p>
            Outside of research, Dr. Jain is committed to mentoring the next generation of computational biologists 
            and advocating for diversity in STEM fields.
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-foreground">Education</h2>
          <ul className="mt-4 space-y-2 text-foreground">
            <li>Ph.D. Computational Biology, Stanford University</li>
            <li>B.S. Computer Science and Biology, MIT</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-foreground">Contact</h2>
          <div className="mt-4 space-y-1 text-foreground">
            <p>Email: pjain@uw.edu</p>
            <p>Office: Foege Building N430</p>
          </div>
        </section>
      </div>
    </div>
  )
}
