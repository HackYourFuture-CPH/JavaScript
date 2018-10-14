//step 1.1

    const bookTitles = [
        "theFallenApple",
        "anAcceptableLime",
        "beholdTheAnts",
        "earAndRambling",
        "theVeryEnd",
    ];


//1.2

//1.3

    function getHtmlListOfBookTitles_v1(titles){

        const ul = document.createElement("ul");
        
        for (let i = 0; i < titles.length; i++){
            
            const li = document.createElement("li");

            li.innerHTML = titles[i];
            
            ul.appendChild(li)
        }

        return ul;
    }

    //log it
    // console.log(getHtmlListOfBookTitles_v1(bookTitles));

    //show it
    //document.body.appendChild(getHtmlListOfBookTitles_v1(bookTitles))

//1.4

    const bookInfo = [
        {
            id:  "theFallenApple",
            title:  "The Fallen Apple",
            language: "Latin",
            author: "Newton",
        },
        {
            id: "anAcceptableLime",
            title: "An Acceptable Lime",
            language: "Language2",
            author: "Author2",
        },
        {
            id:  "beholdTheAnts",
            title:  "Behold the Ants",
            language: "Language3",
            author: "Author3",
        },
        {
            id:  "earAndRambling",
            title:  "Ear and Rambling",
            language: "Language4",
            author: "Søren Kierkegård",
        },
        {
            id: "theVeryEnd",
            title: "The Very End",
            language: "Language5",
            author: "Author5",
        },
    ];

//1.5


    function getHtmlListOfBookTitles(titles, info){

        const outerDiv = document.createElement("div");
        
        for (let i = 0; i < titles.length; i++){
            
                const bookDiv = document.createElement("div");
                
                outerDiv.appendChild(bookDiv);

            //add id

                bookDiv.setAttribute("id", "listElm" + titles[i]);

            //separator

                bookDiv.appendChild(document.createElement("hr"))
				
            //add children

                const bookTitle = document.createElement("h1");
                bookDiv.appendChild(bookTitle);

                const author = document.createElement("span");
                bookDiv.appendChild(author);

                const language = document.createElement("span");
                bookDiv.appendChild(language);

            //put content into the children

                const bookInfo = info.find((elm) => titles[i] === elm.id);

                if (bookInfo.title)     bookTitle.innerHTML = bookInfo.title;
                if (bookInfo.author)    author.innerHTML = "Author: <b>" + bookInfo.author + "</b>";
                if (bookInfo.language)  language.innerHTML = "<br />Language: <B>" + bookInfo.language + "</b>";

            
        }

        return outerDiv;
    }
    
    //show it
    document.body.appendChild(getHtmlListOfBookTitles(bookTitles, bookInfo))


//1.6

    //The style.css file.

//1.7

    const bookCoverImages = {
        "theFallenApple": "https://i.etsystatic.com/10198406/r/il/8dc973/1249993508/il_570xN.1249993508_r3h5.jpg",
        "anAcceptableLime" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACXCAMAAAAvQTlLAAAAUVBMVEX///9mZmZfX19jY2NcXFz8/Pzx8fHn5+dYWFj29va0tLTf39++vr6qqqpqampubm7Ly8uXl5dzc3N5eXmMjIzU1NSdnZ2BgYGjo6NTU1PFxcXYezjjAAAE/ElEQVR4nO2c25arIAyGhaDiAQ8VD/X9H3Sr03bXSjslkuLeq//N3NjlNyGEEIJB8NVX/7CiLFe6HELfHGu1qimFANEdiSvJT5IDm8SPxFVpsUAdiyvT8krFmFC+ca6qSs7Y4bjCgQO758p9Ey1KBsFWkpVvpFmJfsBi58g306Swe8RiZ99MwexbGyyufUNNSjdYh3D7im+w4BT7pgriE2y4DhDtQ701Fzu3vrGC3IAFhW+qIC63o8hg9I0VbEPEhKUT31jZlmryrsw3ltFcovNNFUSGGAG9/6Vx3JoLhP+QGnSGUH+AFcgwjDL1DTWp3WBx/z4fGGK96LxHrlmPCc4BIsSitdsD5N6ziEVhvdqZnQ6x1QjWXLzo/IfTi25cwEFnxxjDWWEtOedCFL06QIy/U1tPUmN2iODwq8IkWpRQjmwYV3mqVKfS6p2xCuMx7XSzSNcqbylMGWWpntxnEl/+MP1yyKIsr2F5GH60/KhPHQ9zlPeFWAdOPrv4k2S0VY+PX/OeQo/uyLLhLAw7iuk1kqn2IVRFbQfS+PjPbySkboJblBaGBPmGxlZWi9MenkNdftI4WAzCCp5TXa0GQxWFQRKPvdmwG5vp3TFOwRsvYgKaWukTN/iUUbzZtwmPe/nmm6Z58M4/cHv8vCffiJt3DWAvjs/9W2ZjAltJhbSYqWjkUhxXuTBWQZxKosBMtSy3wlQSp3yKGmsOF9aLkqFQ6h7L3vWzt8LpTixE1K/pnUsq+8wi/2VNdIBVIFaipKEeRWCYBVJRmwt31mCq/LnFEqh0wnDG45gLlRgmPbG5xIDBCkbiGMF7XCJBHrtwuWpMTMVxo0g+jMjaeUg8jNj6JnXwAuROaFvvdouFPV8jXrIF9qxh2/7glgt77kebSkCB3JwllFQ7ejyIoyravYino8CewptaDVwKW8dJablK7HSk5sIW5NSX67/gGg7KdVR7EXOh4xcxF8ceKRDHL/T6SMzFayQX8foIDJl/UdcvsflqRl2bQPa8R9Qlph65HypouZA1piCgLjJhZ6Spe9GpkJ5PXopGtqsRbzwYdi2iP0YDVL2QvLrKmMRU5kJDv6dzYbId6h0km7v8EHOSeiVawDBRn/q0YxZv7Jth6M/4ZjD7uuEnjmrn5khbH4uLDwzk5GOl5aykrpTfwGRtt2sjP0+7itt1XMXUOdhNIBubrkP6lo6/ZGDRq1B9aiCZ3a26iDyn+Cuw8X3iqs6d7Arn9MnhVZYF6k95Pliuk4bLQCTilttc+o6Ti2wXyc/EfPvjIvKek0WIw9tPGAyzM/qEwVA7SXqD4RpPIvIpKXClHepKBde4mmbYE9dasWd+tKsksttqFmUtDE746xSUsWJHn/uUuJJxYZ3+IqqRhGLfDY+EaCR3jeKslgar3n1fjWI5gtLB1SaClBp7trBS7HydRB9CruW6F19gzyAf5bbiyt19Y8Gl7wO6JWCrsHYGZl2New3mqusQdx/gBdjmI1WrtwG/SPCXkwSY63vw4fD0PhHnpVZ5Nl87znJVn55fzOTo9q9XYKbXwQRRj/FdzS+J2rQRwmQ20ZB8HKY9PcSLiakZjAMT5V35eEkTgOpDTbE63z4cN3mULFX7dM6HcaXFnbeBKCq6u+Vx2jA53+CGps5/jUPhmOqGcSmlKPuR9lsGUZt3uk7b6L3XTN425nk+Zof58MNXX31lqT+ctktRTGlGGgAAAABJRU5ErkJggg==",
        "beholdTheAnts": "https://i.etsystatic.com/10198406/r/il/8dc973/1249993508/il_570xN.1249993508_r3h5.jpg",
        "earAndRambling": "https://i.etsystatic.com/10198406/r/il/8dc973/1249993508/il_570xN.1249993508_r3h5.jpg",
        "theVeryEnd": "https://i.etsystatic.com/10198406/r/il/8dc973/1249993508/il_570xN.1249993508_r3h5.jpg",
    };
	
	
    function giveBookCoverImages(images){
        Object.keys(images).forEach((key) => {
            const listElm = document.querySelector("#listElm" + key);

            const img = document.createElement("img");
            listElm.appendChild(document.createElement("br"));
            listElm.appendChild(img);

            img.src = images[key];

        })
    }

    //call it

    giveBookCoverImages(bookCoverImages);


