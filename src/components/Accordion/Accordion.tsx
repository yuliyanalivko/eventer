import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
  StyledEngineProvider,
} from "@mui/material";
import { useCallback, useState } from "react";
import "./Accordion.scss";
import cross from "assets/images/icons/cross-xs.svg";

type AccordionProps = {
  data: AccordionData[];
};

interface AccordionData {
  id: string;
  header: string;
  body: string;
}

export function Accordion({ data }: AccordionProps) {
  const [expanded, setExpanded] = useState<string | false>("");

  const handleChange = useCallback(
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    },
    []
  );

  return (
    <StyledEngineProvider injectFirst>
      <div className="accordion">
        {data.map((elem, index) => (
          <MuiAccordion
            key={elem.id}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary>
              <div className="flex justify-between w-full">
                <span>{elem.header}</span>
                <img src={cross} alt="expand" />
              </div>
            </AccordionSummary>
            <AccordionDetails className="bg-red">
              <p>{elem.body}</p>
            </AccordionDetails>
          </MuiAccordion>
        ))}
      </div>
    </StyledEngineProvider>
  );
}
