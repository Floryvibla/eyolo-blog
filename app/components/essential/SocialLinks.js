import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconRss,
} from "@tabler/icons-react";
import Link from "next/link";

const SocialLinks = ({ dark, isFooter, border }) => {
  return (
    <ul
      className={`flex flex-wrap gap-4 ${
        !isFooter
          ? `justify-center py-4 ${
              dark
                ? "border-[#627669] border-t-[1px]"
                : "border-dark/10 border-t-[1px]"
            }`
          : ""
      }`}
    >
      {/* <li>
        <Link
          href="https://facebook.com"
          target="_blank"
          aria-label="Confira meu Facebook"
          className={`inline-block rounded-full has-transition ${
            isFooter ? "p-[10px] md:p-3" : "p-3"
          } ${border ? "border border-border p-2" : ""} ${
            dark
              ? "text-white hover:bg-white hover:text-dark"
              : "hover:bg-dark hover:text-white"
          }`}
        >
          <IconBrandFacebook height="20" width="20" stroke={1.5} />
        </Link>
      </li> */}
      <li>
        <Link
          href="https://x.com/DevFlory"
          target="_blank"
          aria-label="Confira meu Twitter"
          className={`inline-block rounded-full has-transition ${
            isFooter ? "p-[10px] md:p-3" : "p-3"
          } ${border ? "border border-border p-2" : ""} ${
            dark
              ? "text-white hover:bg-white hover:text-dark"
              : "hover:bg-dark hover:text-white"
          }`}
        >
          <IconBrandTwitter height="20" width="20" stroke={2} />
        </Link>
      </li>
      <li>
        <Link
          href="https://instagram.com/florymignon"
          target="_blank"
          aria-label="Confira meu Instagram"
          className={`inline-block rounded-full has-transition ${
            isFooter ? "p-[10px] md:p-3" : "p-3"
          } ${border ? "border border-border p-2" : ""} ${
            dark
              ? "text-white hover:bg-white hover:text-dark"
              : "hover:bg-dark hover:text-white"
          }`}
        >
          <IconBrandInstagram height="20" width="20" stroke={2} />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.linkedin.com/in/florymignon"
          prefetch={false}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Confira meu Linkedin"
          className={`inline-block rounded-full has-transition ${
            isFooter ? "p-[10px] md:p-3" : "p-3"
          } ${border ? "border border-border p-2" : ""} ${
            dark
              ? "text-white hover:bg-white hover:text-dark"
              : "hover:bg-dark hover:text-white"
          }`}
        >
          <IconBrandLinkedin height="20" width="20" stroke={2} />
        </Link>
      </li>
    </ul>
  );
};

export default SocialLinks;
