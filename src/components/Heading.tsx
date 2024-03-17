import Image from "next/image";
import logo from "../app/icon.svg";

export function Heading() {
  return (
    <>
      <Image
        src={logo}
        alt="Picture of the author"
        width={40} // Adjust the width as needed
        height={40} // Adjust the height as needed
        className="mr-5" // Add margin to the right of the image
      />
      <h1>Анализ федерального ДЭГа</h1>{" "}
    </>
  );
}
