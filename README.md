# Beep Boop

#### _Number replacing web application._

#### By _**Jared Reando**_

## Description

_A web application that takes a number from a user and returns a range of number from 0 to the user inputted number with the following exceptions:_

- Numbers that contain a 0 are replaced (all digits) with "Beep!"
- Numbers that contain a 1 are replaced (all digits) with "Boop!"
- Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."

 _View a hosted version of this project [here](https://jaredreando.github.io/beep-boop/)_

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **If a number containing a 0 is entered, all digits are replaced with "Beep!"** | Example input: "0" | Example Output: "Beep!"|
| **If a number containing a 1 is entered, all digits are replaced with "Beep!** | Example input: "1" | Example Outpu: "Boop!"|
| **If a number divisible by 3 is entered, all digits are replaced with "I'm sorry, Dave. I'm afraid I can't do that.** | User input: "3" | Output: "I'm sorry, Dave. I'm afraid I can't do that."|
| **If a number higher than 0 is entered, all numbers in the range from 0 to the inputted number are returned.** | User input: "5" | Output: "Beep!", "Boop!", 2, "I'm Sorry...", 4, 5|
| **If a number contains 0, 1, and 3, the highest order rule is applied to all returned numbers.** | User input: "108" | Output: "..., I'm sorry, Dave. I'm afraid I can't do that."|



## Setup/Installation Requirements

* Clone this project to your local drive. Link: https://github.com/JaredReando/beep-boop/
* Open the index.html file in the browser of your choice to view.
* To make changes of your own to this project, open the downloaded directory files into a developer text-editing program.
  I use _[Atom](https://atom.io/)_ (It's free!)

## Support and contact details

_Questions or feedback: jaredreando@gmail.com_

## Technologies

- JavaScript
- jQuery

## Objectives

- [x] Code is clean, well-refactored, and easy-to-read. This includes correct indentation, spacing, and including only necessary comments and debugging tools.

- [x] Commits are made regularly with clear messages that finish the phrase "It will…".

- [x] Project README that includes, bare minimum:
    * Author name
    * Program name
    * Detailed setup instructions
    * Description
    * Copyright and license information

- [x] Site uses branching to return the result.

- [x] jQuery is used to show and hide the result after questions are answered and submitted. (Tip: test your app several times with different answers.)

- [x] Form gathers input from the user.

- [x] Variable names are descriptive of what they represent.

- [x] Web page is styled using Bootstrap and custom CSS.

- [x] The project is in a presentable, portfolio-quality state.

- [x] Required functionality is in place by the Friday deadline.

- [x] Project demonstrates understanding of concepts covered this week. If prompted, you are able to discuss your code with an instructor using correct terminology.

### License

Copyright (c) **Jared Reando**

Licensed under the MIT License
