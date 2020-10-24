
<h1>PLANET SHIFT Memory-Game</h1>

[View the live game here](https://mihaelasandrea.github.io/planet-shift/)
<p> This is a memory game created with the scope of having 
    fun when taking a break from working, learning, etc. The strategy was to create a 
    game for the user to relax in a toning way for the mind. Memory-games are known 
    for some positive effects they can have sometimes on brain functions like attention,
     concentration or visual recognition for people at all ages.
</p>
<p>
    The chosen theme is astro-space, specifically planets from our Solar System. 
    The reason behind this theme choice is the fact that the subject related to space 
    and time infinity usually doesn't trigger negative emotions for people, but on the
     contrary, it gives them a feeling of trust and relief and helps to disconnect from the 
     daily routine.
</p>

<h2 align="center"><img src="https://easycaptures.com/fs/uploaded/1498/0902873388.png"></h2>

# User Experience
## User Stories
1. As a user I want to be able to play the game on different devices.
1. As a user I want to be able to play the memory-game smoothly.
1. As a user I want to be able to mute and unmute the sounds.
1. As a user I want to find information about the game and the game-rules.

## Design
### Color Scheme
-   The colour palette for the game is:
    -   for the background gradient blue set vertically starting from top black/dark-blue going
        lighter towards the middle and going darker to dark-blue/black towards bottom. #000000, #0f73b6d8, #000000;
    -   for the title, game-info and buttons text this grey #a6b7c9;
    -   title shadow rgb(252, 252, 253);
    -   buttons shadow rgb(138, 138, 158);
    -   for the modal box background this colour #0b3d55 and shadow #818899.
### Typography
-   [Share Tech Mono](https://fonts.google.com/specimen/Share+Tech+Mono?query=tec)  google font is the main font used throughout the whole game text.
-   Sans Serif for the fallback font.
### Imagery
-   The cards display on the font-face images of different planets from our solar system on a square 
black backgound. The planets' bright colours stand out from their black background and this contrast 
allows the user easily grasp and retain the object from the card.

<h2 align="center"><img src="https://easycaptures.com/fs/uploaded/1497/5229730441.png"></h2>

-   On the back face, the cards display an image of outerspace.

<h2 align="center"><img src="https://easycaptures.com/fs/uploaded/1497/1226816251.jpg"></h2>

### Music and Sounds
-   Background music is set at 50% volume so that the user can hear the game commands sounds 
    (when flip card, match cards, game over and victory).
-   The chosen background music builds up op an progressive tempo and has a pleasant energizing tone and rythm.
## Wireframes
-   Wireframes [View](https://www.figma.com/file/sxreNPL15miV7jLFIaidk5/memory-game?node-id=0%3A1)

<h2 align="center"><img src="https://easycaptures.com/fs/uploaded/1497/2212875549.png"></h2>



# Features
-   It's responsive on different device sizes
-   Contains interactive elements such as:
    -   Background music which plays by default and can be muted by option.
    -   Different sounds for each interactive user command: when flip card, match cards, game 
            over and victory which can be muted by option.
    -   Shows number of flips (named in the game "shifts" for consistency reasons - game name "Planet Shift").
    -   Shows remaining time.
    -   For each game restart cards are shuffled.
## Features left to implement
-   The user can choose from beginner (50 seconds remaining time) or advanced level (100 seconds remaining time).
-   While playing the user can restart the game at any time.
-   Modal for scores.
# Technologies Used
### Languages Used
-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://nl.wikipedia.org/wiki/JavaScript)
### Frameworks, Libraries & Programs Used
1. [Bootstrap 4.5.0:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the game.
1. [Font Awesome](https://fontawesome.com/)
    - Font Awesome was used to add the social-media icons in the footer of the page.
1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Share Tech Mono' font into the style.css file which is used on all text throughout the game.
1. [jQuery:](https://jquery.com/)
    - jQuery was used for the interactive features.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Figma:](https://www.figma.com/)
    - Figma was used to create the [wireframes](https://www.figma.com/file/sxreNPL15miV7jLFIaidk5/memory-game?node-id=0%3A1) during the design process.
1. [PicResize:](https://picresize.com/)
    - PicResize was used to resize the pictures used in the game.
1. [Easycaptures](https://easycaptures.com/)
    - EasyCaptures was used to host the mockup, the sample card images, the html, css and javascript validation results in the README file.
# Testing
## Testing User Stories from User Experience (UX) Section
1. As a user I want to be able to play the game on different devices.

    1. Card images display well on devices from different sizes.
    2. Text is easy to be read on small devices.

2. As a user I want to be able to play the memory-game smoothly.

    1. The cards flip up and down easily with no issue. 
    2. Images are easy to see unobstructed from the background.
    3. The chosen colours and design follow a consistent styling.
    4. The commands are easy to find and understand.

3. As a user I want to be able to mute and unmute the sounds.

    1. Mute/Unmute buttons are easy to find at the top of the page.
    2. The game remains muted after starting another game.
    3. Both background music and control sounds (flip-sound, match-sound, victory-sound.
     and gameover-sound) go muted when click on mute button and go back unmuted when press unmute button.

4. As a user I want to find information about the game and the game-rules.

    1. The modal-box is easy to open by clicking the button down the page.
    2. When clicked, the modal-box opens up and presents the game information clearly, in a very simple language.
    3. The user can close the box easily by clicking on the close button or everywhere outside the modal-box.

## Validation
-   [W3C Markup Validator](https://validator.w3.org/) View [results](https://easycaptures.com/fs/uploaded/1498/4114442852.png)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) View [results](https://easycaptures.com/fs/uploaded/1498/2110581351.png)
-   [JavaScript validator](https://jshint.com/) View [results](https://easycaptures.com/fs/uploaded/1498/1830005688.png)
## Further Testing
-   The game was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
-   The game was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX.
-   Friends and family members were asked to review the game to point out any bugs and/or user experience issues.
# Deployment
## GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

## Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

## Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

# Credits
## Audio
-   Background music free downloaded from [here](https://www.youtube.com/watch?v=AUoJdpB0v1w)
-   Game-over sound free downloaded from [here](https://www.zapsplat.com/sound-effect-category/lasers-and-weapons/page/5/)
-   Victory, Match and Click sounds purchased from [here](https://www.epidemicsound.com/account/license-receipts/purchase/DL-ypao-cy91ssv0f7?message=successful_payment)
## Images
-   callisto image source [here](https://commons.wikimedia.org/w/index.php?curid=45044)
-   earth image source [here](https://commons.wikimedia.org/w/index.php?curid=43894484)
-   ganymede image source [here](https://commons.wikimedia.org/w/index.php?curid=45819345)
-   jupiter image source [here](https://commons.wikimedia.org/w/index.php?curid=32799232)
-   neptune image source [here](https://commons.wikimedia.org/w/index.php?curid=82476611)
-   osiris image source [here](https://commons.wikimedia.org/w/index.php?curid=56489423)
-   titan image source [here](https://commons.wikimedia.org/w/index.php?curid=44822294)
-   uranus image source [here](https://commons.wikimedia.org/w/index.php?curid=5649239)
-   space image source [here](https://commons.wikimedia.org/w/index.php?curid=6756556)
-   backround image dark space  source [here](https://wallpapersafari.com/w/4ncxJI)
## Tutorials
<p>My personal scope of creating this memory game was learning how to juggle with javascript functions and algorithms
    and to better undestand the applicability of the powerful tools that this intricate programming language
    has to offer. I have to admit that I have understood a big deal of logical javascript behaviour while 
    following these tutorials and they offered me important support during the creation of this project.</p>

-   I have taken inspiration as for the structure of the memory game [here](https://www.youtube.com/watch?v=28VfzEiJgy4)
-   I have followed the walkthrough tutorial for the game commands in javascript [here](https://www.youtube.com/watch?v=3uuQ3g92oPQ&t=395s)
## Other 
-   Buttons style box-shadow inspiration from [here](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_box-shadow2)
-   Modal box inspiration from [here](https://www.w3schools.com/howto/howto_css_modals.asp)
## Acknowledgements:
-   My Mentor Medale Oluwafemi for continuous helpful feedback support and valuable guidance with UX experience
-   Tutor support at Code Institute for their support. Special thanks to Stephan for helping me to realize where I needed to call the function
     so that the code I wrote actually worked.
-   Student Care
-   Slack Community and especially to Mr_Bim_alumni for helping me realize why the function was miswritten.
-   [Edabit programme](https://edabit.com/) which helped me better understanding javascript syntax while practicing on different challenges.