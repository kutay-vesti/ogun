import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Hzbutton from "../components/hzbutton";
import FullscreenButton from "../components/fullScreenButton";

const HzList = [
  140,
  232,
  423,
  693,
  830,
  856,
  893,
  934,
  1026,
  1139,
  1304,
  1904,
  3835,
]

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sinüs Dalga Sayacı</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <h1></h1>
        <div className="container  items-center justify-center gap-12 px-4 py-16 grid grid-cols-4 ">
          {
            HzList.map((hz) => {
              return (
                <Hzbutton hz={hz} key={hz}></Hzbutton>
              )
            })
          }

        </div>
        <FullscreenButton />
        <h1 className="text-white text-2xl font-bold">Click buttons to try Cymatic!</h1>
      </main >
    </>
  );
};

export default Home;
