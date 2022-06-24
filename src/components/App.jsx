import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

//properties are fed by the function app emojipedia.map

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(function createEntry(emojiTerm) {
          return (
            <Entry
              key={emojiTerm.id}
              emoji={emojiTerm.emoji}
              name={emojiTerm.name}
              description={emojiTerm.meaning}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
