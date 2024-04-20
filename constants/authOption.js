import TwitterProviders from "next-auth/providers/twitter";

export const authOptions = {
	providers: [
		TwitterProviders({
			// from Consumer Keys
			clientId: "kGRf2bwqTfpUDSx6bExHRuTz4",
			clientSecret: "zVumVPn3t7TNkZjvOFUv1Txc1DjtQLN01lYkZiHsdtEWSMd0XQ",
		}),

		// CredentialsProvider({
		// 	id: "telegram-login",
		// 	name: "Telegram Login",
		// 	credentials: {},
		// 	async authorize(credentials, req) {
		// 		console.log("credentials", credentials)
		// 		console.log("req",req)
		// 		const validator = new AuthDataValidator({
		// 			botToken: `${process.env.BOT_TOKEN}`,
		// 		});

		// 		const data = objectToAuthDataMap(req.query || {});
		// 		console.log("data",data)
		// 		const user = await validator.validate(data);
		// 		console.log("user",)

		// 		if (user.id && user.first_name) {
		// 			const returned = {
		// 				id: user.id.toString(),
		// 				email: user.id.toString(),
		// 				name: [user.first_name, user.last_name || ""].join(" "),
		// 				image: user.photo_url,
		// 			};

		// 			try {
		// 				await createUserOrUpdate(user);
		// 			} catch {
		// 				console.log(
		// 					"Something went wrong while creating the user."
		// 				);
		// 			}

		// 			return returned;
		// 		}
		// 		return null;
		// 	},
		// }),
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
