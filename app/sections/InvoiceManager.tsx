import { Heading, Paragraph } from "~/components/Elements";
import { ImageSelector } from "~/components/ImageSelector";

export function InvoiceManager() {
  return (
    <>
      <Heading as="h3">Invoice manager</Heading>
      <Paragraph>
        I created this app to generate and manage the invoices for my current
        job. Two coworkers are also using it. You can add multiple companies,
        have a custom invoice number generator for each company, export PDF and
        send via Gmail directly from the app.
      </Paragraph>

      <ImageSelector
        images={[
          "invoice/empty-state.png",
          "invoice/invoice-list.png",
          "invoice/invoice-detail.png",
          "invoice/invoice-email.png",
        ]}
      />
    </>
  );
}
