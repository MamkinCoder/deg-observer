"use client";
import {
  Card,
  CardHeader,
  Accordion,
  AccordionItem,
  CardBody,
  Kbd,
} from "@nextui-org/react";
import InfoIcon from "./info";

export function Charts() {
  return (
    <>
      <CardHeader>
        <Accordion variant="bordered" disableIndicatorAnimation>
          <AccordionItem title="Навигация в графиках" indicator={<InfoIcon />}>
            <div>
              <ul className=" ml-4 list-disc">
                <li>
                  <i>кликните вне графика </i>
                  <Kbd className="ml-2">t</Kbd> + <Kbd keys={["left"]} /> /
                  <Kbd keys={["right"]} className="mr-2" />: Двигать timeline
                  влево и вправо
                </li>
                <li>
                  <i>двойной клик в графике или</i>{" "}
                  <Kbd className="ml-2">t</Kbd> + <Kbd className="mr-2">z</Kbd>:
                  zoom out
                </li>
                <li>
                  <i>выделяем область на графике левой кнопой мыши</i>: zoom in
                </li>
              </ul>
            </div>
          </AccordionItem>
        </Accordion>
      </CardHeader>
      <CardBody>
        <div className="relative h-full">
          <iframe
            id="contentFrame"
            src="https://losevpeter.ru/grafana/d/edznlpa77ka/deg?orgId=1&kiosk"
            // src="https://losevpeter.ru/grafana/d/edfqkznlpa77ka/deg?orgId=1&kiosk"
            className="absolute inset-0 h-full w-full"
          ></iframe>
        </div>
      </CardBody>
    </>
  );
}
