import { NgModule, Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./list/list.component"
import { ResultListComponent } from "./result-list/result-list.component"







const routes: Routes = [
    {
        path: "", redirectTo: "home", pathMatch: "full"
    },
    { path: "home", component: ListComponent },
    { path: "result", component: ResultListComponent },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
