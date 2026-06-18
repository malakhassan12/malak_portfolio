type PROJECT = {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: { name: string }[];
  image: string;
  live: string;
  github: string;
};
type SERVICE = {
  num: string;
  title: string;
  description: string;
  href: string;
};

export type { PROJECT, SERVICE };
