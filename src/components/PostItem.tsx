import { ChevronRightIcon } from "lucide-react";
import type { Post } from "@voidfull/js-sdk";

import { cn } from "@/utils";

interface Props {
  post: Post;
}

export function PostItem({ post }: Props) {
  return (
    <a
      className={cn(
        "rounded-xl px-6 py-4",
        "flex items-center justify-between w-full",
        "hover:bg-indigo-50/40 hover:text-indigo-500",
      )}
      href={`/articles/${post.id}-${post.slug}`}
    >
      <p>{post.title}</p>

      <ChevronRightIcon
        aria-hidden={true}
        className={cn("stroke-indigo-500")}
      />
    </a>
  );
}
