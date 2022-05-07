import React from "react";
import Stories from "./Stories";

function Feed() {
  return (
    <main className="grid grid-cols-1">
      <section>
        <Stories />
        {/* Posts */}
      </section>
      <section>
        {/* Mini Profile */}
        {/* Suggestions */}
      </section>
    </main>
  );
}

export default Feed;
