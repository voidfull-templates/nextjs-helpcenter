import type { GetStaticPropsContext } from "next";
import type { ActiveCategory, Post } from "@voidfull/js-sdk";

import { Client as Voidfull } from "@/lib/Voidfull";
import { cn, hasVoidfullVariables } from "@/utils";

import { PostItem } from "@/components/PostItem";

interface PageProps {
  collection: ActiveCategory;
  articles: Post[];
}

export default function Page({ collection, articles }: PageProps) {
  return (
    <div className="mt-10">
      <main className={cn("mx-auto max-w-screen-lg px-4")}>
        {collection.icon ? (
          <div className={cn("w-10 h-40")} aria-hidden="true">
            <img
              src={collection.icon}
              alt={collection.name}
              loading="lazy"
              decoding="async"
              className={cn("w-10 h-40")}
            />
          </div>
        ) : null}

        <h1 className={cn("text-2xl font-semibold")}>{collection.name}</h1>

        <ul className={cn("mt-6", "divide-y divide-gray-300", "space-y-2")}>
          {articles?.length > 0 ? (
            articles.map((post) => (
              <li key={post.id} className={cn("pt-2")}>
                <PostItem post={post} />
              </li>
            ))
          ) : (
            <p>No posts found.</p>
          )}
        </ul>
      </main>
    </div>
  );
}

export const getStaticProps = async (
  context: GetStaticPropsContext<{
    collection: string;
  }>,
) => {
  const params = context.params;
  if (!params) {
    return {
      props: {},
    };
  }

  const collection = params.collection;
  const collectionArr = collection.split("-");
  const categoryId = collectionArr[0];

  const getByIdResponse = await Voidfull.sites.categories.retrieve({
    categoryId,
  });
  const getPostsResponse = await Voidfull.sites.categories.posts({
    categoryId,
  });

  return {
    props: {
      collection: getByIdResponse.category,
      articles: getPostsResponse.posts,
    },
  };
};

export const getStaticPaths = async () => {
  if (!hasVoidfullVariables())
    return {
      paths: [],
      fallback: false,
    };

  try {
    const response = await Voidfull.sites.categories.list();

    return {
      paths: response.categories.map((category) => {
        return {
          params: {
            collection: `${category.id}-${category.slug}`,
          },
        };
      }),
      fallback: false,
    };
  } catch (_) {
    return {
      paths: [],
      fallback: false,
    };
  }
};
// satisfies GetStaticPaths;
