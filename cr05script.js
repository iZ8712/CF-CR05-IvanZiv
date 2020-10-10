var mov = JSON.parse(movie);

console.table(mov);

for (let i=0; i < mov.length; i++){

    document.getElementById("content").innerHTML +=`

        <div class="col-sm-12 col-md-5 col-lg-5 box">

            <div class="box2"><img class="movPic text-wrap" src='${mov[i].image}'></div>
                        
                <div class="box3">

                    <div class="col-sm-12 col-lg-12"><p class="movNa text-wrap">${mov[i].movieName}</p></div>

                    <div class="col-sm-12 col-lg-12"><p class="movDe text-wrap">${mov[i].description}</p></div>

                    <div class="likeSys col-lg-12 row align-items-end">
                                
                        <div class="col-sm-8 col-lg-8 mr-0 text-wrap likeP1">Like<button id="${i}" type="button" class="plus"><img class="picLi" src="img/like.png"></button></div>
                        
                        <div class="col-sm-4 col-lg-4 ml-0 likeP2"><div class="circel points text-wrap text-center">${mov[i].likes}</div></div>

                    </div>

                </div>

        </div>

    `;

};

$(document).ready(function(){
    
    $(".plus").on("click", function(){
        
        var a = $(this).attr("id");
        
        mov[a].likes += 1;
        
        $(this).parent().parent().find(".points").html(mov[a].likes);

    })

})




