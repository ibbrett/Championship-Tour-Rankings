export const getDataSource = ( tab ) => {

  const src = tab ? women : men;
  let DATA = [];
  DATA = src.map( ( athlete, index ) => {
    return {
      id: (index+1).toString(),
      name: athlete['athlete-name'],
      rank: athlete['athlete-rank'],
      country: athlete['athlete-country-name'],
      points: athlete['athlete-points'],
      img: athlete['headshot'],
      flag: athlete['athlete-country-flag']
    };
  });

  return DATA;

};

const men=[{"athlete-rank":"1","athlete-name":"Gabriel Medina","athlete-country-name":"Brazil","athlete-points":"43,400","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/963540e78fcba88fefaefa45eb0b352f.png?&x=48&y=48&icq=74&sig=37c78a1883a36eed553f786ae53b5f3d","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/9b4d7994a40d31f09a275058d9c4a6ad.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=56d554bffac55a6161598dfd415ae657"},{"athlete-rank":"2","athlete-name":"Italo Ferreira","athlete-country-name":"Brazil","athlete-points":"31,660","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/eb6081adcc5ae06fb2f46a64654c19e3.png?&x=48&y=48&icq=74&sig=e6f3fb1d81a768ba4f00fb2ee9489624","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/9b4d7994a40d31f09a275058d9c4a6ad.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=56d554bffac55a6161598dfd415ae657"},{"athlete-rank":"3","athlete-name":"Filipe Toledo","athlete-country-name":"Brazil","athlete-points":"30,735","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/e69389dcfc8b7376e21ee43dfd581b5d.png?&x=48&y=48&icq=74&sig=62545828d64ffb9b98e55d268b03c6a6","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/9b4d7994a40d31f09a275058d9c4a6ad.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=56d554bffac55a6161598dfd415ae657"},{"athlete-rank":"4","athlete-name":"Conner Coffin","athlete-country-name":"United States","athlete-points":"25,355","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/a0f4e978f0fd44cbfa89f03878ead38b.png?&x=48&y=48&icq=74&sig=2f0efdc191f5c602c19f1e061497d0c4","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/db4fae0c7d01749b75cbca75c54635ae.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=4c0400a3f6d11d12c39dcf1d4a421c59"},{"athlete-rank":"5","athlete-name":"Morgan Cibilic","athlete-country-name":"Australia","athlete-points":"25,270","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/6e3f1f75e3269e603f28f414a61ec705.png?&x=48&y=48&icq=74&sig=430b0ae52fe3d493e739b987af336c7c","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"6","athlete-name":"Griffin Colapinto","athlete-country-name":"United States","athlete-points":"22,905","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/d2d89e93eb72b500e84d0a89e4f8e80f.png?&x=48&y=48&icq=74&sig=e406f5ca2ea5023ac4214ebe7eb9a72c","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/db4fae0c7d01749b75cbca75c54635ae.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=4c0400a3f6d11d12c39dcf1d4a421c59"},{"athlete-rank":"7","athlete-name":"Jordy Smith","athlete-country-name":"South Africa","athlete-points":"22,505","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/b78ab329025c6f4da336ad3c8581755e.png?&x=48&y=48&icq=74&sig=2bd1ab410c3f27bb549c229bef420d11","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/d85910e29c732c557cd21a2ffcfb5531.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=54bfa281a70cc85c4237b01a9a08728c"},{"athlete-rank":"8","athlete-name":"Kanoa Igarashi","athlete-country-name":"Japan","athlete-points":"22,215","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/341b617d96d948a64692768a215ddebb.png?&x=48&y=48&icq=74&sig=ccc599d597a939525fb6d45e46bf23cd","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/5f4726fbb17dec2201d515622e7fa7a0.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=aaf41dcbd70470dabf43841e797abb93"},{"athlete-rank":"9","athlete-name":"Yago Dora","athlete-country-name":"Brazil","athlete-points":"20,875","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/b58042b0b531a6f39a286850f3ef6697.png?&x=48&y=48&icq=74&sig=2ea13b97618c7d57398b8f5548b35272","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/9b4d7994a40d31f09a275058d9c4a6ad.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=56d554bffac55a6161598dfd415ae657"},{"athlete-rank":"10","athlete-name":"Frederico Morais","athlete-country-name":"Portugal","athlete-points":"20,790","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/ad2a540d36d6ee1f8cb638d4b5438749.png?&x=48&y=48&icq=74&sig=9b7b2a1ca3b7ab52d8495a9cc19c2431","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/e0f43594225a876ad594c5bd68078e6e.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=bed67c0e2777bf42209061474c4176ca"},{"athlete-rank":"11","athlete-name":"John John Florence","athlete-country-name":"Hawaii","athlete-points":"19,660","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/3834e812c13ce9f9aa3fc23a3b954cc9.png?&x=48&y=48&icq=74&sig=6957b5102a432d2556643940db2b71de","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/feaa9153ce75dc4f6cf702c82d9e7165.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=f66dacc23ab24cdae51a7da1183ecbbb"},{"athlete-rank":"12","athlete-name":"Jack Robinson","athlete-country-name":"Australia","athlete-points":"19,300","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/7fae26db2b6cf94b1cc28144051dee3a.png?&x=48&y=48&icq=74&sig=4f8f98ae2f5f064d833c7140a7dc8f71","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"13","athlete-name":"Leonardo Fioravanti","athlete-country-name":"Italy","athlete-points":"18,800","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/46ac0c34b4c57b6dcd1b3ab4fe01bce7.png?&x=48&y=48&icq=74&sig=d3c9b0f0daf69de7f5f367d80c301209","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/174ac18d145a4c530839d98017d23cdc.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=d6304dae0b03b6c3eddf6dfc8e2fcf8c"},{"athlete-rank":"14","athlete-name":"Deivid Silva","athlete-country-name":"Brazil","athlete-points":"16,535","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/e73930c63ba81577df87ec7ac91ca7be.png?&x=48&y=48&icq=74&sig=0175847f4d8f36628e3adf807f8b69e9","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/9b4d7994a40d31f09a275058d9c4a6ad.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=56d554bffac55a6161598dfd415ae657"},{"athlete-rank":"15","athlete-name":"Ryan Callinan","athlete-country-name":"Australia","athlete-points":"15,470","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/057390cb03e14d67f5b90df83f367f7a.png?&x=48&y=48&icq=74&sig=6e23d635e3503a9b9b37aa7344e50370","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"15","athlete-name":"Adriano de Souza","athlete-country-name":"Brazil","athlete-points":"15,470","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/4905fecb35125ea236afdd6c563c8192.png?&x=48&y=48&icq=74&sig=a40ca4257bc10a9bcb9d35d910628767","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/9b4d7994a40d31f09a275058d9c4a6ad.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=56d554bffac55a6161598dfd415ae657"},{"athlete-rank":"15","athlete-name":"Ethan Ewing","athlete-country-name":"Australia","athlete-points":"15,470","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/9ba484431006e4eb36cd3aee0b266485.png?&x=48&y=48&icq=74&sig=958845b8e8f5bf13f078d6c4ee4f7d33","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"18","athlete-name":"Kelly Slater","athlete-country-name":"United States","athlete-points":"14,680","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/3a89a385f932218a0da6fac5f5d5d56d.png?&x=48&y=48&icq=74&sig=9593af78676ff2ad5b3445af88fddb89","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/db4fae0c7d01749b75cbca75c54635ae.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=4c0400a3f6d11d12c39dcf1d4a421c59"},{"athlete-rank":"19","athlete-name":"Jadson Andre","athlete-country-name":"Brazil","athlete-points":"14,610","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/dbfc4e60912e52677fd8e0f050697d39.png?&x=48&y=48&icq=74&sig=5817e211abce913bbe9cf126b21f9e23","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/9b4d7994a40d31f09a275058d9c4a6ad.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=56d554bffac55a6161598dfd415ae657"},{"athlete-rank":"20","athlete-name":"Jeremy Flores","athlete-country-name":"France","athlete-points":"14,045","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/964182961892a52f74830d6a01aa4255.png?&x=48&y=48&icq=74&sig=968c18279c7d4dad356776b2197aa913","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/c9c8493180d2bcf770aaead3cb10c21f.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=673f9275bb6b7fd526a20e7cac7959f8"},{"athlete-rank":"20","athlete-name":"Julian Wilson","athlete-country-name":"Australia","athlete-points":"14,045","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/0b7b8ec488a1883398fbd8ce1e17f7f4.png?&x=48&y=48&icq=74&sig=914c83da1e7e8d3b4efa736943850b61","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"20","athlete-name":"Seth Moniz","athlete-country-name":"Hawaii","athlete-points":"14,045","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/5a3fa459b5de6aa24b7abb95a2765e23.png?&x=48&y=48&icq=74&sig=18dd576f6f9263dfff9bc60a562838f6","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/feaa9153ce75dc4f6cf702c82d9e7165.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=f66dacc23ab24cdae51a7da1183ecbbb"},{"athlete-rank":"20","athlete-name":"Miguel Pupo","athlete-country-name":"Brazil","athlete-points":"14,045","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/803a910fa84d5ed53f19ee5670628af3.png?&x=48&y=48&icq=74&sig=03a0a0ede27e21d10e1e592a8cd35224","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/9b4d7994a40d31f09a275058d9c4a6ad.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=56d554bffac55a6161598dfd415ae657"},{"athlete-rank":"24","athlete-name":"Matthew McGillivray","athlete-country-name":"South Africa","athlete-points":"13,395","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/78a7ffa889609f45702b5a1eaf30b106.png?&x=48&y=48&icq=74&sig=605e3afb4f44bccda0e105b3ad0c4a53","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/d85910e29c732c557cd21a2ffcfb5531.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=54bfa281a70cc85c4237b01a9a08728c"},{"athlete-rank":"25","athlete-name":"Owen Wright","athlete-country-name":"Australia","athlete-points":"12,620","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/ec456c9fb987efc83a60f82b3f2f01c2.png?&x=48&y=48&icq=74&sig=125e4b018657e502d0162b48b2005dde","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"25","athlete-name":"Caio Ibelli","athlete-country-name":"Brazil","athlete-points":"12,620","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/013f17d84187f02cd8ba6599bf66be35.png?&x=48&y=48&icq=74&sig=845cb7f4a50d8105a610379343081573","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/9b4d7994a40d31f09a275058d9c4a6ad.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=56d554bffac55a6161598dfd415ae657"},{"athlete-rank":"27","athlete-name":"Peterson Crisanto","athlete-country-name":"Brazil","athlete-points":"10,630","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/e1a2a47ce72e87923bb43736a5e2ef3a.png?&x=48&y=48&icq=74&sig=d1ccb88b7666e4f2c0047ff4d8b2477d","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/9b4d7994a40d31f09a275058d9c4a6ad.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=56d554bffac55a6161598dfd415ae657"},{"athlete-rank":"28","athlete-name":"Michel Bourez","athlete-country-name":"France","athlete-points":"8,640","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/fc776bc22a34051ca16130743ad98eba.png?&x=48&y=48&icq=74&sig=55ec0d93285e1ce517537ac07862f3c0","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/c9c8493180d2bcf770aaead3cb10c21f.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=673f9275bb6b7fd526a20e7cac7959f8"},{"athlete-rank":"28","athlete-name":"Jack Freestone","athlete-country-name":"Australia","athlete-points":"8,640","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/7723fef16973f0db67724f48ecdd4f89.png?&x=48&y=48&icq=74&sig=f110cfa9d2b6b3388c6c20ae413181c2","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"28","athlete-name":"Wade Carmichael","athlete-country-name":"Australia","athlete-points":"8,640","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/b6c44bea464e41c479053bdd3fdc8198.png?&x=48&y=48&icq=74&sig=ea7e49b4a27e234fa1ca10070c4f141c","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"28","athlete-name":"Connor O'Leary","athlete-country-name":"Australia","athlete-points":"8,640","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/81accb89f20b71ea2ea4560fd5f33cd4.png?&x=48&y=48&icq=74&sig=232a0b793ca10a2294854ea1243dc155","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"32","athlete-name":"Mikey Wright","athlete-country-name":"Australia","athlete-points":"7,575","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/a842417e8265444e3cee97cff0473150.png?&x=48&y=48&icq=74&sig=e1976f50bb5adf7d831261287a6629c9","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"33","athlete-name":"Alex Ribeiro","athlete-country-name":"Brazil","athlete-points":"6,650","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/51a6848fd4b2afae13f9e794b6cb0dfb.png?&x=48&y=48&icq=74&sig=981be9ec0ab653339b04ba5711147c9d","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/9b4d7994a40d31f09a275058d9c4a6ad.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=56d554bffac55a6161598dfd415ae657"},{"athlete-rank":"34","athlete-name":"Liam O'Brien","athlete-country-name":"Australia","athlete-points":"6,350","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/93737e51f86ffd27d5adcfb90a12da2f.png?&x=48&y=48&icq=74&sig=a28370a44c53142ac6402de5825f5407","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"35","athlete-name":"Mateus Herdy","athlete-country-name":"Brazil","athlete-points":"6,085","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/93037f6f32652388b67a6982dba720a3.png?&x=48&y=48&icq=74&sig=83a4202de58ff53b40c2249ba88d2c7c","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/9b4d7994a40d31f09a275058d9c4a6ad.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=56d554bffac55a6161598dfd415ae657"},{"athlete-rank":"36","athlete-name":"Adrian Buchan","athlete-country-name":"Australia","athlete-points":"5,585","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/7ef7c882f768dc117cb35d203422b2f7.png?&x=48&y=48&icq=74&sig=4b86ea9663fef815b8c3d7fbb7588296","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"37","athlete-name":"Kolohe Andino","athlete-country-name":"United States","athlete-points":"5,445","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/9333eba663d11de6cd018024a5a24c2d.png?&x=48&y=48&icq=74&sig=14b563c8d99bc233eb1f472d372997ab","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/db4fae0c7d01749b75cbca75c54635ae.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=4c0400a3f6d11d12c39dcf1d4a421c59"},{"athlete-rank":"38","athlete-name":"Reef Heazlewood","athlete-country-name":"Australia","athlete-points":"3,585","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/1fd238345e466f2a82e394827d7d0dcc.png?&x=48&y=48&icq=74&sig=d67b29cfe7fb771df457afab601abad9","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"39","athlete-name":"Rio Waida","athlete-country-name":"Indonesia","athlete-points":"3,320","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/4410edda7b864964d9874bf45fa48974.png?&x=48&y=48&icq=74&sig=b7e7acab184dcde3b25eab2b2cba12cc","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/960a679bcbec77e9679760b7758ac9cd.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=83cb3d416244679831523a122204e3fe"},{"athlete-rank":"40","athlete-name":"Jacob Willcox","athlete-country-name":"Australia","athlete-points":"2,660","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/62d742edd6ec2a36158a197c76e0a878.png?&x=48&y=48&icq=74&sig=8284757e3630e4cb720d79c0b655687d","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"41","athlete-name":"Sebastian Zietz","athlete-country-name":"Hawaii","athlete-points":"1,330","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/b9bf6c78b64c028180529c13b34805cd.png?&x=48&y=48&icq=74&sig=f31fde78ac9daead1e44dc2e68ce78c3","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/feaa9153ce75dc4f6cf702c82d9e7165.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=f66dacc23ab24cdae51a7da1183ecbbb"},{"athlete-rank":"41","athlete-name":"Nat Young","athlete-country-name":"United States","athlete-points":"1,330","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/f67cdc5b533242a298e050a5b1818f5a.png?&x=48&y=48&icq=74&sig=e515985f8b08ea8d997812d33f7949ef","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/db4fae0c7d01749b75cbca75c54635ae.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=4c0400a3f6d11d12c39dcf1d4a421c59"},{"athlete-rank":"41","athlete-name":"Stuart Kennedy","athlete-country-name":"Australia","athlete-points":"1,330","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/b8bf4a5a9094a62626371ac850a0f471.png?&x=48&y=48&icq=74&sig=b5b0418d44b314a1d8e5d4663e002c60","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"41","athlete-name":"Patrick Gudauskas","athlete-country-name":"United States","athlete-points":"1,330","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/368ee62c45af60c30ddc8cd8319dc671.png?&x=48&y=48&icq=74&sig=f9f5b4b8e7fa5a610b6a808ddc2f4922","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/db4fae0c7d01749b75cbca75c54635ae.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=4c0400a3f6d11d12c39dcf1d4a421c59"},{"athlete-rank":"41","athlete-name":"Mick Fanning","athlete-country-name":"Australia","athlete-points":"1,330","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/d9ca155d0cda0cc59a6ab07a45201a9d.png?&x=48&y=48&icq=74&sig=c02144a6d2fff262adc0d5f12a6a7b21","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"41","athlete-name":"Michael Dunphy","athlete-country-name":"United States","athlete-points":"1,330","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/0e00c001bfc96d5641bf1ebf95c875d1.png?&x=48&y=48&icq=74&sig=70dc103428a1b50f7f330add22974bd4","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/db4fae0c7d01749b75cbca75c54635ae.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=4c0400a3f6d11d12c39dcf1d4a421c59"},{"athlete-rank":"41","athlete-name":"Lucca Mesinas","athlete-country-name":"Peru","athlete-points":"1,330","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/c372287e3464cff439b80f4e690eedff.png?&x=48&y=48&icq=74&sig=1dafb74af5778f57035568613afdc179","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/32d51084369cd3ddf875d8a7b92d4cbb.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=34e3c853d55118fbbf46c9029dac8d19"},{"athlete-rank":"41","athlete-name":"Eli Hanneman","athlete-country-name":"Hawaii","athlete-points":"1,330","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/79369880715fb9ed9b16eedecdbe8c4f.png?&x=48&y=48&icq=74&sig=790894d474acd5cb4e41735e71016c0c","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/feaa9153ce75dc4f6cf702c82d9e7165.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=f66dacc23ab24cdae51a7da1183ecbbb"},{"athlete-rank":"41","athlete-name":"Lucas Vicente","athlete-country-name":"Brazil","athlete-points":"1,330","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/fc938e8b17b4e9fd34ce2348b3afa03b.png?&x=48&y=48&icq=74&sig=19ccee815e75d4835de4a17bf955699b","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/9b4d7994a40d31f09a275058d9c4a6ad.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=56d554bffac55a6161598dfd415ae657"},{"athlete-rank":"41","athlete-name":"Dylan Moffat","athlete-country-name":"Australia","athlete-points":"1,330","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/a7c4f4681d4d36377ad48c33b2ab1e72.png?&x=48&y=48&icq=74&sig=2e65bcd9e4f34932ecda6a7b93e0a70b","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"}];

const women=[{"athlete-rank":"1","athlete-name":"Carissa Moore","athlete-country-name":"Hawaii","athlete-points":"37,770","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/133090c676ca5bc949bacd73345920b6.png?&x=48&y=48&icq=74&sig=8d5b86c3057342970c4fd6e986343c19","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/feaa9153ce75dc4f6cf702c82d9e7165.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=f66dacc23ab24cdae51a7da1183ecbbb"},{"athlete-rank":"2","athlete-name":"Tatiana Weston-Webb","athlete-country-name":"Brazil","athlete-points":"34,715","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/c45bce3fa194ed359b80f775823ab8e5.png?&x=48&y=48&icq=74&sig=b2ef86c633b4a6a1c5d13799ecef143d","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/9b4d7994a40d31f09a275058d9c4a6ad.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=56d554bffac55a6161598dfd415ae657"},{"athlete-rank":"3","athlete-name":"Sally Fitzgibbons","athlete-country-name":"Australia","athlete-points":"33,000","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/9c7fa91a259a4000ebf052bd19984baf.png?&x=48&y=48&icq=74&sig=e91496c2538b3950bce6f1569990267c","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"4","athlete-name":"Stephanie Gilmore","athlete-country-name":"Australia","athlete-points":"32,035","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/0daa66c560a352af9d3d284c473d8ce9.png?&x=48&y=48&icq=74&sig=51d6b368ed2ad4df8fc7bcd039406e7b","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"4","athlete-name":"Johanne Defay","athlete-country-name":"France","athlete-points":"32,035","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/70d72268cea77513f20411642388cd79.png?&x=48&y=48&icq=74&sig=8d7a2ab32a4cef31f8329a818ba5781e","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/c9c8493180d2bcf770aaead3cb10c21f.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=673f9275bb6b7fd526a20e7cac7959f8"},{"athlete-rank":"6","athlete-name":"Caroline Marks","athlete-country-name":"United States","athlete-points":"26,050","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/e065a451dab036f146ac802e800b361f.png?&x=48&y=48&icq=74&sig=df0d5ff20e0b7a147ac26190a679e103","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/db4fae0c7d01749b75cbca75c54635ae.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=4c0400a3f6d11d12c39dcf1d4a421c59"},{"athlete-rank":"6","athlete-name":"Tyler Wright","athlete-country-name":"Australia","athlete-points":"26,050","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/1a820de67e36f62b3a197a4db9f8f968.png?&x=48&y=48&icq=74&sig=0c211a855f4d8ddbfb151f110341fbb7","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"8","athlete-name":"Isabella Nichols","athlete-country-name":"Australia","athlete-points":"24,645","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/a7d7b3bc10f4013caa76b31ad02f799e.png?&x=48&y=48&icq=74&sig=a86483f0dc05b25b4612c3dcea02ae44","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"9","athlete-name":"Courtney Conlogue","athlete-country-name":"United States","athlete-points":"22,930","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/70e124a28cc894c6a50ca4df61132d26.png?&x=48&y=48&icq=74&sig=1d7c3ae35f93a86d1c6414fb9dbded6c","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/db4fae0c7d01749b75cbca75c54635ae.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=4c0400a3f6d11d12c39dcf1d4a421c59"},{"athlete-rank":"10","athlete-name":"Malia Manuel","athlete-country-name":"Hawaii","athlete-points":"22,510","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/cf59cbe8e499cf100f3a093b0452f2a5.png?&x=48&y=48&icq=74&sig=160d4cc2018e89c80a4900f696692a92","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/feaa9153ce75dc4f6cf702c82d9e7165.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=f66dacc23ab24cdae51a7da1183ecbbb"},{"athlete-rank":"11","athlete-name":"Bronte Macaulay","athlete-country-name":"Australia","athlete-points":"18,660","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/28b7742d4e329c09eb46349667ebb7cf.png?&x=48&y=48&icq=74&sig=9eb02f7ce357832335794d5cbe129a8f","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"11","athlete-name":"Keely Andrew","athlete-country-name":"Australia","athlete-points":"18,660","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/bd1bf3bf5f191b4a6e0715539354e231.png?&x=48&y=48&icq=74&sig=d4971f12c18ccbd5bd1cd5ed43b96890","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"13","athlete-name":"Nikki Van Dijk","athlete-country-name":"Australia","athlete-points":"15,185","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/d697149307e63b843f0a907ff5e8f801.png?&x=48&y=48&icq=74&sig=3ab047185dae29ffd641b1f66119a64a","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"13","athlete-name":"Sage Erickson","athlete-country-name":"United States","athlete-points":"15,185","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/73934a8ddb5c2107c26bdba3984752b0.png?&x=48&y=48&icq=74&sig=498bb6c7a09b3490a196d1fbf45a6d28","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/db4fae0c7d01749b75cbca75c54635ae.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=4c0400a3f6d11d12c39dcf1d4a421c59"},{"athlete-rank":"15","athlete-name":"Brisa Hennessy","athlete-country-name":"Costa Rica","athlete-points":"13,050","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/5b0c53d697b749eb391f1e86b80b3a3a.png?&x=48&y=48&icq=74&sig=32a26074477254dc863d017ead65da7d","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/78262e7f29b71cb99c27f01fd49fc8cb.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=f4ea1b7a02be6213a2730d092f41bb65"},{"athlete-rank":"15","athlete-name":"Macy Callaghan","athlete-country-name":"Australia","athlete-points":"13,050","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/f815aed290a0e5c23e3f3798b9a2545d.png?&x=48&y=48&icq=74&sig=d52a14f34e728ef6c03a6bd06a5a1ce4","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"17","athlete-name":"Amuro Tsuzuki","athlete-country-name":"Japan","athlete-points":"11,010","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/eeb65b0eaef5d00ae1d18b49d2367f6c.png?&x=48&y=48&icq=74&sig=cafcd83553b57269c9ea9fb84e2c5846","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/5f4726fbb17dec2201d515622e7fa7a0.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=aaf41dcbd70470dabf43841e797abb93"},{"athlete-rank":"18","athlete-name":"Lakey Peterson","athlete-country-name":"United States","athlete-points":"10,490","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/543dfdd716a30d2a09c32765ef605bb3.png?&x=48&y=48&icq=74&sig=678a45897c106131228b09d23a3ecb86","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/db4fae0c7d01749b75cbca75c54635ae.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=4c0400a3f6d11d12c39dcf1d4a421c59"},{"athlete-rank":"19","athlete-name":"Coco Ho","athlete-country-name":"Hawaii","athlete-points":"4,745","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/796af92ae9ae1f431227a926e862ee74.png?&x=48&y=48&icq=74&sig=6588592979298641981f4b186800d537","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/feaa9153ce75dc4f6cf702c82d9e7165.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=f66dacc23ab24cdae51a7da1183ecbbb"},{"athlete-rank":"20","athlete-name":"Silvana Lima","athlete-country-name":"Brazil","athlete-points":"2,610","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/f69b8a9a9edb7d5e0492864898156b73.png?&x=48&y=48&icq=74&sig=049fa1f3d013983809e9ee35b03242b7","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/9b4d7994a40d31f09a275058d9c4a6ad.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=56d554bffac55a6161598dfd415ae657"},{"athlete-rank":"20","athlete-name":"Philippa Anderson","athlete-country-name":"Australia","athlete-points":"2,610","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/f426be6ec97239cb8c780ef8d57dbdc4.png?&x=48&y=48&icq=74&sig=95efee7dd4f1963ab30e998bd73fa15c","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"20","athlete-name":"Alyssa Spencer","athlete-country-name":"United States","athlete-points":"2,610","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/ececb43680bc111bac05ea6c8f45b449.png?&x=48&y=48&icq=74&sig=f5f4c4539ea3edf547dda5e4885b1e67","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/db4fae0c7d01749b75cbca75c54635ae.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=4c0400a3f6d11d12c39dcf1d4a421c59"},{"athlete-rank":"20","athlete-name":"Mia McCarthy","athlete-country-name":"Australia","athlete-points":"2,610","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/aa9264387ded1020f924fcc55850e2f0.png?&x=48&y=48&icq=74&sig=1d9d8ddaeb5228ced8cc14be39422ec1","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"20","athlete-name":"Kirra Pinkerton","athlete-country-name":"United States","athlete-points":"2,610","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/df9738cba87c0d8289baa3f6ff9d2752.png?&x=48&y=48&icq=74&sig=0c2d68f884e190cfd93022194df20804","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/db4fae0c7d01749b75cbca75c54635ae.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=4c0400a3f6d11d12c39dcf1d4a421c59"},{"athlete-rank":"20","athlete-name":"Bettylou Sakura Johnson","athlete-country-name":"Hawaii","athlete-points":"2,610","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/580c1a62d47594be276f9075e6ba9bdd.png?&x=48&y=48&icq=74&sig=086e98173823f48ea60756d937dc7753","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/feaa9153ce75dc4f6cf702c82d9e7165.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=f66dacc23ab24cdae51a7da1183ecbbb"},{"athlete-rank":"26","athlete-name":"Caitlin Simmers","athlete-country-name":"United States","athlete-points":"1,045","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/d7dba155671c0a5e3dbd3a0c0099bb04.png?&x=48&y=48&icq=74&sig=419be0bfb78612f2ef5b2b686a095e54","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/db4fae0c7d01749b75cbca75c54635ae.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=4c0400a3f6d11d12c39dcf1d4a421c59"},{"athlete-rank":"26","athlete-name":"Shelby Detmers","athlete-country-name":"Mexico","athlete-points":"1,045","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/52e7f195ee53ea60bbfdeff046716a2e.png?&x=48&y=48&icq=74&sig=f5384bbbb5a6af6a9793f982a73ffbc6","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/d843ab91c4ac217401adbaf3687d5401.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=7ea7e313b1e63b5ea94eb4b4ef4fbfa9"},{"athlete-rank":"26","athlete-name":"Laura Enever","athlete-country-name":"Australia","athlete-points":"1,045","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/738b9593ee1db7fc892042268358db61.png?&x=48&y=48&icq=74&sig=c26634bda894df9c45d66560ffb9f2b2","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"26","athlete-name":"Willow Hardy","athlete-country-name":"Australia","athlete-points":"1,045","headshot":"https://d3qf8nvav5av0u.cloudfront.net/cache/img/athlete-headshot-default-female-250x200_1628887139.png","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/b7368ede16a5208bc09caa54135cb94b.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=943718b3fc3ac90f28322228abb8dfc3"},{"athlete-rank":"26","athlete-name":"Regina Pioli","athlete-country-name":"Mexico","athlete-points":"1,045","headshot":"https://d3qf8nvav5av0u.cloudfront.net/image/8bd457ccee9567a986d30670465a74bc.png?&x=48&y=48&icq=74&sig=f62dced3c749725e41517e35dac813dc","athlete-country-flag":"https://d3qf8nvav5av0u.cloudfront.net/image/d843ab91c4ac217401adbaf3687d5401.png?&x=60&y=40&cx=2&cy=12&cw=60&ch=40&icq=74&sig=7ea7e313b1e63b5ea94eb4b4ef4fbfa9"}];
