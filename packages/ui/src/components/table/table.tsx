"use client";
import React from "react";
import {
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableHeaderProps,
  TableProps,
  TableRow,
} from "@nextui-org/react";
import clx from "classnames";

export interface BaseTableColumn {
  uid: string;
  name: string;
  align?: "start" | "center" | "end";
}
export interface BaseData {
  id: number;
}

interface TableInterface<T, D> {
  title: string;
  description: string;
  renderHeaderChip?: () => React.ReactNode;
  renderHeaderBtn?: () => React.ReactNode;
  tableProps?: TableProps;
  tableHeaderProps?: TableHeaderProps<T>;
  columns: T[];
  data: D[];
  renderCell: (item: D, columnKey: keyof D) => React.ReactNode;
}

export default function <T extends BaseTableColumn, D extends BaseData>({
  title,
  description,
  renderHeaderChip,
  renderHeaderBtn,
  tableProps,
  columns,
  data,
  renderCell,
}: TableInterface<T, D>) {
  return (
    <div className="font-inter bg-white rounded-2xl mt-10">
      <div className="flex gap-2 h-24 py-5 px-10 ">
        <div>
          <h2 className="text-[#101828] text-lg  font-semibold mb-1">
            {title}
          </h2>
          <p className="text-[#475467] text-sm ">{description}</p>
        </div>
        {renderHeaderChip && (
          <div className="flex flex-1">{renderHeaderChip()}</div>
        )}
        {renderHeaderBtn && (
          <div className="flex flex-1 place-content-end">
            {renderHeaderBtn()}
          </div>
        )}
      </div>
      <Table
        removeWrapper
        {...tableProps}
        classNames={{
          th: "font-inter px-10 text-xs text-[#475467] font-medium",
          td: "font-inter px-10 text-[#101828] text-sm font-medium",
        }}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={String(column.uid)}
              align={column.uid === "actions" ? "center" : "start"}
              className="bg-white rounded-none border-t border-t-[#EAECF0]"
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>

        <TableBody items={data}>
          {(item) => (
            <TableRow
              key={String(item.id)}
              className="h-[72px] border-t border-t-[#EAECF0]"
            >
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey as keyof D)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export const HeaderChip = ({ text }: { text: string }) => {
  return (
    <Chip className="bg-[#F9F5FF] text-primary border border-[#E9D7FE]">
      {text}
    </Chip>
  );
};
export const StatusChip = ({
  status,
  text,
}: {
  status: "success" | "danger" | "warning";
  text: string;
}) => {
  return (
    <Chip
      className={clx("capitalize", {
        "bg-[#ECFDF3] text-[#067647] border border-[#ABEFC6]":
          status === "success",
        "bg-[#FEF3F2] text-[#B42318] border border-[#FECDCA]":
          status === "danger",
        "bg-[#F9F5FF] text-primary border border-[#E9D7FE]":
          status === "warning",
      })}
    >
      {text}
    </Chip>
  );
};

export const HeaderButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <Button
      variant="bordered"
      radius="md"
      className="border text-[#344054] font-inter font-semibold"
      onClick={() => onClick}
    >
      {label}
    </Button>
  );
};
