class Aula{
    constructor(){
        this.id = 1;
        this.aulas = [];
        
    }

    salvar(){
        let aula = this.lerDados();

        if(this.validaCampos(aula)){
            this.adicionar(aula)
        } 

        this.listaTabela();
        this.cancelar();
    }

    adicionar(aula){
        this.aulas.push(aula);
        this.id++
    }

    listaTabela(){
        let tbody = document.getElementById("tbody");
        tbody.innerText = '';

        for(let i = 0; i < this.aulas.length; i++){
            let tr = tbody.insertRow();
            
            let td_id = tr.insertCell();
            let td_aula = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.aulas[i].id;
            td_aula.innerText = this.aulas[i].nomeAula;
            td_valor.innerText = this.aulas[i].nomeProfessor;

            td_id.classList.add('center');
            td_acoes.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = './img/editar-arquivo.png'
            imgEdit.setAttribute("onClick" , "aula.edit("+JSON.stringify(this.aulas[i])+")")

            let imgDel = document.createElement('img');
            imgDel.src = './img/bin.png'
            imgDel.setAttribute("onClick" , "aula.deletar("+this.aulas[i].id +")")

            td_acoes.appendChild(imgEdit)
            td_acoes.appendChild(imgDel);
        }
    }

    lerDados(){
        let aula = {};

        aula.id = this.id;
        aula.nomeAula = document.getElementById("class").value;
        aula.nomeProfessor = document.getElementById("prof").value; 
        
        return aula;
    }

    validaCampos(aula){
        let msg = '';
        
        if(aula.nomeAula == ''){
            msg += "Digite o nome da aula\n"
        }

        if(aula.nomeProfessor == ''){
            msg += "Digite o nome do professor"
        }

        if(msg != ''){
            alert(msg);
            return false;
        }

        return true
    }

    cancelar(){
        document.getElementById("class").value = '';
        document.getElementById("prof").value = '';
    }

    deletar(id){

        let tbody = document.getElementById("tbody");

        setTimeout(()=>{
            for(let i = 0; i < this.aulas.length; i++){
                if(this.aulas[i].id == id){
                    this.aulas.splice(i, 1);
                    tbody.deleteRow(i);
                    alert("A aula Foi deletada.")
                }
            }
        }, 500);

    }

    edit(dados){
        document.getElementById("class").value = dados.nomeAula
        document.getElementById("prof").value = dados.nomeProfessor
    }
}

var aula = new Aula();