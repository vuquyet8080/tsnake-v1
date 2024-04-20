"use client";
import { signIn, useSession } from "next-auth/react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/authContext";

const TwitterLogin = () => {
	const { data: session, status } = useSession();
	const auth: any = useContext(AuthContext);

	useEffect(() => {
		if (!(status === "loading") && !session) void signIn("twitter");
		if (session) {
			window.close();
			auth.updateDataSocial("twitter", session);
		}
	}, [session, status]);

	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				position: "absolute",
				left: 0,
				top: 0,
				background: "white",
				zIndex: 10000,
			}}
		/>
	);
};

export default TwitterLogin;
