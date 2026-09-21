import Link from "next/link"
import SplashScreen from "@/components/SplashScreen"
import LifeSimulation from "@/components/LifeSimulation"

export default function HomePage() {
  return (
    <SplashScreen>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen min-h-[100dvh] flex items-stretch justify-center bg-black overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center" 
            style={{ backgroundImage: 'url("/hero-bg.jpg")' }} 
          >
            {/* Dark overlay to make text readable */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          {/* Hero Content with Flanking Matte White Glass Columns (Flush to Screen Ends, Aligned with Navbar 'J') */}
          <div className="relative z-10 w-full min-h-screen min-h-[100dvh] flex items-stretch justify-between">
            {/* Left Column (Flush to Left Edge, Aligned to 'J' in Jain Lab, Matte White Glass) */}
            <div 
              className="hidden lg:block self-stretch h-full overflow-hidden backdrop-blur-xl bg-white/80 border-r border-white/60 shadow-2xl relative shrink-0 z-10"
              style={{ width: "calc(max(3.5rem, (100vw - 1200px) / 2 + 1.5rem))" }}
            >
              <LifeSimulation transparent particleCount={180} />
            </div>

            {/* Center Hero Content */}
            <div className="flex-1 flex flex-col items-center justify-center text-center max-w-[1000px] px-6 lg:px-12 pt-28 pb-16 my-auto">
              <p className="text-lg md:text-xl text-zinc-300 mb-6 font-light tracking-wide">
                University of Florida | Department of Chemical Engineering
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                NanoBiomolecular Precision Lab
              </h1>
              <p className="text-lg md:text-xl text-zinc-200 leading-relaxed font-light max-w-3xl mx-auto">
                Pioneering the discovery and engineering of advanced biomolecular systems to enhance the precision and delivery of programmable genome-editing tools, such as CRISPR/Cas systems.
              </p>
              
              <div className="mt-10 flex gap-6 text-lg">
                <Link href="/research" className="text-white border border-white/30 px-6 py-3 rounded-md hover:bg-white/10 transition-colors">
                  Our Research
                </Link>
                <Link href="/members" className="text-white bg-white/20 px-6 py-3 rounded-md hover:bg-white/30 transition-colors">
                  Meet the Lab
                </Link>
              </div>
            </div>

            {/* Right Column (Flush to Right Edge, Symmetrically Mirrored, Matte White Glass) */}
            <div 
              className="hidden lg:block self-stretch h-full overflow-hidden backdrop-blur-xl bg-white/80 border-l border-white/60 shadow-2xl relative shrink-0 z-10"
              style={{ width: "calc(max(3.5rem, (100vw - 1200px) / 2 + 1.5rem))" }}
            >
              <LifeSimulation transparent particleCount={180} />
            </div>
          </div>
        </section>

        {/* You can add more sections here below the hero */}
        <section className="relative px-6 py-24 bg-background overflow-hidden min-h-[500px] flex items-center">
          {/* Ambient Artificial Life Particles in the White Background */}
          <div className="absolute inset-0 z-0 opacity-80">
            <LifeSimulation particleCount={1000} />
          </div>

          <div className="relative z-10 max-w-[1200px] mx-auto text-center bg-background/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50">
            <h2 className="text-3xl font-bold text-foreground mb-6">Advancing Precision Medicine</h2>
            <p className="text-lg text-muted-foreground mx-auto">
              Combining bioinformatics, protein and nucleic acid engineering, bioorganic chemistry, directed evolution, and machine learning, Jain Lab develops cutting-edge technologies for the targeted delivery, detection, and repair of DNA, RNA, and proteins in specific tissues. The lab&apos;s innovative research aims to revolutionize diagnosing and treating infectious diseases, genetic disorders, and cancer.
            </p>
          </div>
        </section>
      </div>
    </SplashScreen>
  )
}
