"use client";
import React, { useEffect, useState } from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { NextUIProvider } from "@nextui-org/react";

type files = {
  file: string;
  description: string;
}[];

const HomePage = () => {
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
    <NextUIProvider>
      <div>
        <h1>Download Node Dumps:</h1>
        <Listbox aria-label="Files">
          {files.map((file, index) => (
            <ListboxItem key={index} description={file.description}>
              <a href={`/files/${file.file}`} download>
                {file.file}
              </a>
            </ListboxItem>
          ))}
        </Listbox>
      </div>
    </NextUIProvider>
  );
};

export default HomePage;
