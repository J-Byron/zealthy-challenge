import { SupportTicket } from "./SupportTicket";

const TicketContainer = ({ tickets, onStatusChange, toggleModal }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      {tickets.map(({ name, email, description, status, id }) => {
        return (
          <SupportTicket
            name={name}
            email={email}
            description={description}
            status={status}
            onStatusChange={(newStatus) => onStatusChange(id, newStatus)}
            onReplyClick={() => toggleModal(id)}
            key={id}
          />
        );
      })}
    </div>
  );
};

export default TicketContainer;
