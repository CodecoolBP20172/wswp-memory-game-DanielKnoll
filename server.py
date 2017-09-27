from flask import Flask, render_template, redirect, request, url_for
from functools import wraps
import werkzeug.exceptions

app = Flask(__name__)


@app.route('/')
def index_page():
    return render_template('index.html')


@app.route('/game', methods=['POST'])
def game_page():
    data = request.form.to_dict()
    return render_template('game.html', data=data)


if __name__ == "__main__":
    app.secret_key = 'magic'
    app.run(debug=True, port=5000)
