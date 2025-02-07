"use client";
import { PDFViewer } from "@react-pdf/renderer";
import React from "react";
import MyPDFDocument from "./pdf-document";

export default function page() {
  return (
    <PDFViewer className="w-full h-screen">
      <MyPDFDocument />
    </PDFViewer>
  );
}
b nb     