import { UserRoute } from './user';

export const routes = (app: any, twing: any, services: any) => {
    app.get('/', function(req: any, res: any) {
        if (!req.session.isConnected) {
            res.redirect('/login');
        } else {
            twing.render("index.twig", { name: req.session.name }).then((output: any) => {
                res.end(output);
            });
        }
    });

    UserRoute(app, twing, services);

    // ALL OTHER ROUTES REDIRECT TO '/'
    app.get('*', function(req: any, res: any) {
        res.redirect('/');
    });

};