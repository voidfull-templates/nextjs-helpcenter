import dayjs from "dayjs";
import type { ActiveCategory } from "@voidfull/js-sdk";

import { cn } from "@/utils";

interface Props {
  category: ActiveCategory;
}

export function CategoryItem({ category }: Props) {
  return (
    <a
      className={cn(
        "p-4 rounded-lg border border-gray-300",
        "flex items-center justify-between",
      )}
      href={`/collections/${category.id}-${category.slug}`}
    >
      <div
        className={cn("rounded mr-4", "w-10 h-10", "flex-shrink-0")}
        aria-hidden="true"
      >
        {category.icon ? (
          <img
            src={category.icon}
            alt={category.name}
            loading="lazy"
            decoding="async"
          />
        ) : null}
      </div>

      <div className="w-full">
        <div className={cn("text-lg font-semibold")}>{category.name}</div>

        {category.description ? (
          <p className="mt-2">{category.description}</p>
        ) : null}

        {category.createdAt ? (
          <time className={cn("text-xs text-gray-600", "mt-2")}>
            Created at {dayjs(category.createdAt).format("MMMM DD, YYYY")}
          </time>
        ) : null}
      </div>
    </a>
  );
}
