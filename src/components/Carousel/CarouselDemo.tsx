"use client";
import { projects } from "@/constants/ProfileConstants";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import Project from "@/app/work/_components/Project";
import ProjectCarousel from "./ProjectCarousel";
import ProjectsStats from "./ProjectsStats";

export function CarouselDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const project = projects[currentIndex];

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-8 sm:py-12 xl:py-16 px-4 sm:px-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-12.5 2xl:gap-17.5">
          {/* LEFT - Content */}
          <div className="w-full xl:w-[50%] order-2 xl:order-1 mt-8 xl:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full"
              >
                <Project project={project} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT - Carousel */}
          <div className="w-full xl:w-[50%] order-1 xl:order-2">
            <div className="relative">
              <ProjectCarousel setApi={setApi} />

              <ProjectsStats
                currentIndex={currentIndex}
                onclick={(index: number) => {
                  if (api) {
                    api.scrollTo(index);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
