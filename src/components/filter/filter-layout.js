export const INGREDIENTS_FILTER_LAYOUT = [{
    stylingOptions: {width: "15rem"}, filterObjects: [{
        displayName: "Name", inputType: "text", ref: {},
    }]
}, {
    stylingOptions: {width: "5rem"}, filterObjects: [{
        displayName: "Tier", inputType: "number", ref: {},
    }]
}, {
    stylingOptions: {width: "21rem"}, filterObjects: [{
        displayName: "MinLevel", inputType: "number", ref: {},
    }, {
        displayName: "MaxLevel", inputType: "number", ref: {},
    },]
}, {
    stylingOptions: {width: "21rem"}, filterObjects: [{
        displayName: "Modifier", selectOptions: [// TODO: fill this array up with possible select options with an API query
            {
                selected: true, value: "", displayName: "Any",
            }, {
                value: "health", displayName: "Health",
            }]
    },]
}, {
    stylingOptions: {width: "21rem"}, filterObjects: [{
        displayName: "Profession", selectOptions: [// TODO: fill this array up with possible select options with an API query
            {
                selected: true, value: "", displayName: "Any",
            }, {
                value: "armouring", displayName: "Armouring",
            }, {
                value: "tailoring", displayName: "Tailoring",
            }, {
                value: "woodworking", displayName: "Woodworking",
            }, {
                value: "scribing", displayName: "Scribing",
            },]
    },]
}];

export const ITEM_FILTER_LAYOUT = [{
    stylingOptions: {width: "15rem"}, filterObjects: [{
        displayName: "Name", inputType: "text", ref: {},
    }]
}, {
    stylingOptions: {width: "15rem"}, filterObjects: [{
        displayName: "Ingredient", inputType: "text", ref: {},
    }]
}, {
    stylingOptions: {width: "15rem"}, filterObjects: [{
        displayName: "Owner", inputType: "text", ref: {},
    },]
}, {
    stylingOptions: {width: "15rem"}, filterObjects: [{
        displayName: "Type", selectOptions: [
            {
                selected: true, value: "", displayName: "Any",
            }, {
                value: "helmet", displayName: "Helmet",
            }, {
                value: "chestplate", displayName: "Chestplate",
            }, {
                value: "leggings", displayName: "Leggings",
            }, {
                value: "boots", displayName: "Boots",
            }, {
                value: "spear", displayName: "Spear",
            }, {
                value: "dagger", displayName: "Dagger",
            }, {
                value: "bow", displayName: "Bow",
            }, {
                value: "wand", displayName: "Wand",
            }, {
                value: "relik", displayName: "Relik",
            }, {
                value: "ring", displayName: "Ring",
            }, {
                value: "bracelet", displayName: "Bracelet",
            }, {
                value: "necklace", displayName: "Necklace",
            }, {
                value: "potion", displayName: "Potion",
            }, {
                value: "scrolls", displayName: "Scrolls",
            }, {
                value: "food", displayName: "Food",
            },]
    },]
},];