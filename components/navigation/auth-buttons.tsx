"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LoginButton } from "@telegram-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ReloadIcon, ExitIcon } from "@radix-ui/react-icons";

import { useSession, signIn, signOut } from "next-auth/react";

export default function SignInButton({ botUsername }: { botUsername: string }) {
	const { data: session, status } = useSession();

	if (status === "loading") {
		return <ReloadIcon className="w-6 h-6 animate-spin" />;
	}

	if (status === "authenticated") {
		return (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<div>
						<Avatar>
							<AvatarImage
								src={session.user?.image ?? "/default.webp"}
								alt="@shadcn"
							/>
							<AvatarFallback>
								{session.user?.name}
							</AvatarFallback>
						</Avatar>
					</div>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="w-56">
					<DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Test 1</DropdownMenuItem>
					<DropdownMenuItem disabled>Test 2</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem onClick={() => signOut()}>
						<ExitIcon className="w-4 h-4 mr-2" />
						Sign out
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		);
	}

	return (
		<LoginButton
			botUsername={botUsername}
			onAuthCallback={(data) => {
				console.log("data", data);
				signIn("telegram-login", { callbackUrl: "/" }, data as any);
			}}
		/>
	);
}
