"use strict";

var allTest = [[{
  landmark: 1,
  name: "Mosteiro dos Jerónimos",
  img: "url('../image/landmarks/Jerónimos_April_2009-4.jpg')",
  quantity: 3,
  lock: 3,
  num: "Q1",
  point: 7,
  question: "What stands between Jeronimos and the river?",
  options: ["A: A parking lot.", "B: A museum.", "C: A restaurant.", "D: A garden."],
  answer: "D: A garden.",
  like: false,
  pass: false,
  description: "Mosteiro do Jeronimos The Jerónimos Monastery or Hieronymites Monastery (Portuguese: Mosteiro dos Jerónimos, is a former monastery of the Order of Saint Jerome near the Tagus river in the parish of Belém, in the Lisbon Municipality, Portugal; it was secularised on 28 December 1833 by state decree and its ownership transferred to the charitable institution, Real Casa Pia de Lisboa. The monastery is one of the most prominent examples of the Portuguese Late Gothic Manueline style of architecture in Lisbon. It was classified a UNESCO World Heritage Site, along with the nearby Tower of Belém, in 1983."
}, {
  num: "Q2",
  point: 4,
  question: "What type of architecture is Jeronimos built in?",
  options: ["A: Roman.", "B: Baroc.", "C: Gothic.", "D: Byzantine."],
  answer: "C: Gothic."
}, {
  num: "Q3",
  point: 5,
  question: "What type of landmark is Jeronimos?",
  options: ["A: Museum.", "B: Monastery.", "C: Statue.", "D: Church."],
  answer: "B: Monastery."
}], [{
  landmark: 2,
  name: "Torre de Belém",
  img: "url('../image/landmarks/photo-1562620287-9309c2d9a460-816x612.jpg",
  quantity: 3,
  lock: 3,
  num: "Q1",
  point: 6,
  question: "What was this landmarks' originally built for?",
  options: ["A: It was originally intended to be a defensivestronghold.", "B: A prison to lisbon's most notorious criminals.", "C: Point of embarkation and disembarkment for portuguese explorers.", "D: One of the king's private places."],
  answer: "C: Point of embarkation and disembarkment for portuguese explorers.",
  like: false,
  pass: false,
  description: "Torre de Belem the Belém Tower (Portuguese: Torre de Belém, officially the Tower of Saint Vincent (Portuguese: Torre de São Vicente) is a 16th-century fortification located in Lisbon that served as a point of embarkation and disembarkation for Portuguese explorers and as a ceremonial gateway to Lisbon. It was built during the height of the Portuguese Renaissance, and is a prominent example of the Portuguese Manueline style, but it also incorporates hints of other architectural styles. The structure was built from lioz limestone and is composed of a bastion and a 30-metre (98.4 ft), four-storey tower."
}, {
  num: "Q2",
  point: 4,
  question: "What type of architecture is Torre de Belém built in?",
  options: ["A: Roman.", "B: Baroc.", "C: Gothic.", "D: Byzantine."],
  answer: "C: Gothic."
}, {
  num: "Q3",
  point: 6,
  question: "How long did this landmark take to be built?",
  options: ["A: 4 years.", "B: 6 years.", "C: 8 years.", "D: 10 years."],
  answer: "B: 6 years."
}], [{
  landmark: 3,
  name: "Castelo São Jorge",
  img: "url('../image/landmarks/engenhos-da-calheta-madeira-2.jpg",
  quantity: 2,
  lock: 2,
  num: "Q1",
  point: 6,
  question: "Why is castelo de são jorge located on that specific location?",
  options: ["A: Closer to the sky makes the towers warmer for the soldiers.", "B: His hill is the tallest closest to the river enabling height advantage and quick sea acess.", "There is not a real reason for the location of the castle.", "Lisbon being located in the area with 7 hills the 4rth one was chosen for superstitious reasons."],
  answer: "B: His hill is the tallest closest to the river enabling height advantage and quick sea acess.",
  like: false,
  pass: false,
  description: "Castelo São Jorge São Jorge Castle is a historic castle in the Portuguese capital of Lisbon, located in the freguesia of Santa Maria Maior. Human occupation of the castle hill dates to at least the 8th century BC while the first fortifications built date from the 1st century BC. The hill on which São Jorge Castle stands has played an important part in the history of Lisbon, having served as the location of fortifications occupied successively by Phoenicians, Carthaginians, Romans, and Moors, before its conquest by the Portuguese in the 1147 Siege of Lisbon."
}, {
  num: "Q2",
  question: "When was this castle built?",
  options: ["A: 10th century.", "B: 11th century.", "C: 12th century.", "D: 13th century."],
  answer: "B: 11th century.",
  point: 4
}], [{
  landmark: 4,
  name: "Praça do Comércio",
  img: "url(../image/landmarks/praccca7a-do-comecc81rcio-portugal_l.jpeg)",
  quantity: 2,
  lock: 2,
  num: "Q1",
  question: "What does the portuguese word 'Comércio' mean?",
  options: ["A: Docking.", "B: Trade.", "C: independence.", "D: War."],
  answer: "B: Trade.",
  point: 6,
  like: false,
  pass: false,
  description: "Praça do Comércio The Praça do Comércio is a large, harbour-facing square in Portugal's capital, Lisbon. Facing, south, the Tagus (Tejo), the city square is still commonly known as Terreiro do Paço. It as hosted the Paços da Ribeira (Royal Ribeira Palace) until it was destroyed by the great 1755 Lisbon earthquake. After the earthquake, the square was completely remodelled as part of the rebuilding of the Pombaline Downtown, ordered by Sebastião José de Carvalho e Melo, 1st Marquis of Pombal, who was (chief) Minister of Portugal from 1750 to 1777, during the reign of Dom José I, King of Portugal."
}, {
  num: 2,
  question: "What stands on the edge of the Praça across the river?",
  options: ["A: A restaurant.", "B: A supermarket.", "C: A statue of Portugal's first king.", "D: A triumph arch."],
  answer: "D: A triumph arch.",
  point: 7
}], [{
  landmark: 5,
  name: "Elevador Santa Justa",
  img: "url(../image/landmarks/elevador-santa-justa-1.jpg)",
  description: "Elevador Santa Justa The Santa Justa Lift, also called Carmo Lift, is an elevator, or lift, in the civil parish of Santa Justa, in the historic center of Lisbon, Portugal. Situated at the end of Rua de Santa Justa, it connects the lower streets of the Baixa with the higher Largo do Carmo (Carmo Square). Since its construction the Lift has become a tourist attraction for Lisbon as, among the urban lifts in the city, Santa Justa is the only remaining vertical (conventional) one. Others, including Elevador da Glória and Elevador da Bica, are funicular railways, and the other lift constructed around the same time, the Elevator of São Julião, has since been demolished.",
  quantity: 3,
  lock: 3,
  num: "Q1",
  question: "What century was the elevator opened to public?",
  options: ["A: 18th.", "B: 19th.", "C: 20th.", "D: 21st."],
  answer: "C: 20th.",
  point: 4,
  like: false,
  pass: false
}, {
  num: "Q2",
  question: "What makes this landmark stand out from the rest of the buildings in its area?",
  options: ["A: It is made of metal making it stand out in baixas original stone buildings.", "B: It is hugeee!", "C: This monument does not stand out.", "D: The amount of people around it."],
  answer: "A: It is made of metal making it stand out in baixas original stone buildings.",
  point: 3
}, {
  num: "Q3",
  question: "What other name is given to this landmark?",
  options: ["A: Ascensor da Liberdade.", "B: Elevador de Metal.", "C: Elevador do Carmo.", "D: Torre de Subida."],
  answer: "C: Elevador do Carmo.",
  point: 5
}], [{
  landmark: 6,
  name: "Praça Dom Pedro IV",
  img: "url(../image/landmarks/cookinglisbon_lisbonrossio01.jpg)",
  description: "Praça Dom Pedro IV The Rossio is the popular name of the King Pedro IV Square (Portuguese: Praça de D. Pedro IV) in the city of Lisbon, in Portugal. It is located in the Pombaline Downtown of Lisbon and has been one of its main squares since the Middle Ages. It has been the setting of popular revolts and celebrations, bullfights and executions, and is now a preferred meeting place of Lisbon natives and tourists alike. The current name of the Rossio pays homage to Pedro IV, King of Portugal. The Column of Pedro IV is in the middle of the square.",
  quantity: 3,
  lock: 3,
  num: "Q1",
  question: "What stands in the middle of the square?",
  options: ["A: A viewpoint.", "B: A restaurant.", "C: A homeless sleeping spot.", "D: A fountain."],
  answer: "D: A fountain.",
  point: 3,
  like: false,
  pass: false
}, {
  num: "Q2",
  question: "What important structure stands near this landmark?",
  options: ["A: Teatro D. Maria II.", "B: Elevador Santa Justa.", "C: The Statue of Fernando.", "D: Pessoa."],
  answer: "A: Teatro D. Maria II.",
  point: 4
}, {
  num: "Q3",
  question: "What other name is given to this square?",
  options: ["A: Praça da Figueira.", "B: Rossio.", "C: Praça do Comercio.", "D: Prça das Flores."],
  answer: "B: Rossio.",
  point: 6
}], [{
  landmark: 7,
  name: "Oceanário de Lisboa",
  img: "url(../image/landmarks/Lisboa-Oceanario.jpg)",
  description: "Oceanário de Lisboa The Lisbon Oceanarium is an oceanarium in Lisbon, Portugal. It is located in the Parque das Nações, which was the exhibition grounds for the Expo '98. It is the largest indoor aquarium in Europe.",
  quantity: 1,
  lock: 1,
  num: "Q1",
  question: "What is the oceanario?",
  options: ["A: A very important 15th century monument.", "B: A restaurant of only ocean food such as fish.", "C: A fish zoo (aquarium).", "D: A museum."],
  answer: "C: A fish zoo (aquarium).",
  point: 6,
  like: false,
  pass: false
}], [{
  landmark: 8,
  name: "Padrão dos Descobrimentos",
  img: "url(../image/landmarks/Pardrao-descobrimentos.jpg)",
  description: "Padrão dos Descobrimentos Padrão dos Descobrimentos is a monument on the northern bank of the Tagus River estuary, in the civil parish of Santa Maria de Belém, Lisbon. Located along the river where ships departed to explore and trade with India and the Orient, the monument celebrates the Portuguese Age of Discovery (or Age of Exploration) during the 15th and 16th centuries.",
  quantity: 2,
  lock: 2,
  num: "Q1",
  question: "What important portuguese historical event does this monument celebrate?",
  options: ["A: 	Portugues monarchy.", "B: Portuguese discoveries.", "C: Portuguese culture.", "D: Portuguese traditions."],
  answer: "B: Portuguese discoveries.",
  point: 6,
  like: false,
  pass: false
}, {
  num: "Q2",
  question: "When was this monument built?",
  options: ["A: 1960-1970", "B: 1970-1980", "C: 1980-1990", "D: 1875-1890"],
  answer: "A: 1960-1970",
  point: 5
}], [{
  landmark: 9,
  name: "Aqueduto das Águas Livres",
  img: "url(../image/landmarks/5438e3dd78df8e1d3a76dee78904d919-1-754x394.jpg)",
  description: "Aqueduto das Águas Livres The Águas Livres is a historic aqueduct in the city of Lisbon, Portugal. It is one of the most remarkable examples of 18th-century Portuguese engineering. The main course of the aqueduct covers 18 km, but the whole network of canals extends through nearly 58 km. The city of Lisbon has always suffered from lack of drinking water, and King John V decided to build an aqueduct to bring water from sources in the parish of Caneças, in the modern municipality of Odivelas. The project was paid for by a special sales tax on beef, olive oil, wine, and other products.",
  quantity: 2,
  lock: 2,
  num: "Q1",
  question: "What is/was the function of this monument?",
  options: ["A: Decoration.", "B: A bridge to link both hills of Lisbon.", "C: Transport water to the city.", "D: A monument to celebrate the Roman occupation of Lisbon."],
  answer: "C: Transport water to the city.",
  point: 6,
  like: false,
  pass: false
}, {
  num: "Q2",
  question: "How long is said that this monument measures?",
  options: ["A: 20000 meters", "B: 15000 meters", "C: 10000 meters", "D: 5000 meters"],
  answer: "B: 15000 meters",
  point: 5
}], [{
  landmark: 10,
  name: "Sé de Lisboa",
  img: "url(../image/landmarks/0-se-de-lisboa.jpeg)",
  description: "Sé de Lisboa The Lisbon Cathedral (Portuguese: Santa Maria Maior de Lisboa or Sé de Lisboa; Metropolitan Cathedral of St. Mary Major), often called simply the Sé, is a Roman Catholic cathedral located in Lisbon, Portugal. The oldest church in the city is the seat of the Patriarchate of Lisbon. Built in 1147, the cathedral has survived many earthquakes and has been modified, renovated, and restored several times. It is nowadays a mix of different architectural styles. It has been classified as a National Monument since 1910.",
  quantity: 2,
  lock: 2,
  num: "Q1",
  question: "Which neighbourhood is the Sé located in?",
  options: ["A: Alfama", "B: Baixa", "C: Castelo", "D: Chiado"],
  answer: "A: Alfama",
  point: 7,
  like: false,
  pass: false
}, {
  num: "Q2",
  question: "What type of landmark is the 'Sé'?",
  options: ["A: A cathedral.", "B: A museum.", "C: A square.", "D: A traditional building known to be a meeting spot for a lot of travelers."],
  answer: "A: A cathedral.",
  point: 5
}], [{
  landmark: 11,
  name: "Parque Eduardo VII",
  img: "url(../image/landmarks/parque-eduardo-vii.jpg)",
  description: "Parque Eduardo VII Eduardo VII Park (Portuguese: Parque Eduardo VII) is a public park in Lisbon, Portugal.The park occupies an area of 26 hectares (64 acres) to the north of Avenida da Liberdade and Marquis of Pombal Square in Lisbon's city center. The park is named for King Edward VII of the United Kingdom, who visited Portugal in 1903 to strengthen relations between the two countries and reaffirm the Anglo-Portuguese Alliance. Until Edward's visit the park was called Parque da Liberdade (Liberty Park). In 1945 Portuguese Modernist architect Francisco Keil do Amaral redesigned the park to its current configuration.",
  quantity: 2,
  lock: 2,
  num: "Q1",
  question: "What Stands at the bottom center of Parque Eduardo 7?",
  options: ["A: A huge street.", "B: The statue of Marquês de Pombal.", "C: A luxury hotel.", "D: A flag post."],
  answer: "B: The statue of Marquês de Pombal.",
  point: 5,
  like: false,
  pass: false
}, {
  num: "Q2",
  question: "When was this park built?",
  options: ["A: 18th century", "B: 19th century", "C: 20th century", "D: 21st century"],
  answer: "C: 20th century",
  point: 5
}], [{
  landmark: 12,
  name: "Museu Do Fado",
  img: "url(../image/landmarks/museu_do_fado.jpg)",
  description: "The Fado museum was inaugurated on the 25th of September 1998, it’s a museum dedicated to the universe of Fado and the Portuguese guitar. This museum’s located in the neighbourhood of aflama n Lisbon. This cultural space counts with a permanent exposition, a space dedicated to temporary expositions, a centre of documentation, a thematic shop, an auditorium, a restaurant, and  a museum school, in which lessons of Portuguese guitar, and Fado guitar are given, and where it is possible to frequent a lyricist seminary. The school also offers a studio for artists to practice. Since 2016 the museum has had an online sound achieve with several sound tracts dating from up to the 20th century.",
  quantity: 2,
  lock: 2,
  num: "Q1",
  question: "What is this museum about?",
  options: ["A: Portuguese tradicional food.", "B: Portuguese iconic people.", "C: Portuguese monarchy history.", "D: Portuguese traditional music."],
  answer: "D: Portuguese traditional music.",
  point: 6,
  like: false,
  pass: false
}, {
  num: "Q2",
  question: "Near what traditional neighbourhood is this museum located?",
  options: ["A: Chiado", "B: Alfama", "C: Mouraria", "D: Baixa"],
  answer: "B: Alfama",
  point: 4
}], [{
  landmark: 13,
  name: "Centro Cultural de Belém",
  img: "url(../image/landmarks/centroculturaldebelem-e1568428964107.jpg)",
  description: "Centro Cultural de Belém The Belém Cultural Center (Portuguese: Centro Cultural de Belém), is a complex of artistic venues located in Belém in the city of Lisbon. It is the largest building with cultural facilities in Portugal, with over 140,000 m2 of usable space. The centre was initially built to accommodate the programme of Portugal's Presidency of the European Council in 1992, but with the long-term goal of providing permanent venues for conferences, exhibitions and performance arts (such as opera, ballet and concerts), in addition to meeting halls, shops and cafés.",
  quantity: 2,
  lock: 2,
  num: "Q1",
  question: "What other name is given to this landmark?",
  options: ["A: O forte (the fort)", "B: O cube (the cube)", "C: CCB", "D: O Centro de Belem (Belem's Center)"],
  answer: "C: CCB",
  point: 3,
  like: false,
  pass: false
}, {
  num: "Q2",
  question: "What would be one's reason to go to this landmark?",
  options: ["A: exposition", "B: food", "C: shopping", "D: pleasure"],
  answer: "A: exposition",
  point: 5
}], [{
  landmark: 14,
  name: "Estatua de Fernando Pessoa",
  img: "url(../image/landmarks/lisboa-fernando-pessoa-lugares-estatua.jpg)",
  description: "Estatua de Fernando Pessoa Fernando António Nogueira Pessoa; 13 June 1888 – 30 November 1935) was a Portuguese poet, writer, literary critic, translator, publisher and philosopher, described as one of the most significant literary figures of the 20th century and one of the greatest poets in the Portuguese language. He also wrote in and translated from English and French. The statue is located in Chiado in front of the Café a Brasileira, which was known to be frequented by Ferando Pessoa.",
  quantity: 2,
  lock: 2,
  num: "Q1",
  question: "Who was Fernando Pessoa?",
  options: ["A: A writer.", "B: A politician.", "C: A poet.", "D: A war hero."],
  answer: "C: A poet.",
  point: 6,
  like: false,
  pass: false
}, {
  num: "Q2",
  question: "What material is the statue made of?",
  options: ["A: Ivory", "B: Iron", "C: Bronze", "D: Copper"],
  answer: "C: Bronze",
  point: 8
}], [{
  landmark: 15,
  name: "Pink Street",
  img: "url(../image/landmarks/photo-1559163806-3ca824710bf8-816x544.jpg)",
  description: "The Pink Street A Rua Nova do Carvalho foi eleita uma das 12 ruas favoritas do velho continente pelo New York Times. Fazem-lhe companhia artérias em Paris, Milão ou Londres.(The Rua Nova do Carvalho was elected one of the 12 favourite roads of the old continent by New York Times. In this ranking it is accompanied by the Paris avenues, the Milan on the London ones).",
  quantity: 2,
  lock: 2,
  num: "Q1",
  question: "What is the type of infrastructures are most recurrent in Rua Rosa?",
  options: ["A: Restaurants", "B: Bars", "C: Museums", "D: Small markets"],
  answer: "B: Bars",
  point: 8,
  like: false,
  pass: false
}, {
  num: "Q2",
  question: "The pink street is located in which neighbourhood?",
  options: ["A: Lapa", "B: Cais do Sodré", "C: Bairro Alto", "D: Ajuda"],
  answer: "B: Cais do Sodré",
  point: 6
}]];