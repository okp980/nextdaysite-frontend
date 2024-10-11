"use client"
import React from "react"
import Table, {
  HeaderButton,
  BaseData,
  BaseTableColumn,
  StatusChip,
} from "@nextdaysite/ui/table"

export interface Broadcast extends BaseData {
  event_title: string
  channel: string
  status: "sent" | "failed"
}

const statusColorMap = {
  sent: "success",
  failed: "danger",
  pending: "warning",
} as const

type Props = {
  broadcasts: Broadcast[]
  columns: BaseTableColumn[]
}

export default function BroadcastTable({ broadcasts, columns }: Props) {
  const renderCell = React.useCallback(
    (broadcast: Broadcast, columnKey: keyof Broadcast) => {
      const cellValue = broadcast[columnKey]

      switch (columnKey) {
        case "event_title":
          return <p>{broadcast.event_title}</p>
        case "channel":
          return <p>{broadcast.channel}</p>
        case "status":
          return (
            <StatusChip
              status={statusColorMap[broadcast.status]}
              text={broadcast.status}
            />
          )
        default:
          return cellValue
      }
    },
    []
  )

  return (
    <Table
      title="Broadcast "
      description="Keep track of all broadcasts"
      renderHeaderBtn={() => (
        <HeaderButton label="Create new broadcast" onClick={() => {}} />
      )}
      data={broadcasts}
      columns={columns}
      renderCell={renderCell}
    />
  )
}
