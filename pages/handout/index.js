import React from "react";

import Hero from "@components/hero";
import Card from "@components/card";
import Ribbon from "@components/ribbon";
import Link from "next/link";
import ToastIcon from "../../public/toast.svg";
import ComponentsIcon from "../../public/web-design.svg";
import BoxIcon from "../../public/package.svg";
import MapIcon from "../../public/map.svg";
import LegoIcon from "../../public/blocks.svg";
import FeedbackIcon from "../../public/chat-box.svg";
import DeploymentIcon from "../../public/deployment.svg";
import TestingIcon from "../../public/testing.svg";

const pathPrefix = "/handout";
const blocks = [
  {
    title: "Making a toast",
    image: ToastIcon,
    slug: "toast",
    roles: ["designer", "developer"],
  },
  {
    title: "UI Inventory",
    image: BoxIcon,
    slug: "./inventory",
    roles: [],
  },
  {
    title: "Setting up the project",
    image: ComponentsIcon,
    slug: "setup",
    roles: ["developer"],
  },
  {
    title: "Coding the library",
    image: DeploymentIcon,
    slug: "coding-library",
    roles: ["developer"],
  },
  {
    title: "Product update",
    image: DeploymentIcon, // TODO: change icon
    slug: "product-update",
    roles: ["developer"],
  },
  {
    title: "Re-design",
    image: DeploymentIcon, // TODO: change icon
    slug: "re-design",
    roles: ["designer"],
  },
  {
    title: "Product release",
    image: DeploymentIcon, // TODO: change icon
    slug: "product-release",
    roles: ["developer"],
  },
  {
    title: "Design changes",
    image: LegoIcon, // TODO: change icon
    slug: "design-chages",
    roles: ["designer", "developer"],
  },
  {
    title: "Visual regression tests",
    image: TestingIcon, // TODO: change icon
    slug: "visual-tests",
    roles: ["developer"],
  },
  {
    title: "Automatic syncronizations",
    image: ComponentsIcon, // TODO: change icon
    slug: "autosync",
    roles: ["developer"],
  },
  {
    title: "Feedback Form",
    image: FeedbackIcon,
    slug: "feedback",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfdIs-UqbZNU5asS3z_YlREEqYmgfYGfL53McjiBAlcB6YfoA/viewform?usp=sf_link",
    roles: [],
  },
];

export default function HandoutPage() {
  return (
    <>
      <Hero>
        <h2 className="text-2xl text-bold">
          Welcome to Hands On with Design Systems workshop!
        </h2>
      </Hero>
      {/* CARDS SECTION */}
      <div className="flex-1 w-full h-full bg-gray-200">
        <div className="container flex flex-wrap max-w-5xl m-8 mx-auto">
          {blocks.map((block) => {
            const link = block.url ? block.url : `${pathPrefix}/${block.slug}`;
            return (
              <Card key={block.slug} className="sm:w-1/2 md:w-1/3 group">
                <div className="w-full h-full px-16 pt-4 pb-8 md:px-8">
                  {<block.image className="w-full h-full p-2" />}
                </div>
                <Link href={link}>
                  <a className="absolute top-0 left-0 w-full h-full cursor-pointer ">
                    <div className="flex items-center justify-center w-full h-full text-lg text-center text-white uppercase transition duration-300 bg-gray-700 opacity-90 group-hover:bg-transparent text-bold group-hover:transform group-hover:-translate-y-1/1 group-hover:text-transparent">
                      <div>{block.title}</div>
                    </div>
                  </a>
                </Link>
                {block.roles.map((r) => (
                  <Ribbon key={r} role={r} />
                ))}
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
