import SearchHeader from "@/components/SearchHeader";

export const metadata = {
  title: "image search ",
  description: "Built by sharjeel",
  icons: {
    icon: "/app/favicon.ico",
  },
};

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
