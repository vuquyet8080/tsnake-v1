import NextAuth from "next-auth";

import { authOptions } from "../../../../constants/authOption";

declare module "next-auth" {
	interface Session {
		user: {
			id: string;
			name: string;
			image: string;
			email: string;
		};
	}
}


const handler = NextAuth(authOptions as any);
export { handler as GET, handler as POST };
