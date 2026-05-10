'use client'

import { useState } from "react"
import LifeSimulation from "@/components/LifeSimulation"

const grants = [
  {
    sponsor: "UF Research Opportunity Seed Fund",
    award: "00134351",
    pi: "Duarte (PI), Jain (Co-PI)",
    date: "2025–2027",
    logo: "/logos/uf.png",
    description: "Seed funding from the University of Florida to support early-stage collaborative research between the Duarte and Jain laboratories.",
  },
  {
    sponsor: "NIH-NIAID",
    award: "R61AI181016 (Phase 1 of 2)",
    pi: "Jain",
    date: "2024–2026",
    logo: "/logos/nih.png",
    description: "Phase 1 award from the National Institute of Allergy and Infectious Diseases to develop novel diagnostic and therapeutic strategies for infectious diseases.",
  },
  {
    sponsor: "UF Research Opportunity Seed Fund",
    award: "00132775",
    pi: "Kladde",
    date: "2023–2025",
    logo: "/logos/uf.png",
    description: "Seed funding supporting collaborative research with the Kladde laboratory at the University of Florida.",
  },
  {
    sponsor: "USDA-ARS",
    award: "58-6066-2-044",
    pi: "Jain",
    date: "2022–2024",
    logo: "/logos/usda.png",
    description: "United States Department of Agriculture Agricultural Research Service grant supporting CRISPR-based research with agricultural applications.",
  },
  {
    sponsor: "NIH-NIGMS",
    award: "R35GM147788",
    pi: "Jain",
    date: "2022–2027",
    logo: "/logos/nih.png",
    description: "Maximizing Investigators' Research Award (MIRA) from the National Institute of General Medical Sciences, providing sustained support for the Jain Lab's research program in genome-editing technologies.",
  },
  {
    sponsor: "NIH-NIAID",
    award: "R01AI165537",
    pi: "Juliano",
    date: "2022–2027",
    logo: "/logos/nih.png",
    description: "Collaborative R01 grant from NIAID supporting research on advanced delivery systems for gene-editing tools in infectious disease contexts.",
  },
  {
    sponsor: "NIH-NIAID",
    award: "R21AI168795",
    pi: "Jain",
    date: "2022–2025",
    logo: "/logos/nih.png",
    description: "Exploratory/developmental grant from NIAID to investigate novel CRISPR-based approaches for pathogen detection and disease diagnostics.",
  },
  {
    sponsor: "UFHCC GU Cancers Pilot Grant",
    award: "AWD007779",
    pi: "Jain",
    date: "2022–2024",
    logo: "/logos/uf.png",
    description: "Pilot grant from the UF Health Cancer Center to explore CRISPR applications in genitourinary cancer research.",
  },
  {
    sponsor: "CDC",
    award: "U01 GH002338",
    pi: "Dinglasan",
    date: "2021–2026",
    logo: "/logos/cdc.png",
    description: "Cooperative agreement with the Centers for Disease Control and Prevention supporting global health initiatives in vector-borne disease surveillance.",
  },
  {
    sponsor: "NIH-NIAID",
    award: "R21AI156321",
    pi: "Jain",
    date: "2021–2024",
    logo: "/logos/nih.png",
    description: "Exploratory grant from NIAID supporting the development of CRISPR-based rapid diagnostic platforms for infectious disease detection.",
  },
  {
    sponsor: "US-India Science & Tech Endowment Fund",
    award: "USISTEF/COVID-I/247/2020",
    pi: "Jain",
    date: "2020–2022",
    logo: "/logos/usistef.png",
    description: "International collaborative grant to develop rapid, low-cost CRISPR-based COVID-19 diagnostic tools for deployment in India and the United States.",
  },
  {
    sponsor: "Sarepta Therapeutics",
    award: "AGR00018125 TO No. 3",
    pi: "Vulpe",
    date: "2020–2022",
    logo: "/logos/sarepta.png",
    description: "Industry-sponsored research agreement with Sarepta Therapeutics to advance gene therapy delivery technologies.",
  },
  {
    sponsor: "Florida Breast Cancer Foundation",
    award: "AGR00018466",
    pi: "Jain",
    date: "2020–2021",
    logo: "/logos/fbcf.png",
    description: "Grant from the Florida Breast Cancer Foundation to explore CRISPR-based diagnostic and therapeutic approaches for breast cancer.",
  },
  {
    sponsor: "NIH-OD",
    award: "R21OD028211",
    pi: "Maden",
    date: "2019–2022",
    logo: "/logos/nih.png",
    description: "Grant from the NIH Office of the Director supporting collaborative research on regenerative biology and genome-engineering tools.",
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
                        <div className="flex flex-col md:flex-row gap-5 items-start">
                          {/* Logo placeholder */}
                          <div className="w-20 h-20 shrink-0 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                            {/* Replace with actual logo: <img src={grant.logo} alt={grant.sponsor} className="w-full h-full object-contain p-2" /> */}
                            <span className="text-xs text-muted-foreground text-center px-1">Logo</span>
                          </div>

                          {/* Description */}
                          <p className="text-sm text-foreground/80 leading-relaxed">
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
