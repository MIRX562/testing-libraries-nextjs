import React from "react";
import { Document, Page } from "@react-pdf/renderer";
import {
  Header,
  SubHeader,
  Title,
  Subtitle,
  BodyText,
  SmallText,
  BoldText,
  ItalicText,
  Paragraph,
  Quote,
  Link,
  Section,
  Table,
  Footer,
} from "./pdf-components";

const ShowcaseDocument: React.FC = () => {
  const tableData = [
    { Name: "John Doe", Age: 28, Occupation: "Developer" },
    { Name: "Jane Smith", Age: 32, Occupation: "Designer" },
    { Name: "Mike Johnson", Age: 40, Occupation: "Manager" },
  ];

  return (
    <Document title="test-pdf">
      <Page style={{ padding: 20 }}>
        {/* Header and Titles */}
        <Header>PDF Component Showcase</Header>
        <SubHeader>Subtitle for the Showcase</SubHeader>
        <Title>Section 1: Typography</Title>

        <Section>
          <Subtitle>Body Text Examples</Subtitle>
          <BodyText>
            This is a standard body text. It is used for general content.
          </BodyText>
          <SmallText>
            This is a small text for less emphasized information.
          </SmallText>
          <BoldText>
            This text is bold for highlighting important information.
          </BoldText>
          <ItalicText>
            This text is italicized for emphasis or stylistic purposes.
          </ItalicText>
        </Section>

        <Section>
          <Subtitle>Paragraph Example</Subtitle>
          <Paragraph>
            This is a paragraph component. It includes a first-line indent to
            make the content more readable and professional. You can reuse this
            component wherever paragraphs are needed.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>Quote and Link Examples</Subtitle>
          <Quote>
            “This is a styled quote component. Use it to emphasize statements or
            quotes in your document.”
          </Quote>
          <Link>https://example.com</Link>
        </Section>

        {/* Table Section */}
        <Title>Section 2: Table Component</Title>

        <Section>
          <Subtitle>Dynamic Table Example</Subtitle>
          <Table data={tableData} />
        </Section>

        {/* Footer Section */}
        <Footer>Page 1 Footer - Showcase Document</Footer>
      </Page>
    </Document>
  );
};

export default ShowcaseDocument;
