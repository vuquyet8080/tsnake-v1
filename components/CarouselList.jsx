import { Carousel, Typography, Button } from "@material-tailwind/react";

import Image from "next/image";
import React from "react";

export default function CarouselList() {
	return (
		<div className="h-32 overflow-hidden rounded-xl sm:h-64 xl:h-80 2xl:h-96">
			<Carousel
				className="rounded-xl"
				loop={true}
				transition={{ type: "tween", duration: 0.5 }}
				autoplay={true}
			>
				<div className="relative w-full h-full ">
					<Image
						src="/banners/banner-1.png"
						layout="fill"
						objectFit="contain"
						objectPosition="center"
						alt="banner"
					/>
				</div>

				<div className="relative w-full h-full">
					<Image
						src="/banners/banner-3.png"
						layout="fill"
						objectFit="contain"
						objectPosition="center"
						alt="banner"
					/>
				</div>
			</Carousel>
		</div>
	);
}
