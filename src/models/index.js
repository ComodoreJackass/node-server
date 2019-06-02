//data sample
const fs = require('fs');

let busImg = fs.readFileSync('./images/bus.png', { encoding: 'base64' });
let tramvajImg = fs.readFileSync('./images/tramvaj.png', { encoding: 'base64' });

let traficLines = {
    1: {
        title: '307 Sasi-Zapruđe',
        link: 'http://www.zet.hr/raspored-voznji/325?route_id=307',
        image: busImg,
    },
    2: {
        title: '268 VG-Zagreb',
        link: 'http://www.zet.hr/raspored-voznji/325?route_id=268',
        image: busImg,
    },
    3: {
        title: '290 VG-Kvatrić',
        link: 'http://www.zet.hr/raspored-voznji/325?route_id=290',
        image: busImg,
    },
    4: {
        title: '14 Mihaljevac-Zapruđe',
        link: 'http://www.zet.hr/raspored-voznji/325?route_id=14',
        image: tramvajImg,
    },
};

export default {
    traficLines,
};