"use client";

import { useEffect, useState } from "react";
import "./home.css";
import Link from "next/link";

export default function Home() {
  const words = ["Digital Printing", "Sign Design", "Advertising Solutions"];
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(70);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting ? currentWord.substring(0, prev.length - 1) : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <div className="homeMain">
      <div className="overlay">
        <h1>Under Constructions</h1>
        <h2>Mİ DİJİTAL</h2>
        <h3 className="typingEffect">{text}<span className="cursor">|</span></h3>
        <Link href="mailto:mustafa@noomim.com">
          <button>Contact Us</button>
        </Link>
      </div>
    </div>
  );
}