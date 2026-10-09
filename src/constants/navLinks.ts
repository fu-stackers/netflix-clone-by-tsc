export interface NavLinkItem {
  label: string;
  to: string;
}
export const NAV_LINKS: NavLinkItem[] = [
  { label: "Home", to: "/" },
  { label: "Tv Shows", to: "/tv" },
  { label: "Movies", to: "/movies" },
  { label: "New & Popular", to: "/new" },
  { label: "My List", to: "/my-list" },
];
