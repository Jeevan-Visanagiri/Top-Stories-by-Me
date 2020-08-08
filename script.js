var sections=[
    'arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine',
     'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate',
    'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world'];

    console.log(sections);

    var div=document.createElement('div');  ///creating container
    div.className='buttonelement';
    document.body.appendChild(div);
    
    var div1=document.createElement('div');
    div1.className="container";
    document.body.appendChild(div1);

    var btngroup=document.createElement("div");  //Creating div forbutton
    btngroup.className="btn-group";
    div.appendChild(btngroup);
    var btndropdown=document.createElement('button');//creating the drop down button
    btndropdown.className="btn btn-secondary dropdown-toggle";
    btndropdown.setAttribute('data-toggle',"dropdown");
    btndropdown.setAttribute('aria-haspopup',"true");
    btndropdown.setAttribute('aria-expanded',"false");
    let btndropdowntxt=document.createTextNode("Choose the section to Read");
    btndropdown.appendChild(btndropdowntxt);
    btngroup.appendChild(btndropdown);

    var dropdownmenu=document.createElement("div");  //drop down menu div
    dropdownmenu.className="dropdown-menu dropdown-menu-right";
    btndropdown.appendChild(dropdownmenu);

    var button=[],buttontext=[];  //initilizing buttons
    for (let i = 0; i < sections.length; i++) {  ///creating buttons
    button[i]=document.createElement("button");
    buttontext[i]=document.createTextNode(sections[i]);
    button[i].className="dropdown-item"
    button[i].appendChild(buttontext[i]);
    dropdownmenu.appendChild(button[i]);
}

for (let i = 0; i < sections.length; i++) {  //adding event listener to buttons
    button[i].addEventListener('click',()=>
    { 
        div1.innerHTML="";
        getStories(sections[i]);        //calling get stories to fetch stories
    });
    
}
async function getStories(section) {   //fetching stories from API
    var key ='j67b2fsebYks70wr46CwRNGMzglAKtng';
    var request =await fetch('https://api.nytimes.com/svc/topstories/v2/'+section+'.json?api-key='+key);
    var response= await request.json();
    console.log(response);
    showStories(response);
}

function showStories(response) {  //Showing tohe response in the UI

    var card=[],cardhead=[],cardcolumn=[],cardbody=[],section=[],itemtype=[],cardtitle=[],createddate=[];
    var cardtext=[],byline=[] , readMore=[],textlink=[],img=[],imagediv=[];
    for (let i = 0; i < response.results.length; i++) {
    
    console.log(response.results.length);
    card[i] = document.createElement('div');
    card[i].className='card mb-3';
    card[i].id="cards";
    card[i].setAttribute("style","max-width:900px")
    div1.appendChild(card[i]);

    cardhead[i]=document.createElement("div");
    cardhead[i].className="row no-gutters";
    card[i].appendChild(cardhead[i]);

    cardcolumn[i]=document.createElement("div");
    cardcolumn[i].className="col-md-8";
    cardhead[i].appendChild(cardcolumn[i]);

    cardbody[i]=document.createElement("div");
    cardbody[i].className="card-body";
    cardcolumn[i].appendChild(cardbody[i]);
    
    section[i]=document.createElement("span");
    section[i].className="section";
    section[i].innerHTML=response.section;
    cardbody[i].appendChild(section[i]);

    itemtype[i]=document.createElement("span");
    itemtype[i].className="itemtype";
    itemtype[i].innerHTML=response.results[i].item_type;
    cardbody[i].appendChild(itemtype[i]);

    cardtitle[i]=document.createElement("h5");
    cardtitle[i].className="card-title";
    cardtitle[i].innerHTML=response.results[i].title;
    cardbody[i].appendChild(cardtitle[i]);

    createddate[i]=document.createElement("small");
    createddate[i].className="createdDate";
    createddate[i].innerHTML=response.results[i].updated_date;
    cardbody[i].appendChild(createddate[i]);
    
    cardtext[i]=document.createElement("p");
    cardtext[i].className="card-text";
    cardtext[i].innerHTML=response.results[i].abstract;
    cardbody[i].appendChild(cardtext[i]);

    byline[i]=document.createElement("small");
    byline[i].className="Createdby";
    byline[i].innerHTML=response.results[i].byline;
    cardbody[i].appendChild(byline[i]);

    readMore[i]=document.createElement("a")
    readMore[i].className="readmorelink";
    textlink[i]=document.createTextNode("Read more...");
    readMore[i].appendChild(textlink[i]);
    readMore[i].href=response.results[i].short_url;
    cardbody[i].appendChild(readMore[i]);

    imagediv[i]=document.createElement("div");
    imagediv[i].className="col-md-4";
    cardhead[i].appendChild(imagediv[i]);

    img[i]=document.createElement('img');
    img[i].className="card-img";
    imagediv[i].appendChild(img[i]);
    img[i].setAttribute("src",response.results[i].multimedia[4].url)

    }
}

/*
<div class ="container">
<div class="card mb-3" style="max-width: 600px;">
<div class="row no-gutters">
  
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting loosjdvbkssc NDkshbvshdavbshdvb shbhjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasnc                      snsadasldntext below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="col-md-4">
    <img src="https://static01.nyt.com/images/2020/08/07/world/07india-plane-sub/merlin_175429530_ebd030f5-cdce-404d-955a-73a0866d6803-articleInline.jpg" class="card-img" alt="..." style="width: 100%;height:100%;">
  </div>
</div>
</div>
</div>`*/