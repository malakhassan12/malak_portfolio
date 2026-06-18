import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { socials } from "@/constants/ProfileConstants";
import Link from "next/link";
import { FC } from "react";

type Props = {
  containerStyles?: string;
  iconStyles?: string;
};

const Social: FC<Props> = ({ containerStyles = "", iconStyles = "" }) => {
  return (
    <TooltipProvider>
      <div className={containerStyles}>
        {socials.map((item, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Link 
                href={item.path} 
                className={iconStyles}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.desc}
              >
                <item.icon />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{item.desc}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default Social;