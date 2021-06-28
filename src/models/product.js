class Product {
    constructor(productId,name,description,price,basePrice,image,categoryId){
        this.productId = productId;
        this.name = name;
        this.price=price;
        this.basePrice=basePrice;
        this.description=description;
        this.categoryId=categoryId;
        this.image=image;
    }
}

export default Product