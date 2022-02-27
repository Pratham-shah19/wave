class Product{
    constructor(id,ownerId,imageUrl,title,description,bulline,ingredients,ratings) { //bulline = protien rich
        this.id = id;
        this.ownerId = ownerId;
        this.imageUrl = imageUrl;
        this.title = title;
        this.description = description;
        this.bulline =bulline;
        this.ingredients = ingredients;
        this.ratings = ratings;
    }
}
export default Product;