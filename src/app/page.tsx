"use client";
import { Charts } from "@/components/Charts";
import { Dumps } from "@/components/Dumps";
import { Heading } from "@/components/Heading";
import { Tabs, Tab } from "@nextui-org/tabs"; // Import Tabs and Tab from nextui
import { Card, CardBody } from "@nextui-org/react"; // Import Card from nextui if you still need to use it.

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-[auto_1fr]">
      <div className="col-span-1 flex items-center p-5 text-3xl">
        <Heading />
      </div>

      <Tabs size="lg" aria-label="Options" className="col-span-1 items-center">
        <Tab key="charts" title="Графики" className="md:col-span-2">
          <Charts />
        </Tab>
        <Tab
          key="dumps"
          title="Дампы"
          className="justify-self-center md:col-span-2"
        >
          <Dumps />
        </Tab>
      </Tabs>
    </div>
  );
};

export default HomePage;
