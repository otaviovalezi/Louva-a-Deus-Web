		var titulo = document.querySelector(".titulo");
		titulo.textContent = "Aparecida Nutricionista";
		var pacientes = document.querySelectorAll(".paciente");
		
		for (var i = 0; i < pacientes.length; i++) {
   			
			console.log(pacientes[i]);
			var paciente = pacientes[i];

			var tdPeso = paciente.querySelector(".info-peso");
			var peso = tdPeso.textContent;

			var tdAltura = paciente.querySelector(".info-altura");
			var altura = tdAltura.textContent;

			var alturaEhValida = true;
			var pesoEhValido = true;

			var tdImc = paciente.querySelector(".info-imc");

			if (peso <= 0 || peso >= 1000) {
	    			console.log("Peso inválido!");
	    			pesoEhValido = false;
	    			tdImc.textContent = "Peso inválido!";
				paciente.classList.add("paciente-invalido");
			}

			if (altura <= 0 || altura >= 3.00){
				console.log("Altura inválida!");
				alturaEhValida = false;
				tdImc.textContent = "Altura inválida!";
				paciente.classList.add("paciente-invalido");
			}

			if (alturaEhValida && pesoEhValido){
	    			var imc = peso / (altura * altura);
	    			tdImc.textContent = imc.toFixed(2);
			}
	
		}

		var valorCampoInput = "";
		var adornos = "O Pedro é gay";

		var botaoAdicionar = document.querySelector("#adicionar-paciente");
		botaoAdicionar.addEventListener("click", function(){
		    console.log("Oi, cliquei no botão.");
		});

		var inputNome = document.querySelector("#nome");
			console.log(inputNome);

		var inserirResposta = false;
		var contadorCaracteres = 0;
		var resposta = "";

		inputNome.addEventListener( 'input', function() { 

			valorCampoInput = inputNome.value;
 			
			if (inserirResposta == true){
				resposta += valorCampoInput[valorCampoInput.length-1];
				inputNome.value = valorCampoInput.slice(0,valorCampoInput.length-1) + adornos[resposta.length-1];
			}
			
			if (valorCampoInput[valorCampoInput.length-1] == '['){
				inputNome.value = valorCampoInput.slice(0,valorCampoInput.length-1);
				valorCampoInput = inputNome.value;
				
			
				if (inserirResposta == false){
					inserirResposta = true;
									
				} 
				else { 
					inserirResposta = false;
				} 	
			
			}
			
			
			console.log('input changed to: ', inputNome.value);
			console.log(resposta);
			console.log(inserirResposta);
			contadorCaracteres += 1;
		});  
		
			

				
		

		
