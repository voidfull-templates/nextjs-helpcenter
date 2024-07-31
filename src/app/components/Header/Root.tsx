import { cn } from "../../utils";

import { Header } from "./Header";

export function Root() {
  return (
    <div className={cn("w-full bg-indigo-500")}>
      <div className={cn("mx-auto max-w-screen-lg px-4", "pt-8 pb-12")}>
        <Header />

        <h1 className={cn("text-center text-3xl text-white font-semibold")}>
          Voidfull Next.js Help center
        </h1>
      </div>
    </div>
  );
}
