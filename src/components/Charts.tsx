"use client";
import {
  Card,
  CardHeader,
  Accordion,
  AccordionItem,
  CardBody,
  Kbd,
  Tab,
  Tabs,
  Divider,
} from "@nextui-org/react";
import InfoIcon from "./icons/info";
import ChartIcon from "./icons/chart";

export function Charts() {
  return (
    <div className="flex flex-col gap-6">
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
                <i>двойной клик в графике или</i> <Kbd className="ml-2">t</Kbd>{" "}
                + <Kbd className="mr-2">z</Kbd>: zoom out
              </li>
              <li>
                <i>выделяем область на графике левой кнопой мыши</i>: zoom in
              </li>
            </ul>
          </div>
        </AccordionItem>
      </Accordion>
      <Accordion variant="shadow">
        <AccordionItem
          title={
            <h2 className="ml-2 flex font-medium">
              <ChartIcon />
              Данные федерального ДЭГ единого дня голосования 8-10 сентября 2024
            </h2>
          }
        >
          <div className="relative h-[calc(100lvh-100px)]">
            <iframe
              id="contentFrame"
              src="https://losevpeter.ru/grafana/d/bdx5ut9fsu8sgf/deg-dashboard?orgId=1&amp;kiosk&amp;theme=light"
              className="absolute inset-0 h-full w-full"
            ></iframe>
            {/* <div className="inset-0 h-[600px] w-[1000px] bg-red-500"></div> */}
          </div>
        </AccordionItem>
      </Accordion>
      <Accordion variant="shadow">
        <AccordionItem
          title={
            <h2 className="ml-2 flex font-medium">
              <ChartIcon />
              Данные федерального ДЭГ президентских выборов в России 2024
            </h2>
          }
        >
          <div className="relative h-[calc(100lvh-100px)]">
            <iframe
              id="contentFrame"
              src="https://losevpeter.ru/grafana/d/ddxlzuqzbiqyof/fed-president-2024?orgId=1&amp;kiosk&amp;theme=light"
              className="absolute inset-0 h-full w-full"
            ></iframe>
            {/* <div className="inset-0 h-[600px] w-[1000px] bg-red-500"></div> */}
          </div>
        </AccordionItem>
      </Accordion>
      <Accordion variant="shadow">
        <AccordionItem
          title={
            <h2 className="ml-2 flex font-medium">
              <ChartIcon />
              Данные федерального ДЭГ единого дня голосования 8-10 сентября 2023{" "}
            </h2>
          }
        >
          <div className="relative h-[calc(100lvh-100px)]">
            <iframe
              id="contentFrame"
              src="https://losevpeter.ru/grafana/d/adyf4busjwzr4d/edg-2023?orgId=1&amp;kiosk&amp;theme=light"
              className="absolute inset-0 h-full w-full"
            ></iframe>
            {/* <div className="inset-0 h-[600px] w-[1000px] bg-red-500"></div> */}
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
