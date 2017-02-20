import IComponentOptions = angular.IComponentOptions;

class AppComponent{
    name:string = "Angular";
}

export const appComponent:IComponentOptions = {
    controller: AppComponent,
    template:`
    <div>
    <h1>Hello, {{$ctrl.name}}</h1>
    </div>
`}