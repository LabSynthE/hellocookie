// ✅ FIXED: Wrapped theme toggle in DOMContentLoaded to prevent errors
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      // ✅ FIXED: This toggle logic now correctly matches your CSS
      document.body.classList.toggle("light-mode");
    });
  }
});

// --- ✅ NEW FUNCTION: Toggles quote visibility ---
function toggleQuote(button) {
  // Get the parent <p> tag of the button
  const quoteWrapper = button.closest("p");

  // Find the hex and english spans within that parent
  const hexSpan = quoteWrapper.querySelector(".hex-quote");
  const engSpan = quoteWrapper.querySelector(".eng-quote");

  // Toggle their display and the button text
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
// ------------------------------------------------

// Utility Functions
const usedItems = new Map();

function getRandomUnique(key, arr) {
  if (!usedItems.has(key)) {
    usedItems.set(key, [...arr]); // Initialize with a copy of the array
  }

  let available = usedItems.get(key);

  if (available.length === 0) {
    // Reset if all items have been used
    console.log(`Resetting items for key: ${key}`);
    usedItems.set(key, [...arr]);
    available = usedItems.get(key); // Re-get the newly reset array
  }

  const index = Math.floor(Math.random() * available.length);
  const item = available.splice(index, 1)[0]; // Remove and return the selected item
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
    // ✅ HTML value="new"
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
    // ✅ HTML value="mid"
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
    // ✅ HTML value="old"
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
    // ✅ HTML value="ancient"
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
    // ✅ HTML value="gaming"
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
    // ✅ HTML value="surfing"
    surfing: [
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
    // ✅ HTML value="business"
    business: [
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
    gaming_device_greeting: ["Konichiwa!", "Hey, you!", "What’s up?"],
    surfing_the_web_greeting: ["Aloha.", "What’s good, dude?", "Hey, Grom!"],
    business_analyst_greeting: [
      "Hello.",
      "Good Day,",
      "To Whom it May Concern:",
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
  },
  adverbs: {
    gaming_device_adverbs: ["with style", "with flair", "with a smile"],
    surfing_the_web_adverbs: ["chill", "totally", "like, really"],
    business_analyst_adverbs: ["efficiently", "promptly", "synergistically"],
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
  },
};

// Generate Profile
// Generate Profile
function generateProfile() {
  const profileDiv = document.getElementById("profile");
  const model = document.getElementById("model").value;
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
  const age = document.getElementById("age").value;
  const os = document.getElementById("os").value;
  const purpose = document.getElementById("purpose").value;


  // 1. Get the value from the input
const batteryLife = document.getElementById("screentime").value;
let batteryPercent = parseInt(batteryLife);

// 2. Sanitize the input
if (isNaN(batteryPercent) || batteryPercent < 0) {
  batteryPercent = 0; // Default to 0 if empty or invalid
}
if (batteryPercent > 100) {
  batteryPercent = 100; // Cap at 100%
}

// 3. Determine the color class based on percentage
let batteryColorClass = 'high'; // Default to green
if (batteryPercent <= 20) {
  batteryColorClass = 'low'; // Red
} else if (batteryPercent <= 50) {
  batteryColorClass = 'medium'; // Yellow
}

// 4. Build the battery HTML string
const batteryHTML = `
  <div class="battery-container">
    <div class="battery-icon">
      <div class="battery-fill ${batteryColorClass}" style="width: ${batteryPercent}%;"></div>
    </div>
    <span class="battery-text">${batteryPercent}%</span>
  </div>
`;
  // Check if the selected purpose has special logic
  const validPurpose = data.purpose.hasOwnProperty(purpose);

  // Fallback for purposes without special data (coding, essays, etc.)
if (!validPurpose) {
    const purposeText =
      document.getElementById("purpose").options[
        document.getElementById("purpose").selectedIndex
      ].text;

profileDiv.innerHTML = `
        <div class="profile-image-container">
            <img src="${imageUrl}" alt="${model} icon">
            ${batteryHTML} 
        </div>
        <div class="profile-text-content">
            <h2>Your Computer's Dating Profile:</h2>
            <p>
                Sorry, this <strong>${model}</strong> is too busy ${purposeText.toLowerCase()} to date right now.
                It needs to focus on its career.
          . </p>
        </div>
    `;
    return; // Exit the function
  }


  const ageDesc = `<span class="age-text">${getRandomUnique(
    "age",
    data.age[age]
  )}</span>`;
  const purposeDesc = `<span class="purpose-text">${getRandomUnique(
    "purpose",
    data.purpose[purpose]
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
    // ✅ FIXED TYPO HERE
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
  }

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
  }

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