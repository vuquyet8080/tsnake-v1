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
					onMouseLeave={() => setCopied(false)}
					onClick={() => {
						copy(link);
						setCopied(true);
					}}
				>
					<div className="flex flex-row items-center justify-center gap-x-1">
						{copied ? (
							<CheckIcon className="w-5 h-5 text-white" />
						) : (
							<DocumentDuplicateIcon className="w-5 h-5 text-white" />
						)}
						<div className="ml-2 font-semibold">Copy link</div>
					</div>
				</Button>
			</div>
		</div>
	);
}