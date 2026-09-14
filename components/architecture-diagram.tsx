import type { Project } from "@/content/site";
const diagrams={
 netmap:{label:"Consent-aware routing flow",nodes:["Requester","Trust / routing layer","Candidate path","Consent gates","Introduction"],notes:["time weighting","approval required"]},
 hpc:{label:"Educator-gated assessment flow",nodes:["AI draft","Evidence + rubric","Educator review","Revise / approve","Student visibility"],notes:["blocked until approval","human release authority"]},
 automation:{label:"Failure-aware provider flow",nodes:["Request","Provider attempt","Validation","Success / retry","Switch / escalate"],notes:["observe cost · latency · tokens","human escalation"]},
 statusguard:{label:"Evidence and designed provenance layers",nodes:["Document / input","Extraction","User review","Evidence representation","Designed provenance"],notes:["implemented journey layer","RFC 3161 not demonstrated"]},
 zwitter:{label:"Operations recommendation boundary",nodes:["Operational signal","Recommendation","Human choice","Action"],notes:["no automatic assignment","bounded subsystem deployed"]}
} as const;
export function ArchitectureDiagram({project}:{project:Project}){if(!project.diagram)return null;const d=diagrams[project.diagram];return <figure className={`architecture-diagram signature-${project.diagram}`} aria-labelledby="diagram-title"><figcaption id="diagram-title"><span>System map</span>{d.label}</figcaption><div className="diagram-flow">{d.nodes.map((node,i)=><div className="diagram-step" key={node}><span>{String(i+1).padStart(2,"0")}</span><strong>{node}</strong>{i<d.nodes.length-1&&<i aria-hidden="true">→</i>}</div>)}</div><div className="diagram-notes">{d.notes.map(n=><span key={n}>{n}</span>)}</div></figure>}
