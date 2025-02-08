import CodeCard from "../components/CodeCard";
import Sidebar from "../components/Sidebar";
import Layout from "../layouts/Layout";
import { grid } from "../../styled-system/patterns";
import snippetsJson from "../content/snippets/snippets.json";
import { Snippet } from "../types/Snippet";
import { Toaster } from "sonner";
import { Fragment } from "react/jsx-runtime";
import { css } from "../../styled-system/css";
import { useCallback, useState } from "react";
import { Tag } from "@/types/Tag";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTags, setFilteredTags] = useState<Tag[]>([]);

  const snippets = snippetsJson as Snippet[];
  const tags = snippets.flatMap((snippet) => snippet.tags);

  const filteredSnippets = snippets.filter((snippet) => {
    const matchesSearchQuery =
      snippet.title.toLowerCase().includes(searchQuery) ||
      snippet.tags.some((tag) =>
        tag.libelle.toLowerCase().includes(searchQuery)
      );

    const matchesTags =
      filteredTags.length === 0 ||
      snippet.tags.some((tag) =>
        filteredTags.some((filteredTag) => filteredTag.libelle === tag.libelle)
      );

    return matchesSearchQuery && matchesTags;
  });

  const handleSetSearchQuery = useCallback((searchQuery: string) => {
    setSearchQuery(searchQuery);
  }, []);

  const handleSetFilteredTags = useCallback((tags: Tag[]) => {
    setFilteredTags(tags);
  }, []);

  return (
    <Fragment>
      <Toaster
        position="bottom-center"
        expand={true}
        toastOptions={{
          className: css({
            width: "full",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }),
        }}
      />
      <Layout>
        <Sidebar
          tags={tags}
          setSearchQuery={handleSetSearchQuery}
          handleSetFilteredTags={handleSetFilteredTags}
          filteredTags={filteredTags}
        />
        {filteredSnippets.length === 0 ? (
          <div
            className={css({
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              h: "full",
              w: "full",
            })}
          >
            <span
              className={css({
                color: "neutral.500",
                fontSize: "lg",
              })}
            >
              No results
            </span>
          </div>
        ) : (
          <div
            className={grid({
              columns: { md: 2, lg: 3 },
              h: "fit",
              gap: "4",
              w: "full",
            })}
          >
            {filteredSnippets.map((snippet) => (
              <div key={snippet.id}>
                <CodeCard snippet={snippet} />
              </div>
            ))}
          </div>
        )}
      </Layout>
    </Fragment>
  );
}

export default App;
