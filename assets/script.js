const input_id = document.getElementById("input_search");
    const items = document.getElementById("items_list");

    input_id.addEventListener("input",(event)=>{
        console.log(event.target.value);
        UI_List();
    })

    let products = null;
    let filter_products = null;

    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((data) => data.json())
    .then((data) => {
        products = data;
        filter_products = data;

        UI_List();
    })

    function UI_List() {
        const productFragment = document.createDocumentFragment();

        for (let i = 0; i < filter_products.length; i++) {
            // console.log(filter_products.length);
            const product = filter_products[i];

            const {title, url, thumbnailUrl} = product;

            const li_Elem = document.createElement("li");
            li_Elem.className = "card";

            

            const thumbnail_Elem = document.createElement("img");
            const title_Elem = document.createElement("p");

            thumbnail_Elem.src = thumbnailUrl;
            thumbnail_Elem.addEventListener("click",()=>{
                window.open(url);
            })
            thumbnail_Elem.height = 100;
            thumbnail_Elem.width = 100;

            title_Elem.innerText = title;

            li_Elem.appendChild(thumbnail_Elem);
            li_Elem.appendChild(title_Elem);
            productFragment.appendChild(li_Elem);
        }
        items.appendChild(productFragment);
    }
