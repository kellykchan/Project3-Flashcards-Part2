# Web Development Project 3 - *Flashcards! Part 2*

Submitted by: **Kelly Chan**

This web app: **In Flashcards! Part 1, I chose pairs of items to store in a flashcard-like format that users can use to study, learn something new, or play a guessing game. This week, in Part 2, I extended the functionality of your web app! I built features that allow users to enter an answer (with exact or fuzzy matching) and move backwards and forwards through the list of cards.**

Time spent: **2.5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong 
  -  Clicking on the submit button with a **correct** answer shows visual feedback that it is correct
- [X] **The user can navigate through an ordered list of cardss**
  - A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - Both the next and back buttons should have some visual indication that the user is at the beginning or end of the list (for example, graying out and no longer being available to click), not allowing for wrap-around navigation

The following **optional** features are implemented:

- [X] Users can use a shuffle button to randomize the order of the cards
  - Cards should remain in the same sequence (**NOT** randomized) unless the shuffle button is clicked 
  - Cards should change to a random sequence once the shuffle button is clicked
- [X] A user’s answer may be counted as correct even when it is slightly different from the target answer
  - Answers are considered correct even if they only partially match the answer on the card 
  - Examples: ignoring uppercase/lowercase discrepancies, ignoring punctuation discrepancies, matching only for a particular part of the answer rather than the whole answer
- [X] A counter displays the user’s current and longest streak of correct responses
  - The current counter increments when a user guesses an answer correctly
  - The current counter resets to 0 when a user guesses an answer incorrectly
  - A separate counter tracks the longest streak, updating if the value of the current streak counter exceeds the value of the longest streak counter 

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src='walkthrough.gif' title='Video Walkthrough' alt='Video Walkthrough' />

GIF created with Adobe Express

## Notes

One of the trickiest parts of building the app was getting the spacing and layout just right. It took some trial and error with CSS to make everything look clean and balanced. Another challenge was figuring out how to handle user input so that slightly different answers could still be considered correct. I had to think through how flexible I wanted the matching to be, like ignoring capitalization and punctuation, without letting completely wrong answers slip through as correct. Tracking the current and longest streaks also took some extra logic to make sure they updated accurately after each guess. And finally, implementing the shuffle feature was more involved than expected. I wanted the cards to stay in their normal order unless the user clicked shuffle, which meant creating a system to track both the original and randomized sequences without breaking the navigation.

## License

    Copyright 2025 Kelly Chan

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.