import FileList from "@/components/FileList";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
      <div className="col-span-1 md:col-span-2 text-3xl p-5">
        <h1>
          У нас тут скоро будут графики, пока что можете скачать дампы ноды
          формата Postgresql
        </h1>
      </div>
      <Card className="col-span-1 md:col-span-1 vh-100">
        <CardBody>
          <h2>Графики будут тут</h2>
          {/* <iframe
            src="http://95.216.142.225:3000/d/edfqkznlpa77ka/deg?orgId=1&kiosk"
            width=""
            height=""
            frameborder="0"
          ></iframe> */}
        </CardBody>
      </Card>
      <Card className="col-span-1 md:col-span-1 ">
        <CardHeader>Дампы</CardHeader>
        <Divider />

        <CardBody>
          <FileList />
        </CardBody>
      </Card>
    </div>
  );
};

export default HomePage;
