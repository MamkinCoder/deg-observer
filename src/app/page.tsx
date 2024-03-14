"use client";
import React, { useEffect, useState } from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { NextUIProvider } from "@nextui-org/react";

const HomePage = () => {
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    async function fetchFiles() {
      try {
        const response = await fetch("/api/listFiles");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json(); // Assuming this returns an array of objects [{file: 'filename1.txt'}, {file: 'filename2.txt'}, ...]
        // Transform the data to an array of strings
        const fileNames = data.map((item: { file: string }) => item.file);
        setFiles(fileNames);
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
            <ListboxItem key={index}>
              <a href={`/files/${file}`} download>
                {file}
              </a>
            </ListboxItem>
          ))}
        </Listbox>
      </div>
    </NextUIProvider>
  );
};

export default HomePage;
