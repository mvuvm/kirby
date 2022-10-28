var swiper = new Swiper(".gallery_swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }
});

let characterData = [
    {
        'subject': '커비가 궁금해?',
        'title' : '커비',
        'class' : 'kirby',
        'con': `봄바람과 함께 푸푸푸랜드에 나타난 젊은 모험가.<br>그것이 커비입니다.<br>
        뭐든지 빨아들여 삼켜버리는 먹보.<br><br>
        적의 능력을 카피해서 변신합니다.<br>
        무기로 싸우거나, 신비로운 기술을 사용하거나, 때로는 모습을 바꾸며 대 활약중!<br>
        푸푸푸랜드의 평화를 위해서 힘내라 커비!`,
        'img': ['./images/character-img-1.png','./images/kirby.png']
    }, 
    {
        'subject': '웨이들 디가 궁금해?',
        'title' : '웨이들디',
        'class' : 'wd',
        'con': `푸푸푸랜드의 이곳저곳에 살고있는 신비로운 생명체 웨이들 디는
        커비앞에 나타나는 조무래기중 조무래기 입니다.<br><br>
        그냥 걷고 있었을 뿐인데, 커비가 삼켜버리는 일도 있다고...<br>
        거대한 웨이들 디나, 황금색 웨이들 디등 다양한 웨이들 디가 있습니다.<br>
        조무래기지만 힘내라 웨이들 디!`,
        'img': ['./images/character-img-2.png','./images/waddledee.png']
    },
    {
        'subject': '메타 나이트가 궁금해?',
        'title' : '메타 나이트',
        'class' : 'meta',
        'con': `수수께끼의 전사 메타 나이트.<br>
        화려한 검술을 뽐내며 싸우고, 때로는 적이 되고 때로는 같은 편이 되어주기도 합니다.<br><br>
        커다란 전함 '할버드'의 선장.<br>
        부하 메타 나이트들에게도 신뢰를 받고있습니다.<br>
        멋있다 메타 나이트!`,
        'img': ['./images/character-img-3.png','./images/metaknight.png']
    },
    {
        'subject': '디디디 대왕이 궁금해?',
        'title' : '디디디 대왕',
        'class' : 'dewang',
        'con': `부하들을 대리고 푸푸푸랜드의 주민들을 곤란하게 하는 주범.<br>
        별무늬의 큰 해머가 그의 자랑스러운 무기입니다.<br><br>
        커비처럼 무언갈 삼키거나 뱉을수도 있습니다.<br>
        매사에 얄미운 존재같지만 가끔은 상냥하기도 하다고...<br>`,
        'img': ['./images/character-img-4.png','./images/dedede.png']
    }
]

let newsData = [
    {
        'subject': '언제나 커비와 3화 업로드',
        'tag':'campaign',
        'con': '당신과 매일 함께 할 수 있는 그림책 시리즈, 『언제나 커비와』3화의 영상을 다음 링크에서 확인할수 있습니다. 유튜브 링크: https://youtu.be/aO7-mnQJhFA',
        'img': ['./images/news_img13.jpg']
    }, 
    {
        'subject': '커비가 30주년을 맞이했습니다!',
        'tag':'event',
        'con': '커비의 30주년을 맞아 특설페이지 개설 및 용산 별의 커비 30주년 팝업 스토어가 설치될 예정입니다.',
        'img': ['./images/news_img15.jpg']
    },
    {
        'subject': '언제나 커비와 2화 업로드',
        'tag':'campaign',
        'con': '당신과 매일 함께 할 수 있는 그림책 시리즈, 『언제나 커비와』2화의 영상을 다음 링크에서 확인할수 있습니다. 유튜브 링크: https://youtu.be/aO7-mnQJhFA',
        'img': ['./images/news_img14.jpg']
    },
    {
        'subject': '커비의 드림뷔페 발매!',
        'tag':'game',
        'con': '구르고, 먹고, 커지고. 디저트로 가득한 세상에서 먹보의 드림 배틀! 네 명의 커비가 먹은 딸기의 양으로 겨루는 대전 액션.',
        'img': ['./images/game-title3.jpg']
    }
]

// 목록 만들기
newsData.forEach(function(data){
    var html = `<li class="news_item">
                    <a href="">
                        <img src="${data.img[0]}" alt="">
                        <div class="txt_info">
                            <span class="${data.tag}">${data.tag}</span>
                            <strong>${data.subject}</strong>
                            <p>${data.con}</p>
                        </div>
                    </a>
                </li>`
    $('.news_section ul').append(html)
})

characterData.forEach(function(data){
    var html = `<li class="char_item">
                    <a href="">
                        <img src="${data.img[0]}" alt="">
                        <div class="txt_info ${data.class}">
                            <strong>${data.subject}</strong>
                        </div>
                    </a>
                </li>`
    $('.charecter_section ul').append(html)
})





// 목록 아이템 클릭
$('.char_item').on('click', function(e){
    e.preventDefault()

    let index = $(this).index()
    console.log(index)

    $('.character_pop h1').html(characterData[index].title)
    $('.character_pop p').html(characterData[index].con)
    $('.character_pop img').attr('src', characterData[index].img[1])
    $('.character_pop>div:nth-child(2)').attr('class', characterData[index].class)
    $('.character_pop').fadeIn(200) // 400
    $('body').addClass('non_scroll')

})

$('.news_item').on('click', function(e){
    e.preventDefault()

    let index = $(this).index()
    console.log(index)

    $('.news_pop h1').html(newsData[index].subject)
    $('.news_pop p').html(newsData[index].con)
    // $('.news_pop img').attr('src', newsData[index].img)

    $('.news_pop .img_wrap').html('')
    newsData[index].img.forEach(function(data){
        $('<img>').attr('src', data).appendTo('.news_pop .img_wrap')
    })
    $('.news_pop').fadeIn(200) // 400
    $('body').addClass('non_scroll')

})

// 팝업의 닫기 버튼 클릭
$('.news_pop .btn_close').on('click', function(){
    $('.news_pop').fadeOut(200) // 400
    $('body').removeClass('non_scroll')
})
$('.character_pop .btn_close').on('click', function(){
    $('.character_pop').fadeOut(200) // 400
    $('body').removeClass('non_scroll')
})
$('.dim').on('click', function(){
    $('.news_pop').fadeOut(200) // 400
    $('.character_pop').fadeOut(200) // 400
    $('body').removeClass('non_scroll')
})

//메뉴
$('.btn_menu_open').on('click',function(){
    $('.gnb').addClass('open');
    $('.btn_menu_close').fadeIn(500);
});
$('.btn_menu_close').on('click',function(){
    $('.gnb').removeClass('open');
    $('.btn_menu_close').fadeOut(100);
});
$('.gnb a').on('click',function(){
    $('.gnb').removeClass('open');
    $('.btn_menu_close').fadeOut(100);
});

//스크롤
$(window).on('scroll',function(){
    let scrollNum = $(window).scrollTop();
    if(scrollNum > 100){
        $('.header_inner').addClass('fixmenu')
    }else{
        $('.header_inner').removeClass('fixmenu')
    }
    if(scrollNum > 600){
        $('.btn_scrollTop').addClass('show')
    }else{
        $('.btn_scrollTop').removeClass('show')
    }
});
$('.btn_scrollTop').on('click',function(){
    $(window).scrollTop(0);
});
