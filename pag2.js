function CriaCartao(categoria, pergunta, resposta){
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML = `
    <div class="conteudo-cartao">
        <h3>${categoria}</h3>
        <div class="pergunta-cartao" onclick="MostrarRresposta"(this)>
            <p>${pergunta}</p>
        </div>
        <div class="resposta-cartao">
            <p>${resposta}</p>
        </div>
    </div>
    `
    let respostavisivel= false;
    function viracartao(){
        respostavisivel= !respostavisivel;
        cartao.classList.toggle("active", respostavisivel);
    }
    
    cartao.addEventListener('click', viracartao);
    
    container.appendChild(cartao);
    }

    function MostrarRresposta(card){
        const resposta = card.querySelector('resposta-cartao');
        if(resposta.style.display === 'none'){
            resposta.style.display = 'block'

        }
        else{
            resposta.style.display = 'none'

        }

        


    }