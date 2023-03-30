import React, { useState } from "react";
import { Heading } from "@chakra-ui/react";
import Typed from "react-typed";


function TypingTitle() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["create", "think", "develop", "imagine"];

  return (
    <Heading as="h1" size="xl" className="typing-title">
      Let&apos;s{" "}
      <Typed
        strings={words}
        typeSpeed={50}
        backSpeed={30}
        startDelay={1000}
        backDelay={1000}
        loop
        loopCount={Infinity}
        onLastTyped={() =>
          setCurrentWordIndex((currentWordIndex + 1) % words.length)
        }
        fadeOut={false}
        showCursor
        cursorChar="|"
      />
    </Heading>
  );
}

export default TypingTitle;
