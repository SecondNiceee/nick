import scrollTo from "@/shared/utils/scrollTo";
type TypeLink = {
  value: string;
  func : () => void
};

export const headerNavs: TypeLink[] = [
  {
    value: "Home",
    func : () => scrollTo("home"),
  },
  {
    value: "Projects",
    func : () => scrollTo("projects")
  },
  {
    value: "Technologys",
    func: () => scrollTo("technologys")
  },
  {
    value: "Contacts",
    func : () => scrollTo("contacts")
  },
];
