import Head from "next/head";
import { ResponseModal } from "@components/ResponseModal";
import TicketContainer from "@components/TicketContainer";
import { API } from "../api/api";
import { useState } from "react";

const AdminPage = ({ tickets: initialTickets }) => {
  const [tickets, setTickets] = useState(initialTickets);
  const [showModal, setShowModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState();

  const handleStatusChange = async (id, newStatus) => {
    await API.updateStatus(id, newStatus);
    const newTickets = await API.getTickets();
    setTickets(newTickets);
  };

  const handleReplyModalToggleWith = (ticketId) => {
    setShowModal(!showModal);
    const ticket = tickets.filter(({ id }) => id === ticketId)[0];
    setSelectedTicket(ticket);
  };

  return (
    <div>
      <Head>
        <title>Zealthy Challenge - Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TicketContainer
          tickets={tickets}
          onStatusChange={handleStatusChange}
          toggleModal={handleReplyModalToggleWith}
        />
        {showModal && (
          <ResponseModal
            ticket={selectedTicket}
            toggleModal={() => setShowModal(!showModal)}
          />
        )}
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  const tickets = await API.getTickets();
  return {
    props: {
      tickets,
    },
  };
}

export default AdminPage;
