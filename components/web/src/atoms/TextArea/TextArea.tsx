import React from "react";
import { TextAreaProps } from "./TextArea.types";

export const TextArea: React.FC<TextAreaProps> = ({ id, label, placeholder }) => {
  return (
    <>
      <p className="text-sm font-bold text-dark-text-link">{label}</p>
      <textarea
        id={id}
        placeholder={placeholder}
        className="mt-1 w-full rounded-md border"
      />
    </>
  );
};
