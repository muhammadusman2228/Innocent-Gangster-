/*
  =====================================================
  js/data.js  –  Innocent Gangsters Member List
  =====================================================

  HOW TO ADD / EDIT A MEMBER:
  ─────────────────────────────────────────────────────
  1. Find the member below (or copy-paste a block to add new)
  2. Change name, nickname, rank, funnyIntro, quote, phone
  3. Add their photos to:  assets/friends/[id]/
       → cover.jpg   (card cover photo)
       → photo1.jpg  (gallery photo 1)
       → photo2.jpg  (gallery photo 2)
       → photo3.jpg  (gallery photo 3)
  4. Save file and refresh browser

  WhatsApp number: country code + number, no + sign, no spaces
  Example: +92-300-1234567  →  "923001234567"

  Card color (any hex): changes the glow color for that member
  ─────────────────────────────────────────────────────
*/

var GANG = [

    /* ──────────────── MEMBER 1 ──────────────── */
    {
        id: "member1",
        name: "Muhammad Usman",            // ← replace with real name
        nickname: "The Boss",
        rank: "👑 Gang Leader",
        funnyIntro: "Wrote this entire website and then pretended he's too cool for it.",
        quote: "\"Work smart, not hard... but also not at all if possible.\"",
        phone: "923001234567",             // ← replace with real WhatsApp number
        coverPhoto: "assets/friends/member1/cover.jpg",
        photos: [
            "assets/friends/member1/cover.jpg",
            "assets/friends/member1/photo2.jpg",
            "assets/friends/member1/photo3.jpg",
        ],
        biodata: {
            realName: "Muhammad Usman",
            age: "20",
            city: "Lahore",
            program: "BS Computer Science",
            hobbies: "Coding at 3am, building websites, pretending to study",
            biggestFear: "Waking up early for 8am classes",
            bestMemory: "That legendary chai session that lasted 6 hours straight",
            funFact: "Has watched the same 3 shows 10 times each and still cries at the same parts",
            superpower: "Disappears the moment someone mentions work",
        },
        color: "#00ff87",
    },

    /* ──────────────── MEMBER 2 ──────────────── */
    {
        id: "member2",
        name: "Suhail",
        nickname: "The Thinker",
        rank: "🧠 Gang Philosopher",
        funnyIntro: "Has a deep opinion about everything. Nobody asked, but he tells anyway.",
        quote: "\"If the universe is infinite, why does my WiFi not reach the bathroom?\"",
        phone: "923111234567",
        coverPhoto: "assets/friends/member2/cover.jpg",
        photos: [
            "assets/friends/member2/cover.jpg",
            "assets/friends/member2/photo2.jpg",
            "assets/friends/member2/photo3.jpg",
        ],
        biodata: {
            realName: "Suhail",
            age: "21",
            city: "Lahore",
            program: "BS Computer Science",
            hobbies: "Overthinking everything, debating at 2am, looking deep",
            biggestFear: "Silence — he fills it immediately with philosophy",
            bestMemory: "Explained why samosas are a pyramid scheme for 40 minutes",
            funFact: "Gives profound advice but can't decide what to eat",
            superpower: "Starts arguments and somehow wins while being completely wrong",
        },
        color: "#8b5cf6",
    },

    /* ──────────────── MEMBER 3 ──────────────── */
    {
        id: "member3",
        name: "Umar",
        nickname: "Billi 🐱",
        rank: "😼 Certified Wild Card",
        funnyIntro: "Too unpredictable to be predicted. Too legendary to be forgotten.",
        quote: "\"Main billi hoon, rules meri marzi ke hain.\"",
        phone: "923211234567",
        coverPhoto: "assets/friends/member3/cover.jpg",
        photos: [
            "assets/friends/member3/cover.jpg",
            "assets/friends/member3/photo2.jpg",
            "assets/friends/member3/photo3.jpg",
        ],
        biodata: {
            realName: "Umar",
            age: "20",
            city: "Lahore",
            program: "BS Computer Science",
            hobbies: "Being unpredictable, keeping everyone on their toes",
            biggestFear: "Being normal for more than 5 minutes",
            bestMemory: "That one time he showed up and nobody expected it",
            funFact: "Has 9 lives and has used at least 7 of them already",
            superpower: "Appearing from nowhere exactly at the right moment",
        },
        color: "#ff6b35",
    },

    /* ──────────────── MEMBER 4 ──────────────── */
    {
        id: "member4",
        name: "Jawad",
        nickname: "The Suave One",
        rank: "✨ Minister of Style",
        funnyIntro: "Sits in a restaurant and looks like the most important person there — because in his head, he is.",
        quote: "\"Style is not what you wear. It's how you sit.\"",
        phone: "923311234567",
        coverPhoto: "assets/friends/member4/cover.jpg",
        photos: [
            "assets/friends/member4/cover.jpg",
            "assets/friends/member4/photo2.jpg",
            "assets/friends/member4/photo3.jpg",
        ],
        biodata: {
            realName: "Jawad",
            age: "21",
            city: "Lahore",
            program: "BS Computer Science",
            hobbies: "Looking cool effortlessly, thinking profound thoughts silently",
            biggestFear: "Being photographed from a bad angle",
            bestMemory: "Walked into a room and everyone stopped talking",
            funFact: "Has never had a bad photo taken in his life",
            superpower: "Makes silence more powerful than any speech",
        },
        color: "#06b6d4",
    },

    /* ──────────────── MEMBER 5 ──────────────── */
    {
        id: "member5",
        name: "Awais",
        nickname: "The Quiet Storm",
        rank: "🌊 Head of Vibes",
        funnyIntro: "Looks calm. Has many opinions. Shares zero of them until the perfect moment.",
        quote: "\"I don't need to talk much. My presence does the talking.\"",
        phone: "923451234567",
        coverPhoto: "assets/friends/member5/cover.jpg",
        photos: [
            "assets/friends/member5/cover.jpg",
            "assets/friends/member5/photo2.jpg",
            "assets/friends/member5/photo3.jpg",
        ],
        biodata: {
            realName: "Awais",
            age: "20",
            city: "Lahore",
            program: "BS Computer Science",
            hobbies: "Chilling, thinking deeply, observing everything silently",
            biggestFear: "Being the center of attention when he doesn't want to be",
            bestMemory: "Said one thing that ended a 2-hour argument instantly",
            funFact: "Knows everything that's going on but acts like he doesn't",
            superpower: "Maximum impact with minimum words",
        },
        color: "#f59e0b",
    },

    /* ──────────────── MEMBER 6 ──────────────── */
    {
        id: "member6",
        name: "Zain Ahmed",
        nickname: "The Ghost",
        rank: "👻 Head of Disappearing",
        funnyIntro: "Plans everything. Shows up to nothing.",
        quote: "\"I was going to come but then I didn't.\"",
        phone: "923361234567",
        coverPhoto: "assets/friends/member6/cover.jpg",
        photos: [
            "assets/friends/member6/photo1.jpg",
            "assets/friends/member6/photo2.jpg",
            "assets/friends/member6/photo3.jpg",
        ],
        biodata: {
            realName: "Zain Ahmed",
            age: "20",
            city: "Faisalabad",
            program: "BS Software Engineering",
            hobbies: "Being online but replying 3 days later",
            biggestFear: "Social gatherings he already RSVP'd yes to",
            bestMemory: "The time he actually showed up and nobody believed it was him",
            funFact: "Read every message, replied to none",
            superpower: "Becoming unavailable exactly when needed most",
        },
        color: "#a78bfa",
    },

    /* ──────────────── MEMBER 7 ──────────────── */
    {
        id: "member7",
        name: "Omar Farooq",
        nickname: "The Cricket Captain",
        rank: "🏏 Sports Director",
        funnyIntro: "Calls himself a cricket captain. Team has never won a match.",
        quote: "\"We didn't lose. We just ran out of time to win.\"",
        phone: "923471234567",
        coverPhoto: "assets/friends/member7/cover.jpg",
        photos: [
            "assets/friends/member7/photo1.jpg",
            "assets/friends/member7/photo2.jpg",
            "assets/friends/member7/photo3.jpg",
        ],
        biodata: {
            realName: "Omar Farooq",
            age: "21",
            city: "Lahore",
            program: "BBA",
            hobbies: "Cricket, blaming the pitch, blaming the weather",
            biggestFear: "Being asked batting average",
            bestMemory: "Everyone agreed he was the best player on the team he assembled himself",
            funFact: "Owns 3 cricket bats, uses none properly",
            superpower: "Turning any loss into a story where he is the hero",
        },
        color: "#34d399",
    },

    /* ──────────────── MEMBER 8 ──────────────── */
    {
        id: "member8",
        name: "Saad Malik",
        nickname: "The Tech Guy",
        rank: "💻 CTO (Chief Tea Officer)",
        funnyIntro: "Fixes everyone's laptop. Still can't fix his own life.",
        quote: "\"Have you tried turning it off and on again? Works for computers, not problems.\"",
        phone: "923481234567",
        coverPhoto: "assets/friends/member8/cover.jpg",
        photos: [
            "assets/friends/member8/photo1.jpg",
            "assets/friends/member8/photo2.jpg",
            "assets/friends/member8/photo3.jpg",
        ],
        biodata: {
            realName: "Saad Malik",
            age: "22",
            city: "Lahore",
            program: "BS Computer Science",
            hobbies: "Stack Overflow, YouTube tutorials, drinking chai while debugging",
            biggestFear: "Deadlines, live demos, both at once",
            bestMemory: "Fixed a bug at 4am and felt like a god for exactly 8 minutes",
            funFact: "Has 200+ browser tabs open at all times",
            superpower: "Googling the error message and pretending he knew the solution",
        },
        color: "#60a5fa",
    },

    /* ──────────────── MEMBER 9 ──────────────── */
    {
        id: "member9",
        name: "Hamza Nawaz",
        nickname: "The Comedian",
        rank: "😂 Chief Laughing Officer",
        funnyIntro: "90% of his sentences start with 'bhai suno'. 100% of them end in chaos.",
        quote: "\"I'm not the problem. I'm a limited edition feature.\"",
        phone: "923491234567",
        coverPhoto: "assets/friends/member9/cover.jpg",
        photos: [
            "assets/friends/member9/photo1.jpg",
            "assets/friends/member9/photo2.jpg",
            "assets/friends/member9/photo3.jpg",
        ],
        biodata: {
            realName: "Hamza Nawaz",
            age: "20",
            city: "Lahore",
            program: "BS Mass Communication",
            hobbies: "Roasting friends, laughing at own jokes",
            biggestFear: "Nobody laughing at his jokes",
            bestMemory: "Made a teacher laugh so hard class got cancelled",
            funFact: "Has a dedicated group chat just for his memes",
            superpower: "Diffusing any serious situation with a perfectly timed joke",
        },
        color: "#fb7185",
    },

    /* ──────────────── MEMBER 10 ──────────────── */
    {
        id: "member10",
        name: "Usama Iqbal",
        nickname: "The Driver",
        rank: "🚗 Head of Transportation",
        funnyIntro: "Drives everyone everywhere. Acts like he owns a taxi company.",
        quote: "\"Everyone needs a friend with a car. I am that friend.\"",
        phone: "923501234567",
        coverPhoto: "assets/friends/member10/cover.jpg",
        photos: [
            "assets/friends/member10/photo1.jpg",
            "assets/friends/member10/photo2.jpg",
            "assets/friends/member10/photo3.jpg",
        ],
        biodata: {
            realName: "Usama Iqbal",
            age: "21",
            city: "Lahore",
            program: "BS Mechanical Engineering",
            hobbies: "Driving, parallel parking for fun, car documentaries",
            biggestFear: "Being asked to drop someone 'just 5 minutes' away",
            bestMemory: "Once drove 40km for a burger. No regrets.",
            funFact: "Knows every shortcut in Lahore but still gets stuck in traffic",
            superpower: "Finding parking in places that technically have no parking",
        },
        color: "#f97316",
    },

    /* ──────────────── MEMBER 11 ──────────────── */
    {
        id: "member11",
        name: "Talha Siddiqui",
        nickname: "The Planner",
        rank: "📋 Minister of Plans That Never Happen",
        funnyIntro: "Organises every hangout. Nobody shows up. Still organises the next one.",
        quote: "\"This time it will definitely happen. I have a spreadsheet.\"",
        phone: "923511234567",
        coverPhoto: "assets/friends/member11/cover.jpg",
        photos: [
            "assets/friends/member11/photo1.jpg",
            "assets/friends/member11/photo2.jpg",
            "assets/friends/member11/photo3.jpg",
        ],
        biodata: {
            realName: "Talha Siddiqui",
            age: "20",
            city: "Multan",
            program: "BS Business Administration",
            hobbies: "Making group chats, sending event reminders, being ignored",
            biggestFear: "Someone actually asking for the spreadsheet",
            bestMemory: "The one trip that actually happened (partially)",
            funFact: "Has planned 47 group trips. 1 occurred.",
            superpower: "Eternal optimism in the face of consistent disappointment",
        },
        color: "#e879f9",
    },

    /* ──────────────── MEMBER 12 ──────────────── */
    {
        id: "member12",
        name: "Rehman Butt",
        nickname: "The Silent One",
        rank: "🤫 Head of Observations",
        funnyIntro: "Says nothing for hours then drops a single sentence that ends everyone.",
        quote: "\"...\"",
        phone: "923521234567",
        coverPhoto: "assets/friends/member12/cover.jpg",
        photos: [
            "assets/friends/member12/photo1.jpg",
            "assets/friends/member12/photo2.jpg",
            "assets/friends/member12/photo3.jpg",
        ],
        biodata: {
            realName: "Rehman Butt",
            age: "21",
            city: "Lahore",
            program: "BS Psychology",
            hobbies: "Watching, listening, judging silently",
            biggestFear: "Being asked to speak first",
            bestMemory: "Said one thing that ended an entire argument instantly",
            funFact: "Everyone thinks he agrees with them. He agrees with no one.",
            superpower: "Knowing everything about everyone by saying nothing to anyone",
        },
        color: "#94a3b8",
    },

];
