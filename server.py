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
    rows = request.args.get('row_num')
    cols = request.args.get('column_num')
    cards = get_necessary_number_of_card_names(int(cols), int(rows))
    return render_template('game.html', rows=rows, cols=cols, cards=cards)


if __name__ == '__main__':
    app.secret_key = 'magic'
    app.run(debug=True, port=5000)
