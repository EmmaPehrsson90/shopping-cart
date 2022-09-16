	•	Jag har valt att ha flera komponenter för att få en bättre överblick av projektet.
	•	I app.tsx typar jag objektet för att se vilka properties som finns i produkten.
	•	Use effect körs när sidan laddas och då hämtas data från api:et. Produkterna sparar jag i en use state hook. 
	•	De skickar jag vidare till komponenten Products som loopar igenom alla produkter. I Product visar jag varje produkt för sig med tillhörande namn och pris. 
	•	I App.tsx har jag lagt till två funktioner. En för att lägga till en produkt och en för att ta bort. Vid klick på lägg till anropar jag addToBasket som skickas som prop. 
	•	I addToBasket kollar jag om den klickade produktens id finns i basketItems som är en usestate-hook som sparar klickade produkter i en array. Om id:t finns, plussar jag på count med 1. 
	•	Count har jag lagt till som en property i Product-objektet för att hålla koll på hur många produkter av samma id jag klickat på. 
	•	Om id:t på produkten inte finns i basketItems lägger jag bara till produkten och sätter count till 1. 
	•	Motsvarande sak gör jag i removeFromBasket, men då drar jag istället bort 1 från count. Jag gör även en koll att om count är större än 1 så minskar jag antalet, annars tar jag bort produkten helt från varukorgen. 
	•	Summan av alla produkter, dvs. summan av alla element i basketItems-arrayen räknar jag ut med hjälp av reduce-funktionen. Jag sätter defaultvärdet till 0.	
	•	Jag har använt mig av CSS-in-JS, men valde att inte fokusera så mycket på stylingen utan såg till att funktionen fanns där i första hand.