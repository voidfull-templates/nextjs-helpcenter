import type { GetStaticPropsContext } from "next";
import { BookOpenIcon } from "lucide-react";
import dayjs from "dayjs";
import { Interweave } from "interweave";
import { polyfill } from "interweave-ssr";
import type { Post } from "@voidfull/js-sdk";

import { Client as Voidfull } from "@/lib/Voidfull";
import { cn, hasVoidfullVariables } from "@/utils";

interface PageProps {
  article: Post;
}

export default function Page({ article }: PageProps) {
  return (
    <div className="mt-10">
      <main className={cn("mx-auto max-w-screen-md px-4")}>
        <div>
          {/* Breadcrumbs */}

          <div>
            <h1 className={cn("text-2xl font-semibold")}>{article.title}</h1>

            <div
              className={cn("mt-3 text-gray-500", "flex items-center text-sm")}
            >
              {article.publishedAt ? (
                <>
                  <p className="sr-only">Publish on </p>
                  <time dateTime={article.publishedAt.toString()}>
                    {dayjs(article.publishedAt).format("MMMM DD, YYYY")}
                  </time>
                </>
              ) : null}
              <span className="mx-2">·</span>
              <div className={cn("flex items-center", "space-x-1.5")}>
                <BookOpenIcon aria-hidden={true} className={cn("w-4 h-4")} />
                <span>{article.timeToRead} min read</span>
              </div>
            </div>
          </div>

          {article.content ? (
            <article className={cn("mt-10")}>
              <Interweave content={article.content} className="prose" />
            </article>
          ) : null}
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async (
  context: GetStaticPropsContext<{
    article: string;
  }>,
) => {
  polyfill();

  const params = context.params;
  if (!params) {
    return {
      props: {},
    };
  }

  const articleSlug = params.article;
  const articleArr = articleSlug.split("-");
  const postId = articleArr[0];

  const getArticleResponse = await Voidfull.sites.posts.retrieve({
    postId,
  });

  return {
    props: {
      article: getArticleResponse.post,
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
    const response = await Voidfull.sites.posts.list();

    return {
      paths: response.posts.map((post) => {
        return {
          params: {
            article: `${post.id}-${post.slug}`,
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
