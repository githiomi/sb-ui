import React from "react";
import { TextAreaProps } from "./TextArea.types";

export const TextArea: React.FC<TextAreaProps> = ({ id, label }) => {
  return (
    <>
      <p>{label}</p>
      <textarea id={id} />
    </>
  );
};
