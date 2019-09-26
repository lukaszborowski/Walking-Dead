<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Animacja poklatkowa

> Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.

-------------------------------------------------------------------------------

## Zadania do samodzielnego wykonania

### Animacja z CSS sprite  (~ 15min - 20min)

Stwórz animację kroczącego zombie z wykorzystaniem CSS sprite.
Link do obrazka: http://www.wdrfree.com/public/demos/animatespritekeyframes/walkingdead.png
Podpowiedź: wymiary jednej klatki animacji 200x312 pixeli, ilość klatek: 10.
[Tutorial w razie pomocy](http://blog.teamtreehouse.com/css-sprite-sheet-animations-steps)

![Zombie](http://www.wdrfree.com/public/demos/animatespritekeyframes/walkingdead.png)

### Dodatkowe dla chętnych
Tak samo jak przy kilku innych właściwościach, tak i przy animacjach możemy do pojedynczego elementu dodać wiele animacji po przecinku np.
```
animation: myAnim1 3s 0s, myAnim2 5s 0s alternate;
```
Dodaj dla zombie dodatkową animację, która wykona się **jeden raz** i przesunie go z prawej strony ekranu na lewą (i pozostawi go po lewej stronie). Zastosuj tutaj odpowiednie właściwości dla animacji. Aby uzyskać takie przesunięcie zastosuj dla zombie pozycjonowanie absolutne tak jak na poniższej grafice. Element **.zombie** powinien znajdować się wewnątrz elementu **.board**. Po zakończonej animacji zombie powinien być niewidoczny po lewej stronie planszy.

![Animacja zombie](images/animacja-zombie.png)

### Dodatkowe dla zaawansowanych
Na chwilę obecną mamy tylko jednego zombie. Horroru z tego raczej nie będzie. Moglibyśmy ręcznie utworzyć naście takich stworów, ale możemy też zastosować mechanizmy, które juz poznałeś na kursie.

Skorzystajmy tutaj z **setInterval**, w którym będziemy dynamicznie tworzyć kolejne potwory. Na początku usuń zombie z html, którego właśnie stworzyliśmy - będzie tylko przeszkadzał.
Dodaj do katalogu plik app.js, w którym umieść kod:

- stwórz zmienną time, którą narazie ustaw na null
- stwórz funkcję start w której:
- pod zmienną **time** podstaw setInterval (np. co 500ms), w którym:
    1) stwórz nowy element div, któremu nadaj klase .zombie
    2) wygeneruj mu losową pozycję bottom (z przedziału np. 50-280). Pamiętaj by do tej pozycji dodać "px"
    3) wygeneruj mu losową szybkość animacji przejścia (tej którą dodałeś po przecinku)
    4) ustaw mu właściwość ```style.animationDuration```. Nadaliśmy naszemu zombie 2 animacje, wiec musimy podać tutaj czas obydwu animacji w formacie ```"1s, 5s"``` np. ```"1s, " + randomTime + "s"```
    5) Za pomocą odpowiedniej funkcji JS dodaj tak stworzony element .zombie do elementu **.board**
    6) W podobny sposób co powyżej możesz wygenerować właściwości style takie jak ```style.transform``` (np. scale), ```style.filter``` (np. blur) itp.
    7) Odpal funkcję start poza jej ciałem


Dodawane w ten sposób zombie przechodzą przez planszę, po czym zostają poza nią na lewej stronie. Po jakimś czasie może ich tam być tyle, że strona może zacząć zwalniać lub nawet zaciąć przeglądarkę. Musimy je jakoś po swoim przemarszu usunąć.

Dodajmy do nowo tworzonego zombie (może być przed dodaniem go do html) event [animationend](https://developer.mozilla.org/en-US/docs/Web/Events/animationend), który odpalany jest, gdy dana animacja się zakończy.

```
zombie.addEventListener("animationend", function() {
    this.parentElement.removeChild(this);
});
```

