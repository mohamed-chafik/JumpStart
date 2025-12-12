export interface Language{
  id: string;
  name: string;
  icon: string;
  type: string[];
}

export const languages: Language[] = [
  {
    id: "javascript",
    name: "JavaScript",
    icon: "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
    type: ["frontend", "backend"]
  }
]
