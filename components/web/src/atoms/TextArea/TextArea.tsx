import React, { Fragment } from "react";
import { TextAreaProps } from "./TextArea.types";

export const TextArea: React.FC<TextAreaProps> = ({
  id,
  label,
  className,
  placeholder,
}) => {
  return (
    <div className={className}>
      <p className="text-bold text-dark-text-link">{label}</p>
      <textarea
        id={id}
        placeholder={placeholder}
        className="mt-1 w-full rounded-md border"
      />
    </div>
  );
};
