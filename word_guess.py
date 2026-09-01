import random

words = ['python', 'java', 'javascript', 'ruby', 'html', 'css', 'sql', 'csharp', 'php', 'swift']

word = random.choice(words)

guessedWords  = [''] *len(word)
attempts = 3

print("guess the programming language")

while attempts>0:
    print("\n Current word: ", ' '.join(guessedWords))
    guess = input("Enter a letter: ").lower()
    if guess in word:
        for i in range(len(word)):
            if word[i] == guess:
                guessedWords[i] = guess
        print("Correct guess!")
    else:
        attempts -= 1
        print("Incorrect guess! Attempts left: ", attempts)
        
    if '_' not in guessedWords:
        print("Congratulations! You've guessed the word: ", word)
        break

if attempts == 0 and '_' in guessedWords:
        print("Game over! The word was: ", word)