import CodeCard from "../components/CodeCard";
import Sidebar from "../components/Sidebar";
import Layout from "../layouts/Layout";
import { grid } from "../../styled-system/patterns";
import snippetsJson from "../content/snippets/snippets.json";
import { Snippet } from "../types/Snippet";
import { Toaster } from "sonner";
import { Fragment } from "react/jsx-runtime";
import { css } from "../../styled-system/css";

const snippets = snippetsJson as Snippet[];
const tags = snippets.flatMap((snippet) => snippet.tags);

function App() {
  // const snippets = snippetsData.filter(
  //   (snippet) =>
  //     snippet.title.toLowerCase().includes(searchQuery) ||
  //     snippet.tags.some((tag) => tag.libelle.toLowerCase().includes(searchQuery))
  // );

  //   {
  /* <script>
  const handleCopy = async (
    block: HTMLPreElement,
    snackbar: Element | null
  ) => {
    await navigator.clipboard.writeText(block.innerText);
    snackbar?.classList.add("show");
    snackbar?.classList.remove("hide");

    setTimeout(() => {
      snackbar?.classList.remove("show");
      snackbar?.classList.add("hide");
    }, 3000);
  };

  // Snackbar
  const cards = document.querySelectorAll("[data-copy]");
  const snackbar = document.querySelector("[data-snackbar]");

  cards.forEach((card) => {
    const blocks = card.querySelectorAll("pre");
    blocks.forEach((block) => {
      card.addEventListener("click", () => handleCopy(block, snackbar));
    });
  });

  // Search
  const searchbar = document.getElementById("search");
  window.addEventListener("keydown", (e) => {
    if (e.key === "/") {
      e.preventDefault();
      searchbar?.focus();
    }
  });
</script> */
  //   }

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
        <Sidebar tags={tags} />
        <div
          className={grid({
            columns: { md: 2, lg: 3 },
            gap: "4",
            w: "full",
            overflowY: "auto",
          })}
        >
          {snippets.map((snippet) => (
            <div key={snippet.id}>
              <CodeCard snippet={snippet} />
            </div>
          ))}
        </div>
      </Layout>
    </Fragment>
  );
}

export default App;
