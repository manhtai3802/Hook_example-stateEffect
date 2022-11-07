import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];

function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [goToTop, setGoToTop] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      setGoToTop(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={type === tab ? { color: "#fff", background: "#333" } : {}}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((value) => (
          <li key={value.id}>{value.title || value.name}</li>
        ))}
        {goToTop && (
          <button style={{ position: "fixed", right: 20, bottom: 20 }}>
            go to top
          </button>
        )}
      </ul>
    </div>
  );
}

export default Content;
