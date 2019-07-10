const authors = [
  {
    firstName: 'Emily',
    lastName: 'Winfield Martin',
    aboutAuthor: `Emily Winfield Martin makes paintings, books and other things. When she was small, she spent every moment drawing, reading, dressing rabbits in fancy clothes, and having many peculiar daydreams. When she grew up, she began to illustrate those daydreams and she created a cottage industry called The Black Apple, which sells all manner of her art and etceteras.

    She works in a tiny nook of a studio filled with old children's books, wind-up toys, and stacks of fabric. She lives in Portland, Or.

    You can visit her at www.emilywinfieldmartin.com`
  },
  {
    firstName: 'Craig',
    lastName: 'Smith',
    aboutAuthor: `Craig Smith is the recipient of the 2008 APRA Children's Song of the Year for The Wonky Donkey. When not writing, Craig works as a musician and entertainer. Visit him at craigsmith.co.nz.`
  },
  {
    firstName: 'Robert',
    lastName: 'Munsch',
    aboutAuthor: `Robert Munsch is the author of more than 25 books for children including The Paper Bag Princes and Stephanie's Ponytail. He was born in Pittsburgh, Pennsylvania and studied to be a Jesuit priest before deciding to work with children instead. He taught in a variety of nursery schools and daycare centers while he earned an MA in Early Childhood Education. In 1975, Munsch and his wife, Ann, moved to Guelph, Ontario. The Munschs have three children: Julie, Andrew, and Tyya (see them all in Something Good!).`
  },
  {
    firstName: 'Ann',
    lastName: 'Whitford Paul',
    aboutAuthor: `ANN WHITFORD PAUL graduated from the University of Wisconsin and Columbia University School of Social Work. She became inspired to write picture books after years of bedtime reading to her four children. Now she gets story ideas from her six grandchildren. She's published over 20 award-winning picture books, (rhymed and prose-fiction and nonfiction) poetry, early readers and a book for adults about how to write picture books. When she isn't writing, she loves listening to her cat purr, watching spiders spin their webs and following snails' trails.

    You can learn more about her, download writing tips and classroom activities, and contact her through her web-site: www.annwhitfordpaul.com`
  },
  {
    firstName: 'Deborah',
    lastName: 'Diesen',
    aboutAuthor: `I'm the author of the Pout-Pout Fish book series, illustrated by Dan Hanna.

    Some Pout-Pout Fish stories are full-length picture books (32 pages). Some are very short MINI-adventure books (12 pages - just a few words per page). And there are additional Pout-Pout items such as a sticker book and stuffed animals.

    I'm also the author of "Catch a Kiss" (illustrated by Kris Aro McLeod), "Picture Day Perfection" (illustrated by Dan Santat), and "The Barefooted, Bad-Tempered Baby Brigade" (illustrated by Tracy Dockray).

    For more information about my books, stop by my web site at www.deborahdiesen.com`
  },
  {
    firstName: 'Munro',
    lastName: 'Leaf',
    aboutAuthor: `Munro Leaf is best known for the Story of Ferdinand, first published in 1936 and a bestseller ever since. He died in 1976 at the age of 71.`
  },
  {
    firstName: 'Michael',
    lastName: 'Kracht',
    aboutAuthor: ''
  },
  {
    firstName: 'E.B.',
    lastName: 'White',
    aboutAuthor: `E.B. White, the author of twenty books of prose and poetry, was awarded the 1970 Laura Ingalls Wilder Medal for his children's books, Stuart Little and Charlotte's Web. This award is now given every three years "to an author or illustrator whose books, published in the United States, have, over a period of years, make a substantial and lasting contribution to literature for children." The year 1970 also marked the publication of Mr. White's third book for children, The Trumpet of the Swan, honored by The International Board on Books for Young People as an outstanding example of literature with international importance. In 1973, it received the Sequoyah Award (Oklahoma) and the William Allen White Award (Kansas), voted by the school children of those states as their "favorite book" of the year.

    Born in Mount Vernon, New York, Mr. White attended public schools there. He was graduated from Cornell University in 1921, worked in New York for a year, then traveled about. After five or six years of trying many sorts of jobs, he joined the staff of The New Yorker magazine, then in its infancy. The connection proved a happy one and resulted in a steady output of satirical sketches, poems, essays, and editorials. His essays have also appeared in Harper's Magazine, and his books include One Man's Meat, The Second Tree from the Corner, Letters of E.B. White, The Essays of E.B. White and Poems and Sketches of E.B. White. In 1938 Mr. White moved to the country. On his farm in Maine he kept animals, and some of these creatures got into his stories and books. Mr. White said he found writing difficult and bad for one's disposition, but he kept at it. He began Stuart Little in the hope of amusing a six-year-old niece of his, but before he finished it, she had grown up.

    For his total contribution to American letters, Mr. White was awarded the 1971 National Medal for Literature. In 1963, President John F. Kennedy named Mr. White as one of thirty-one Americans to receive the Presidential Medal for Freedom. Mr. White also received the National Institute of Arts and Letters' Gold Medal for Essays and Criticism, and in 1973 the members of the Institute elected him to the American Academy of Arts and Letters, a society of fifty members. He also received honorary degrees from seven colleges and universities. Mr. White died on October 1, 1985.
    Photo by White Literary LLC [CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons.`
  },
  {
    firstName: 'Sam',
    lastName: 'McBratney',
    aboutAuthor: `Sam McBratney is the author of the acclaimed picture book Guess How Much I Love You. Sam's distinctive storytelling voice builds on his rich storytelling tradition as a teacher, parent, and grandparent. He lives in Belfast, Northern Ireland.`
  },
  {
    firstName: 'P.D.',
    lastName: 'Eastman',
    aboutAuthor: `Philip Dey "Phil" Eastman (November 25, 1909 - January 7, 1986) was an American screenwriter, children's author, and illustrator. As an author, he is known primarily as P. D. Eastman.`
  },
  {
    firstName: 'Shel',
    lastName: 'Silverstein',
    aboutAuthor: `"And now, children, your Uncle Shelby is going to tell you a story about a very strange lion- in fact, the strangest lion I have ever met." So begins Shel Silverstein's very first children's book, Lafcadio, the Lion Who Shot Back. It's funny and sad and has made readers laugh and think since it was published in 1963. It was followed the next year by three more books. The first of them, The Giving Tree, is a moving story about the love of a tree for a boy. Shel returned to humor the same year with A Giraffe and a Half, delighting readers with a most riotous ending. The third book in 1964 was Uncle Shelby's Zoo Don't Bump the Glump! and Other Fantasies, Shel's first poetry collection, and his first and only book illustrated in full color. It combined his unique imagination and bold brand of humor in this collection of silly and scary creatures. Shel's second collection of poems and drawings, Where the Sidewalk Ends, was published in 1974. His recording of the poems won him a Grammy for best Children's Album. In this collection, Shel invited children to dream and dare to imagine the impossible, from a hippopotamus sandwich to the longest nose in the world. With his next collection of poems and drawings, A Light in the Attic, published in 1981, Shel asked his readers to turn the light on in their attics, to put something silly in the world, and not to be discouraged by the Whatifs. Instead he urged readers to catch the moon or invite a dinosaur to dinner- to have fun! A Light in the Attic was the first children's book to break onto the New York Times Bestseller List, where it stayed for a record-breaking 182 weeks. The last book that was published before his death in 1999 was Falling Up (1996). Like his other books, it is filled with unforgettable characters. Shel Silverstein's legacy continued with the release of a new work,Runny Babbit, the first posthumous publication conceived and completed before his death and released in March 2005. Witty and wondrous, Runny Babbit is a poetry collection of simple spoonerismsH, which twist the tongue and tease the mind. Don't Bump the Glump! And Other Fantasies was recently reissued in 2008 after being unavailable for over 30 years. Shel was always a believer in letting his work do the talking for him--few authors have ever done it better.`
  },
  {
    firstName: 'Laura',
    lastName: 'Numeroff',
    aboutAuthor: `Biography
    Laura Numeroff is the New York Times bestselling author of IF YOU GIVE A MOUSE A COOKIE, RAISING A HERO and WHAT MOMMIES DO BEST/WHAT DADDIES DO BEST. Laura was born in Brooklyn, New York, and grew up as the youngest of three girls, surrounded by art, music, and books. Laura attended Pratt Institute and graduated with a degree in communications and a contract for her first children’s book, AMY FOR SHORT, published in 1975 by Macmillan.

    A New York Times best-selling children’s book author, Laura is best known for the series based on her book IF YOU GIVE A MOUSE A COOKIE. First printed in 1985, “Mouse” is now beyond its 60th printing. The fourth book in the series, IF YOU TAKE A MOUSE TO THE MOVIES was on the New York Times Children’s Best Seller list for five months- nine weeks at number one.

    In 2000, IF YOU GIVE A PIG A PANCAKE was featured on the Oprah show and was recommended by Oprah’s first kids’ book club, as well as being noted as Oprah’s favorite children’s book of the year on her Christmas show. “Pig” was also on Publishers Weekly Bestseller List for over a year. In addition, the series has sold over 4.5 million copies, been printed in fourteen languages, and won the prestigious Quill Award in the picture book category.`
  },
  {
    firstName: 'Giles',
    lastName: 'Andreae',
    aboutAuthor: `Giles Andreae is the award-winning and bestselling author of Rumble in the Jungle, The Lion Who Wanted to Love and keep Love in Your Heart, Little One. Giles is also the creator and voice behind Purple Ronnie. He lives in London.`
  },
  {
    firstName: 'Eric',
    lastName: 'Carle',
    aboutAuthor: `Eric Carle is acclaimed and beloved as the creator of brilliantly illustrated and innovatively designed picture books for very young children. His best-known work, The Very Hungry Caterpillar, has eaten its way into the hearts of literally millions of children all over the world and has been translated into more than 62 languages and sold over 41 million copies. Since the Caterpillar was published in 1969, Eric Carle has illustrated more than 70 books, many best sellers, most of which he also wrote.

    Carle says: "With many of my books I attempt to bridge the gap between the home and school. To me home represents, or should represent; warmth, security, toys, holding hands, being held. School is a strange and new place for a child. Will it be a happy place? There are new people, a teacher, classmates - will they be friendly? I believe the passage from home to school is the second biggest trauma of childhood; the first is, of course, being born. Indeed, in both cases we leave a place of warmth and protection for one that is unknown. The unknown often brings fear with it. In my books I try to counteract this fear, to replace it with a positive message. I believe that children are naturally creative and eager to learn. I want to show them that learning is really both fascinating and fun."

    Eric Carle has two grown-up children, a son and a daughter. With his wife Barbara, he divides his time between the Florida Keys and the hills of North Carolina.

    For more information about Eric Carle and his books please visit:

    The Official Eric Carle web site: http://www.eric-carle.com
    Eric Carle's Blog: http://www.ericcarleblog.blogspot.com
    The Eric Carle Museum of Picture Book Art: http://www.carlemuseum.org
    The World of Eric Carle: http://www.amazon.com/The-World-of-Eric-Carle`
  },
  {
    firstName: 'Adam',
    lastName: 'Rubin',
    aboutAuthor: `Adam Rubin is the #1 New York Times best-selling author of ten critically-acclaimed picture books including the Those Darn Squirrels trilogy, Dragons Love Tacos, Dragons Love Tacos 2: The Sequel, Robo-Sauce and El Chupacabras (recently short-listed for the 2018 Texas Blue Bonnet award). Rubin spent ten years working as a creative director in the advertising industry before leaving his day job to write full-time. In between writing projects, he designs and collects optical illusions, puzzles and games. His favorite color is blue, his favorite food is fried chicken, and his favorite animal is the otter. Adam currently lives in Barcelona, Spain.`
  },
  {
    firstName: 'Margaret',
    lastName: 'Wise Brown',
    aboutAuthor: `Margaret Wise Brown wrote hundreds of books and stories during her life, but she is best known for Goodnight Moon and Runaway Bunny. Even though she died over 45 years ago, her books still sell very well. Margaret loved animals. Most of her books have animals as characters in the story. She liked to write books that had a rhythm to them. Sometimes she would put a hard word into the story or poem. She thought this made children think harder when they are reading. She wrote all the time. There are many scraps of paper where she quickly wrote down a story idea or a poem. She said she dreamed stories and then had to write them down in the morning before she forgot them. She tried to write the way children wanted to hear a story, which often isn't the same way an adult would tell a story. She also taught illustrators to draw the way a child saw things. One time she gave two puppies to someone who was going to draw a book with that kind of dog. The illustrator painted many pictures one day and then fell asleep. When he woke up, the papers he painted on were bare. The puppies had licked all the paint off the paper. Margaret died after surgery for a bursting appendix while in France. She had many friends who still miss her. They say she was a creative genius who made a room come to life with her excitement. Margaret saw herself as something else - a writer of songs and nonsense.`
  },
  {
    firstName: 'Maurice',
    lastName: 'Sendak',
    aboutAuthor: `For more than forty years, the books Maurice Sendak has written and illustrated have nurtured children and adults alike and have challenged established ideas about what children's literature is and should be. The New York Times has recognized that Sendak's work "has brought a new dimension to the American children's book and has helped to change how people visualize childhood." Parenting recently described Sendak as "indisputably, the most revolutionary force in children's books."
    Winner of the 1964 Caldecott Medal for Where the Wild Things Are, in 1970 Sendak became the first American illustrator to receive the international Hans Christian Andersen Award, given in recognition of his entire body of work. In 1983, he received the Laura Ingalls Wilder Award from the American Library Association, also given for his entire body of work.
    Beginning in 1952, with A Hole Is to Dig by Ruth Krauss, Sendak's illustrations have enhanced many texts by other writers, including the Little Bear books by Else Holmelund Minarik, children's books by Isaac Bashevis Singer and Randall Jarrell, and The Juniper Tree and Other Tales from Grimm. Dear Mili, Sendak's interpretation of a newly discovered tale by Wilhelm Grimm, was published to extraordinary acclaim in 1988.
    In addition to Where the Wild Things Are (1963), Sendak has both written and illustrated
    The Nutshell Library (1962), Higglety Pigglety Pop! (1967), In the Night Kitchen (1970), Outside Over There (1981), and, We Are All in the Dumps with Jack and Guy (1993). He also illustrated Swine Lake (1999), authored by James Marshall, Brundibar (2003), by Tony Kushner, Bears (2005), by Ruth Krauss and, Mommy? (2006), his first pop-up book, with paper engineering by Matthew Reinhart and story by Arthur Yorinks.
    Since 1980, Sendak has designed the sets and costumes for highly regarded productions of Mozart's The Magic Flute and Idomeneo, Janacek's The Cunning Little Vixen, Prokofiev's
    The Love for Three Oranges, Tchaikovsky's The Nutcracker, and Hans Krása's Brundibár.
    In 1997, Sendak received the National Medal of Arts from President Clinton. In 2003 he received the first Astrid Lindgren Memorial Award, an international prize for children's literature established by the Swedish government. Maurice Sendak was born in Brooklyn in 1928. He now lives in Connecticut.`
  },
  {
    firstName: 'Drew',
    lastName: 'Daywalt',
    aboutAuthor: `Although Drew Daywalt grew up in a haunted house, he now lives in a Southern California home, haunted by only his wife, two kids, and German Shepherd. A Hollywood screenwriter by trade, The Day the Crayons Quit was his first book for children. His favorite crayon is Black.`
  },
  {
    firstName: 'Marcus',
    lastName: 'Pfister',
    aboutAuthor: `Marcus Pfister has written and illustrated many books for North-South, including the popular Penguin Pete and Hopper series. His books The Rainbow Fish, Rainbow Fish to the Rescue!, and Rainbow Fish and the Big Blue Whale have become international best-sellers.`
  },
  {
    firstName: 'Jean',
    lastName: 'Reagan',
    aboutAuthor: `JEAN REAGAN was born in Alabama but spent most of her childhood in Japan. She now lives in Salt Lake City with her husband. In the summers, they serve as backcountry volunteers in Grand Teton National Park in Wyoming.`
  },
  {
    firstName: `Brandon`,
    lastName: `Walden`,
    aboutAuthor: `Brandon Walden is a husband and a father of 5 beautiful daughters. He and his family live in Northern California. Brandon often says that "Seeds and Trees" is his story, cleverly disguised as a children's book. Brandon and his wife founded The Treasured Tree, LLC (www.thetreasuredtree.com) to be a platform that would host and create content for the child like part in all of us. They encourage families through video, music, books and speaking engagements.

    Fun facts:
    When Brandon is not speaking or writing other books you will likely find him traveling the country with his family. The Walden's have taken many road trips. One of the roads trips took them over 16,000 miles, and through 36 states over the course of nearly a year.

    Brandon originally planned to attend art school to become an art therapist. However, he ended up traveling throughout Central America after his senior year in high school to do missions and humanitarian work.

    Brandon and his wife, Stephanie, have known each other for over 25yrs. They were great friends in high school but did not date until their twenties.

    Brandon is originally from South Carolina and hates extreme heat. So, he moved to Kansas City in 2011 to escape the hot summers and intense humitidity. However, the day he unpacked the moving truck in Kansas City... it was 106 degrees. After 7 years in Kansas City and enough of the heat...he moved to Redding, California. His first summer there the hottest day was 117. (Someone, please tell Brandon where he can find 78 degrees all year round).

    Brandon has drafts and synopsis written for 3 other children's book and is presently writing a book for men about becoming more child-like.`
  },
  {
    firstName: `Jimmie`,
    lastName: `Davis`,
    aboutAuthor: `Jimmie Davis was a well-known recording artist and one of the biggest country music stars of his era. On February 4, 1940 he recorded You Are My Sunshine which immediately became an international hit.`
  },
  {
    firstName: `Annie`,
    lastName: `Kubler`,
    aboutAuthor: ``
  },
  {
    firstName: `Dr.`,
    lastName: `Seuss`,
    aboutAuthor: `"A person's a person, no matter how small," Theodor Seuss Geisel, a.k.a. Dr. Seuss, would say. "Children want the same things we want. To laugh, to be challenged, to be entertained and delighted."

    Brilliant, playful, and always respectful of children, Dr. Seuss charmed his way into the consciousness of four generations of youngsters and parents. In the process, he helped millions of kids learn to read.

    Dr. Seuss was born Theodor Geisel in Springfield, Massachusetts, on March 2, 1904. After graduating from Dartmouth College in 1925, he went to Oxford University, intending to acquire a doctorate in literature. At Oxford, Geisel met Helen Palmer, whom he wed in 1927. Upon his return to America later that year, Geisel published cartoons and humorous articles for Judge, the leading humor magazine in America at that time. His cartoons also appeared in major magazines such as Life, Vanity Fair, and Liberty. Geisel gained national exposure when he won an advertising contract for an insecticide called Flit. He coined the phrase, "Quick, Henry, the Flit!" which became a popular expression.

    Geisel published his first children's book, And to Think That I Saw It on Mulberry Street, in 1937, after 27 publishers rejected it.

    Winner of the Pulitzer Prize in 1984, an Academy Award, three Emmy Awards, three Grammy Awards, and three Caldecott Honors, Geisel wrote and illustrated 44 books. While Theodor Geisel died on September 24, 1991, Dr. Seuss lives on, inspiring generations of children of all ages to explore the joys of reading.`
  },
  {
    firstName: `D.J.`,
    lastName: `Steinberg`,
    aboutAuthor: `David "D.J." Steinberg was inspired to write children's books after he began tripping over them in a house with three loud boys and about 3,000 books. Now he has published 14 of his own, which have together sold over 500,000 copies, have been included in national book fairs and advanced reader lists, and garnered starred reviews and awards. They have ranged from funny poems to picture books to his latest popular graphic novel series, The Adventures of Daniel Boom AKA Loud Boy.

    Not that entertaining children was a new thing for David, who has spent 30 years as an executive, producer and artist on more than fifteen major feature animated movies, including Meet the Robinsons, Mulan, Hercules, Tarzan, Cats Don't Dance, An American Tail, The Land Before Time, and Secret of NIMH. Serving these days as the Head of Studio for Starz Animation Toronto, David is overseeing production of feature films like Tim Burton's 9 (recent Focus Features release) and Elton John's Gnomeo & Juliet (Disney/Rocket Pictures).

    Raised in Chicago, David attended Northwestern University before heading west. After hanging out for 25 years in Los Angeles, he is now residing in Toronto, in a country called Canada, with his wife, Nily, and his three favorite critics, Daniel, Micah, and Noah.

    Books to date (more info at www.djsteinberg.com):

    HUMOROUS POETRY
    Grasshopper Pie and Other Poems, 2004
    The Monster Mall and Other Spooky Poems, 2004
    Club Pet and Other Funny Poems, 2005
    Caveman Manners and Other Polite Poems, 2006

    PICTURE BOOKS
    Theo's Thanksgiving, 2006
    The Turkey Ball, 2005
    The Witches' Ball, 2007
    The Snow Ball, 2007
    The Bunny Ball, 2008
    The Beach Ball, 2008

    GRAPHIC NOVELS
    The Adventures of Daniel Boom AKA Loud Boy #1: Sound Off!, 2008
    The Adventures of Daniel Boom AKA Loud Boy #2: Mac Attack!, 2008
    The Adventures of Daniel Boom AKA Loud Boy #3: Game On!, 2009
    The Adventures of Daniel Boom AKA Loud Boy #4: Grow Up!, 2010`
  },
  {
    firstName: `Natasha`,
    lastName: `Wing`,
    aboutAuthor: `Natasha Wing was born in Connecticut and now lives in Fort Collins, Colorado. After graduating from Arizona State University, she worked in advertising for a number of years. It wasn't until 1991 that she decided to write children's books. Luckily she sold her first book within six months and has been writing children's books and articles ever since. Some of her books have even ended up on bestseller lists, including the wildly popular The Night Before series.

    "I'm curious about many things- people, holidays, underdogs, little known historic figures - and translate my excitement for a topic into books for kids to enjoy. Story ideas are popping into my head all the time, so you never know what my next book will be. But that's what's so fun about writing."

    To find out more about Natasha Wing go to www.natashawing.com.

    Favorite Children's Books: The Polar Express (I have a signed copy!), Charlie and the Chocolate Factory, The Cat in the Hat, The Golden Compass, Harry Potter; Favorite Season: Fall; Favorite Tree: Maple; Favorite Colors: Cranberry red and fuscia pink; Pet: Purrsia the lynx point kitty Professional: Member of Society of Children's Book Writers & Illustrators, Children's Book Insider, CCIRA.`
  },
  {
    firstName: `Amy`,
    lastName: `Krouse Rosenthal`,
    aboutAuthor: `Amy Krouse Rosenthal is a person who likes to make things.
    Some things she likes to make:

    Children's books.
    Grown-up books.
    Short videos.
    Speeches.
    Salads.
    Connections with the universe.
    Something out of nothing.
    Wishes.

    According to The New York Times, Amy's award-winning children's books "radiate fun the way tulips radiate spring: they are elegant and spirit-lifting."

    Her 30+ books for children include UNI THE UNICORN, I WISH YOU MORE, EXCLAMATION MARK, LITTLE PEA, SPOON, CHOPSTICKS, DUCK!RABBIT! and PLANT A KISS.

    Amy's alphabetized memoir ENCYCLOPEDIA OF AN ORDINARY LIFE was named one of Amazon's top 10 memoirs of the decade. She is also the creator of a specialty line of keepsake journals.

    Amy is a contributor to public radio, YouTube (THE BECKONING OF LOVELY, THE MONEY TREE) and TED (7 NOTES ON LIFE).

    Amy resides on a tree-lined street in Chicago and online at whoisamy.com`
  }
]

module.exports = {
  authors
}
