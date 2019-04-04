function addPericia(element, atributo) {
    var node = document.createElement("div");
    node.className = "row pericia pericia" + atributo;
    node.innerHTML = '<div class="col-1"><input type="checkbox"></div>' +
            '<div class="col-3"><input type="text" class="bordasfinas" style="max-width:100%"></div>' +
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
    var node = document.createElement("div");
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
    var node = document.createElement("div");
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
    var node = document.createElement("div");
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
	alert(element.parentElement.parentElement.lastChild.innerHTML);
}
