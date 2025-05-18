import Image from 'next/image';

export const StorySection = () => {
  return (
    <section id="story" className="py-16 bg-gray-50 text-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-5xl mb-8">
              THIS IS <br />
              <span className="font-light">
                MY <strong className="font-bold">STORY</strong>
              </span>
            </h2>
            <p className="text-gray-700 mb-6">
              Rae Sany fell head over heels for the fashion world after winning
              a local pageant, which gave her modeling career the perfect runway
              takeoff. Now splitting her time between the New York, Philly and
              Orlando scene, she works her magic as a model, specializing in
              beauty, fashion editorials, and commercial print gigs.
            </p>
            <p className="text-gray-700">
              But modeling isn&apos;t her only hustle. Rae also creates content
              for brands, delivering engaging UGC that helps companies connect
              with their audience. Whether she&apos;s in front of the camera or
              behind the content strategy, she brings her unique perspective and
              creative vision to every project.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              width={600}
              height={400}
              src="https://k3gea9bzgia7xqlt.public.blob.vercel-storage.com/raesany/gallery/IMG_9385-VuEQVsyFu8Gipu3hUfXpiAqIbfDC1S.JPG"
              alt="New York skyline"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
