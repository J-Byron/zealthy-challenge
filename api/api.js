import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_API_KEY
);

export const API = {
  getTickets: async () => {
    const { data, error } = await supabase.from("support_tickets").select();
    if (error) console.log(error);
    return data.sort((a, b) => a.status - b.status);
  },
  submitTicket: async ({ name, email, description }) => {
    const { error } = await supabase
      .from("support_tickets")
      .insert({ name, email, description });
    if (error) console.log(error);
  },
  updateStatus: async (id, newStatus) => {
    const { error } = await supabase
      .from("support_tickets")
      .update({ status: newStatus })
      .eq("id", id);
    if (error) console.log(error);
  },
};
