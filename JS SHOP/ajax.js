let xml = new XMLHttpRequest();
xml.open("get", "https://raw.githubusercontent.com/Alkibijad/webShop_fake_db/main/products.json")

xml.onreadystatechange = () => { 
    if (xml.readyState === 4 && xml.status === 200) {

        webShop(JSON.parse(xml.responseText))
        
    }
}
xml.send()