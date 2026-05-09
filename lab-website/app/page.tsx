import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Jain Lab
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            University of Washington | Department of Bioengineering
          </p>
          
          <h2 className="mt-12 text-2xl md:text-3xl font-semibold text-foreground">
            Advancing computational biology through machine learning.
          </h2>
          
          <p className="mt-6 text-foreground leading-relaxed max-w-2xl">
            The Jain Lab develops computational tools to understand, analyze, and predict biological systems at scale.
          </p>
          
          <div className="mt-8 space-y-2">
            <p className="text-foreground">
              See our latest publications{" "}
              <Link href="/research" className="underline hover:no-underline">
                here
              </Link>
            </p>
            <p className="text-foreground">
              <Link href="/members" className="underline hover:no-underline">
                Meet the Jain Lab
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
