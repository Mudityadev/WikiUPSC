export type MainsSection = {
  label: "Introduction" | "Significance (Context)" | "Data" | "Features" | "Challenges" | "Way Forward" | "Conclusion";
  points: string[];
};

export type MainsNote = {
  slug: string;
  title: string;
  paper: string;
  photo: {
    src: string;
    alt: string;
    credit: string;
  };
  sections: MainsSection[];
};

export const mainsNotes: MainsNote[] = [
  {
    slug: "india-us-strategic-relations",
    title: "India-US Strategic Relations in a Multipolar Order",
    paper: "GS-2 (IR) + PSIR Paper II",
    photo: {
      src: "https://images.unsplash.com/photo-1614607242094-b1b2cf769ff3?auto=format&fit=crop&w=1200&q=80",
      alt: "Flags of India and the United States",
      credit: "Unsplash"
    },
    sections: [
      {
        label: "Introduction",
        points: [
          "India-US ties have moved from estrangement during the Cold War to strategic convergence in the Indo-Pacific.",
          "For Mains and PSIR, this topic tests realism-liberalism debates, national interest, and issue-based alignment."
        ]
      },
      {
        label: "Significance (Context)",
        points: [
          "China's rise, supply-chain vulnerabilities, and maritime security make India central to US Asia strategy.",
          "India benefits from technology access, defence interoperability, and diplomatic leverage in global institutions."
        ]
      },
      {
        label: "Data",
        points: [
          "Bilateral goods and services trade has crossed USD 190+ billion in recent years.",
          "Major defence deals include P-8I, Apache, Chinook, and M777 platforms with growing co-production push."
        ]
      },
      {
        label: "Features",
        points: [
          "Institutional dialogues: 2+2 Ministerial, Commercial Dialogue, Initiative on Critical and Emerging Technology (iCET).",
          "Convergence platforms: QUAD, Indo-Pacific maritime domain awareness, critical minerals and semiconductors cooperation."
        ]
      },
      {
        label: "Challenges",
        points: [
          "Legacy friction over trade barriers, visa regimes, and digital policy standards.",
          "India's strategic autonomy and Russia linkages can create tactical divergences with Washington."
        ]
      },
      {
        label: "Way Forward",
        points: [
          "Shift from buyer-seller defence relation to joint R&D and trusted manufacturing ecosystems.",
          "Create issue-specific mini-lateral coalitions on AI governance, cyber security, and resilient supply chains."
        ]
      },
      {
        label: "Conclusion",
        points: [
          "India-US partnership is best understood as a pragmatic, interest-driven strategic alignment rather than a formal alliance.",
          "A stable partnership requires balancing values rhetoric with mutually beneficial deliverables."
        ]
      }
    ]
  },
  {
    slug: "parliamentary-accountability",
    title: "Parliamentary Accountability and Quality of Deliberation",
    paper: "GS-2 (Polity) + PSIR Paper I",
    photo: {
      src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
      alt: "Legislative discussion table with documents",
      credit: "Unsplash"
    },
    sections: [
      {
        label: "Introduction",
        points: [
          "Parliament is the core institution for representation, law-making, and executive accountability in a constitutional democracy.",
          "In Mains answers, link this with deliberative democracy and constitutional morality."
        ]
      },
      {
        label: "Significance (Context)",
        points: [
          "Rising policy complexity demands better scrutiny of bills, delegated legislation, and fiscal decisions.",
          "Healthy debate in Parliament builds legitimacy and reduces democratic alienation."
        ]
      },
      {
        label: "Data",
        points: [
          "Sitting days have shown a long-term decline compared with early decades after independence.",
          "A growing share of bills has been passed with limited debate and lower committee referral in several sessions."
        ]
      },
      {
        label: "Features",
        points: [
          "Question Hour, Zero Hour, Calling Attention, and no-confidence motions remain key oversight tools.",
          "Department-related standing committees provide technical scrutiny and bipartisan consultation space."
        ]
      },
      {
        label: "Challenges",
        points: [
          "Frequent disruptions shrink productive time and weaken substantive discussion.",
          "Anti-defection dynamics and party centralisation can reduce independent legislative reasoning."
        ]
      },
      {
        label: "Way Forward",
        points: [
          "Adopt a minimum annual sitting calendar and mandatory pre-legislative consultation windows.",
          "Strengthen committee research support, domain experts, and post-legislative impact assessment."
        ]
      },
      {
        label: "Conclusion",
        points: [
          "Parliamentary reform is not procedural housekeeping; it is foundational to constitutional governance quality.",
          "Better debate, better scrutiny, and better accountability are central to India's democratic deepening."
        ]
      }
    ]
  },
  {
    slug: "india-federalism-welfare",
    title: "Cooperative Federalism in Welfare Delivery",
    paper: "GS-2 (Governance) + PSIR Paper I",
    photo: {
      src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
      alt: "People collaborating around a table",
      credit: "Unsplash"
    },
    sections: [
      {
        label: "Introduction",
        points: [
          "Welfare outcomes in India depend on shared responsibilities across Union, states, and local bodies.",
          "Federalism in PSIR is not only constitutional design but also administrative coordination."
        ]
      },
      {
        label: "Significance (Context)",
        points: [
          "Schemes in health, nutrition, education, and livelihoods require vertical and horizontal policy coherence.",
          "Regional diversity demands state-level innovation within a common national rights-based framework."
        ]
      },
      {
        label: "Data",
        points: [
          "Large-scale DBT and digital public infrastructure have expanded inclusion while reducing leakages in many programs.",
          "Inter-state social indicators still vary significantly, indicating uneven state capacity."
        ]
      },
      {
        label: "Features",
        points: [
          "Institutions: Finance Commission transfers, GST Council, NITI Aayog forums, and centrally sponsored scheme compacts.",
          "Operational tools: digital beneficiary databases, portability systems, and social audits."
        ]
      },
      {
        label: "Challenges",
        points: [
          "Tied funding and delayed releases may constrain state flexibility in context-specific implementation.",
          "Local government capacity gaps limit last-mile delivery, grievance redressal, and monitoring quality."
        ]
      },
      {
        label: "Way Forward",
        points: [
          "Move toward outcome-linked but flexible financing models with transparent state-level performance dashboards.",
          "Build district and panchayat-level administrative capacity through continuous cadre training and data systems."
        ]
      },
      {
        label: "Conclusion",
        points: [
          "Cooperative federalism succeeds when finance, function, and functionaries are aligned across all tiers.",
          "India's welfare state can be both efficient and equitable only through empowered states and local institutions."
        ]
      }
    ]
  }
];
