'use client'

import { useState } from "react"
import Image from "next/image"
import LifeSimulation from "@/components/LifeSimulation"

const grants = [
  {
    sponsor: "NSF-EFMA",
    award: "EFMA (TRAILBLAZER)",
    pi: "Angelini (PI), Jain (Co-I)",
    date: "2026–2028",
    logo: "/logos/nsf.png",
    description: "TRAILBLAZER award ($3,000,000) from the National Science Foundation Emerging Frontiers in Research and Innovation: Bringing the Solid State to Life with Cell Crystals to Transform Biosensing in Environmental, Health Care, and National Security Applications.",
  },
  {
    sponsor: "NIH-NICHD",
    award: "1R21HD122979",
    pi: "Jiang (PI), Jain (Co-I)",
    date: "2026–2028",
    logo: "/logos/nih.png",
    description: "Award ($422,123) from the Eunice Kennedy Shriver National Institute of Child Health and Human Development to dissect mechanisms of pre-implantation embryonic and extraembryonic lineage crosstalk using stem cell models.",
  },
  {
    sponsor: "UF Research Opportunity Seed Fund",
    award: "SRD-ROSF2026",
    pi: "Jiang (PI), Jain (Co-PI)",
    date: "2026–2028",
    logo: "/logos/uf.png",
    description: "University of Florida Research Opportunity Seed Fund award ($100,000) supporting the development of a novel large DNA insertion platform for animal pharming.",
  },
  {
    sponsor: "UFHCC MOO Pilot Grant",
    award: "MOO 2026",
    pi: "Schmittgen (PI), Jain (Co-PI)",
    date: "2026–2027",
    logo: "/logos/uf.png",
    description: "Pilot award ($50,000) from the UF Health Cancer Center Molecular Oncology and Oncology program investigating the pancreatic cancer transformation potential of normal human pancreatic acinar cells following introduction of 'Big 4' mutations by gene editing.",
  },
  {
    sponsor: "UF Innovate | Tech Licensing",
    award: "OTL Commercialization Fund",
    pi: "Jain",
    date: "2026–2027",
    logo: "/logos/uf.png",
    description: "Commercialization Fund Award ($50,000) from UF Innovate to advance 'Engineering Safer Donor Kidneys Through Ex Vivo CRISPR Editing'.",
  },
  {
    sponsor: "UF Research Opportunity Seed Fund",
    award: "00134351",
    pi: "Duarte (PI), Jain (Co-PI)",
    date: "2025–2027",
    logo: "/logos/uf.png",
    description: "Seed funding ($96,040) from the University of Florida to develop a CRISPR-Cas12a based test for rapid point-of-care quantitation of soluble DNA in machine perfused kidney allografts.",
  },
  {
    sponsor: "Exxon Mobil / University of Florida",
    award: "Endowed Professorship",
    pi: "Jain",
    date: "2025–2027",
    logo: "/logos/exxonmobil.png",
    description: "Exxon Mobil Gator Alumni Faculty Endowed Professorship (~$46,000) awarded through the Department of Materials Science & Engineering and Herbert Wertheim College of Engineering at the University of Florida.",
  },
  {
    sponsor: "NIH-NIAID",
    award: "R61AI181016",
    pi: "Jain",
    date: "2024–2029",
    logo: "/logos/nih.png",
    description: "Phase 1/2 award ($2,768,495) from the National Institute of Allergy and Infectious Diseases to develop a rapid CRISPR-based self-testing platform for early detection of HIV.",
  },
  {
    sponsor: "University of Florida",
    award: "Provost Excellence Award",
    pi: "Jain",
    date: "2024–2029",
    logo: "/logos/uf.png",
    description: "UF Provost Excellence Award for Assistant Professors ($5,000) recognizing distinguished early-career faculty across the University of Florida.",
  },
  {
    sponsor: "UF Research Opportunity Seed Fund",
    award: "00132775",
    pi: "Kladde (PI), Jain (Co-I)",
    date: "2023–2026",
    logo: "/logos/uf.png",
    description: "Seed funding ($86,500) supporting a novel CRISPR-based high-throughput screen for modulators of chromatin remodeler activity at the University of Florida.",
  },
  {
    sponsor: "USDA-ARS",
    award: "58-6066-2-044",
    pi: "Jain",
    date: "2023–2025",
    logo: "/logos/usda.png",
    description: "United States Department of Agriculture Agricultural Research Service grant ($193,600) supporting the development of novel RNA-dependent RNA polymerases, nucleases, and transposases by metagenomics and protein engineering.",
  },
  {
    sponsor: "NIH-NIGMS",
    award: "R35GM147788",
    pi: "Jain",
    date: "2022–2027",
    logo: "/logos/nih.png",
    description: "Maximizing Investigators' Research Award (MIRA, $1,833,076) from the National Institute of General Medical Sciences, providing sustained support for the Jain Lab's research program in discovery and engineering of CRISPR/Cas systems.",
  },
  {
    sponsor: "NIH-NIAID",
    award: "R01AI165537",
    pi: "Juliano (PI), Dinglasan (MPI), Jain (Co-I)",
    date: "2022–2025",
    logo: "/logos/nih.png",
    description: "Collaborative R01 grant ($327,875 released, anticipated $541,375) from NIAID investigating relapsing malaria in Africa: mechanisms of persistence amid falciparum decline.",
  },
  {
    sponsor: "NIH-NIAID",
    award: "R21AI168795",
    pi: "Jain",
    date: "2022–2024",
    logo: "/logos/nih.png",
    description: "Exploratory/developmental grant ($419,375) from NIAID for rapid point-of-care detection of Hepatitis C viral RNA using multiplexed CRISPR/Cas platforms.",
  },
  {
    sponsor: "UFHCC GU Cancers Pilot Grant",
    award: "AWD007779",
    pi: "Jain",
    date: "2022–2024",
    logo: "/logos/uf.png",
    description: "Pilot grant ($100,000) from the UF Health Cancer Center to explore CRISPR applications in urine-based early diagnosis of bladder cancer.",
  },
  {
    sponsor: "CDC",
    award: "U01 GH002338",
    pi: "Dinglasan (PI), Jain (Co-I)",
    date: "2021–2024",
    logo: "/logos/cdc.png",
    description: "Cooperative agreement ($2,500,001 released, anticipated $10M) with the Centers for Disease Control and Prevention supporting the COVID-19 SICA study and global health disease surveillance.",
  },
  {
    sponsor: "NIH-NIAID",
    award: "R21AI156321",
    pi: "Jain",
    date: "2021–2023",
    logo: "/logos/nih.png",
    description: "Exploratory grant ($419,375) from NIAID supporting the development of CRISPR-based rapid detection platforms for Hepatitis C virus.",
  },
  {
    sponsor: "US-India Science & Tech Endowment Fund",
    award: "USISTEF/COVID-I/247/2020",
    pi: "Jain",
    date: "2020–2022",
    logo: "/logos/usistef.png",
    description: "International collaborative grant ($68,026) to develop and validate a CRISPR-based rapid and affordable diagnostic kit for deployment in India and the United States.",
  },
  {
    sponsor: "Shah Foundation / University of Florida",
    award: "Endowed Professorship",
    pi: "Jain",
    date: "2020–2024",
    logo: "/logos/uf.png",
    description: "Shah Rising Star Endowed Professorship (~$42,500) supporting innovative research in materials science and biomedical engineering at the University of Florida.",
  },
  {
    sponsor: "Sarepta Therapeutics",
    award: "AGR00018125 TO No. 3",
    pi: "Vulpe (PI), Jain (Co-PI)",
    date: "2020–2022",
    logo: "/logos/sarepta.png",
    description: "Industry-sponsored research agreement ($761,593) with Sarepta Therapeutics investigating dilated cardiomyopathy in a canine model to advance gene therapy delivery technologies.",
  },
  {
    sponsor: "Florida Breast Cancer Foundation",
    award: "AGR00018466",
    pi: "Jain",
    date: "2020–2021",
    logo: "/logos/fbcf.png",
    description: "Grant ($100,000) from the Florida Breast Cancer Foundation for early detection of breast cancer in the urine using CRISPR.",
  },
  {
    sponsor: "NIH-OD",
    award: "R21OD028211",
    pi: "Maden (PI), Jain (Sub)",
    date: "2019–2022",
    logo: "/logos/nih.png",
    description: "Grant ($419,375) from the NIH Office of the Director supporting genetic modification to harness the regenerative power of the African spiny mouse.",
  },
]

export default function GrantsPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setExpandedIndex(expandedIndex === i ? null : i)
  }

  return (
    <div className="relative min-h-screen overflow-hidden pt-24 pb-16">
      {/* Background Life Particles */}
      <div className="absolute inset-0 z-0 opacity-80">
        <LifeSimulation edgeBias />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="bg-background/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-border/50">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Grants
          </h1>
          <p className="mt-4 text-muted-foreground">
            Our research is generously supported by the following agencies and programs.
          </p>

          {/* Grants List */}
          <div className="mt-12 space-y-4 overflow-hidden">
            {/* Column headers — desktop only */}
            <div className="hidden md:flex items-center px-5 pb-2 border-b border-border/30">
              <p className="flex-[3] text-xs uppercase tracking-wider font-semibold text-muted-foreground">Sponsor</p>
              <p className="flex-[2.5] text-xs uppercase tracking-wider font-semibold text-muted-foreground">Award</p>
              <p className="flex-[2] text-xs uppercase tracking-wider font-semibold text-muted-foreground">PI</p>
              <p className="flex-[1.5] text-xs uppercase tracking-wider font-semibold text-muted-foreground text-right">Period</p>
            </div>

            {grants.map((grant, i) => {
              const isExpanded = expandedIndex === i

              return (
                <div
                  key={i}
                  className={`rounded-xl border transition-all duration-300 ease-out cursor-pointer ${
                    isExpanded
                      ? "border-border bg-background/95"
                      : "border-border/40 bg-background/50 hover:bg-background/90 hover:border-border/80"
                  }`}
                  onClick={() => toggle(i)}
                >
                  {/* Main Row */}
                  <div className="flex flex-col md:flex-row md:items-center gap-2 p-5">
                    {/* Sponsor */}
                    <div className="md:flex-[3] min-w-0">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1 md:hidden">Sponsor</p>
                      <p className="font-medium text-foreground">
                        {grant.sponsor}
                      </p>
                    </div>

                    {/* Award */}
                    <div className="md:flex-[2.5] min-w-0">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1 md:hidden">Award</p>
                      <p className="text-sm text-muted-foreground break-words">{grant.award}</p>
                    </div>

                    {/* PI */}
                    <div className="md:flex-[2] min-w-0">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1 md:hidden">PI</p>
                      <p className="text-sm text-foreground">{grant.pi}</p>
                    </div>

                    {/* Date */}
                    <div className="md:flex-[1.5] min-w-0 md:text-right">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1 md:hidden">Period</p>
                      <p className="text-sm text-muted-foreground">{grant.date}</p>
                    </div>
                  </div>

                  {/* Expanded Detail */}
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-2 border-t border-border/30">
                        <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                          {/* Sponsor Logo */}
                          <div className="w-32 h-20 sm:w-36 sm:h-24 shrink-0 bg-white rounded-xl border border-border/40 p-2.5 flex items-center justify-center overflow-hidden shadow-xs relative">
                            <Image 
                              src={grant.logo} 
                              alt={grant.sponsor} 
                              width={144} 
                              height={96} 
                              className="w-full h-full object-contain" 
                            />
                          </div>

                          {/* Description */}
                          <p className="text-sm text-foreground/85 leading-relaxed">
                            {grant.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
