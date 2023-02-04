import Image from "next/image";
import { Roboto_Mono } from "@next/font/google";

const robotoHeading = Roboto_Mono({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <div>
        <Image
          className="w-full h-auto z-0"
          src="/images/test.jpg"
          alt="Home Page Banner"
          fill
          quality={100}
          priority
        />
        <div className="relative flex justify-center items-start h-screen mt-10">
          <p className={`${robotoHeading.className} text-7xl`}>
            Olá, meu nome é Bruno
          </p>
        </div>
      </div>
    </main>
  );
}
