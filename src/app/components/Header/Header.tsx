import { SquareArrowOutUpRightIcon } from "lucide-react";
import Image from "next/image";

import { cn } from "@/app/utils";

export function Header() {
  return (
    <header className={cn("flex items-center justify-between", "mb-12")}>
      <a
        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        href="/"
      >
        <Image
          src="/voidfull.svg"
          alt="voidfull logo"
          width={32}
          height={32}
          priority
        />
        <p className="text-xl font-semibold text-white">Voidfull</p>
      </a>

      <nav>
        <ul>
          <li>
            <a
              href="https://voidfull.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center justify-between",
                "space-x-2 text-white",
                "rounded-lg px-2.5 py-1",
                "hover:bg-white/25 focus:bg-white/25 focus:outline-none",
              )}
            >
              <span className={cn("font-medium text-sm")}>go to homepage</span>
              <SquareArrowOutUpRightIcon
                className={cn("w-4 h-4")}
                aria-hidden={true}
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
