"use client"
import React from "react"
import Table, {
  HeaderChip,
  HeaderButton,
  BaseData,
  BaseTableColumn,
} from "@nextdaysite/ui/table"
import { Button } from "@nextui-org/react"

interface Event extends BaseData {
  event_title: string
  date_and_time: string
  rsvps: string
  venue: string
  action: string
}

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
}

type Props = {
  events: Event[]
  columns: BaseTableColumn[]
}

export default function EventsTable({ events, columns }: Props) {
  const renderCell = React.useCallback(
    (event: Event, columnKey: keyof Event) => {
      const cellValue = event[columnKey]

      switch (columnKey) {
        case "event_title":
          return <p>{event.event_title}</p>
        case "date_and_time":
          return <p>{event.date_and_time}</p>
        case "id":
          return <p>{event.id}</p>
        case "rsvps":
          return <p>{event.rsvps}</p>
        case "venue":
          return <p>{event.venue}</p>
        case "action":
          return (
            <Button
              variant="bordered"
              radius="md"
              className="border text-[#344054] rounded-2xl"
            >
              Manage
            </Button>
          )

        default:
          return cellValue
      }
    },
    []
  )

  return (
    <Table
      title="Event Performance Summary"
      description="Keep track of all events"
      renderHeaderChip={() => <HeaderChip text="03 events" />}
      renderHeaderBtn={() => (
        <HeaderButton label="View all events" onClick={() => {}} />
      )}
      data={events}
      columns={columns}
      renderCell={renderCell}
    />
  )
}
