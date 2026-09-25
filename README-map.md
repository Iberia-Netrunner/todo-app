Trestegsmetod:

1. Varför är .map ett löpande band

svar: För att med -map så tar den in de nya arrayen
      efter att spread-operatorn har skapat en ny data
      array, map tar den färdiga data arrayen och förvandlar
      varje textbit i listan till en <li>.

2. Varför är .filter en sil och inte en kniv?
Svar:   för att .filter går genom alla items och kollar
        vad som är vad, sedan tar den bort den item som
        inte ska vara med och låter allt annat gå vidare 
        för re-render.

3. Vad gör key - och vad är den INTE
Svar: key={todo} ger varje element unikt ID så React 
      vet vad som ska ändras/sortering          