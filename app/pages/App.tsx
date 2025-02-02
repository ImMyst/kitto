import CodeCard from "../components/CodeCard";
import Sidebar from "../components/Sidebar";
import Layout from "../layouts/Layout";
import { css } from "../../styled-system/css";
import { grid } from "../../styled-system/patterns";
import snippetsJson from "../content/snippets/snippets.json";

const snippets = snippetsJson;
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
    <Layout>
      <Sidebar tags={tags} />
      <div
        className={grid({
          columns: { md: 2, lg: 3 },
          gap: "4",
          overflowY: "auto",
        })}
      >
        {snippets.map((snippet) => (
          <div data-copy>
            <CodeCard
              title={snippet.title}
              tags={snippet.tags}
              code={snippet.code}
              lang={snippet.lang}
            />
          </div>
        ))}
      </div>
      <span
        data-snackbar
        className={css({
          rounded: "full",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          color: "green.300",
          backgroundColor: "green.950",
          borderColor: "green.800",
          bottom: "0",
          left: 0,
          right: 0,
          borderWidth: 1,
          py: 1.5,
          px: 4,
          width: "fit-content",
          ml: "auto",
          mr: "auto",
          transition: "transform 0.1s ease-in-out",
        })}
      >
        Copié
      </span>
    </Layout>
  );
}

export default App;
