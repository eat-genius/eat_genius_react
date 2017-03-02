exports.seed = function (knex) {
  return knex('restaurants').del()
    .then(() => {
      return knex('restaurants').insert([
        {
          id: 1,
          name: 'Fogon',
          img_url: '',
          rating: 4.5,
          description: '',
          address: '600 E Pine St',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98122,
          yelp_id: 'fogón-cocina-mexicana-seattle-2',
          group_id: 1
        },
        {
          id: 2,
          name: 'Asadero',
          img_url: '',
          rating: 4.5,
          description: '',
          address: '5405 Leary Ave NW',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98107,
          yelp_id: 'asadero-ballard-seattle',
          group_id: 1
        },
        {
          id: 3,
          name: 'Tacos Chukis 5',
          img_url: '',
          rating: 4.5,
          description: '',
          address: '832 Dexter Ave N',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98109,
          yelp_id: 'tacos-chukis-seattle-5',
          group_id: 1
        },
        {
          id: 4,
          name: 'Villa Escondida',
          img_url: '',
          rating: 4.5,
          description: '',
          address: '2203 1st Ave',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98121,
          yelp_id: 'villa-escondida-seattle-3',
          group_id: 1
        },
        {
          id: 5,
          name: 'Tacos Chukis',
          img_url: '',
          rating: 4.5,
          description: '',
          address: '219 Broadway E',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98102,
          yelp_id: 'tacos-chukis-seattle',
          group_id: 1
        },
        {
          id: 6,
          name: 'Casco Antiguo',
          img_url: '',
          rating: 4.5,
          description: '',
          address: '115 Occidental Ave S',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98104,
          yelp_id: 'casco-antiguo-seattle',
          group_id: 1
        },
        {
          id: 7,
          name: 'La Cocina Oaxaquena',
          img_url: '',
          rating: 4.5,
          description: '',
          address: '1216 Pine St',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98101,
          yelp_id: 'la-cocina-oaxaquena-seattle',
          group_id: 1
        },
        {
          id: 8,
          name: 'El Borracho',
          img_url: '',
          rating: 4.5,
          description: '',
          address: '1521 1st Ave',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98101,
          yelp_id: 'el-borracho-seattle',
          group_id: 1
        },
        {
          id: 9,
          name: 'El Legendario Mexican Restaurant',
          img_url: '',
          rating: 4.5,
          description: '',
          address: '4705 Aurora Ave N',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98103,
          yelp_id: 'el-legendario-mexican-restaurant-seattle',
          group_id: 1
        },
        {
          id: 10,
          name: 'Taqueria Cantina',
          img_url: '',
          rating: 4.5,
          description: '',
          address: '2630 1st Ave',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98121,
          yelp_id: 'taqueria-cantina-seattle',
          group_id: 1
        },
        {
          id: 11,
          name: 'Fonda La Catrina',
          img_url: '',
          rating: 4.5,
          description: '',
          address: '5905 Airport Way S',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98108,
          yelp_id: 'fonda-la-catrina-seattle',
          group_id: 1
        },
        {
          id: 12,
          name: 'La Carta de Oaxaca',
          img_url: '',
          rating: 4.5,
          description: '',
          address: '5431 Ballard Ave NW',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98107,
          yelp_id: 'la-carta-de-oaxaca-seattle',
          group_id: 1
        },
        {
          id: 13,
          name: 'Luna Azul',
          img_url: '',
          rating: 4.5,
          description: '',
          address: '8552 Greenwood Ave N',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98103,
          yelp_id: 'luna-azul-seattle',
          group_id: 1
        },
        {
          id: 14,
          name: 'Plaza Garibaldi',
          img_url: '',
          rating: 4.5,
          description: '',
          address: '129 1st Ave N',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98109,
          yelp_id: 'plaza-garibaldi-seattle',
          group_id: 1
        },
        {
          id: 15,
          name: 'Gracia',
          img_url: '',
          rating: 4.5,
          description: '',
          address: '5313 Ballard Ave NW',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98107,
          yelp_id: 'gracia-seattle',
          group_id: 1
        },
        {
          id: 16,
          name: 'Mezcaleria Oaxaca',
          img_url: '',
          rating: 4.5,
          description: '',
          address: '2123 Queen Anne Ave N',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98109,
          yelp_id: 'mezcaleria-oaxaca-seattle',
          group_id: 1
        },
        {
          id: 17,
          name: 'La Antigua Casa Maria',
          img_url: '',
          rating: 4.5,
          description: '',
          address: '1100 N 115th St',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98133,
          yelp_id: 'la-antigua-casa-maria-seattle',
          group_id: 1
        },
        {
          id: 18,
          name: 'Cafetal Quilombo',
          img_url: '',
          rating: 4.5,
          description: '',
          address: '4343 15th Ave S',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98108,
          yelp_id: 'cafetal-quilombo-seattle',
          group_id: 1
        },
        {
          id: 19,
          name: 'Pecado Bueno',
          img_url: '',
          rating: 4.5,
          description: '',
          address: '4307 Fremont Ave N',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98103,
          yelp_id: 'pecado-bueno-seattle-6',
          group_id: 1
        },
        {
          id: 20,
          name: 'El Camión',
          img_url: '',
          rating: 4.5,
          description: '',
          address: '6416 15th Ave NW',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98107,
          yelp_id: 'el-camión-seattle-7',
          group_id: 1
        }
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('restaurants_id_seq', (SELECT MAX(id) FROM restaurants));"
      )
    })
}