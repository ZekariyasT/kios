import { notFound } from "next/navigation";
import { surveySteps } from "@/lib/survey-data";
import ContentPanel from "@/components/survey/ContentPanel";

interface SurveyStepPageProps {
  params: Promise<{ step: string }>;
}

export function generateStaticParams() {
  return surveySteps.map((s) => ({ step: String(s.step) }));
}

export default async function SurveyStepPage({ params }: SurveyStepPageProps) {
  const { step } = await params;
  const stepNumber = parseInt(step, 10);
  const stepData = surveySteps.find((s) => s.step === stepNumber);

  if (!stepData) {
    notFound();
  }

  return (
    <ContentPanel stepData={stepData} totalSteps={surveySteps.length} />
  );
}
