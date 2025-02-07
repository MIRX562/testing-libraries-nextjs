import React, { ReactNode } from "react";
import { View, Text } from "@react-pdf/renderer";
import pdfStyles from "./styles";

export const Table = ({ data }) => {
  if (!data || data.length === 0) {
    return <Text style={pdfStyles.bodyText}>No data available</Text>;
  }

  // Extract table headers from the first object's keys
  const headers = Object.keys(data[0]);

  return (
    <View style={pdfStyles.table}>
      {/* Table Header */}
      <View style={[pdfStyles.tableRow, { backgroundColor: "#f0f0f0" }]}>
        {headers.map((header, index) => (
          <Text key={index} style={[pdfStyles.tableCellHeader, { flex: 1 }]}>
            {header}
          </Text>
        ))}
      </View>

      {/* Table Body */}
      {data.map((row, rowIndex) => (
        <View key={rowIndex} style={pdfStyles.tableRow}>
          {headers.map((key, cellIndex) => (
            <Text key={cellIndex} style={[pdfStyles.tableCell, { flex: 1 }]}>
              {row[key]?.toString() || ""}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};

// Define props interface
interface TextProps {
  children: ReactNode;
}

interface SectionProps {
  children: ReactNode;
}

// Header Component
export const Header: React.FC<TextProps> = ({ children }) => (
  <Text style={pdfStyles.header}>{children}</Text>
);

// SubHeader Component
export const SubHeader: React.FC<TextProps> = ({ children }) => (
  <Text style={pdfStyles.subHeader}>{children}</Text>
);

// Title Component
export const Title: React.FC<TextProps> = ({ children }) => (
  <Text style={pdfStyles.title}>{children}</Text>
);

// Subtitle Component
export const Subtitle: React.FC<TextProps> = ({ children }) => (
  <Text style={pdfStyles.subtitle}>{children}</Text>
);

// BodyText Component
export const BodyText: React.FC<TextProps> = ({ children }) => (
  <Text style={pdfStyles.bodyText}>{children}</Text>
);

// SmallText Component
export const SmallText: React.FC<TextProps> = ({ children }) => (
  <Text style={pdfStyles.smallText}>{children}</Text>
);

// BoldText Component
export const BoldText: React.FC<TextProps> = ({ children }) => (
  <Text style={pdfStyles.boldText}>{children}</Text>
);

// ItalicText Component
export const ItalicText: React.FC<TextProps> = ({ children }) => (
  <Text style={pdfStyles.italicText}>{children}</Text>
);

// Paragraph Component (Indented)
export const Paragraph: React.FC<TextProps> = ({ children }) => (
  <Text style={pdfStyles.paragraph}>{children}</Text>
);

// Quote Component
export const Quote: React.FC<TextProps> = ({ children }) => (
  <Text style={pdfStyles.quote}>{children}</Text>
);

// Link Component
export const Link: React.FC<TextProps> = ({ children }) => (
  <Text style={pdfStyles.link}>{children}</Text>
);

// Section Wrapper
export const Section: React.FC<SectionProps> = ({ children }) => (
  <View style={pdfStyles.section}>{children}</View>
);

// Section Wrapper
export const Footer: React.FC<SectionProps> = ({ children }) => (
  <View style={pdfStyles.footer}>{children}</View>
);
