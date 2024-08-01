import { Client as Voidfull } from "@/lib/Voidfull";
import { cn } from "@/app/utils";
import { BookOpenIcon } from "lucide-react";
import dayjs from "dayjs";
import { Interweave } from "interweave";
import { polyfill } from "interweave-ssr";

async function ArticleById(id: string) {
  const getArticleResponse = await Voidfull.sites.posts.retrieve({
    postId: id,
  });

  return {
    articleInfo: getArticleResponse.post,
  };
}

interface PageProps {
  params: {
    article: string;
  };
}

export default async function Page(options: PageProps) {
  polyfill();

  const { article: articleSlug } = options.params;

  const articleArr = articleSlug.split("-");
  const articleId = articleArr[0];
  const { articleInfo } = await ArticleById(articleId);

  return (
    <div className="mt-10">
      <main className={cn("mx-auto max-w-screen-md px-4")}>
        <div>
          {/* Breadcrumbs */}

          <div>
            <h1 className={cn("text-2xl font-semibold")}>
              {articleInfo.title}
            </h1>

            <div
              className={cn("mt-3 text-gray-500", "flex items-center text-sm")}
            >
              <p className="sr-only">Publish on </p>
              <time dateTime={articleInfo.publishedAt.toString()}>
                {dayjs(articleInfo.publishedAt).format("MMMM DD, YYYY")}
              </time>
              <span className="mx-2">·</span>
              <div className={cn("flex items-center", "space-x-1.5")}>
                <BookOpenIcon aria-hidden={true} className={cn("w-4 h-4")} />
                <span>{articleInfo.timeToRead} min read</span>
              </div>
            </div>
          </div>

          {articleInfo.content ? (
            <article className={cn("mt-10")}>
              <Interweave content={articleInfo.content} className="prose" />
            </article>
          ) : null}
        </div>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const response = await Voidfull.sites.posts.list();

  return response.posts.map((post) => ({
    article: `${post.id}-${post.slug}`,
  }));
}
