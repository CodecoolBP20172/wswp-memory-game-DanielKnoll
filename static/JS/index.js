function init() {
    
    function main() {
        addCardEventListeners();
    }

    function addCardEventListeners() {
        let selects = document.getElementsByTagName('select');
        for (let i = 0; i < selects.length; i++) {
            selects[i].addEventListener('change', function() {
                updateValue();
            });
        }
    }

    function updateValue(){
        let rowsElem = document.getElementById("rows");
        let colsElem = document.getElementById("cols");
        let rows = rowsElem.options[rowsElem.selectedIndex].value;
        let cols = colsElem.options[colsElem.selectedIndex].value;
        removeTable();
        generateTable(rows, cols);
    }

    function removeTable() {
        let table = document.getElementsByTagName('table')[0];
        if (table) {        
            table.parentNode.removeChild(table);
        }
    }

    function generateTable(rows, cols) {
        let game = document.getElementById('fake-board');
        let table = document.createElement('table');    
         
        let counter = 0;

        for (let r = 0; r < rows; r++) {
            tr = document.createElement('tr');
            for (let c = 0; c < cols; c++) {
                i = document.createElement('i');
                i.setAttribute('class', 'fa fa-question-circle');
                td = document.createElement('td');
                td.appendChild(i);
                tr.appendChild(td);
                counter++;
            }
            table.appendChild(tr);
        } 
        game.appendChild(table);
    }

    main();
}
window.addEventListener('load', init);
