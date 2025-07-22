import Image from "next/image";

const DownloadApp = () => {
  return (
    <section className="w-full flex justify-center items-center py-10 px-4">
      <div className="w-full max-w-7xl">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/app.png"
            alt="Download Our App"
            width={1600}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
