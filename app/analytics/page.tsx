import type { Metadata } from "next"; import { AudiencePage } from "@/components/audience-page";
export const metadata:Metadata={title:"Analytics",description:"Machine learning, PySpark, decision support, and evidence-led operations analytics."}; export default function Page(){return <AudiencePage audience="analytics"/>}
