import Image from 'next/image';

export const InstagramSection = () => {
  return (
    <section id="instagram" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl mb-16 text-center text-black">
          <strong>@RAESANY</strong> <span className="font-light">ON INSTA</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <div key={item} className="overflow-hidden">
              <Image
                width={300}
                height={300}
                src={`https://picsum.photos/300/300`}
                alt={`Instagram post ${item}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
