import React from "react";
import HomeHeader from "./_components/HomeHeader";
import Summary from "./_components/Summary";
import EventsTable from "./_components/EventsTable";
import BroadcastTable, { Broadcast } from "./_components/BroadcastTable";
import ContactTable, { Contact } from "./_components/ContactTable";

type Props = {};
const eventsColumns = [
  { name: "Event Title", uid: "event_title" },
  { name: "Date & Time", uid: "date_and_time" },
  { name: "RSVPs", uid: "rsvps" },
  { name: "Venue", uid: "venue" },
  { name: "", uid: "action" },
];
const broadcastColumns = [
  { name: "Event Title", uid: "event_title" },
  { name: "Channel", uid: "channel" },
  { name: "Status", uid: "status" },
];
const contactColumns = [
  { name: "Contacts", uid: "contact" },
  { name: "View", uid: "view" },
  { name: "Edit", uid: "edit" },
];

const events = [
  {
    id: 1,
    event_title: "Summer Kickoff Party",
    date_and_time: "Jun 15, 2024 07:00 PM",
    rsvps: "025/250",
    venue: "Sunset Beach",
    action: "",
  },
  {
    id: 2,
    event_title: "Tech Workshop 2024",
    date_and_time: "Jul 03, 2024 10:00 AM",
    rsvps: "030/100",
    venue: "Innovation Hub",
    action: "",
  },
  {
    id: 3,
    event_title: "Annual Charity Gala",
    date_and_time: "Aug 20, 2024 06:30 AM",
    rsvps: "321/1000",
    venue: "Innovation Hub",
    action: "",
  },
];

const broadcasts = [
  {
    id: 1,
    event_title: "Summer Kickoff Party",
    channel: "Email",
    status: "sent",
  },
  {
    id: 2,
    event_title: "Tech Workshop 2024",
    channel: "Facebook",
    status: "failed",
  },
];
const contacts = [
  {
    id: 1,
    contact: "Vip Clients",
    counts: 250,
    view: "/contact/details/1",
    edit: "/contact/details/1",
  },
  {
    id: 2,
    contact: "Newsletter Subscriber",
    counts: 1500,
    view: "/contact/details/1",
    edit: "/contact/details/1",
  },
  {
    id: 3,
    contact: "Club Connect",
    counts: 1500,
    view: "/contact/details/1",
    edit: "/contact/details/1",
  },
];

export default function Page({}: Props) {
  return (
    <div>
      <HomeHeader />
      <Summary
        data={{
          Upcoming_Events: 12,
          Total_RSVPs: 2420,
          Active_Events: 5,
          Engagement_Rate: 68,
        }}
      />
      <EventsTable events={events} columns={eventsColumns} />
      <div className="grid grid-cols-2  gap-5">
        <BroadcastTable
          broadcasts={broadcasts as Broadcast[]}
          columns={broadcastColumns}
        />
        <ContactTable
          contacts={contacts as Contact[]}
          columns={contactColumns}
        />
      </div>
    </div>
  );
}
