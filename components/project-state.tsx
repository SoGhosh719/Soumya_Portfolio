import type { StateClaim } from "@/content/site";
export function ProjectState({claims}:{claims:StateClaim[]}){return <div className="state-ledger" aria-label="Project evidence states">{claims.map((claim,i)=><article key={`${claim.state}-${i}`} data-state={claim.state}><strong>{claim.state}</strong><p>{claim.text}</p></article>)}</div>}
