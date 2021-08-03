function updater(){
				$("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
				document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
			}	
			$(".headerButton").hover(function(){
				if($(this).hasClass("activeButton")){
					$(this).addClass("activeHover");
				}
				else{
					$(this).addClass("hoverbutton");
				}
			},function(){
				if($(this).hasClass("activeHover")){
					$(this).removeClass("activeHover");
				}
				else{
					$(this).removeClass("hoverbutton");
				}
				
			});
			$(".headerButton").click(function(){
				$(this).toggleClass("activeButton");
				$(this).toggleClass("hoverbutton");
				$(this).toggleClass("activeHover");
				var PanelId=$(this).attr("id") + "Panel";
				$("#"+PanelId).toggleClass("hiddenPanel");
				var numPanel = 4-$('.hiddenPanel').length;
				$(".panel").width(($(window).width()/numPanel)-5);
			});
			$(".panel").height($(window).height()- $("#header").height()-15);
			$(".panel").width(($(window).width()/2)-2);
			$("iframe").contents().find("html").html($("#htmlPanel").val());
			updater();
			$("textArea").on('change keyup paste', function(){
				updater();	
			});