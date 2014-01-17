# Scissors.js

Scissors.js is a library for making literary cut-ups, à la [William Burroughs](http://www.writing.upenn.edu/~afilreis/88v/burroughs-cutup.html) or [Tristan Tzara](http://www.in-vacua.com/tzara.shtml).

To install, clone this repo or:

```bash
wget https://github.com/zaaanderson/scissors.js/raw/master/scissors-min.js
```

then include scissors-min.js in your project.

All the functions are stored in a global object called `Scissors`. To use, say, `scramble()`, call `Scissors.scramble("the string to scramble")`.

## Functions

### scramble(*string*)

Returns *string* with its words in a random order. Splits on spaces.

#### Example:

>Immured in Heaven!  
>What a cell!  
>Let every Bondage be,  
>Thou sweetest of the Universe,  
>Like that which ravished thee!  

could give

>be,  
>of in that a Thou Universe,  
>every ravished the What Let cell!  
>Like sweetest Bondage which Heaven!  
>thee! Immured  
