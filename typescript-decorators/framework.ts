import express, { Application, Request, Response } from 'express';

const app: Application = express();

const port: number = 3000;

const pathForControllerCtor = new Map<any, string>()
const constructorForLabel = new Map<string, any>();

export function Injectable(label: string) {
    return function (target: any, context: any) {
        console.log(`@Injectable - Registering class with label: ${label}`);
        constructorForLabel.set(label, target);
    };
}

export function Inject(name: string) {
    return function (target: any, context: any) {
        console.log(`@Inject - Injecting dependency: ${name}`);
        return () => {
            console.log('Init for the name: ', name)
            const targetCtor = constructorForLabel.get(name);
            const newInstance = new targetCtor();
            return newInstance;
        }
    }
}

export function Controller<
This,
Args extends any[],
Class extends abstract new (...args: Args) => This,
>(urlPath: string) {
    return function (target: any, context: any) {
        console.log(`@Controller - Registering a controller for path: ${urlPath}`);
        pathForControllerCtor.set(target, urlPath);
        return target;
    };
}

export function Get<This extends {}, Return>(subPath: string) {
    return function (
        target: (this: This) => Return,
        context: ClassMethodDecoratorContext<This, (this: This) => Return>,
    ) {
        console.log(
            `@Get - Registering a GET handler for controller: ${target.constructor.name}`
        )
    context.addInitializer(function(this: any): void {
        const controllerPath = pathForControllerCtor.get(this.constructor)
        if (!controllerPath) 
            throw new Error(
                `Controller for type ${this.constructor.name} not registered`,
            )
        const fullPath = controllerPath + subPath;
        console.log(`@Get - Registering a handler for path ${fullPath}`);
        app.get(fullPath, (req: Request, res: Response) => {
            const endpointResponse = target.call(this);
            res.json(endpointResponse);
        })
        
    })
    return target;
}
}

export function startApp() {
    console.log(`Starting app`)
    
    for (const controllerCtor of pathForControllerCtor.keys()) {
        const _ = new controllerCtor();
    }
    app.listen(port, function () {
        console.log(`Started express server on port ${port}`);
    });
}