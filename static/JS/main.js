function init() {
    var cardBackground = 'card-back';
    var images = game.dataset.cards;
    images = images.slice(2,-2).split("', '");
    images.sort(function () {return 0.5 - Math.random()});
    var cards = document.getElementsByTagName('i');
    var oddClick = true;
    var lastClickedCardIndex;

    function main() {
        generateTable();
        addCardEventListeners();
    }

    function generateTable() {
        var game = document.getElementById('game');
        var rows = game.dataset.rows;
        var cols = game.dataset.cols;

        var table = document.createElement('table');
        var counter = 0;
        for (var r = 0; r < rows; r++) {
            tr = document.createElement("tr");
            for (var c = 0; c < cols; c++) {
                i = document.createElement("i");
                i.setAttribute('class', 'fa fa-4x ' + cardBackground);
                td = document.createElement("td");
                td.appendChild(i);
                tr.appendChild(td);
                counter++;
            }
            table.appendChild(tr)
        } 
        game.appendChild(table)    
    }

    function addCardEventListeners() {
            for (let i = 0; i < cards.length; i++) {
            cards[i].addEventListener("click", function(event) {
                clickHandler(i);
            });
            }
    }

    function clickHandler(index) {
        let clickedCard = cards[index];
        let cardImage = images[index];
        if (clickedCard.classList.contains(cardBackground)) {
            flip(clickedCard, cardImage);
            if (oddClick) {
                oddClick = false;
                lastClickedCardIndex = index;
            } else {
                oddClick = true;
                let lastClickedCard = cards[lastClickedCardIndex];
                let lastCardImage = images[lastClickedCardIndex];
                if (cardImage !== lastCardImage) {
                    setTimeout(function() {
                        unflip(clickedCard, cardImage);
                        unflip(lastClickedCard, lastCardImage);
                    }, 1000)
                }
            }
        }
    }

    function flip(clickedCard, classToAdd) {
        clickedCard.classList.remove(cardBackground);
        clickedCard.classList.add(classToAdd);
        clickedCard.classList.add('card-front');
    }

    function unflip(clickedCard, classToRemove) {
        clickedCard.classList.remove(classToRemove);
        clickedCard.classList.remove('card-front');
        clickedCard.classList.add(cardBackground);
    }

    main();
}
window.addEventListener('load', init);
