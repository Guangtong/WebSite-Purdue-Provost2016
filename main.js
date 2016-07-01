//$(document).ready(function(){

$(window).load(function() {
    
    
    //accordion
    $('#collapseOne').on('show.bs.collapse',function(){
        $('.panel-heading').css('display', 'none');
        
        // var columnHeight = $('.linkCol ul#highestMenu').css('height');
        // console.log(columnHeight);
        var columnHeight = '330px';

        $('.linkCol ul').each(function(){
            $(this).css('height', columnHeight);
        });

    });

    

    //video
    var video = $('.mainContent video').get(0);
    var v=video.currentSrc;

    function setSize(){
        console.log(window.innerWidth);
        if(window.innerWidth<768){ //mobile device < ipad width (768 device)//751
            video.src=''; //show poster
            $('.mainContent video').css('display','none');
            $('.mainContent #video-poster').css('display','block');
            $('#video-wrap').css('height',$('.mainContent #video-poster').css('height'));
            
            $('#eventDescrip1 a').css('height', '100px');
            $('#eventDescrip2 a').css('height', '100px');
            
            $('.rss-box').css('height', 'auto');
            $('.col-4of10').css('height', 'auto');
            $('#eventImage2 img').css('height','auto');
        }else{
            if(video.src != v) {
                video.src=v; //back to show video
            }
            $('.mainContent video').css('display','block');
            $('.mainContent #video-poster').css('display','none');
            var h = window.innerHeight * 0.7;
           
            $('#video-wrap').css('height',h+'px');//fixed height for video

            //Event row height:
            //all height equal to eventImage1
            var eventImgHeight = $('#eventImage1 img').css('height');
            $('#eventDescrip1 a').css('height', eventImgHeight);
            $('#eventImage2 img').css('height',eventImgHeight);
            $('#eventDescrip2 a').css('height', eventImgHeight);
            $('.col-4of10').css('height',$('.col-3of10').css('height'));
            var tabContentHeight= $('.col-4of10').height()-$('.nav-tabs').height() +'px';
            $('.rss-box').css('height',tabContentHeight);
        }
    };
    setSize();
    
    $(window).resize(setSize);

 

});
