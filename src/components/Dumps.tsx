"use client";
import {
  Card,
  CardHeader,
  Image,
  CardBody,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Link,
  Divider,
} from "@nextui-org/react";
import InfoIcon from "./icons/info";
import { useState } from "react";

export function Dumps() {
  const [selectedKeys, setSelectedKeys] = useState(
    new Set<string>(["1"]),
  ) as any;
  return (
    <Card className="max-w-[800px]">
      <CardHeader className="flex flex-col gap-2 p-10">
        <div>
          <InfoIcon className="mr-2 inline-block text-foreground-500" />
          Ниже представлены базы данных работы электронного голосования по годам
          в формате Postgres. Эти дампы были получены путем использования
          специализированных программ на ноде наблюдения или путем сохранения
          транзакций с портала наблюдателя{" "}
          <Link href="https://stat.vybory.gov.ru">stat.vybory.gov.ru</Link>.
          Данные разделены по бизнес-сущностям для удобства аналитики, UML схема
          представлена ниже:
        </div>
        <Divider />
        <Image
          isBlurred
          alt="db scheme"
          src="/db_scheme2.png"
          className="max-h-[50vh]"
          onClick={() => window.open("/db_scheme.png", "_blank")}
        />
      </CardHeader>

      <CardBody>
        <Table isStriped className="hidden md:block">
          <TableHeader>
            <TableColumn>Ссылка</TableColumn>
            <TableColumn>Комментарий</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>
                <Link
                  download={"fed_2024_edg_final.sql"}
                  href="/fed_2024_edg_final.sql"
                >
                  fed_2024_edg_final.sql
                </Link>
              </TableCell>
              <TableCell>
                Для президентских комментарий — В блокчейн недогрузили 211к
                избирателей и из-за это в 5 регионах (Алтайский край, Камчатский
                край, Новосибирская область, Калининградская область, Томская
                область) явка выше 100 процентов. Подробнее прочесть можно{" "}
                <Link
                  className="text-[1em]"
                  href="https://habr.com/ru/articles/840192/"
                >
                  здесь
                </Link>
              </TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>
                <Link
                  download={"fed_2024_president_final.sql"}
                  href="/fed_2024_president_final.sql"
                >
                  fed_2024_president_final.sql
                </Link>
              </TableCell>
              <TableCell>
                Выборы ЕДГ 2024 Особых аномалий не обнаружено
                <br />
                ЕДГ 2024 — Тестовое Ошибка в данных
                <br />
                Президентские 2024 Во время голосования по заявлениям
                организаторов была массовая атака и из-за этого в первый день
                система работала нестабильно.
                <br />
                В блокчейн недогрузили 211к избирателей и из-за это в 5 регионах
                (Алтайский край, Камчатский край, Новосибирская область,
                Калининградская область, Томская область) явка выше 100
                процентов.
                <br />
                Подробнее прочесть можно{" "}
                <Link
                  href="https://habr.com/ru/articles/840192/"
                  target="_blank"
                >
                  здесь{" "}
                </Link>
              </TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>{""}</TableCell>
              <TableCell>Президентские 2024 — Тестовое Нет данных</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>{""}</TableCell>
              <TableCell>ЕДГ 2023 Будут в ближайшее время</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>{""}</TableCell>
              <TableCell>ЕДГ 2023 — Тестовое Нет данных</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>{""}</TableCell>
              <TableCell>ЕДГ 2022 Нет данных</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>{""}</TableCell>
              <TableCell>ЕДГ 2022 — Тестовое Нет данных</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>{""}</TableCell>
              <TableCell>ЕДГ 2021 (Госдума) Нет данных</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>{""}</TableCell>
              <TableCell>ЕДГ 2021 (Госдума) — Тестовое Нет данных</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="block md:hidden">
          <div>
            <div>
              <Link
                download={"fed_2024_edg_final.sql"}
                href="/fed_2024_edg_final.sql"
              >
                fed_2024_edg_final.sql
              </Link>
            </div>
            <div>
              Для президентских комментарий — В блокчейн недогрузили 211к
              избирателей и из-за это в 5 регионах (Алтайский край, Камчатский
              край, Новосибирская область, Калининградская область, Томская
              область) явка выше 100 процентов. Подробнее прочесть можно{" "}
              <Link
                className="text-[1em]"
                href="https://habr.com/ru/articles/840192/"
              >
                здесь
              </Link>
            </div>
          </div>
          <Divider />
          <div>
            <div>
              <Link
                download={"fed_2024_president_final.sql"}
                href="/fed_2024_president_final.sql"
              >
                fed_2024_president_final.sql
              </Link>
            </div>
            <div>
              Выборы ЕДГ 2024 Особых аномалий не обнаружено
              <br />
              ЕДГ 2024 — Тестовое Ошибка в данных
              <br />
              Президентские 2024 Во время голосования по заявлениям
              организаторов была массовая атака и из-за этого в первый день
              система работала нестабильно.
              <br />
              В блокчейн недогрузили 211к избирателей и из-за это в 5 регионах
              (Алтайский край, Камчатский край, Новосибирская область,
              Калининградская область, Томская область) явка выше 100 процентов.
              <br />
              Подробнее прочесть можно{" "}
              <Link href="https://habr.com/ru/articles/840192/" target="_blank">
                здесь{" "}
              </Link>
              <br />
              Президентские 2024 — Тестовое Нет данных
              <br />
              ЕДГ 2023 Будут в ближайшее время
              <br />
              ЕДГ 2023 — Тестовое Нет данных
              <br />
              ЕДГ 2022 Нет данных
              <br />
              ЕДГ 2022 — Тестовое Нет данных
              <br />
              ЕДГ 2021 (Госдума) Нет данных
              <br />
              ЕДГ 2021 (Госдума) — Тестовое Нет данных
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
