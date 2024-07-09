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

import useHash from "@/hooks/use-hash";
import { Link } from "@nextui-org/link";
import slugify from "slugify";

interface Props {
  lists: {
    title: string;
    items: {
      title: string;
      href: string;
      desc: string;
    }[];
  }[];
  title: string;
  description: string;
  href: string;
}

export default function LayoutX({ lists, title, description, href }: Props) {
  const hash = (useHash() || slugify(lists[0].title)).replace("#", "");

  const data = lists.find((item) => slugify(item.title) === hash);

  return (
    <main className="flex gap-8 relative py-4">
      <aside className="sticky top-[5rem] h-[calc(100vh-8rem)]">
        <ScrollShadow orientation="vertical" hideScrollBar className="h-full">
          <Tabs
            aria-label="Lib"
            color="primary"
            isVertical
            className="w-72"
            selectedKey={hash}
          >
            {lists.map((tab) => {
              const key = slugify(tab.title);

              return (
                <Tab
                  className="justify-start"
                  key={key}
                  href={"#" + key}
                  title={tab.title}
                />
              );
            })}
          </Tabs>
        </ScrollShadow>
      </aside>

      <article className="flex-1">
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
      </article>
    </main>
  );
}
