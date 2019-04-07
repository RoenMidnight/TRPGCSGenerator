function addPericia(element, atributo) {

    let node = document.createElement("div");
    node.className = "row pericia pericia" + atributo;
    node.innerHTML = '<div class="col-1"><input type="checkbox"></div>' +
            '<div class="col-3"><input type="text" class="bordasfinas" style="max-width:85%"><i id="delete_pericia" class="fas fa-trash" style="padding-left: 7px; font-size: 1rem; cursor: pointer;"></i></div>' +
            '<div class="col-2"><input type="number" step="1" class="caixaEntrada"></div>' +
            '<div class="col-2"><input type="number" step="1" class="caixaEntrada"></div>' +
            '<div class="col-2"><input type="number" step="1" class="caixaEntrada mod_' + atributo + '" placeholder="' + atributo + '" size="3"></div>' +
            '<div class="col-2"><input type="number" step="1" class="caixaEntrada"></div>';
    if (atributo == "") {
        element.parentElement.parentElement.parentElement.insertBefore(node, element.parentElement.parentElement.parentElement.lastChild);
    } else {
        element.parentElement.parentElement.parentElement.insertBefore(node, element.parentElement.parentElement.nextElementSibling);
    }
}

function addEquipamento(element, targetelement) {
    let node = document.createElement("div");
    node.className = 'row caixaItem';
    node.innerHTML = '<div class="col-1"> <i class="fas fa-angle-down" onclick="ocultarDescricao(this);"></i></div>' +
            '<div class="col-5 nomePericia"><input class="bordas" type="text"/></div>' +
            '<div class="col-2"><input class="bordas" type="number"/></div>' +
            '<div class="col-2"><input class="bordas" type="number"/></div>' +
            '<div class="col-2"><input class="bordas" type="number"/></div>' +
            '<div class="col-12">DESCRIÇÃO<br><textarea class="bordasfinas caixaTextArea descricaoItem"></textarea></div>';
    element.parentElement.parentElement.parentElement.insertBefore(node, document.getElementById(targetelement));
}

function addEquipamentoArma(element, targetelement) {
    let node = document.createElement("div");
    node.className = 'row caixaItem';
    node.innerHTML = '<div class="col-1"> <i class="fas fa-angle-down" onclick="ocultarDescricao(this);"></i></div>' +
            '<div class="col-3 nomePericia"><input class="bordas" type="text"/></div>' +
            '<div class="col-2"><input class="bordas" type="number"/></div>' +
            '<div class="col-2"><input class="bordas" type="number"/></div>' +
            '<div class="col-2"><input class="bordas" type="number"/></div>' +
            '<div class="col-2"><input class="bordas" type="number"/></div>' +
            '<div class="col-12">DESCRIÇÃO<br><textarea class="bordasfinas caixaTextArea descricaoItem"></textarea></div>';
    element.parentElement.parentElement.parentElement.insertBefore(node, document.getElementById(targetelement));
}

function addEquipamentoArmadura(element, targetelement) {
    let node = document.createElement("div");
    node.className = 'row caixaItem';
    node.innerHTML = '<div class="col-1"> <i class="fas fa-angle-down" onclick="ocultarDescricao(this);"></i></div>' +
            '<div class="col-3 nomePericia"><input class="bordas" type="text"/></div>' +
            '<div class="col-2"><input class="bordas" type="number"/></div>' +
            '<div class="col-3"><input class="bordas" type="number"/></div>' +
            '<div class="col-3"><input class="bordas" type="number"/></div>' +
            '<div class="col-12">DESCRIÇÃO<br><textarea class="bordasfinas caixaTextArea descricaoItem"></textarea></div>';
    element.parentElement.parentElement.parentElement.insertBefore(node, document.getElementById(targetelement));
}

function ocultarDescricao(element) {
	$(element.parentElement.parentElement.lastChild).toggle();
}

$(document).on('click','#delete_pericia',(function(){

    let interno = $(this);

    bootbox.confirm(
        {
            message: "Deseja remover essa perícia?", 
            buttons: {
                confirm: {
                    label: 'Sim',
                    className: 'btn-success'
                },
                cancel: {
                    label: 'Não',
                    className: 'btn-danger'
                }
            },
            callback: function(result){ 
                if(result) { interno.parent().parent().remove(); }
        }
    });
}));

let changePlaceholder = () =>{
    $(document).find('.mod_for').attr('placeholder','for');
    $(document).find('.mod_des').attr('placeholder','des');
    $(document).find('.mod_con').attr('placeholder','con');
    $(document).find('.mod_int').attr('placeholder','int');
    $(document).find('.mod_sab').attr('placeholder','sab');
    $(document).find('.mod_car').attr('placeholder','car');
}

changePlaceholder();
