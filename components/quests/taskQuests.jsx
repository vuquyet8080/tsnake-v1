"use client";

// import { onActionAuthButton, onActionButton } from "@/helper/actionButton";
import { onActionAuthButton, onActionButton } from "../../helper/actionButton";
import {
	Accordion,
	AccordionBody,
	AccordionHeader,
} from "@material-tailwind/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import TaskButton from "../button/TaskButton";
import { isEmpty } from "lodash";

export default function TaskQuests({ quest }) {
	const [openAcc1, setOpenAcc1] = React.useState(false);
	const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
	const { data: session } = useSession();

	const handleClickHead = () => {
		if (isEmpty(session?.token) && quest?.type === "twitter") {
			return onActionAuthButton({
				auth: session?.toke,
				type: quest?.type,
			});
		}
		handleOpenAcc1();
	};
	return (
		<Accordion
			open={openAcc1 && session?.token?.provider === quest?.type}
			className=""
		>
			<AccordionHeader
				onClick={handleClickHead}
				className="px-0 py-0 m-0 border-none"
			>
				<div className="flex flex-row items-center w-full px-4 py-2 border rounded-md shadow-md gap-x-2 hover:cursor-pointer active:bg-gray-50">
					<div className="relative w-6 h-6">
						<Image
							src={`/images/${quest.type}.svg`}
							layout="fill"
							objectFit="cover"
							objectPosition="center"
							alt={quest.type}
						/>
					</div>
					<div className="text-sm font-semibold">
						{quest?.title || ""}
					</div>
				</div>
			</AccordionHeader>
			<AccordionBody className="flex flex-row gap-x-3">
				<TaskButton
					color="black"
					icon={quest.type}
					title={quest?.action}
					onClick={() => {
						onActionButton({
							action: quest?.action,
							data: quest,
							type: quest?.type,
							auth: session?.token,
						});
					}}
				/>
				<TaskButton
					variant="outlined"
					title={"Verify"}
					action={() => {}}
				/>
			</AccordionBody>
		</Accordion>
	);
}
