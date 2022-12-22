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
                value: "AGILITYPOINTS", displayName: "Agilitypoints",
            }, {
                value: "AIRDAMAGEBONUS", displayName: "Airdamagebonus",
            }, {
                value: "AIRDEFENSE", displayName: "Airdefense",
            }, {
                value: "ATTACKSPEED", displayName: "Attackspeed",
            }, {
                value: "DAMAGEBONUS", displayName: "Damagebonus",
            }, {
                value: "DAMAGEBONUSRAW", displayName: "Damagebonusraw",
            }, {
                value: "DEFENSEPOINTS", displayName: "Defensepoints",
            }, {
                value: "DEXTERITYPOINTS", displayName: "Dexteritypoints",
            }, {
                value: "EARTHDAMAGEBONUS", displayName: "Earthdamagebonus",
            }, {
                value: "EARTHDEFENSE", displayName: "Earthdefense",
            }, {
                value: "EMERALDSTEALING", displayName: "Emeraldstealing",
            }, {
                value: "EXPLODING", displayName: "Exploding",
            }, {
                value: "FIREDAMAGEBONUS", displayName: "Firedamagebonus",
            }, {
                value: "FIREDEFENSE", displayName: "Firedefense",
            }, {
                value: "GATHER_SPEED", displayName: "Gather Speed",
            }, {
                value: "GATHER_XP_BONUS", displayName: "Gather Xp Bonus",
            }, {
                value: "HEALTHBONUS", displayName: "Healthbonus",
            }, {
                value: "HEALTHREGEN", displayName: "Healthregen",
            }, {
                value: "HEALTHREGENRAW", displayName: "Healthregenraw",
            }, {
                value: "INTELLIGENCEPOINTS", displayName: "Intelligencepoints",
            }, {
                value: "JUMP_HEIGHT", displayName: "Jump Height",
            }, {
                value: "LIFESTEAL", displayName: "Lifesteal",
            }, {
                value: "LOOT_QUALITY", displayName: "Loot Quality",
            }, {
                value: "LOOTBONUS", displayName: "Lootbonus",
            }, {
                value: "MANAREGEN", displayName: "Manaregen",
            }, {
                value: "MANASTEAL", displayName: "Manasteal",
            }, {
                value: "POISON", displayName: "Poison",
            }, {
                value: "REFLECTION", displayName: "Reflection",
            }, {
                value: "SOULPOINTS", displayName: "Soulpoints",
            }, {
                value: "SPEED", displayName: "Speed",
            }, {
                value: "SPELLDAMAGE", displayName: "Spelldamage",
            }, {
                value: "SPELLDAMAGERAW", displayName: "Spelldamageraw",
            }, {
                value: "STAMINA", displayName: "Stamina",
            }, {
                value: "STAMINA_REGEN", displayName: "Stamina Regen",
            }, {
                value: "STRENGTHPOINTS", displayName: "Strengthpoints",
            }, {
                value: "THORNS", displayName: "Thorns",
            }, {
                value: "THUNDERDAMAGEBONUS", displayName: "Thunderdamagebonus",
            }, {
                value: "THUNDERDEFENSE", displayName: "Thunderdefense",
            }, {
                value: "WATERDAMAGEBONUS", displayName: "Waterdamagebonus",
            }, {
                value: "WATERDEFENSE", displayName: "Waterdefense",
            }, {
                value: "XPBONUS", displayName: "Xpbonus",
            },]
    },]
}, {
    stylingOptions: {width: "21rem"}, filterObjects: [{
        displayName: "Profession", selectOptions: [

            {
                selected: true, value: "", displayName: "Any",
            }, {
                value: "ALCHEMISM", displayName: "Alchemism"
            }, {
                value: "ARMOURING", displayName: "Armouring"
            }, {
                value: "COOKING", displayName: "Cooking"
            }, {
                value: "JEWELING", displayName: "Jeweling"
            }, {
                value: "SCRIBING", displayName: "Scribing"
            }, {
                value: "TAILORING", displayName: "Tailoring"
            }, {
                value: "WEAPONSMITHING", displayName: "Weaponsmithing",
            }, {
                value: "WOODWORKING", displayName: "Woodworking",
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