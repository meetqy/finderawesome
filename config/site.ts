export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Finder Awesome",
  description:
    "Finder Awesome is a collection of awesome lists of Github repositories.",
  site: "https://finderawesome.com",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Develop",
      href: "/develop",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Develop",
      href: "/develop",
    },
  ],
  links: {
    github: "https://github.com/meetqy/finderawesome",
    twitter: "https://twitter.com/meetqy",
  },
};
