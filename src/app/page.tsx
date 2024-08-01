import { Client as Voidfull } from "@/lib/Voidfull";
import { cn } from "@/app/utils";

import { ReferenceLinks } from "@/app/components/ReferenceLinks";
import { CategoryItem } from "@/app/components/Category/Item";

async function getCategories() {
  const response = await Voidfull.sites.categories.list({
    status: ["active"],
  });
  return response.categories;
}

export default async function Home() {
  const data = await getCategories();

  return (
    <main className="mx-auto max-w-screen-lg px-4">
      <section className={cn("my-10")}>
        <ReferenceLinks />
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
