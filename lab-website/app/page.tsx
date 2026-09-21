import Link from "next/link"
import SplashScreen from "@/components/SplashScreen"
import LifeSimulation from "@/components/LifeSimulation"

export default function HomePage() {
  return (
    <SplashScreen>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen min-h-[100dvh] flex items-stretch justify-center bg-black overflow-hidden pt-20 pb-8">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center" 
            style={{ backgroundImage: 'url("/hero-bg.jpg")' }} 
          >
            {/* Dark overlay to make text readable */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          {/* Hero Content with Flanking Organic Simulation Pods */}
          <div className="relative z-10 max-w-[1440px] w-full min-h-[calc(100dvh-7rem)] mx-auto px-6 flex items-stretch justify-center gap-6 lg:gap-8 xl:gap-12">
            {/* Left Organic Simulation Pod */}
            <div 
              className="hidden lg:block w-44 xl:w-60 self-stretch overflow-hidden backdrop-blur-xl bg-white/10 border border-white/25 shadow-2xl relative shrink-0 transition-all duration-700 hover:border-white/40"
              style={{ borderRadius: "55% 45% 65% 35% / 25% 35% 25% 35%" }}
            >
              <LifeSimulation transparent particleCount={300} />
            </div>

            {/* Center Hero Content */}
            <div className="flex flex-col items-center justify-center text-center max-w-[850px] py-8 my-auto shrink">
              <p className="text-lg md:text-xl text-zinc-300 mb-6 font-light tracking-wide">
                University of Florida | Department of Chemical Engineering
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                NanoBiomolecular Precision Lab
              </h1>
              <p className="text-lg md:text-xl text-zinc-200 leading-relaxed font-light">
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

            {/* Right Organic Simulation Pod */}
            <div 
              className="hidden lg:block w-44 xl:w-60 self-stretch overflow-hidden backdrop-blur-xl bg-white/10 border border-white/25 shadow-2xl relative shrink-0 transition-all duration-700 hover:border-white/40"
              style={{ borderRadius: "45% 55% 35% 65% / 35% 25% 35% 25%" }}
            >
              <LifeSimulation transparent particleCount={300} />
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
