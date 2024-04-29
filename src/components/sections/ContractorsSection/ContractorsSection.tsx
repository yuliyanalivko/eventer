import { Card } from "components/Card/Card";
import { contractors } from "./contractors";
import { Box } from "@mui/material";

export function ContractorsSection() {
  return (
    <section className="py-section-y-sm bg-grey-500">
      <h2 className="h2 mb-16 max-w-[460px]">подберем лучших подрядчиков</h2>

      <Box className="grid grid-cols-2 gap-x-6 gap-y-6 lg:grid-cols-3 xl:grid-cols-4">
        {contractors.map((contractor, index) => (
          <Card title={contractor.title} text={contractor.text} key={index} />
        ))}
      </Box>
    </section>
  );
}
