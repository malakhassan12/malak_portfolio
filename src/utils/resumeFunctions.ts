import { About, SkillsSection, TimelineSection } from "@/types/ProfileTypes";

const isTimelineSection = (
  info: TimelineSection | SkillsSection | About,
): info is TimelineSection =>
  "details" in info &&
  info.details.length > 0 &&
  "from" in info.details[0] &&
  "to" in info.details[0];

const isSkillsSection = (
  info: TimelineSection | SkillsSection | About,
): info is SkillsSection =>
  "details" in info && info.details.length > 0 && "icon" in info.details[0];

export { isSkillsSection, isTimelineSection };
