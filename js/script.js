$(document).ready(function(){"use strict";$(window).scroll(function(){500<=$(this).scrollTop()?$("#toTop").fadeIn(100):$("#toTop").fadeOut(100)}),$("#toTop").click(function(){$("html, body").animate({scrollTop:0},0)}),$("header .navbar-toggler").on("click",function(){$(this).hasClass("collapsed")?$(this).removeClass("close"):$(this).addClass("close")}),$(".navbar-collapse.collapse").mouseleave(function(){$(this).removeClass("show",1e3),$(".navbar-toggler").removeClass("close",1e3)}),$(window).scroll(function(){5<=$(window).scrollTop()?($("header").addClass("fixed-header"),$(".top-nav").addClass("fade-top-nav"),$("section.top-nav .data-user-popup").slideUp(300),$("section.top-nav .user-popup-buttons").slideUp(300),$("section.top-nav .part.other .icon.lang .dropdown-lang").slideUp(300)):($("header").removeClass("fixed-header"),$(".top-nav").removeClass("fade-top-nav"))}),$(".clinics-carousel").owlCarousel({loop:!0,margin:20,nav:!1,items:5,rtl:!0,navText:["<i class='bi bi-arrow-left'></i>","<i class='bi bi-arrow-right'></i>"],responsive:{0:{items:2},600:{items:4},1e3:{items:5}}}),$("#datetimepicker").datetimepicker({ownerDocument:document,contentWindow:window,value:"",rtl:!1,format:"Y/m/d H:i",format:"d.m.Y H:i",formatTime:"H:i",formatDate:"Y/m/d",startDate:!1,step:60,step:60,monthChangeSpinner:!0,closeOnDateSelect:!1,closeOnTimeSelect:!0,closeOnWithoutClick:!0,closeOnInputClick:!0,openOnFocus:!0,timepicker:!0,datepicker:!0,weeks:!1,defaultTime:!1,defaultDate:!1,minDate:!1,maxDate:!1,minTime:!1,maxTime:!1,minDateTime:!1,maxDateTime:!1,allowTimes:[],opened:!1,initTime:!0,inline:!1,inline:!0,theme:"",touchMovedThreshold:5,onSelectDate:function(){},onSelectTime:function(){},onChangeMonth:function(){},onGetWeekOfYear:function(){},onChangeYear:function(){},onChangeDateTime:function(){},onShow:function(){},onClose:function(){},onGenerate:function(){},withoutCopyright:!0,inverseButton:!1,hours12:!1,next:"xdsoft_next",prev:"xdsoft_prev",dayOfWeekStart:0,parentID:"body",timeHeightInTimePicker:25,todayButton:!0,prevButton:!0,nextButton:!0,defaultSelect:!0,scrollMonth:!0,scrollTime:!0,scrollInput:!0,lazyInit:!1,mask:!1,validateOnBlur:!0,allowBlank:!0,yearStart:1950,yearStart:2021,yearEnd:2050,yearEnd:2025,monthStart:0,monthEnd:11,style:"",id:"",fixed:!1,roundTime:"round",className:"",weekends:[],highlightedDates:[],highlightedPeriods:[],allowDates:[],allowDateRe:null,disabledDates:[],disabledWeekDays:[],yearOffset:0,beforeShowDay:null,enterLikeTab:!0,showApplyButton:!1,lang:"en",startDate:new Date,defaultDate:new Date})});