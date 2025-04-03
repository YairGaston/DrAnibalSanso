"use client";

import React from "react";

export default function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const content = button.nextElementSibling as HTMLElement;

    if (button.getAttribute("data-state") === "closed") {
      button.setAttribute("data-state", "open");
      content.setAttribute("data-state", "open");
    } else {
      button.setAttribute("data-state", "closed");
      content.setAttribute("data-state", "closed");
    }
  };

  return (
    <>
      <button className="accordion-trigger" onClick={handleClick} data-state="closed">
        {question}
      </button>
      <div className="accordion-content" data-state="closed">
        {answer}
      </div>
    </>
  );
}