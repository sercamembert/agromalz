import Gallery from "@/components/Gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria Agro-Malz: Zobacz zdjęcia z naszego gospodarstwa",
  description:
    "Odkryj urok naszych pól przez galerię zdjęć Agro-Malz. Zanurz się w świat pełen świeżości i naturalnego piękna naszych warzyw. Zainspiruj się naturą!",
};

const page = () => {
  return (
    <div className="padding pt-[100px] 2xl:pt-[120px] desktop:pt-[140px] min-h-screen">
      <Gallery />
    </div>
  );
};

export default page;
