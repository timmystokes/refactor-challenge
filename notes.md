I tried to keep things pretty simple for the refactor, most of my work went into the newsfeed

- Created components from classes
- Added ES6 where reasonable (block scoping, fat arrow syntax, etc)
- Removed jquery - not necessary
- Removed binding of this to functions. No longer necessary with ES6 Arrow function syntax.
- Added call functions passed down to child components