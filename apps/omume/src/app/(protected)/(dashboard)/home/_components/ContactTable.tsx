"use client"
import React from "react"
import Table, {
  HeaderButton,
  BaseData,
  BaseTableColumn,
} from "@nextdaysite/ui/table"
import { Button } from "@nextui-org/react"
import Link from "next/link"

export interface Contact extends BaseData {
  contact: string
  counts: number
  view: string
  edit: string
}

type Props = {
  contacts: Contact[]
  columns: BaseTableColumn[]
}

export default function ContactTable({ contacts, columns }: Props) {
  const renderCell = React.useCallback(
    (contacts: Contact, columnKey: keyof Contact) => {
      const cellValue = contacts[columnKey]

      switch (columnKey) {
        case "contact":
          return (
            <>
              <p>{contacts.contact}</p>
              <p className="text-[#475467] text-sm font-inter font-normal">
                Contacts: {contacts.counts}
              </p>
            </>
          )
        case "view":
          return (
            <Link
              href={"#"}
              className="text-[#475467] font-inter font-semibold  hover:underline underline-offset-2 transition-all"
            >
              View List
            </Link>
          )
        case "edit":
          return (
            <Link
              href={"#"}
              className="text-primary font-inter font-semibold hover:underline underline-offset-2 transition-all"
            >
              Edit
            </Link>
          )
        default:
          return cellValue
      }
    },
    []
  )

  return (
    <Table
      title="Contact list"
      description="Keep track of all contacts"
      renderHeaderBtn={() => (
        <HeaderButton label="Create new list" onClick={() => {}} />
      )}
      tableProps={{ hideHeader: true }}
      data={contacts}
      columns={columns}
      renderCell={renderCell}
    />
  )
}
