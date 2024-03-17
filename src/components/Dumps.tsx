"use client";
import {
  Card,
  CardHeader,
  Accordion,
  AccordionItem,
  Divider,
  CardBody,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Link,
} from "@nextui-org/react";
import InfoIcon from "./info";
import { useState } from "react";
import FileList from "@/components/FileList";

export function Dumps() {
  const [selectedKeys, setSelectedKeys] = useState(
    new Set<string>(["1"]),
  ) as any;
  return (
    <>
      <CardHeader>
        <Accordion
          variant="bordered"
          disableIndicatorAnimation
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          <AccordionItem key="1" title="Дампы" indicator={<InfoIcon />}>
            <div className=" text-small">
              Есть 2 типа дампов: <br />
              1) исходный, дамп снятый напрямую с ноды наблюдения без изменений.
              Он только машиночитаемый бизнес логики там нет.
              <br />
              2) Конвертированный дамп, дамп, который прошел конвертацию из
              исходного в PostgreSQL. Данный тип дампа можно использовать для
              аналитики. Чтобы конвертировать исходный дамп в конвертированный
              нужно запустить{" "}
              <Link
                href="https://github.com/AlexeiScherbakov/Voting2024Converter/tree/master/src"
                className="text-small"
                isExternal
              >
                программу-конвертер
              </Link>{" "}
              <Divider className="my-3" />
              <Link
                href="https://docs.google.com/document/d/1aTFdMNCiWy1miFoL8_ajAXIbXdI_Y_6_VgbxuzXh93g/edit?pli=1"
                className="text-small"
                isExternal
              >
                Инструкция по работе с конвертированным дампом
              </Link>
            </div>
          </AccordionItem>
        </Accordion>
      </CardHeader>
      <Divider />

      <CardBody>
        <Table removeWrapper>
          <TableHeader>
            <TableColumn>Исходный</TableColumn>
            <TableColumn>Конвертированный</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>
                <FileList format="raw" />
              </TableCell>
              <TableCell>
                <FileList format="converted" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardBody>
    </>
  );
}
