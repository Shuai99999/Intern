import { Card, CardContent } from "@/components/ui/card";
import { Code2 } from "lucide-react";

const codeProjects = [
  {
    title: "The MatchUp Sports App",
    url: "https://github.com/Shuai99999/MatchUpSports",
    demoUrl: "https://www.tiktok.com/@gaoshuai099/video/7614005190823365909",
    siteUrl: "https://matchupsports.ca/",
    description: "A Local Sports Activity & Club Management Platform.",
    appStoreUrl:
      "https://apps.apple.com/ca/app/matchup-sports-play-locally/id6797631476",
    googlePlayUrl:
      "https://play.google.com/store/apps/details?id=com.matchupsports.app&hl=en",
  },
  {
    title: "EverMotion Trading",
    url: "https://github.com/Shuai99999/GlobalBusinessWebWithSupabase",
    siteUrl: "https://evermotion.ca/",
    description:
      "Cross-border e-commerce site built with MongoDB, Express, and React (MERN stack).",
  },
  {
    title: "Denture Flow Platform",
    url: "https://github.com/Shuai99999/HDC-Denture-Flow-Platform",
    demoUrl: "https://www.tiktok.com/@gaoshuai099/video/7614005190823365909",
    description:
      "C# .NET full-stack platform built with Blazor and Bootstrap, featuring AI-assisted voice/text input to structured forms for faster and more accurate order processing.",
  },
];

export default function CodeSection() {
  return (
    <Card className="bg-white border border-cyan-200 shadow-xl card-hover">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold text-cyan-700 mb-4 flex items-center gap-2">
          <Code2 size={22} aria-hidden />
          Code
        </h2>
        <ul className="space-y-6">
          {codeProjects.map(
            ({
              title,
              url,
              demoUrl,
              siteUrl,
              description,
              appStoreUrl,
              googlePlayUrl,
            }) => (
              <li key={url}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-700 font-medium underline hover:text-cyan-800 decoration-cyan-600"
                >
                  {title}
                </a>
                {demoUrl && (
                  <p className="text-gray-600 text-sm mt-0.5">
                    Demo Video:{" "}
                    <a
                      href={demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-700 underline hover:text-cyan-800 decoration-cyan-600"
                    >
                      TikTok
                    </a>
                  </p>
                )}
                {siteUrl && (
                  <p className="text-gray-600 text-sm mt-0.5">
                    Website:{" "}
                    <a
                      href={siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-700 underline hover:text-cyan-800 decoration-cyan-600"
                    >
                      Live Site
                    </a>
                  </p>
                )}
                <p className="text-gray-600 text-sm mt-0.5">{description}</p>
                {(appStoreUrl || googlePlayUrl) && (
                  <div
                    role="group"
                    className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2"
                    aria-label="Download MatchUp Sports"
                  >
                    {appStoreUrl && (
                      <a
                        href={appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Download MatchUp Sports on the App Store"
                        className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2"
                      >
                        <img
                          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                          alt="Download on the App Store"
                          className="h-10 w-auto"
                        />
                      </a>
                    )}
                    {googlePlayUrl && (
                      <a
                        href={googlePlayUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Get MatchUp Sports on Google Play"
                        className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2"
                      >
                        <img
                          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                          alt="Get it on Google Play"
                          className="w-auto"
                          style={{ height: "60px" }}
                        />
                      </a>
                    )}
                  </div>
                )}
              </li>
            ),
          )}
        </ul>
      </CardContent>
    </Card>
  );
}
