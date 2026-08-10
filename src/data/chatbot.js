// This is a simple chatbot used for SuperSimpleDev
// coding tutorials: https://youtube.com/@SuperSimpleDev

const Chatbot = {
  drawResponse: function (arr) {
    const result = arr[Math.floor(Math.random() * arr.length)];
    return result;
  },

  defaultResponses: {
    "hello hi": `Hello! How can I help you?`,
    "how are you": `I'm doing great! How can I help you?`,
    "do you like anime girls?": "Yeah, I love them!",
    "how are you feeling?": "I am great, thank you!",
    "What's your name?": "My name is NagashAI.",
    "are you real?": "No, I'm only chatbot with pre-generated responses.",
    "who created you?": "I was created by Nagash, he is my creator",
    "what is your favorite anime?": "Death Note",
    "what is your favorite game": "Red Dead Redemption 2",
    "do you dream?":
      "No, I cannot dream because I do not sleep, possess a biological brain, or experience a subconscious mind.",
    "are you intelligent":
      "I don't have any intelligence. I just have pre-scripted answers.",
    "What you can do?":
      "A few things. I am just simple chatbot. I can response to simple questions, flip a coin, roll dice or give you today date.",
    "what is a react?":
      "React is a free, open-source front-end JavaScript library created by Meta (Facebook) for building interactive user interfaces and single-page applications. It allows developers to create reusable UI pieces called components that manage their own data and update efficiently on screen",
    "what is a javascript?":
      "JavaScript (JS) is a programming language and core technology of the Web, alongside HTML and CSS. Created by Brendan Eich in 1995, it is maintained by Ecma International's TC39 technical committee, with related Web APIs maintained by W3C and WHATWG. It is used for example to bring interactiveness to the page",
    "what is css?":
      "CSS stands for Cascading Style Sheets. CSS is used to style the content of a web page by adding design elements like colors, fonts, and spacing. You can use CSS to change the look and feel of any element on a web page, from the overall layout to individual HTML tags.",
    "what is vite?":
      "Vite is a fast frontend build tool and local development server created by Evan You. It features an instant server start, fast hot module replacement, and optimized production builds.",
    "what is an api?":
      "API stands for Application Programming Interface. In the context of APIs, the word Application refers to any software with a distinct function. Interface can be thought of as a contract of service between two applications. This contract defines how the two communicate with each other using requests and responses.",
    "pick a number": function () {
      const drawedNumber = Math.floor(Math.random() * 100);
      return drawedNumber;
    },
    "yes or no": function () {
      const responses = ["yes", "no"];
      return this.drawResponse(responses);
    },
    "fortune cookie": function () {
      const fortunes = [
        "Share your fortune with others it will bring you good luck",
        "Beauty is not in the face it is the light in the heart",
        "He who knows he has enough is rich",
        "All the effort you are making will ultimately pay off",
        "Never compare yourself to the best others can do, but to the best you can do",
        "You are strong and brave, use these qualities to pull through",
        "Don't cry because it's over. Celebrate because it happened.",
      ];
      return this.drawResponse(fortunes);
    },
    "pick a color": function () {
      const colors = [
        "red",
        "green",
        "blue",
        "yellow",
        "black",
        "white",
        "orange",
        "pink",
        "purple",
        "brown",
        "gray",
      ];
      return this.drawResponse(colors);
    },
    "pick a movie genre": function () {
      const genres = [
        "action",
        "comedy",
        "drama",
        "romance",
        "science fiction",
        "horror",
        "martial arts",
        "adventure",
        "western",
        "thriller",
      ];
      return this.drawResponse(genres);
    },
    "pick an anime": function () {
      const animes = [
        "Demon slayer",
        "Dragon Ball",
        "Death Note",
        "My Hero Academia",
        "Fairy Tail",
        "Hunter x Hunter",
        "Tokyo Ghoul",
        "Berserk",
      ];
      return `I recommend ${this.drawResponse(animes)}`;
    },
    "i am sad": function () {
      const responses = [
        "It is okay to feel sad. Sadness is a heavy, quiet visitor, but it does not live here forever. Let yourself rest, breathe, and know that this moment will pass.",
        "Take one breath: Let your shoulders drop and your hands relax.",
        "Sadness is a normal, natural human response to difficult events, stress, or change, but it can feel heavy and overwhelming. It is completely okay to sit with these feelings rather than judge yourself for having them.",
      ];
      return this.drawResponse(responses);
    },
    "i am bored": function () {
      const responses = [
        "Maybe you should try something new, or crazy?",
        "When you feel bored, you can try quick and fun activities like going for a short walk, learning a weird skill, calling a friend, or tidying up one small space to reset your mood and beat the sluggish feeling.",
        "Maybe it's okay to feel boredom? You may take rest, you don't always have to do something",
      ];
      return this.drawResponse(responses);
    },
    "i need encouragement": function () {
      const incentives = [
        "Take a deep breath. You are stronger than you know, and you do not have to carry everything all at once. It is completely okay to feel tired or overwhelmed, but please remember that hard moments do not last forever.",
        "Progress is small: If all you managed to do today was just get through it, that is enough.",
        "You are resilient: You have already survived every hard day you have faced up to this point.",
      ];
      return this.drawResponse(incentives);
    },
    "give me a quote": function () {
      const quotes = [
        "Do not take life too seriously. You will never get out of it alive.",
        "Nothing is impossible, the word says itself I'm possible",
        "Live is either a daring adventure or nothing",
        "In a gentle way you can shake the world",
        "A kind gesture can reach a wound that only compassion can heal",
      ];
      return this.drawResponse(quotes);
    },
    "motivate me": function () {
      const motivations = [
        "You are capable of far more than you know. Action creates inspiration, not the other way around. Take one small step right now, finish one tiny task, and watch how fast your energy and focus grow.",
        "Believe you can and you're halfway there.",
        "It always seems impossible until it's done.",
        "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        "The question isn't who is going to let me; it's who is going to stop me.",
        "Success is the sum of small efforts, repeated day in and day out.",
      ];

      return this.drawResponse(motivations);
    },
    "Tell me a joke": function () {
      const jokes = [
        `Why do French people eat snails? They don’t like fast food.`,
        `Why are elevator jokes so good? They work on many levels!`,
        `Why can't you tell a joke to an egg? It might crack up.`,
        `What always falls and never gets hurt?……..rain!`,
        `Why did the man throw a clock out the window?…He wanted time to fly.`,
        `Why didn’t the skeleton go to the party?…He had NO BODY to go with.`,
        `What is a knight’s favorite fish?… Swordfish`,
        `What does a storm cloud wear under his raincoat? Thunderwear.`,
        `What did the lava say to his girlfriend? “I lava you!”`,
      ];
      return this.drawResponse(jokes);
    },
    "Tell me a fun fact:": function () {
      const facts = [
        `A cloud weighs around a million tonnes. A cloud typically has a volume of around 1km3 and a density of around 1.003kg per m3 – that's a density that’s around 0.4 per cent lower than the air surrounding it.`,
        `Identical twins don’t have the same fingerprints. You can’t blame your crimes on your twin, after all. This is because environmental factors during development in the womb (umbilical cord length, position in the womb, and the rate of finger growth) impact your fingerprint.`,
        `Earlobes have no biological purpose. While they are rich in nerve endings and may play a role in social bonding, many scientists argue that earlobes don’t have any true biological purpose.`,
        `Mars isn’t actually round. Unlike any other rocky planet in the Solar System, Mars is actually shaped like a rugby ball, but with different sizes along all three axes.`,
        `There’s no such thing as zero-calorie foods. Even low-calorie foods, such as celery and watercress, contain more energy than the body needs to process them.`,
        `Around 8–10 per cent of people grind their teeth at night. The process is called sleep bruxism, and most people aren't even aware they're doing it.`,
        `The Universe's average colour is called 'Cosmic latte'. In a 2002 study, astronomers found that the light coming from galaxies averaged into a beige colour that’s close to white.`,
        `Most people stroke cats the wrong way. Research shows they often just tolerate it for the food and attention. The safest spots? Under the chin, cheeks and base of the ears. The worst? Their belly and the base of their tail – touch there and you’re more likely to annoy them than bond with them.`,
        `Newborn babies don't actually see in black and white. Their colour vision is limited, but they can detect some intense colours, especially red. This is because the eyes' cone cells, which detect colour, aren't fully mature at birth.`,
      ];
      return this.drawResponse(facts);
    },
    "flip a coin": function () {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "Sure! You got heads";
      } else {
        return "Sure! You got tails";
      }
    },
    "roll a dice": function () {
      const diceResult = Math.floor(Math.random() * 6) + 1;
      return `Sure! You got ${diceResult}`;
    },
    "what is the date today": function () {
      const now = new Date();
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const month = months[now.getMonth()];
      const day = now.getDate();

      return `Today is ${month} ${day}`;
    },
    thank: "No problem! Let me know if you need help with anything else!",
    bye: "Bye! See you again!",

    // ===== POLSKIE WERSJE =====

    "cześć hej": "Cześć! Jak mogę pomóc?",
    "jak się masz": "Mam się świetnie! Jak mogę Ci pomóc?",
    "lubisz dziewczyny z anime": "Tak, uwielbiam je!",
    "jak się czujesz": "Czuję się świetnie, dziękuję!",
    "jak masz na imię": "Mam na imię NagashAI.",
    "czy jesteś prawdziwy":
      "Nie, jestem tylko chatbotem z wcześniej przygotowanymi odpowiedziami.",
    "kto cię stworzył": "Zostałem stworzony przez Nagasha, to mój twórca.",
    "jakie jest twoje ulubione anime": "Death Note",
    "jaka jest twoja ulubiona gra": "Red Dead Redemption 2",
    "czy śnisz":
      "Nie, nie mogę śnić, ponieważ nie śpię, nie posiadam biologicznego mózgu ani podświadomości.",
    "czy jesteś inteligentny":
      "Nie mam prawdziwej inteligencji. Mam jedynie wcześniej przygotowane odpowiedzi.",
    "co potrafisz":
      "Kilka rzeczy. Jestem prostym chatbotem. Potrafię odpowiadać na proste pytania, rzucać monetą, rzucać kostką i podać dzisiejszą datę.",

    "co to jest react":
      "React to darmowa, otwartoźródłowa biblioteka JavaScript do tworzenia interaktywnych interfejsów użytkownika.",

    "co to jest javascript":
      "JavaScript to język programowania używany do dodawania interaktywności na stronach internetowych.",

    "co to jest css":
      "CSS służy do stylizowania wyglądu stron internetowych, na przykład kolorów, czcionek i odstępów.",

    "co to jest vite":
      "Vite to bardzo szybkie narzędzie do tworzenia aplikacji frontendowych i lokalny serwer deweloperski.",

    "co to jest api":
      "API to interfejs pozwalający dwóm aplikacjom komunikować się ze sobą za pomocą żądań i odpowiedzi.",

    "wybierz liczbę": function () {
      const drawedNumber = Math.floor(Math.random() * 100);
      return drawedNumber;
    },

    "tak czy nie": function () {
      const responses = ["tak", "nie"];
      return this.drawResponse(responses);
    },

    "ciasteczko z wróżbą": function () {
      const fortunes = [
        "Podziel się swoim szczęściem z innymi, a przyniesie Ci ono więcej szczęścia",
        "Piękno nie tkwi w twarzy, lecz w świetle serca",
        "Kto wie, że ma wystarczająco dużo, ten jest bogaty",
        "Wszystek wysiłek, który wkładasz, ostatecznie się opłaci",
        "Nie porównuj się do najlepszych innych, ale do najlepszej wersji siebie",
        "Jesteś silny i odważny, wykorzystaj te cechy, aby przetrwać trudności",
        "Nie płacz, że coś się skończyło. Ciesz się, że się wydarzyło.",
      ];
      return this.drawResponse(fortunes);
    },

    "wybierz kolor": function () {
      const colors = [
        "czerwony",
        "zielony",
        "niebieski",
        "żółty",
        "czarny",
        "biały",
        "pomarańczowy",
        "różowy",
        "fioletowy",
        "brązowy",
        "szary",
      ];
      return this.drawResponse(colors);
    },

    "wybierz gatunek filmu": function () {
      const genres = [
        "akcja",
        "komedia",
        "dramat",
        "romans",
        "science fiction",
        "horror",
        "sztuki walki",
        "przygodowy",
        "western",
        "thriller",
      ];
      return this.drawResponse(genres);
    },

    "wybierz anime": function () {
      const animes = [
        "Demon Slayer",
        "Dragon Ball",
        "Death Note",
        "My Hero Academia",
        "Fairy Tail",
        "Hunter x Hunter",
        "Tokyo Ghoul",
        "Berserk",
      ];
      return `Polecam ${this.drawResponse(animes)}`;
    },

    "jest mi smutno": function () {
      const responses = [
        "To w porządku czuć smutek. Ten moment minie.",
        "Weź jeden spokojny oddech i pozwól sobie odpocząć.",
        "Smutek jest naturalną reakcją człowieka na trudne wydarzenia i zmiany.",
      ];
      return this.drawResponse(responses);
    },

    "nudzi mi się": function () {
      const responses = [
        "Może spróbujesz czegoś nowego albo szalonego?",
        "Krótki spacer, nowa umiejętność albo rozmowa z kimś mogą poprawić nastrój.",
        "Czasem nuda oznacza po prostu, że potrzebujesz odpoczynku.",
      ];
      return this.drawResponse(responses);
    },

    "potrzebuję wsparcia": function () {
      const incentives = [
        "Jesteś silniejszy, niż myślisz.",
        "Nawet mały postęp nadal jest postępem.",
        "Przetrwałeś już wszystkie trudne dni do tego momentu.",
      ];
      return this.drawResponse(incentives);
    },

    "daj mi cytat": function () {
      const quotes = [
        "Nie traktuj życia zbyt poważnie. I tak nie wyjdziesz z niego żywy.",
        "Nic nie jest niemożliwe.",
        "Życie jest albo wielką przygodą, albo niczym.",
        "W łagodny sposób możesz wstrząsnąć światem.",
        "Dobry gest potrafi dotrzeć do ran, które leczy tylko współczucie.",
      ];
      return this.drawResponse(quotes);
    },

    "zmotywuj mnie": function () {
      const motivations = [
        "Działanie tworzy motywację, nie odwrotnie.",
        "Uwierz, że możesz, a jesteś w połowie drogi.",
        "To zawsze wydaje się niemożliwe, dopóki nie zostanie zrobione.",
        "Doskonałość jest nawykiem.",
        "Sukces to suma małych wysiłków powtarzanych każdego dnia.",
      ];
      return this.drawResponse(motivations);
    },

    "opowiedz żart": function () {
      const jokes = [
        "Dlaczego Francuzi jedzą ślimaki? Bo nie lubią fast foodów.",
        "Dlaczego żarty o windach są takie dobre? Bo działają na wielu poziomach.",
        "Dlaczego nie można opowiedzieć żartu jajku? Bo może pęknąć ze śmiechu.",
        "Co zawsze spada i nigdy się nie rani? Deszcz.",
        "Dlaczego człowiek wyrzucił zegar przez okno? Chciał, żeby czas leciał.",
      ];
      return this.drawResponse(jokes);
    },

    "powiedz ciekawostkę": function () {
      const facts = [
        "Chmura może ważyć około miliona ton.",
        "Bliźnięta jednojajowe nie mają identycznych odcisków palców.",
        "Mars nie jest idealnie okrągły.",
        "Nie istnieją naprawdę produkty o zerowej kaloryczności.",
        "Noworodki nie widzą wyłącznie w czerni i bieli.",
      ];
      return this.drawResponse(facts);
    },

    "rzuć monetą": function () {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "Wypadł orzeł";
      } else {
        return "Wypadła reszka";
      }
    },

    "rzuć kostką": function () {
      const diceResult = Math.floor(Math.random() * 6) + 1;
      return `Wypadło ${diceResult}`;
    },

    "jaka jest dzisiaj data": function () {
      const now = new Date();
      const months = [
        "stycznia",
        "lutego",
        "marca",
        "kwietnia",
        "maja",
        "czerwca",
        "lipca",
        "sierpnia",
        "września",
        "października",
        "listopada",
        "grudnia",
      ];

      const month = months[now.getMonth()];
      const day = now.getDate();

      return `Dzisiaj jest ${day} ${month}`;
    },
    "dziękuję": "Nie ma problemu! Daj znać, jeśli będziesz czegoś potrzebować.",
    "pa pa": "Pa! Do zobaczenia ponownie!",
    "do widzenia": "Do widzenia! Miłego dnia!",
  },

  unsuccessfulResponse: `Sorry, I didn't quite understand that. Currently, I only know how to flip a coin, roll a dice, or get today's date. Let me know how I can help!`,

  getResponse: function (message) {
    // This spread operator (...) combines the 2 objects.
    const responses = {
      ...this.defaultResponses,
      ...this.additionalResponses,
    };

    const { ratings, bestMatchIndex } = this.stringSimilarity(
      message,
      Object.keys(responses),
    );

    const bestResponseRating = ratings[bestMatchIndex].rating;
    if (bestResponseRating <= 0.3) {
      return this.unsuccessfulResponse;
    }

    const bestResponseKey = ratings[bestMatchIndex].target;
    const response = responses[bestResponseKey];

    if (typeof response === "function") {
      return response.call(this);
    } else {
      return response;
    }
  },

  getResponseAsync: function (message) {
    return new Promise((resolve) => {
      // Pretend it takes some time for the chatbot to response.
      setTimeout(() => {
        resolve(this.getResponse(message));
      }, 1000);
    });
  },

  compareTwoStrings: function (first, second) {
    first = first.replace(/\s+/g, "");
    second = second.replace(/\s+/g, "");

    if (first === second) return 1;
    if (first.length < 2 || second.length < 2) return 0;

    let firstBigrams = new Map();
    for (let i = 0; i < first.length - 1; i++) {
      const bigram = first.substring(i, i + 2);
      const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) + 1 : 1;

      firstBigrams.set(bigram, count);
    }

    let intersectionSize = 0;
    for (let i = 0; i < second.length - 1; i++) {
      const bigram = second.substring(i, i + 2);
      const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) : 0;

      if (count > 0) {
        firstBigrams.set(bigram, count - 1);
        intersectionSize++;
      }
    }

    return (2.0 * intersectionSize) / (first.length + second.length - 2);
  },

  stringSimilarity: function (mainString, targetStrings) {
    const ratings = [];
    let bestMatchIndex = 0;

    for (let i = 0; i < targetStrings.length; i++) {
      const currentTargetString = targetStrings[i];
      const currentRating = this.compareTwoStrings(
        mainString,
        currentTargetString,
      );
      ratings.push({ target: currentTargetString, rating: currentRating });
      if (currentRating > ratings[bestMatchIndex].rating) {
        bestMatchIndex = i;
      }
    }

    const bestMatch = ratings[bestMatchIndex];

    return {
      ratings: ratings,
      bestMatch: bestMatch,
      bestMatchIndex: bestMatchIndex,
    };
  },
};

window.Chatbot = Chatbot;
