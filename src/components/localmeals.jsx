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
                    'Peel and cut the Yam into medium-sized chunks and rinse a couple of times',
                    'Put the Yams inside a Pot, add water just to the level of the Yams and let it cook for 15 minutes on medium to high heat'
                ]
            },
            {
                id: 3,
                names:'Moi moi',
                images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuYUAnns07l7FkgxFTKskYegGmalKDpKGcA&usqp=CAU',
                description:
                    'Moin Moin/Moi moi is a Nigerian Beans pudding cake. It is a versatile food that can go along with different meals, be it with your Jollof Rice, Bread, likewise it does not carry last with your garri. ',
                preparationMode: [
                    'Peel and cut the Yam into medium-sized chunks and rinse a couple of times',
                    'Put the Yams inside a Pot, add water just to the level of the Yams and let it cook for 15 minutes on medium to high heat'
                ]
            },
            {
                id: 4,
                names:'Amala',
                images:'https://i1.wp.com/besthomediet.com/wp-content/uploads/2020/09/Amala-food-picture.jpg?fit=398%2C265&ssl=1',
                description:
                    'Àmàlà is a local indigenous Nigerian food, native to the Yoruba ethnic group in the western states of the country. It is made out of yam and/or cassava flour, or unripe plantain flour.',
                preparationMode: [
                    'Peel and cut the Yam into medium-sized chunks and rinse a couple of times',
                    'Put the Yams inside a Pot, add water just to the level of the Yams and let it cook for 15 minutes on medium to high heat'
                ]
            },
            {
                id: 5,
                names:'Gbegiri (Beans soup)',
                images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMA6MBpnNTIAI58JASX3wyCbvm0qTgrquHOg&usqp=CAU',
                description:
                    'Gbegiri soup is a Yoruba (Western Nigerian) soup prepared with beans. It comes alive when you add Ewedu Soup and meat from Beef & Chicken stew. Trust me, this combination will surely tease your tastebuds.',
                preparationMode: [
                    'Peel and cut the Yam into medium-sized chunks and rinse a couple of times',
                    'Put the Yams inside a Pot, add water just to the level of the Yams and let it cook for 15 minutes on medium to high heat'
                ]
            },
            {
                id: 6,
                names:'Abacha (African Salad)',
                images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJgsS11C8U9BxM12Iz6sDUFChnjJO7lqChg&usqp=CAU',
                description:
                    'Abacha is an Eastern Nigeria dish made using dried, shredded cassava. You can eat it as a snack or a full meal. There are many variations to making this salad, but the more ingredients you add, the tastier the dish is.',
                preparationMode: [
                    'Peel and cut the Yam into medium-sized chunks and rinse a couple of times',
                    'Put the Yams inside a Pot, add water just to the level of the Yams and let it cook for 15 minutes on medium to high heat'
                ]
            },
            {
                id: 7,
                names:'Pounded Yam',
                images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLFbESILYIE77iSNpAH7NHL2OsqcWD9xJgw&usqp=CAU',
                description:
                    'Pounded yam is one of the many yam recipes in Nigeria. it is very delicious and also very popular. I like it best when it is served with egusi soup.',
                preparationMode: [
                    'Peel and cut the Yam into medium-sized chunks and rinse a couple of times',
                    'Put the Yams inside a Pot, add water just to the level of the Yams and let it cook for 15 minutes on medium to high heat'
                ]
            },
            {
                id: 8,
                names:'Ofada Rice',
                images:'https://i.pinimg.com/originals/cc/5a/6a/cc5a6abd672cf825a7eea16b496596d3.jpg',
                description:
                    'Ofada Rice and sauce is a Nigerian favourite. The combination of meats and peppers adds complex flavours that keeps everyone wanting more.',
                preparationMode: [
                    'Peel and cut the Yam into medium-sized chunks and rinse a couple of times',
                    'Put the Yams inside a Pot, add water just to the level of the Yams and let it cook for 15 minutes on medium to high heat'
                ]
            },
            {
                id: 9,
                names:'Akara (Beans cake)',
                images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRc7jh89xnAb2sJgibZej4VflGwWmoYUQ-g&usqp=CAU',
                description:
                    'Akara is a deep fried Nigerian Snack and breakfast meal made with ground de-hulled(peeled) brown or black-eyed beans and spices. Akara is also known as Acarajé/ Koose in Ghana or fried bean cake/ fried bean balls.',
                preparationMode: [
                    'Peel and cut the Yam into medium-sized chunks and rinse a couple of times',
                    'Put the Yams inside a Pot, add water just to the level of the Yams and let it cook for 15 minutes on medium to high heat'
                ]
            },
            {
                id: 10,
                names:'Oha Soup',
                images:'https://myrecipejoint.com/wp-content/uploads/2020/12/maxresdefault10.jpg',
                description:
                    'Ora (Oha) soup is native to the South Eastern Nigeria. It is a very traditional soup similar to the bitterleaf soup but cooked with Ora leaves.',
                preparationMode: [
                    'Peel and cut the Yam into medium-sized chunks and rinse a couple of times',
                    'Put the Yams inside a Pot, add water just to the level of the Yams and let it cook for 15 minutes on medium to high heat'
                ]
            },
            {
                id: 11,
                names:'Pepper Soup',
                images:'https://afrotourism.com/wp-content/uploads/2015/10/Nigerian-Goat-meat-pepper-soup-1.jpg',
                description:
                    'If you are looking for an authentic African Goat meat pepper soup, this soup certainly delivers the big, bold African flavors you will love. It is a hearty African soup made with Goat meat cutlets or chunks, pepper soup spice and other beautiful condiments.',
                preparationMode: [
                    'Peel and cut the Yam into medium-sized chunks and rinse a couple of times',
                    'Put the Yams inside a Pot, add water just to the level of the Yams and let it cook for 15 minutes on medium to high heat'
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
                    'Put the Yams inside a Pot, add water just to the level of the Yams and let it cook for 15 minutes on medium to high heat'
                ]
            },
            {
                id: 13,
                names:'Efo Riro',
                images:'https://sisijemimah.com/wp-content/uploads/2015/06/20190728_121338.jpg',
                description:
                    'Efo means ”Green leafy vegetable” or ”spinach”, and riro, means ”to stir”. So basically, Efo riro simply means ”stirred leafy vegetable”. However, we just don’t stir this by itself, we stir it in a rich pepper sauce which is loaded with Meat, Crayfish, Dry Fish, and other Meat or Fish of Choice.',
                preparationMode: [
                    'Peel and cut the Yam into medium-sized chunks and rinse a couple of times',
                    'Put the Yams inside a Pot, add water just to the level of the Yams and let it cook for 15 minutes on medium to high heat'
                ]
            },
            {
                id: 14,
                names:'Okpa di Oku, Okpa Wawa',
                images:'https://www.nigerianfoodtv.com/ezoimgfmt/1.bp.blogspot.com/-T6hOdiNJ1-U/Ud-mHvrBHqI/AAAAAAAABJQ/FR3P9CPJFzQ/s1600/okpa.jpg?ezimgfmt=rs:674x553/rscb3/ng:webp/ngcb3',
                description:
                    'Okpa is a traditional Nigerian food; very popular in the eastern parts of Nigeria  and tastes really good. It is made with Bambara flour. It has a unique taste that grows on you',
                preparationMode: [
                    'Peel and cut the Yam into medium-sized chunks and rinse a couple of times',
                    'Put the Yams inside a Pot, add water just to the level of the Yams and let it cook for 15 minutes on medium to high heat'
                ]
            },
            {
                id: 15,
                names:'Cassava Fufu',
                images:'https://i2.wp.com/media.premiumtimesng.com/wp-content/files/2016/11/14621242401_354756d277_b.jpg?resize=1022%2C570&ssl=1',
                description:
                    'Fufu is easy to make, yet so delicious. It is not eaten alone, and it is served with a form of rich and flavorful soup or stew such as egusi soup, okra soup, ewedu soup (Jute leaves), or light soup.',
                preparationMode: [
                    'Peel and cut the Yam into medium-sized chunks and rinse a couple of times',
                    'Put the Yams inside a Pot, add water just to the level of the Yams and let it cook for 15 minutes on medium to high heat'
                ]
            },
            {
                id: 16,
                names:'Ekuru',
                images:'https://www.allnigerianrecipes.com/wp-content/uploads/2019/03/white-moi-moi-ekuru.jpg',
                description:
                    'White Moi Moi (Ekuru) is another way to enjoy beans. With a little alteration, this Yoruba delicacy is another version of Nigerian Moi Moi that is suitable for vegetarians.',
                preparationMode: [
                    'Peel and cut the Yam into medium-sized chunks and rinse a couple of times',
                    'Put the Yams inside a Pot, add water just to the level of the Yams and let it cook for 15 minutes on medium to high heat'
                ]
            },             
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
