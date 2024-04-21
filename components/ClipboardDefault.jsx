import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import React from "react";
import { useCopyToClipboard } from "usehooks-ts";

export function ClipboardDefault({ link = "https://tsnake.vercel.app/" }) {
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = React.useState(false);

  return (
    <div>
      <div className="flex items-center gap-x-4">
        <Button
          className="px-3 py-2.5 md:px-5 md:py-3"
          onMouseLeave={() => setCopied(false)}
          onClick={() => {
            copy(link);
            setCopied(true);
          }}
        >
          <div className="flex flex-row items-center justify-center gap-x-1">
            {copied ? (
              <CheckIcon className="w-5 h-5 text-white min-w-5 min-h-5" />
            ) : (
              <DocumentDuplicateIcon className="w-5 h-5 text-white min-w-5 min-h-5" />
            )}
            <div className="ml-2 text-[10px] font-semibold md:text-md min-w-max">
              Copy link
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
}
