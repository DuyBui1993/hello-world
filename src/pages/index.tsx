import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/Button";
import { TypoParagraph } from "@/components/Typo";
import {DownloadButton} from "@/components/DownloadButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <p>Hello</p>

      <Button>a b xc button</Button>
      <TypoParagraph fontSize={40}>hello world</TypoParagraph>
        <DownloadButton/>
    </div>
  );
}
