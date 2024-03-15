"use client";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { useState, useEffect } from "react";
import DownloadIcon from "./download";

type files = {
  file: string;
  description: string;
}[];

export default function FileList() {
  const [files, setFiles] = useState<files>([]);

  useEffect(() => {
    async function fetchFiles() {
      try {
        const response = await fetch("/api/listFiles");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFiles(data);
      } catch (error) {
        console.error("Failed to fetch files:", error);
      }
    }
    fetchFiles();
  }, []);

  return (
    <Listbox aria-label="Files">
      {files.map((file, index) => (
        <ListboxItem
          key={index}
          description={file.description}
          startContent={<DownloadIcon />}
          // onPress={}
        >
          <a href={`/api/getFiles/${file.file}`} download>
            {file.file}
          </a>
        </ListboxItem>
      ))}
    </Listbox>
  );
}
