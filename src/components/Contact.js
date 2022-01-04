import { SocialMedia } from "../data";

const Contact = () => {
  return (
    <footer className="text-center text-white bg-gray-800">
      <div className="container px-4 pt-4">
        <div className="flex flex-wrap justify-center pb-4">
          {SocialMedia.map((socialMedia) => (
            <a
              key={socialMedia}
              href={socialMedia.link}
              className="rounded-full ml-6 border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 hover:-translate-y-1 hover:scale-110 transition duration-300 ease-in-out w-9 h-9 m-1"
            >
              <svg
                className="w-4 h-full mx-auto"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d={socialMedia.icon} />
              </svg>
            </a>
          ))}
        </div>
        <div class="text-center bg-gray-800 pb-2">Created by Aldi Himawan</div>
      </div>
    </footer>
  );
};

export default Contact;
