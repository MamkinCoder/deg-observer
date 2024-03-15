"use client";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { useState, useEffect, useRef } from "react";
import DownloadIcon from "./download";

type file = {
  file: string;
  description: string;
};

export default function FileList() {
  const [disabledIndexes, setDisabledIndexes] = useState<number[]>([]);
  const [files, setFiles] = useState<file[]>([]);

  const shadowAnchorRef = useRef<HTMLAnchorElement[]>([]);

  // Pre-allocate refs for each file
  useEffect(() => {
    shadowAnchorRef.current = shadowAnchorRef.current.slice(0, files.length);
  }, [files]);

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

  const handlePress = (file: file, index: number): void => {
    if (disabledIndexes.includes(index)) return;

    setDisabledIndexes((current) => [...current, index]);

    // Programmatically click the "shadow" anchor
    shadowAnchorRef.current[index]?.click();

    setTimeout(() => {
      setDisabledIndexes((current) =>
        current.filter((disabledIndex) => disabledIndex !== index)
      );
    }, 5000); // Re-enable the item after 5 seconds
  };

  // Function to disable an item and then re-enable it after 5 seconds
  // const handlePress = (index: number) => {
  //   setDisabledIndexes((currentDisabledIndexes) => [
  //     ...currentDisabledIndexes,
  //     index,
  //   ]);
  //   setTimeout(() => {
  //     setDisabledIndexes((currentDisabledIndexes) =>
  //       currentDisabledIndexes.filter(
  //         (disabledIndex) => disabledIndex !== index
  //       )
  //     );
  //   }, 5000); // 5000 milliseconds = 5 seconds
  // };

  return (
    <>
      <Listbox aria-label="Files" disabledKeys={disabledIndexes.map(String)}>
        {files.map((file, index) => (
          <ListboxItem
            key={index}
            description={file.description}
            startContent={<DownloadIcon />}
            onPress={() => handlePress(file, index)}
          >
            <a href={`/api/getFiles/${file.file}`} download>
              {file.file}
            </a>
          </ListboxItem>
        ))}
      </Listbox>
      {/* "Shadow" anchors for handling downloads, hidden from view */}
      {files.map((file, index) => (
        <a
          key={index}
          href={`/api/getFiles/${file.file}`}
          download
          ref={(el) =>
            (shadowAnchorRef.current[index] = el as HTMLAnchorElement)
          }
          style={{ display: "none" }}
        >
          Download
        </a>
      ))}
    </>
  );
}
