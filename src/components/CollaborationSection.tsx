import Image from 'next/image';

export const CollaborationSection = () => {
  return (
    <section id="collaborations" className="py-16 bg-white text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl mb-16 text-center">
          COLLABORATIONS <span className="font-light">WITH</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {['VERSED', 'SPIRIT', 'JW PEI', 'FINISH LINE', 'ADORE ME'].map(
            (brand, index) => (
              <div
                key={index}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  width={200}
                  height={80}
                  src={`https://picsum.photos/200/80`}
                  alt={`${brand} logo`}
                  className="h-12 object-contain"
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
