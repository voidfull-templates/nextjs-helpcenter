import { Client as Voidfull } from "@/lib/Voidfull";
import { cn } from "@/app/utils";

import { PostItem } from "@/app/collections/[collection]/components/PostItem";

async function CategoryById(id: string) {
  const getByIdResponse = await Voidfull.sites.categories.retrieve({
    categoryId: id,
  });
  const getPostsResponse = await Voidfull.sites.categories.posts({
    categoryId: id,
  });

  return {
    category: getByIdResponse.category,
    posts: getPostsResponse.posts,
  };
}

interface PageProps {
  params: {
    collection: string;
  };
}

export default async function Page(options: PageProps) {
  const { collection } = options.params;

  const collectionArr = collection.split("-");
  const collectionId = collectionArr[0];
  const { category: collectionInfo, posts } = await CategoryById(collectionId);

  return (
    <div className="mt-10">
      <main className={cn("mx-auto max-w-screen-lg px-4")}>
        {collectionInfo.icon ? (
          <div className={cn("w-10 h-40")} aria-hidden="true">
            <img
              src={collectionInfo.icon}
              alt={collectionInfo.name}
              loading="lazy"
              decoding="async"
              className={cn("w-10 h-40")}
            />
          </div>
        ) : null}

        <h1 className={cn("text-2xl font-semibold")}>{collectionInfo.name}</h1>

        <ul className={cn("mt-6", "divide-y divide-gray-300", "space-y-2")}>
          {posts?.length > 0 ? (
            posts.map((post) => (
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

export async function generateStaticParams() {
  const response = await Voidfull.sites.categories.list();

  return response.categories.map((category) => ({
    category: `${category.id}-${category.slug}`,
  }));
}
