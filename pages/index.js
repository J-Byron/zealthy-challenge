import Head from "next/head";
import { SupportTicketSubmissionForm } from "@components/SupportTicketSubmissionForm";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zealthy Challenge - Submission</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SupportTicketSubmissionForm />
      </main>
    </div>
  );
}
