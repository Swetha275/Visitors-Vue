import Head from "next/head";
import { Inter } from "@next/font/google";
import Login from "./Login";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        ></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <title>Visitors MS</title>
      </Head>
      <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <Link href="/" className="nav-title">
            <p>
              <Image src="/logo.png" alt="logo" width={50} height={50}></Image>
              <span className="mobileTitle" style={{ fontSize: 30, paddingLeft: 20 }}>
                Visitors-Vue
              </span>
            </p>
          </Link>
          <Link href="./"></Link>
        </div>
      </div>
      <Login />
    </>
  );
}
