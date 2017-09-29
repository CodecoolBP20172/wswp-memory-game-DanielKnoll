import json
from random import shuffle
from pprint import pprint


def get_card_names():
    with open('static/data.json') as data_file:
        names = json.load(data_file)['cards']
    return names


def shuffle_card_names():
    shuffled_names = get_card_names()
    shuffle(shuffled_names)
    return shuffled_names


def get_necessary_number_of_card_names(col_num, row_num):
    needed_num_of_cards = (col_num * row_num)//2
    shuffled_names = shuffle_card_names()
    random_player_cards = []

    for i in range(needed_num_of_cards):
        random_player_cards.append(shuffled_names[i])
        random_player_cards.append(shuffled_names[i])
    return random_player_cards
