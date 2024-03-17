import { Charts } from "@/components/Charts";
import { Dumps } from "@/components/Dumps";
import { Heading } from "@/components/Heading";
import { Card } from "@nextui-org/react";

const HomePage = () => {
  return (
    <div className=" grid h-full grid-cols-1 grid-rows-[auto] gap-4 md:grid-cols-[2fr_1fr] md:grid-rows-[auto_1fr]">
      <div className="col-span-1 flex items-center p-5 text-3xl md:col-span-2">
        <Heading />
      </div>
      <Card className="col-span-1 min-h-[600px] md:col-span-1">
        <Charts />
      </Card>
      <Card className="col-span-1 self-start md:col-span-1">
        <Dumps />
      </Card>
    </div>
  );
};

export default HomePage;
