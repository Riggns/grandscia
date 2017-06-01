
# Gerando uma aplicação no GumgaFramework


###### Documentação completa do framework

https://gumga.github.io/#/app/home

###### Toda parte de instalação, pré-requisitos e inicialização do projeto pode ser visto em:

https://gumga.github.io/#/app/framework/1.3.0

Mais em https://gumga.github.io

E também no GitHub https://github.com/GUMGA/frameworkbackend

## Requisitos BACKEND

[GitHub](https://desktop.github.com/)

[Java 8](https://www.java.com/pt_BR/download/)

[Java JDK](http://www.oracle.com/technetwork/pt/java/javase/downloads/jdk8-downloads-2133151.html)

[Mysql](https://dev.mysql.com/downloads/mysql/)

[NetBeans](https://netbeans.org/downloads/start.html?platform=windows&lang=pt_BR&option=javaee)

## Requisitos FRONTEND

[NodeJs](https://nodejs.org/en/download/)

##### Bower
npm install -g bower

# BACKEND
## Criando o projeto

No terminal (CMD) digitar o comando:
```
mvn archetype:generate 
    -DinteractiveMode=false 
    -DarchetypeGroupId=io.gumga 
    -DarchetypeArtifactId=gumga-archetype 
    -DarchetypeVersion=LATEST 
    -DgroupId=br.com.gdsdev 
    -DartifactId=grandscia 
    -Dversion=1.0.0
```
![mvn](https://github.com/Riggns/grandscia/blob/master/img/mvn%20criar.JPG)

O comando irá criar o projeto especificado em “-DartifactId” no exemplo será “grandscia”

## Limpar e construir

Após a criação do projeto limpar o projeto e construir, para isso basta selecionar o projeto do exemplo “grandscia” e clicar no botão indicado.

![construir](https://github.com/Riggns/grandscia/blob/master/img/Limpar%20e%20construir.JPG)

No termino da construção deverá aparecer a mensagem no terminal:

![buildsucess](https://github.com/Riggns/grandscia/blob/master/img/build.JPG)

Após o término da construção com a mensagem **BUILD SUCCES** alterar no arquivo pom.xml que fica em “grandscia-api->Arquivos do Projeto->pom.xml” o trecho **<packaging>jar</packaging>** que inicialmente está como jar para war ficando **<packaging>war</packaging>**, feito isso **Limpar e construir**.

![construir](https://github.com/Riggns/grandscia/blob/master/img/Limpar%20e%20construir.JPG)

## Arquivo de configuração properties

Ao final de um novo **BUILD SUCCES** entrar no diretório do projeto criado **“E:\Gumga\grandscia”** e localizar o arquivo **“grandscia.properties”**, esse arquivo contém as configurações de acesso a banco e também acesso ao security que é a parte de login da Gumga.

Nesse exemplo foi utilizado o banco de dados MySql, descomentar o Driver referente. 

![mysql](https://github.com/Riggns/grandscia/blob/master/img/mysql.JPG)
![mysql](https://github.com/Riggns/grandscia/blob/master/img/mysql2.JPG)

Feito isso criar um banco de dados no MySql com um nome qualquer exemplo: “devgds” e configurar no arquivo properties, ficando dessa forma.

![mysql](https://github.com/Riggns/grandscia/blob/master/img/configmysql.JPG)

No mesmo arquivo para acessar a API já com o token da Grands, no caso utilizar um que já foi criado para esse projeto. 

![mysql](https://github.com/Riggns/grandscia/blob/master/img/tokr.JPG)

Após a edição copiar o arquivo alterado para a pasta do usuário na pasta criada pelo framework “gumgafiles”.

![gumgafiles](https://github.com/Riggns/grandscia/blob/master/img/gumgafiles.JPG)

## Gerando a aplicação

Deve-se seguir uma sequência de comandos para gerar a aplicação, exemplo de comandos utilizados:
```
IMPORTANTE: Para cada passo a ser realizado deve-se selecionar o item que foi gerado, exemplo: grandscia-domain e clicar no botão para limpar e construir, assim ele gera as dependências para os outros itens.
```

### Como gerar?

Basta acessar cada pasta pelo prompt de comando copiar os códigos abaixo listado para cada item e colar no prompt, irá assim gerar as classes, bastando apenas acompanhar. 

**Gerando o domain que é responsável pelas classes que irão criar as tabelas no banco de dados.**
```
cd grandscia-domain/
mvn io.gumga:gumgag:entidade -Dentidade=br.com.gdsdev.grandscia.domain.model.Proprietario -Datributos="nome:String,cpf:String"
mvn io.gumga:gumgag:entidade -Dentidade=br.com.gdsdev.grandscia.domain.model.MarcaModelo -Datributos="nome:String"
mvn io.gumga:gumgag:entidade -Dentidade=br.com.gdsdev.grandscia.domain.model.Categoria -Datributos="nome:String"
mvn io.gumga:gumgag:entidade -Dentidade=br.com.gdsdev.grandscia.domain.model.Especie -Datributos="nome:String"
mvn io.gumga:gumgag:entidade -Dentidade=br.com.gdsdev.grandscia.domain.model.Combustivel -Datributos="nome:String"
mvn io.gumga:gumgag:entidade -Dentidade=br.com.gdsdev.grandscia.domain.model.Acessorios -Datributos="nome:String,veiculo:Set<Veiculo>:@ManyToMany"
mvn io.gumga:gumgag:entidade -Dentidade=br.com.gdsdev.grandscia.domain.model.Veiculo -Datributos="renavam:String,placa:String,anofabricado:Integer,anomodelo:Integer,cor:String,restricao:String,situacao:String,vendido:String,proprietario:Proprietario:@ManyToOne,marcamodelo:MarcaModelo:@ManyToOne,categoria:Categoria:@ManyToOne,especie:Especie:@ManyToOne,combustivel:Combustivel:@ManyToOne"
mvn io.gumga:gumgag:entidade -Dentidade=br.com.gdsdev.grandscia.domain.model.Venda -Datributos="cliente:String,itens:List<ItemVenda>:@OneToMany"
mvn io.gumga:gumgag:entidade -Dentidade=br.com.gdsdev.grandscia.domain.model.ItemVenda -Datributos="data:Date,quantidade:Integer,veiculo:Veiculo:@ManyToOne"
```
![domain](https://github.com/Riggns/grandscia/blob/master/img/domainsar.JPG)

**Limpar e construir**

**Executar os comandos para gerar a aplicação, essa parte irá criar os services e os repositorys, o service é responsável pela camada de negócio.**
```
cd ..
cd grandscia-application/
mvn io.gumga:gumgag:aplicacao -Dentidade=br.com.gdsdev.grandscia.domain.model.Proprietario 
mvn io.gumga:gumgag:aplicacao -Dentidade=br.com.gdsdev.grandscia.domain.model.MarcaModelo 
mvn io.gumga:gumgag:aplicacao -Dentidade=br.com.gdsdev.grandscia.domain.model.Categoria 
mvn io.gumga:gumgag:aplicacao -Dentidade=br.com.gdsdev.grandscia.domain.model.Especie 
mvn io.gumga:gumgag:aplicacao -Dentidade=br.com.gdsdev.grandscia.domain.model.Combustivel 
mvn io.gumga:gumgag:aplicacao -Dentidade=br.com.gdsdev.grandscia.domain.model.Acessorios 
mvn io.gumga:gumgag:aplicacao -Dentidade=br.com.gdsdev.grandscia.domain.model.Veiculo 
mvn io.gumga:gumgag:aplicacao -Dentidade=br.com.gdsdev.grandscia.domain.model.Venda 
mvn io.gumga:gumgag:aplicacao -Dentidade=br.com.gdsdev.grandscia.domain.model.ItemVenda
```
![aplicação](https://github.com/Riggns/grandscia/blob/master/img/aplication.JPG)

Após gerar a aplicação deve-se certificar se o gerador criou o arquivo Applicaiton.java corretamente

![Application.java](https://github.com/Riggns/grandscia/blob/master/img/diretorioapppjavaJPG.JPG)

Onde está definido como **“br.com.gdsdev”** tem que ficar igual ao do projeto **“-DgroupId=br.com.gdsdev”**

![Application.java](https://github.com/Riggns/grandscia/blob/master/img/applicatiojava.JPG)

**Limpar e construir**

**Executar os comandos que geram a API.**
```
cd ..
cd grandscia-api/
mvn io.gumga:gumgag:api -Dentidade=br.com.gdsdev.grandscia.domain.model.Proprietario 
mvn io.gumga:gumgag:api -Dentidade=br.com.gdsdev.grandscia.domain.model.MarcaModelo 
mvn io.gumga:gumgag:api -Dentidade=br.com.gdsdev.grandscia.domain.model.Categoria 
mvn io.gumga:gumgag:api -Dentidade=br.com.gdsdev.grandscia.domain.model.Especie 
mvn io.gumga:gumgag:api -Dentidade=br.com.gdsdev.grandscia.domain.model.Combustivel 
mvn io.gumga:gumgag:api -Dentidade=br.com.gdsdev.grandscia.domain.model.Acessorios 
mvn io.gumga:gumgag:api -Dentidade=br.com.gdsdev.grandscia.domain.model.Veiculo 
mvn io.gumga:gumgag:api -Dentidade=br.com.gdsdev.grandscia.domain.model.Venda 
mvn io.gumga:gumgag:api -Dentidade=br.com.gdsdev.grandscia.domain.model.ItemVenda 
```
![API](https://github.com/Riggns/grandscia/blob/master/img/apiarquivos.JPG)

**Limpar e construir**

**Por fim executa-se os comandos para criar a apresentação ou a interface com o usuário.**
```
cd ..
cd grandscia-presentation/
mvn io.gumga:gumgag:apresentacao -Dentidade=br.com.gdsdev.grandscia.domain.model.Proprietario 
mvn io.gumga:gumgag:apresentacao -Dentidade=br.com.gdsdev.grandscia.domain.model.MarcaModelo 
mvn io.gumga:gumgag:apresentacao -Dentidade=br.com.gdsdev.grandscia.domain.model.Categoria 
mvn io.gumga:gumgag:apresentacao -Dentidade=br.com.gdsdev.grandscia.domain.model.Especie 
mvn io.gumga:gumgag:apresentacao -Dentidade=br.com.gdsdev.grandscia.domain.model.Combustivel 
mvn io.gumga:gumgag:apresentacao -Dentidade=br.com.gdsdev.grandscia.domain.model.Acessorios 
mvn io.gumga:gumgag:apresentacao -Dentidade=br.com.gdsdev.grandscia.domain.model.Veiculo 
mvn io.gumga:gumgag:apresentacao -Dentidade=br.com.gdsdev.grandscia.domain.model.Venda
```
![Presentation](https://github.com/Riggns/grandscia/blob/master/img/presentation.JPG)

**Limpar e construir**

**No final de cada comando executado deve aparecer a seguinte mensagem:**

![BUILD](https://github.com/Riggns/grandscia/blob/master/img/buildfim.jpg)

**Tudo OK!**

Até esse ponto a aplicação está pronta para ser testada em API.

## Compilando

Para compilar basta selecionar “grandscia-api” e apertar o botão de compilar.

![Compilando](https://github.com/Riggns/grandscia/blob/master/img/compilar.JPG)

```
OBS: Para compilar será sempre esse procedimento, não será diferente disso.
Para acessar a API basta seguir o exemplo, digitando em qualquer navegador.
```

http://localhost:8084/grandscia-api/api/veiculo

![API](https://github.com/Riggns/grandscia/blob/master/img/veiculoapi.JPG)

## Alterando um Service (Regra de negócio)

Alterando um serviço no caso o de venda para marcar o veículo como **vendido**.

![API](https://github.com/Riggns/grandscia/blob/master/img/pedidosetitem.JPG)

Feito isso em “grandscia-application”.

**Limpar e construir**

## Adicionando novos campos a um model.

Para adicionar novos campos segue o exemplo do model Proprietario, os campos são referentes ao GumgaAdress.

![adress](https://github.com/Riggns/grandscia/blob/master/img/adress.JPG)

Com o botão direito no final da classe adicionar os Getters e Setters:

![GetterAndSetters](https://github.com/Riggns/grandscia/blob/master/img/getters.JPG)

![GetterAndSetters](https://github.com/Riggns/grandscia/blob/master/img/addgs.jpg)

![GetterAndSetters](https://github.com/Riggns/grandscia/blob/master/img/addgetters.JPG)

Agora no “grandscia-domain”.

**Limpar e construir**

## Habilitar acesso a API por token

Para acessar via gumgaToken basta descomentar a linha do interceptor como a seguir:

![Interceptor](https://github.com/Riggns/grandscia/blob/master/img/interceptor.JPG)

O arquivo fica em “grandscia-infraestructure->WebConfig.java”, a linha registry.addInterceptor(gumgaRequestFilter()); estará comentada, basta descomentar.

**Limpar e construir**

## Criando novas rotas

É possível criar além das rotas que o Framework cria por padrão, novas rotas personalizadas, exemplo: uma rota que retorne apenas a informação do Proprietário do veículo e se ele foi vendido ou não, o nome da rota será **mapa**.

![Nova rota](https://github.com/Riggns/grandscia/blob/master/img/novarota.png)

**Limpar e construir**

Após compilado acessar normalmente a api http://localhost:8084/grandscia-api/api/veiculo/mapa

# FRONTEND

Alterando o arquivo apiLocations.js para poder acessar o frontend de servidor externo ao NetBeans.

![ApiLocations](https://github.com/Riggns/grandscia/blob/master/img/locations.JPG)

Instalando um servidor http (é possível executar por dentro do NetBeans).

Para instalar execute o comando: npm install http-server -g
Para executar o servidor: http-server

![http-server](https://github.com/Riggns/grandscia/blob/master/img/http-server.JPG)


## Acessando a aplicação

http://localhost:8080/#/welcome/home

![App](https://github.com/Riggns/grandscia/blob/master/img/app.png)

## Alterando arquivo pt-br.json

O arquivo é reponsável por fazer a tradução da aplicação (label, menu, title, etc,...)

Exemplo: no arquivo de listagem de Espécies temos a tag "gumga-translate-tag" quando passado o objeto da janela "especie.title" a aplicação irá automaticamente fazer a tradução.

![Especie](https://github.com/Riggns/grandscia/blob/master/img/especietitle.png)

![Especie](https://github.com/Riggns/grandscia/blob/master/img/especiecode.png)

## Diretiva gumgaAddress







