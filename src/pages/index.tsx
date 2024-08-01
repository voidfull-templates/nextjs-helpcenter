import type { ListCategoryResponse } from "@voidfull/js-sdk";

import { cn, hasVoidfullVariables } from "@/utils";
import { Client as Voidfull } from "@/lib/Voidfull";

import { Root as VoidfullWelcome } from "@/components/Voidfull/Root";
import { CategoryItem } from "@/components/Category/Item";

interface PageProps {
  data: ListCategoryResponse["categories"];
}

export default function Home({ data }: PageProps) {
  return (
    <main className="mx-auto max-w-screen-lg px-4">
      <section className={cn("my-10")}>
        <VoidfullWelcome />
      </section>

      {data?.length > 0 ? (
        data?.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))
      ) : (
        <p className={cn("text-sm text-center")}>No categories</p>
      )}
    </main>
  );
}

export const getStaticProps = async () => {
  if (!hasVoidfullVariables())
    return {
      props: {
        data: [],
      },
    };

  try {
    const response = await Voidfull.sites.categories.list({
      status: ["active"],
    });

    return {
      props: {
        data: response.categories,
      },
    };
  } catch (_) {
    return {
      props: {
        data: [],
      },
    };
  }
};
// satisfies GetStaticProps<PageProps>
