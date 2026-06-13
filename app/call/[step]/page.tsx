import { notFound } from "next/navigation";
import { callSteps } from "@/lib/call-data";
import ActiveCallScreen from "@/components/call/ActiveCallScreen";

interface CallStepPageProps {
  params: Promise<{ step: string }>;
}

export function generateStaticParams() {
  return callSteps.map((s) => ({ step: String(s.step) }));
}

export default async function CallStepPage({ params }: CallStepPageProps) {
  const { step } = await params;
  const stepNumber = parseInt(step, 10);
  const stepData = callSteps.find((s) => s.step === stepNumber);

  if (!stepData) notFound();

  return (
    <ActiveCallScreen
      stepData={stepData}
      totalSteps={callSteps.length}
    />
  );
}
