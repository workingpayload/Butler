"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const contact = [
  {
    name: "Github",
    icon : Github,
    href : "https://www.github.com/workingpayload",
    description : "See my work on Github"
  },
  {
    name: "Linkedin",
    icon : Linkedin,
    href : "https://www.linkedin.com/in/workingpayload",
    description : "Reach out to me on Linkedin"
  },
  {
    name: "Email",
    icon : Mail,
    href : "mailto:rs91963@gmail.com",
    description : "Reach out to me through Email"
  }
];

export const LandingContent = () => {
  return (
    <>
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Contact Me</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {contact.map((item) => (
          <Card key={item.name} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-3 px-0">
                <Link href={item.href}>
                <item.icon/></Link>
                <div className="flex items-center mt-2">
                    {item.description}
                </div>
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
    <footer className="flex items-center justify-center w-full h-24 text-white">
            Butler © 2023 Created by WorkingPayload
    </footer>
    </>
  )
}