        
            function autoCompleteArea(){
                
                $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
              
                document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
            }
            
            $(".toggleButton").hover(function(){
            
                $(this).addClass("highlighted");
                
            }, function(){
                
                $(this).removeClass("highlighted");
                
            });
            
            $(".toggleButton").click(function(){
                
                $(this).toggleClass("active");
                
                $(this).removeClass("highlighted"); 
                
                var panelId = $(this).attr("id") + "Panel";
                
                $("#" + panelId).toggleClass("hidden");
            
                var numberOfActivePanel = 4 - $(".hidden").length;
                        
                $(".panel").width(($(window).width() / numberOfActivePanel ) - 10);
            });
            
        
            $(".panel").height($(window).height() - $("#header").height() - 5);
                
            $(".panel").width(($(window).width() / 2) - 4);
            
            autoCompleteArea();
            
            $("textarea").on("paste change keyup", function(){
                
                autoCompleteArea();

            });
            