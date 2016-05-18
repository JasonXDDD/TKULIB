/**
 * Created by JasonXDDD on 2016/1/14.
 */


var Container = $('.container');

function CreateTitle(data) {
    var title = '<div class="row title"><div class="col-12 font-thin">' + data + '</div></div><!--title-row-->';
    Container.append(title);
}

function CreateSubtitle(data) {
    var title = '<div class="row subtitle"><div class="col-12 font-thin">' + data + '</div></div><!--subtitle-row-->';
    Container.append(title);
}

function CreateContent(data) {
    var title = '<div class="row content"><div class="col-12 font-thin">' + data + '</div></div><!--content-row-->';
    Container.append(title);
}

function CreateHr() {
    var title = '<div class="row line"><div class="hr">&nbsp;</div></div>'
    Container.append(title);
}

function CTextfield(data) {
    CreateSubtitle(data.title);
    CreateContent(data.content);


    var tag = 
    	'<div class="mdl-textfield mdl-js-textfield XDD-comp">' +
    	'<input class="mdl-textfield__input" type="text" id="' + data.name + '">' +
    	'<label class="mdl-textfield__label" for="' + data.name + '">' + 
    		'Text...' + 
    	'</label></div><!-- Simple Textfield -->';
    Container.append(tag);
}

function CNumfield(data) {
    CreateSubtitle(data.title);
    CreateContent(data.content);


    var tag = 
    	'<div class="mdl-textfield mdl-js-textfield XDD-comp">' +
    	'<input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?"' +
    		' id="' + data.name + '">' + 
    	'<label class="mdl-textfield__label" for="' + data.name + '">' + 
    		'Number...</label>' + 
    	'<span class="mdl-textfield__error">' + 
    		'Input is not a number!' + 
    	'</span></div><!-- Numeric Textfield -->';
    Container.append(tag);
}

function CTextArea(data) {
    CreateSubtitle(data.title);
    CreateContent(data.content);


    var tag = 
    	'<div class="mdl-textfield mdl-js-textfield XDD-comp">' +
    		'<textarea class="mdl-textfield__input" type="text" rows= "3" id="' + data.name + '">' +
    		'</textarea><label class="mdl-textfield__label" for="' + data.name + '">' +
    			'Text lines...</label>' +
    		'</div><!-- Floating Multiline Textfield -->';
    Container.append(tag);
}

function CCheckbox(data) {
    CreateSubtitle(data.title);
    CreateContent(data.content);


    var tag = '<div class="btnbox">';

    for (i = 0; i < data.check.length; i++) {
        tag = tag +
            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect XDD-btn"'
            	' for="' + data.name + '-' + i + '">'
            '<input type="checkbox"'
            	' id="' + data.name + '-' + i + '"'
            	' class="mdl-checkbox__input">'
            '<span class="mdl-checkbox__label">' + 
           		data.check[i] + 
            '</span></label>';
    }

    tag = tag + '</div><!--checkbox-->';

    Container.append(tag);
}


function CRadiobox(data) {
    CreateSubtitle(data.title);
    CreateContent(data.content);


    var tag = '<div class="btnbox">';

    for (i = 0; i < data.radio.length; i++) {
        tag = tag +
            '<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect XDD-btn"' +
            	' for="' + data.name + '-' + i + '">' +
            '<input type="radio" class="mdl-radio__button"' +
            	' id="' + data.name + '-' + i + '"' +
            	' name="' + data.name + '"' +
            	' value="' + i + '">' +
            '<span class="mdl-radio__label">' +
            	data.radio[i] +
            '</span></label>';
    }

    tag = tag + '</div><!--Radiobox-->';

    Container.append(tag);
}

function CRange(data) {
    CreateSubtitle(data.title);
    CreateContent(data.content);


    var tag = 
    	'<div class="XDD-comp XDD-slider">' +
    	'<div class="font-semibold content">' + 
    	data.min + '</div>' + 
    	'<input class="mdl-slider mdl-js-slider" type="range" onchange="getRangeValue()" ' +
    	' id="' + data.name + '"' +
    	' min="' + data.min + '"' +
    	' max="' + data.max + '"' +
    	' value="' + data.min + '"' +
    	' tabindex="0">' +
    	'</div><!-- Default Slider -->';

    Container.append(tag);
}

function CMenu(data) {
    CreateSubtitle(data.title);
    CreateContent(data.content);

    var tag = 
    	'<div class="XDD-comp XDD-menu">' +
    	'<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"' +
    		' id="' + data.name + '">Answer</button>' +
    	'<ul class="mdl-menu  mdl-menu--bottom-left  mdl-js-menu  mdl-js-ripple-effect"' +
    		' for="' + data.name + '"' +
    		' onclick="getMenuValue()">';

    for (i = 0; i < data.menu.length; i++) {
        tag = tag +
            '<li class="mdl-menu__item">' + data.menu[i] + '</li>';
    }

    tag = tag + '</ul></div><!-- Left aligned menu below button -->';

    Container.append(tag);

}

function ChangeBackground(data) {
    var bg = document.getElementById('bg');
    bg.style.backgroundImage = "url(" + data.src + ")";
}

function CImage(data) {
    var tag = '<div><img class="XDD-img" src="' + data.src + '" width="80%"></div>';
    Container.append(tag);
}

function Show(data) {

    var get = JSON.parse(data);

    for (var i in get) {
        switch (get[i].type) {
            case 'title':
                CreateTitle(get[i].title);
                break;
            case 'subtitle':
                CreateSubtitle(get[i].subtitle);
                break;
            case 'content':
                CreateContent(get[i].content);
                break;
            case 'textfield':
                CTextfield(get[i]);
                break;
            case 'numfield':
                CNumfield(get[i]);
                break;
            case 'textarea':
                CTextArea(get[i]);
                break;
            case 'checkbox':
                CCheckbox(get[i]);
                break;
            case 'radiobox':
                CRadiobox(get[i]);
                break;
            case 'range':
                CRange(get[i]);
                break;
            case 'menu':
                CMenu(get[i]);
                break;
            case 'background':
                ChangeBackground(get[i]);
                break;
            case 'image':
                CImage(get[i]);
                break;
            case 'linebar':
                CreateHr();
                break;
        }
    }

}


function Get() {

    //jQuery post
    $.ajax({
        url: 'js/sampleGet.json',
        type: 'GET',
        dataType: 'text',
        success: function(data, textStatus, xhr) {
            console.log('success');
            Show(data);
        },

        error: function(data, textStatus, xhr) {
            console.log(textStatus);
        }
    });

}

