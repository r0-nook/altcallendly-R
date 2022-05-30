'use strict';

// const r_TakeBack0=()=> {
//   let r_contentSave0 = {
//     r_box1Col1Img: document.getElementById('r_box1Col1Img').,
//     r_box1Col1H3: document.getElementById('r_box1Col1H3').innerHTML,
//     r_box1Col1Time: document.getElementById('r_box1Col1Time').innerHTML,
//     r_box1Col1Location: document.getElementById('r_box1Col1Location').innerHTML,
//     r_box1Col1About: document.getElementById('r_box1Col1About').innerHTML
//   };
//   document.getElementById('r_box2Img').innerHTML = r_contentSave0.r_box1Col1Img;
//   document.getElementById('r_box2H1').innerHTML = r_contentSave0.r_box1Col1H3;
//   document.getElementById('r_box2Time').innerHTML = r_contentSave0.r_box1Col1Time;
//   document.getElementById('r_box2Location').innerHTML = r_contentSave0.r_box1Col1Location;
//   document.getElementById('r_box2About').innerHTML = r_contentSave0.r_box1Col1About;
//   document.getElementById('r_block2Right')
//     .innerHTML = '<button id="r_block2RightCreate" onClick="r_CreateEvent()">Create</button>';
// }


let r_bookSave = {};

const r_Book=()=>{
  // take
  r_bookSave = {
    H: document.getElementById('r_box1ColH3').innerHTML,
    Time: document.getElementById('r_box1ColTime').innerHTML,
    Location: document.getElementById('r_box1ColLocation').innerHTML,
    About: document.getElementById('r_box1ColAbout').innerHTML
  }
  // add
  document.getElementById('r_bookSaveH').innerHTML = r_bookSave.H;
  document.getElementById('r_bookSaveTime').innerHTML = r_bookSave.Time;
  document.getElementById('r_bookSaveLocation').innerHTML = r_bookSave.Location;
  document.getElementById('r_bookSaveAbout').innerHTML = r_bookSave.About;
}


// let r_CounterForDel = 4;
// const r_Delete=()=>{
//   document.getElementById('r_Del'+r_CounterForDel).remove();
// }

const r_Delete1=()=>document.getElementById('r_Del1').remove();
const r_Delete2=()=>document.getElementById('r_Del2').remove();
const r_Delete3=()=>document.getElementById('r_Del3').remove();
const r_Delete4=()=>document.getElementById('r_Del4').remove();
const r_DeletePreview=()=>document.getElementById('r_DelPreview').remove();
const r_DeleteForm=()=>document.getElementById('r_DelForm').remove();

const r_CreateNewEvent=()=>{
  // add
  document.getElementById('r_block2').innerHTML +=
  `
  <div class="col-lg-4" id="r_DelForm">
  <div class="r_box2Col r_box2ColCreate">

  <button type="button" class="r_box1BtnDel btn btn-default btn-danger" id="r_box1Col1DeleteBtn" onClick="r_DeleteForm()">X</button>

    <div class="col-12" id="r_box2Img">
      <img class="r_box2ColCreateImg" src="" id="r_box2ImgNew"/>
    </div>
  
    <div class="" id="r_box2H1">
      <p class="r_box2ColCreateInputHeader">Header</p>
      <div class="row">
        <input class="r_box2ColCreateH1" type="text" name="r_box2H1New" id="H" />
      </div>
    </div>
  
    <div class="">
      <p class="r_box2ColCreateInputHeader">Time</p>
      <div class="row">
        <div class="col-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="r-colorBlue bi bi-smartwatch" viewBox="0 0 16 16">
            <path d="M9 5a.5.5 0 0 0-1 0v3H6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5V5z"/>
            <path d="M4 1.667v.383A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 0 0 2-2.45V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H14v-.5a2.5 2.5 0 0 0-2-2.45v-.383C12 .747 11.254 0 10.333 0H5.667C4.747 0 4 .746 4 1.667zM4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3z"/>
          </svg>
        </div>
        <div class="col-11" id="r_box2Time">
          <input class="col-11" type="text" name="r_box2TimeNew" id="Time" />
        </div>
      </div>
    </div>
    
    <div class="">
      <p class="r_box2ColCreateInputHeader">Location</p>
      <div class="row">
        <div class="col-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="r-colorBlue bi bi-telephone-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
          </svg>
        </div>
        <div class="col-11 r_box2ColCreateLocation" id="r_box2Location">
          <input class="col-11" type="text" name="r_box2LocationNew" id="Location" />
        </div>
      </div>
    </div>
  
    <div class="">
      <p class="r_box2ColCreateInputHeader">About</p>
      <div class="row">
        <div class="col-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="r-colorBlue bi bi-question-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
          </svg>
        </div>
        <div class="col-11 r_box2ColCreateLocation" id="r_box2About">
          <input class="col-11" type="text" name="r_box2AboutNew" id="About" />
        </div>
      </div>
    </div>
  
    <div class="r_box2Btn">
      <button class="r_box2btn btn btn-default btn-success" id="r_block2RightCreate" onClick="r_PreviewNewEvent()">Create</button>
    </div>
  </div>
  </div>    
  `
}


let r_box2FormSave = {};

const r_PreviewNewEvent=()=>{
  // take
  r_box2FormSave = {
    H: document.getElementById('H').value,
    Time: document.getElementById('Time').value,
    Location: document.getElementById('Location').value,
    About: document.getElementById('About').value
  }
  // add
  document.getElementById('r_block2').innerHTML += `

  <div class="col-lg-4" id="r_DelPreview">
  <div class="r_box2Col r_box2ColCreate">

  <button type="button" class="r_box1BtnDel btn btn-default btn-danger" id="r_box1Col1DeleteBtn" onClick="r_DeletePreview()">X</button>
    
    <div class="r_boxColHead">
      <h1 id="r_box1ColH3">
        ${r_box2FormSave.H}
      </h1>
    </div>

    <div class="r_boxColContent">

      <div class="">
        <div class="row">
          <div class="col-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="r-colorBlue bi bi-smartwatch" viewBox="0 0 16 16">
              <path d="M9 5a.5.5 0 0 0-1 0v3H6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5V5z"/>
              <path d="M4 1.667v.383A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 0 0 2-2.45V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H14v-.5a2.5 2.5 0 0 0-2-2.45v-.383C12 .747 11.254 0 10.333 0H5.667C4.747 0 4 .746 4 1.667zM4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3z"/>
            </svg>
          </div>
          <div class="col-10" id="r_box2Time">
            <p class="" id="r_box1ColTime">
              ${r_box2FormSave.Time}
            </p>
          </div>
        </div>
      </div>
    
      <div class="">
        <div class="row">
          <div class="col-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="r-colorBlue bi bi-telephone-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
            </svg>
          </div>
          <div class="col-10" id="r_box2Location">
            <p class="" id="r_box1ColLocation">
              ${r_box2FormSave.Location}
            </p>
          </div>
        </div>
      </div>

      <div class="">              
        <div class="row">
          <div class="col-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="r-colorBlue bi bi-question-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
            </svg>
          </div>
          <div class="col-10" id="r_box2About">
            <p id="r_box1ColAbout">
              ${r_box2FormSave.About}
            </p>
          </div>
        </div>
      </div>

      <div class="r_box2Btn">
        <button class="btn btn-default btn-primary" id="r_box2BtnCreate" onClick="r_SaveNewEvent()">Save Pattern</button>
      </div>
    </div>
  </div>
</div>
  `;
}

const r_SaveNewEvent=()=>{
  // add
  document.getElementById('r_block1').innerHTML += `

  <div class="col-lg-4" id="r_Del4">
  <div class="r_boxCol">

    <button type="button" class="r_box1BtnDel btn btn-default btn-danger" id="r_box1Col1DeleteBtn" onClick="r_Delete4()">X</button>
    <div class="r_boxColHead">
      <img  class="r_boxColImg" id="r_boxCol1Img" src="pik-conf.png"/>
      <h3 id="r_box1ColH3">
        ${r_box2FormSave.H}
      </h3>
    </div>

    <div class="r_boxColContent">

      <div class="row">
        <div class="col-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="r-colorBlue bi bi-smartwatch" viewBox="0 0 16 16">
            <path d="M9 5a.5.5 0 0 0-1 0v3H6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5V5z"/>
            <path d="M4 1.667v.383A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 0 0 2-2.45V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H14v-.5a2.5 2.5 0 0 0-2-2.45v-.383C12 .747 11.254 0 10.333 0H5.667C4.747 0 4 .746 4 1.667zM4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3z"/>
          </svg>
        </div>
        <div class="col-10" id="r_box2Time">
          <p class="" id="r_box1ColTime">
            ${r_box2FormSave.Time}
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="r-colorBlue bi bi-telephone-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
          </svg>
        </div>
        <div class="col-10" id="r_box2Location">
          <p class="" id="r_box1ColLocation">
            ${r_box2FormSave.Location}
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="r-colorBlue bi bi-question-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
          </svg>
        </div>
        <div class="col-10" id="r_box2About">
          <p id="r_box1ColAbout">
            ${r_box2FormSave.About}
          </p>
        </div>
      </div>

    </div>
    
    <a href="#r_block" class="r_box1Btn" id="r_box1ColTimeBtn" onClick="r_Book()">BOOK ></a>
  </div>
</div>
  `;
  // del
  document.getElementById('r_DelPreview').remove();
  document.getElementById('r_DelForm').remove();

}