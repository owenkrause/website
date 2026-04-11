export interface TimelineEntry {
  title: string;
  description: string;
  date: string;
  detail?: {
    text: string;
    links?: { label: string; url: string }[];
  };
}

export const timeline: TimelineEntry[] = [
  {
    title: "Suixploit",
    description: "found multiple bugs in large defi protocols",
    date: "04/2026",
    detail: {
      text: "Built a multi-agent pipeline for autonomous smart contract vulnerability discovery. Spent $1,187.47 on api credits instead of my rent.",
      links: [
        {
          label: "writeup",
          url: "https://x.com/oh1hn/status/2042635956994683199",
        },
        {
          label: "github",
          url: "https://github.com/owenkrause/suixploit",
        },
      ],
    },
  },
  {
    title: "AWS Hackathon",
    description: "ghost track winner",
    date: "03/2026",
    detail: {
      text: "Drove to SF with no plans in mind, ended up winning another hackathon. Also crashed a YC founder night and blew up on reddit.",
      links: [
        {
          label: "hackathon project",
          url: "https://devpost.com/software/dashe",
        },
        {
          label: "reddit clout",
          url: "https://www.reddit.com/r/csMajors/comments/1s3usoh/just_caught_up_with_a_friend_who_got_hired_at/",
        },
        {
          label: "garry tan reposted me",
          url: "https://x.com/garrytan/status/2042667202055442512?s=20",
        },
      ],
    },
  },
  {
    title: "DubHacks 2025",
    description: "first place visa track",
    date: "10/2025",
    detail: {
      text: "24-hour hackathon at UW. Built app to gamify dental hygiene. Vibe coded the entire project and managed to sleep 8+ hours.",
      links: [
        { label: "github", url: "https://github.com/owenkrause/minty" },
        { label: "devpost", url: "https://devpost.com/software/minty-4vcu9m" },
        { label: "deployment", url: "https://minty-prod.vercel.app/" },
      ],
    },
  },
  {
    title: "Navi Labs Intern",
    description: "wrote code for major defi protocol on sui (700m+ tvl)",
    date: "06/2025",
  },
  {
    title: "Sui Overflow 2025",
    description: "student track winner, 3rd place in defi track",
    date: "06/2025",
    detail: {
      text: "Developed a protocol for decentralized market-making vaults on DeepBook, enabling liquidity provision and yieldfarming. Flown out to athens greece to build and pitch my project. Placed in two tracks working solo out of 600+ projects.",
      links: [
        { label: "github", url: "https://github.com/owenkrause/deepbook-amm" },
        {
          label: "writeup",
          url: "https://owenkrause.notion.site/DeepMaker-21004646d07b80f2bf95eb378d618d46",
        },
        {
          label: "demo",
          url: "https://youtu.be/UHpyCFqvOmI?si=mwIjGdrG_1Czv54e",
        },
      ],
    },
  },
  {
    title: "Sui Basecamp 2025",
    description: "flown out to dubai to attend sui's biggest conference",
    date: "05/2025",
  },
  {
    title: "BeaverHacks",
    description:
      "went into debt scaling beaverhacks from 50 to 300 participants",
    date: "04/2024",
    detail: {
      text: "Led the organizing team for Oregon State's hackathon. Handled sponsorships, logistics, and tech infra. 6x growth in one year. paid $2,000 out of pocket (reimbursed months later).",
      links: [{ label: "writeup", url: "#" }],
    },
  },
  {
    title: "Sui Grant",
    description: "awarded a $10,000 grant to build on sui",
    date: "12/2024",
    detail: {
      text: "Awarded a $10,000 grant to build an open-source interface for the DeepBook protocol, a decentralized CLOB, providing a reference for future developers and feedback for the DeepBook SDK.",
      links: [
        { label: "github", url: "https://github.com/cassiusfive/deepbookui" },
        { label: "deployment", url: "https://deepbookui.vercel.app/" },
      ],
    },
  },
  {
    title: "Cal Hacks 11.0",
    description: "1st place sui track",
    date: "10/2024",
    detail: {
      text: "24-hour hackathon at UC Berkeley. Built a decentralized content creation platform with end-to-end encryption to ensure creator privacy and content ownership.",
      links: [
        { label: "github", url: "https://github.com/kevinru2023/notic3" },
        { label: "devpost", url: "https://devpost.com/software/notic3" },
      ],
    },
  },
  {
    title: "BeaverHacks VP",
    description: "joined beaverhacks",
    date: "10/2023",
  },
  {
    title: "Oregon State University",
    description: "started college",
    date: "09/2023",
  },
  {
    title: "Sneaker Reselling",
    description: "$500,000 in revenue in highschool",
    date: "08/2023",
    detail: {
      text: "Arbitraged sneakers through online retailers and marketplaces. Scaled by developing automation software which I sold to over 250 users. Also ran a mentorship group and hit $5k MRR. This is how I got into coding.",
      links: [
        {
          label: "github",
          url: "https://github.com/owenkrause/sneaker-monitors",
        },
      ],
    },
  },
];
