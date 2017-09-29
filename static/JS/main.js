function init() {
    var cardBackground = 'fa-building';
    
    function main() {    
        generateTable();
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

    main();
}
window.addEventListener('load', init);