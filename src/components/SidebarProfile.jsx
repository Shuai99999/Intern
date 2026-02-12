// components/SidebarProfile.jsx
import React from "react";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import SkillList from "./SkillList";

export default function SidebarProfile() {
  return (
    <div className="rounded-xl overflow-hidden border border-sky-200 bg-white shadow-xl">
      <img
        src={`${import.meta.env.BASE_URL}portrait.jpg`}
        alt="Shuai Gao portrait"
        className="w-full h-full object-cover aspect-video"
      />
      <div className="p-4 text-sm text-center">
        <h3 className="text-lg font-semibold text-sky-700 mb-2 text-center">
          Shuai Gao
        </h3>
        <p className="sidebar-intro text-sky-700">
          Since moving to Canada as an international student, I have been
          focused on continuously growing both personally and professionally. I
          truly enjoy living in Alberta — the forests, snow, wildlife, and
          peaceful environment make life feel simple and balanced. I enjoy
          learning new technologies, building practical tools, and turning ideas
          into real-world solutions. Recently, I have been preparing to develop
          a C# project called “AI for Small Business,” aiming to create simple
          and useful AI-powered tools that can support small business owners in
          their daily operations. I am motivated by curiosity, problem-solving,
          and the desire to build things that make a meaningful impact.
        </p>
      </div>
      <div className="p-4 border-t border-sky-100">
        <h3 className="text-lg font-semibold text-sky-700 mb-2 flex items-center justify-center gap-2">
          <Sparkles size={20} aria-hidden />
          My Core Skills
        </h3>
        <SkillList />
      </div>
    </div>
  );
}
