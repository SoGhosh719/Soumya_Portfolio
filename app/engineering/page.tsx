import type { Metadata } from "next"; import { AudiencePage } from "@/components/audience-page";
export const metadata:Metadata={title:"Engineering",description:"AI and software architecture, backend infrastructure, reliability, and human approval mechanisms."}; export default function Page(){return <AudiencePage audience="engineering"/>}
