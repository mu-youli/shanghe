//=== viewid:lang_style_1_1689585668725 ===//
$(document).ready(function(){
});

//=== viewid:dh_style_28_1708143209012 ===//

/*pc,手机显示隐藏*/
function is_mobile(){
	return window.screen.width<767 || ($('body').width() > 0 && $('body').width() < 767);
}
var is_mobile_boolean = is_mobile();
$(function(){
    /*pc,手机显示隐藏*/
                        $("#dh_style_28_1708143209012 li").each(function(){
                if($(this).find("ul") && $(this).find("ul").length != 0){
                    $(this).children("a").removeAttr('href');
                    if(is_mobile_boolean){
                        $(this).children("a").attr('onclick','navSwtich(this)');
                    }
                }
            });
                
        
        
    
})


//=== viewid:dh_style_28_1708143209012 ===//

function navSwtich(obj) {
	$(obj).siblings(".menuUlCopy").slideToggle(200);
	$(obj).toggleClass('ontoggle');
	$(obj).parent().siblings().find(".menuUlCopy").slideUp(200);
	$(obj).parent().siblings().find(".fa-angle-down").removeClass('ontoggle');
}
function subLeft_dh_style_28_1708143209012(){
	$("#dh_style_28_1708143209012 .menuUl>li").each(function(){
		$(this).find(".menuUl03").css("left",'100%');
	})
}
$(window).resize(function() {
	subLeft_dh_style_28_1708143209012();
})
$(function(){
    
	$("#dh_style_28_1708143209012 .fa-navicon").click(function(){
        $("#dh_style_28_1708143209012").addClass('clearTransform');
		$("#dh_style_28_1708143209012 .menuUlCopy").each(function(){
			$(this).siblings(".fa").show();
		})
	})
	subLeft_dh_style_28_1708143209012();
		$("#dh_style_28_1708143209012 .subBox").css("top",$("#dh_style_28_1708143209012 .menuUl_box").height());
		
	if($("#dh_style_28_1708143209012 .menuUl").hasClass("noHover")){
		var tabNum = 0;
		$("#dh_style_28_1708143209012 .menuUl>li").find(".Onsub").each(function(){
			tabNum += 1;
			$(this).parent().attr("tabNum",tabNum)
		})
		$("#dh_style_28_1708143209012 .menuUl>li .Onsub").mouseover(function(){
			$("#dh_style_28_1708143209012 .subBox").show();
			var index = $(this).parent().attr("tabNum");
			$("#dh_style_28_1708143209012 .subBox .subItems").eq(index-1).fadeIn(100).siblings().hide();
			// 风格49，是用鼠标经过效果而不用鼠标选中效果
										$("#dh_style_28_1708143209012 .subBox .subMenuImgArea .subMenuImgCon").eq(0).fadeIn(100).siblings().hide();
					})
		// 风格49，是用鼠标经过效果而不用鼠标选中效果
								$("#dh_style_28_1708143209012 .subBox").mouseleave(function(){
			$(this).hide();
		});
		$("#dh_style_28_1708143209012 .menuUl>li .Nosub").mouseover(function(){
			$("#dh_style_28_1708143209012 .subBox").hide();
		})
		
		//风格41 42
					
		
		
	}
})
	var color = $('#dh_style_28_1708143209012 .menuStyle_28 .menuUl02 .subMenu02').css('background-color');
	$('#dh_style_28_1708143209012 .menuStyle_28').append(`<style>#dh_style_28_1708143209012 .menuStyle_28 .menuUl .rflex .menuUl02::before{border-bottom-color:${color}!important;}</style>`);
	$('#dh_style_28_1708143209012 .menuStyle_28 .menuUl02 .subMenu02').mouseover(function(){
		let that = $(this);
		setTimeout(function(){
			var hoverColor = that.css('background-color');
			$('#dh_style_28_1708143209012 .menuStyle_28').append(`<style>#dh_style_28_1708143209012 .menuStyle_28 .menuUl02 .arrow:hover::before{border-left-color:${hoverColor}!important;}</style>`);
		},100);
	});


//=== viewid:banner_style_01_1685442898381,banner_style_04_1685445759436 ===//

        
    

//=== viewid:banner_style_01_1685442898381 ===//

$(document).ready(function(){
	arrowShow();
	$(window).resize(function(){
		arrowShow();
	});
	// 箭头显示
	function arrowShow(){
		if(window.screen.width<767 || ($('body').width() > 0 && $('body').width() < 767) || navigator.userAgent.indexOf('Mac OS X') != -1){
			$("#banner_style_01_1685442898381 .bannerStyle_1 .awesome-font").show().siblings().hide();
		}else{
			$("#banner_style_01_1685442898381 .bannerStyle_1 .awesome-font").hide().siblings().show();
		}
	}
	
});


//=== viewid:banner_style_01_1685442898381 ===//

        $(document).ready(function(){
        	arrowShow();
        	$(window).resize(function(){
        		arrowShow();
        	});
        	// 箭头显示
        	function arrowShow(){
        		if(window.screen.width<767 || ($('body').width() > 0 && $('body').width() < 767) || navigator.userAgent.indexOf('Mac OS X') != -1){
        			$("#banner_style_01_1685442898381 .awesome-font").show().siblings().hide();
        		}else{
        			$("#banner_style_01_1685442898381 .awesome-font").hide().siblings().show();
        		}
        	}
        });
    

//=== viewid:banner_style_01_1685442898381 ===//

	console.log("banner_style_01_1685442898381 everyBanner_");
	// 左右切换
    function everyBanner_banner_style_01_1685442898381(){
        var style = "style_01";
        var datestay=parseFloat("3")*1000;  //延时
        var timeAnimi=parseFloat("0.5")*1000;    // 切换速度
        var obj=$("#banner_style_01_1685442898381");
                    
            }
    everyBanner_banner_style_01_1685442898381();


//=== viewid:banner_style_01_1685442898381 ===//


    /*
     * Banner 轮播图类
     */
	var intervaltimer;
    function Banner(config) {
        this._default = {
            'list':[],
            'length':0,
            'current':0,
            'timer':undefined,      // 计时器
            'view':undefined,           // 视图
            'flick':undefined,      // 圆点选择器
            'duration':3,               // 切换时间间隔
            'animation':0.5         // 动画时间
        };
        config = $.extend(true, this._default, config);
        this.config = config;
        this.init(config);
    }
    Banner.prototype.init = function(config) {
        this.animateStyle = 'normal';       // 动画效果 ( 根据动画效果, 不同的方法有不同的实现 )
        this.direction = 'right';   // 当前滚动方向
        this.view = this.config.view;
        this.config.length = this.config.list.length;
        this.config.flick = this.view ? this.view.find(".bannerStyle_1 .flicking_con > a") : undefined;
    };
    // 计算下一个要显示的图片的索引
    // by: 如果没有传入参数, 则使用配置中的数据this.config.current, 否则使用传入的参数
    Banner.prototype.nextIndex = function(by) {
        by === undefined && (by = this.config.current);
        var next = this.direction == 'right' ? by + 1 : by - 1;
        next >= this.config.length && (next = 0);
        next < 0 && (next = this.config.length - 1);
        return next;
    };
    //图片链接
    $url_html = new Array();
    $i = 0;
    $url_len = 5;
            $url_html[0] = "[PAGE_URL@342515@newsid=540794@PAGE_URL]";
            $url_html[1] = "[PAGE_URL@342515@newsid=534151@PAGE_URL]";
            $url_html[2] = "[PAGE_URL@342515@newsid=607382@PAGE_URL]";
            $url_html[3] = "[PAGE_URL@342515@newsid=618258@PAGE_URL]";
            $url_html[4] = "";
     

    $('#banner_style_01_1685442898381 a.img_url').attr('href',$url_html[$i]);
    // 跳到指定图片
    Banner.prototype.animateIndex = function(index) {
        this.endAnimate();
        if(index >= 0 && index < this.config.length && this.config.current != index) {
            if(this.config.current < index) {
                this.direction = 'right';
                this.config.current = index - 1;
            } else {
                this.direction = 'left';
                this.config.current = index + 1;
            }
            
            this.showIndex(this.config.current);
            this.startAnimate();
        }
    };
    // 向右动画
    Banner.prototype.startAnimateRight = function() {
        this.direction = 'right';
        this.startAnimate();
    };
    // 向左动画
    Banner.prototype.startAnimateLeft = function() {
        this.direction = 'left';
        this.startAnimate();
    };
    // 结束动画
    Banner.prototype.endAnimate = function() {
			clearTimeout(this.config.timer);
    };
	// 结束动画
	Banner.prototype.hoverEndAnimate = function() {
			var that = this;
			intervaltimer = setInterval(function(){
				clearTimeout(that.config.timer);
			},100);
	};
    Banner.prototype.startAnimate = function() {
        switch(this.animateStyle) {
            case 'normal':
                // 默认效果
                this.endAnimate();
                if(this.config.length > 1) {
                    var prev = this.config.current, next = this.nextIndex(),
                            end = this.direction == 'right' ? {prev:"-100%", current:"100%"} : {prev:"100%", current:"-100%"};  // 前一个图片和当前图片的最后停留位置
                    this.config.flick.eq(next).addClass("on").siblings().removeClass("on");
                    // 执行动画
                    var banner = this;
                    this.imgs.eq(prev).stop().animate({"left":end.prev}, this.config.animation, function(){
                        banner.config.timer = setTimeout(function(){
                            banner.startAnimate();
                        },banner.config.duration);
                    });
                    this.imgs.eq(next).css({"left":end.current}).stop().animate({"left":"0%"}, this.config.animation);
                    this.config.current = next;
                }
                break;

            case 'rotate-3d':
                // 3D旋转效果
                this.endAnimate();
                this.updateBgImg();
                if(this.config.length > 1) {
                    var prev = this.config.current, next = this.nextIndex();
                    this.config.flick.eq(next).addClass("on").siblings().removeClass("on");
                    this.config.current = next;
                    this.parts.css("transform", "rotateX(" + ((this.direction == 'right' ? ++this.rotate : --this.rotate) * 90) + "deg)");
                    var banner = this;
                    this.config.timer = setTimeout(function(){
                        banner.startAnimate();
                    },banner.config.duration);
                }
                $('#banner_style_01_1685442898381 a.img_url').attr('href',$url_html[this.config.current]);
                break;
        }
    };
    // 指定显示的图片
    Banner.prototype.showIndex = function(index) {
        switch(this.animateStyle) {
            case 'normal':
                // 默认效果
                this.imgs.eq(index).css("left","0%").siblings(".img-item").css("left","100%");
                this.config.flick.eq(index).addClass("on").siblings().removeClass("on");
                break;
            case 'rotate-3d':
                // 3D旋转效果
                this.updateFaceBottonTopImg(index);
                this.config.flick.eq(index).addClass("on").siblings().removeClass("on");
                break;
        }
    };

    /*
     * ********************************************
     * 3D旋转效果 特有函数 begin
     */
    // 每次旋转前都需要更新背部的图片
    Banner.prototype.updateBgImg = function() {
        // 计算背部要显示的图片
        var bg_image_index = this.nextIndex(this.nextIndex());
        // index: 计算背景图片当前显示在哪个img中( 总共有4个图片, 分别位于正面/底部/背部/顶部, 索引分别为0, 1, 2, 3 )
        var c, index = (c = (this.rotate + 2) % 4) >= 0 ? c : c + 4;
        var banner = this;
        // console.log('第',index,'个面-使用更新为第',bg_image_index,'张图');
        this.parts && this.parts.each(function () {
            $(this).find('.img:eq('+index+')').css({'background-image': 'url("'+banner.config.list[bg_image_index]+'")'});

        });
    };
    // 更新正面/顶部/底部的图片
    // index: 要显示哪张图片
    // 备注: 因为总共有四个面的图片需要更新, 初始化时, 正面/顶部/底部的图片只需更新一次即可 (背部的图片在每次旋转前都需要更新)
    Banner.prototype.updateFaceBottonTopImg = function(index) {
        // face, bottom, top: 计算正面/顶部/底部图片当前显示在哪个img中( 总共有4个图片, 分别位于正面/底部/背部/顶部, 索引分别为0, 1, 2, 3 )
        var c, face = (c = this.rotate % 4) >= 0 ? c : c + 4, bottom, top;
        bottom = face + 1; bottom >= this.config.length && (bottom = 0);
        top = face - 1; top < 0 && (top = this.config.length - 1);
        var banner = this;
        this.parts && this.parts.each(function () {
            // console.log('第',face,'个面-使用更新为第',index,'张图');
            $(this).find('.img:eq('+face+')').css({'background-image': 'url("'+banner.config.list[index]+'")'});
            // console.log('第',bottom,'个面-使用更新为第',index < banner.config.length - 1 ? index + 1 : 0,'张图');
            $(this).find('.img:eq('+bottom+')').css({'background-image': 'url("'+banner.config.list[index < banner.config.length - 1 ? index + 1 : 0]+'")'});
            // console.log('第',top,'个面-使用更新为第',index > 0 ? index - 1 : banner.config.length - 1,'张图');
            $(this).find('.img:eq('+top+')').css({'background-image': 'url("'+banner.config.list[index > 0 ? index - 1 : banner.config.length - 1]+'")'});
        });
    };
    // 初始化旋转部分: 设置3d旋转的四个面的图片, index表示默认显示哪张图片
    Banner.prototype.initImgPart = function(index) {
        var banner = this;
        this.parts && this.parts.each(function () {
            $(this).find('.img').each(function (i) {
                var j = 0;
                switch (i) {
                    case 0: j = index; break;   // 正面
                    case 1: j = index + 1; break;   // 底部
                    case 2: break;  // 背部
                    case 3: j = index - 1; break;   // 顶部
                }
                j >= banner.config.length && (j = 0);
                j < 0 && (j = banner.config.length - 1);
                $(this).css({'background-image': 'url("'+banner.config.list[j]+'")', 'background-repeat':'no-repeat', 'background-color':'#fff'});
            });
        });
    };
    // 更新旋转部分: 之所以使用定时器, 是因为无法实时获取模块宽度
    Banner.prototype.updateImgPart = function() {
        this.parts && this.parts.each(function(index) {
            $(this).css({
                "left":$(this).width() * index + "px"
            });
            $(this).find(".img").css({
                "background-position": -$(this).width() * index + "px"
            });
        });
        var banner = this;
        setTimeout(function () {
            banner.updateImgPart();
        }, 800);
    };
    /*
     * 3D旋转效果 特有函数 end
     * ********************************************
     */

    // 图片数据
    var list_banner_style_01_1685442898381 = [];
    list_banner_style_01_1685442898381.push('https://wds-service-1258344699.file.myqcloud.com/20/16314/jpg/168544313854669559e8b1c92e99f.jpg?imageMogr2/thumbnail/1440x&version=0');list_banner_style_01_1685442898381.push('https://wds-service-1258344699.file.myqcloud.com/20/16314/jpg/1702125457195a418d7cec58c2d71de61151ae8157448.jpg?imageMogr2/thumbnail/1440x&version=0');list_banner_style_01_1685442898381.push('https://wds-service-1258344699.file.myqcloud.com/20/16314/jpg/1702125457196924159e32dc95cebb477b5ee4f236463.jpg?imageMogr2/thumbnail/1440x&version=0');list_banner_style_01_1685442898381.push('https://wds-service-1258344699.file.myqcloud.com/20/16314/jpg/170212545726198883fca02445194e639360ea8e5337a.jpg?imageMogr2/thumbnail/1440x&version=0');list_banner_style_01_1685442898381.push('https://wds-service-1258344699.file.myqcloud.com/20/16314/jpeg/17033341654180be6c24d0253455abcbdef6b247164c5.jpeg?imageMogr2/thumbnail/1440x&version=0');
    var banner_banner_style_01_1685442898381;        // 轮播图对象
    $(function(){
        // 创建轮播图
        $arrHref = new Array();
        banner_banner_style_01_1685442898381 = new Banner({
            'list':list_banner_style_01_1685442898381,
            'view':$('#banner_style_01_1685442898381'),
            'duration':parseFloat('3') * 1000,
            'animation':parseFloat('0.5') * 1000
        });
                banner_banner_style_01_1685442898381.animateStyle = 'normal';
        banner_banner_style_01_1685442898381.imgs = banner_banner_style_01_1685442898381.view.find(".bannerStyle_1 .main_image .img-list").children(".img-item");
        banner_banner_style_01_1685442898381.view.find('a').each(function (i) {
            $(this).click(function () {
                if(!$(this).attr('href')) {
                    return false;
                }
            });
           
        });
        banner_banner_style_01_1685442898381.view.find('a.picSet').each(function(i){
             $arrHref[i] = $(this).attr('href');
        });
                
        // 显示指定索引的图片
        banner_banner_style_01_1685442898381.showIndex(banner_banner_style_01_1685442898381.config.current);


        // 监听 点击圆点
        banner_banner_style_01_1685442898381.config.flick.click(function(){
            banner_banner_style_01_1685442898381.animateIndex($(this).index());
            $('#banner_style_01_1685442898381 a.img_url').attr('href',$url_html[$(this).index()]);
            $i = $(this).index();
            return false;
        });

        // 监听 鼠标悬浮时
        banner_banner_style_01_1685442898381.view.hover(
                function(){
                    banner_banner_style_01_1685442898381.hoverEndAnimate();
                    banner_banner_style_01_1685442898381.view.find(".bannerStyle_1 .btn_prev, .bannerStyle_1 .btn_next").fadeIn();
                },
                function(){
						clearInterval(intervaltimer);
                    banner_banner_style_01_1685442898381.config.timer = setTimeout(function(){
                        banner_banner_style_01_1685442898381.startAnimateRight();
                    },banner_banner_style_01_1685442898381.config.duration);
                    banner_banner_style_01_1685442898381.view.find(".bannerStyle_1 .btn_prev, .bannerStyle_1 .btn_next").fadeOut()
                }
        );
	  

        // 监听 点击左右按钮
        banner_banner_style_01_1685442898381.view.find(".btn_prev").click(function() {
            banner_banner_style_01_1685442898381.startAnimateLeft();
        });
        banner_banner_style_01_1685442898381.view.find(".btn_next").click(function() {
            banner_banner_style_01_1685442898381.startAnimateRight();
        });

        // 监听 触摸事件
        var touchVal = null;
        document.addEventListener("touchstart", function(e){
            if($(e.target).is(banner_banner_style_01_1685442898381.view) || $(e.target).closest("#"+banner_banner_style_01_1685442898381.view.attr("id")).length > 0) {
                touchVal = {};
                touchVal.downX = e.touches[0].clientX;  // 记录触摸起始位置
            }
        }, false);
        document.addEventListener("touchmove", function(e){
            if(touchVal && touchVal.downX) {
                touchVal.moveX = e.touches[0].clientX - touchVal.downX;     // 计算触摸中的偏移位置
            }
        }, false);
        document.addEventListener("touchend", function(e){
            if(touchVal && touchVal.moveX){
                if(touchVal.moveX > 30){
                    banner_banner_style_01_1685442898381.startAnimateLeft();             // 触摸生效
                    if (e.preventDefault) {
                        e.preventDefault();
                    } else {
                        e.returnvalue = false;
                    }
                }else if(touchVal.moveX < -30){
                    banner_banner_style_01_1685442898381.startAnimateRight();                // 触摸生效
                    if (e.preventDefault) {
                        e.preventDefault();
                    } else {
                        e.returnvalue = false;
                    }
                }
            }
            touchVal = null;
        }, false);

       
        // 运行
        banner_banner_style_01_1685442898381.config.timer = setTimeout(function(){
            banner_banner_style_01_1685442898381.startAnimateRight();
        }, banner_banner_style_01_1685442898381.config.duration);
    });


//=== viewid:newsList_style_25_1686583437236 ===//
var sys_url_newsList_style_25_1686583437236="viewid=newsList_style_25_1686583437236&name=newsList&style=style_04&langid=0&pageid=611877&viewCtrl=newsList";

//=== viewid:newsList_style_25_1686583437236 ===//

				var subpage = 0;
				$('#newsList_style_25_1686583437236 #page_set').blur(function(){
					if($(this).val() > 7){
						subpage = 7;
						$(this).val(7);
					}else if( $(this).val() <= 0){
						$(this).val(1);
						subpage = 1;
					}else{
						subpage = $(this).val();
					}
					$('#newsList_style_25_1686583437236 #page_set').next('.page_submit').attr('onclick',"RequestURL('newsList_style_25_1686583437236', sys_url_newsList_style_25_1686583437236, 'News_page="+subpage+"&')");
				});	
				

//=== viewid:newsList_style_25_1686583437236 ===//
//--
				$(function(){
					var viewid="newsList_style_25_1686583437236";
					var sys_url="viewid=newsList_style_25_1686583437236&name=newsList&style=style_04&langid=0&pageid=611877&viewCtrl=newsList&isfb=1";
					var moreParams='';
					if(typeof(history.pushState) != 'undefined'){
						var hstate=JSON.stringify(history.state);
						if(hstate!='null'&& hstate!=null){
							eval('var hjson = ' + hstate);
							moreParams=hjson.moreParamsnewsList_style_25_1686583437236;
						}
					}
					RequestURL(viewid,sys_url,moreParams);
				});
			//--

//=== viewid:text_style_15_1691055682743,copyright_style_01_1705331600465 ===//

	


//=== viewid:counter_style_3_1691055682738 ===//
//--
				$(function(){
					var viewid="counter_style_3_1691055682738";
					var sys_url="viewid=counter_style_3_1691055682738&name=counter&style=style_3&langid=0&pageid=611877&viewCtrl=default&isfb=1";
					var moreParams='';
					if(typeof(history.pushState) != 'undefined'){
						var hstate=JSON.stringify(history.state);
						if(hstate!='null'&& hstate!=null){
							eval('var hjson = ' + hstate);
							moreParams=hjson.moreParamscounter_style_3_1691055682738;
						}
					}
					RequestURL(viewid,sys_url,moreParams);
				});
			//--

//=== viewid:counter_style_3_1691055682738 ===//

    $(function(){
		if(!false){
			function Timeing(config) {
		        this._default = {
		            'arrayObj':[],		//总数字
		            'arrayTimeObj':[],		//每0.1秒递增数字
		            'arrayIndexObj':[],		//初始值0
		            'arrayLockObj':[],		//是否计算完成，完成后为true
		            'timeNum':30,		//计算所需时间，默认为3秒
		            'begin':new Date(),		//开始时间，用来计算耗时多少
		            'timer':undefined,		//定时器
		            'id':'',		//视图id
		            'start':false		//避免滚屏时重复触发生成计数器
		        };
		        config = $.extend(true, this._default, config);
		        this.config = config;
		        this.init(config);
		    }
		    //初始化各数组
		    Timeing.prototype.init = function(config) {
		    	var _this = this;
		    	$('#'+_this.config.id+' .numberLi').each(function(i){
		            _this.config.arrayObj.push($(this).find('.num').html());
					_this.config.arrayTimeObj.push($(this).find('.num').html()/_this.config.timeNum);
					_this.config.arrayIndexObj.push(0);
					_this.config.arrayLockObj.push(false);
					$(this).find('.num').html(0);
		       });
		    }
		    //规定时间计算完数字
		    Timeing.prototype.getNumFun = function(config){
		    	var _this = this; 
				let time_in = new Date().getTime();
				let time_in_id = new Date().getTime()+'counter_style_3_1691055682738';
				let setIntervalTime = 0;
		    	if (!_this.config.arrayLockObj.every(item => {return item})) {
					window.counterTimer[time_in_id] = setInterval(function () {
						for(let key in window.counterTimer){
							let keyArr = key.split('counter');
							let modelId = 'counter'+keyArr[1];
							if(modelId == 'counter_style_3_1691055682738' && keyArr[0] > time_in){
								clearInterval(window.counterTimer[key]);
							}
						}
						for (var i = 0; i < _this.config.arrayObj.length; i++) {
							if(_this.config.arrayLockObj[i]){
								continue
							}
							_this.config.arrayIndexObj[i] += _this.config.arrayTimeObj[i];
							if (Math.abs(_this.config.arrayIndexObj[i]) < Math.abs(_this.config.arrayObj[i])) {
								$('#'+_this.config.id+' .numberLi').eq(i).find('.num').html(Math.ceil(_this.config.arrayIndexObj[i]));
							}
							if (Math.abs(_this.config.arrayIndexObj[i]) - Math.abs(_this.config.arrayObj[i]) >= 0) {
								//console.info(_this.config.arrayIndexObj[i],_this.config.arrayTimeObj[i],new Date()-_this.config.begin);//计算时间
								$('#'+_this.config.id+' .numberLi').eq(i).find('.num').html(_this.config.arrayObj[i]);
								_this.config.arrayLockObj[i] = true;
							}
						}
						if (_this.config.arrayLockObj.every(item => {return item}) && window.counterTimer) {
							clearInterval(window.counterTimer[time_in_id]);
						}
						
					}, 100);
				}
		    }
		    //绑定滚动事件触发，进入可视范围后开始计数功能
		    Timeing.prototype.bindLoad = function(config){
		    	var _this = this;
		    	if(($(window).height() + $(window).scrollTop()) > $("#"+_this.config.id).offset().top) {
					_this.getNumFun();
				}
				$("#"+_this.config.id).one("appear", function() {
					_this.getNumFun();
				});
                let fullpageObj = $("#"+_this.config.id).parents('.fullpage_div');
                if(fullpageObj &&fullpageObj.length>0 && !fullpageObj.hasClass('active')){ //存在于滚屏页面并且不是第一屏
                    if(!_this.config.start){ //没开始过
                        // 滚屏--鼠标滚动时
                        $(window).on("mousewheel DOMMouseScroll", function (e) {
                            var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
                            if(fullpageObj.hasClass('active')){ _this.triggerScroll(); }
                        })
                        // 滚屏--鼠标点击切换时
                        $("#fp-nav>ul>li").click(function(){
                            console.log('点击点击');
                            setTimeout(function(){
                                if(fullpageObj.hasClass('active')){ _this.triggerScroll(); }
                            },50);
                        });
                        // 滚屏--手机滑动
                        $('body').on('touchmove',function(){
                            if(fullpageObj.hasClass('active')){ _this.triggerScroll(); }
                        });
                    }
                }
				$(window).bind("scroll", function(event) {
					var fold;
					if(!_this.config.start){
						fold = $(window).height() + $(window).scrollTop();
						if(fold >= $("#"+_this.config.id).offset().top) {
							_this.triggerScroll();
						}
					}
				});
		    }
            //滚屏触发事件
            Timeing.prototype.triggerScroll = function(config){
            	var _this = this;
                _this.config.begin = new Date();
                _this.config.start = true;
                _this.getNumFun();
            }
		    var timeingcounter_style_3_1691055682738 = new Timeing({
		            'timeNum':30,
		            'id':'counter_style_3_1691055682738'});
		    timeingcounter_style_3_1691055682738.init();
		    timeingcounter_style_3_1691055682738.bindLoad();
		}
	});


//=== viewid:newsList_style_04_1555926962597 ===//
//--
				$(function(){
					var viewid="newsList_style_04_1555926962597";
					var sys_url="viewid=newsList_style_04_1555926962597&name=newsList&style=style_04&langid=0&pageid=611877&viewCtrl=newsList&isfb=1";
					var moreParams='';
					if(typeof(history.pushState) != 'undefined'){
						var hstate=JSON.stringify(history.state);
						if(hstate!='null'&& hstate!=null){
							eval('var hjson = ' + hstate);
							moreParams=hjson.moreParamsnewsList_style_04_1555926962597;
						}
					}
					RequestURL(viewid,sys_url,moreParams);
				});
			//--

//=== viewid:newsList_style_04_1690206459448 ===//
var sys_url_newsList_style_04_1690206459448="viewid=newsList_style_04_1690206459448&name=newsList&style=style_04&langid=0&pageid=611877&viewCtrl=newsList";

//=== viewid:newsList_style_04_1690206459448 ===//

				var subpage = 0;
				$('#newsList_style_04_1690206459448 #page_set').blur(function(){
					if($(this).val() > 9){
						subpage = 9;
						$(this).val(9);
					}else if( $(this).val() <= 0){
						$(this).val(1);
						subpage = 1;
					}else{
						subpage = $(this).val();
					}
					$('#newsList_style_04_1690206459448 #page_set').next('.page_submit').attr('onclick',"RequestURL('newsList_style_04_1690206459448', sys_url_newsList_style_04_1690206459448, 'News_page="+subpage+"&')");
				});	
				

//=== viewid:newsList_style_04_1690206459448 ===//
//--
				$(function(){
					var viewid="newsList_style_04_1690206459448";
					var sys_url="viewid=newsList_style_04_1690206459448&name=newsList&style=style_04&langid=0&pageid=611877&viewCtrl=newsList&isfb=1";
					var moreParams='';
					if(typeof(history.pushState) != 'undefined'){
						var hstate=JSON.stringify(history.state);
						if(hstate!='null'&& hstate!=null){
							eval('var hjson = ' + hstate);
							moreParams=hjson.moreParamsnewsList_style_04_1690206459448;
						}
					}
					RequestURL(viewid,sys_url,moreParams);
				});
			//--

//=== viewid:image_style_25_1685444546180 ===//

		let timerimage_style_25_1685444546180;
		let timer2image_style_25_1685444546180;
		let canTurnimage_style_25_1685444546180=1;
        let displayNumimage_style_25_1685444546180 = 5;  //显示个数
        let centerNumimage_style_25_1685444546180 = 3;  //当前位置
        let totleNumimage_style_25_1685444546180 = 20;//总量
        let noClickingimage_style_25_1685444546180 = 0;
		            timer2image_style_25_1685444546180 = setTimeout(function(){
                setClassLinearimage_style_25_1685444546180();   // 添加过渡
                clearTimeout(timer2image_style_25_1685444546180);
            },10);
			turnNextTimevalimage_style_25_1685444546180();
		        // 循环 跳到下一张图片
        function turnNextTimevalimage_style_25_1685444546180(){
        	timerimage_style_25_1685444546180 = setTimeout(function(){
        		turnNextimage_style_25_1685444546180();
        		turnNextTimevalimage_style_25_1685444546180();
        	},3 * 1000 + 1010);
        }
                    // 点击切换按钮事件
            $('#image_style_25_1685444546180 .controls_icon').click(function(){
                if(canTurnimage_style_25_1685444546180==1){
                    clearTimeout(timerimage_style_25_1685444546180);
                    if($(this).hasClass('next_icon')){ turnNextimage_style_25_1685444546180(); }
                    else{ turnPrevimage_style_25_1685444546180(); }
                    turnNextTimevalimage_style_25_1685444546180();
                }
            });
                            // 点击图片切换事件
            $('#image_style_25_1685444546180 .imgStyle_25 .imgTBoxArea').click(function(){
                let index = $(this).parents('.item.modSet').index();
                let centerIndex = $('#image_style_25_1685444546180 .imgStyle_25 .center_item').index();
                let turnTimes = index - centerIndex;
                clearTimeout(timerimage_style_25_1685444546180);
                if(turnTimes<0){
                    turnTimes = -turnTimes;
                    turnPrevimage_style_25_1685444546180(turnTimes);
                }else if(turnTimes>0){
                    turnNextimage_style_25_1685444546180(turnTimes);
                }
                turnNextTimevalimage_style_25_1685444546180();
            });
                // 跳到下一张图片，times/跳转次数，totletime/过渡时间是否减半
		function turnNextimage_style_25_1685444546180(times){
            if(noClickingimage_style_25_1685444546180) return;
            noClickingimage_style_25_1685444546180 = 1;
             if(!times) times = 1;
			canTurnimage_style_25_1685444546180=0;
            let tabKey = $('#image_style_25_1685444546180 .item.center_item').attr('tabKey');
            let nextKey = parseInt(tabKey)+times+1;
        	$('#image_style_25_1685444546180 .item').css('transition-duration','1s');
            for(let i=1;i<=times;i++){
                $('#image_style_25_1685444546180 .item:nth-child('+i+')').addClass('zero hide_item').removeClass('normal_item prev');
                let shownext = displayNumimage_style_25_1685444546180+i;
                $('#image_style_25_1685444546180 .item:nth-child('+shownext+')').removeClass('hide_item').addClass('normal_item next');
            }
			$('#image_style_25_1685444546180 .item.center_item').removeClass('center_item').addClass('normal_item prev');
            let nextCenter = centerNumimage_style_25_1685444546180+times;
            $('#image_style_25_1685444546180 .item:nth-child('+nextCenter+')').addClass('center_item').removeClass('normal_item next');
            if(nextKey>totleNumimage_style_25_1685444546180){nextKey = nextKey - totleNumimage_style_25_1685444546180;}
            contTurnimage_style_25_1685444546180(nextKey);
			setTimeout(function(){
				$("#image_style_25_1685444546180 .zero").appendTo($("#image_style_25_1685444546180 .wrap_ul")).removeClass('zero');
				$('#image_style_25_1685444546180 .item').css('transition-duration','0s');
				canTurnimage_style_25_1685444546180=1;
                noClickingimage_style_25_1685444546180 = 0;
			},1010);
		}
        
        // 跳到上一张图片，times/跳转次数，totletime/过渡时间是否减半
        function turnPrevimage_style_25_1685444546180(times){
            if(noClickingimage_style_25_1685444546180) return;
            noClickingimage_style_25_1685444546180 = 1;
            if(!times) times = 1;
        	canTurnimage_style_25_1685444546180=0;
        	$('#image_style_25_1685444546180 .item').css('transition-duration','0s');
            for(let i=1;i<=times;i++){
                $("#image_style_25_1685444546180 .item:last-child").prependTo($("#image_style_25_1685444546180 .wrap_ul")).addClass('zero');
            }
        	$('#image_style_25_1685444546180 .item').css('transition-duration','1s');
        	setTimeout(function(){
                let tabKey = $('#image_style_25_1685444546180 .item.center_item').attr('tabKey');
                let nextKey = parseInt(tabKey)-times+1;
                for(let i=1;i<=times;i++){
                    $('#image_style_25_1685444546180 .item:nth-child('+i+')').addClass('normal_item prev').removeClass('zero hide_item');
                    let shownext = displayNumimage_style_25_1685444546180+i;
                    $('#image_style_25_1685444546180 .item:nth-child('+shownext+')').removeClass('normal_item next').addClass('hide_item');
                }
                let nextCenter = $('#image_style_25_1685444546180 .item.center_item').index()-times+1;
        		$('#image_style_25_1685444546180 .item.center_item').addClass('normal_item next').removeClass('center_item');
        		$('#image_style_25_1685444546180 .item:nth-child('+nextCenter+')').removeClass('normal_item prev').addClass('center_item');
                if(nextKey<=0){nextKey = nextKey + totleNumimage_style_25_1685444546180;}
                contTurnimage_style_25_1685444546180(nextKey);
        	},10);
        	setTimeout(function(){
        		canTurnimage_style_25_1685444546180=1;
                noClickingimage_style_25_1685444546180 = 0;
        	},1010);
        }
        
        function contTurnimage_style_25_1685444546180(nextKey){
            // 标题简介等淡入
            $('#image_style_25_1685444546180 .cont_view .cont_item').fadeOut(0);
            $('#image_style_25_1685444546180 .cont_view .cont_item:nth-child('+nextKey+')').fadeIn(1000);
        }
        function setClassLinearimage_style_25_1685444546180(){
            // 添加过渡，不能直接放到css上，否则开始加载会出现过渡效果
            $('#image_style_25_1685444546180 .imgStyle_25 .item .item_cont').addClass('class_linear');
            $('#image_style_25_1685444546180 .imgStyle_25 .imgTBox .mengceng').addClass('class_linear');
        }
	

//=== viewid:image_style_25_1685444546180 ===//

$(document).ready(function(){
	arrowShow();
	$(window).resize(function(){
		arrowShow();
	});
	// 箭头显示
	function arrowShow(){
		if(window.screen.width<767 || ($('body').width() > 0 && $('body').width() < 767) || navigator.userAgent.indexOf('Mac OS X') != -1){
			$("#image_style_25_1685444546180 .controls_icon .awesome-font").show().siblings().hide();
		}else{
			$("#image_style_25_1685444546180 .controls_icon .awesome-font").hide().siblings().show();
		}
	}
});


//=== viewid:banner_style_04_1685445759436 ===//


$(document).stop().ready(function(){
	var speed = ""+30+""; 
	var itemMove = document.getElementById("banner_style_04_1685445759436imgMove");
	var itemOne = document.getElementById("banner_style_04_1685445759436itemOne");
	var itemTwo = document.getElementById("banner_style_04_1685445759436itemTwo");
	var itemThree = document.getElementById("banner_style_04_1685445759436itemThree");
	itemTwo.innerHTML = itemOne.innerHTML;
	itemThree.innerHTML = itemOne.innerHTML;
	var imgScroll=setInterval(Marquee,speed);

	function Marquee(){

		if(itemTwo.offsetWidth - itemMove.scrollLeft <= 0)
			itemMove.scrollLeft = itemMove.scrollLeft - itemTwo.offsetWidth;
		else{ 
			itemMove.scrollLeft++;
		}
	}
	
	if(typeof(imgLazyloadLib)=="function")imgLazyloadLib($("#banner_style_04_1685445759436imgMove img"));
});


//=== viewid:footerCustom_footerDh_01_1705331651994 ===//

$(function(){
	if($("#footerCustom_footerDh_01_1705331651994 .menuUl").hasClass("noHover")){
		var tabNum = 0;
		$("#footerCustom_footerDh_01_1705331651994 .menuUl>li").find(".Onsub").each(function(){
			tabNum += 1;
			$(this).parent().attr("tabNum",tabNum)
		})
		
	}
})


//=== viewid:footerCustom_footerDh_01_1705331651994 ===//

/*pc,手机显示隐藏*/
function is_mobile(){
	return window.screen.width<767 || ($('body').width() > 0 && $('body').width() < 767);
}
function _checkWindwo(){
	if(is_mobile()){
		$("#footerCustom_footerDh_01_1705331651994 .showmobile").show();
		$("#footerCustom_footerDh_01_1705331651994 .showpc").hide();
	}else{
		$("#footerCustom_footerDh_01_1705331651994 .showmobile").hide();
		$("#footerCustom_footerDh_01_1705331651994 .showpc").show();
	}
}
_checkWindwo();
$(window).resize(function() {
	_checkWindwo();
})