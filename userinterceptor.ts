import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import {Projects} from './projects';
import {ProjectsService} from './projects.service'

export class UserInterceptor implements HttpInterceptor{

    intercept (request : HttpRequest<ProjectsService>, next: HttpHandler){
        const newrequest = request.clone({
            headers : request.headers.set(
            'Authorization',
            'Abdul'
            )
        });

        console.log(newrequest);
        console.log(newrequest.body);

        return next.handle(request);
    }
}