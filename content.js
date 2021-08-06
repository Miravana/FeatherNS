(function() {
	var shifted = false;
	var controlled = false;
	var alternated = false;
	$(document).keydown(function(f) {
		shifted = f.shiftKey;
        controlled = f.ctrlKey;
		alternated = f.altKey;
	});
	$(document).keyup(function(e) {
        if (shifted || controlled || alternated){
			return;
        }
		else {
			if ($("input,textarea").is(":focus")){
				return;
			}
			// Did My Nation Update? (U)
			else if (e.keyCode == 85){
				window.location.href = "https://www.nationstates.net/page=ajax2/a=reports/view=self/filter=change";
			}
            // /] Ban nation (O)
			else if (e.keyCode == 79){
				$("button[name=ban]").trigger("click");
			}
			// Region (W)
			else if (e.keyCode == 87){
				if ($('#paneltitle').length > 0){
					// using Rift
					$('#panel').children('.panelcontent').children('.menu').children('li').children('a')[0].click();
				}
				else{
					// Default theme
					$('#panel').children('ul').children('li').children('a')[1].click();
				}
			}
			// Endorse(S)
			else if (e.keyCode == 83){
				if ($('input[name=action]').val() == "endorse") $('button.endorse').first().trigger('click');
			}
			// Resign/Apply to WA (E)
			else if (e.keyCode == 69){
				e.preventDefault();
				var current_url = $(location).attr('href');
				if (current_url == "https://www.nationstates.net/page=un"){
					$('.button[class="button icon"]').trigger('click');
				}
				else {
					window.location.href = "https://www.nationstates.net/page=un";
				}
			}
			// Go Back (Q)
			else if (e.keyCode == 81){
				window.history.back();
			}
			// Confirm WA Join {R}
			else if (e.keyCode == 82){
					$('.button[class="button primary icon approve big"]').trigger('click');
			}
			// [4] Regional officer functionality (D)
			else if (e.keyCode == 68){
				var current_url = $(location).attr('href');
				var current_nation = $("#loggedin").attr("data-nname");
				// If on the regional control page, open own regional officer page
				if (current_url.indexOf("/page=region_control") !== -1){
					window.location.href = "https://www.nationstates.net/page=regional_officer/nation=" + current_nation;
				}
				// If on on own regional officer page, assign officer role
				else if (current_url.indexOf("/page=regional_officer") !== -1 && current_url.indexOf(current_nation) !== -1) {
					$("input[name=office_name]").val("Join TBH");
					$("input[name=authority_A]").prop("checked", true);
					$("input[name=authority_C]").prop("checked", true);
					$("input[name=authority_E]").prop("checked", true);
					$("input[name=authority_P]").prop("checked", true);
					$("button[name=editofficer]").trigger("click");
				}
				// If on someone else's regional officer page, dismiss them
				else if (current_url.indexOf("/page=regional_officer") !== -1) {
					$("button[name=abolishofficer]").trigger("click");
				}
				// If on none of these pages, open regional control page
				else {
					window.location.href = "https://www.nationstates.net/page=region_control";
				}
			}
			// Move Back to  (B, B)
			else if (e.keyCode == 66){
				var current_url = $(location).attr('href');
				if (current_url == "https://www.nationstates.net/region=devide_by_zero"){
					$('.button[name=move_region], input[name=move_region]').first().trigger('click');
				}
				else {
					window.location.href = "https://www.nationstates.net/region=devide_by_zero";
				}
			}
			// [F] Move
			else if (e.keyCode == 70){
					$(".button[name=move_region], input[name=move_region]").first().trigger("click");
			}
			// Reload A
			else if (e.keyCode == 65){
				window.location.reload()
			}
		}
	});
})();
