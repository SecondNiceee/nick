import React from "react";
import { TGitHubLink } from "../model/TypeProject";

const GitHubLink = ({ link }: { link: TGitHubLink }) => {
  if (typeof link === "object") {
    return (
      <div className="flex flex-col gap-2">
        <a
          href={link?.frontend}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl break-words cursor-pointer"
        >
          Git Hub Front :{" "}
          <span className="text-[#00D4FF] underline">{"Ссылка на git фронт."}</span>
        </a>
        <a
          href={link?.backend}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl break-words cursor-pointer"
        >
          Git Hub Back :{" "}
          <span className="text-[#00D4FF] underline">{"Ссылка на git бэк"}</span>
        </a>
      </div>
    );
  }
  return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl break-words cursor-pointer"
        >
          Git Hub : <span className="text-[#00D4FF] underline">{"Ссылка на git фронт"}</span>
        </a>

  );
};

export default GitHubLink;
