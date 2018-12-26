require(['./js/main.js'],function(){
    require(['jquery','swiper','bscroll','flex'],function($,swiper,bscroll,flex){
        //初始化
        init();
        function init(){
            //渲染swiper
             renderSwiper();
            //初始化swiper
            var sw=new swiper('.banner',{
                loop:true,
                autoplay:true,
                pagination:{
                    el:'.swiper-pagination'
                }
            });
            renderNav();
        var scrollNav=new bscroll('.nav',{
            scrollX:true,
            probeType:2,
            click:true
        })
         list();
        var scrollList=new bscroll('.list',{
            scrollX:true,
            probeType:2,
            click:true
        })
            
        }
        function renderSwiper(){
              $.ajax({
                  url:'/api/icon',
                  dataType:'json',
                  success:function(res){
                      if(res.code===0){
                          var str='';
                         for(var i=0;i<Math.ceil(res.msg.length/8);i++){
                              str+=` <div class="swiper-slide">`;
                              res.msg.map(function(file,index){
                                 if(index>=i*8&&index<(i+1)*8){
                                   str+=` <dl>
                                  <dt><img src="${res.msg[index].url}" alt=""></dt>
                                  <dd>${res.msg[index].dd}</dd>
                              </dl>`
                                 }
                              })
                              str+=`</div>`;
                         }
                         $('.swiper-wrapper').html(str);
                      }
                  }
              })
            
        }
        function renderNav(){
              $.ajax({
                  url:'/api/nav',
                  dataType:'json',
                  success:function(res){
                     if(res.code===0){
                         render(res.msg)
                     }
                  }
              })
            function render(data){
                 var str='';
                 data.map(function(file){
                     str+=`<div>
                     <img src="${file.url}" alt="">
                     <p>${file.title}</p>
                     <span>${file.price}</span>
                 </div>`
                 })
                 $('.nav-con').html(str);
            }
        }
      function list(){
             $.ajax({
                 url:'/api/list',
                 dataType:'json',
                 success:function(res){
                     if(res.code===0){
                         renderList(res.msg)
                     }
                 }
             })
             function renderList(data){
                 var str='';
                 data.map(function(file){
                     str+=`  <div class="content">
                     <img src="${file.url}" alt="">
                     <p>${file.title}</p>
                     <div class="right">
                        <h2>评分<span>${file.grade}</span></h2>
                        <h2>价格<span>${file.price}</span></h2>
                     </div>
                 </div>`
                 })
                 $('.list-con').html(str);
             }
      }

    })
})