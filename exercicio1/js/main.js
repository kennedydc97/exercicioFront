let inputCPF = document.getElementById("cpfPaciente")
let crmMedico = document.getElementById("crmMedico")
let estado = document.getElementById("estado")
let nomeMedico = document.getElementById("nomeMedico")
let dataReceita = document.getElementById("dataReceita")
let qtdCaixas = document.getElementById("qtdCaixas")
let nomePaciente = document.getElementById("nomePaciente")
let dataNasc = document.getElementById("dataNasc")
let sexo = document.getElementById("sexo")
let tipoEnvio = document.getElementById("tipoEnvio")
let btnEnviar = document.getElementById("btnEnviar")
let formularioControlados = document.getElementById("formularioControlados")


inputCPF.addEventListener('keyup', (event) =>{
    if(isNaN(inputCPF.value)){
       inputCPF.value = inputCPF.value.substring(0, (inputCPF.value.length - 1))  
    }
    if(inputCPF.value.length >= 11){
        inputCPF.value = inputCPF.value.substring(0, 11)  
     }
})

btnEnviar.addEventListener('click', (event)=>{
    if(crmMedico.value == "" || crmMedico.value == null || crmMedico.value.length < 4){
        alert("Por favor informe o CRM do médico")
        crmMedico.focus()
        return false;
    }
    if(formularioControlados.estado.selectedIndex == 0){
        alert("Por favor informe o estado do médico")
        estado.focus()
        return false;
    }
    if(nomeMedico.value == "" || nomeMedico.value == null || nomeMedico.value.length < 4){
        alert("Por favor informe o nome do médico")
        nomeMedico.focus()
        return false;
    }
    if(dataReceita.value == "" || dataReceita.value == null){
        alert("Por favor a data da receita")
        dataReceita.focus()
        return false;
    }
    if(qtdCaixas.value == "" || qtdCaixas.value == null){
        alert("Por favor a quantidade de caixas")
        qtdCaixas.focus()
        return false;
    }
    if(nomePaciente.value == "" || nomePaciente.value == null || nomePaciente.value.length < 4){
        alert("Por favor informe o nome do paciente")
        nomePaciente.focus()
        return false;
    }
    if(dataNasc.value == "" || dataNasc.value == null){
        alert("Por favor a data de nascimento")
        dataNasc.focus()
        return false;
    }
    if(sexo.value == "" || sexo.value == null){
        alert("Por favor informe o sexo do paciente")
        sexo.focus()
        return false;
    }
    if(tipoEnvio.value == "" || tipoEnvio.value == null || tipoEnvio.value.length < 4){
        alert("Por favor informe o tipo de envio")
        tipoEnvio.focus()
        return false;
    }
})