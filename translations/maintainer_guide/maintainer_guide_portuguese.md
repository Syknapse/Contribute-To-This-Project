# Guia dos Mantenedores

Esse guia é para aqueles que gostariam de se juntar ao projeto como mantenedores, para ajudar a administrar e manter o projeto para a comunidade. (Esse não é um guia para **colaboradores iniciantes**)

## Objetivos

Nosso objetivo principal é dar aos contribuintes o feedback mais rápido possível desde o ponto em que eles fazem o seu pull request. Isso significa primariamente fazer avaliações de códigos, e incorporando as PRs aceitadas.  
Além disso nós podemos manter o projeto tendo certeza de que tudo está funcionando corretamente e está o mais prestativo e proveitoso o possível para nossos contribuidores.

## Quem pode contribuir?

Qualquer pessoa com um pouco de habilidade em Git e GitHub. Você não precisa ser um especialista, esse guia deve ajudar até mesmo os iniciantes. Esse é um projeto ativo que recebe contribuições regulares e ele ajuda muitas pessoas a fazer a sua primeira contribuição ao open source. Ser um mantenedor nesse projeto ajuda a ter certeza de que ele continue a dar aos contribuintes uma agradável experiência inicial e encorajando-os a contribuir mais.

Você pode decidir dedicar muito ou pouco tempo a com isso. Entre nós podemos esperançosamente manter o mesmo funcionando sem percalços.

## Metodologia

- Vá para a seção de pull request do projeto, e começe com o pull request mais antigo que não está em estado de 'mudanças requisitadas'.
- Abra uma PR e vá para a aba de arquivos alterados e faça uma revisão do código.
- Verifique a PR, e se certifique de que ela segue as especificações do tutorial.
- Garanta que o HTML, os links, e os dados estão corretos. Também garanta que o cartão está posicionado no inicio do arquivo, onde ele deve estar.
- Em seguida procure por quaisquer conflitos. Incorpore `master` no ramo do PR para resolver os conflitos. Eles geralmente ocorrem quando faz um tempo desde que as integrações anteriores e vários PRs estão usando a mesma versão desatualizada.
- Se esse for o caso resolva o conflito. Geralmente você terá que adicionar o novo cartão no topo dos cartões que foram adicionados desde que a bifurcação foi criada.
- Se o restante estiver ok, aprove a PR, e escreva uma mensagem ao contribuinte agradecendo pela contribuição do mesmo (lembrando que eles são iniciantes e gostariam de encorajamento).
- Insira a PR em `master`.

### Solicitações de modificação

- As vezes há problemas com a PR que devem ser corrigidos pelo contribuidor como bifurcação incorreta, HTML corrompido, informações pendentes, ou cartão posicionado no local errado. Tudo que envolva não seguir o tutorial corretamente (e não simples conflitos de associação).
- Inicie uma revisão de código no GitHub e solicite mudanças. Tente ser o mais descritivo possível, comente na linha exara, diga a eles qual o problema exatamente e como corrigi-lo, e reforce para eles que essa uma parte normal do processo de revisão de PR's.
- Quando você estiver pronto envie a revisão.
- Fique de olho na conversa para o caso de o contribuidor ter questões seguintes com as quais você pode ajudar. Nosso objetivo é fazer com que todos alcancem a linha de chegada, então tentamos guiar todos pelo percurso até lá.
- Uma vez que eles corrijam o pedido de mudança, o PR pode ser adicionado ao `master`.

Por favor, sempre teste se as mudanças não tenham corrompido o projeto e que a página ativa ainda funcione como esperado. É sempre melhor testar as mudanças localmente antes de inserir e nunca incluir nada que pareça suspeito.

## Ferramentas

Se não houverem muitas PRs acumuladas todos esse porcesso pode ser feito diretamente na página do projeto do GitHub.  
No entanto, não é incomum ter algumas PRs esperando e assim será quando inevitavelmente terão alguns conflitos de inclusão. Você pode usar quaisquer ferramentas com as quais você está familiarizado para ver as diferenças, e consertar conflitos.  
Eu recomendo o uso de uma ferramenta como [GitKraken](https://www.gitkraken.com/download). Ela é visual e permite uma administração mais fácil do projeto quando tem algumas PRs para analisar.  
Baixe o GitKraken, e clone esse projeto. Usando uma combinação do seu editor de código e a ferramenta de solução de conflitos de inclusão integrado do GitKraken te da controle total para rapidamente passar por PR's, fixando conflitos e incorporando.

O projeto tem o Prettier instalado para garantir que independetemente de como o contribuidor envie sua PR, o guia de estilo será reforçado. Dessa maneira o projeto é sempre mantido com a mesma indentação e estilo.  
Se você notar que o arquivo HTML está com visual bagunçado rode `npx prettier --write index.html` na raiz do projeto. Esse comando irá tentar formatar o arquivo e se não conseguir irá mostrar os erros. Ás vezes alguma tag HTML que está ausente ou corrompida é agregada por engano e essa é uma boa maneira de avistar e corrigir isso.

Se você estiver em dúvida, você pode sempre me mencionar ou aos outros mantenedores na própria PR ou me mandar uma DM no [Twitter](https://twitter.com/Syknapse)

## Junte-se a nós

Junte-se a nós para ajudar a crescer este projeto juntos. Entre em contato comigo no [Twitter](https://twitter.com/Syknapse) e me envio seu usuário do GitHub para que eu possa te adicionar.
[![Discord](https://badgen.net/discord/online-members/tWkvS4ueVF?label=Join%20Our%20Discord%20Server&icon=discord)](https://discord.gg/tWkvS4ueVF 'Join our Discord server!')
