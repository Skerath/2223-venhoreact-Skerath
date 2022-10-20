let INGREDIENTS = [
    {
        id: 1,
        name: "Leather",
        modifiers: [
            {
                name: "walk speed",
                min: 0.02,
                max: 0.02
            },
            {
                name: "durability",
                min: -17,
                max: -17
            }
        ],
        level_requirement: 2,
        uses: ["Armouring", "Tailoring"]
    },
    {
        id: 2,
        name: "Brown Mushroom",
        modifiers: [
            {
                name: "health",
                min: 3,
                max: 5
            },
            {
                name: "durability",
                min: -36,
                max: -36
            }
        ],
        level_requirement: 1,
        uses: ["Armouring"]
    },
    {
        id: 3,
        name: "Crawler Eye",
        modifiers: [
            {
                name: "walk speed",
                min: 0.03,
                max: 0.05
            },
            {
                name: "durability",
                min: -54,
                max: -54
            }
        ],
        level_requirement: 2,
        uses: ["Alchemism"]
    }
]

module.exports = {INGREDIENTS};