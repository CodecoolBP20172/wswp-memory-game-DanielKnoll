function init() {
    var game = document.getElementById('game');
    var table = document.createElement('table');    
    var images = game.dataset.cards;
    images = images.slice(2,-2).split("', '");
    images.sort(function () {return 0.5 - Math.random()});
    var cards = document.getElementsByTagName('i');
    var cardsLeft = images.length;
    var cardBackground = 'card-back';    
    var oddClick = true;
    var lastClickedCardIndex;

    function main() {
        generateTable();
        addCardEventListeners();
    }

    function generateTable() {
        let rows = game.dataset.rows;
        let cols = game.dataset.cols;
        let counter = 0;

        for (let r = 0; r < rows; r++) {
            tr = document.createElement('tr');
            for (let c = 0; c < cols; c++) {
                i = document.createElement('i');
                i.setAttribute('class', 'fa fa-4x ' + cardBackground);
                td = document.createElement('td');
                td.appendChild(i);
                tr.appendChild(td);
                counter++;
            }
            table.appendChild(tr);
        } 
        game.appendChild(table);

        if ( cols > 5 ) {
            document.getElementById('wrapper').style.width = '80%';
        }
    }

    function addCardEventListeners() {
        for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', function(event) {
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
                } else {
                    clickedCard.style.color = 'green';
                    setTimeout(function() {
                        lastClickedCard.style.color = 'green';
                    }, 300)
                    cardsLeft -= 2;
                    victory();
                }
            }
        }
    }

    function flip(clickedCard, classToAdd) {
        clickedCard.classList.add('flip');
        setTimeout(function() {
            clickedCard.classList.remove(cardBackground);
            clickedCard.classList.add(classToAdd);
            clickedCard.classList.add('card-front');
        }, 300)
    }

    function unflip(clickedCard, classToRemove) {
        clickedCard.classList.remove('flip');
        setTimeout(function() {
            clickedCard.classList.remove(classToRemove);
            clickedCard.classList.remove('card-front');
            clickedCard.classList.add(cardBackground);
        }, 300)
    }

    function victory() {
        if (cardsLeft === 0) {
            setTimeout(function() {
                table.parentNode.removeChild(table);
                let win = document.createElement('h2');
                game.appendChild(win);
                win.setAttribute('id', 'win');
                win.innerHTML = 'You win!';
                var button = document.getElementsByClassName('button')[0]
                button.innerText = 'New Game';
                button.style.background = 'green';
            }, 1000)
        }
    }

    $( "#game" ).hover(function() {
        $( "#win" ).effect( "shake" );
      });

    main();
}
window.addEventListener('load', init);
