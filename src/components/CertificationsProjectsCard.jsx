// components/CertificationsProjectsCard.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Award, Code2, Cloud, Building2, Database } from "lucide-react";

const certifications = [
  "RHCE (Red Hat Certified Engineer), 2010",
  "OCM (Oracle Certified Master), 2014",
  "AZ-900 (Microsoft Azure Fundamentals), 2025",
];

const technicalSections = [
  {
    title: "Full Stack Development",
    icon: Code2,
    items: [
      "ASP.NET Core (C#) & Entity Framework Core",
      "MERN Stack (MongoDB, Express, React, Node.js)",
      "RESTful API design & implementation",
      "Authentication (JWT-based security)",
      "MVC architecture",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: [
      "Microsoft Azure (foundational services & deployment concepts)",
      "Docker & Kubernetes (containerization fundamentals)",
      "Jenkins & CI/CD pipeline fundamentals",
      "Infrastructure automation (Ansible basics)",
      "Git & version control best practices",
    ],
  },
  {
    title: "Cloud Infrastructure & Operations",
    icon: Building2,
    items: [
      "Data center design, build, and migration",
      "IT asset management, capacity planning & cost estimation",
      "ITIL-based incident & change management",
      "Security & compliance operations",
      "Production environment reliability & monitoring",
    ],
  },
  {
    title: "Database & Data Architecture",
    icon: Database,
    items: [
      "Oracle, MySQL, Microsoft SQL Server deployment & optimization",
      "Oracle MAA (Primary/Standby architecture & switchovers)",
      "SQL Server Always On & Failover Clustering",
      "Enterprise-level data migration strategies",
      "ETL processing & advanced SQL development",
      "High-availability architecture & disaster recovery planning",
    ],
  },
];

export default function CertificationsProjectsCard() {
  return (
    <Card className="bg-white border border-cyan-200 shadow-xl card-hover">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold text-cyan-700 mb-4 flex items-center gap-2">
          <Wrench size={22} aria-hidden />
          Certifications & Technical Expertise
        </h2>

        <div className="space-y-6">
          {/* Certifications as compact badges */}
          <div>
            <h3 className="text-base font-semibold text-cyan-600 mb-3 flex items-center gap-2">
              <Award size={18} aria-hidden />
              Certifications
            </h3>
            <div className="flex flex-wrap gap-2">
              {certifications.map((item) => {
                const match = item.match(/^(.+),\s*(\d{4})$/);
                const label = match ? match[1] : item;
                const year = match ? match[2] : null;
                return (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50/60 px-3 py-1.5 text-sm text-gray-700"
                  >
                    <span>{label}</span>
                    {year && (
                      <span className="shrink-0 rounded bg-cyan-100 px-1.5 py-0.5 text-xs font-medium text-cyan-700">
                        {year}
                      </span>
                    )}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Technical Expertise: single column for even flow */}
          <div>
            <h3 className="text-base font-semibold text-cyan-600 mb-3 flex items-center gap-2">
              Technical Expertise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {technicalSections.map((section) => {
                const Icon = section.icon;
                return (
                  <div key={section.title} className="space-y-2">
                    <h3 className="text-base font-semibold text-cyan-600 border-b border-cyan-100 pb-1 flex items-center gap-2">
                      <Icon size={18} aria-hidden className="shrink-0" />
                      {section.title}
                    </h3>
                    <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                      {section.items.map((item) => (
                        <li key={item} className="leading-snug">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
