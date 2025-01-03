import React from "react";
import ImageCollage from "../../components/ImageCollage";
import NavLinkButton from "../../components/NavLinkButton";

const Home = () => {
  return (
    <>
      <div className="bg-gray-200 dark:bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Get to Know Jay
            </h2>
            <NavLinkButton route={"/resume"}>Resume</NavLinkButton>
          </div>
          <div className="relative text-gray-800 dark:text-gray-200">
            <p className="mb-2">
              Welcome! You’re probably here to see if I can code, right? I get
              it—I do the same when I’m hiring developers. If that’s your only
              goal, feel free to dive into the
              <a
                href="https://github.com/santiagazo/devjay"
                className="text-sky-600 hover:text-sky-900 dark:text-sky-400 hover:dark:text-sky-600"
              >
                {" "}
                public repo
              </a>
              . This site? It’s just a simple React project for now.
            </p>
            <p className="mb-2">
              But if you want to know me, it’s about more than just code. Sure,
              writing clean, functional, and effective code is something I
              love—and with over a decade of experience, I’ve had plenty of
              practice. But my real passion lies in the design of code. It’s not
              just about writing it; it’s about crafting it.
            </p>
            <p className="mb-2">
              There’s something invigorating about building architecture that
              stands the test of time. After years of cleaning up messy
              codebases, rewriting systems, taking companies from start-up to
              profitable, building out cloud archtiecture, integrating data
              pipelines, and more, I've been humbled & educated by what works
              and what fails. For me, great code isn’t just functional—it’s
              calming. It’s the quiet precision that transforms chaos into
              meaningful applications, solving real problems and creating
              win-win outcomes for everyone involved.
            </p>
            <p className="mb-2">
              ...And when I'm not doing all that, I'm doing this{" "}
              <span className="inline-block dark:hidden">👇🏽</span>
              <span className="hidden dark:inline-block">👇🏻</span>—with the
              people who matter the most to me.
            </p>
          </div>
        </div>
      </div>
      <ImageCollage />
    </>
  );
};

export default Home;
