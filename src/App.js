import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "🙌": "celebration",
  "💆‍♀️": "leave me alone",
  "😯": "hush hush hush!",
  "😤": "triumph",
  "🙇‍♂️": "bowing",
  "😇 ": "Smiling Face with Halo",
  "🤚": "Raised Back of Hand",
  "✋": "Raised Hand",
  "🖖": "Vulcan Salute",
  "👌": "OK Hand",
  "😐 ": "Neutral Face",
  "😑 ": "Expressionless Face",
  "😶 ": "Face Without Mouth",
  "😏 ": "Smirking Face",
  "😒 ": "Unamused Face",
  "🙄 ": "Face with Rolling Eyes",
  "😬 ": "Grimacing Face",
  "🤥": "Lying Face"
};
var emojiWeHave = Object.keys(emojiDictionary);
//console.log(emojiWeKnow);

export default function App() {
  const [inputEmoji, setInputEmoji] = useState("");
  const [outputEmoji, setOutputEmoji] = useState("");

  function inputEmojiHandler(event) {
    var inputEmoji = event.target.value;
    if (inputEmoji in emojiDictionary) {
      setOutputEmoji(emojiDictionary[inputEmoji]);
      setInputEmoji(inputEmoji);
    } else {
      setInputEmoji(
        "oops!! This emoji is not in our database! sorry!! Try Again 🙂"
      );
    }
  }

  function selectEmoji(emoji) {
    console.log(emoji);
    setOutputEmoji(emojiDictionary[emoji]);
    setInputEmoji(emoji);
  }

  return (
    <div className="App">
      <div className="block">
        <div className="header">
          <center>
            <h1> Emoji-Pedia Fun App</h1>
          </center>
        </div>
        <div>
          <h4 style={{ color: "black" }}>
            Wanna know what emoji it is? Search or select below in Emoji-Pedia
          </h4>
          <img
            src="https://www.nicepng.com/png/detail/882-8820872_hard-thinking-face-emoji.png"
            alt="Hard Thinking Face Emoji@nicepng.com"
          />
        </div>
        <div>
          <center>
            <input
              onChange={inputEmojiHandler}
              placeholder="Enter Emoji to Search.."
            ></input>
          </center>
          <span className="meaningOutput">
            <h3 style={{ padding: "0rem" }}>
              {inputEmoji} {outputEmoji}
            </h3>
          </span>

          <div style={{ padding: "0.5rem 1rem" }}>
            <h3 style={{ color: "#888888" }}>Here are emojis we know</h3>
            {emojiWeHave.map((emoji) => {
              return (
                <li
                  key={emoji}
                  style={{
                    display: "inline",
                    fontSize: "2rem",
                    padding: "0.5rem",
                    cursor: "pointer"
                  }}
                  onClick={() => selectEmoji(emoji)}
                >
                  {emoji}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
