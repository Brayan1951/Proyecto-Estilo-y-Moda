import { Producto } from "../../class/Producto"

let productos=[]

// const producto1=new Producto('Camisa Gris',"Camisa de algodon de color gris",160)


productos.push(new Producto('Camisa Gris',"Camisa de algodon de color gris",119.9,10,['hombre','camisa'],'/img/productos/C1.jpeg',"camisa gris"))
productos.push(new Producto('Camisa azul',"Camisa de algodon de color azul",159.9,11,['hombre','camisa'],'/img/productos/C3.jpeg',"camisa azul"))
productos.push(new Producto('Camisa Negro',"Camisa de algodon de color Negro",160,5,['hombre','camisa'],'/img/productos/C4.jpeg',"camisa negra"))
productos.push(new Producto('Conjunto Azul',"Camisa de algodon de color azul",130,6,['hombre','mujer'],'/img/productos/S1.jpeg',"conjunto azul"))
productos.push(new Producto('Conjunto Rojo',"Camisa de algodon de color rojo",130,6,['hombre','mujer'],'/img/productos/S2.jpeg',"conjunto rojo"))
productos.push(new Producto('Conjunto Negro',"Camisa de algodon de color negro",130,6,['hombre','mujer'],'/img/productos/S3.jpeg',"conjunto negro"))

productos.push(new Producto('Vestido Rojo',"Vestido rojo de gala",260,6,['mujer','vestido','vestido'],'/img/productos/vestido0.jpg',"vestido rojo"))
productos.push(new Producto('Vestido Marron',"Vestido marron de gala",250,6,['mujer','vestido'],'/img/productos/vestido1.jpeg',"vestido marron"))
productos.push(new Producto('Vestido Azul Oscuro',"Vestido azul oscurode gala",160,6,['mujer','vestido'],'/img/productos/vestido2.jpg',"vestido azul oscuro"))
productos.push(new Producto('Vestido Azul',"Vestido azul de gala",360,6,['mujer','vestido'],'/img/productos/vestido2.jpg',"vestido azul"))
productos.push(new Producto('Vestido Celeste',"Vestido celeste de gala",160.9,6,['mujer','vestido'],'/img/productos/vestido4.jpeg',"vestido celeste"))
productos.push(new Producto('Vestido Azul Nocturno',"Vestido azul nocturno de gala",170,6,['mujer','vestido'],'/img/productos/vestido5.jpg',"vestido azul nocturno"))

productos.push(new Producto('Conjunto de ropa',"Conjunto de ropa de 2 piezas para niñas pequeños",60,6,['niña'],'/img/productos/ropa0.jpeg',"Conjunto"))
productos.push(new Producto('Conjunto de verano',"Conjunto de verano, 2 piezas para niños tematica dinosaurio ",59.9,6,['niño'],'/img/productos/ropa1.jpeg',"Conjunto"))
productos.push(new Producto('Conjunto veraniego',"conjunto veraniego de ropa de niño con estampados tropicales",70,6,['niño'],'/img/productos/ropa2.jpeg',"Conjunto"))
productos.push(new Producto('Conjunto veraniego',"Conjunto veraniego niño, camiseta sin mangas y unos shorts cómodos",40,6,['niño'],'/img/productos/ropa3.jpeg',"Conjunto"))
productos.push(new Producto('Conjunto veraniego',"Conjunto veraniego niño, incluye una camiseta de algodón y unos pantalones cortos.",59.9,6,['niño'],'/img/productos/ropa4.jpeg',"Conjunto"))
productos.push(new Producto('Conjunto veraniego',"Conjunto veraniego niño con colores vivos",49.9,6,['niño'],'/img/productos/ropa5.jpeg',"Conjunto"))
productos.push(new Producto('Conjunto veraniego',"Conjunto veraniego niño, de materiales ligeros y frescos.",59.9,6,['niño'],'/img/productos/ropa6.jpeg',"Conjunto"))
productos.push(new Producto('Conjunto veraniego',"Conjunto veraniego niño, con estampado de rayas de dinosaurio",69.9,6,['niño'],'/img/productos/ropa7.jpeg',"Conjunto"))
productos.push(new Producto('Conjunto veraniego',"Conjunto veraniego niño, frescos y cómodos",39.9,6,['niño'],'/img/productos/ropa8.jpeg',"Conjunto"))
productos.push(new Producto('Conjunto veraniego',"Conjunto veraniego niño, disponibles en una variedad de estilos y tallas.",49.9,6,['niño'],'/img/productos/ropa9.jpeg',"Conjunto"))



export const TodosProductos=()=>{
    
    
    return productos
}



