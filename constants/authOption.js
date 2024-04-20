import TwitterProviders from "next-auth/providers/twitter";

export const authOptions = {
	providers: [
		TwitterProviders({
			// from Consumer Keys
			clientId: "kGRf2bwqTfpUDSx6bExHRuTz4",
			clientSecret: "zVumVPn3t7TNkZjvOFUv1Txc1DjtQLN01lYkZiHsdtEWSMd0XQ",
		}),
	],
	secret: process.env.PUBLIC_SECRET,
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			if (account.provider === "twitter" && user) {
				account.user = user;
				account.profile = profile;
				account.user = user;
				account.email = email;
				account.credentials = credentials;

				return true;
			}
		},

		async jwt({ token, account, user }) {
			console.log("user", user);
			if (account) {
				if (account.provider === "twitter") {
					token.twitterData = account;
					token.provider = account.provider;
				}
			}

			return token;
		},
		async session({ session, token }) {
			return { session, token };
		},
	},
};
