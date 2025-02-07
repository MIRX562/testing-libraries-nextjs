// pdfStyles.js
import { StyleSheet } from "@react-pdf/renderer";

const pdfStyles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  section: {
    marginTop: 10,
    // padding: 10,
    // border: "1 solid #ddd",
  },

  // Typography
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "left",
    color: "#555",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
    color: "#111",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "semibold",
    marginBottom: 6,
    color: "#444",
  },
  paragraph: {
    fontSize: 12,
    color: "#000",
    lineHeight: 1.6,
    textAlign: "justify",
    textIndent: 20, //
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 12,
    color: "#000",
    lineHeight: 1.6,
  },
  smallText: {
    fontSize: 10,
    color: "#666",
    lineHeight: 1.4,
  },
  boldText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
  },
  italicText: {
    fontSize: 12,
    fontStyle: "italic",
    color: "#444",
  },
  quote: {
    fontSize: 14,
    fontStyle: "italic",
    marginVertical: 8,
    paddingLeft: 10,
    borderLeft: "4 solid #ccc",
    color: "#555",
  },
  link: {
    fontSize: 12,
    color: "#1a0dab",
    textDecoration: "underline",
  },

  // Lists
  list: {
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 20,
  },
  listItem: {
    marginBottom: 5,
    fontSize: 12,
    color: "#000",
  },

  // Tables
  table: {
    width: "auto",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCellHeader: {
    padding: 5,
    fontSize: 12,
    fontWeight: "bold",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  tableCell: {
    padding: 5,
    fontSize: 12,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ddd",
  },

  // Images
  image: {
    margin: 10,
    width: "auto",
    maxHeight: 150,
  },

  // Footer
  footer: {
    fontSize: 10,
    textAlign: "center",
    color: "#888",
    marginTop: 20,
  },
});

export default pdfStyles;
