import React from "react";
import ReactQuill from "react-quill";
import preview from "./preview.png";
import "react-quill/dist/quill.bubble.css";
import "./index.css";

const ViewComponent = ({ id, className, value, onChange, ...rest }) => (
  <ReactQuill
    modules={{
      toolbar: [
        [
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "code-block",
          "link",
          "image",
          "video",
          "formula",
          { list: "ordered" },
          { list: "bullet" },
          { script: "sub" },
          { script: "super" },
          { indent: "-1" },
          { indent: "+1" },
          { direction: "rtl" },
          { color: [] },
          { background: [] },
          { size: ["small", false, "large", "huge"] },
          { header: [1, 2, 3, 4, 5, 6, false] },
          { font: [] },
          { align: [] }
        ]
      ]
    }}
    onChange={onChange}
    theme="bubble"
    value={value}
    placeholder="Введите текст..."
    className={className}
    style={{
      ...rest
    }}
  />
);

export default {
  Component: ViewComponent,
  id: "EditorPlugin",
  name: "Текст",
  description: "Текст с изменяемым внешнем видом",
  defaultState: {
    type: "EditorPlugin",
    width: "100%",
    height: "auto",
    value: ""
  },
  preview
};
