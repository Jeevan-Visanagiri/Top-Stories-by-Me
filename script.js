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
    dropdownmenu.id="dropdownmenu"
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
async function getStories(section) { 
    try {
              //fetching stories from API
    var key ='j67b2fsebYks70wr46CwRNGMzglAKtng';
    var request =await fetch('https://api.nytimes.com/svc/topstories/v2/'+section+'.json?api-key='+key);
    var response= await request.json();
    console.log(response);
    showStories(response);      
    } catch (error) {
        console.log(error);
        //alert(error)
    }
  
}

function showStories(response) {  //Showing tohe response in the UI

    var card=[],cardhead=[],cardcolumn=[],cardbody=[],section=[],itemtype=[],cardtitle=[],createddate=[];
    var cardtext=[],byline=[] , readMore=[],textlink=[],img=[],imagediv=[];
    var collapsediv,collapseheader=[],collapsebutton=[],collapsebody=[],collapsebuttontxt=[],collapsecardbody=[];
    collapsediv=document.createElement('div');
    collapsediv.className='accordion';
    collapsediv.id='accordionExample';
    div1.appendChild(collapsediv);
    var collapsecard=[],headerdeading=[];
    for (var i = 0; i < response.results.length; i++) {

    console.log(response.results.length);
    
    collapsecard[i]=document.createElement("div");
    collapsecard[i].className='card';
    collapsediv.appendChild(collapsecard[i]);
    
    


    collapseheader[i]=document.createElement('div');
    collapseheader[i].className='card-header';
    collapseheader[i].id='headingOne';
    collapsecard[i].appendChild(collapseheader[i]);

    headerdeading[i]=document.createElement('h5');
    headerdeading[i].className="mb-0";
    collapseheader[i].appendChild(headerdeading[i]);

    collapsebutton[i]=document.createElement('button');
    collapsebutton[i].className="btn btn-link btn-block text-left";
    collapsebuttontxt[i]=document.createTextNode(response.results[i].title);
    collapsebutton[i].appendChild(collapsebuttontxt[i]);
    collapsebutton[i].setAttribute('type','button');
    collapsebutton[i].setAttribute('data-toggle',"collapse");
    collapsebutton[i].setAttribute('data-target',"#collapseOne");
    collapsebutton[i].setAttribute('aria-expanded',"true");
    collapsebutton[i].setAttribute('aria-controls',"collapseOne");
    headerdeading[i].appendChild(collapsebutton[i]);

    collapsebody[i]=document.createElement('div');
    collapsebody[i].className="collapse show";
    collapsebody[i].id="collapseOne";
    collapsebody[i].setAttribute('data-parent',"#accordionExample");
    collapsebody[i].setAttribute('aria-labelledby',"headingOne");
    collapsecard[i].appendChild(collapsebody[i]);

    collapsecardbody[i]=document.createElement('div');
    collapsecardbody[i].className='card-body';
    collapsebody[i].appendChild(collapsecardbody[i]);

    card[i] = document.createElement('div');
    card[i].className='card mb-3';
    card[i].id="cards";
    card[i].setAttribute("style","max-width:900px");
    collapsecardbody[i].appendChild(card[i]);

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

    readMore[i]=document.createElement("a");
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
    if(response.results[i].multimedia!==null)
    img[i].setAttribute("src",response.results[i].multimedia[response.results[i].multimedia.length-1].url);

    }
}
/*
<div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>*/