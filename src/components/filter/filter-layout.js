const INGREDIENTS_FILTER_LAYOUT = [{
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


export default INGREDIENTS_FILTER_LAYOUT;