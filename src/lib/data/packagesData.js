export const packagesData = [
	{
		description: "Photo Only",
		coverage: [
			{number: "4", price: "950"},
			{number: "8", price: "1500"},
			{number: "12", price: "2000"},
		],
		includeList: [
			["150+ edited photos", "Delivery within three days", "Travel costs included",],
			["350+ edited photos", "Delivery within three days", "Travel costs included",],
			["500+ edited photos", "Delivery within three days", "Travel costs included"]
		],
		additionalFeatures: [
			{ name: "30 photos in 12 hours", price: [150] },
			{ name: "Extra 2 hours coverage", price: [300] },
			{ name: "Extra shooting day", price: [1200] },
		    { name: "Second photographer", price: [1600] },
		]
	},
	{
		description: "Video Only",
		coverage: [
			{number: "4", price: "1100"},
			{number: "8", price: "1500"},
			{number: "12", price: "2000"},
		],
		includeList: [
			["Vertical reel same day", "1 aftermovie / recap video", "Interviews / testimonials", "Travel costs included"],
			["Vertical reel same day", "2x aftermovie / recap video", "Interviews / testimonials", "Travel costs included", "RAW footage on request"],
			["Vertical reel same day", "2x aftermovie / recap video", "Interviews / testimonials", "Travel costs included", "RAW footage on request"]
		],
		additionalFeatures: [
			{ name: "Drone coverage", price: [300] },
			{ name: "Extra 2 hours coverage", price: [300] },
			{ name: "Extra shooting day", price: [1200] },
		]
	},
	{
		description: "Photo + Video",
		isPopular: true,
		note: "(save €150)",
		coverage: [
			{ number: "4", price: "1950" },
			{ number: "8", price: "2850" },
			{ number: "12", price: "3850" },
		],
		includeList: [
			[
			"150+ edited photos", "Delivery within three days", "Vertical reel same day", "1 aftermovie / recap video", "Interviews / testimonials", "RAW footage on request", "Travel costs included"
			],
			[
			"350+ edited photos", "Delivery within three days", "Vertical reel same day", "1 aftermovie / recap video", "Interviews / testimonials", "RAW footage on request", "Travel costs included"

			],
			[
			"500+ edited photos", "Delivery within three days", "Vertical reel same day", "1 aftermovie / recap video", "Interviews / testimonials", "RAW footage on request", "Travel costs included"

			]
		],
		additionalFeatures: [
			{ name: "Drone coverage", price: [300] },
			{ name: "30 photos in 12 hours", price: [150] },
			{ name: "Extra 2 hours coverage", price: [600] },
			{ name: "Extra shooting day", price: [2400] },
			{ name: "Second photographer", price: [1600] },
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