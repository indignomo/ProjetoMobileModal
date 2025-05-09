# ProjetoMobileModal

**Aplicativo simples de Lista de Tarefas (To-do List) utilizando Ionic com navegação entre páginas (Ionic NavController) e comunicação via serviço com RxJS.**

## 🔍 Visão Geral

Este é um projeto mobile desenvolvido com o **Ionic Framework**, que permite ao usuário adicionar e visualizar tarefas. A navegação entre páginas é feita utilizando `NavController`, e os dados são compartilhados por meio de um `DataService` com `BehaviorSubject`.

## 🚀 Funcionalidades

- 📝 Adicionar uma nova tarefa
- 📋 Visualizar a lista de tarefas
- 🔄 Atualização reativa com RxJS (`BehaviorSubject`)
- 📱 Interface moderna com componentes do Ionic

## 🛠️ Principais Componentes

### `data.service.ts`

Gerencia os dados de tarefas compartilhados entre componentes:

```ts
addItem(item: string) {
  this._items = [...this._items, item];
  this.itemsSubject.next(this._items);
}
````

### `home.page.ts`

Exibe as tarefas e navega para a página de adição:

```ts
ngOnInit() {
  this.dataService.items$.subscribe(items => {
    this.itens = items;
  });
}
```

### `teste.page.ts`

Permite adicionar uma nova tarefa e retorna à página inicial:

```ts
addItem() {
  if (this.novoItem.trim()) {
    this.dataService.addItem(this.novoItem.trim());
    this.nav.navigateBack('home');
  }
}
```

## 🧪 Como Executar

### Pré-requisitos

* Node.js (v16+)
* Ionic CLI instalado globalmente:

```bash
npm install -g @ionic/cli
```

### Instalação

```bash
git clone https://github.com/indignomo/ProjetoMobileModal.git
cd ProjetoMobileModal
npm install
ionic serve
```

## 📱 Estrutura de Páginas

* **HomePage**: Lista de tarefas.
* **TestePage**: Formulário para adicionar tarefa.

## 📷 Interface

* **Home**:

  * Lista de tarefas ou mensagem de vazio
  * Botão flutuante "Nova tarefa"
* **Teste**:

  * Campo de input
  * Botões "Salvar Tarefa" e "Voltar"

## 📦 Tecnologias Usadas

* [Ionic Framework](https://ionicframework.com/)
* [Angular](https://angular.io/)
* [RxJS](https://rxjs.dev/)
* TypeScript

## 🔧 Futuras Melhorias

* ✔️ Editar e remover tarefas
* 📅 Integração com calendário
* ☁️ Persistência com Firebase ou SQLite
* 🎨 Dark mode
* ✅ Marcar tarefa como concluída
* 📲 Deploy como PWA ou app nativo

## 📄 Licença

Este projeto está licenciado sob a Licença MIT.
