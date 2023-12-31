import React from "react";
import styles from "./FileList.module.scss";
import { FileItem } from "@/api/dto/files.dto";
import { FileCard } from "@/components/FileCard";
import Selecto from "react-selecto";

export type FileSelectType = "select" | "unselect";

interface FileListProps {
  items: FileItem[];
  onFileSelect: (id: number, type: FileSelectType) => void;
}

export const FileList: React.FC<FileListProps> = ({ items, onFileSelect }) => {
  return (
    <div className={styles.root}>
      {items.map((item) => (
        <div data-id={item.id} key={item.id} className="file">
          <FileCard filename={item.filename} originalName={item.originalName} />
        </div>
      ))}

      <Selecto
          //@ts-ignore
        container=".files"
          //@ts-ignore
        selectableTargets={[".file"]}
          //@ts-ignore
        selectByClick
          //@ts-ignore
        hitRate={10}
          //@ts-ignore
        selectFromInside
          //@ts-ignore
        toggleContinueSelect={["shift"]}
          //@ts-ignore
        continueSelect={false}
          //@ts-ignore
        onSelect={(e) => {
          e.added.forEach((el) => {
            el.classList.add("active");
            //@ts-ignore
            onFileSelect(Number(el.dataset["id"]), "select");
          });
          e.removed.forEach((el) => {
            el.classList.remove("active");
              //@ts-ignore
            onFileSelect(Number(el.dataset["id"]), "unselect");
          });
        }}
      />
    </div>
  );
};
