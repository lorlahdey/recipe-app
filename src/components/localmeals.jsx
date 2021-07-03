import { useState } from 'react'
import MealCard from './mealCard'

const LocalMeal = () => {
    
    const localmeals = {
        yoruba: [
            {
                id: 1,
                names:'Egusi soup',
                images:'https://buzznigeria.com/wp-content/uploads/2013/10/pounded-yam1-e1433336691247.jpg',
                description:
                    'Nigerian Egusi Soup is a soup thickened with ground melon seeds and contains leafy and other vegetables, often eaten with dishes like Pounded Yams.',
                preparationMode: [
                    'Place pumpkin seeds in a blender and blend for 30 to 40 seconds or until mixture is a powdery paste. Set aside.',
                    'Wash beef and cut into bite-size cubes. Season with salt. In large pot, heat oil over medium-high heat for 4 to 5 minutes. Add beef and saute for 3 to 5 minutes or until brown but not cooked through.',
                    'Place tomatoes, onions, and pepper in a blender and blend for about 30 seconds or until smooth. Add tomato mixture to meat, reduce heat to medium-low, and cover. Cook for 40 to 50 minutes or until meat is tender.',
                    'Add tomato sauce, water, and shrimp and simmer for 10 minutes.',
                    'Add spinach and ground pumpkin seeds and continue to simmer 10 minutes more.'
                ]
            },
            {
                id: 2,
                names:'Ewa Agoyin',
                images:'https://www.chefspencil.com/wp-content/uploads/Ewa-Agoyin.jpg',
                description:
                    'Ewa Agoyin simply means plain boiled soft mashed up beans eaten with spicy pepper sauce.',
                preparationMode: [
                    'Slice half of the red onion and combine the remaining half with the white onions, pepper, a cup of water and blend.',
                    'Set your cooking pot on heat, add the two cups of palm oil and allow to heat but don’t let it bleach. About 3 minutes should do it. All through the cooking process you don’t let it bleach. the red color is just what set’s it apart from the regular tomato stew.',
                    'Once the oil is heated you can add the sliced red onions. Fry the onion for about 3 minutes before adding the ground pepper/chillie, onions and water combination',
                    'Now you fry. This pepper sauce is not like the regular tomato stew so you would be frying for the next 15-25 minutes. In no time you will notice the sauce drying and turning dark. if it is not dark, it’s not ewa agoyin sauce.',
                    'Boil about 5 cups of water, add the beans and allow it to boil for about 5 minute, turn off the heat, wash and set aside.',
                    'Boil another 5 cups of water and start cooking the beans in it. You can add more water in-between. You want it really soft. Add a teaspoon of salt',
                    'Cook until the beans are really soft then go ahead and serve with the pepper sauce and agege bread.',
                    'You ask, why agege braed? Agege bread is a special soft and delicious bread that is made in Lagos, Nigeria. You can substitute with any other bread if you don’t live in Lagos Nigeria.'
                ]
            },
            {
                id: 3,
                names:'Moi moi',
                images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuYUAnns07l7FkgxFTKskYegGmalKDpKGcA&usqp=CAU',
                description:
                    'Moin Moin/Moi moi is a Nigerian Beans pudding cake. It is a versatile food that can go along with different meals, be it with your Jollof Rice, Bread, likewise it does not carry last with your garri. ',
                preparationMode: [
                    'Soak the beans for about one hour, peel, and remove the shaft.',
                    'Divide into three parts to blend; add water to the level of the beans when blending. Blend with the onions, red ball pepper, cayenne pepper, and scotch bonnet (atarodo). Blend into smooth paste.',
                    'Pour the beans paste into a large bowl to start adding the ingredients.',
                    'Add the vegetable oil first and mix properly into the paste.',
                    'Add seasoning cubes, grounded crayfish, and salt (I normally dissolve my seasoning cubes and salt in warm water before adding in the paste).',
                    'Add the shrimps and fish and mix everything together thoroughly.',
                    "If you're using the banana leaves, place your cooking pot on medium heat, add water to boil (Do not add too much water, you can add more if the water later dries out) Add some banana leaves to cover the water, because we want the water to steam the Moi-Moi from under the leaves.",
                    'Fold your banana leave into a cone shape and start adding the mixed beans paste. Add about 2-3 cooking spoons then add the boiled egg and neatly fold. Then drop in the pot on the heat.',
                    'Repeat this process until the last wrap.',
                    'Cover with some banana leaves before covering with the lid ( This allows for proper steaming).',
                    'Cook for 45 minutes and the Moimoi is done.',
                    "If you're using foil cups or the rubber cups for Moi-moi, distribute them in the cups and top with the boiled eggs and cover them with either the foil or the cups lids.",
                    'Place them in the oven or your steaming pot to cook for about 45 minutes.',
                    "Serve warm on it's own or as a side dish to other foods."
                ]
            },
            {
                id: 4,
                names:'Amala',
                images:'https://i1.wp.com/besthomediet.com/wp-content/uploads/2020/09/Amala-food-picture.jpg?fit=398%2C265&ssl=1',
                description:
                    'Àmàlà is a local indigenous Nigerian food, native to the Yoruba ethnic group in the western states of the country. It is made out of yam and/or cassava flour, or unripe plantain flour.',
                preparationMode: [
                    'Get your yam flour ready and boil your water',
                    'Add the yam flour gradually and stir using a wooden spatula until you get the thickness or firmness you want, stir vigorously to avoid lumps formation and burning',
                    'Once you have gotten a smooth, soft and even texture, add a little amount of water to boil for a minute then stir well and serve or you can wrap it in nylon till you are ready to eat.'
                ]
            },
            {
                id: 5,
                names:'Gbegiri (Beans soup)',
                images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMA6MBpnNTIAI58JASX3wyCbvm0qTgrquHOg&usqp=CAU',
                description:
                    'Gbegiri soup is a Yoruba (Western Nigerian) soup prepared with beans. It comes alive when you add Ewedu Soup and meat from Beef & Chicken stew. Trust me, this combination will surely tease your tastebuds.',
                preparationMode: [
                    'Put the peeled and soaked beans into a sizeable pot. Pour water to cover the beans and start cooking at medium heat.',
                    'While the beans is cooking, prepare the Ewedu Soup which is used to eat the Gbegiri Soup.',
                    'Cook the beans till they become so soft that it practically melts when you mash it with your fingers. This takes about 1 hour.',
                    'When the beans is well done and soft, blend it. It is not advisable to blend hot food in blenders with plastic jugs so if your blender has a plastic jug, seive the soft beans with a sieve that has a mire mesh.',
                    'Pour the beans into a pot and set back on the stove, add the smoked fish, salt, pepper, crayfish, stock cube and palm oil.',
                    'Cover the pot and cook at low heat for about 5 minutes or till the oil blends with the rest of the ingredients. This is when the oil changes from red to yellow.',
                    'Stir from time to time so it does not burn.'
                ]
            },
            {
                id: 6,
                names:'Abacha (African Salad)',
                images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJgsS11C8U9BxM12Iz6sDUFChnjJO7lqChg&usqp=CAU',
                description:
                    'Abacha is an Eastern Nigeria dish made using dried, shredded cassava. You can eat it as a snack or a full meal. There are many variations to making this salad, but the more ingredients you add, the tastier the dish is.',
                preparationMode: [
                    'Soak the abacha in cold water for 10 minutes until it softens, then pour boiling water over it and drain.',
                    'Rinse the ugba with warm water.',
                    'Dissolve the potash in water and sieve out the water. Stir the potash water with the palm oil in a pot until it forms a yellowish paste.',
                    'Place on heat and add the ground ehu, pepper, crayfish and seasoning.',
                    'Stir, then add crushed stock cubes, diced onions and ugba. Take off the heat.',
                    'Add the ogiri and mix, then add meat and fish.',
                    'Add the abacha and mix, allowing the ingredients to blend.',
                    'Add sliced utazi and salt to taste.',
                    'Garnish with chopped garden egg leaves and sliced onions.'
                ]
            },
            {
                id: 7,
                names:'Pounded Yam',
                images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLFbESILYIE77iSNpAH7NHL2OsqcWD9xJgw&usqp=CAU',
                description:
                    'Pounded yam is one of the many yam recipes in Nigeria. it is very delicious and also very popular. I like it best when it is served with egusi soup.',
                preparationMode: [
                    'Bring 1 3/4 cups water to a boil on high heat.',
                    'Turn the heat to medium and stir in the pounded yam flour.',
                    'Keep stirring until it is smooth and soft. If it is really thick, add some hot water. It will have a similar texture to polenta.',
                    'Serve the pounded yam on plates and serve with bowls of egusi soup.',
                    'Dip the pounded yam into the egusi soup.'
                ]
            },
            {
                id: 8,
                names:'Ofada Rice and Sauce',
                images:'https://i.pinimg.com/originals/cc/5a/6a/cc5a6abd672cf825a7eea16b496596d3.jpg',
                description:
                    'Ofada Rice and sauce is a Nigerian favourite. The combination of meats and peppers adds complex flavours that keeps everyone wanting more.',
                preparationMode: [
                    'Heat up water in a pot until it boils.',
                    'Rinse rice thoroughly with cold running water and add to pot of boiling water. Add salt and oil.',
                    'Cook for 35 minutes or until it’s ready.',
                    'Blend green tomatoes, peppers and onion. Place in a pot and boil for 15 minutes',
                    'Heat up a pot and add palm oil. Allow to bleach for 10 minutes - This means leaving it to heat up and smoke till it is almost similar to vegetable oil. After 10 minutes allow to cool a bit.',
                    'Add chopped onion, saute, then add the boiled tomato/pepper mixture.',
                    'Add salt, iru (locust beans), assorted meat and crayfish. Cover and allow to cook till oil floats to the top.',
                    'Add chicken stock, taste and add seasoning cube if necessary. Now you may add the cooked chicken.',
                    'Allow the ingredients to cook for 5 more minutes and simmer.',
                ]
            },
            {
                id: 9,
                names:'Akara (Beans cake)',
                images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRc7jh89xnAb2sJgibZej4VflGwWmoYUQ-g&usqp=CAU',
                description:
                    'Akara is a deep fried Nigerian Snack and breakfast meal made with ground de-hulled(peeled) brown or black-eyed beans and spices. Akara is also known as Acarajé/ Koose in Ghana or fried bean cake/ fried bean balls.',
                preparationMode: [
                    'Peel your beans and blend until you get a smooth but thick consistency.',
                    'Pour the blended mixture into a bowl, taste for salt and add a little if needed. Mix thoroughly for a few seconds to fluff up the mixture and set aside',
                    'Pour the vegetable oil into a deep pot or frying pan; the oil should be deep enough to cover an egg, that’s like 3 inches deep. Heat up the oil until hot,but not extremely hot, so that the Akara does not just cook on the outside without cooking on the inside.',
                    'Using a tablespoon, scoop the blended beans and drop it gently into the hot oil.',
                    'Fry the Akara until brown and make sure you flip it over so that both sides brown at the same time.',
                    'Transfer the Akara into a sieve lined with paper towel, to help absorb excess oil. Enjoy!',
                ]
            },
            {
                id: 10,
                names:'Oha Soup',
                images:'https://myrecipejoint.com/wp-content/uploads/2020/12/maxresdefault10.jpg',
                description:
                    'Ora (Oha) soup is native to the South Eastern Nigeria. It is a very traditional soup similar to the bitterleaf soup but cooked with Ora leaves.',
                preparationMode: [
                    'Put meat, kponmo and stock fish in a pot, add seasoning and onions, let simmer for 5 minutes, then put a little water, cover and let cook till meat is tender.',
                    'You can either add cocoyam while cooking the meat so it can cook together to save time or cook the cocoyam separately.',
                    'When it has cooked properly, add 2 cups of water then add palm oil, allow to cook for about ten minutes. (Remove cocoyam and pound in a mortar or blend using a blender or a food processor).',
                    'Add ground crayfish, ground pepper, salt and let cook for another seven minutes.',
                    'Add the blended/ pounded cocoyam paste or achi (before you add achi to your soup, make sure you dissolve it in a little water, if not your soup will cake up). Let the soup cook for about three minutes.',
                    'Add your Oziza first (Oziza leaves are stronger than Oha leaves), then add your Oha leaves.',
                    'Let it cook for one minute, then turn off the cooker.',
                    'Your delicious Oha soup is ready.',
                    'Serve with your preferred swallow (Eba, Pounded yam, Fufu, wheat, etc).'
                ]
            },
            {
                id: 11,
                names:'Pepper Soup',
                images:'https://afrotourism.com/wp-content/uploads/2015/10/Nigerian-Goat-meat-pepper-soup-1.jpg',
                description:
                    'If you are looking for an authentic African Goat meat pepper soup, this soup certainly delivers the big, bold African flavors you will love. It is a hearty African soup made with Goat meat cutlets or chunks, pepper soup spice and other beautiful condiments.',
                preparationMode: [
                    'Cut the Goat meat into cutlets. Then rinse thoroughly, transfer the meat into the Pot, add salt, Seasoning cube, habanero peppers and half of the Onion and cook for 30 minutes.',
                    'Add the pepper soup spice, red chili flakes, Ginger powder, the remaining grated onion, and crayfish. Leave it to cook for another 10 minutes.',
                    'Stir in the uziza leaves and let it simmer for another 5 minutes. Serve hot with Yam, Rice, Bread and more.'
                ]
            },
            {
                id: 12,
                names:'Yam Porrige',
                images:'https://i.ytimg.com/vi/hSEx5bc67Rc/maxresdefault.jpg',
                description:
                    'If you love yam, then this is a must-try recipe!. Yam pottage/Yam Porridge (Asaro) is a very delicious Yam recipe though it’s eaten by most tribes in Nigeria however, it is more common in the Yoruba speaking parts of Nigeria.',
                preparationMode: [
                    'Peel and cut the Yam into medium-sized chunks and rinse a couple of times',
                    'Put the Yams inside a Pot, add water just to the level of the Yams and let it cook for 15 minutes on medium to high heat',
                    'Add the pepper sauce palm oil, onions, crayfish, salt, and stock cubes, and allow it to cook for an additional 10 minutes on low heat.',
                    'Add the crabmeat (You can use whatever addition you prefer at this point like, Smoked Fish, Prawns, or smoked Turkey.',
                    'Mash the Yams with a Potato masher or a wooden spoon. I love to mash some yams and keep some chunks. Gives more texture!',
                    'Stir in the parsley (spinach, kale, or ugwu)',
                    'Allow it to simmer for an additional 3 to 5 minutes and enjoy while still hot!'
                    
                ]
            },
            {
                id: 13,
                names:'Efo Riro',
                images:'https://sisijemimah.com/wp-content/uploads/2015/06/20190728_121338.jpg',
                description:
                    'Efo means ”Green leafy vegetable” or ”spinach”, and riro, means ”to stir”. So basically, Efo riro simply means ”stirred leafy vegetable”. However, we just don’t stir this by itself, we stir it in a rich pepper sauce which is loaded with Meat, Crayfish, Dry Fish, and other Meat or Fish of Choice.',
                preparationMode: [
                    'Get all your ingredients together. The boiled Meat, Fish, Turkey, Chicken, or any other choice of protein.',
                    'Heat up the Oil. Simply add the Onion once the Oil is hot and while the Onion is cooking in the Oil, the palm oil too is cooking.',
                    'Fry the blended peppers',
                    'The sauce should be seasoned at this point with all those nice spices and condiments. Add the Meat, Stockfish, and dried Prawns or your choice of protein. Let it cook so that it can absorb all the yumminess of the sauce. Then, stir in the spinach.',
                    'Adjust the seasoning if there’s a need to. Remove from heat and serve.'
                ]
            },
            {
                id: 14,
                names:'Okpa di Oku, Okpa Wawa',
                images:'https://www.nigerianfoodtv.com/ezoimgfmt/1.bp.blogspot.com/-T6hOdiNJ1-U/Ud-mHvrBHqI/AAAAAAAABJQ/FR3P9CPJFzQ/s1600/okpa.jpg?ezimgfmt=rs:674x553/rscb3/ng:webp/ngcb3',
                description:
                    'Okpa is a traditional Nigerian food; very popular in the eastern parts of Nigeria  and tastes really good. It is made with Bambara flour. It has a unique taste that grows on you',
                preparationMode: [
                    'Pour the okpa  flour into a bowl, add the palm oil and mix thoroughly, until the flour changes from white to orange or yellow.',
                    'Next, add the warm water and mix thoroughly until there is no lump, but it shouldn’t be too watery.',
                    'Add the ground crayfish,stock cubes, onions, pepper and salt to taste.Mix thoroughly.',
                    'Pour the mixture into your container of choice and place in a pot of boiling water(just as you do with Moi Moi). Leave to boil for 45 minutes.',
                    'The Okpa should be ready after 45 minutes.But if you’re not sure, let it boil for 1hr.'
                ]
            },
            {
                id: 15,
                names:'Cassava Fufu',
                images:'https://i2.wp.com/media.premiumtimesng.com/wp-content/files/2016/11/14621242401_354756d277_b.jpg?resize=1022%2C570&ssl=1',
                description:
                    'Fufu is easy to make, yet so delicious. It is not eaten alone, and it is served with a form of rich and flavorful soup or stew such as egusi soup, okra soup, ewedu soup (Jute leaves), or light soup.',
                preparationMode: [
                    'Peel the skin of the cassava with a potato peeler or a knife.',
                    'Cut the peeled tuber into small cubes that can easily be processed in a blender.',
                    'Blend till a nice and smooth batter is formed.',
                    'Transfer it to a pot and stir vigorously until the fufu is thick and smooth, like a semi-solid paste.'
                ]
            }       
        ],


    }

    const [meals, setMeals] = useState(localmeals)

    return (
        <div className=''>
            <MealCard
                meals = {meals}
            />
        </div>
    )
}

export default LocalMeal
