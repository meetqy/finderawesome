"use client";

import {
  Tabs,
  Tab,
  ScrollShadow,
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

import { lists, title, description, href } from "./data.json";
import useHash from "@/hooks/use-hash";
import { Link } from "@nextui-org/link";
import slugify from "slugify";

export default function Page() {
  const hash = useHash();

  const data = lists.find(
    (item) => slugify(item.title) === hash?.replace("#", "")
  );

  return (
    <main className="flex w-full flex-col items-center relative">
      <div className="w-full ">
        <header className="mb-6 flex w-full items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-default-900 lg:text-3xl capitalize">
              {title}
            </h1>
            <p className="text-small text-default-400 lg:text-medium">
              {description}
            </p>
          </div>
          <Button
            color="primary"
            as={Link}
            href={href}
            showAnchorIcon
            isBlock
            isExternal
          >
            SOURCE
          </Button>
        </header>
        <ScrollShadow
          hideScrollBar
          className="-mx-2 flex w-full justify-between gap-8 sticky top-16 z-30"
          orientation="horizontal"
        >
          <Tabs
            aria-label="Lib"
            radius="full"
            color="primary"
            selectedKey={hash?.replace("#", "")}
          >
            {lists.map((tab) => {
              const slug = slugify(tab.title);

              return (
                <Tab key={slug} as={Link} href={"#" + slug} title={tab.title} />
              );
            })}
          </Tabs>
        </ScrollShadow>

        <Table
          aria-label={title + "-" + data?.title}
          className="mt-4"
          color="warning"
          selectionMode="single"
          selectionBehavior="replace"
        >
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>DESCRIPTION</TableColumn>
          </TableHeader>
          <TableBody>
            {/* @ts-ignore */}
            {data?.items?.map((item) => (
              <TableRow key={item.title}>
                <TableCell>
                  <Link isExternal showAnchorIcon href={item.href}>
                    {item.title}
                  </Link>
                </TableCell>
                <TableCell>{item.desc}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
