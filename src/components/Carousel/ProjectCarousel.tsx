import React, { FC } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { projects } from "@/constants/ProfileConstants";

const ProjectCarousel: FC<{
  setApi: (api: CarouselApi | null) => void;
}> = ({ setApi }) => {
  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-70 sm:max-w-[320px] md:max-w-95 lg:max-w-105 mx-auto"
    >
      <CarouselContent>
        {projects.map((p, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="overflow-hidden border border-white/10 bg-linear-to-br from-[#8B5CF6]/10 to-purple-600/20 backdrop-blur-sm">
                <CardContent className="aspect-square flex items-center justify-center p-4 sm:p-6 relative">
                  {p.image ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 420px"
                      />
                    </div>
                  ) : (
                    <span className="text-6xl sm:text-7xl md:text-8xl font-bold text-white/10">
                      {p.num}
                    </span>
                  )}

                  {/* Project Number Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                    {p.num}
                  </div>

                  {/* Title Overlay on Image */}
                  {p.image && (
                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-purple-300 to-transparent p-4">
                      <p className="text-[#001F3F]  text-xs sm:text-sm font-bold truncate">
                        {p.title}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation Buttons - Custom Styled */}
      <CarouselPrevious className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#8B5CF6] border-white/20 hover:border-[#8B5CF6] text-white hover:text-white transition-all duration-300 backdrop-blur-sm w-8 h-8 sm:w-10 sm:h-10" />
      <CarouselNext className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#8B5CF6] border-white/20 hover:border-[#8B5CF6] text-white hover:text-white transition-all duration-300 backdrop-blur-sm w-8 h-8 sm:w-10 sm:h-10" />
    </Carousel>
  );
};

export default ProjectCarousel;
