import { Info, Play } from "lucide-react";
import Button from "../ui/Button";

interface BannerProps {
  title: string;
  overview: string;
  image: string;
  onMoreInfo?: () => void;
}

function Banner({ title, overview, image, onMoreInfo }: BannerProps) {
  return (
    <section
      className="relative h-[70vh] bg-cover bg-center bg-no-repeat md:h-screen"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Layer 2a: fade into the page at the bottom */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-black/60"
      />

      {/* Layer 2b: darken the left side so text is readable */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-black/70 to-transparent"
      />

      {/* Layer 3: content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-4 pb-16 md:px-12 md:pb-40">
        <h1 className="max-w-xl text-4xl font-bold text-white md:text-6xl">
          {title}
        </h1>

        <p className="mt-4 line-clamp-3 max-w-md text-sm text-gray-200 md:max-w-xl md:text-lg">
          {overview}
        </p>

        <div className="mt-6 flex gap-3">
          <Button label="Play" icon={<Play className="h-5 w-5 fill-black" />} />
          <Button
            label="More Info"
            variant="secondary"
            icon={<Info className="h-5 w-5" />}
            onClick={onMoreInfo}
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
