function fusionCalculateResponsiveTypeValues(e,t,i,n){fusionSetOriginalTypographyData(n)}function fusionSetOriginalTypographyData(e){var t="string"==typeof e&&-1!==e.indexOf("fusion-slider"),i=fusion.getElements(e);jQuery(i).each(function(e,i){var n,o,s,a,r;n=fusionTypographyVars.typography_factor,i.classList.contains("fusion-responsive-typography-calculated")?i.style.getPropertyValue("--fontSize")&&""!==i.style.getPropertyValue("--fontSize")||i.classList.remove("fusion-responsive-typography-calculated"):null!==i.closest(".fusion-slider-revolution")||null!==i.closest(".rev_slider")||null!==i.closest("#layerslider-container")||null!==i.closest(".ls-avada.ls-container")||null!==i.closest(".fusion-slider-container")&&!t||(s=window.getComputedStyle(i),a=!!s["font-size"]&&parseFloat(s["font-size"]),r=!!s["line-height"]&&parseFloat(s["line-height"]),!1!==a&&!1!==r&&(r=Math.round(r/a*100)/100,i.style.setProperty("--fontSize",a),i.setAttribute("data-fontsize",a),i.style.lineHeight=r,i.setAttribute("data-lineheight",s["line-height"]),window.fusionBaseFontSize||(window.fusionBaseFontSize=getComputedStyle(document.documentElement).getPropertyValue("--base-font-size")),t&&(void 0!==(o=jQuery(i).closest(".tfs-slider")).data("typo_factor")&&(n=o.data("typo_factor")),i.style.setProperty("--typography_sensitivity",jQuery(i).closest(".tfs-slider").data("typo_sensitivity"))),window.fusionBaseFontSize*n>a&&i.style.setProperty("--minFontSize",a),jQuery(i.querySelectorAll(".fusion-animated-texts-wrapper")).each(function(e,t){var i=window.getComputedStyle(t),n=!!i["font-size"]&&parseFloat(i["font-size"]),o=!!i["line-height"]&&parseFloat(i["line-height"]);t.style.fontSize=n/a+"em",t.style.lineHeight=Math.round(o/n*100)/100}),i.classList.add("fusion-responsive-typography-calculated")))})}function fusionInitTypography(){window.responsiveTypeElements=fusionTypographyVars.elements,0<fusionTypographyVars.typography_sensitivity&&fusionSetOriginalTypographyData(window.responsiveTypeElements)}document.body.classList.contains("fusion-builder-live")?window.onload=fusionInitTypography:fusion.ready(function(){fusionInitTypography()}),document.body.addEventListener("fusion-typography",function(e){var t,i=e.detail.heading,n=e.detail.values,o=fusion.getElements(i);jQuery(o).each(function(e,i){t=window.getComputedStyle(i),""!==i.parentNode.style.fontSize&&i.parentNode.classList.contains("fusion-title")?i.style.fontSize="1em":i.parentNode.getAttribute("data-inline-fontsize")&&i.getAttribute("data-inline-fontsize")?i.style.fontSize=i.getAttribute("data-inline-fontsize"):i.style.fontSize=n["font-size"],i.getAttribute("data-inline-lineheight")&&i.getAttribute("data-inline-lineheight")?i.style.lineHeight=i.getAttribute("data-inline-lineheight"):i.style.lineHeight=n["line-height"],i.setAttribute("data-fontsize",parseFloat(t["font-size"])),i.style.setProperty("--fontSize",parseFloat(t["font-size"])),i.classList.add("fusion-responsive-typography-calculated")})}),jQuery(document).ajaxComplete(function(){0<fusionTypographyVars.typography_sensitivity&&fusionSetOriginalTypographyData(window.responsiveTypeElements)}),jQuery(window).on("fusion-typography-reset",function(e,t){"undefined"!=typeof fusionTypographyVars&&0!==parseFloat(fusionTypographyVars.typography_sensitivity)&&fusionSetOriginalTypographyData(jQuery('div[data-cid="'+t+'"]').find(window.responsiveTypeElements))}),document.body.style.setProperty("--viewportWidth",window.screen.width),window.addEventListener("resize",function(){document.body.style.setProperty("--viewportWidth",window.screen.width)});