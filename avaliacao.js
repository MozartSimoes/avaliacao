var reDigits = /^\d+$/;

function salvaNumero(){

	let numbers = [];
	let array = new Array();
	
	var numero = $('#numero').val();
	var numerosOrdenados = $('#numerosOrdenados').val();

	if ((numero==''))
	{
		alert('Informe um Número!');
		return false;
	}

	let quebrado = numerosOrdenados.split(",");
	
	for (i = 0; i < quebrado.length; i++) {
		if (quebrado[i]!='') {
			array.push(parseInt(quebrado[i]))
		}
		if (parseInt(numero)==quebrado[i]) {
			alert('Número já informado!');
			return false;			
		}
	};		

	array.push(parseInt(numero));
	
	array.sort((a,b) => {
		if(a>b) return 1;
		if(a<b) return -1;
		return 0;
	});
	
	$('#numerosOrdenados').val(array);
	$('#numero').val('');
}

function onlynumber(evt) {
   var theEvent = evt || window.event;
   var key = theEvent.keyCode || theEvent.which;
   key = String.fromCharCode( key );
   //var regex = /^[0-9.,]+$/;
   var regex = /^[0-9.]+$/;
   if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
   }
}

function salvarArquivo() {
	
	var JsonObject, jsArray = [];
	
	var numerosOrdenados = $('#numerosOrdenados').val();
	
	if (numerosOrdenados=='')
	{
		alert('Para salvar arquivo informe os números!');
		return false;
	}
	
	let quebrado = numerosOrdenados.split(",");
	
	for (i = 0; i < quebrado.length; i++) {
		if (quebrado[i]!='') {
			jsArray.push(parseInt(quebrado[i]))
		}
	};

	JsonObject = JSON.stringify(jsArray);

	var blob = new Blob([JsonObject], {
	type: "text/plain;charset=utf-8"
	});
	saveAs(blob, "arquivo_questao_2.txt");

	alert('arquivo_questao_2.txt salvo na pasta Downloads');
}

	function pesquisarCEP() {
		
		var cep = $('#cep').val();
		if (cep=='')
		{
			alert('Para pesquisar informe o CEP!');
			return false;
		}	
		
		$.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

			if (!("erro" in dados)) {
				$("#rua").val(dados.logradouro);
				$("#bairro").val(dados.bairro);
				$("#cidade").val(dados.localidade);
				$("#uf").val(dados.uf);
				$("#ibge").val(dados.ibge);
			} 
			else {
				limpa_formulário_cep();
				alert("CEP não encontrado.");
			}
		})
		 $('#cep').val('');
	}

	function limpa_formulário_cep() {
		// Limpa valores do formulário de cep.
		$("#rua").val("");
		$("#bairro").val("");
		$("#cidade").val("");
		$("#uf").val("");
		$("#ibge").val("");
	}
	
	function calcularPerfeito() {
		
		var soma=0;
		var y=1;
		var metade=0;
		
		var valor = $('#valor').val();
		if (valor=='')
		{
			alert('Informe o valor!');
			return false;
		}	
		
		metade = valor/2;
		
		while (y<=metade) {
			if ((valor % y) == 0) {
				soma = soma + y
			}
			y=y+1;
		}
		if (soma == valor) {
			alert('NÚMERO INFORMADO É PERFEITO!');
		}else{
			alert('NÚMERO INFORMADO NÃO É PERFEITO!');
		}
	}
	
	function calcularTabuada() {
		var fat;
		$('#tabela-adicionar').html('');
		let arrayTabuada = new Array();
		var x = 10;
		var y = 1;
		var result;
		var numeroTabuada = $('#numeroTabuada').val();
		if (numeroTabuada=='')
		{
			alert('Informe o Número!');
			return false;
		}	
		
		var fator = $('#fator option:selected').val();
		
		if (fator=='0')
		{
			alert('Informe o fator!');
			return false;
		}
		
		while (y<=x) {
			if (fator=='1'){
				result = numeroTabuada + y;	
				fat = "+";
			}else if (fator=='2') {
				result = numeroTabuada - y;
				fat = "-";
			}else if (fator=='3') {
				result = numeroTabuada * y;
				fat = "*";
			}else if (fator=='4') {
				result = numeroTabuada / y;
				fat = "/";
			}
						
			$('#tabela-adicionar').append("<tr><td>" + numeroTabuada + "</td><td>" + fat + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
			y++;
		}
	};
		

		
	