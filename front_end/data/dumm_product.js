//5 different products

import Product from "../models/product";

const PRODUCTS = [
    new Product(
        'XAS_123',
        'XDA_123',
        'https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_150.jpg',
        'daal',
        'i just love it!',
        'Protien Rich',
        'moong dal,ghee,species',
        4.6
    ),
    new Product(
        'XAS_124',
        'XDA_123',
        'https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_150.jpg',
        'rice',
        'i just love it damn!',
        'Complex Carbs easy to digest',
        'rice,ghee',
        4.3
    ),
    new Product(
        'XAS_125',
        'XDA_123',
        'https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_150.jpg',
        'roti',
        'i just love it damn Hard!',
        'Medium Carbs',
        'wheat,ghee',
        4.7
    ),
    new Product(
        'XAS_126',
        'XDA_123',
        'https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_150.jpg',
        'salad',
        'i just love it damn Hard Fucked up!',
        'Nutritious,Low Calorie',
        'tomato,Cucumber,onion,Lettuce',
        4.0
    ),
    new Product(
        'XAS_127',
        'XDA_123',
        'https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_150.jpg',
        'ginger garlic paste',
        'i just love it damn Hard Fucked up tired!',
        'anti-inflammatory,boost the immune system',
        'ginger,garlic,oil',
        5.0
    ),
    new Product(
        'XAS_128',
        'XDA_124',
        'https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_150.jpg',
        'daal',
        'i just love it!',
        'Protien Rich',
        'moong dal,ghee,species',
        4.6
    ),
    new Product(
        'XAS_129',
        'XDA_124',
        'https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_150.jpg',
        'rice',
        'i just love it damn!',
        'Complex Carbs easy to digest',
        'rice,ghee',
        4.3
    ),
    new Product(
        'XAS_130',
        'XDA_124',
        'https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_150.jpg',
        'roti',
        'i just love it damn Hard!',
        'Medium Carbs',
        'wheat,ghee',
        4.7
    ),
    new Product(
        'XAS_131',
        'XDA_124',
        'https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_150.jpg',
        'salad',
        'i just love it damn Hard Fucked up!',
        'Nutritious,Low Calorie',
        'tomato,Cucumber,onion,Lettuce',
        4.0
    ),
    new Product(
        'XAS_132',
        'XDA_124',
        'https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_150.jpg',
        'ginger garlic paste',
        'i just love it damn Hard Fucked up tired!',
        'anti-inflammatory,boost the immune system',
        'ginger,garlic,oil',
        5.0
    ),
    new Product(
        'XAS_133',
        'XDA_125',
        'https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_150.jpg',
        'daal',
        'i just love it!',
        'Protien Rich',
        'moong dal,ghee,species',
        4.6
    ),
    new Product(
        'XAS_134',
        'XDA_125',
        'https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_150.jpg',
        'rice',
        'i just love it damn!',
        'Complex Carbs easy to digest',
        'rice,ghee',
        4.3
    ),
    new Product(
        'XAS_136',
        'XDA_125',
        'https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_150.jpg',
        'roti',
        'i just love it damn Hard!',
        'Medium Carbs',
        'wheat,ghee',
        4.7
    ),
    new Product(
        'XAS_137',
        'XDA_125',
        'https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_150.jpg',
        'salad',
        'i just love it damn Hard Fucked up!',
        'Nutritious,Low Calorie',
        'tomato,Cucumber,onion,Lettuce',
        4.0
    ),
    new Product(
        'XAS_138',
        'XDA_125',
        'https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_150.jpg',
        'ginger garlic paste',
        'i just love it damn Hard Fucked up tired!',
        'anti-inflammatory,boost the immune system',
        'ginger,garlic,oil',
        5.0
    ),
    new Product(
        'XAS_139',
        'XDA_126',
        'https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_150.jpg',
        'daal',
        'i just love it!',
        'Protien Rich',
        'moong dal,ghee,species',
        4.6
    ),
    new Product(
        'XAS_140',
        'XDA_126',
        'https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_150.jpg',
        'rice',
        'i just love it damn!',
        'Complex Carbs easy to digest',
        'rice,ghee',
        4.3
    ),
    new Product(
        'XAS_141',
        'XDA_126',
        'https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_150.jpg',
        'roti',
        'i just love it damn Hard!',
        'Medium Carbs',
        'wheat,ghee',
        4.7
    ),
    new Product(
        'XAS_142',
        'XDA_126',
        'https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_150.jpg',
        'salad',
        'i just love it damn Hard Fucked up!',
        'Nutritious,Low Calorie',
        'tomato,Cucumber,onion,Lettuce',
        4.0
    ),
    new Product(
        'XAS_143',
        'XDA_126',
        'https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_150.jpg',
        'ginger garlic paste',
        'i just love it damn Hard Fucked up tired!',
        'anti-inflammatory,boost the immune system',
        'ginger,garlic,oil',
        5.0
    ),
    new Product(
        'XAS_144',
        'XDA_127',
        'https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_150.jpg',
        'daal',
        'i just love it!',
        'Protien Rich',
        'moong dal,ghee,species',
        4.6
    ),
    new Product(
        'XAS_145',
        'XDA_127',
        'https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_150.jpg',
        'rice',
        'i just love it damn!',
        'Complex Carbs easy to digest',
        'rice,ghee',
        4.3
    ),
    new Product(
        'XAS_146',
        'XDA_127',
        'https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_150.jpg',
        'roti',
        'i just love it damn Hard!',
        'Medium Carbs',
        'wheat,ghee',
        4.7
    ),
    new Product(
        'XAS_147',
        'XDA_127',
        'https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_150.jpg',
        'salad',
        'i just love it damn Hard Fucked up!',
        'Nutritious,Low Calorie',
        'tomato,Cucumber,onion,Lettuce',
        4.0
    ),
    new Product(
        'XAS_148',
        'XDA_127',
        'https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_150.jpg',
        'ginger garlic paste',
        'i just love it damn Hard Fucked up tired!',
        'anti-inflammatory,boost the immune system',
        'ginger,garlic,oil',
        5.0
    ),
    new Product(
        'XAS_149',
        'XDA_128',
        'https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_150.jpg',
        'daal',
        'i just love it!',
        'Protien Rich',
        'moong dal,ghee,species',
        4.6
    ),
    new Product(
        'XAS_150',
        'XDA_128',
        'https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_150.jpg',
        'rice',
        'i just love it damn!',
        'Complex Carbs easy to digest',
        'rice,ghee',
        4.3
    ),
    new Product(
        'XAS_151',
        'XDA_128',
        'https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_150.jpg',
        'roti',
        'i just love it damn Hard!',
        'Medium Carbs',
        'wheat,ghee',
        4.7
    ),
    new Product(
        'XAS_152',
        'XDA_128',
        'https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_150.jpg',
        'salad',
        'i just love it damn Hard Fucked up!',
        'Nutritious,Low Calorie',
        'tomato,Cucumber,onion,Lettuce',
        4.0
    ),
    new Product(
        'XAS_153',
        'XDA_128',
        'https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_150.jpg',
        'ginger garlic paste',
        'i just love it damn Hard Fucked up tired!',
        'anti-inflammatory,boost the immune system',
        'ginger,garlic,oil',
        5.0
    ),
    
]
export default PRODUCTS;