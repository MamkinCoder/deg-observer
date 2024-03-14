import fs from "fs";
import path from "path";
import { Listbox, ListboxItem } from "@nextui-org/react";

export default function FileList() {
  const directoryPath = path.join(process.cwd(), "public", "files");
  const files = fs.readdirSync(directoryPath);

  return (
    <div>
      <Listbox aria-label="Actions">
        {files.map((file) => (
          <ListboxItem key={file}>
            <a href={`/files/${file}`} download>
              {file}
            </a>
          </ListboxItem>
        ))}
      </Listbox>
    </div>
    // <div>
    //   <h2>Доступные файлы</h2>
    //   <List>
    //     {files.map((file) => (
    //       <List.Item key={file}>
    //         <a href={`/files/${file}`} download>
    //           {file}
    //         </a>
    //       </List.Item>
    //     ))}
    //   </List>
    // </div>
  );
}
