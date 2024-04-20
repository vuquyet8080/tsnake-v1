"use client";

// import { onActionAuthButton, onActionButton } from "@/helper/actionButton";
import {
	Accordion,
	AccordionBody,
	AccordionHeader,
	Dialog,
	DialogBody,
	DialogHeader,
} from "@material-tailwind/react";
import { LoginButton } from "@telegram-auth/react";
import { isEmpty } from "lodash";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import { onActionAuthButton, onActionButton } from "../../helper/actionButton";
import TaskButton from "../button/TaskButton";

export default function TaskQuests({ quest }) {
	const [isShowModal, setShowModal] = useState(false);

	const handleOpen = () => setShowModal(!isShowModal);

	const [openAcc1, setOpenAcc1] = React.useState(false);
	const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
	const { data: session } = useSession();
	console.log("session", session);

	const handleClickHead = () => {
		if (isEmpty(session?.token) && quest?.type === "twitter") {
			setShowModal(true);
			// return onActionAuthButton({
			// 	auth: session?.toke,
			// 	type: quest?.type,
			// });
		}
		if (isEmpty(session?.token) && quest?.type === "telegram") {
			setShowModal(true);
		}
		handleOpenAcc1();
	};

	const handleLoginWithPlatform = () => {
		onActionAuthButton({
			auth: session?.toke,
			type: quest?.type,
		});
		setShowModal(false);
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
					onClick={() => {}}
				/>
			</AccordionBody>
			<Dialog size="sm" open={isShowModal} handler={handleOpen}>
				<DialogHeader>Kết nối với tài khoản của bạn</DialogHeader>
				<DialogBody>
					Tài khoản {quest?.type} của bạn chưa được đăng nhập, vui
					lòng đăng nhập!
				</DialogBody>
				<div className="flex items-center justify-center w-full pb-6">
					{["twitter"].includes(quest?.type) && (
						<TaskButton
							color="black"
							icon={quest.type}
							// variant="outlined"
							title={`Đăng nhập với ${quest?.type}`}
							onClick={handleLoginWithPlatform}
						/>
					)}
					{quest?.type === "telegram" && (
						<LoginButton
							botUsername={"Tsnake_fun_bot"}
							onAuthCallback={(data) => {
								console.log("data", data);
								setShowModal(false);

								// signIn("telegram-login", {
								// 	redirect: false,
								// });
							}}
						/>
					)}
				</div>
			</Dialog>
		</Accordion>
	);
}
