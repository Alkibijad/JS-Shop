let xml = new XMLHttpRequest();

xml.open(
  "get",
  "https://raw.githubusercontent.com/Alkibijad/webShop_fake_db/main/nike.json"
);

xml.onreadystatechange = () => {
  if (xml.readyState == 4 && xml.status == 200) {
    shop(JSON.parse(xml.responseText));
  }
};

xml.send();
