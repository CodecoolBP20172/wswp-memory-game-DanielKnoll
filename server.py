from flask import Flask, render_template, redirect, request, url_for
from functools import wraps
import werkzeug.exceptions
from functions import get_necessary_number_of_card_names

app = Flask(__name__)


@app.route('/')
def index_page():
    return render_template('index.html')


@app.route('/game', methods=['GET'])
def game_page():
    rows = int(request.args.get('row_num'))
    cols = int(request.args.get('column_num'))
    if rows == '0' or cols == '0':
        return redirect(url_for('index_page'))
    cards = get_necessary_number_of_card_names(cols, rows)
    return render_template('game.html', rows=rows, cols=cols, cards=cards)


if __name__ == '__main__':
    app.secret_key = 'magic'
    app.run(debug=True, port=5000)
