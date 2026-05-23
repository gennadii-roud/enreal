export const packagesData = [
	{
		description: "Photo Only",
		coverage: [
			{number: "4", price: "1200"},
			{number: "8", price: "1600"},
			{number: "12", price: "2100"},
		],
		includeList: [
			["150+ edited photos", "Delivery within three days", "Travel costs included",],
			["350+ edited photos", "Delivery within three days", "Travel costs included",],
			["500+ edited photos", "Delivery within three days", "Travel costs included"]
		],
		additionalFeatures: [
			{ name: "30 photos in 12 hours", price: [150] },
			{ name: "+1 shooting hour", price: [150] },
			{ name: "+1 shooting day", price: [1400] },
		]
	},
	{
		description: "Video Only",
		coverage: [
			{number: "4", price: "1100"},
			{number: "8", price: "1800"},
			{number: "12", price: "2100"},
		],
		includeList: [
			["Vertical reel same day", "1 aftermovie / recap video", "Interviews / testimonials", "Travel costs included"],
			["Vertical reel same day", "2x aftermovie / recap video", "Interviews / testimonials", "Travel costs included", "RAW footage on request"],
			["Vertical reel same day", "2x aftermovie / recap video", "Interviews / testimonials", "Travel costs included", "RAW footage on request"]
		],
		additionalFeatures: [
			{ name: "Drone shooting", price: [300] },
			{ name: "+1 shooting hour", price: [150] },
			{ name: "+1 shooting day", price: [1400] },
		]
	},
	{
		description: "Photo + Video",
		isPopular: true,
		note: "(save €200)",
		coverage: [
			{ number: "4", price: "2100" },
			{ number: "8", price: "3200" },
			{ number: "12", price: "4000" },
		],
		includeList: [
			[
			"150+ edited photos", "Delivery within three days", "Travel costs included", "Vertical reel same day", "1 aftermovie / recap video", "Interviews / testimonials", "RAW footage on request", "Travel costs included"
			],
			[
			"350+ edited photos", "Delivery within three days", "Travel costs included", "Vertical reel same day", "1 aftermovie / recap video", "Interviews / testimonials", "RAW footage on request", "Travel costs included"

			],
			[
			"500+ edited photos", "Delivery within three days", "Travel costs included", "Vertical reel same day", "1 aftermovie / recap video", "Interviews / testimonials", "RAW footage on request", "Travel costs included"

			]
		],
		additionalFeatures: [
			{ name: "Drone shooting", price: [300] },
			{ name: "30 photos in 12 hours", price: [150] },
			{ name: "+1 shooting hour", price: [300] },
			{ name: "+1 shooting day", price: [2000] },
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