"use client";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { useState, useEffect, useRef } from "react";
import DownloadIcon from "./download";
import { FileFormats, FilesTwoColumns, File } from "@/app/api/listFiles/types";

type FileListProps = { format: FileFormats };

export default function FileList({ format }: FileListProps) {
  const [disabledIndexes, setDisabledIndexes] = useState<number[]>([]);
  const [files, setFiles] = useState<File[]>([]);

  const shadowAnchorRef = useRef<HTMLAnchorElement[]>([]);

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
        const data = (await response.json()) as FilesTwoColumns;
        setFiles(data[format]);
      } catch (error) {
        console.error("Failed to fetch files:", error);
      }
    }
    fetchFiles();
  }, []);

  const handlePress = (file: File, index: number): void => {
    if (disabledIndexes.includes(index)) return;

    setDisabledIndexes((current) => [...current, index]);

    shadowAnchorRef.current[index]?.click();

    setTimeout(() => {
      setDisabledIndexes((current) =>
        current.filter((disabledIndex) => disabledIndex !== index)
      );
    }, 5000);
  };

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
            {file.file}
          </ListboxItem>
        ))}
      </Listbox>
      {files.map((file, index) => (
        <a
          key={index}
          href={`http://losevpeter.ru/dumps-server/${format}/${file.file}`}
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
