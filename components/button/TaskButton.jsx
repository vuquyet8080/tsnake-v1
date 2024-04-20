"use client";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

export default function TaskButton({
	icon,
	title,
	onClick = () => {},
	...props
}) {
	return (
		<Button
			size="sm"
			{...props}
			onClick={() => {
				onClick();
			}}
		>
			<div className="flex flex-row gap-x-2 ">
				{icon && (
					<div className="relative w-5 h-5">
						<Image
							src={`/images/${icon}.svg`}
							layout="fill"
							objectFit="cover"
							objectPosition="center"
							alt="button"
						/>
					</div>
				)}
				<div className="text-sm font-medium">{title}</div>
			</div>
		</Button>
	);
}
