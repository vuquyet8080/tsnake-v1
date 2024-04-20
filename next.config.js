/**
 * @type {import('next').NextConfig}
 */
const config = {
	experimental: {
		externalDir: true,
	},
	env: {
		TWITTER_CLIENT_TOKEN: process.env.NEXT_PUBLIC_TWITTER_CLIENT_TOKEN,
		TWITTER_CONSUMER_SECRET:
			process.env.NEXT_PUBLIC_TWITTER_CONSUMER_SECRET,
		TWITTER_CLIENT_TOKEN: process.env.NEXT_PUBLIC_TWITTER_CLIENT_TOKEN,
		TWITTER_CLIENT_TOKEN_SECRET:
			process.env.NEXT_PUBLIC_TWITTER_CLIENT_TOKEN_SECRET,
		PUBLIC_SECRET: process.env.NEXT_PUBLIC_SECRET,
	},
	images: {
		domains: ["t.me"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "t.me",
				port: "",
				pathname: "/u/**",
			},
		],
	},
};

module.exports = config;
