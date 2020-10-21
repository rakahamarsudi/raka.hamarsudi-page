$('.scroll-page').on('click', function(e) {  
    e.preventDefault();
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);

    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top-50
    }, 1000); 
});

$('#certificate').on('click', '.img-thumbnail', function() {
    var gambar = $(this).attr('src');
    
    $('.modal-body').html('<img src="'+gambar+'" class="img-fluid">');
});

function certificate_more() {
    $('.more-certificate').html(`
        <div class="row pb-2">
            <div class="col-sm-4 pl-1 pr-1">
                <img src="materials/certificate/dcd-04.jpg" alt="certificate" class="img-thumbnail" data-toggle="modal" data-target="#certificateModal">
            </div>
            <div class="col-sm-4 pl-1 pr-1">
                <img src="materials/certificate/pgt-01.jpg" alt="certificate" class="img-thumbnail" data-toggle="modal" data-target="#certificateModal">
            </div>
            <div class="col-sm-4 pl-1 pr-1">
                <img src="materials/certificate/dcd-05.jpg" alt="certificate" class="img-thumbnail" data-toggle="modal" data-target="#certificateModal">
            </div>
        </div>
        <div class="row pb-2">
            <div class="col-sm-4 pl-1 pr-1">
                <img src="materials/certificate/pgt-02.jpg" alt="certificate" class="img-thumbnail" data-toggle="modal" data-target="#certificateModal">
            </div>
            <div class="col-sm-4 pl-1 pr-1">
                <img src="materials/certificate/pgt-03.jpg" alt="certificate" class="img-thumbnail" data-toggle="modal" data-target="#certificateModal">
            </div>
            <div class="col-sm-4 pl-1 pr-1">
                <img src="materials/certificate/pgt-04.jpg" alt="certificate" class="img-thumbnail" data-toggle="modal" data-target="#certificateModal">
            </div>
        </div>
    `);
}

$('#certificate-more').on('click', '.btn', function() {
    var status = $(this).text();
    if(status === 'More') {
        certificate_more();
        $(this).text('Less');
    } else {
        $('.more-certificate').html('');
        $(this).text('More');
    }
});

$(window).scroll(function(){
    var winScroll = $(this).scrollTop();
});