import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import { faqSampleData } from "sample-data/faq";
import MainTabLayout from "layouts/MainTabLayout";

const AccordionContainer = styled(Paper)`
  margin: 20px 20px 0 20px;
`;

export default function FAQPage() {
  return (
    <MainTabLayout>
      <Typography variant="h5" component="h5">
        Frequently Asked Questions
      </Typography>
      <AccordionContainer elevation={3}>
        {faqSampleData.map((faq) => (
          <Accordion key={faq.question}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </AccordionContainer>
    </MainTabLayout>
  );
}
