import LifeSimulation from "@/components/LifeSimulation"

const grantedPatents = [
  {
    number: "US10159735B2",
    title: "Photocleavable drug conjugates.",
    inventors: "Friedman SH, Jain PK, Karunakaran D, Sarode B.",
    filed: "2013",
    status: "Granted 2018",
  },
  {
    number: "US Patent App. 16/099,147",
    title: "Methods and uses for remotely triggered protease activity measurements.",
    inventors: "Bhatia SN, Kwong GA, Jain PK, Dudani JS, Schurle S.",
    filed: "2017",
    status: "Granted 2020",
    ids: "16/099,147 · CA3022928A1 · WO2017193070A1 · EP3452407A4",
  },
]

const pendingPatents = [
  { number: "PCT/US2024/051700", inventors: "Jain PK, Orosco C, Rananaware SR", filed: "Oct 2024" },
  { number: "US Patent App. 18/845,013", inventors: "Jain PK, Rananaware SR, Sandoval LS, Shoemaker G, Vesco E", filed: "Sep 2024" },
  { number: "PCT/US2024/044167", inventors: "Jain PK, Nguyen LT, Rakestraw NR", filed: "Aug 2024" },
  { number: "US Patent App. 63/668,340", inventors: "Jain PK, Myhrvold C, Nguyen LT, Pizzano BLM, Rakestraw NR", filed: "Jul 2024" },
  { number: "US Patent App. 18/707,213", inventors: "Jain PK, Nguyen LT, Rananaware SR", filed: "Sep 2023 / Mar 2024" },
  { number: "PCT/US2023/075329 · 18/694,696 · WO/2024/073541", inventors: "Jain PK, Nguyen LT, Rananaware SR", filed: "Sep 2023 / Mar 2024", link: "https://patents.google.com/patent/WO2024073541A2/en" },
  { number: "US Patent App. 63/595,923 · 63/609,712", inventors: "Jain PK, Orosco C, Rananaware SR", filed: "Nov 2023 / Dec 2023" },
  { number: "US Patent App. 63/579,160 · 63/600,216", inventors: "Jain PK, Nguyen LT, Rakestraw NR", filed: "Aug 2023 / Nov 2023" },
  { number: "US Patent App. 63/596,070 · 63/611,813", inventors: "Jain PK, Meister K, Rananaware SR, Shoemaker G", filed: "Nov 2023 / Dec 2023" },
  { number: "US Patent App. 63/579,160", inventors: "Jain PK, Nguyen LT, Rakestraw NR", filed: "Aug 2023" },
  { number: "PCT/US2023/064701 · 18/707,213", inventors: "Jain PK, Rananaware SR, Sandoval LS, Shoemaker G, Vesco E", filed: "Mar 2023 / May 2024", link: "https://patents.google.com/patent/WO2023178347A1/en" },
  { number: "US Patent App. PCT/US2021/034971 · WO2021/243276 · 17/928,400", inventors: "Jain PK, Downing MA, Nguyen LT", filed: "Nov 2022", link: "https://patents.google.com/patent/US20230193368A1/en" },
  { number: "PCT/US2022/079420 · WO2023081902A1", inventors: "Jain PK, Anekar S, Rananaware SR, Vesco E", filed: "Nov 2022", link: "https://patents.google.com/patent/WO2023081902A1/en" },
  { number: "US Patent App. 63/411,765", inventors: "Jain PK, Nguyen LT, Rananaware SR", filed: "Sep 2022" },
  { number: "PCT/US2022/076926 · WO/2023/049837", inventors: "Jain PK, Nguyen LT, Rananaware SR", filed: "Sep 2022", link: "https://patents.google.com/patent/WO2023049837A1/en" },
  { number: "US Patent App. 17/775,206 · WO2021092519A1", inventors: "Jain PK, Nguyen LT, Downing M, Smith B, Pawlyshyn B", filed: "May 2022", link: "https://patentscope.wipo.int/search/en/detail.jsf?docId=US380159419" },
  { number: "US Patent App. 63/321,408", inventors: "Jain PK, Rananaware SR, Sandoval LS, Shoemaker G, Vesco E", filed: "Mar 2022" },
  { number: "US Patent App. 63/276,074", inventors: "Jain PK, Anekar S, Rananaware SR, Vesco E", filed: "Nov 2021" },
  { number: "US Patent App. 63/726,077", inventors: "Jain PK, Rananaware SR, Vesco E", filed: "Nov 2021" },
  { number: "US Patent App. 63/248,243", inventors: "Jain PK, Nguyen LT", filed: "Sep 2021" },
  { number: "US Patent App. 63/226,060", inventors: "Jain PK, Nguyen LT, Vulpe C, Pacak C", filed: "Jul 2021" },
  { number: "US Patent App. 63/222,251", inventors: "Jain PK, Nguyen LT", filed: "Jul 2021" },
  { number: "PCT/US2021/034971 · WO2021/243276", inventors: "Jain PK, Downing MA, Nguyen LT", filed: "May 2021", link: "https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2021243276" },
  { number: "US Patent App. 63/191,647", inventors: "Jain PK, Nguyen LT", filed: "May 2021" },
  { number: "US Patent App. 63/191,890", inventors: "Jain PK, Downing MA, Nguyen LT", filed: "May 2021" },
  { number: "US Patent App. 63/128,962", inventors: "Jain PK, Nguyen LT", filed: "Dec 2020" },
  { number: "US Patent App. 63/010,382", inventors: "Jain PK, Nguyen LT", filed: "Apr 2020" },
  { number: "PCT/US2020/059577 · WO/2021/092519", inventors: "Jain PK, Nguyen LT, Smith BM, Pawlyshyn BN, Downing MA", filed: "Nov 2020", link: "https://patents.google.com/patent/US20220380835A1/en" },
  { number: "US Patent App. 63/078,708", inventors: "Jain PK, Nguyen LT", filed: "Sep 2020" },
  { number: "US Patent App. 63/032,370", inventors: "Jain PK, Nguyen LT, Downing MA", filed: "May 2020" },
  { number: "US Patent App. 63/031,865", inventors: "Jain PK, Nguyen LT", filed: "May 2020" },
  { number: "US Patent App. 63/013,412", inventors: "Jain PK, Rananaware SR", filed: "Apr 2020" },
  { number: "US Patent App. 63/010,382", inventors: "Jain PK, Nguyen LT", filed: "Apr 2020" },
  { number: "US Patent App. 63/007,738", inventors: "Jain PK, Rananaware SR", filed: "Apr 2020" },
  { number: "US Patent App. 62/932,056", inventors: "Jain PK, Nguyen LT", filed: "Mar 27, 2020" },
  { number: "US Patent App. 62/932,679", inventors: "Jain PK, Nguyen LT", filed: "Mar 12, 2020" },
  { number: "US Patent App. 62/975,010", inventors: "Jain PK, Downing MA", filed: "2020" },
  { number: "US Patent App. 62/952,762", inventors: "Jain PK, Nguyen LT, Smith BM", filed: "Dec 2019" },
  { number: "US Patent App. 62/934,217", inventors: "Jain PK, Nguyen LT, Pawlyshyn BN, Downing MA", filed: "Dec 2019" },
  { number: "US Patent App. 62/932,823", inventors: "Jain PK, Nguyen LT", filed: "Nov 2019" },
  { number: "US Patent App. 62/489,163 · WO2018200462A1", inventors: "Friedman SH, Nandela K, Sarode B, Jain PK, Karunakaran D, Chintala S, Shah P", filed: "2018", link: "https://patentscope.wipo.int/search/en/detail.jsf?docId=US294691039" },
]

const licensedPatents = [
  {
    number: "US Patent App. 16/099,147",
    title: "Methods and uses for remotely triggered protease activity measurements.",
    inventors: "Bhatia SN, Kwong GA, Jain PK, Dudani JS, Schurle S.",
    filed: "2017",
    status: "Licensed 2018",
    ids: "16/099,147 · CA3022928A1 · WO2017193070A1 · EP3452407A4",
  },
]

export default function PatentsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-24 pb-16">
      {/* Background Life Particles */}
      <div className="absolute inset-0 z-0 opacity-80">
        <LifeSimulation edgeBias />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="bg-background/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-border/50">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Patents / Licenses
          </h1>
          <p className="mt-4 text-muted-foreground">
            Over 40 pending or issued patents from the Jain Lab.
          </p>

          {/* Granted Patents */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
              Granted ({grantedPatents.length})
            </h2>
            <div className="mt-6 space-y-4">
              {grantedPatents.map((p, i) => (
                <div key={i} className="p-5 rounded-xl border border-border/40 bg-background/50 hover:bg-background/90 hover:border-border/80 transition-all duration-300 ease-out">
                  <p className="font-medium text-foreground">&ldquo;{p.title}&rdquo;</p>
                  <p className="text-sm text-muted-foreground mt-1">{p.inventors}</p>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3">
                    <span className="text-xs text-muted-foreground">{p.number}</span>
                    <span className="text-xs text-muted-foreground">Filed: {p.filed}</span>
                    <span className="text-xs font-medium text-green-600">{p.status}</span>
                  </div>
                  {p.ids && (
                    <p className="text-xs text-muted-foreground/60 mt-2">{p.ids}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Pending Patents */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
              Pending ({pendingPatents.length})
            </h2>
            <div className="mt-6 space-y-3">
              {pendingPatents.map((p, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center gap-1 md:gap-0 p-4 rounded-xl border border-border/40 bg-background/50 hover:bg-background/90 hover:border-border/80 transition-all duration-300 ease-out">
                  <div className="md:flex-[4] min-w-0">
                    <p className="text-sm text-foreground break-words">
                      {p.number}
                      {p.link && (
                        <a href={p.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-primary hover:text-primary/80 text-xs">
                          [View]
                        </a>
                      )}
                    </p>
                  </div>
                  <div className="md:flex-[4] min-w-0">
                    <p className="text-sm text-muted-foreground break-words">{p.inventors}</p>
                  </div>
                  <div className="md:flex-[1.5] min-w-0 md:text-right">
                    <p className="text-sm text-muted-foreground">{p.filed}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Licensed Patents */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
              Licensed ({licensedPatents.length})
            </h2>
            <div className="mt-6 space-y-4">
              {licensedPatents.map((p, i) => (
                <div key={i} className="p-5 rounded-xl border border-border/40 bg-background/50 hover:bg-background/90 hover:border-border/80 transition-all duration-300 ease-out">
                  <p className="font-medium text-foreground">&ldquo;{p.title}&rdquo;</p>
                  <p className="text-sm text-muted-foreground mt-1">{p.inventors}</p>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3">
                    <span className="text-xs text-muted-foreground">{p.number}</span>
                    <span className="text-xs text-muted-foreground">Filed: {p.filed}</span>
                    <span className="text-xs font-medium text-blue-600">{p.status}</span>
                  </div>
                  {p.ids && (
                    <p className="text-xs text-muted-foreground/60 mt-2">{p.ids}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
