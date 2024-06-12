import { Html, Head, Main, NextScript } from "next/document";
import {Layout} from "@/components/layout";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
        <body>
        <Layout/>

        <Main/>
        <footer className="bg-gray-800 py-6 px-4 md:px-8  ">
            <div className="container mx-auto text-center text-gray-400">
                &copy; 2024 Phasmophobia. Todos los derechos reservados.
            </div>
        </footer>
        <NextScript/>

        </body>
    </Html>
  );
}
