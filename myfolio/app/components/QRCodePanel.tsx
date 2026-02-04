"use client";

import { QRCodeSVG } from "qrcode.react";

export function QRCodePanel({ value }: { value: string }) {
  return <QRCodeSVG value={value} size={120} />;
}
