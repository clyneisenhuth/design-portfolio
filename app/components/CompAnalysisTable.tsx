import Image from "next/image";

type Cell = { check: boolean; note?: string; unique?: boolean };
type Row  = { label: string; cells: Cell[] };
type Group = { heading: string; rows: Row[] };

const C  = (note?: string): Cell => ({ check: true,  note });
const CU = (note?: string): Cell => ({ check: true,  note, unique: true });
const D  = (): Cell             => ({ check: false });

const brands = [
  { key: "af",        name: "Abercrombie\n& Fitch",    fallback: "A&F",  bg: "#1B2A4A" },
  { key: "gap",       name: "Gap",                      fallback: "GAP",  bg: "#1C1C1C" },
  { key: "lululemon", name: "Lululemon",                fallback: "lulu", bg: "#CC0000" },
  { key: "nike",      name: "Nike",                     fallback: "N",    bg: "#111111" },
  { key: "nordstrom", name: "Nordstrom",                fallback: "NORD", bg: "#001F5B" },
  { key: "uo",        name: "Urban\nOutfitters",        fallback: "UO",   bg: "#333333" },
  { key: "vs",        name: "Victoria's\nSecret",       fallback: "VS",   bg: "#CC3366" },
  { key: "macys",     name: "Macy's",                   fallback: "MCY",  bg: "#E21A1A" },
  { key: "sephora",   name: "Sephora",                  fallback: "SEP",  bg: "#000000" },
  { key: "target",    name: "Target",                   fallback: "TGT",  bg: "#CC0000" },
  { key: "walmart",   name: "Walmart",                  fallback: "WMT",  bg: "#0071CE" },
];

const groups: Group[] = [
  {
    heading: "PDP — Reviews Surface",
    rows: [
      { label: "Star rating on PDP",            cells: [C(), C(), C(), C(), C(), C(), C(), C(), C(), C(), C()] },
      { label: "Fit indicator on PDP",           cells: [C("slider"), D(), C("slider"), D(), C("slider"), C("text label"), C("text label"), D(), D(), D(), D()] },
      { label: "Customer photos on PDP",         cells: [C(), D(), D(), D(), D(), C(), D(), C(), C(), D(), C()] },
      { label: "Review preview cards on PDP",    cells: [D(), D(), D(), C(), C(), C(), D(), C(), D(), D(), D()] },
      { label: "Write a Review CTA on PDP",      cells: [D(), D(), C("full-width"), D(), D(), C(), D(), D(), C(), D(), D()] },
      { label: "AI-generated summary on PDP",    cells: [D(), C(), D(), D(), D(), D(), D(), C(), C(), D(), C()] },
      { label: "Q&A section on PDP",             cells: [D(), D(), D(), D(), D(), D(), D(), D(), D(), CU(), D()] },
      { label: "AI shopping assistant on PDP",   cells: [D(), D(), D(), D(), D(), D(), D(), D(), D(), CU(), D()] },
    ],
  },
  {
    heading: "Reviews Page — Summary & Filters",
    rows: [
      { label: "Star breakdown bars",            cells: [C("raw counts"), C("%"), D(), D(), C("filterable"), C("filterable"), C("%"), C("%"), C("%"), C("%"), C("% + count")] },
      { label: "AI summary — reviews page",      cells: [D(), C("Likes/Mixed/\nDislikes chips"), D(), D(), D(), D(), D(), C("bulleted prose"), C("+/− icon chips"), C("prose + red\naccent border"), C("tappable\ntopic bullets")] },
      { label: "Pros / Cons topic chips",        cells: [D(), C(), D(), D(), C("+ pull quotes"), D(), D(), D(), C("color-coded\nicon chips"), D(), C()] },
      { label: "Attribute filters",              cells: [D(), D(), D(), D(), C(), C(), C("age, ht,\nstyle, band"), C("star tier\nchips"), C("rating,\nverified"), D(), C("star, verified,\n+ topic chips")] },
      { label: "Search reviews",                 cells: [C("topics +\nreviews"), D(), D(), D(), C(), D(), D(), D(), D(), D(), D()] },
      { label: "Multi-dimensional fit sliders",  cells: [C("fit + quality"), D(), D(), C("fit + comfort"), D(), D(), D(), C("slim / fit /\nlength — 3"), D(), D(), D()] },
      { label: "Multi-attribute score summary",  cells: [D(), D(), D(), D(), D(), D(), C("fit, quality,\ncomfort"), D(), D(), C("5 circle badges"), D()] },
    ],
  },
  {
    heading: "Reviews Page — Individual Review Cards",
    rows: [
      { label: "Reviewer body metadata",         cells: [C("wt, ht,\nsize purch."), C("height only"), C("size purch."), D(), C("ht, wt,\ncolor, fit"), C("ht, age,\nsize, location"), C("fit, breast\nshape, age, ht"), C("height only"), C("hair type,\nhair color"), D(), C("color, length,\nclothing size")] },
      { label: "Verified purchase badge",        cells: [D(), C(), D(), D(), C(), D(), C(), D(), C(), C(), C()] },
      { label: "Helpful voting",                 cells: [D(), D(), D(), D(), C("count visible"), D(), C(), D(), C(), C(), C()] },
      { label: "Photos embedded in review cards",cells: [D(), D(), D(), D(), D(), D(), D(), D(), C(), D(), C()] },
      { label: "Brand response to reviews",      cells: [D(), D(), CU(), D(), D(), D(), D(), D(), D(), D(), D()] },
      { label: "Recommendation percentage",      cells: [C("72%"), D(), D(), D(), D(), D(), D(), D(), C("81%"), D(), D()] },
      { label: "Promo / incentivized disclosure",cells: [D(), D(), D(), D(), D(), C(), D(), C(), D(), C("incl. in\nAI summary"), D()] },
      { label: "Syndicated source disclosure",   cells: [D(), D(), D(), D(), D(), D(), D(), C("Originally\nposted on…"), C("Originally\nposted on…"), D(), D()] },
      { label: "Top Reviewer / community badge", cells: [D(), D(), C("Sweat\nCollective"), D(), D(), D(), D(), D(), D(), D(), C("Top Reviewer\nblue star")] },
      { label: "Ratings vs. reviews count separated", cells: [D(), D(), D(), D(), D(), D(), D(), D(), D(), D(), CU()] },
    ],
  },
];

const CheckIcon = () => (
  <span className="inline-flex w-5 h-5 rounded-md items-center justify-center" style={{ background: "#E8F5E9" }}>
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
      <path d="M2 6l3 3 5-5" stroke="#2E7D32" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function CompAnalysisTable() {
  return (
    <div className="mt-8 rounded-3xl overflow-hidden border border-border shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse" style={{ minWidth: "1000px", tableLayout: "fixed" }}>
          <colgroup>
            <col style={{ width: "190px" }} />
            {brands.map((b) => <col key={b.key} style={{ width: "76px" }} />)}
          </colgroup>

          {/* Brand header */}
          <thead>
            <tr>
              <th className="bg-ink px-4 py-3 text-left border-b-2 border-purple/60 border-r border-white/10">
                <span className="font-sans text-xs font-semibold text-purple uppercase tracking-widest">Feature</span>
              </th>
              {brands.map((b) => (
                <th key={b.key} className="bg-ink px-1 py-3 border-b-2 border-purple/60 border-r border-white/10 last:border-r-0">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
                      <Image
                        src={`/logos/logo-${b.key}.png`}
                        alt={b.fallback}
                        width={36}
                        height={36}
                        className="object-contain p-0.5"
                      />
                    </div>
                    <span className="font-sans text-[9px] font-medium text-white/70 text-center leading-tight whitespace-pre-line">{b.name}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {groups.map((group) => (
              <>
                {/* Group header */}
                <tr key={group.heading}>
                  <td
                    colSpan={12}
                    className="bg-purple-pale text-purple font-sans text-xs font-semibold uppercase tracking-wider px-4 py-2 border-t-2 border-purple/30 border-b border-border"
                  >
                    {group.heading}
                  </td>
                </tr>

                {/* Feature rows */}
                {group.rows.map((row, ri) => (
                  <tr
                    key={row.label}
                    className={`group/row ${ri % 2 === 0 ? "bg-surface" : "bg-bg"} hover:bg-purple-pale/50 transition-colors duration-150`}
                  >
                    <td className="font-sans text-xs font-medium text-ink px-4 py-2 border-r border-border border-b border-border leading-snug bg-bg/80">
                      {row.label}
                    </td>
                    {row.cells.map((cell, ci) => (
                      <td key={ci} className="text-center px-1 py-2 border-r border-border border-b border-border last:border-r-0 align-middle">
                        <div className="flex flex-col items-center gap-0.5">
                          {cell.check ? (
                            <CheckIcon />
                          ) : (
                            <span className="font-sans text-sm text-border">—</span>
                          )}
                          {cell.note && (
                            <span className="font-sans text-[8.5px] text-muted text-center leading-tight whitespace-pre-line">{cell.note}</span>
                          )}
                          {cell.unique && (
                            <span className="font-sans text-[7.5px] font-semibold text-purple bg-purple-pale border border-purple/20 rounded px-1 py-px uppercase tracking-wide">
                              unique
                            </span>
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
