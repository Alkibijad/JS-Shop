
// let [stateVarijabla, setStateVarijabla] = useState()
//prvi element u Array je varijabla, drugi je funkcija. Varijabla se koristi sa sacuvama data, ali se ne moze direktno menjati, zato koristimo funkciju.  


let stateVarijabla = [];

let setStateVarijabla = (stateValue) => { 
    stateVarijabla.push(stateValue)
}


setStateVarijabla("Pavle")


console.log(stateVarijabla);

// useEffect je React Hook, ucitava se kada se ucita komponenta.
// Znaci ako hoces da se code ucitava kada ucitas komponentu, koristis useEffect
// useEffect ima dva parametra: privije callback function (neki kod koji se izvrsava kada su ucita kompomenta, drugi je depandance array)
// depandacy array ( depand = zavisnost) to work on my code i depand on internet connection
// ukoliko ne stavimo depandacy array useEffect ce se izvrasavati kao infinite loop
// prazan [] znaci da ce se izvsiti jednom.
// takodje u depandandacu array mosemo proslediti npr: stateVariblu - u tom slucaju code ce se izvrsiti svaki put kada se promeni stateVarijbla zato sto useEffect depands on stateVaribla

// useEffect(() => {
//     ova arrow function se zove callback function i privi je argument u useEffect hook
// }, [ovo je dependency array])