---
title: 'SOLID LIKE WATER'
date: '2021-05-16'
---

![Water](/images/water.jpg)

> _"Esvazie sua mente. Torne-se amorfo — como a água._</br> _Água: pode fluir ou chocar-se violentamente._</br> _Seja como a água, meu amigo."_
>
> **Bruce Lee**

A maior parte dos desenvolvedores é capaz de lidar com projetos pequenos sem se preocupar muito com artifícios como _design patterns._ Pra ser sincero, projetos enxutos e coisas como provas de conceito raramente tiram algum benefício dessa complexidade adicional. Dependendo do escopo, pode-se estar tentando _matar uma formiga com um tiro de canhão._

Mas quando a escala do projeto aumenta e existe a perspectiva de que este terá de ser mantido num período de meses ou até anos, sofrendo aprimoramentos e manutenções constantes, **pensar em _design patterns_ se torna inegociável.**

Ao erguer um edifício, não se pensa em começar a trabalhar na alvenaria antes das fundações "para tentar ganhar tempo". Da mesma forma pode ser visto um projeto de software que começa sem planejamento: uma hora ou outra vai ter que derrubar uma parede e começar de novo - a falta de planejamento começa a refletir em retrabalho. E a não ser que você seja adepto da metodologia [Go Horse](https://gohorseprocess.com.br/extreme-go-horse-xgh/), é hora de repensar a forma como se constrói software.

# SOLID

SOLID é uma sigla que representa cinco princípios pensados para o paradigma orientado a objetos. Esses conceitos foram introduzidos primeiramente no ano de 2000 por Robert C. Martin, inspirado em ideias incrementais provenientes de outros arquitetos de software.

Esses princípios surgiram com a premissa de tornar o desenvolvimento de software mais compreensível, flexível e manutenível. Mas como?

Neste artigo vamos ter uma visão geral do que cada letra neste acrônimo significa, entendendo como a aplicação dessas práticas pode transformar uma _codebase_ macarrônica em código que dá gosto de ler e escrever, aumentando a produtividade de todo o time.

## S = Single Responsibility Principle

Este é o Princípio da Responsabilidade Única.

Nas palavras de Martin,

> "Uma classe ou função deve ter uma e apenas uma razão para sofrer alterações."

Ok... isso ainda tá um pouco abstrato. Quando deve sofrer alterações? Por que só uma responsabilidade?

Bom, aqui vai um exemplo nada incomum: você começa o dia de trabalho, pega um ticket pra corrigir um bug, resolve ele tranquilamente, commita e vai fazer seu horário de almoço. Duas horas depois seu superior liga anunciando: "o servidor caiu em produção."

Mas como isso é possível se você acabou de consertar o bug?

Aí que mora o problema: você consertou um bug e criou outro. Cortou uma cabeça da [hidra](https://en.wikipedia.org/wiki/Lernaean_Hydra) e fez com que duas nascessem em seu lugar.

O software deveria ser arquitetado de forma a proteger o programador de si mesmo.

E o Princípo da Responsabilidade Única foca exatamente nisso: a classe tem apenas uma razão para mudar precisamente porque está encarregado de apenas uma funcionalidade. Dessa forma, se há um bug dentro de uma classe, ele começa ali e morre ali, sem impactar classes adjacentes.

## O = Open-Closed Principle

> "Um artefato de software deve estar aberto para extensão mas fechado para modificação."

"Aberto-fechado", dois estados mutualmente exclusivos ao mesmo tempo, huh...? Calma. Esse princípio não é nenhuma [sobreposição quântica](https://en.wikipedia.org/wiki/Schr%C3%B6dinger%27s_cat). Na verdade é bem mais simples do que parece.

Em outras palavras, ele afirma que seu código deve ser escrito de tal forma que ao adicionar, por ex., um novo método a uma classe, este não deve interferir em nada nos métodos que existiam anteriormente.

Portanto, esse artefato de software - a classe - foi estendida com sucesso através do método adicionado, mas isso não interferiu em nada no restante do código que já estava ali escrito, que por sua vez permaneceu "fechado para modificações" neste contexto. Sem refatorações, sem retrabalho para adicionar novas funcionalidades.

## L = Liskov-Substitution Principle

Eu sei. A impressão é que esses nomes continuam ficando maiores e mais complicados. Isso porque você ainda não viu a descrição formal em que esse princípio foi inspirado.

> “Se _q(x)_ é uma propriedade demonstrável dos objetos _x_ de _tipo T_. Então _q(y)_ deve ser verdadeiro para objetos _y_ de _tipo S_ onde _S_ é um _subtipo de T_.”

Prontinho. Vamos para o próximo princípio.

Brincadeiras à parte, você não precisa de um diploma em matemática para entender isso. O equivalente no jargão de programador, parafraseando o livro do Robert é o seguinte:

> "Construa sistemas de software com partes substituíveis em mente. Estas devem aderir a um contrato que permite a substituição entre seus subtipos de forma fluida."

_Como água, meu amigo._ Agora substitua a palavra "contratos" por "interfaces" e você já consegue ter um vislumbre da implementação em linguagens como Java, TypeScript e outras que seguem - ou permitem - o paradigma orientado a objetos.

Dependendo de interfaces, é possível reduzir o acoplamento entre partes do código, facilitando a adição de futuros incrementos e também sua manutenção. Em breve veremos que esse princípio tem uma forte relação de interdependência com a letra 'D' de SOLID.

## I = Interface Segregation Principle

> "Previna que classes dependam de coisas que não precisam."

Esse princípio recomenda que durante a criação de classes, um cuidado especial seja tomado durante a escolha de qual interface será implementada ou qual classe será herdada.

Isso porque muitas vezes pode parecer tentador estender uma classe utilizando uma herança _quase_ que totalmente compatível com a classe filha. No entanto, podem haver um ou mais métodos ali expostos que jamais serão utilizados pela classe que recebe a herança. Esse é uma falha que começa de maneira bem sutil, mas pode se espalhar por todo um projeto silenciosamente, sendo difícil de reverter.

Em resumo: crie classes minimalistas, que possuem apenas os métodos que de fato usam. Elimine tudo que é supérfluo, ainda que seja necessário criar novas interfaces para fazê-lo.

## D = Dependency Inversion Principle

> "1. Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações. </br></br>2. Abstrações não devem depender de detalhes de implementação. São os detalhes de implementação que devem depender de abstrações."

Esta é a última letra da sigla mnemônica SOLID. E como mencionado acima, muitas dessas letras acabam conversando entre si, incentivando práticas que naturalmente levam uma a outra.

No Princípio da Inversão de Dependência não é diferente. Martin orienta que para reduzir o acoplamento entre diferentes módulos de um sistema, é preciso abstrair suas implementações, que estão em constante mudança, e fazer com que interfaces - muito mais estáveis - estabeleçam contratos entre diferentes classes.

Dessa maneira, por exemplo, ao implementar uma API responsável pelo envio de e-mails, muito mais seguro do que "marretá-la" com o restante do código já existente, é fazer com que ele estabeleça um contrato com uma abstração que implementa o método `enviarEmail`.
Assim, o restante do código não estará dependendo da implementação dessa API, mas sim de sua abstração.

Uma técnica muito utilizada para praticar esse princípio é a [injeção de dependência](https://en.wikipedia.org/wiki/Dependency_injection). DIP também é muito relacionado com outro termo sinônimo: a [Inversão de Controle](https://en.wikipedia.org/wiki/Inversion_of_control).

## Conclusão

Essa foi uma visão geral dos cinco fundamentos por trás de SOLID. Em breve esse post será atualizado com aplicações dessas práticas em código. Qualquer dúvida, correção ou sugestão - enquanto não temos uma seção de comentários - abra uma issue no [repositório que abriga esse blog](https://github.com/fabio-alvarenga/deprecated-blog) e eu te respondo por lá!

Até logo mais!

[@fabio-alvarenga](https://github.com/fabio-alvarenga/)
