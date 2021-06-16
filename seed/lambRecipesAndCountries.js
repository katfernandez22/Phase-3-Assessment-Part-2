const db = require("../db");
const LambRecipe = require("../models/lambRecipes");
const OriginCountry = require("../models/originCountry");

db.on("error", console.error.bind(console, "MongoDB Connection Error!"));

const main = async () => {
  const lambRecipes = [
    {
      title: "Real-Deal Xinjiang Cumin Lamb",
      origin_country: originCountry1._id,
      ingredients: "lamb, chili flakes, chili peppers, ginger, garlic, sesame seeds",
      picture: "https://omnivorescookbook.com/cumin-lamb/",
    },
    {
      title: "Date and Apricot Lamb Tagine",
      origin_country: originCountry2._id,
      ingredients: "lamb, moroccan spice mix, apricot, ginger, honey, butter",
      picture: "https://www.australianlamb.com.au/recipes/date-and-apricot-lamb-tagine/#",
    },
    {
      title: "Lamb Stew with Coriander and Orange",
      origin_country: originCountry3._id,
      ingredients: "lamb, flour, black pepper, garlic, carrots, orange, butter beans",
      picture: "https://www.nzspringlamb.com/lamb-stew-with-coriander-orange/",
    },
    {
      title: "Kuzu Tandır",
      origin_country: originCountry4._id,
      ingredients: "lamb, lemon, bay leaves, rosemary sprigs, black pepper, olive oil",
      picture: "https://www.thespruceeats.com/turkish-roasted-lamb-kuzu-tandir-3274297",
    },
    {
      title: "Lamb Shanks with Cardamom and Orange",
      origin_country: originCountry5._id,
      ingredients: "lamb, garlic, ginger, raisins, orange, almonds, white wine, chili flakes",
      picture: "https://www.williams-sonoma.com/recipe/algerian-lamb-shanks-with-cardamom-and-orange.html",
    },
  ];
  await LambRecipe.insertMany(lambRecipes);
  console.log("Created many lamb recipes");
};

const originCountry1 = await new OriginCountry({
  name: "China",
});
originCountry1.save();

const originCountry2 = await new OriginCountry({
  name: "Australia",
});
originCountry2.save();

const originCountry3 = await new OriginCountry({
  name: "New Zealand",
});
originCountry3.save();

const originCountry4 = await new OriginCountry({
  name: "Turkey",
});
originCountry4.save();

const originCountry5 = await new OriginCountry({
  name: "Algeria",
});
originCountry5.save();

const run = async () => {
  await main();
  db.close();
};
run();