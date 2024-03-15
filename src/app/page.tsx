"use client";
import FileList from "@/components/FileList";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

const FlourishEmbed: React.FC = () => {
  return (
    <>
      <iframe
        src="https://flo.uri.sh/visualisation/17171317/embed"
        title="Interactive or visual content"
        className="flourish-embed-iframe"
        frameBorder="0"
        scrolling="no"
        style={{ width: "100%", height: "600px" }}
        sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
      />
      <div style={{ width: "100%", marginTop: "4px", textAlign: "right" }}>
        <a
          className="flourish-credit"
          href="https://public.flourish.studio/visualisation/17171317/?utm_source=embed&utm_campaign=visualisation/17171317"
          target="_top"
          style={{ textDecoration: "none" }}
        >
          <img
            alt="Made with Flourish"
            src="https://public.flourish.studio/resources/made_with_flourish.svg"
            style={{
              width: "105px",
              height: "16px",
              border: "none",
              margin: "0",
            }}
          />
        </a>
      </div>
    </>
  );
};

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
      <div className="col-span-1 md:col-span-2 text-3xl p-5">
        <h1>Анализ федерального ДЭГа</h1>
      </div>
      <Card className="col-span-1 md:col-span-1 min-h-[50vh]">
        <CardBody>
          <FlourishEmbed />
        </CardBody>
      </Card>
      <Card className="col-span-1 md:col-span-1">
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
