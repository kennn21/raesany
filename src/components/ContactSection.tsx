import { LINK_SOCIAL_INSTAGRAM } from '@/constants/links';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl mb-16 text-center">
          <strong>TOUCH</strong> <span className="font-light">BASE</span>
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center">
            <p className="text-2xl italic mb-8 text-center md:text-left">
              I&apos;D LOVE TO HEAR FROM YOU
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href={LINK_SOCIAL_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              {/* <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                    fill="currentColor"
                  />
                </svg>
              </a> */}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name *"
                className="w-full p-3 bg-black text-white"
                required
              />
              <input
                type="email"
                placeholder="Email *"
                className="w-full p-3 bg-black text-white"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 bg-black text-white"
              />
              <textarea
                placeholder="Message"
                className="w-full p-3 bg-black text-white h-32"
              ></textarea>
              <button type="submit" className="bg-black text-white px-6 py-2">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
