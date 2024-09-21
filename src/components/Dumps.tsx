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
            <TableRow>
              <TableCell>
                <Link
                  download={"fed_2024_edg_final.sql"}
                  href="db_dumps/fed_2024_edg_final.sql"
                  className="text-[1em]"
                >
                  ЕГД 2024
                </Link>
              </TableCell>
              <TableCell>
                При первичной аналитике особых аномалий не обнаружено, однако
                для гарантии отсутствия вмешательства требуется более масштабное
                исследование.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ЕГД 2024 — Тестовое</TableCell>
              <TableCell>Ошибка в данных.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Link
                  download={"fed_2024_president_final.sql"}
                  href="db_dumps/fed_2024_president_final.sql"
                  className="text-[1em]"
                >
                  Президентские 2024
                </Link>
              </TableCell>
              <TableCell>
                Во время голосования по заявлениям организаторов была массовая
                атака, и из-за этого в первый день система работала нестабильно.
                В блокчейн недогрузили 211 тысяч избирателей, и из-за этого в 5
                регионах (Алтайский край, Камчатский край, Новосибирская
                область, Калининградская область, Томская область) явка выше 100
                процентов. Подробнее прочесть можно здесь{" "}
                <Link
                  className="text-[1em]"
                  href="https://habr.com/ru/articles/840192/"
                >
                  здесь
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Президентские 2024 — Тестовое</TableCell>
              <TableCell>
                В процессе голосования выяснилось, что система некорректно
                работает в Ненецком автономном округе (НАО), так как этот регион
                матрешка — он является и субъектом федерации, и входит в
                Архангельскую область одновременно. Поэтому голосование в
                Ненецком автономном округе перезапускали.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Link
                  download={"fed_2023_edg_final.sql"}
                  href="db_dumps/fed_2023_edg_final.sql"
                  className="text-[1em]"
                >
                  ЕГД 2023
                </Link>
              </TableCell>
              <TableCell>Нет данных.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ЕГД 2023 — Тестовое</TableCell>
              <TableCell>Нет данных.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ЕГД 2022</TableCell>
              <TableCell>Нет данных.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ЕГД 2022 — Тестовое</TableCell>
              <TableCell>Нет данных.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ЕГД 2021 (Госдума)</TableCell>
              <TableCell>Нет данных.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ЕГД 2021 (Госдума) — Тестовое</TableCell>
              <TableCell>Нет данных.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="block md:hidden">
          <div>
            <div>
              <Link
                download={"fed_2024_edg_final.sql"}
                href="db_dumps/fed_2024_edg_final.sql"
                className="text-[1em]"
              >
                ЕГД 2024
              </Link>
            </div>
            <div>
              При первичной аналитике особых аномалий не обнаружено, однако для
              гарантии отсутствия вмешательства требуется более масштабное
              исследование.
            </div>
          </div>
          <Divider />
          <div>
            <div>ЕГД 2024 — Тестовое</div>
            <div>Ошибка в данных.</div>
          </div>
          <Divider />
          <div>
            <div>
              <Link
                download={"fed_2024_president_final.sql"}
                href="db_dumps/fed_2024_president_final.sql"
                className="text-[1em]"
              >
                Президентские 2024
              </Link>
            </div>
            <div>
              Во время голосования по заявлениям организаторов была массовая
              атака, и из-за этого в первый день система работала нестабильно. В
              блокчейн недогрузили 211 тысяч избирателей, и из-за этого в 5
              регионах (Алтайский край, Камчатский край, Новосибирская область,
              Калининградская область, Томская область) явка выше 100 процентов.
              Подробнее прочесть можно здесь{" "}
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
            <div>Президентские 2024 — Тестовое</div>
            <div>
              В процессе голосования выяснилось, что система некорректно
              работает в Ненецком автономном округе (НАО), так как этот регион
              матрешка — он является и субъектом федерации, и входит в
              Архангельскую область одновременно. Поэтому голосование в Ненецком
              автономном округе перезапускали.
            </div>
          </div>
          <Divider />

          <div>
            <div>
              <Link
                download={"fed_2023_edg_final.sql"}
                href="db_dumps/fed_2023_edg_final.sql"
                className="text-[1em]"
              >
                ЕГД 2023
              </Link>
            </div>
            <div>Нет данных.</div>
          </div>
          <Divider />

          <div>
            <div>ЕГД 2023 — Тестовое</div>
            <div>Нет данных.</div>
          </div>
          <Divider />

          <div>
            <div>ЕГД 2022</div>
            <div>Нет данных.</div>
          </div>
          <Divider />

          <div>
            <div>ЕГД 2022 — Тестовое</div>
            <div>Нет данных.</div>
          </div>
          <Divider />

          <div>
            <div>ЕГД 2021 (Госдума)</div>
            <div>Нет данных.</div>
          </div>
          <Divider />

          <div>
            <div>ЕГД 2021 (Госдума) — Тестовое</div>
            <div>Нет данных.</div>
          </div>
          <Divider />
        </div>
      </CardBody>
    </Card>
  );
}
