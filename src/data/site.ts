// All editable site content lives here. Change text, offices or links in this one file.

export const site = {
  name: "Dr. Mae Aghili, DDS",
  shortName: "Dr. Mae",
  domain: "maeaghili.com",
  description:
    "Dr. Mae Aghili is a board-certified pediatric dentist seeing kids in Culver City and West Los Angeles.",
  instagram: {
    handle: "drmaedds",
    url: "https://www.instagram.com/drmaedds/",
  },
  // Paste a Behold feed ID here (behold.so, free tier) to show her live Instagram grid.
  // Leave empty to show the link-out tiles instead.
  beholdFeedId: "XlptGIhbVjwfLovOCSN4",
  // Draft only: shows the color-direction picker in the corner. Set to false before launch.
  showPalettePicker: true,
  // "orchid" | "plum" | "rose"
  defaultPalette: "orchid",
};

export type Office = {
  name: string;
  area: string;
  street: string;
  cityLine: string;
  phone: string;
  hours: string[];
  extras: string[];
  website: string;
  bookUrl: string;
  bookLabel: string;
};

export const offices: Office[] = [
  {
    name: "Walden Yu, DDS",
    area: "Culver City",
    street: "10814 Jefferson Blvd, Suite G",
    cityLine: "Culver City, CA 90230",
    phone: "(310) 397-1806",
    hours: ["Mon to Fri, 8:00am to 5:00pm", "Sat, 8:00am to 1:00pm (by appointment)"],
    extras: ["English, Spanish, Cantonese and Farsi spoken", "Most PPO plans accepted"],
    website: "https://makeyusmile.com/",
    bookUrl: "https://makeyusmile.com/appointments/",
    bookLabel: "Request an appointment",
  },
  {
    name: "Toothbuds",
    area: "West Los Angeles",
    street: "10551 W Pico Blvd",
    cityLine: "Los Angeles, CA 90064",
    phone: "(310) 475-7336",
    hours: ["Call the office for hours"],
    extras: ["Preventive and restorative care just for kids"],
    website: "https://www.toothbuds.com/",
    bookUrl: "https://www.toothbuds.com/",
    bookLabel: "Visit Toothbuds",
  },
];

export const bio = {
  intro:
    "Dr. Mae has been caring for kids' smiles in Los Angeles for years. Some families have been coming to her since their oldest was in diapers. Her goal for every child is simple: a first visit that feels fun, and a lifetime of healthy teeth after it.",
  facts: [
    { label: "Board certified", value: "Diplomate, American Board of Pediatric Dentistry" },
    { label: "Specialty training", value: "Pediatric dentistry at USC and Children's Hospital Los Angeles" },
    { label: "Dental school", value: "DDS, USC, plus advanced general dentistry training at UCLA" },
    { label: "Undergrad", value: "Psychobiology, UCLA" },
  ],
  memberships: ["AAPD", "California Society of Pediatric Dentistry", "ADA", "CDA", "LA Dental Society"],
};

export const promises = [
  {
    title: "An easy first visit",
    body: "Children meet the chair, the tools and the team before anything begins. Nothing is rushed and nothing is a surprise.",
  },
  {
    title: "Prevention first",
    body: "Cleanings, sealants and fluoride keep cavities from starting, so most visits stay short and simple.",
  },
  {
    title: "Parents in the loop",
    body: "You hear what she sees, what she recommends and why, in plain language and at every visit.",
  },
];

// USC section. Uses USC's name and cardinal/gold colors only; official USC logos need university licensing.
export const usc = {
  statement:
    "Dr. Mae earned her dental degree and her pediatric specialty at USC, and she has stayed close ever since. She recently served as President of the USC Pediatric Dentistry Alumni group, sits on its board, and is back with the program every year.",
  items: [
    { label: "Past President", value: "USC Pediatric Dentistry Alumni group" },
    { label: "Board member", value: "Active with the alumni group every year" },
    { label: "Specialty training", value: "Pediatric dentistry, USC and Children's Hospital Los Angeles" },
    { label: "Doctor of Dental Surgery", value: "USC Herman Ostrow School of Dentistry" },
  ],
};

// Photos for the hero and about arches. For now these load from Mae's Behold feed (Instagram).
// Before launch, save the originals into public/images/ and point src at "/images/<file>.jpg".
export const photos = {
  hero: {
    src: "https://behold.pictures/eyJ1IjoiOHdsOWhDTjB1UU1TWDg1YWVGUkEydkFDT2tqMSIsImYiOiJYbHB0R0loYlZqd2ZMb3ZPQ1NONCIsInAiOiIxNzg0ODgzNDk0NzY5Mjg4OSIsImgiOiIxbjE0YjAyIn0.jpg?class=squareLarge",
    alt: "Dr. Mae smiling with a young boy on a sunny beach",
    position: "10% center",
  },
  about: {
    src: "https://behold.pictures/eyJ1IjoiOHdsOWhDTjB1UU1TWDg1YWVGUkEydkFDT2tqMSIsImYiOiJYbHB0R0loYlZqd2ZMb3ZPQ1NONCIsInAiOiIxODY0MjY0MzY2MzAwNTUzMSIsImgiOiJ1OXZoNGwifQ.jpg?class=squareLarge",
    alt: "Dr. Mae in a costume posing with a young patient dressed as a dinosaur",
    position: "45% center",
  },
};
