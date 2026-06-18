import { Button } from "@/components/ui/button";
import Social from "./_profile/Social";
import { Download } from "lucide-react";
import Description from "./_profile/Description";
import Photo from "./_profile/Photo";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <Description />

            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 border-[#8B5CF6] text-[#8B5CF6] hover:text-[#001F3F] hover:border-[#001F3F]"
              >
                <span>Download CV</span>
                <Download className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-6 h-6 border border-[#8B5CF6] rounded-full flex justify-center items-center text-[#8B5CF6] text-base hover:bg-[#001F3F] hover:text-white hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-0 mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
