import type { Metadata } from "next"; import { AudiencePage } from "@/components/audience-page";
export const metadata:Metadata={title:"Research",description:"Human-centered and trustworthy AI research questions, supervised work, and evaluation boundaries."}; export default function Page(){return <AudiencePage audience="research"/>}
