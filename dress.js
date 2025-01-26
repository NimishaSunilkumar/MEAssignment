
const fetchData = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        
        // Filter the products by the category "men's clothing"
        const dressData = data.filter(product => product.category === "men's clothing" || product.category === "women's clothing");
        
        // Display the filtered products
        displayData(dressData);
    } catch (error) {
        console.log(error);
    }
};

const displayData = (dressData) => {
    if (!dressData || dressData.length === 0) {
        console.log("No products found");
    } else {
        // Create HTML for each product
        const productHtml = dressData.map(product =>
            `<div class="products" id="product">
                <div class="row" id="row">
                    <img src="${product.image}" alt="${product.title}">
                    <div class="product-text">
                        <h5>Sale</h5>
                    </div>
                    <div class="heart-icon">
                        <i class='bx bx-heart'></i>
                    </div>
                    <div class="rating">
                        <i class='bx bx-star'></i>
                        <i class='bx bx-star'></i>
                        <i class='bx bx-star'></i>
                        <i class='bx bx-star'></i>
                        <i class='bx bxs-star-half'></i>
                    </div>
                    <div class="price">
                        <h4>${product.title}</h4>
                        <p>Rs.${product.price}</p>
                       
                    </div>
                       <a href="#" class="btn btn-custom">Buy Now</a>
                </div>
                
            </div>`
        ).join('');

        // Target the parent container that holds all products
        const productContainer = document.querySelector(".products");
        if (productContainer) {
            productContainer.innerHTML = productHtml;
        }
    }
};

fetchData();
