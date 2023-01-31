var categories = [];
var catalog = [];
var cart = [];


/**
 * Function which initializes 8 categories that a Shoe object can possess.
 */
function initializeCategories()
{
    var masks = new Category(1100, "Face Covering", "Surgical masks");
    categories.push(masks);

    var handSanitizer = new Category(1200, "Hand Sanitizer", "Product to clean hands with");
    categories.push(handSanitizer);

    var faceSheild= new Category(1300, "Face Sheild", "Protects your face");
    categories.push(faceSheild);
      
    var cleaningProducts= new Category(1400, "Cleaning Product", "Products to clean with");
    categories.push(cleaningProducts);
    
    var toiletPaper= new Category(1500, "Toilet Paper", "Used in the bathroom");
    categories.push(toiletPaper);

    var covidTest= new Category(1600, "Covid At Home Test", "Test yourself at home");
    categories.push(covidTest);
    
    var cleaningWipes= new Category(1700, "Cleaning Wipes", "All purpose cleaning wipes");
    categories.push(cleaningWipes);
    
    var gloves= new Category(1800, "Gloves", "Latex gloves");
    categories.push(gloves);
}

/**
 * Returns the category which matches the specified id.
 * @param {*} categoryId Id used to find category.
 */
function getCategory(category)
{
    for (let i = 0; i < categories.length; i++) 
    {
        if (categories[i].categoryId == category) 
        {
            return categories[i].categoryName;
        }
    }
    return undefined;
}

/**
 * Creates 3 Shoe objects for each category class (24 Shoe objects in total).
 */
function initializeItems()
{
    var mask1 = new healthEquipment(10, "Cloth Mask", "More than one use", "Medium", 5.99, "images/clothMask.jpeg", 5, "black", 1100);
    catalog.push(mask1);
    var mask2 = new healthEquipment(11, "M-95 Mask", "One day use", "Medium", 10.99, "images/m95.jpg", 10, "white", 1100);
    catalog.push(mask2);
    var mask3 = new healthEquipment(12, "Surgical Mask", "One Time use", "Medium", 2.99, "images/surgicalMask.jpg", 25, "blue", 1100);
    catalog.push(mask3);

    var sanitizer1= new healthEquipment(20, "Dove", "Deep Clean", "Large", 15.99, "images/deepClean.jpg", 20, "clear", 1200);
    catalog.push(sanitizer1);
    var sanitizer2 = new healthEquipment(21, "No Name Brand", "99 percent kills bacteria", "Small", 2.99, "images/noName.jpg", 15, "clear", 1200);
    catalog.push(sanitizer2);
    var sanitizer3 = new healthEquipment(22, "Purell", "100 percent disinfectant", "Large", 8.99, "images/purell.jpg", 0, "clear", 1200);
    catalog.push(sanitizer3);

    var sheild1= new healthEquipment(30, "Full Face Sheild", "Covers full face", "Medium", 20.99, "images/style2FC.jpg", 10, "yellow", 1300);
    catalog.push(sheild1);
    var sheild2 = new healthEquipment(31, "Glasses Face Sheild", "Holds onto face with glasses", "Medium", 10.99, "images/style3.jpeg", 24, "clear", 1300);
    catalog.push(sheild2);
    var sheild3 = new healthEquipment(32, "Kid Face Sheild", "Made for children", "small", 10.99, "images/noNameFC.jpg", 5, "clear", 1300);
    catalog.push(sheild3);

    var product1= new healthEquipment(40, "Windex", "Unbeatable", "Medium", 12.99, "images/windex.jpg", 4, "blue", 1400);
    catalog.push(product1);
    var product2 = new healthEquipment(41, "Hertel", "For all surfaces", "Medium", 10.99, "images/hertel.jpg", 10, "yellow", 1400);
    catalog.push(product2);
    var product3 = new healthEquipment(42, "Lysol", "Clean all surfaces", "Medium", 20.99, "images/lysol.jpg", 30, "white", 1400);
    catalog.push(product3);

    var toilet1= new healthEquipment(50, "Charmin", "Ultra soft", "Large", 18.99, "images/charmin.png", 14, "white", 1500);
    catalog.push(toilet1);
    var toilet2 = new healthEquipment(51, "Cottonelle", "Resistant", "Medium", 12.99, "images/cottonelle.jpeg", 34, "white", 1500);
    catalog.push(toilet2);
    var toilet3 = new healthEquipment(52, "White Cloud", "Smooth", "small", 7.99, "images/whiteCloud.jpeg", 5, "white", 1500);
    catalog.push(toilet3);

    var test1= new healthEquipment(60, "Government Test", "Wait 5 minutes for result", "Small Pack", 15.99, "images/government.jpg", 20, "green", 1600);
    catalog.push(test1);
    var test2 = new healthEquipment(61, "FDA Approved Test", "Result in minutes", "Bulk Pack", 32.99, "images/fda.png", 54, "blue", 1600);
    catalog.push(test2);
    var test3 = new healthEquipment(62, "PCR Test", "Results in days", "no size", 199.99, "images/pcr.jpg", 20, "no color", 1600);
    catalog.push(test3);

    var wipe1= new healthEquipment(70, "Clorox Wipes", "Kills Bacteria", "Bulk Pack", 14.99, "images/clorox.jpg", 10, "yellow", 1700);
    catalog.push(wipe1);
    var wipe2 = new healthEquipment(71, "Armor All Wipes", "For tough surfaces", "Meduim Pack", 8.99, "images/armor.png", 24, "no color", 1700);
    catalog.push(wipe2);
    var wipe3 = new healthEquipment(72, "Mr Clean Wipes", "disinfects all surfaces", "small pack", 6.99, "images/clean.jpg", 4, "blue", 1700);
    catalog.push(wipe3);

    var glove1= new healthEquipment(80, "Medical Gloves", "For day use only", "Small Pack", 7.99, "images/medical.jpg", 50, "purple", 1800);
    catalog.push(glove1);
    var glove2 = new healthEquipment(81, "Heavy Duty Gloves", "Durable material", "Bulk Pack", 40.99, "images/heavyduty.jpg", 3, "black", 1800);
    catalog.push(glove2);
    var glove3 = new healthEquipment(82, "House-Hold Gloves", "Breathable material", "Small pack", 2.99, "images/cheap.jpg", 50, "clear", 1800);
    catalog.push(glove3);
}

/**
 * Sets up the webpage for the user.
 */
function setUpCart(){
    initializeCategories();
    initializeItems();
    showListOfItems();
}

/**
 * Displays an alert based on user interaction.
 * @param {*} cssClass Class used to change styling of alert.
 * @param {*} messageToDisplay Message to display in the alert.
 */
var timeoutForMsg;
function showStatusMessage(cssClass, messageToDisplay)
{
    if(timeoutForMsg){
        clearTimeout(timeoutForMsg);
    }
    let alert = document.getElementById("alert");
    $(".alert").show();
    alert.setAttribute("class", cssClass);
    alert.innerHTML = messageToDisplay;
    window.scrollTo(0,0);
    timeoutForMsg = setTimeout(hideStatusMessage, 5000);
}

/**
 * Hides the status alert.
 */
function hideStatusMessage()
{
    $(".alert").hide();
    timeoutForMsg = undefined;
}

/**
 * Clears the div element which contains shoe information.
 */
function clearMainContainer(){
    let mainContainer = document.getElementById("divMainContainer");
    mainContainer.innerHTML = "";
}

/**
 * Displays all shoes in the catalog using bootstrap cards.
 */
function showListOfItems() 
{
    clearMainContainer();
    let mainContainer = document.getElementById("divMainContainer");
    let content = `<div class="container">`;
    content += `<div class="row rowShift">`;
    for (let i = 0; i < catalog.length; i++) {
        const item = catalog[i];
        const addRow = i % 3 == 0;
        if (addRow && i > 0) {
            content += `</div> <div class="row rowShift">`;
        }
        const categoryName = getCategory(item.category);
        content += `
        <div class="card text-white text-center bg-dark  mb-3" style="width: 21rem; margin-right: 2%">
            <div class="card-header">${categoryName}</div>
            <div class="card-body">
                <img src="${item.image}" class="card-img-top" alt="..." style="width: 14rem; height: 200px; border-radius: 10pt">
                <h5 class="card-title"><br>${item.title}</h5>
                <p class="card-text">${item.description}</p>
                <p class="card-text">$${item.price}</p>
                <button type="button" class="btn btn-secondary" onclick="addToCart(${item.id})">Add To Cart <i class="fa fa-cart-plus"></i></button>
                <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#divModal${item.id}" onclick="showItemDetails(${item.id}, 'catalog')">Details <i class="fa fa-info"></i></button>
        

                </div> 
        </div>
        `;
    }
    content += "</div> </div>";
    mainContainer.innerHTML += content;
}


/**
 * Displays all shoes found in the user's cart in a bootstrap table.
 */
function viewCart(){
    clearMainContainer();

    let mainContainer = document.getElementById("divMainContainer");
    let equipTable = '<table class="table1 table-striped tableAlignText"><thead><tr class="trTitle"><th colspan=9>Cart Details</th></tr><tr><th id="tID">ID</th><th id="tName">Name</th><th id="tDes">Description</th><th id="tPrice">Price</th><th id="tDis">Display</th><th></th><th></th></tr></thead><tbody>';
    var total = 0.00;

    for(let i = 0; i < cart.length; i++)
    {
        equipTable += `<tr> <td>${cart[i].id}</td> <td>${cart[i].title}</td> <td>${cart[i].description}</td> <td>$${cart[i].price}</td> <td><img src="${cart[i].image}" width="75" height="75" class="img-thumbnail"/></td> <td><button type="button" id="details" class="btn btn-danger" onclick="removeFromCart(${cart[i].id})">Remove Item <i class="fa fa-minus"></i></button></td> <td><button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#divModal${cart[i].id}" onclick="showItemDetails(${cart[i].id}, 'cart')">Details <i class="fa fa-info"></i></button></td></tr>`;
        total += cart[i].price;
    }
    
    equipTable += `</tbody><tfoot><tr><td>Total</td><td>$ ${total}</td></tr></tfoot></table>`;

    mainContainer.innerHTML = equipTable;
}

/**
 * Finds an item in catalog based on id.
 * @param {*} itemId Id used to search for item.
 */
function findItemById(itemId){
    for(let i = 0; i < catalog.length; i++)
    {
	    const equip = catalog[i];
	    if(equip.id == itemId)
	    {
	        return equip;
	    }
    }
    return undefined;
}

function findIndexOfItem(itemId, source){
    
    if(source == "cart")
    {
        for(let i = 0; i < cart.length; i++)
        {
            if (cart[i].id == itemId) 
            {
                return cart.indexOf(cart[i]);
            }
        }
        return undefined;
    }
    else if(source == "catalog")
    {
        for(let i = 0; i < catalog.length; i++)
        {
            if (catalog[i].id == itemId) 
            {
                return catalog.indexOf(catalog[i]);
            }
        }
        return undefined;
    }

}

/**
 * Displays the details of an item.
 * @param {*} itemId Id used to find item to be detailed.
 */
function showItemDetails(itemId, source)
{   
    let mainContainer = document.getElementById("divMainContainer");
    var index = findIndexOfItem(itemId, "catalog");
    let content = `<div class="modal fade" id="divModal${itemId}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${catalog[index].title}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
                    <img src="${catalog[index].image}" class="modal-img" alt="..." style="width: 14rem; height: 200px; border-radius: 10pt;">
                    <hr size="50px" width="100%" color="grey">  
                    <p class="modal-desc">Description <br>${catalog[index].description}</p>
                    <p class="modal-size">Size <br>${catalog[index].size}</p>
                    <p class="modal-color">Color <br>${catalog[index].color}</p> 
                    <p class="modal-price">Price <br>${catalog[index].price}</p>
                    <p class="modal-quant">Quantity Availible <br>${catalog[index].quantity}</p> 
        </div>  
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onclick="addToCart(${catalog[index].id})" data-dismiss="modal">Add To Cart <i class="fa fa-cart-plus"></i></button>  
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`
    
    clearMainContainer();
    if(source == "catalog")
    {
        showListOfItems();
    }
    else if(source == "cart")
    {
        viewCart();
    }
    mainContainer.innerHTML += content;
    

}

/**
 * Adds an item from the catalog to the user's cart.
 * @param {*} itemId Id to find item in catalog.
 */
function addToCart(itemId)
{
    let index = findIndexOfItem(itemId, "catalog");
    let equip = findItemById(itemId);
    if(catalog[index].quantity == 0)
    {
        showStatusMessage("alert alert-warning", "The Item that you have selected is currently unavailibe");
    }
    else
    {
        cart.push(equip);
        catalog[index].quantity--;
        showStatusMessage("alert alert-success", "The Item that you have selected has been added to your cart");
    }
}

/**
 * Seaches for an item based on what the user typed.
 */
function searchByKeyword()
{
    let searchBar = document.getElementById("searchBar");
    const keyword = searchBar.value.toLowerCase();
    let j = 0;
    var selected = [];

    if (keyword)
    {
        for (let i = 0; i < catalog.length; i++) 
        {
            const item = catalog[i];
            if (catalog[i].title.toLowerCase().includes(keyword) || catalog[i].description.toLowerCase().includes(keyword)  || getCategory(catalog[i].category).toLowerCase().includes(keyword))  
            {
                selected.push(i);
                j++;
            }
        }
    }
    if(selected.length > 0)
    {
        showFilteredList(selected);
    }
    else
    {   
        clearMainContainer();
        showStatusMessage("alert alert-warning", "Nothing in catalogue matches the description of search");
    }
    searchBar = "";
}

/**
 * Removes an item from the user's cart.
 * @param {*} itemId Id to find item in cart.
 */
function removeFromCart(itemId)
{
    var indexCar = findIndexOfItem(itemId, "cart");
    var indexCat = findIndexOfItem(itemId, "catalog");
    cart.splice(indexCar, 1);
    catalog[indexCat].quantity++;
    viewCart(); 
    showStatusMessage("alert alert-warning", "The Item that you have selected has been removed from your cart");
}

/**
 * Displays a specified array as a boostrap table.
 * @param {*} array Array to display as a table.
 */
function showFilteredList(selected) 
{
    clearMainContainer();
    let mainContainer = document.getElementById("divMainContainer");
    let content = `<div class="container">`;
    content += `<div class="row rowShift">`;
    for (let i = 0; i < selected.length; i++) {
        const item = catalog[selected[i]];
        const addRow = i % 3 == 0;
        if (addRow && i > 0) {
            content += `</div> <div class="row rowShift">`;
        }
        const categoryName = getCategory(item.category);
        content += `
        <div class="card text-white text-center bg-dark  mb-3" style="width: 21rem; margin-right: 2%">
            <div class="card-header">${categoryName}</div>
            <div class="card-body">
                <img src="${item.image}" class="card-img-top" alt="..." style="width: 14rem; height: 200px; border-radius: 10pt">
                <h5 class="card-title"><br>${item.title}</h5>
                <p class="card-text">${item.description}</p>
                <p class="card-text">$${item.price}</p>
                <button type="button" class="btn btn-secondary" onclick="addToCart(${item.id})">Add To Cart <i class="fa fa-cart-plus"></i></button>
                <button type="button" class="btn btn-secondary" onclick="showItemDetails(${item.id})">Details</button>

                </div> 
        </div>
        `;
    }
    content += "</div> </div>";
    mainContainer.innerHTML += content;
}