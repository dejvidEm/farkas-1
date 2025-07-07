"use client";

import { CardSlider } from "./card-slider";

const courses = [
  {
    title: "Moderné pristory",
    description: "Cítite sa počas Vašej liečby ako doma",
    image: "/dvere2.jpg",
  },
  {
    title: "Skúsení lekári",
    description: "Nebojte sa zveriť svoje zdravie našim odborníkom",
    image: "/3.jpg",
  },
  {
    title: "Moderné vybavenie",
    description: "Používame najmodernejšie vybavenie pre Vašu liečbu",
    image: "/dvere2.jpg",
  },
  {
    title: "Moderné pristory",
    description: "Cítite sa počas Vašej liečby ako doma",
    image: "/sedacky2.jpg",
  },
  {
    title: "Skúsení lekári",
    description: "Nebojte sa zveriť svoje zdravie našim odborníkom",
    image: "/3.jpg",
  },
];

export function CoursesSlider() {
  return (
    <CardSlider
      title="Dôvera v rukách odborníkov"
      description="Spojili sme špičkové technológie s ľudským prístupom, aby ste sa u nás cítili bezpečne a pohodlne – od prvej konzultácie až po zotavenie. Naša ambulancia spĺňa najvyššie hygienické štandardy a využíva najnovšie chirurgické postupy, ktoré minimalizujú riziká a urýchľujú hojenie."
      cards={courses}
    />
  );
} 