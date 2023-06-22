async function products() {
    let product = ""
    let data = await fetch("https://jsonplaceholder.typicode.com/posts")
    let res = await data.json()
    res.forEach(element => {

        product += `

    <div class="product">
    <h2>${element.title}</h2>
    <p>
    ${element.body}
    </p>
    </div>
    
    `
    });

    document.querySelector("#root>div.products").innerHTML = product
}
export default products;