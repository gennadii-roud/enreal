export const packagesData = [
	{
		description: "Photo Only",
		coverage: [
			{number: "4", price: "1,200"},
			{number: "8", price: "1,600"},
			{number: "12", price: "2,100"},
		],
		includeList: [
			["150+ professionally edited photos", "Delivery within three days", "Round-trip flight, hotel included", "Speakers, branding, event atmosphere"],
			["350+ professionally edited photos", "Delivery within three days", "Round-trip flight, hotel included", "Official, networking, evening coverage"],
			["Up to twelve hours coverage", "500+ professionally edited photos", "Delivery within three days", "Same‑day curated 20-30 photo set"]
		],
		additionalFeatures: [
			{ name: "20-30 Express Photos Within 12 Hours", price: [150] },
			{ name: "Extra shooting time beyond the package limit", price: [150] },
			{ name: "Multi-Day Event Travel", price: [120] },
		]
	},
	{
		description: "Video Only",
		coverage: [
			{number: "4", price: "1100"},
			{number: "8", price: "1800"},
			{number: "12", price: "2500"},
		],
		includeList: [
			["Up to 4 hours", "Vertical reel Same DAY", "1 Aftermovie / Recap video", "Interviews / Testimonials", "EU, including travel expenses"],
			["Up to 8 hours", "Vertical reel Same DAY", "2x Aftermovie / Recap video", "Interviews / Testimonials", "RAW footage on request", "Drone", "EU, including travel expenses"],
			["Up to 12 hours", "Vertical reel Same DAY", "2x Aftermovie / Recap video", "Interviews / Testimonials", "RAW footage on request", "Drone", "EU, including travel expenses"]
		],
		additionalFeatures: [
			{ name: "Drone Shooting", price: [500] },
			{ name: "20-30 Express Photos Within 12 Hours", price: [150] },
			{ name: "Extra shooting time beyond the package limit", price: [150] },
			{ name: "Multi-Day Event Travel", price: [120] },
		]
	},
	{
		description: "Photo + Video",
		isPopular: true,
		note: "(save €500)",
		coverage: [
			{ number: "4 + 4", price: "2100" },
			{ number: "8 + 8", price: "3100" },
			{ number: "12 + 12", price: "4100" },
		],
		includeList: [
			[
				"150+ professionally edited photos",
				"Delivery within three days",
				"Round‑trip flight, hotel included",
				"Speakers, branding, event atmosphere",
				"Vertical reel Same DAY",
				"1 Aftermovie / Recap video",
				"Interviews / Testimonials",
				"EU, including travel expenses",
			],
			[
				"350+ professionally edited photos",
				"Delivery within three days",
				"Round‑trip flight, hotel included",
				"Official, networking, evening coverage",
				"Vertical reel Same DAY",
				"2x Aftermovie / Recap video",
				"Interviews / Testimonials",
				"RAW footage on request",
				"Drone",
				"EU, including travel expenses",
			],
			[
				"Up to twelve hours coverage",
				"500+ professionally edited photos",
				"Delivery within three days",
				"Same‑day curated 20-30 photo set",
				"Vertical reel Same DAY",
				"2x Aftermovie / Recap video",
				"Interviews / Testimonials",
				"RAW footage on request",
				"Drone",
				"EU, including travel expenses",
			]
		],
		additionalFeatures: [
			{ name: "Drone Shooting", price: [500] },
			{ name: "20-30 Express Photos Within 12 Hours", price: [150] },
			{ name: "Extra shooting time beyond the package limit", price: [150] },
			{ name: "Multi-Day Event Travel", price: [120] },
		]
	},
	{
		description: "Custom",
		label: "Price on Request",
		message: "Custom event coverage adapted to your needs, schedule, and goals.",
		coverage: [],
		includeList: [],
		additionalFeatures: []
	}
]