import { WavesBackground } from "@/components/backgrounds/waves";
import { FormDialog } from "@/components/form-dialog";

export default function Home() {
  return (
    <div>
      <div className="h-[600px] w-full relative -mt-[var(--navbar-height)]">
        <div className="bg-[url('/landing-bg.jpg')] h-full w-full"></div>
        <div className="bg-gradient-to-b from-zinc-950/0 to-80% to-red-600 w-full h-full absolute top-0 flex justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-16 text-center">
            <h1 className="text-4xl text-primary-foreground">
              Lorem, ipsum dolor sit amet
            </h1>

            <FormDialog />
          </div>
        </div>
      </div>
      <div className="w-full pb-20">
        <WavesBackground
          aria-hidden="true"
          width="100%"
          className="min-w-full"
        />
      </div>

      <div className="flex flex-col gap-40 pb-20 container">
        <div id="por-que" className="flex justify-between items-center gap-4">
          <div className="flex flex-col gap-2 max-w-[50%]">
            <h2 className="text-3xl">Por que?</h2>

            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              a facere obcaecati accusamus inventore. Magnam ad sint laudantium,
              asperiores blanditiis iure odit praesentium corrupti, nisi sunt
              commodi odio temporibus perferendis.
            </p>
          </div>
          <div className="bg-zinc-300 rounded-md min-w-[400px] min-h-[300px] mr-20"></div>
        </div>

        <div id="como" className="flex justify-between items-center gap-4">
          <div className="bg-zinc-300 rounded-md min-w-[400px] min-h-[300px] ml-20"></div>

          <div className="flex flex-col gap-2 max-w-[50%]">
            <h2 className="text-3xl">Como?</h2>

            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              a facere obcaecati accusamus inventore. Magnam ad sint laudantium,
              asperiores blanditiis iure odit praesentium corrupti, nisi sunt
              commodi odio temporibus perferendis.
            </p>
          </div>
        </div>

        <div
          id="nosso-time"
          className="flex flex-col justify-center items-center gap-12 pt-10"
        >
          <div className="flex flex-col gap-2 max-w-[50%] text-center">
            <h2 className="text-3xl">Nosso Time</h2>

            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              a facere obcaecati accusamus inventore. Magnam ad sint laudantium,
              asperiores blanditiis iure odit praesentium corrupti, nisi sunt
              commodi odio temporibus perferendis.
            </p>
          </div>

          <div className="bg-zinc-300 rounded-md min-w-[400px] min-h-[300px]"></div>
        </div>
      </div>

      <footer className="mt-10 bg-zinc-100 h-navbar">
        <div className="container flex justify-between items-center h-full gap-16">
          <p>lorem ipsum</p>
          <p className="font-semibold">IBMR - 2024</p>
        </div>
      </footer>
    </div>
  );
}
