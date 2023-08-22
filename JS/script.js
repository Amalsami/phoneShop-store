const headerElement = document.createElement('header');

// Create a new XMLHttpRequest or fetch the header content
const headerXhr = new XMLHttpRequest();
headerXhr.open('GET', 'header.html', true);
headerXhr.onreadystatechange = function () {
    if (headerXhr.readyState === 4 && headerXhr.status === 200) {
        headerElement.innerHTML = headerXhr.responseText;
        document.body.insertBefore(headerElement, document.body.firstChild);

        // Attach cart-related event listeners here, after header is inserted
        const cartDiv = document.getElementById("cart");
        let numOfProducts = parseInt((document.cookie).split("=")[1]) || 0;
        cartDiv.innerText = numOfProducts;

        const cartShopping = document.querySelectorAll(".layer-content .fa-shopping-cart");
        cartShopping.forEach(element => {
            element.onclick = function() {
                numOfProducts++;
                document.cookie = `item=${numOfProducts};`;
                cartDiv.innerText = numOfProducts;
            };
        });
    }
};
headerXhr.send();

const getInTouchElement = document.createElement('getInTouch');

// Create a new XMLHttpRequest or fetch the getInTouch content
const getInTouchXhr = new XMLHttpRequest();
getInTouchXhr.open('GET', 'getInTouch.html', true);
getInTouchXhr.onreadystatechange = function () {
    if (getInTouchXhr.readyState === 4 && getInTouchXhr.status === 200) {
        getInTouchElement.innerHTML = getInTouchXhr.responseText;
        document.body.appendChild(getInTouchElement); // Append the getInTouch at the end of the body
    }
};
getInTouchXhr.send();



const footerElement = document.createElement('footer');

// Create a new XMLHttpRequest or fetch the footer content
const footerXhr = new XMLHttpRequest();
footerXhr.open('GET', 'footer.html', true);
footerXhr.onreadystatechange = function () {
    if (footerXhr.readyState === 4 && footerXhr.status === 200) {
        footerElement.innerHTML = footerXhr.responseText;
        document.body.appendChild(footerElement); // Append the footer at the end of the body
    }
};
footerXhr.send();


