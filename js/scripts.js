
//Twitter

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

//Facebook

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk')
    );

$(document).ready(function(){

  // smooth scrolling

  var $root = $('html, body');
    $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
    });

  //alert("Document is ready!");

  $("textarea").css("background-color", "#ffcc66");

  //to load carousel

  $('.carousel').carousel({
    interval: 2500 //changes the speed
  })

  //googlemaps

  //function init_map() {
      //var var_location = new google.maps.LatLng(55.653579,-2.249718);
       //var var_mapoptions = {
          //center: var_location,
          //zoom: 14
        //};
      //var var_marker = new google.maps.Marker({
      //position: var_location,
      //map: var_map,
      //title:"Coldstream"});
      //var var_map = new google.maps.Map(document.getElementById("map-container"),
            //var_mapoptions);
      //var_marker.setMap(var_map); 
      //}
    //google.maps.event.addDomListener(window, 'load', init_map);

  //stellar

  $.stellar();

  //tooltips

  $(function () {
  $('.toola').tooltip();
       });

  $(function () {
  $('[data-toggle="tooltip"]').tooltip();
   });

  //button

  //$('.btn.btn-warning').on('click', function() {
  //console.log('clicked');
  //return false;
  //});

  $('.btn.btn-primary').on('click', function(){
    var comment = $('textarea').val();
    //console.log(comment);
    var field = $("input[type='email']").val();  
    var charCount = $('textarea').val().length;
       if (( comment === "" ),(field === ""),(charCount < 20) ){
        $('textarea').css ('box-shadow', '7px 7px 7px  #000000');
        $('#inputEmail').css ('box-shadow', '7px 7px 7px  #000000');
        $('.help-block with-errors').display();
    } else {
        $('#visible-comment').html(comment);
        $('textarea').hide(500);
        $('.btn.btn-primary').hide(1000);
        var message = 'Was Successfully Sent !';
        $('#confirmation').html(message);
        $('#confirmation').css({'color':'#ffcc66',
                              'font-size':'1.5em',
                              'background-color':'#ffffff',
                              'border': ('2px','double'),
                              'border-radius': ('5px'),
                              'border-color': '#cc9900'});
      };
      
      return false
  });
  
  //if (field == "") {
        //$('textarea').css ('box-shadow', '7px 7px 7px  #000000');
        //$('#inputEmail').css ('box-shadow', '7px 7px 7px  #000000');
        //$('.help-block with-errors').display();
    //} else {
        //$('#visible-comment').html(comment);
        //$('textarea').hide(500);
        //$('.btn.btn-primary').hide(1000);

        //var message = 'Was Successfully Sent !';
        //$('#confirmation').html(message);
        //$('#confirmation').css({'color':'#ffcc66',
                              //'font-size':'1.5em',
                              //'background-color':'#ffffff',
                              //'border': ('2px','double'),
                              //'border-radius': ('5px'),
                              //'border-color': '#cc9900'});
      //};

  //2.7 exercice counting characters in messagebox

  $('textarea').on('keyup', function() {
    //console.log("keyup happened");
    //var nameName = 3;
    //var name = 'string';
    var charCount = $('textarea').val().length;
    //console.log(charCount);
    $('#char-count').html(charCount);
      if(charCount > 20) {
        $('#char-count').css('color', 'red');
      } else {
        $('#char-count').css('color', 'black'); // need it to be black
      };
  });

  //Exercise 2.8 

  // work section

  //console.log(works);

  for(var i = 0; i < works.length; ++i ) {
    
    $("#gallery").append("\
      <div class='col-sm-6 col-md-3'>\
      <span><a href='#video' class='work-img'>\
        <img class='img-responsive' src='" + works[i].pic + "'>\
        <span class='info'><p class='proj-title'>Title:</p> " + works[i].title + " </span>\
      </a></span>\
      </div>\
    ");


    var images = $("#gallery img");
    if(i%2 === 0){
      $(images[i]).css("border", "2px solid DodgerBlue");
    } else {
      $(images[i]).css("border", "2px solid salmon");
    };
  };

  // Exercise 2.9 

    $(".work-img").mouseenter( function() {
      $(".info", this).show();
    }).mouseleave(function(){
      $(".info", this).hide();
    });


// CALCULATOR exercise 2.11

// calculator variables
 
  var inputs=[''];
  var totalAll;
  var calOper = ['+','-','/','*'];
  var calDot = ['.'];
  var nums=[0,1,2,3,4,5,6,7,8,9];
  
function getValue(input){
  if(calDot.includes(inputs[inputs.length-1])===true && input==="."){ // adds value to inputs and checks validation with else if statements
   console.log("Duplicate '.'");
 }
  
else if(inputs.length===1 && calOper.includes(input)===false){ // so it doesn't start with an operator
    inputs.push(input);
  }
  
  else if(calOper.includes(inputs[inputs.length-1])===false){ // when last character was not an operator adds operator
    inputs.push(input);
  }

  else if(nums.includes(Number(input))){ // adds number to inputs 
   inputs.push(input);
  }
update();
}
  function update(){
      totalAll= inputs.join("");
    $("#display").html(totalAll);
  }
  function getTotal(){
     totalAll= inputs.join("");
    console.log(totalAll + ": " + eval(totalAll));
    $("#display").html(eval(totalAll));
  }
  
  $("input").on("click",function(){
    if(this.id==="deleteAll"){
      inputs = [''];
      update();
    }
    else if(this.id==='total'){
      getTotal();
    }
    else{
     if(inputs[inputs.length-1].indexOf('+','-','/','*','.')===-1){
        getValue(this.id);
      }
      else {
        getValue(this.id);
      }
    } 
  });

});
  
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.654, lng: -2.251},
    zoom: 10
  });

  var marker = new google.maps.Marker({
    position: {lat: 55.654, lng: -2.251},
    map: map,
    title: 'Have a nice Day!'
  });

}



  














