export const UserRoute = (app: any, twing: any) => {
    // app.get('/login', (req: any, res: any) => {
    //     twing.render("user/login.twig", { name: req.session.name }).then((output: any) => {
    //         res.end(output);
    //     });
    // });

    // app.post('/login', (req: any, res: any) => {
    //     let user = req.body;
    //     service.mongo.insert(user).then((resp: any) => {
    //         if (resp) {
    //             req.session.isConnected = true;
    //             req.session.name = user.username;
    //             req.session.save();
    //             res.send({
    //                 session: req.session
    //             });
    //         }
    //     });
    // });

    // app.get('/signup', (req: any, res: any) => {
    //     twing.render("user/signup.twig", { name: req.session.name }).then((output: any) => {
    //         res.end(output);
    //     });
    // });

    // app.post('/signup', async (req: any, res: any) => {
    //     let user = req.body;
    //     let test = await service.mongo.find(user);


    //     if (test.length === 0) {
    //         let insert = await service.mongo.insert(user)
    //         req.session.isConnected = true;
    //         req.session.name = user.username;
    //         req.session.save();
    //         res.send({
    //             session: req.session
    //         });
    //     } else {
    //         res.send({
    //             error: "Nom d'utilisateur déja utilisé"
    //         });
    //     }
    // });

}