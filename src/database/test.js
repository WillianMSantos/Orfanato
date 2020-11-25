const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

Database.then(async db=>{
    //inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6459884",
        name: "lar dos meninos",
        about: "Presta assistência de crianças de 06 a 15 anos que se encontre em situação de risco e/ou  vulnerabilidade social.",
        whatsapp: "996266728",
        images: [
           /*"http://source.unsplash.com/random?id=1",*/

           "https://images.unsplash.com/photo-1600818272779-cfa6145222f0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9", 

           "https://images.unsplash.com/photo-1598135753053-2e3075f90763?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions:"venha se sentir com vontade e traga muito amor e pasciência para dar.",
        opening_hours:"Horario de visita das 8h ate 18h",
        open_on_weekends: "1"
    })


    //consultar dados na tabela
     const selectedOrphanages = await db.all("SELECT * FROM orphanages") //seleciona todos os campos da tabela orphanages
     console.log(selectedOrphanages)

     //consultar somente 1 orfanato
     //const orphanage = await db.all("SELECT * FROM orphanages WHERE id = '1'")
    // console.log(orphanage)

     //deletar dado da tabela
     console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
     console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))

})