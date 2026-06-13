import {
  imgIconCouple,
  imgIconBackpack,
  imgIconCrew,
  imgIconFortress,
  imgIconGarden,
  imgIconNature,
  imgIconFood,
  imgIconCulture,
  imgIconShopping,
  imgIconWand,
  imgIconSun,
  imgIconMap,
} from "./assets";

export interface SurveyOption {
  id: string;
  iconSrc: string;
  iconAlt: string;
  label: string;
}

export interface SurveyStep {
  step: number;
  question: string;
  options: SurveyOption[];
  textFieldPlaceholder: string;
}

export const surveySteps: SurveyStep[] = [
  {
    step: 1,
    question: "Who is co-starring in your Salzburg adventure today?",
    options: [
      {
        id: "partner",
        iconSrc: imgIconCouple,
        iconAlt: "Travel partner icon",
        label: "My favorite travel partner",
      },
      {
        id: "solo",
        iconSrc: imgIconBackpack,
        iconAlt: "Backpack icon",
        label: "Just me and my backpack",
      },
      {
        id: "crew",
        iconSrc: imgIconCrew,
        iconAlt: "Group icon",
        label: "The whole crazy crew",
      },
    ],
    textFieldPlaceholder: "Someone special — tell us who!",
  },
  {
    step: 2,
    question: "Where did Salzburg steal your heart today?",
    options: [
      {
        id: "fortress",
        iconSrc: imgIconFortress,
        iconAlt: "Fortress icon",
        label: "Up high, conquering the fortress (Festung Hohensalzburg)",
      },
      {
        id: "garden",
        iconSrc: imgIconGarden,
        iconAlt: "Garden icon",
        label: "Twirling through the manicured gardens (Mirabell Palace)",
      },
      {
        id: "nature",
        iconSrc: imgIconNature,
        iconAlt: "Nature icon",
        label:
          "Escaping into nature and local neighborhoods (Gaisberg, Untersberg, or Nonntal)",
      },
    ],
    textFieldPlaceholder: '🔍 "Found a hidden gem? Type your secret spot here..."',
  },
  {
    step: 3,
    question: "Where did most of your Salzburg budget happily vanish today?",
    options: [
      {
        id: "food",
        iconSrc: imgIconFood,
        iconAlt: "Food icon",
        label: "Treating myself to traditional cafes and amazing food (Gastronomy)",
      },
      {
        id: "culture",
        iconSrc: imgIconCulture,
        iconAlt: "Culture icon",
        label: "Collecting tickets for museums, concerts, and tours (Culture)",
      },
      {
        id: "shopping",
        iconSrc: imgIconShopping,
        iconAlt: "Shopping icon",
        label: "Hunting for unique souvenirs and local shops (Retail)",
      },
    ],
    textFieldPlaceholder:
      '🛍️ "Something else? (e.g., Nightlife, fashion, outdoor activities...)"',
  },
  {
    step: 4,
    question: "If you had a magic wand, what would you change about today?",
    options: [
      {
        id: "queues",
        iconSrc: imgIconWand,
        iconAlt: "Magic wand icon",
        label: "Poof! Make the long queues and crowds disappear!",
      },
      {
        id: "weather",
        iconSrc: imgIconSun,
        iconAlt: "Sun icon",
        label:
          "Poof! Bring out the sunshine and banish the Schnürlregen (Salzburg rain)!",
      },
      {
        id: "map",
        iconSrc: imgIconMap,
        iconAlt: "Map icon",
        label: "Poof! Give me a personal map assistant so I stop getting lost!",
      },
    ],
    textFieldPlaceholder: '🪄 "Poof! Something else? Type your magic wish here..."',
  },
];
