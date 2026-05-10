export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Contact
        </h1>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-foreground">Laboratory Address</h2>
          <address className="mt-4 text-foreground not-italic leading-relaxed">
            NanoBiomolecular Precision Lab (Jain Lab)<br />
            Cancer & Genetics Research Complex<br />
            2033 Mowry Road, Room 375E<br />
            Gainesville FL 32608
          </address>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-foreground">Office Address</h2>
          <address className="mt-4 text-foreground not-italic leading-relaxed">
            Prof. Piyush K. Jain<br />
            1006 Center Dr., Room 329A<br />
            Gainesville FL 32611<br />
            Work phone: 352-294
          </address>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-foreground">Email</h2>
          <p className="mt-2 text-foreground">
            Dr. Jain:{" "}
            <a href="mailto:pjain@ufl.edu" className="underline hover:no-underline">
              pjain@ufl.edu
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
