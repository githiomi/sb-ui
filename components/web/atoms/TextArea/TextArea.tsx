import React from "react";
import { TextAreaProps } from "./TextArea.types";

export const TextArea: React.FC<TextAreaProps> = ({ id, label }) => {
  return (
    <>
      <p className="text-sm font-medium text-light-text-primary">{label}</p>
      <textarea
        id={id}
        className="mt-1 w-full rounded-md border border-light-border-default bg-light-background-surface px-3 py-2 text-sm text-light-text-primary placeholder:text-light-text-tertiary focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
      />
    </>
  );
};
