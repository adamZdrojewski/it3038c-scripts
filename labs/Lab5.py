# Guess the number game
import random

answer = random.randint(1, 100)

while True:
    guess = int(input("Guess a number between 1 and 100: "))
    if guess == answer:
        print("You got it!")
        break
    elif guess > answer:
        print("Guess lower")
    elif guess < answer:
        print("Guess higher")