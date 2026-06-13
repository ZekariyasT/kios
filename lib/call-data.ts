export interface CallStep {
  step: number;
  question: string;
}

/**
 * Questions for the Call interview flow.
 * Sourced from Figma section "Call" (28:3650), frames 35–39.
 */
export const callSteps: CallStep[] = [
  {
    step: 1,
    question: "What do you think of the area around the Mozart's birth house?",
  },
  {
    step: 2,
    question: "How easy was it for you to get here and pass through it?",
  },
  {
    step: 3,
    question: "If there was only one thing you could change in this area, what would it be?",
  },
  {
    step: 4,
    question: "What grabbed your attention while being here?",
  },
];
