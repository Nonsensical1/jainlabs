export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Contact
        </h1>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-foreground">Lab Address</h2>
          <address className="mt-4 text-foreground not-italic leading-relaxed">
            Jain Lab<br />
            Department of Bioengineering<br />
            University of Washington<br />
            Foege Building N430<br />
            3720 15th Ave NE<br />
            Seattle, WA 98195
          </address>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-foreground">Email</h2>
          <p className="mt-4 text-foreground">
            General inquiries:{" "}
            <a href="mailto:jainlab@uw.edu" className="underline hover:no-underline">
              jainlab@uw.edu
            </a>
          </p>
          <p className="mt-2 text-foreground">
            Dr. Jain:{" "}
            <a href="mailto:pjain@uw.edu" className="underline hover:no-underline">
              pjain@uw.edu
            </a>
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-foreground">Prospective Students & Postdocs</h2>
          <p className="mt-4 text-foreground leading-relaxed">
            We are always looking for motivated individuals to join our team. If you are interested in 
            pursuing graduate studies or postdoctoral research, please send your CV, a brief description 
            of your research interests, and why you want to join our lab to Dr. Jain.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-foreground">Links</h2>
          <ul className="mt-4 space-y-2 text-foreground">
            <li>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                Twitter
              </a>
            </li>
            <li>
              <a 
                href="https://scholar.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                Google Scholar
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
