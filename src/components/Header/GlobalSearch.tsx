import { SearchIcon } from "lucide-react";

import { cn } from "@/utils";

export function GlobalSearch() {
  return (
    <div className={cn("relative")}>
      <input
        type="text"
        className={cn("rounded-lg w-full", "pxpy-4")}
        placeholder="Search for articles"
      />

      <div className={cn("pointer-events-auto", "absolute")}>
        <SearchIcon aria-hidden="true" />
      </div>
    </div>
  );
}
