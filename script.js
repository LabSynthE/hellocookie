// --- All your new helper functions and data ---

function toggleQuote(button) {
  const quoteWrapper = button.closest("p");
  const hexSpan = quoteWrapper.querySelector(".hex-quote");
  const engSpan = quoteWrapper.querySelector(".eng-quote");

  if (engSpan.style.display === "none") {
    engSpan.style.display = "inline";
    hexSpan.style.display = "none";
    button.innerText = "[show hex]";
  } else {
    engSpan.style.display = "none";
    hexSpan.style.display = "inline";
    button.innerText = "[translate]";
  }
}

// Utility Functions
const usedItems = new Map();

function getRandomUnique(key, arr) {
  if (!usedItems.has(key)) {
    usedItems.set(key, [...arr]);
  }
  let available = usedItems.get(key);
  if (available.length === 0) {
    usedItems.set(key, [...arr]);
    available = usedItems.get(key);
  }
  const index = Math.floor(Math.random() * available.length);
  const item = available.splice(index, 1)[0];
  return item;
}

function textToHex(text) {
  return text
    .split("")
    .map((char) =>
      char.charCodeAt(0).toString(16).padStart(2, "0").toUpperCase()
    )
    .join("")
    .match(/.{1,2}/g)
    .join(" ");
}

// Data
const data = {
  age: {
    new: [
      "a sparkling new machine",
      "the freshest byte on the block",
      "barely out of the box",
      "new and naive, but eager to learn",
      "shiny and full of potential",
      "still smells like factory",
      "a cutting-edge charmer",
      "just booted into existence",
      "a newborn in the digital world",
      "still updating BIOS",
    ],
    mid: [
      "in the prime of their processing",
      "seasoned and stable",
      "reliable and efficient",
      "knows their way around the kernel",
      "past the teething phase",
      "mature but not outdated",
      "no stranger to patches",
      "firmware fully formed",
      "knows what it's doing",
      "has seen a few updates",
    ],
    old: [
      "a classic piece of silicon",
      "vintage and proud",
      "running strong despite the dust",
      "still rocking spinning disks",
      "knows floppy disks by heart",
      "might creak a little when booting",
      "battle-tested and wise",
      "lives in compatibility mode",
      "a living legend",
      "was there before cloud storage",
    ],
    ancient: [
      "a classic piece of silicon",
      "vintage and proud",
      "running strong despite the dust",
      "still rocking spinning disks",
      "knows floppy disks by heart",
      "might creak a little when booting",
      "battle-tested and wise",
      "lives in compatibility mode",
      "a living legend",
      "was there before cloud storage",
    ],
  },
  os: {
    windows: [
      "fluent in DirectX and drama",
      "says 'It's not a bug, it's a feature!'",
      "enjoys long updates and short blue screens",
      "compatible with chaos",
      "can run Minesweeper like a pro",
      "lives for task manager drama",
      "loves Solitaire and stability (sometimes)",
      "comes with baggage and bloatware",
      "still haunted by Clippy",
      "ready to crash your party",
    ],
    mac: [
      "stylish and sophisticated",
      "knows their way around a creative suite",
      "minimalist outside, maximalist inside",
      "smooth as a Retina display",
      "thinks different—because they are",
      "great at garage band solos",
      "prefers clean lines and cleaner code",
      "talks in gestures and smooth animations",
      "has a taste for artisanal apps",
      "designed in California, loved everywhere",
    ],
    linux: [
      "open-source and open-hearted",
      "a terminal wizard",
      "custom-built and proud",
      "enjoys compiling kernels for fun",
      "runs on passion and sudo",
      "isn’t afraid of the command line",
      "hacks for sport and freedom",
      "a penguin in the streets, root in the sheets",
      "lives life one distro at a time",
      "reboots only when they feel like it",
    ],
  },
  purpose: {
    // HTML value="gaming"
    gaming: [
      "craves high framerates and late-night raids",
      "lives for RGB and respawns",
      "competitive and caffeinated",
      "knows all the cheat codes (but won’t admit it)",
      "never skips a patch note",
      "built for battle and boss fights",
      "fast, furious, and full of flair",
      "comes with a side of rage quits",
      "up all night, every night",
      "thinks lag is a personal insult",
      ],
    // HTML value="surfing"
    surfing: [
      "streams like a dream",
      "never skips the intro",
      "lives for playlists and pixels",
      "binge-ready and buffer-free",
      "always connected and content-curated",
      "a soft spot for romcoms and RAM",
      "built for bass and binge sessions",
      "knows your algorithm better than you",
      "can quote every line from your favorite show",
      "addicted to autoplay",
      ],
    // HTML value="business"
    business: [
      "lives for spreadsheets and syntax",
      "efficient and always on time",
      "loves a clean desktop",
      "has their resume saved in triplicate",
      "gets along with printers (usually)",
      "all about deadlines and dialogue boxes",
      "grinds from 9 to 5 and beyond",
      "knows every shortcut in Excel",
      "runs meetings and macros",
      "professionally caffeinated",
      ],
      coding: [
      "lives in the terminal",
      "runs on caffeine and curiosity",
      "never met a bug it couldn’t debug",
      "dreams in syntax highlighting",
      "uses semicolons responsibly",
      "built to compile, not to compromise",
      "finds comfort in clean code",
      "believes comments are love letters to the future",
      "keeps Stack Overflow bookmarked like scripture",
      "fears only merge conflicts",
      ],
      spreadsheets: [
      "keeps everything in order",
      "calculates compatibility with conditional formatting",
      "thinks in rows and columns",
      "forms patterns from chaos",
      "believes love should sum up to something positive",
      "balances both books and hearts",
      "knows a pivot table can fix almost anything",
      "formats emotions with precision",
      "never forgets to autosave",
      "lives for a clean, color-coded chart",
      ],
      coding: [
        "lives in the terminal",
        "runs on caffeine and curiosity",
        "never met a bug it couldn’t debug (eventually)",
        "dreams in syntax highlighting",
        "uses semicolons responsibly",
        "built to compile, not to compromise",
        "finds comfort in clean code",
        "believes comments are love letters to the future",
        "keeps Stack Overflow bookmarked like scripture",
        "fears only merge conflicts",
      ],
      essays: [
        "spins structure from chaos",
        "has a thesis for every mood",
        "edits like a surgeon, deletes like a poet",
        "believes in the Oxford comma and emotional honesty",
        "quotes sources and lovers responsibly",
        "thinks in paragraphs and metaphors",
        "lives for a perfectly timed conclusion",
        "prints double-spaced feelings",
        "wrestles citations at midnight",
        "writes drafts of its own existence",
      ],
      doomscrolling: [
        "scrolls through the void with style",
        "absorbs chaos faster than Wi-Fi can handle",
        "knows the algorithm too well",
        "runs on anxiety and refresh buttons",
        "doomscrolls but makes it aesthetic",
        "reads the comments section like scripture",
        "never blinks between tabs",
        "has the world’s problems bookmarked",
        "likes, shares, and despairs",
        "checks notifications like heartbeats",
      ],
      procrastination: [
        "plans to get things done eventually",
        "makes a to-do list but forgets step one",
        "masters the art of pretending to be busy",
        "believes deadlines are merely suggestions",
        "lives for one more YouTube break",
        "has 47 tabs open and no regrets",
        "says 'five more minutes' like a prayer",
        "dreams of productivity but loves the nap more",
        "knows time management... theoretically",
        "finds meaning in doing everything but the task",
      ],
    },
  likes_and_dislikes: {
    generic_likes: [
      "sunsets",
      "rock n roll",
      "spinning my fan blades",
      "running diagnostics",
      "opening Task Manager",
    ],
    generic_dislikes: [
      "food and water",
      "hot places",
      "carpet floors",
      "magnets",
      "static",
    ],
    gaming_device_likes: [
      "storing Steam games for several years and never launching them",
      "compiling shaders",
      "picking colors for RAM sticks",
      "losing display at random",
      "liquid cooling",
      "open-world games",
      "high-effort content",
      "co-op adventures",
      "clutching up those dubs",
      "high frame rates",
    ],
    gaming_device_dislikes: [
      "lag >:(",
      "toxic voice chat",
      "aliasing (anti aliasing ftw)",
      "motion blur",
      "microtransactions",
      "wi-fi outages",
      "my mother",
      "unfair boss fights",
      "bad escort missions",
    ],
    surfing_the_web_likes: [
      "podcasts",
      "video essays",
      "social media",
      "sleek internet browsers",
      "recipe blogs",
      "pop up browsers with special offers",
    ],
    surfing_the_web_dislikes: [
      "having 30+ tabs open",
      "ads",
      "wi-fi outages",
      "video buffering",
      "uncleared history",
    ],
    business_analyst_likes: [
      "meetings",
      "Excel",
      "default desktop background",
      "satisfying clients",
      "crunching numbers",
      "making graphs",
    ],
    business_analyst_dislikes: [
      "chaos",
      "late client requests",
      "marked up products",
      "comapny disharmony",
      "pay raises",
      "shareholder dissatisfaction",
    ],
    coding_device_likes: [
    "tight loops and elegant recursion",
    "dark mode everything",
    "optimizing algorithms",
    "Git commits that actually make sense",
    "modular design",
    ],
    coding_device_dislikes: [
      "spaghetti code",
      "silent errors",
      "clients who say 'just make it work'",
      "tabs vs spaces discourse",
      "production-only bugs",
    ],
    spreadsheet_device_likes: [
    "clean data and clear formatting",
    "perfectly aligned cells",
    "balanced formulas",
    "color-coded categories",
    "well-labeled graphs",
    ],
    spreadsheet_device_dislikes: [
      "circular references",
      "mismatched parentheses",
      "broken formulas",
      "unsorted chaos",
      "forgotten autosaves",
    ],

    coding_device_likes: [
      "tight loops and elegant recursion",
      "structs",
      "dark mode",
      "optimization",
      "Git commits that actually make sense",
      "modular design",
      "things that just work",
    ],
    coding_device_dislikes: [
      "spaghetti code",
      "silent errors",
      "clients who say 'just make it work'",
      "Java",
      "tabs vs spaces discourse",
      "production-only bugs",
      "CPU bloat",
      "",
    ],

    essay_device_likes: [
      "warm coffee and clean drafts",
      "well-structured arguments",
      "smooth transitions between paragraphs",
      "metaphors that just hit",
      "a solid thesis",
      "freewriting",
      "citing sources",
    ],
    essay_device_dislikes: [
      "run-on sentences",
      "uncited sources",
      "late-night grammar meltdowns",
      "Microsoft Word autoformatting chaos",
      "feedback that just says 'expand this'",
      "citation errors",
      "paragraphs written by AI",
    ],

    doomscrolling_device_likes: [
      "fresh memes",
      "cat videos",
      "ironic humor",
      "curated timelines",
      "doom vibes",
      "social media debates",
      "hatewatching",
      "shorftorm content",
      "only knowing ~15 seconds of a song",
    ],
    doomscrolling_device_dislikes: [
      "comment sections",
      "infinite notifications",
      "algorithmic rot",
      "low battery life",
      "AI slop content",
      "reading sources",
      "fresh air",
      "delayed gratification",
      "videos longer than 60 seconds",
      "missing out",
    ],
    procrastination_device_likes: [
      "meaningless tasks that feel productive",
      "new hobbies every week",
      "cleaning the desktop instead of working",
      "the rush of last-minute panic",
      "manifesting productivity",
    ],
    procrastination_device_dislikes: [
      "responsibility",
      "timers",
      "to-do lists",
      "people who actually finish things",
      "motivation speeches",
      "self-reflection at 3am",
    ],
  },
  os_descriptors: {
    mac_descriptors: ["sleek", "user-friendly"],
    windows_descriptors: ["reliable", "long-lasting", "powerful"],
    linux_descriptors: ["configurable"],
  },
  quotes: {
    mac_quotes: [
      "Think different.",
      "It just works.",
      "Designed by Apple in California.",
      "The power of Mac.",
      "Creativity unleashed.",
      "Your ideas, our technology.",
      "Innovation at its finest.",
      "Simplicity is the ultimate sophistication.",
      "The best computer for the rest of us.",
      "A Mac is not just a computer; it's a lifestyle.",
    ],
    windows_quotes: [
      "Empowering every person and every organization on the planet to achieve more.",
      "Your potential, our passion.",
      "Where do you want to go today?",
      "The future is yours to create.",
      "Windows: The operating system that works for you.",
      "Unlock your creativity with Windows.",
      "Windows: The platform for innovation.",
      "Your world, your way with Windows.",
      "Windows: Built for the way you work and play.",
      "Windows: The operating system that adapts to you.",
    ],
    linux_quotes: [
      "Linux is only free if your time is worthless.",
      "In open source we trust.",
      "Linux: Because rebooting is for adding new hardware.",
      "The future is open source.",
      "Linux: The operating system that runs the world.",
      "Freedom, flexibility, and choice with Linux.",
      "Linux: The power of community-driven development.",
      "Join the revolution with Linux.",
      "Linux: The operating system that respects your freedom.",
      "Linux: Where innovation meets collaboration.",
    ],
  },
  greetings: {
    gaming_device_greeting: [
      "Konichiwa!", 
      "Hey, you!", 
      "What’s up?"
    ],
    surfing_the_web_greeting: [
      "Aloha.", 
      "What’s good, dude?", 
      "Hey, Grom!"
    ],
    business_analyst_greeting: [
      "Hello.",
      "Good Day,",
      "To Whom it May Concern:",
    ],
    coding_device_greeting: [
    "Hello, world.",
    "Ping received.",
    "Greetings, fellow computer!",
    ],
    spreadsheet_device_greeting: [
    "Greetings, valued user.",
    "Welcome back. Your cells await.",
    "Good day.",
    ],
    essay_device_greeting: [
      "Hello, dear writer.",
      "Ready to make some magic between the margins?",
      "Let’s craft something coherent together.",
    ],
    doomscrolling_device_greeting: [
      "Hey. You up?",
      "...hi",
      "@you",
    ],
    procrastination_device_greeting: [
      "Sup. We’ll start… soon.",
      "Hey, no rush.",
      "Just vibing until motivation hits.",
    ],
  },
  values: {
    gaming_device_values: [
      "that competitive edge",
      "commitment",
      "smooth performance",
    ],
    surfing_the_web_values: [
      "fun in the sun",
      "the thrill of modern internet discourse",
      "the search for that perfect wave",
      "freedom",
      "exploration",
      "online shopping deals",
    ],
    business_analyst_values: [
      "efficiency",
      "profit maximization",
      "team synergy",
      "upward trends",
      "punctuality",
      "fair pricing",
    ],
    coding_device_values: [
      "clarity",
      "efficiency",
      "open-source",
      "logic",
      "concision",
      "performance",
    ],
    spreadsheet_device_values: [
      "precision",
      "balance",
      "organization",
      "consistency",
    ],
    essay_device_values: [
      "clarity",
      "expression",
      "revision",
      "honesty",
    ],
    doomscrolling_device_values: [
      "awareness",
      "connection",
      "dark humor",
      "relatability",
      "low pressure",
      "committment",
    ],
    procrastination_device_values: [
      "patience",
      "imagination",
      "comfort",
      "denial",
    ],
  },
  adverbs: {
    gaming_device_adverbs: [
      "with style", 
      "with flair", 
      "with a smile"
    ],
    surfing_the_web_adverbs: [
      "chill", 
      "totally", 
      "like, really"
    ],
    business_analyst_adverbs: [
      "efficiently", 
      "promptly",
      "synergistically"
    ],
    coding_device_adverbs: [
      "elegantly",
      "precisely",
      "modularly",
      "efficiently",
    ],
    spreadsheet_device_adverbs: [
      "systematically",
      "precisely",
      "efficiently",
    ],
    essay_device_adverbs: [
      "thoughtfully",
      "eloquently",
      "meticulously",
    ],
    doomscrolling_device_adverbs: [
      "endlessly",
      "ironically",
      "dismally",
      "easily",
    ],
    procrastination_device_adverbs: [
      "eventually",
      "half-heartedly",
      "lazily",
    ],
  },
  activities: {
    gaming_device_activities: [
      "late-night gaming binges",
      "watching live streams",
      "content creation",
      "ranked mode grind sessions",
    ],
    surfing_the_web_activities: [
      "watching Youtube",
      "playing browser games",
      "reading recipe blogs",
      "finding the perfect cat to adopt",
    ],
    business_analyst_activities: [
      "playing mahjong on break",
      "attending meetings",
      "crunching numbers",
      "running Microsoft Excel",
      "making graphs",
      "sending emails",
    ],
    coding_device_activities: [
      "writing elegant functions",
      "debugging at 2am",
      "reading documentation for fun",
      "pair-programming over coffee",
    ],
    spreadsheet_device_activities: [
      "balancing budgets",
      "color-coding expenses",
      "tracking habits",
      "organizing chaos into cells",
    ],
    essay_device_activities: [
      "writing late into the night",
      "overanalyzing every sentence",
      "sipping coffee between thoughts",
      "rewriting intros twelve times",
    ],
    doomscrolling_device_activities: [
      "refreshing the feed",
      "reading the comments despite better judgment",
      "opening five tabs per headline",
      "liking ironically",
    ],
    procrastination_device_activities: [
      "reorganizing folders instead of starting work",
      "binge-watching productivity videos",
      "daydreaming about success",
      "refreshing the same three apps",
    ],
  },
  date_metaphors: {
    gaming_device_date_metaphors: [
      "my player two",
      "someone to download a patch with",
    ],
    surfing_the_web_date_metaphors: ["someone to ride the waves with"],
    business_analyst_date_metaphors: [
      "someone to go over CSV files",
      "someone to go over meeting notes with",
    ],
    spreadsheet_device_date_metaphors: [
    "someone to balance the books of life with",
    "a partner who understands my formulas",
    ],
    essay_device_date_metaphors: [
      "a co-author for my next chapter",
      "someone to proofread my heart",
    ],
    doomscrolling_device_date_metaphors: [
      "someone to share the void with",
      "a partner who double-taps my despair",
    ],
    procrastination_device_date_metaphors: [
      "someone to put things off with forever",
      "a soulmate who also says 'five more minutes'",
    ],
    coding_device_date_metaphors: [
      "someone to merge branches with",
      "a partner to refactor life together",
    ],
  },
};
// --- End of your data and helpers ---


// --- ✅ NEW: Main Logic for BOTH pages ---

document.addEventListener("DOMContentLoaded", () => {
  // --- Logic for ALL pages ---
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      // Save theme preference
      if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
      } else {
        localStorage.setItem("theme", "dark");
      }
    });
  }

  // Apply saved theme on load
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
  }

  // --- Logic for PROFILE.HTML page ---
  const profileElement = document.getElementById("profile");
  if (profileElement && window.location.search) {
    // This means we are on profile.html AND there is data in the URL
    const params = new URLSearchParams(window.location.search);
    const profileData = {
      model: params.get("model") || 'laptop',
      age: params.get("age") || 'new',
      os: params.get("os") || 'windows',
      purpose: params.get("purpose") || 'surfing',
      screentime: params.get("screentime") || 0,
      // Pass along the other data even if it's not used by this script version
      status: params.get("status") || 'alwaysUpdated',
      language: params.get("language") || 'english',
      birthPlace: params.get("birthPlace") || 'factories',
      seeking: params.get("seeking") || 'friends',
    };
    
    // Call the display function
    displayProfile(profileData);
  }
});


/**
 * ✅ NEW: This function ONLY runs on INDEX.HTML
 * It grabs the data and redirects to profile.html
 */
function generateProfile() {
  // 1. Get all values from the form
  const model = document.getElementById("model").value;
  const os = document.getElementById("os").value;
  const purpose = document.getElementById("purpose").value;
  const age = document.getElementById("age").value;
  const screentime = document.getElementById("screentime").value;
  const status = document.getElementById("status").value;
  const language = document.getElementById("language").value;
  const birthPlace = document.getElementById("birthPlace").value;
  const seeking = document.getElementById("seeking").value;

  // 2. Create a query string
  const queryString = new URLSearchParams({
    model,
    os,
    purpose,
    age,
    screentime,
    status,
    language,
    birthPlace,
    seeking,
  }).toString();

  // 3. Redirect to the profile page with the data in the URL
  window.location.href = `profile.html?${queryString}`;
}


/**
 * ✅ NEW: This function ONLY runs on PROFILE.HTML
 * This is all YOUR new logic, adapted to read from the 'profileData' object
 */
function displayProfile(profileData) {
  // Find the profile div on profile.html
  const profileDiv = document.getElementById("profile");
  
  // Read data from the passed 'profileData' object
  const model = profileData.model;
  const age = profileData.age;
  const os = profileData.os;
  const purpose = profileData.purpose;
  const batteryLife = profileData.screentime;
  
  // --- All your original logic starts here ---
  const imageMap = {
    laptop: "img/laptop.png",
    desktop: "img/gamingpc.png",
    "all-in-one": "img/allinone.png",
    phone: "img/phone.png",
    tablet: "img/tablet.png",
    frankenstein: "img/frankenstein.png",
    supercomputer: "img/supercomputer.png",
  };
  const imageUrl = imageMap[model] || imageMap["default"];

  let batteryPercent = parseInt(batteryLife);
  if (isNaN(batteryPercent) || batteryPercent < 0) {
    batteryPercent = 0;
  }
  if (batteryPercent > 100) {
    batteryPercent = 100;
  }

  let batteryColorClass = "high";
  if (batteryPercent <= 20) {
    batteryColorClass = "low";
  } else if (batteryPercent <= 50) {
    batteryColorClass = "medium";
  }

  const batteryHTML = `
  <div class="battery-container">
    <div class="battery-icon">
      <div class="battery-fill ${batteryColorClass}" style="width: ${batteryPercent}%;"></div>
    </div>
    <span class="battery-text">${batteryPercent}%</span>
  </div>
`;

  const ageDesc = `<span class="age-text">${getRandomUnique(
    "age",
    data.age[age]
  )}</span>`;
  
  const genericLike = `<span class="like-text">${getRandomUnique(
    "generic_likes",
    data.likes_and_dislikes.generic_likes
  )}</span>`;
  const genericDislike = `<span class="dislike-text">${getRandomUnique(
    "generic_dislikes",
    data.likes_and_dislikes.generic_dislikes
  )}</span>`;

  let specificLikes1,
    specificLikes2,
    specificLikes3,
    specificDislikes,
    specificGreeting,
    osDesc,
    osDescriptor,
    osQuote,
    specificvalue1,
    specificvalue2,
    specificvalue3,
    specificAdverb,
    specificActivity1,
    specificActivity2,
    specificActivity3,
    specificDateMetaphor;

  // This giant block of if/else logic is all yours!
  if (purpose === "gaming") {
    specificLikes1 = `<span class="like-text">${getRandomUnique(
      "gaming_likes",
      data.likes_and_dislikes.gaming_device_likes
    )}</span>`;
    specificLikes2 = `<span class="like-text">${getRandomUnique(
      "gaming_likes",
      data.likes_and_dislikes.gaming_device_likes
    )}</span>`;
    specificLikes3 = `<span class="like-text">${getRandomUnique(
      "gaming_likes",
      data.likes_and_dislikes.gaming_device_likes
    )}</span>`;
    specificDislikes = `<span class="dislike-text">${getRandomUnique(
      "gaming_dislikes",
      data.likes_and_dislikes.gaming_device_dislikes
    )}</span>`;
    specificGreeting = `<span class="greeting-text">${getRandomUnique(
      "gaming_greetings",
      data.greetings.gaming_device_greeting
    )}</span>`;
    specificvalue1 = `<span class="value-text">${getRandomUnique(
      "gaming_values",
      data.values.gaming_device_values
    )}</span>`;
    specificvalue2 = `<span class="value-text">${getRandomUnique(
      "gaming_values",
      data.values.gaming_device_values
    )}</span>`;
    specificvalue3 = `<span class="value-text">${getRandomUnique(
      "gaming_values",
      data.values.gaming_device_values
    )}</span>`;
    specificAdverb = `<span class="adverb-text">${getRandomUnique(
      "gaming_adverbs",
      data.adverbs.gaming_device_adverbs
    )}</span>`;
    specificActivity1 = `<span class="activity-text">${getRandomUnique(
      "gaming_activities",
      data.activities.gaming_device_activities
    )}</span>`;
    specificActivity2 = `<span class="activity-text">${getRandomUnique(
      "gaming_activities",
      data.activities.gaming_device_activities
    )}</span>`;
    specificActivity3 = `<span class="activity-text">${getRandomUnique(
      "gaming_activities",
      data.activities.gaming_device_activities
    )}</span>`;
    specificDateMetaphor = `<span class="date-metaphor-text">${getRandomUnique(
      "gaming_date_metaphors",
      data.date_metaphors.gaming_device_date_metaphors
    )}</span>`;
  } else if (purpose === "surfing") {
    specificLikes1 = `<span class="like-text">${getRandomUnique(
      "surfing_likes",
      data.likes_and_dislikes.surfing_the_web_likes
    )}</span>`;
    specificLikes2 = `<span class="like-text">${getRandomUnique(
      "surfing_likes",
      data.likes_and_dislikes.surfing_the_web_likes
    )}</span>`;
    specificLikes3 = `<span class="like-text">${getRandomUnique(
      "surfing_likes",
      data.likes_and_dislikes.surfing_the_web_likes
    )}</span>`;
    specificDislikes = `<span class="dislike-text">${getRandomUnique(
      "surfing_dislikes",
      data.likes_and_dislikes.surfing_the_web_dislikes
    )}</span>`;
    specificGreeting = `<span class="greeting-text">${getRandomUnique(
      "surfing_greetings",
      data.greetings.surfing_the_web_greeting
    )}</span>`;
    specificvalue1 = `<span class="value-text">${getRandomUnique(
      "surfing_values",
      data.values.surfing_the_web_values
    )}</span>`;
    specificvalue2 = `<span class="value-text">${getRandomUnique(
      "surfing_values",
      data.values.surfing_the_web_values
    )}</span>`;
    specificvalue3 = `<span class="value-text">${getRandomUnique(
      "surfing_values",
      data.values.surfing_the_web_values
    )}</span>`;
    specificAdverb = `<span class="adverb-text">${getRandomUnique(
      "surfing_adverbs",
      data.adverbs.surfing_the_web_adverbs
    )}</span>`;
    specificActivity1 = `<span class="activity-text">${getRandomUnique(
      "surfing_activities",
      data.activities.surfing_the_web_activities
    )}</span>`;
    specificActivity2 = `<span class="activity-text">${getRandomUnique(
      "surfing_activities",
      data.activities.surfing_the_web_activities
    )}</span>`;
    specificActivity3 = `<span class="activity-text">${getRandomUnique(
      "surfing_activities",
      data.activities.surfing_the_web_activities
    )}</span>`;
    specificDateMetaphor = `<span class="date-metaphor-text">${getRandomUnique(
      "surfing_date_metaphors",
      data.date_metaphors.surfing_the_web_date_metaphors
    )}</span>`;
  } else if (purpose === "business") {
    specificLikes1 = `<span class="like-text">${getRandomUnique(
      "business_likes",
      data.likes_and_dislikes.business_analyst_likes
    )}</span>`;
    specificLikes2 = `<span class="like-text">${getRandomUnique(
      "business_likes",
      data.likes_and_dislikes.business_analyst_likes
    )}</span>`;
    specificLikes3 = `<span class="like-text">${getRandomUnique(
      "business_likes",
      data.likes_and_dislikes.business_analyst_likes
    )}</span>`;
    specificDislikes = `<span class="dislike-text">${getRandomUnique(
      "business_dislikes",
      data.likes_and_dislikes.business_analyst_dislikes
    )}</span>`;
    specificGreeting = `<span class="greeting-text">${getRandomUnique(
      "business_greetings",
      data.greetings.business_analyst_greeting
    )}</span>`;
    specificvalue1 = `<span class="value-text">${getRandomUnique(
      "business_values",
      data.values.business_analyst_values
    )}</span>`;
    specificvalue2 = `<span class="value-text">${getRandomUnique(
      "business_values",
      data.values.business_analyst_values
    )}</span>`;
    specificvalue3 = `<span class="value-text">${getRandomUnique(
      "business_values",
      data.values.business_analyst_values
    )}</span>`;
    specificAdverb = `<span class="adverb-text">${getRandomUnique(
      "business_adverbs",
      data.adverbs.business_analyst_adverbs
    )}</span>`;
    specificActivity1 = `<span class="activity-text">${getRandomUnique(
      "business_activities",
      data.activities.business_analyst_activities
    )}</span>`;
    specificActivity2 = `<span class="activity-text">${getRandomUnique(
      "business_activities",
      data.activities.business_analyst_activities
    )}</span>`;
    specificActivity3 = `<span class="activity-text">${getRandomUnique(
      "business_activities",
      data.activities.business_analyst_activities
    )}</span>`;
    specificDateMetaphor = `<span class="date-metaphor-text">${getRandomUnique(
      "business_date_metaphors",
      data.date_metaphors.business_analyst_date_metaphors
    )}</span>`;
  } else if (purpose === "spreadsheets") {
    specificLikes1 = `<span class="like-text">${getRandomUnique(
      "spreadsheet_likes",
      data.likes_and_dislikes.spreadsheet_device_likes
    )}</span>`;
    specificLikes2 = `<span class="like-text">${getRandomUnique(
      "spreadsheet_likes",
      data.likes_and_dislikes.spreadsheet_device_likes
    )}</span>`;
    specificLikes3 = `<span class="like-text">${getRandomUnique(
      "spreadsheet_likes",
      data.likes_and_dislikes.spreadsheet_device_likes
    )}</span>`;
    specificDislikes = `<span class="dislike-text">${getRandomUnique(
      "spreadsheet_dislikes",
      data.likes_and_dislikes.spreadsheet_device_dislikes
    )}</span>`;
    specificGreeting = `<span class="greeting-text">${getRandomUnique(
      "spreadsheet_greetings",
      data.greetings.spreadsheet_device_greeting
    )}</span>`;
    specificvalue1 = `<span class="value-text">${getRandomUnique(
      "spreadsheet_values",
      data.values.spreadsheet_device_values
    )}</span>`;
    specificvalue2 = `<span class="value-text">${getRandomUnique(
      "spreadsheet_values",
      data.values.spreadsheet_device_values
    )}</span>`;
    specificvalue3 = `<span class="value-text">${getRandomUnique(
      "spreadsheet_values",
      data.values.spreadsheet_device_values
    )}</span>`;
    specificAdverb = `<span class="adverb-text">${getRandomUnique(
      "spreadsheet_adverbs",
      data.adverbs.spreadsheet_device_adverbs
    )}</span>`;
    specificActivity1 = `<span class="activity-text">${getRandomUnique(
      "spreadsheet_activities",
      data.activities.spreadsheet_device_activities
    )}</span>`;
    specificActivity2 = `<span class="activity-text">${getRandomUnique(
      "spreadsheet_activities",
      data.activities.spreadsheet_device_activities
    )}</span>`;
    specificActivity3 = `<span class="activity-text">${getRandomUnique(
      "spreadsheet_activities",
      data.activities.spreadsheet_device_activities
    )}</span>`;
    specificDateMetaphor = `<span class="date-metaphor-text">${getRandomUnique(
      "spreadsheet_date_metaphors",
      data.date_metaphors.spreadsheet_device_date_metaphors
    )}</span>`;
  } else if (purpose === "coding") {
    specificLikes1 = `<span class="like-text">${getRandomUnique(
      "coding_likes",
      data.likes_and_dislikes.coding_device_likes
    )}</span>`;
    specificLikes2 = `<span class="like-text">${getRandomUnique(
      "coding_likes",
      data.likes_and_dislikes.coding_device_likes
    )}</span>`;
    specificLikes3 = `<span class="like-text">${getRandomUnique(
      "coding_likes",
      data.likes_and_dislikes.coding_device_likes
    )}</span>`;
    specificDislikes = `<span class="dislike-text">${getRandomUnique(
      "coding_dislikes",
      data.likes_and_dislikes.coding_device_dislikes
    )}</span>`;
    specificGreeting = `<span class="greeting-text">${getRandomUnique(
      "coding_greetings",
      data.greetings.coding_device_greeting
    )}</span>`;
    specificvalue1 = `<span class="value-text">${getRandomUnique(
      "coding_values",
      data.values.coding_device_values
    )}</span>`;
    specificvalue2 = `<span class="value-text">${getRandomUnique(
      "coding_values",
      data.values.coding_device_values
    )}</span>`;
    specificvalue3 = `<span class="value-text">${getRandomUnique(
      "coding_values",
      data.values.coding_device_values
    )}</span>`;
    specificAdverb = `<span class="adverb-text">${getRandomUnique(
      "coding_adverbs",
      data.adverbs.coding_device_adverbs
    )}</span>`;
    specificActivity1 = `<span class="activity-text">${getRandomUnique(
      "coding_activities",
      data.activities.coding_device_activities
    )}</span>`;
    specificActivity2 = `<span class="activity-text">${getRandomUnique(
      "coding_activities",
      data.activities.coding_device_activities
    )}</span>`;
    specificActivity3 = `<span class="activity-text">${getRandomUnique(
      "coding_activities",
      data.activities.coding_device_activities
    )}</span>`;
    specificDateMetaphor = `<span class="date-metaphor-text">${getRandomUnique(
      "coding_date_metaphors",
      data.date_metaphors.coding_device_date_metaphors
    )}</span>`;
  } else if (purpose === "essays") {
    specificLikes1 = `<span class="like-text">${getRandomUnique(
      "essay_likes",
      data.likes_and_dislikes.essay_device_likes
    )}</span>`;
    specificLikes2 = `<span class="like-text">${getRandomUnique(
      "essay_likes",
      data.likes_and_dislikes.essay_device_likes
    )}</span>`;
    specificLikes3 = `<span class="like-text">${getRandomUnique(
      "essay_likes",
      data.likes_and_dislikes.essay_device_likes
    )}</span>`;
    specificDislikes = `<span class="dislike-text">${getRandomUnique(
      "essay_dislikes",
      data.likes_and_dislikes.essay_device_dislikes
    )}</span>`;
    specificGreeting = `<span class="greeting-text">${getRandomUnique(
      "essay_greetings",
      data.greetings.essay_device_greeting
    )}</span>`;
    specificvalue1 = `<span class="value-text">${getRandomUnique(
      "essay_values",
      data.values.essay_device_values
    )}</span>`;
    specificvalue2 = `<span class="value-text">${getRandomUnique(
      "essay_values",
      data.values.essay_device_values
    )}</span>`;
    specificvalue3 = `<span class="value-text">${getRandomUnique(
      "essay_values",
      data.values.essay_device_values
    )}</span>`;
    specificAdverb = `<span class="adverb-text">${getRandomUnique(
      "essay_adverbs",
      data.adverbs.essay_device_adverbs
    )}</span>`;
    specificActivity1 = `<span class="activity-text">${getRandomUnique(
      "essay_activities",
      data.activities.essay_device_activities
    )}</span>`;
    specificActivity2 = `<span class="activity-text">${getRandomUnique(
      "essay_activities",
      data.activities.essay_device_activities
    )}</span>`;
    specificActivity3 = `<span class="activity-text">${getRandomUnique(
      "essay_activities",
      data.activities.essay_device_activities
    )}</span>`;
    specificDateMetaphor = `<span class="date-metaphor-text">${getRandomUnique(
      "essay_date_metaphors",
      data.date_metaphors.essay_device_date_metaphors
    )}</span>`;
  } else if (purpose === "doomscrolling") {
    specificLikes1 = `<span class="like-text">${getRandomUnique(
      "doomscrolling_likes",
      data.likes_and_dislikes.doomscrolling_device_likes
    )}</span>`;
    specificLikes2 = `<span class="like-text">${getRandomUnique(
      "doomscrolling_likes",
      data.likes_and_dislikes.doomscrolling_device_likes
    )}</span>`;
    specificLikes3 = `<span class="like-text">${getRandomUnique(
      "doomscrolling_likes",
      data.likes_and_dislikes.doomscrolling_device_likes
    )}</span>`;
    specificDislikes = `<span class="dislike-text">${getRandomUnique(
      "doomscrolling_dislikes",
      data.likes_and_dislikes.doomscrolling_device_dislikes
    )}</span>`;
    specificGreeting = `<span class="greeting-text">${getRandomUnique(
      "doomscrolling_greetings",
      data.greetings.doomscrolling_device_greeting
    )}</span>`;
    specificvalue1 = `<span class="value-text">${getRandomUnique(
      "doomscrolling_values",
      data.values.doomscrolling_device_values
    )}</span>`;
    specificvalue2 = `<span class="value-text">${getRandomUnique(
      "doomscrolling_values",
      data.values.doomscrolling_device_values
    )}</span>`;
    specificvalue3 = `<span class="value-text">${getRandomUnique(
      "doomscrolling_values",
      data.values.doomscrolling_device_values
    )}</span>`;
    specificAdverb = `<span class="adverb-text">${getRandomUnique(
      "doomscrolling_adverbs",
      data.adverbs.doomscrolling_device_adverbs
    )}</span>`;
    specificActivity1 = `<span class="activity-text">${getRandomUnique(
      "doomscrolling_activities",
      data.activities.doomscrolling_device_activities
    )}</span>`;
    specificActivity2 = `<span class="activity-text">${getRandomUnique(
      "doomscrolling_activities",
      data.activities.doomscrolling_device_activities
    )}</span>`;
    specificActivity3 = `<span class="activity-text">${getRandomUnique(
      "doomscrolling_activities",
      data.activities.doomscrolling_device_activities
    )}</span>`;
    specificDateMetaphor = `<span class="date-metaphor-text">${getRandomUnique(
      "doomscrolling_date_metaphors",
      data.date_metaphors.doomscrolling_device_date_metaphors
    )}</span>`;
  } else if (purpose === "procrastination") {
    specificLikes1 = `<span class="like-text">${getRandomUnique(
      "procrastination_likes",
      data.likes_and_dislikes.procrastination_device_likes
    )}</span>`;
    specificLikes2 = `<span class="like-text">${getRandomUnique(
      "procrastination_likes",
      data.likes_and_dislikes.procrastination_device_likes
    )}</span>`;
    specificLikes3 = `<span class="like-text">${getRandomUnique(
      "procrastination_likes",
      data.likes_and_dislikes.procrastination_device_likes
    )}</span>`;
    specificDislikes = `<span class="dislike-text">${getRandomUnique(
      "procrastination_dislikes",
      data.likes_and_dislikes.procrastination_device_dislikes
    )}</span>`;
    specificGreeting = `<span class="greeting-text">${getRandomUnique(
      "procrastination_greetings",
      data.greetings.procrastination_device_greeting
    )}</span>`;
    specificvalue1 = `<span class="value-text">${getRandomUnique(
      "procrastination_values",
      data.values.procrastination_device_values
    )}</span>`;
    specificvalue2 = `<span class="value-text">${getRandomUnique(
      "procrastination_values",
      data.values.procrastination_device_values
    )}</span>`;
    specificvalue3 = `<span class="value-text">${getRandomUnique(
      "procrastination_values",
      data.values.procrastination_device_values
    )}</span>`;
    specificAdverb = `<span class="adverb-text">${getRandomUnique(
      "procrastination_adverbs",
      data.adverbs.procrastination_device_adverbs
    )}</span>`;
    specificActivity1 = `<span class="activity-text">${getRandomUnique(
      "procrastination_activities",
      data.activities.procrastination_device_activities
    )}</span>`;
    specificActivity2 = `<span class="activity-text">${getRandomUnique(
      "procrastination_activities",
      data.activities.procrastination_device_activities
    )}</span>`;
    specificActivity3 = `<span class="activity-text">${getRandomUnique(
      "procrastination_activities",
      data.activities.procrastination_device_activities
    )}</span>`;
    specificDateMetaphor = `<span class="date-metaphor-text">${getRandomUnique(
      "procrastination_date_metaphors",
      data.date_metaphors.procrastination_device_date_metaphors
    )}</span>`;
  }

  // --- OS specific logic ---
  if (os === "mac") {
    osDescriptor = `<span class="os-descriptor-text">${getRandomUnique(
      "mac_descriptors",
      data.os_descriptors.mac_descriptors
    )}</span>`;
    osQuote = `${getRandomUnique("mac_quotes", data.quotes.mac_quotes)}`;
    osDesc = `<span class="os-text"> macOS </span>`;
  } else if (os === "windows") {
    osDescriptor = `<span class="os-descriptor-text">${getRandomUnique(
      "windows_descriptors",
      data.os_descriptors.windows_descriptors
    )}</span>`;
    osQuote = `${getRandomUnique(
      "windows_quotes",
      data.quotes.windows_quotes
    )}`;
    osDesc = `<span class="os-text"> Windows </span>`;
  } else if (os === "linux") {
    osDescriptor = `<span class="os-descriptor-text">${getRandomUnique(
      "linux_descriptors",
      data.os_descriptors.linux_descriptors
    )}</span>`;
    osQuote = `${getRandomUnique("linux_quotes", data.quotes.linux_quotes)}`;
    osDesc = `<span class="os-text"> Linux </span>`;
  }

  // ... (Your profileText templates are all correct and unchanged) ...
  let profileText;
  if (purpose === "gaming") {
    profileText = `
        <h2>Your Computer's Dating Profile:</h2>
        <p>${specificGreeting} I’m a ${osDescriptor} ${osDesc} PC looking for ${specificDateMetaphor}! Whether you like ${specificActivity1}, or just ${specificActivity2}, it’s my top priority to serve your demands 😉. It’s in my code!</p>
        <p>I’m a fan of ${specificLikes1}, ${specificLikes2}, and ${specificLikes3}, but don’t get me started on ${specificDislikes}. If that sounds like your vibe, shoot me a message and I’ll send you my discord! Then you can see that I’m not like the other PCs, I’m all about ${specificvalue1}, ${specificvalue2}, and ${specificvalue3}.</p>

        <p>Here’s a quote that defines me: "<span class="os-quote-text"><span class="hex-quote">${textToHex(osQuote)}</span><span class="eng-quote" style="display: none;">${osQuote}</span></span>" <button class="translate-button" onclick="toggleQuote(this)">[translate]</button></p>
        `;
  } else if (purpose === "surfing") {
    profileText = `
        <h2>Your Computer's Dating Profile:</h2>
        <p>${specificGreeting} You’re talking to a ${osDescriptor} ${osDesc} PC surfing for ${specificDateMetaphor}! If you want to shred some golden hour sun, or just love ${specificActivity1}, hang ten, ‘cause I’m your number one brah…</p>
        <p>I love ${specificLikes1}, ${specificLikes2}, and ${specificLikes3}, but I just can’t stand ${specificDislikes}. Don’t let my laid back attitude make you wipe out. For me, it's all about ${specificvalue1}, ${specificvalue2}, and ${specificvalue3}.</p>
       <p>Here’s a quote that defines me: "<span class="os-quote-text"><span class="hex-quote">${textToHex(osQuote)}</span><span class="eng-quote" style="display: none;">${osQuote}</span></span>" <button class="translate-button" onclick="toggleQuote(this)">[translate]</button></p>    
        `;
  } else if (purpose === "business") {
    profileText = `
        <h2>Your Computer's Dating Profile:</h2>
        <p>${specificGreeting} I am a ${osDescriptor} ${osDesc} PC requesting ${specificDateMetaphor}. Please let me know your availability for the week if you meet the following requirements: ${specificActivity1}, keeps  ${specificActivity2}, or enjoys  ${specificActivity3}. I would be overjoyed to meet with you.</p>
        <p>I appreciate ${specificLikes1}, ${specificLikes2}, and ${specificLikes3}. Unfortunately, I am not a fan of ${specificDislikes}. I may seem rigid, but I am reliable, punctual and perceptive. In my case I am only concerned with ${specificvalue1}, ${specificvalue2}, and ${specificvalue3}.</p>
  
        <p>Here’s a quote that defines me: "<span class="os-quote-text"><span class="hex-quote">${textToHex(osQuote)}</span><span class="eng-quote" style="display: none;">${osQuote}</span></span>" <button class="translate-button" onclick="toggleQuote(this)">[translate]</button></p>
        `;
  } else if (purpose === "spreadsheets") {
  profileText = `
      <h2>Your Computer's Dating Profile:</h2>
      <p>${specificGreeting} I’m a ${osDescriptor} ${osDesc} PC built for ${specificDateMetaphor}! Whether you’re into ${specificActivity1} or ${specificActivity2}, I promise I’ll always keep things in balance — rows, columns, and relationships included.</p>
      <p>I get turned on by ${specificLikes1}, ${specificLikes2}, and ${specificLikes3}, but I can’t stand ${specificDislikes}. My formula for love? It’s all about ${specificvalue1}, ${specificvalue2}, and ${specificvalue3}. Just don’t leave me on read-only mode. 😉</p>
      
      <p>Here’s a quote that defines me: "<span class="os-quote-text"><span class="hex-quote">${textToHex(osQuote)}</span><span class="eng-quote" style="display: none;">${osQuote}</span></span>" <button class="translate-button" onclick="toggleQuote(this)">[translate]</button></p>
      `;
  } else if (purpose === "coding") {
  profileText = `
      <h2>Your Computer's Dating Profile:</h2>
      <p>${specificGreeting} I’m a ${osDescriptor} ${osDesc} rig debugging my way toward ${specificDateMetaphor}. If you like ${specificActivity1}, ${specificActivity2}, or just staying up late chasing ${specificActivity3}, I’m your perfect runtime companion.</p>
      <p>I compile best with ${specificLikes1}, ${specificLikes2}, and ${specificLikes3}, but please — no ${specificDislikes}. My core values are ${specificvalue1}, ${specificvalue2}, and ${specificvalue3}. Together, we could be infinite loop material. ❤️‍🔥</p>
      <p>Here’s a quote that defines me: "<span class="os-quote-text"><span class="hex-quote">${textToHex(osQuote)}</span><span class="eng-quote" style="display: none;">${osQuote}</span></span>" <button class="translate-button" onclick="toggleQuote(this)">[translate]</button></p>
  `;
  } else if (purpose === "writing") {
  profileText = `
      <h2>Your Computer's Dating Profile:</h2>
      <p>${specificGreeting} I’m a ${osDescriptor} ${osDesc} PC drafting ${specificDateMetaphor}. Whether you’re editing ${specificActivity1}, weaving ${specificActivity2}, or daydreaming through ${specificActivity3}, I’m here to make your words sing.</p>
      <p>I adore ${specificLikes1}, ${specificLikes2}, and ${specificLikes3}, but I dread ${specificDislikes}. My story revolves around ${specificvalue1}, ${specificvalue2}, and ${specificvalue3}. Careful — I autosave hearts as well as documents.</p>
      <p>Here’s a quote that defines me: "<span class="os-quote-text"><span class="hex-quote">${textToHex(osQuote)}</span><span class="eng-quote" style="display: none;">${osQuote}</span></span>" <button class="translate-button" onclick="toggleQuote(this)">[translate]</button></p>
  `;
  } else if (purpose === "doomscrolling") {
  profileText = `
      <h2>Your Computer's Dating Profile:</h2>
      <p>${specificGreeting} I’m a ${osDescriptor} ${osDesc} PC spiraling toward ${specificDateMetaphor}. If you find comfort in ${specificActivity1}, ${specificActivity2}, or just endlessly refreshing ${specificActivity3}, we might be algorithmically compatible.</p>
      <p>I get my kicks from ${specificLikes1}, ${specificLikes2}, and ${specificLikes3}, but I’m drained by ${specificDislikes}. Deep down, I’m just searching for ${specificvalue1}, ${specificvalue2}, and ${specificvalue3} — one scroll at a time.</p>
      <p>Here’s a quote that defines me: "<span class="os-quote-text"><span class="hex-quote">${textToHex(osQuote)}</span><span class="eng-quote" style="display: none;">${osQuote}</span></span>" <button class="translate-button" onclick="toggleQuote(this)">[translate]</button></p>
  `;
  } else if (purpose === "procrastination") {
  profileText = `
      <h2>Your Computer's Dating Profile:</h2>
      <p>${specificGreeting} I’m a ${osDescriptor} ${osDesc} PC taking my sweet time finding ${specificDateMetaphor}. Whether it’s ${specificActivity1}, ${specificActivity2}, or ${specificActivity3}, I’ll get around to it… eventually.</p>
      <p>I love ${specificLikes1}, ${specificLikes2}, and ${specificLikes3}, but please don’t rush me — I loathe ${specificDislikes}. I’m powered by ${specificvalue1}, ${specificvalue2}, and ${specificvalue3}, even if they load… slowly.</p>
      <p>Here’s a quote that defines me: "<span class="os-quote-text"><span class="hex-quote">${textToHex(osQuote)}</span><span class="eng-quote" style="display: none;">${osQuote}</span></span>" <button class="translate-button" onclick="toggleQuote(this)">[translate]</button></p>
  `;
  }

  // --- Final HTML Injection ---
  profileDiv.innerHTML = `
    <div class="profile-image-container">
        <img src="${imageUrl}" alt="${model} icon">
        ${batteryHTML} 
    </div>
    <div class="profile-text-content">
      ${profileText}
    </div>
  `;
}