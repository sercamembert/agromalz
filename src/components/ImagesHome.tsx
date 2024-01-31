import Image from "next/image";
import React from "react";

interface Props {}

const ImagesHome = () => {
  return (
    <section className="padding mb-[90px] md:mb-[80px] lg:mb-[104px] xl:mb-[130px] 3xl:mb-[140px] desktop:mb-[160px] ultra:mb-[240px]">
      <div className="container mx-auto flex flex-wrap">
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-[4px] lg:rounded-[11px] 2xl:rounded-[15px] ultra:rounded-[28px]"
                src="/images/gallery/500x300.png"
                width={500}
                height={300}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-[4px] lg:rounded-[11px] 2xl:rounded-[15px] ultra:rounded-[28px]"
                src="/images/gallery/501x301.png"
                width={501}
                height={301}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-full object-cover object-center block rounded-[4px] lg:rounded-[11px] 2xl:rounded-[15px] ultra:rounded-[28px]"
                src="/images/gallery/600x360.png"
                width={600}
                height={360}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-full object-cover object-center block rounded-[4px] lg:rounded-[11px] 2xl:rounded-[15px] ultra:rounded-[28px]"
                src="/images/gallery/601x361.png"
                width={601}
                height={361}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-[4px] lg:rounded-[11px] 2xl:rounded-[15px] ultra:rounded-[28px]"
                src="/images/gallery/502x302.png"
                width={502}
                height={302}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-[4px] lg:rounded-[11px] 2xl:rounded-[15px] ultra:rounded-[28px]"
                src="/images/gallery/503x303.png"
                width={503}
                height={303}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagesHome;
