var allTest = [
  [
    {
      landmark: 1,
      name: "Mosteiro dos Jerónimos",
      img: "url('../image/landmarks/Jerónimos_April_2009-4.jpg')",
      quantity: 3,
      lock: 3,
      num: "Q1",
      point: 7,
      question: "What stands between Jeronimos and the river?",
      options: [
        "A: A parking lot.",
        "B: A museum.",
        "C: A restaurant.",
        "D: A garden.",
      ],
      answer: "D: A garden.",
      like: false,
      description:
        "Mosteiro do Jeronimos The Jerónimos Monastery or Hieronymites Monastery (Portuguese: Mosteiro dos Jerónimos, is a former monastery of the Order of Saint Jerome near the Tagus river in the parish of Belém, in the Lisbon Municipality, Portugal; it was secularised on 28 December 1833 by state decree and its ownership transferred to the charitable institution, Real Casa Pia de Lisboa. The monastery is one of the most prominent examples of the Portuguese Late Gothic Manueline style of architecture in Lisbon. It was classified a UNESCO World Heritage Site, along with the nearby Tower of Belém, in 1983.",
    },
    {
      num: "Q2",
      point: 4,
      question: "What type of architecture is Jeronimos built in?",
      options: ["A: Roman.", "B: Baroc.", "C: Gothic.", "D: Byzantine."],
      answer: "C: Gothic.",
    },
    {
      num: "Q3",
      point: 5,
      question: "What type of landmark is Jeronimos?",
      options: ["A: Museum.", "B: Monastery.", "C: Statue.", "D: Church."],
      answer: "B: Monastery.",
    },
  ],
  [
    {
      landmark: 2,
      name: "Torre de Belém",
      img: "url('../image/landmarks/photo-1562620287-9309c2d9a460-816x612.jpg",
      quantity: 3,
      lock: 3,
      num: "Q1",
      point: 6,
      question: "What was this landmarks' originally built for?",
      options: [
        "A: It was originally intended to be a defensivestronghold.",
        "B: A prison to lisbon's most notorious criminals.",

        "C: Point of embarkation and disembarkment for portuguese explorers.",
        "D: One of the king's private places.",
      ],
      answer:
        "C: Point of embarkation and disembarkment for portuguese explorers.",
      like: false,
      description:
        "Torre de Belem the Belém Tower (Portuguese: Torre de Belém, officially the Tower of Saint Vincent (Portuguese: Torre de São Vicente) is a 16th-century fortification located in Lisbon that served as a point of embarkation and disembarkation for Portuguese explorers and as a ceremonial gateway to Lisbon. It was built during the height of the Portuguese Renaissance, and is a prominent example of the Portuguese Manueline style, but it also incorporates hints of other architectural styles. The structure was built from lioz limestone and is composed of a bastion and a 30-metre (98.4 ft), four-storey tower.",
    },
    {
      num: "Q2",
      point: 4,
      question: "What type of architecture is Torre de Belém built in?",
      options: ["A: Roman.", "B: Baroc.", "C: Gothic.", "D: Byzantine."],
      answer: "C: Gothic.",
    },
    {
      num: "Q3",
      point: 6,
      question: "How long did this landmark take to be built?",
      options: ["A: 4 years.", "B: 6 years.", "C: 8 years.", "D: 10 years."],
      answer: "B: 6 years.",
    },
  ],
  [
    {
      landmark: 3,
      name: "Castelo São Jorge",
      img: "url('../image/landmarks/engenhos-da-calheta-madeira-2.jpg",
      quantity: 2,
      lock: 2,
      num: "Q1",
      point: 6,
      question:
        "Why is castelo de são jorge located on that specific location?",
      options: [
        "A: Closer to the sky makes the towers warmer for the soldiers.",
        "B: His hill is the tallest closest to the river enabling height advantage and quick sea acess.",
        "There is not a real reason for the location of the castle.",
        "Lisbon being located in the area with 7 hills the 4rth one was chosen for superstitious reasons.",
      ],
      answer:
        "B: His hill is the tallest closest to the river enabling height advantage and quick sea acess.",
      like: false,
      description:
        "Castelo São Jorge São Jorge Castle is a historic castle in the Portuguese capital of Lisbon, located in the freguesia of Santa Maria Maior. Human occupation of the castle hill dates to at least the 8th century BC while the first fortifications built date from the 1st century BC. The hill on which São Jorge Castle stands has played an important part in the history of Lisbon, having served as the location of fortifications occupied successively by Phoenicians, Carthaginians, Romans, and Moors, before its conquest by the Portuguese in the 1147 Siege of Lisbon.",
    },
    {
      num: "Q2",
      question: "When was this castle built?",
      options: [
        "A: 10th century.",
        "B: 11th century.",
        "C: 12th century.",
        "D: 13th century.",
      ],
      answer: "B: 11th century.",
      point: 4,
    },
  ],
  [
    {
      landmark: 4,
      name: "Praça do Comércio",
      img: "url(../image/landmarks/praca-do-comercio.jpg)",
      quantity: 2,
      lock: 2,
      num: "Q1",
      question: "What does the portuguese word 'Comércio' mean?",
      options: ["A: Docking.", "B: Trade.", "C: independence.", "D: War."],
      answer: "B: Trade.",
      point: 6,
      like: false,
      description:
        "Praça do Comércio The Praça do Comércio is a large, harbour-facing square in Portugal's capital, Lisbon. Facing, south, the Tagus (Tejo), the city square is still commonly known as Terreiro do Paço. It as hosted the Paços da Ribeira (Royal Ribeira Palace) until it was destroyed by the great 1755 Lisbon earthquake. After the earthquake, the square was completely remodelled as part of the rebuilding of the Pombaline Downtown, ordered by Sebastião José de Carvalho e Melo, 1st Marquis of Pombal, who was (chief) Minister of Portugal from 1750 to 1777, during the reign of Dom José I, King of Portugal.",
    },
    {
      num: 2,
      question: "What stands on the edge of the Praça across the river?",
      options: [
        "A: A restaurant.",
        "B: A supermarket.",
        "C: A statue of Portugal's first king.",
        "D: A triumph arch.",
      ],
      answer: "D: A triumph arch.",
      point: 7,
    },
  ],
  [
    {
      landmark: 5,
      name: "Elevador Santa Justa",
      img: "url(../image/landmarks/elevador-santa-justa-1.jpg)",
      description:
        "Elevador Santa Justa The Santa Justa Lift, also called Carmo Lift, is an elevator, or lift, in the civil parish of Santa Justa, in the historic center of Lisbon, Portugal. Situated at the end of Rua de Santa Justa, it connects the lower streets of the Baixa with the higher Largo do Carmo (Carmo Square). Since its construction the Lift has become a tourist attraction for Lisbon as, among the urban lifts in the city, Santa Justa is the only remaining vertical (conventional) one. Others, including Elevador da Glória and Elevador da Bica, are funicular railways, and the other lift constructed around the same time, the Elevator of São Julião, has since been demolished.",
      quantity: 3,
      lock: 3,
      num: "Q1",
      question: "What century was the elevator opened to public?",
      options: ["A: 18th.", "B: 19th.", "C: 20th.", "D: 21st."],
      answer: "C: 20th.",
      point: 4,
      like: false,
    },
    {
      num: "Q2",
      question:
        "What makes this landmark stand out from the rest of the buildings in its area?",
      options: [
        "A: It is made of metal making it stand out in baixas original stone buildings.",
        "B: It is hugeee!",
        "C: This monument does not stand out.",
        "D: The amount of people around it.",
      ],
      answer:
        "A: It is made of metal making it stand out in baixas original stone buildings.",
      point: 3,
    },
    {
      num: "Q3",
      question: "What other name is given to this landmark?",
      options: [
        "A: Ascensor da Liberdade.",
        "B: Elevador de Metal.",
        "C: Elevador do Carmo.",
        "D: Torre de Subida.",
      ],
      answer: "C: Elevador do Carmo.",
      point: 5,
    },
  ],
  [
    {
      landmark: 6,
      name: "Praça Dom Pedro IV",
      img: "url(../image/landmarks/cookinglisbon_lisbonrossio01.jpg)",
      description:
        "Praça Dom Pedro IV The Rossio is the popular name of the King Pedro IV Square (Portuguese: Praça de D. Pedro IV) in the city of Lisbon, in Portugal. It is located in the Pombaline Downtown of Lisbon and has been one of its main squares since the Middle Ages. It has been the setting of popular revolts and celebrations, bullfights and executions, and is now a preferred meeting place of Lisbon natives and tourists alike. The current name of the Rossio pays homage to Pedro IV, King of Portugal. The Column of Pedro IV is in the middle of the square.",
      quantity: 3,
      lock: 3,
      num: "Q1",
      question: "What stands in the middle of the square?",
      options: [
        "A: A viewpoint.",
        "B: A restaurant.",
        "C: A homeless sleeping spot.",
        "D: A fountain.",
      ],
      answer: "D: A fountain.",
      point: 3,
      like: false,
    },
    {
      num: "Q2",
      question: "What important structure stands near this landmark?",
      options: [
        "A: Teatro D. Maria II.",
        "B: Elevador Santa Justa.",
        "C: The Statue of Fernando.",
        "D: Pessoa.",
      ],
      answer: "A: Teatro D. Maria II.",
      point: 4,
    },
    {
      num: "Q3",
      question: "What other name is given to this square?",
      options: [
        "A: Praça da Figueira.",
        "B: Rossio.",
        "C: Praça do Comercio.",
        "D: Prça das Flores.",
      ],
      answer: "B: Rossio.",
      point: 6,
    },
  ],
];

// var totalQuestion = [3, 3, 2, 2];
