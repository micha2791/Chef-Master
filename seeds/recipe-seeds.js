const { Recipe } = require('../models');

const recipedata = [
  {
    title: 'Turkey Meatloaf', 
    ingredients: '1/4 cup plus 2 tbsp ketchup, I use organic, 2 tsp Worcestershire sauce, 1/2 small onion, 1 tsp olive oil, 1.3 lb 99% lean ground turkey, 1/2 cup seasoned whole wheat or gluten-free breadcrumbs, 1 large egg, 1 tsp marjoram, 1 teaspoon kosher salt',
    recipe_steps: 'Preheat the oven to 350F., In a small bowl combine 2 tbsp of the ketchup with Worcestershire sauce., In a small skillet, heat olive oil and onion on low heat until translucent, In a medium bowl combine the turkey, onion, breadcrumbs, egg, 1/4 cup ketchup, salt and marjoram., Place mixture into a loaf pan or shape into a loaf and place on a baking pan. Spoon sauce on top., Bake uncovered for 55-60 minutes, remove from oven and let it sit for 5 minutes before slicing.',
    category: 'Entree',
    image_url: 'http://git-cookin.herokuapp.com/images/turkey_meatloaf.jpg',
    user_id: 2
  },
  {
    title: 'Harvest Salad',
    ingredients: '½ cup chopped walnuts, 1 bunch spinach, rinsed and torn into bite-size pieces, ½ cup dried cranberries, ½ cup crumbled blue cheese, 2 medium whole (2-3/5" dia) (blank)s tomatoes, chopped, 1 avocado - peeled, pitted and diced , ½ red onion, thinly sliced, 2 tablespoons red raspberry jam (with seeds), 2 tablespoons red wine vinegar, ⅓ cup walnut oil, 1 pinch freshly ground black pepper to taste, 1 pinch salt to taste,',
    recipe_steps: 'Preheat oven to 375 degrees F (190 degrees C). Arrange walnuts in a single layer on a baking sheet. Toast in oven for 5 minutes, or until nuts begin to brown., In a large bowl, toss together the spinach, walnuts, cranberries, blue cheese, tomatoes, avocado, and red onion., In a small bowl, whisk together jam, vinegar, walnut oil, pepper, and salt. Pour over the salad just before serving, and toss to coat., ½ cup crumbled blue cheese, 2 medium whole (2-3/5" dia) (blank)s tomatoes, chopped, 1 avocado - peeled, pitted and diced , ½ red onion, thinly sliced, 2 tablespoons red raspberry jam (with seeds), 2 tablespoons red wine vinegar, ⅓ cup walnut oil, 1 pinch freshly ground black pepper to taste, 1 pinch salt to taste',
    category: 'Appetizers',
    image_url: 'http://git-cookin.herokuapp.com/images/salad.jpg',
    user_id: 3
  },
  {
    title: 'Cardamom Maple Salmon',
    ingredients: '1 ½ teaspoons salt, 1 teaspoon paprika,1 teaspoon ground cardamom, 1 teaspoon ground coriander, ½ teaspoon ground black pepper, ¼ cup grapeseed oil, 2 tablespoons maple syrup, 1 (2 pound) salmon fillet, cut into 3-inch pieces',
    recipe_steps: 'Stir salt paprika cardamom coriander and black pepper together in a bowl. Add oil and maple syrup and stir until evenly combined., Preheat a non-stick frying pan over medium-high heat about 350 degrees F (175 degrees C)., Dredge salmon pieces through the maple syrup mixture until evenly coated on all sides., Cook salmon in the preheated pan until fish flakes easily with a fork, 5 to 7 minutes per side.',
    category: 'Entree',
    image_url: 'http://git-cookin.herokuapp.com/images/cardamom_salmon.jpg',
    user_id: 1
  },
  {
    title: 'Balsamic Bruschetta',
    ingredients: '24 slices French baguette, 1 tablespoon butter, softened, 2 cups chopped fresh strawberries, ¼ cup white sugar, or as needed',
    recipe_steps: 'Preheat your ovens broiler. Spread a thin layer of butter on each slice of bread. Arrange bread slices in a single layer on a large baking sheet., Place bread under the broiler for 1 to 2 minutes, just until lightly toasted. Spoon some chopped strawberries onto each piece of toast, then sprinkle sugar over the strawberries., Place under the broiler again until sugar is caramelized, 3 to 5 minutes. Serve immediately.',
    category: 'Appetizers',
    image_url: 'http://git-cookin.herokuapp.com/images/bruschetta.jpg',
    user_id: 6
  },
  {
    title: 'Berry Pancakes',
    ingredients: '1 cup sifted self-rising flour, 1 cup milk, 1 egg, 2 tablespoons vegetable oil',
    recipe_steps: 'Beat eggs, oil, and milk together, and add to flour. Stir until combined., Heat a greased griddle until drops of water sprinkled on it evaporate noisily. Pour 1/8 to 1/4 cup batter onto the griddle. Turn over with a metal spatula when bubbles begin to form on top. Cook second side to a golden brown color.',
    category: 'Breakfast',
    image_url: 'http://git-cookin.herokuapp.com/images/berries_pancake.jpg',
    user_id: 4
  },
  {
    title: 'Asian Beef Noodle Soup',
    ingredients: '1 pound lean ground beef , 1 onion, chopped , 1 tablespoon minced garlic, 1 teaspoon ground ginger, 4 cups water, 1 medium head bok choy, chopped, 2 (3 ounce) packages beef flavored ramen noodles, 2 teaspoons vegetable oil , 2 tablespoons soy sauce, 4 (1/4 inch thick) slices Tomato, 4 slices Pickles, 1 teaspoon Mayonnaise',
    recipe_steps: 'Brown meat in a large skillet. Drain off fat, and rinse meat using a colander., Transfer meat to a large cooking pot. Stir in onion, garlic, and ginger. Add water, and bring soup to a boil. Stir in bok choy. Reduce heat ,and simmer for about 3 minutes., Stir in noodles. Simmer 3 minutes longer, or until bok choy and onions are crisp tender and noodles are soft. Stir in seasoning packets, oil, and soy sauce.',
    category: 'Entrée',
    image_url: 'http://git-cookin.herokuapp.com/images/noodle_soup.jpg',
    user_id: 7
  },
  {
    title: 'Potstickers',
    ingredients: '½ pound ground pork, 1 (4 ounce) can water chestnuts, drained and chopped, 1 (4 ounce) can shiitake mushrooms, drained and chopped, 2 tablespoons soy sauce, 2 tablespoons sesame oil, 1 tablespoon Sriracha sauce, 1 (12 ounce) package round dumpling wrappers',
    recipe_steps: 'Preheat an air fryer to 400 degrees F (200 degrees C)., Combine ground pork, water chestnuts, shiitake mushrooms, sesame oil, soy sauce, and Sriracha in a large skillet over medium-high heat. Cook until pork is no longer pink, about 6 minutes. Remove from heat and let sit until cool enough to handle., Lay out 8 dumpling wrappers on a clean work surface. Place a heaping teaspoonful of pork mixture in the middle of each wrapper. Pull both sides up like a taco and pinch the tops until sealed., Cook in batches in the pre-heated air fryer for 3 minutes. Use tongs to flip the potstickers and cook 3 minutes more. Transfer to a paper-towel lined plate. Repeat with remaining dumpling wrappers and filling.',
    category: 'Appetizers',
    image_url: 'http://git-cookin.herokuapp.com/images/potstickers.jpg',
    user_id: 8
  },
  {
    title: 'French Toast',
    ingredients: '¼ cup all-purpose flour, 1 cup milk, 1 pinch salt, 3 large eggs, 1/2 teaspoon ground cinnamon, 1 teaspoon vanilla extract, 1 tablespoon white sugar, 12 think slices bread',
    recipe_steps: 'Measure flour into a large mixing bowl. Slowly whisk in the milk. Whisk in the salt, eggs, cinnamon, vanilla extract and sugar until smooth., Heat a lightly oiled griddle or frying pan over medium heat., Soak bread slices in mixture until saturated. Cook bread on each side until golden brown. Serve hot.',
    category: 'Breakfast',
    image_url: 'http://git-cookin.herokuapp.com/images/french_toast.jpg',
    user_id: 5
  },
  {
    title: 'Mushroom Burgers',
    ingredients: '1 pound ground beef, ¼ cup Worcestershire sauce, ¼ cup Italian bread crumbs, ½ tablespoon steak sauce, ½ tablespoon liquid smoke flavoring, 4 slices sharp Cheddar cheese, 4 eaches hamburger buns, split',
    recipe_steps: 'Preheat an outdoor grill for medium-high heat and lightly oil the grate., Mix together in a bowl using your hands.  ',
    category: 'Entrée',
    image_url: 'http://git-cookin.herokuapp.com/images/meat_mushroom_burger.jpg',
    user_id: 5
  },
  {
    title: 'Bacon Burger',
    ingredients: '2 (1 pound) packages Farmland® Fresh Ground Pork, 2 tablespoons minced yellow onion, 2 teaspoons hot sauce, 1 pinch Kosher salt, 1 teaspoon Fresh cracked black pepper, 8 strips Smithfield® Hickory Smoked Bacon, cooked crisp and cut in half, 8 thick slices sharp Cheddar cheese , 4 eaches brioche buns, split horizontally, ¼ cup Lettuce, 4 (1/4 inch thick) slices Tomato, 4 slices Pickles, 1 teaspoon Mayonnaise,',
    recipe_steps: 'Heat charcoal or gas grill to medium. Combine ground pork, onion and hot sauce; mix well with hands. Shape into 4 (8-oz.) burgers; season with salt and pepper on both sides., Grill burgers until internal temperature reaches 165 degrees F., turning after 8 minutes. Place 2 slices cheese on top of each burger to melt., Lightly toast brioche buns on grill, being careful not to burn. Place pork burgers on buns; top each with 4 half strips of bacon., Serve with lettuce, tomato, pickles, mayonnaise and mustard on the side., 1 teaspoon Fresh cracked black pepper, 8 strips Smithfield® Hickory Smoked Bacon, cooked crisp and cut in half, 8 thick slices sharp Cheddar cheese , 4 eaches brioche buns, split horizontally, ¼ cup Lettuce, 4 (1/4 inch thick) slices Tomato, 4 slices Pickles, 1 teaspoon Mayonnaise',
    category: 'Entrée',
    image_url: 'http://git-cookin.herokuapp.com/images/bacon_burger.jpg',
    user_id: 5
  },
  {
    title: 'Ice Cream Cake',
    ingredients: '1 (18.25 ounce) package chocolate cake mix, ½ gallon chocolate ice cream, softened',
    recipe_steps: 'Prepare cake according to package directions; bake in a 9x13 inch baking dish and cool completely., Use ice cream that comes in a rectangular carton. Remove the carton and, using a piece of string or dental floss, cut the ice cream in half lengthwise (long side to long side) and place the two layers side by side on a piece of waxed paper., Place the cooled cake over the ice cream. Trim the cake and ice cream so that the edges match., Place a board or serving platter over the cake, hold onto the waxed paper and board, and flip the ice cream cake over. Remove the waxed paper and smooth out the seam between the ice cream slabs., Cover with waxed paper and freeze until very firm. Decorate as desired.',
    category: 'Dessert',
    image_url: 'http://git-cookin.herokuapp.com/images/ice_cream_cake.jpg',
    user_id: 5
  },
  {
    title: 'Chocolate Cake',
    ingredients: '2 cups all-purpose flour, 2 cups white sugar, 3/4 cup unsweetened cocoa powder, 1 teaspoon baking soda, ½ teaspoon salt, 2 large eggs eggs, 1 cup cold brewed coffee, 1 cup milk, ½ cup vegetable oil, 2 teaspoons vinegar',
    recipe_steps: 'Preheat oven to 350 degrees F (175 degrees C). Grease and flour a 9x13-inch pan., In a large bowl, combine the flour, sugar, cocoa, baking soda, baking powder and salt. Make a well in the center and pour in the eggs, coffee, milk, oil and vinegar. Mix until smooth; the batter will be thin. Pour the batter into the prepared pan., Bake in the preheated oven for 35 to 40 minutes, or until a toothpick inserted into the center of the cake comes out clean. Allow to cool.',
    category: 'Dessert',
    image_url: 'http://git-cookin.herokuapp.com/images/chocolate_cake.jpg',
    user_id: 5
  }
];

const seedRecipe = () => Recipe.bulkCreate(recipedata);

module.exports = seedRecipe;