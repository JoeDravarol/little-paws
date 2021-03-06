const API_URL = "https://dog.ceo/api/breeds/image/random";

const DOG_INFO = {
  fNames: ['Abby',    'Addie',    'Alexis',   'Alice',    'Allie',    'Alyssa',   'Amber',    'Angel',    'Anna', 'Annie',    'Ariel',    'Ashley',   'Aspen',    'Athena',   'Autumn',   'Ava',  'Avery',    'Baby', 'Bailey',   'Basil',    'Bean', 'Bella',    'Belle',    'Betsy',    'Betty',    'Bianca',   'Birdie',   'Biscuit',  'Blondie',  'Blossom',  'Bonnie',   'Brandy',   'Brooklyn', 'Brownie',  'Buffy',    'Callie',   'Camilla',  'Candy',    'Carla',    'Carly',    'Carmela',  'Casey',    'Cassie',   'Chance',   'Chanel',   'Chloe',    'Cinnamon', 'Cleo', 'Coco', 'Cookie',   'Cricket',  'Daisy',    'Dakota',   'Dana', 'Daphne',   'Darla',    'Darlene',  'Delia',    'Delilah',  'Destiny',  'Diamond',  'Diva', 'Dixie',    'Dolly',    'Duchess',  'Eden', 'Edie', 'Ella', 'Ellie',    'Elsa', 'Emma', 'Emmy', 'Eva',  'Faith',    'Fanny',    'Fern', 'Fiona',    'Foxy', 'Gabby',    'Gemma',    'Georgia',  'Gia',  'Gidget',   'Gigi', 'Ginger',   'Goldie',   'Grace',    'Gracie',   'Greta',    'Gypsy',    'Hailey',   'Hannah',   'Harley',   'Harper',   'Hazel',    'Heidi',    'Hershey',  'Holly',    'Honey',    'Hope', 'Ibby', 'Inez', 'Isabella', 'Ivy',  'Izzy', 'Jackie',   'Jada', 'Jade', 'Jasmine',  'Jenna',    'Jersey',   'Jessie',   'Jill', 'Josie',    'Julia',    'Juliet',   'Juno', 'Kali', 'Kallie',   'Karma',    'Kate', 'Katie',    'Kayla',    'Kelsey',   'Khloe',    'Kiki', 'Kira', 'Koko', 'Kona', 'Lacy', 'Lady', 'Layla',    'Leia', 'Lena', 'Lexi', 'Libby',    'Liberty',  'Lily', 'Lizzy',    'Lola', 'London',   'Lucky',    'Lulu', 'Luna', 'Mabel',    'Mackenzie',    'Macy', 'Maddie',   'Madison',  'Maggie',   'Maisy',    'Mandy',    'Marley',   'Matilda',  'Mattie',   'Maya', 'Mia',  'Mika', 'Mila', 'Miley',    'Millie',   'Mimi', 'Minnie',   'Missy',    'Misty',    'Mitzi',    'Mocha',    'Molly',    'Morgan',   'Moxie',    'Muffin',   'Mya',  'Nala', 'Nell', 'Nellie',   'Nikki',    'Nina', 'Noel', 'Nola', 'Nori', 'Olive',    'Olivia',   'Oreo', 'Paisley',  'Pandora',  'Paris',    'Peaches',  'Peanut',   'Pearl',    'Pebbles',  'Penny',    'Pepper',   'Phoebe',   'Piper',    'Pippa',    'Pixie',    'Polly',    'Poppy',    'Precious', 'Princess', 'Priscilla',    'Raven',    'Reese',    'Riley',    'Rose', 'Rosie',    'Roxy', 'Ruby', 'Sadie',    'Sage', 'Sally',    'Sam',  'Samantha', 'Sammie',   'Sandy',    'Sasha',    'Sassy',    'Savannah', 'Scarlet',  'Shadow',   'Sheba',    'Shelby',   'Shiloh',   'Sierra',   'Sissy',    'Sky',  'Smokey',   'Snickers', 'Sophia',   'Sophie',   'Star', 'Stella',   'Sugar',    'Suki', 'Summer',   'Sunny',    'Sweetie',  'Sydney',   'Tasha',    'Tessa',    'Tilly',    'Tootsie',  'Trixie',   'Violet',   'Willow',   'Winnie',   'Xena', 'Zelda',    'Zoe'],
  mNames: ['Abe', 'Abbott',   'Ace',  'Aero', 'Aiden',    'AJ',   'Albert',   'Alden',    'Alex', 'Alfie',    'Alvin',    'Amos', 'Andy', 'Angus',    'Apollo',   'Archie',   'Aries',    'Artie',    'Ash',  'Austin',   'Axel', 'Bailey',   'Bandit',   'Barkley',  'Barney',   'Baron',    'Baxter',   'Bear', 'Beau', 'Benji',    'Benny',    'Bentley',  'Billy',    'Bingo',    'Blake',    'Blaze',    'Blue', 'Bo',   'Boomer',   'Brady',    'Brody',    'Brownie',  'Bruce',    'Bruno',    'Brutus',   'Bubba',    'Buck', 'Buddy',    'Buster',   'Butch',    'Buzz', 'Cain', 'Captain',  'Carter',   'Cash', 'Casper',   'Champ',    'Chance',   'Charlie',  'Chase',    'Chester',  'Chewy',    'Chico',    'Chief',    'Chip', 'CJ',   'Clifford', 'Clyde',    'Coco', 'Cody', 'Colby',    'Cooper',   'Copper',   'Damien',   'Dane', 'Dante',    'Denver',   'Dexter',   'Diego',    'Diesel',   'Dodge',    'Drew', 'Duke', 'Dylan',    'Eddie',    'Eli',  'Elmer',    'Emmett',   'Evan', 'Felix',    'Finn', 'Fisher',   'Flash',    'Frankie',  'Freddy',   'Fritz',    'Gage', 'George',   'Gizmo',    'Goose',    'Gordie',   'Griffin',  'Gunner',   'Gus',  'Hank', 'Harley',   'Harvey',   'Hawkeye',  'Henry',    'Hoss', 'Huck', 'Hunter',   'Iggy', 'Ivan', 'Jack', 'Jackson',  'Jake', 'Jasper',   'Jax',  'Jesse',    'Joey', 'Johnny',   'Judge',    'Kane', 'King', 'Kobe', 'Koda', 'Lenny',    'Leo',  'Leroy',    'Levi', 'Lewis',    'Logan',    'Loki', 'Louie',    'Lucky',    'Luke', 'Marley',   'Marty',    'Maverick', 'Max',  'Maximus',  'Mickey',   'Miles',    'Milo', 'Moe',  'Moose',    'Morris',   'Murphy',   'Ned',  'Nelson',   'Nero', 'Nico', 'Noah', 'Norm', 'Oakley',   'Odie', 'Odin', 'Oliver',   'Ollie',    'Oreo', 'Oscar',    'Otis', 'Otto', 'Ozzy', 'Pablo',    'Parker',   'Peanut',   'Pepper',   'Petey',    'Porter',   'Prince',   'Quincy',   'Radar',    'Ralph',    'Rambo',    'Ranger',   'Rascal',   'Rebel',    'Reese',    'Reggie',   'Remy', 'Rex',  'Ricky',    'Rider',    'Riley',    'Ringo',    'Rocco',    'Rockwell', 'Rocky',    'Romeo',    'Rosco',    'Rudy', 'Rufus',    'Rusty',    'Sam',  'Sammy',    'Samson',   'Sarge',    'Sawyer',   'Scooby',   'Scooter',  'Scout',    'Scrappy',  'Shadow',   'Shamus',   'Shiloh',   'Simba',    'Simon',    'Smoky',    'Snoopy',   'Sparky',   'Spencer',  'Spike',    'Spot', 'Stanley',  'Stewie',   'Storm',    'Taco', 'Tank', 'Taz',  'Teddy',    'Tesla',    'Theo', 'Thor', 'Titus',    'TJ',   'Toby', 'Trapper',  'Tripp',    'Tucker',   'Tyler',    'Tyson',    'Vince',    'Vinnie',   'Wally',    'Walter',   'Watson',   'Willy',    'Winston',  'Woody',    'Wrigley',  'Wyatt',    'Yogi', 'Yoshi',    'Yukon',    'Zane', 'Zeus', 'Ziggy'],
  likesList: ['Ice water from McDonalds','Kisses','Snuggles','Sniffing the air','Biting the wind','Trash cans','Raiding the cat box for treasure','Barking hello to friends','Stealing cat food','Sleeping in the car','Payaya','Stealing socks','New friends','Ear rubs','Sliced hot dogs','Running at top speed inside the house','Causing diversions','Bread','Sunbathing','Running through tall grass','Deep sighs','Ear scratchies','Licking people directly on the mouth','Destroying soft toys','The human bed','Squeaky toys','Sitting with (or on) people','Chicken','Going to bed after midnight',  'Puddles', 'Howling at Sirens','Staring out the window','Bubbles','Peanut butter','String cheese','Pats, rubs, and butt scritches', 'Your dirtiest, stinkiest, sweatiest clothes', 'Toys', 'Puzzles', 'Cheese', 'Bacon', 'Anything stolen off your plate', 'Swimming', 'Car Rides', 'Chasing squirrels', 'A nice, peaceful nap in a quiet spot', 'Sniffing the bushes', 'Sleeping in', 'Playing frisbee', 'Digging holes in the flower bed', 'Staring at you while pooping', 'Stealing blankets off the bed', 'Drinking out of puddles', 'Farting', 'Doing tricks', 'Agility', 'Barking at the delivery person', 'Stealing dirty laundry', 'Chewing your favorite shoe', 'Staring into space', 'Wrestling with friends', 'Going to the dog park', 'Getting as muddy as possible', 'Going on hikes', 'Annoying the cat', 'Playing tug of war', 'Waking you up at 4am for food', 'Staring at you with love', 'Sitting on your lap'],
  dislikesList: ['Eating alone', 'Roombas','Small children','Thunder','Staying clean after a bath','Nail trims','Being groomed','People','Showers','Being bored','Sharing food','Being home alone','Balloons','Suitcases','Being carried','Helicopters','Doorbells','Pillows','Landscapers/lawnmowers','Their own shadow','Going to bed late','Broccoli','Carrots','Vegetables','Vacuum clearners','Puddles', 'Bathing', 'Not being included', 'The neighbor', 'The UPS person', 'Garbage trucks', 'Thunderstorms', 'Wet grass', 'Burrs'],
  factList: ['Remembers every squirrel they have ever seen','Wishes they knew how cars work','Thinks pond water tastes the very best','Can carry three tennis balls at once and is very proud of that.','Eats grass for fun',"Doesn't actually know their own name, just likes your voice.",'Understands more words than you think','Saw a shooting star once','Will only sleep with 2 blankets','Ate an entire cake at a birthday party before anyone noticed','Can hear a bag of cheese opening from half a mile away',"Believes that frogs are smarter than they look","Once gave a grasshopper a ride on their nose","Doesn't understand the stock market",'Can sprint up to 30mph',"Believes they could win Crufts, but can't afford a plane ticket.","Wishes there weren't so many different streaming services.",'Secretly enjoys baths, but will never tell.','Ate a bee and got stung, then did it again the next day','Unsure of the meaning of life, but believes it may involve bacon.','Truly believes they are a cat','Can actually count to 12, but has never had a reason to do so.','Feels a sense of longing when watching birds migrate in the Fall.',"Enjoys watching SNL, but doesn't understand the jokes",'Sheds enough hair to fill a 5-gallon bucket each week.','Responds to commands in English, German, and Klingon.','Only pretends to understand what you are saying, loves you anyway.','Caught a squirrel once, and now dreams about that moment every single night.',
  "Knows exactly how the universe will end, but doesn't care.",'Would be a top-notch violinist, if they had thumbs.','Dreams of breaking into the dog food plant down the road and eating EVERYTHING.','Can see one more color than any other dog. You will never know which one it is.','Won the award for "fastest lick of the kitchen counter" in 2018 (self-awarded).','Ears and tail are the same length (big ears)!','Takes charge and loudly demands treats','Very bouncy, scientists suspects that legs may contain springs.',"Prefers to eat at the same time as the humans - it's only polite!",'Originally from Tijuana, unkown level of fluency in Spanish.','Favorite hobby is sculpting (the fence, with their mouth)','Can eat an entire loaf of bread in one sitting',"Thinks they are the cat's best friend, but the cat considers them an acquaintence, at best.",'Chooses whether to listen to you on a cas-by-case basis','Can escape any harness ever made','Has an extra toe','Caught a butterfly and immediately spit it back out','Fences are less of an obstacle and more of a suggestion','Terrified of the kitten','Once ate an entire pack of gum','Can consume a rawhide chew in 30 seconds','Farts every time they sit down','Can howl on pitch','Will immediately present belly for rubs','Dream job: bacon taste-tester','Career: retired actor/consultant']
}

class Dog {
  constructor() {
    this.gender = 'Gender - ' + this.#generateGender();
    this.name = this.#generateName();
    this.age = 'Age - ' + this.#generateAge();
    this.likes = 'Likes - ' + this.#generateLikes();
    this.dislikes = 'Dislikes - ' + this.#generateDislikes();
    this.funFact = 'Fun Fact - ' + this.#generateFunFact();
    this.image = '';
    this.breed = '';
  }

  // Private Method
  #yatesShuffle(array) {
    const copyArr = [...array];
    let randomIndex, currentIndex = copyArr.length;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [copyArr[currentIndex], copyArr[randomIndex]] = [
        copyArr[randomIndex], copyArr[currentIndex]];
    }

    return copyArr;
  }

  #generateRandomNum(num) {
    return Math.floor( Math.random() * num )
  }

  #generateName() {
    const gender = this.gender.toLowerCase().split('-')[1].trim();

    if (gender === 'male') {
      return DOG_INFO.mNames[ this.#generateRandomNum(DOG_INFO.mNames.length) ]
    } 
    return DOG_INFO.fNames[ this.#generateRandomNum(DOG_INFO.mNames.length) ]
  }

  #generateGender() {
    return this.#generateRandomNum(2) ? 'Male' : 'Female'
  }

  #generateAge() {
    return this.#generateRandomNum(13)
  }

  #generateLikes() {
    return this.#yatesShuffle(DOG_INFO.likesList).slice(0, 2)
  }

  #generateDislikes() {
    return this.#yatesShuffle(DOG_INFO.dislikesList).slice(0, 2)
  }

  #generateFunFact() {
    return DOG_INFO.factList[ this.#generateRandomNum(DOG_INFO.factList.length) ]
  }

  // Public Method

  setImage(url) {
    this.image = url;
  }

  setBreed(breed) {
    this.breed = breed;
  }
}

class BestFriends {
  // Private variables
  #localStorageKey;

  constructor() {
    this.#localStorageKey = 'bestFriends';
    this.collections = this.#initBestFriends();
  }

  // Private Method

  #initBestFriends() {
    return JSON.parse( localStorage.getItem(this.#localStorageKey) ) || [];
  }

  #updateLocalStorage(data) {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(data));
  }

  // Public Method

  updateCollections(data) {
    const newCollections = [...this.collections, data];
    this.collections = newCollections

    this.#updateLocalStorage(newCollections)
  }
}

// General Helper Function
const extractBreed = (url) => {
  // Example: "terrier-welsh", "shiba"
  const [ rawBreedString ] = url.split('/').slice(-2);
  const capitalizeBreed = rawBreedString.split('-').map(word =>  {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1)
  }).join(' ')

  return capitalizeBreed
}

const fetchRandomDogIMG = () => {
  return fetch(API_URL)
    .then(res => res.json())
    .catch(err => {
      console.error(`Error: ${err}`)
    })
}

// UI Helper
function createCardComponent(data) {
  const [_, gender] = data.gender.split('-');

  const markUp = `
    <li class="card expandable">
      <header class="card-header">
        <img src="${data.image}" alt="Picture of doggo">
        <div class="info">
          <h3 class="dog-name">${data.name}</h3>
          <span>${data.breed}</span>
          <span>${gender}</span>
        </div>
      </header>
      <section class="card-content expandable_content">
        <ul>
          <li>${data.age}</li>
          <li>${data.likes}</li>
          <li>${data.dislikes}</li>
          <li>${data.funFact}</li>
        </ul>
      </section>
    </li> 
  `

  return markUp;
}

const renderCardComponent = (htmlMarkup) => {
  const cardsContainer = document.querySelector('#cards');

  cardsContainer.insertAdjacentHTML('beforeend', htmlMarkup)
}

const renderDogInfo = (info) => {
  const eventHandler = {
    dogImg: document.querySelector('#dog-img'),
    dogName: document.querySelector('#dog-name'),
    dogGender: document.querySelector('#gender'),
    dogAge: document.querySelector('#age'),
    dogLikes: document.querySelector('#likes'),
    dogDislikes: document.querySelector('#dislikes'),
    funFact: document.querySelector('#more-info'),
    keyFactName: document.querySelector('#keyfact_dog-name'),
    adoptBtn: document.querySelector('#adopt')
  }

  const { name, gender, age, likes, dislikes, funFact, image } = info;
  
  // Set DOM/HTML
  eventHandler.dogImg.src = image;
  eventHandler.dogName.textContent = name;
  eventHandler.dogGender.textContent = gender;
  eventHandler.dogAge.textContent = age;
  eventHandler.dogLikes.textContent = likes;
  eventHandler.dogDislikes.textContent = dislikes;
  eventHandler.funFact.textContent = funFact;
  eventHandler.keyFactName.textContent = name;

  // Enabled Adopt button
  eventHandler.adoptBtn.disabled = false;
}

// Events helper
const handleExpandCard = ({ target }) => {
  if (target.classList.contains('expandable')) {
    const expandableContent = target.querySelector('.expandable_content');

    expandableContent.classList.toggle('expandable_content--show')
  }
}

function handleAdoptDoggo() {
  // Prevent adopting same dog
  adoptBtn.disabled = true;
  
  adoptedBestFriends.updateCollections(state);

  renderCardComponent( createCardComponent(state) )
}

function handleGenerateDoggo() {
  fetchRandomDogIMG().then(data => {
    const dog = new Dog();
    const imgUrl = data.message;
    const breed = extractBreed(imgUrl);
  
    dog.setImage(imgUrl);
    dog.setBreed(breed)
    
    // Store Current Dog
    state = dog;

    renderDogInfo(state)
  })
}

// Global states
let state;
const adoptedBestFriends = new BestFriends();

// Event Handling
const generateBtn = document.querySelector('#generate');
const cardsContainer = document.querySelector('#cards');
const adoptBtn = document.querySelector('#adopt');

generateBtn.addEventListener('click', handleGenerateDoggo);
adoptBtn.addEventListener('click', handleAdoptDoggo);
cardsContainer.addEventListener('click', handleExpandCard);

// Initial render of Best Friends;
adoptedBestFriends.collections.forEach(doggo => {
  renderCardComponent( createCardComponent(doggo) );
})

// git commit -m "Implement: persist adopted dogs data"