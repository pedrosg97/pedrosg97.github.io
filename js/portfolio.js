

$(document).ready( 
    function () {   

        
            
            $('[id^="menu_"]').each(function () {
                var $this = $(this);
                var menu_id = $this.attr('id');
                var panel_id = menu_id.replace('menu_', 'panel_');
                
                $("#" + menu_id).click(function () {
                    $(".panel").hide();
                    $("#" + panel_id).show();
                });
                console.log("id_menu::" + menu_id + "  id_panel" + panel_id);
            });

            
            $(".panel").hide();
            $("#panel_main").show();

        }
        
        )