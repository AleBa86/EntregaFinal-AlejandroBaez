const productos = [
    {
      id: "1234asd",
      nombre: "TECLADO GAMER EVGA Z12 RGB COLOR MEMBRANE SP",
      descripcion: "Marca: EVGA Modelo: 834-W0-12SP Iluminación: LED - RGB Tipo de conexión: USB Switch: MEMBRANA",
      stock: 2,
      categoria: "teclado",
      precio: 19349.96,
      img: "https://www.fullh4rd.com.ar/img/productos/8/teclado-gamer-evga-z12-rgb-color-membrane-sp-0.jpg"
    },
    {
      id: "1234asdfg",
      nombre: "MOUSE LOGITECH G203 GAMING LIGHTSYNC BLACK 910-005793",
      descripcion: "Elige entre aproximadamente 16,8 millones de colores",
      stock: 2,
      categoria: "mouse",
      precio: 29989.43,
      img: "https://www.fullh4rd.com.ar/img/productos/14/mouse-logitech-g203-gaming-lightsync-black-910005793-0.jpg"
    },
    {
      id: "TEC581",
      nombre: "TECLADO TRUST ASTA MECH GTX 865 MECANICO ESPAÑOL",
      descripcion: "Asombroso teclado mecánico para juegos con interruptores de respuesta veloz, 7 modos de colores y función de modo juego. Tecla técnica mecánica.",
      stock: 6,
      categoria: "teclado",
      precio: 62927.27,
      img: "https://www.fullh4rd.com.ar/img/productos/8/teclado-trust-asta-mech-gtx-865-mecanico-espaol-0.jpg"
    },
    {
      id: "MOU827",
      nombre: "MOUSE EVGA X17 GAMING MOUSE WIRED BLACK",
      descripcion: "Main Sensor: PIXART 3389 Optical Sensor",
      stock: 12,
      categoria: "mouse",
      precio: 51249.99,
      img: "https://www.fullh4rd.com.ar/img/productos/14/mouse-evga-x17-gaming-mouse-wired-black-0.jpg"
    },
    {
      id: "MEM1322",
      nombre: "MEMORIA 8GB DDR4 3200 KINGSTON VALUE RAM",
      descripcion: "Tipo de memoria: DDR4",
      stock: 44,
      categoria: "memorias",
      precio: 29200.02,
      img: "https://www.fullh4rd.com.ar/img/productos/4/memoria-8gb-ddr4-3200-kingston-value-ram-0.jpg"
    },
    {
      id: "MEM1421",
      nombre: "MEMORIA 16GB DDR5 4800 KINGSTON FURY BEAST BLACK",
      descripcion: "Tecnología DDR5",
      stock: 22,
      categoria: "memorias",
      precio: 81750.02,
      img: "https://www.fullh4rd.com.ar/img/productos/4/memoria-16gb-ddr5-4800-kingston-fury-beast-black-0.jpg"
    },
    {
      id: "MOT2058",
      nombre: "MOTHER GIGABYTE B650 AORUS ELITE AX V1.1 DDR5 AM5",
      descripcion: "AMD Socket AM5:Supports AMD Ryzen™ 7000 Series Processors",
      stock: 13,
      categoria: "mother",
      precio: 388069.99,
      img: "https://www.fullh4rd.com.ar/img/productos/2/mother-gigabyte-b650-aorus-elite-ax-v11-ddr5-am5-0.jpg"
    },
    {
      id: "MOT2031",
      nombre: "MOTHER ASUS PRIME Z790-P WIFI DDR5 S1700",
      descripcion: "ASUS Prime Z790-P WIFI, una tarjeta madre Intel Z790 LGA 1700 ATX con PCIe® 5.0, tres puertos M.2, 14+1 DrMOS, DDR5, Intel WIFI 6, Realtek 2,5 Gb LAN, HDMI< sup>®, DP, USB 3.2 Gen 2x2 Type-C®, USB 3.2 Gen 2 Type-C® frontal®, Thunderbolt™ 4 (USB4®) y Arua Sync",
      stock: 11,
      categoria: "mother",
      precio: 365280.03,
      img: "https://www.fullh4rd.com.ar/img/productos/2/mother-asus-prime-z790p-wifi-ddr5-s1700-0.jpg"
    },
    {
      id: "CPU683",
      nombre: "MICRO AMD RYZEN 7 8700G C/VIDEO C/COOLER AM5",
      descripcion: "Modelo del procesador: Ryzen 7 8700G",
      stock: 10,
      categoria: "micro",
      precio: 464628.90,
      img: "https://www.fullh4rd.com.ar/img/productos/1/micro-amd-ryzen-7-8700g-cvideo-ccooler-am5-0.jpg"
    },
    {
      id: "CPU572",
      nombre: "MICRO AMD RYZEN 9 5900X S/COOLER S/VIDEO",
      descripcion: "Velocidad máxima de memoria: DDR4 3200MHz",
      stock: 23,
      categoria: "micro",
      precio: 483899.92,
      img: "https://www.fullh4rd.com.ar/img/productos/1/micro-amd-ryzen-9-5900x-scooler-svideo-0.jpg"
    },
    {
      id: "VGA1418",
      nombre: "VIDEO RADEON RX 560 4GB ASUS ROG STRIX V2 GAMING",
      descripcion: "ASUS ROG Strix Radeon RX 560 4GB Gaming Tarjeta gráfica GDDR5 DP HDMI DVI AMD",
      stock: 15,
      categoria: "gpu",
      precio: 115199.96,
      img: "https://www.fullh4rd.com.ar/img/productos/3/video-radeon-rx-560-4gb-asus-rog-strix-v2-gaming-0.jpg"
    },
    {
      id: "VGA2577",
      nombre: "VIDEO RADEON RX 7600 8GB ASROCK STEEL LEGEND OC",
      descripcion: "Clock: GPU / MemoryBoost Clock: Up to 2725 MHz / 18 GbpsGame Clock: 2320 MHz / 18 Gbps",
      stock: 20,
      categoria: "gpu",
      precio: 418939.98,
      img: "https://www.fullh4rd.com.ar/img/productos/3/video-radeon-rx-7600-8gb-asrock-steel-legend-oc-0.jpg"
    },
    {
      id: "VGA2626",
      nombre: "VIDEO GEFORCE RTX 4060 8GB ASUS DUAL WHITE OC EDITION MEJOR QUE 3060",
      descripcion: "ASUS Dual GeForce RTX™ 4060 White OC Edition 8GB GDDR6 con dos potentes ventiladores Axial-tech y un diseño de 2.5 ranuras para una amplia compatibilidad",
      stock: 10,
      categoria: "gpu",
      precio: 520693.95,
      img: "https://www.fullh4rd.com.ar/img/productos/3/video-geforce-rtx-4060-8gb-asus-dual-white-oc-edition-mejor-que-3060-0.jpg"
    },
    {
      id: "VGA2581",
      nombre: "VIDEO GEFORCE RTX 4080 16GB ASUS ROG STRIX GAMING WHITE",
      descripcion: "ROG Strix GeForce RTX™ 4080 16GB GDDR6X White OC Edition",
      stock: 2,
      categoria: "gpu",
      precio: 1951270,
      img: "https://www.fullh4rd.com.ar/img/productos/3/video-geforce-rtx-4080-16gb-asus-rog-strix-gaming-white-0.jpg"
    },
    {
      id: "MON263",
      nombre: "MONITOR GAMER 27 ASUS VG278Q 144HZ 1MS FHD HDMI DP",
      descripcion: "Monitor de Gaming ASUS VG278Q: 27, FullHD, 1ms, 144Hz, Adaptive-Sync",
      stock: 14,
      categoria: "monitores",
      precio: 289003.82,
      img: "https://www.fullh4rd.com.ar/img/productos/18/monitor-gamer-27-asus-vg278q-144hz-1ms-fhd-hdmi-dp-0.jpg"
    },
    {
      id: "MON611",
      nombre: "MONITOR GAMER 24 SAMSUNG G3 ODYSSEY 144HZ 1MS FULL HD",
      descripcion: " 1 x Display Port, 1 x HDMI, 1 x miniplug",
      stock: 2,
      categoria: "monitores",
      precio: 321999.83,
      img: "https://www.fullh4rd.com.ar/img/productos/18/monitor-gamer-24-samsung-g3-odyssey-144hz-1ms-full-hd-0.jpg"
    },
      
  ]

  const getProducts = new Promise ((resolve, reject) => {
    setTimeout(() =>{
      resolve(productos);
    }, 3000);
  });

  export default getProducts