import { inter } from "@/config/fonts/GoogleFonts";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/config/styles/index.scss";

export const metadata = {
  title: "MantleWorks",
  description: `MantleWorks leverages web3 infrastructure to build industry-specific, proprietary "containers" that power enterprise assetization solutions across multiple verticals.`,
  icons: {
    icon: "/favicon.ico", // Standard favicon for most browsers
    shortcut: "/favicon-32x32.png", // PNG for Safari and modern browsers
    apple: "/apple-touch-icon.png", // Icon for iOS devices
  },
};

export default function RootLayout({ children }) {
  const schemaSAc = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AssetMantle",
    url: "https://assetmantle.one",
    logo: "https://assetmantle.one/logo.png",
    sameAs: [
      "https://twitter.com/assetmantle",
      "https://github.com/AssetMantle",
    ],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://assetmantle.one/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const prodList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "WebSite",
          url: "https://assetmantle.one/",
          name: "AssetMantle Website",
          description:
            "AssetMantle is the Assetization Infrastructure Layer, providing the proprietary infra and frameworks to tokenize real-world assets (RWAs) and enable seamless Web3 assetization solutions.",
          publisher: {
            "@type": "Organization",
            name: "Assetmantle",
            sameAs: "https://assetmantle.one",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "WebSite",
          url: "https://github.com/AssetMantle",
          name: "GITHUB",
          description: "Builder | Machine Readable code",
          publisher: {
            "@type": "Organization",
            name: "Assetmantle",
            sameAs: "https://assetmantle.one",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "WebSite",
          url: "https://docs.assetmantle.one/",
          name: "DOCUMENTATION",
          description: "Builder | Human Readable Code",
          publisher: {
            "@type": "Organization",
            name: "Assetmantle",
            sameAs: "https://assetmantle.one",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "WebSite",
          url: "https://explorer.assetmantle.one/",
          name: "EXPLORER",
          description: "Builder | Track & Verify Metrics",
          publisher: {
            "@type": "Organization",
            name: "Assetmantle",
            sameAs: "https://assetmantle.one",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "WebSite",
          url: "https://wallet.assetmantle.one/",
          name: "MANTLEWALLET",
          description: "User | Transact, Stake, Farm, Bridge, and more",
          publisher: {
            "@type": "Organization",
            name: "Assetmantle",
            sameAs: "https://assetmantle.one",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 6,
        item: {
          "@type": "WebSite",
          url: "https://marketplace.assetmantle.one/",
          name: "MANTLEPLACE",
          description:
            "Low gas fees, cross-chain compatibility, decentralized identities, and more",
          publisher: {
            "@type": "Organization",
            name: "Assetmantle",
            sameAs: "https://assetmantle.one",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 7,
        item: {
          "@type": "WebSite",
          url: "https://ami-na.me/",
          name: "AMINAME",
          description:
            "Your Exclusive Gateway to Simplified Asset Control, Protecting Your Privacy",
          publisher: {
            "@type": "Organization",
            name: "Assetmantle",
            sameAs: "https://assetmantle.one",
          },
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ffffff" />
        {/* open graphs start */}
        <meta property="og:site_name" content="MantleWorks" />
        <meta property="og:url" content="https://mantleworks.one" />
        <meta property="al:web:url" content="https://mantleworks.one" />
        <meta property="og:image" content="/og.png" />
        <meta property="og:title" content="MantleWorks" />
        <meta
          property="og:description"
          content={`MantleWorks leverages web3 infrastructure to build industry-specific, proprietary "containers" that power enterprise assetization solutions across multiple verticals.`}
        />
        <meta property="og:type" content="website" />

        {/* twitter starts */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AssetMantle" />
        <meta
          name="twitter:description"
          content={`MantleWorks leverages web3 infrastructure to build industry-specific, proprietary "containers" that power enterprise assetization solutions across multiple verticals.`}
        />
        <meta name="twitter:image" content="/og.png" />
        {/* twitter ends */}

        <meta name="robots" content="index, follow" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(prodList) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaSAc) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
