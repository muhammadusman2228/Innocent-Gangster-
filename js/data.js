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
        phone: "923124122906",             // ← replace with real WhatsApp number
        coverPhoto: "assets/friends/member1/cover.jpg",
        photos: [
            "assets/friends/member1/cover.jpg",
            "assets/friends/member1/image.png",
            "assets/friends/member1/photo3.jpg",
        ],
        biodata: {
            realName: "Muhammad Usman",
            age: "20",
            city: "Kasur",
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
        nickname: "Stand-Up Tragedy",
        rank: "🤡 Chief Clown Officer (CCO)",
        funnyIntro: "Thinks he's the main character of a sitcom, but his punchlines have more bugs than a first-year's Java project.",
        quote: "\Bro, listen to this joke... wait, I forgot the ending.\"",
        phone: "923235676576",
        coverPhoto: "assets/friends/member2/1.png",
        photos: [
            "assets/friends/member2/cover.jpg",
            "assets/friends/member2/2.png",
            "assets/friends/member2/photo3.jpg",
        ],
        biodata: {
            realName: "Suhail",
            age: "21",
            city: "Kasur",
            program: "BS Computer Science",
            hobbies: "Interrupting a perfectly good lecture with a comment that makes the entire room rethink their life choices.",
            biggestFear: "Complete, dead silence after dropping his 'best material' in the class WhatsApp group.",
            bestMemory: "That one time in the 3rd semester when someone accidentally laughed at his joke out of pure pity.",
            funFact: "His sense of humor is exactly like a MongoDB database—completely unstructured, highly unpredictable, and mostly full of garbage data.",
            superpower: "The ability to turn a serious, 5-minute project discussion into a 45-minute absolute circus.",
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
        phone: "923021744686",
        coverPhoto: "assets/friends/member3/1.jpeg",
        photos: [
            "assets/friends/member3/cover.jpg",
            "assets/friends/member3/2.png",
            "assets/friends/member3/3.png",
            "assets/friends/member3/4.png",
        ],
        biodata: {
            realName: "Umar",
            age: "20",
            city: "Kasur",
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
        phone: "923157699120",
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
        phone: "923114906308",
        coverPhoto: "assets/friends/member5/1.png",
        photos: [
            "assets/friends/member5/cover.jpg",
            "assets/friends/member5/2.png",
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
        name: "Zain ul Islam",
        nickname: "The Ghost",
        rank: "👻 Head of Disappearing",
        funnyIntro: "Plans everything. Shows up to nothing.",
        quote: "\"I was going to come but then I didn't.\"",
        phone: "923361234567",
        coverPhoto: "assets/friends/member6/cover.png",
        photos: [
            "assets/friends/member6/photo1.jpg",
            "assets/friends/member6/photo2.jpg",
            "assets/friends/member6/photo3.jpg",
        ],
        biodata: {
            realName: "Zain ul Islam",
            age: "20",
            city: "Kasur",
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
        name: "Usman CR",
        nickname: "National Brother",
        rank: "Problem Creator",
        funnyIntro: "Our CR is like a 5G network: High speed, great coverage, but everyone just wants to stay in the 'Friend-Zone' (and the 'Bhai-Zone')",
        quote: "\"We didn't lose. We just ran out of time to win.\"",
        phone: "923170827409",
        coverPhoto: "assets/friends/member7/1.png",
        photos: [
            "assets/friends/member7/cover.png",
            "assets/friends/member7/2.png",
            "assets/friends/member7/3.png",
        ],
        biodata: {
            realName: "Usman",
            age: "21",
            city: "Kasur",
            program: "BS Software Engineering",
            hobbies: "Part-time Class Representative, full-time National Brother. I have 99 problems and 98 of them are girls asking me for a hotspot password while calling me 'Bhai.' I don't create trouble; I just provide the opportunity for it to happen",
            biggestFear: "Being asked for giving Presentation",
            bestMemory: "Everyone agreed he was the best player on the team he assembled himself",
            funFact: "Dropping a controversial 'Who's coming to college today?' text at 8:00 AM and then putting his phone on Do Not Disturb",
            superpower: "Simultaneously managing a class and his own 'Ganta' status",
        },
        color: "#34d399",
    },

    /* ──────────────── MEMBER 8 ──────────────── */
    {
        id: "member8",
        name: "Farhan",
        nickname: "Samosa Sam",
        rank: "🍔 Minister for Canteen Affairs",
        funnyIntro: "I have spent more credit hours at the canteen stall than in a lecture hall.",
        quote: "\"My GPA is inversely proportional to the number of samosas I eat in a semester.\"",
        phone: "923014752995",
        coverPhoto: "assets/friends/member8/cover.png",
        photos: [
            "assets/friends/member8/1.png",
            "assets/friends/member8/2.png",
            "assets/friends/member8/3.png",
        ],
        biodata: {
            realName: "Farhan Latif",
            age: "20",
            city: "Khudian Khas",
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
        name: "Aftab",
        nickname: "Sasta Romeo",
        rank: "💘 Chief Simping Officer (CSO)",
        funnyIntro: "Iska dil ek hard drive ki tarah hai, har nayi ladki dekh kar foran ek naya folder create ho jata hai.",
        quote: "\"Bhai, is baar wali alag hai... kasam se!.\"",
        phone: "923206852856",
        coverPhoto: "assets/friends/member9/1.png",
        photos: [
            "assets/friends/member9/2.png",
            "assets/friends/member9/3.png",
            "assets/friends/member9/4.png",
        ],
        biodata: {
            realName: "Aftab Akram",
            age: "24",
            city: "Tara Gar",
            program: "BS Mass Communication",
            hobbies: "Har nayi DP pe 'Mashallah' comment karna aur phir DMs mein 'Hi' bhej kar 3 mahine tak seen hone ka intezar karna.",
            biggestFear: "Crush ka achanak paas aakar 'Aur sunao Bhai, assignment ho gayi?' bol dena.",
            bestMemory: "Ek dafa ek ladki ne iski taraf dekh kar smile kiya tha. (Baad mein pata chala wo uske peeche khari apni saheli ko dekh rahi thi).",
            funFact: "Iske crushes badalne ki speed, hamare university ke Wi-Fi se bhi zyada tez hai. Har lecture mein naya ishq hota hai isko.",
            superpower: "Ek hi din mein 4 alag alag ladkiyon se 'Friend-zone' hone ki salahiyat.",
        },
        color: "#fb7185",
    },

    /* ──────────────── MEMBER 10 ──────────────── */
    {
        id: "member10",
        name: "Ahmad Khan",
        nickname: "The Silent Assassin",
        rank: "🤫 Chief Instigator of Back-Bench Crises",
        funnyIntro: "I never raise my hand. I am too busy raising hell, very discreetly.",
        quote: "\"Everyone needs a friend with a car. I am that friend.\"",
        phone: "923477215489",
        coverPhoto: "assets/friends/member10/image.png",
        photos: [
            "assets/friends/member10/photo1.jpg",
            "assets/friends/member10/photo2.jpg",
            "assets/friends/member10/photo3.jpg",
        ],
        biodata: {
            realName: "Ahmad Khan",
            age: "23",
            city: "Kasur",
            program: "BS Computer Science",
            hobbies: "Dropping devastating gossip into a calm group chat and going 'Do Not Disturb' immediately.",
            biggestFear: "The teacher calling my name when I am mentally designing a PowerPoint for a project due next month.",
            bestMemory: "Insulting a teacher so bad that he started crying",
            funFact: "Is responsible for 75% of the class's unexplained teacher melt-downs.",
            superpower: "The ability to look completely innocent while narrating the most chaotic events.",
        },
        color: "#f97316",
    },

    /* ──────────────── MEMBER 11 ──────────────── */
    {
        id: "member11",
        name: "Raja Ganzanfer",
        nickname: "Raja Sahab",
        rank: "📋 Minister of Plans That Never Happen",
        funnyIntro: "Organises every hangout. Nobody shows up. Still organises the next one.",
        quote: "\"This time it will definitely happen. I have a spreadsheet.\"",
        phone: "923000629795",
        coverPhoto: "assets/friends/member11/image.png",
        photos: [
            "assets/friends/member11/photo1.jpg",
            "assets/friends/member11/photo2.jpg",
            "assets/friends/member11/photo3.jpg",
        ],
        biodata: {
            realName: "Raja Ganzanfer",
            age: "27",
            city: "Multan",
            program: "BS Computer Science",
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
        name: "Salman",
        nickname: "The Holographic Presence",
        rank: "🤫 Head of Observations",
        funnyIntro: " I am not saying I was absent, I was just occupying an alternate dimension that day",
        quote: "\"Wait, did the attendance call end? I am literally right here (in spirit)\"",
        phone: "923266047025",
        coverPhoto: "assets/friends/member12/image.png",
        photos: [
            "assets/friends/member12/cover.png",
            "assets/friends/member12/photo2.jpg",
            "assets/friends/member12/photo3.jpg",
        ],
        biodata: {
            realName: "Salman",
            age: "25",
            city: "Lahore",
            program: "BS Computer Science",
            hobbies: "Watching, listening, judging silently",
            biggestFear: "A surprise roll call on the one day I *am* actually here.",
            bestMemory: "Said one thing that ended an entire argument instantly",
            funFact: "Everyone thinks he agrees with them. He agrees with no one.",
            superpower: "Appearing on the final attendance sheet despite zero physical evidence of my presence.",
        },
        color: "#94a3b8",
    },

];
