export default function NewsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          News
        </h1>

        <div className="mt-12 space-y-10">
          <article>
            <p className="text-muted-foreground">May 2026</p>
            <h2 className="mt-1 text-lg font-medium text-foreground">New publication in Nature Methods</h2>
            <p className="mt-2 text-foreground">
              Our latest research on deep learning approaches for multi-omics data integration is now published. 
              This work introduces a new framework for precision medicine applications.
            </p>
          </article>

          <article>
            <p className="text-muted-foreground">April 2026</p>
            <h2 className="mt-1 text-lg font-medium text-foreground">Lab receives $5M NIH grant</h2>
            <p className="mt-2 text-foreground">
              We have been awarded a prestigious R01 grant from the National Institutes of Health to expand 
              our research into machine learning applications for drug discovery.
            </p>
          </article>

          <article>
            <p className="text-muted-foreground">March 2026</p>
            <h2 className="mt-1 text-lg font-medium text-foreground">Alex Rivera wins Best Poster at RECOMB</h2>
            <p className="mt-2 text-foreground">
              Ph.D. candidate Alex Rivera was recognized for outstanding research on single-cell trajectory 
              inference at the RECOMB conference.
            </p>
          </article>

          <article>
            <p className="text-muted-foreground">February 2026</p>
            <h2 className="mt-1 text-lg font-medium text-foreground">Dr. Sarah Williams joins the lab</h2>
            <p className="mt-2 text-foreground">
              We welcome Dr. Sarah Williams, who joins us as a postdoctoral fellow from the Broad Institute. 
              Sarah will be working on protein structure prediction.
            </p>
          </article>

          <article>
            <p className="text-muted-foreground">January 2026</p>
            <h2 className="mt-1 text-lg font-medium text-foreground">BioML Toolkit reaches 10,000 downloads</h2>
            <p className="mt-2 text-foreground">
              Our open-source machine learning toolkit for biological data analysis has reached a major milestone, 
              with adoption by researchers worldwide.
            </p>
          </article>

          <article>
            <p className="text-muted-foreground">December 2025</p>
            <h2 className="mt-1 text-lg font-medium text-foreground">Dr. Jain gives keynote at NeurIPS</h2>
            <p className="mt-2 text-foreground">
              Dr. Priya Jain delivered a keynote address on the intersection of AI and biology at the 
              Neural Information Processing Systems conference.
            </p>
          </article>

          <article>
            <p className="text-muted-foreground">November 2025</p>
            <h2 className="mt-1 text-lg font-medium text-foreground">Multi-omics paper published in Cell Systems</h2>
            <p className="mt-2 text-foreground">
              Our unified framework for multi-omics data integration is now available online, 
              with code and tutorials on GitHub.
            </p>
          </article>
        </div>
      </div>
    </div>
  )
}
