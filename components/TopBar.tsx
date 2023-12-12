import { sponsors } from "@/data/sponsors";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "./SectionTitle";

export const TopBar = () => (
  <div className="flex h-16 items-center justify-between bg-black-400 px-6 py-3 transition-all hover:border-primary hover:text-primary">
    <div className="flex items-center justify-between gap-5">
      <SectionTitle text="Sponsored by" />
      {sponsors.map((s, i) => (
        <Link
          key={i}
          href={s.url}
          title={s.name}
          aria-label={s.name}
          className="grayscale hover:grayscale-0"
        >
          <Image src={s.logoSmall} alt={s.name} width={25} height={25} />
        </Link>
      ))}
    </div>
    <div className="flex items-center gap-7">
      <Link
        href="/about"
        className="text-sm font-bold uppercase tracking-wider text-gray-900 hover:opacity-80 dark:text-silver-500"
      >
        About
      </Link>
      <Link
        href="https://github.com/protontypes/climate-triage"
        rel="noopener noreferrer"
        target="_blank"
        className="hidden text-sm font-bold uppercase tracking-wider text-gray-900 hover:opacity-80 dark:text-silver-500 sm:inline"
      >
        Repository <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ms-1" />
      </Link>
      {/* <Socials /> */}
    </div>
  </div>
);
