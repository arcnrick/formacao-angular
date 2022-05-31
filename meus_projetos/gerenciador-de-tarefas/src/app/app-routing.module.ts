import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { TarefaRoutes } from "./tarefas";

export const routes: Routes = [

    // se a aplicação estiver vazia ( path = '' ), vamos fazer com que o redirectTo padrão dela seja o '/tarefas/listar'
    {
        path: '',
        redirectTo: '/tarefas/listar',
        pathMatch: 'full'
    },
    ...TarefaRoutes

    // os três ponstilhos acima ( ... ) servem para concatenar o array TarefaRoutes com o array anterior existente, que no caso é o Routes []
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }