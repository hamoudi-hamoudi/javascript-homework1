let books = [ {id : "Death_Note" ,
               title : "Death Note" ,
               language : "japanese" ,
               author :  "Tsugumi Ohba" ,
               rating : "4.42" ,
               img : "img/Death_Note.jpg",
               },
              {id : "Vampire_Knight" ,
               title : "Vampire Knight" ,
               language : "japanese" ,
               author : "Matsuri Hino" ,
               rating : "4.1" ,
               img : "img/Vampire_Knight.jpg",
               },
              {id : "one_piece" ,
               title : "one piece" ,
               language : "japanese" ,
               author : "Andy Nakatani" ,
               rating : "4.42" ,
               img : "img/one_piece.jpg",
               },
              {id : "skip_beats" ,
               title : "skip beats",
               language : "japanese" ,
               author : "Tomo Kimura" ,
               rating : "4.26" ,
               img : "img/skip_beats.jpg",
               },
              {id : "case_closed" ,
               title : "case closed",
               language : "japanese" ,
               author : "Gosho Aoyama" ,
               rating : "4.36" ,
               img : "img/case_closed.jpg",
              },
              {id : "InuYasha" ,
              title : "InuYasha" ,
              language : "japanese" ,
              author : "Rumiko Takahashi" ,
              rating : "4.26" ,
              img : "img/InuYasha_Turning_Back_Time.jpg",
              },
              {id : "naruto" ,
              title : "naruto" ,
              language : "japanese" ,
              author :" Katy Bridges" ,
              rating : "4.35" ,
              img : "img/naruto.jpg",
              },
              {id : "Pandora_Hearts" ,
              title : "Pandora Hearts",
              language : "japanese" ,
              author : "un Mochizuk" ,
              rating : "4.2" ,
              img : "img/Pandora_Hearts.jpg",
               },
              {id : "Bleach" ,
              title : "Bleach" ,
              language : "japanese" ,
              author : "ite Kubo" ,
              rating : "4.21" ,
              img : "img/Bleach.jpg",
              },
              {id : "Kamisama_Kiss" ,
              title : "Kamisama Kiss",
              language : "japanese" ,
              author : "Tomo Kimura" ,
              rating : "4.38" ,
              img : "img/Kamisama_Kiss.jpg",
              },
];
function creatul() {

for (let i = 0 ; i < books.length ; i++) {
       let ul = document.createElement("ul");
       document.body.appendChild(ul);
       ul.innerHTML = books[i].title;
       ul.id = books[i].id
       let li = document.createElement("li");
       ul.appendChild(li);
       li.innerHTML = books[i].language;

       var newli = document.createElement("li");
       document.getElementById(books[i].id).appendChild(newli);
       newli.innerHTML = books[i].author;

       var newli2 = document.createElement("li");
       document.getElementById(books[i].id).appendChild(newli2);
       newli2.innerHTML = books[i].rating;

       var images = document.createElement("img");
       document.getElementById(books[i].id).appendChild(images);
       images.src = books[i].img ;
       images.innerHTML = books[i].img ;
}


}
creatul();


