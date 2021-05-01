import { UserRoute } from './user';

export const routes = (app: any, twing: any) => {
    app.get('/', function(req: any, res: any) {
        twing.render("index.twig", { name: req.session.name }).then((output: any) => {
            res.end(output);
        });
    });

    UserRoute(app, twing);

    // ALL OTHER ROUTES REDIRECT TO '/'
    app.get('*', function(req: any, res: any) {
        res.redirect('/');
    });

};