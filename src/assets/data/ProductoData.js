import { Producto } from "../../class/Producto"

let productos=[]

// const producto1=new Producto('Camisa Gris',"Camisa de algodon de color gris",160)


productos.push(new Producto('Camisa Gris',"Camisa de algodon de color gris",160,10,['hombre'],'/img/productos/C1.jpeg',"camisa gris"))
productos.push(new Producto('Camisa rojo',"Camisa de algodon de color rojo",160,11,['hombre'],'/img/productos/C3.jpeg',"camisa roja"))
productos.push(new Producto('Camisa amarillo',"Camisa de algodon de color amarillo",160,16,['hombre'],'/img/productos/C3.jpeg',"camisa roja"))
productos.push(new Producto('Camisa verde',"Camisa de algodon de color verde",160,5,['hombre'],'/img/productos/C4.jpeg',"camisa roja"))
productos.push(new Producto('Camisa azul',"Camisa de algodon de color azul",160,6,['mujer'],'/img/productos/S1.jpeg',"camisa roja"))
productos.push(new Producto('Camisa azul',"Camisa de algodon de color azul",160,6,['mujer','hombre'],'/img/productos/S2.jpeg',"camisa roja"))
productos.push(new Producto('Camisa azul',"Camisa de algodon de color azul",160,6,['mujer'],'/img/productos/S3.jpeg',"camisa roja"))
productos.push(new Producto('Camisa azul',"Camisa de algodon de color azul",160,6,['niño'],'/img/productos/C1.jpeg',"camisa roja"))
productos.push(new Producto('Camisa azul',"Camisa de algodon de color azul",160,6,['niño'],'/img/productos/C1.jpeg',"camisa roja"))
productos.push(new Producto('Camisa azul',"Camisa de algodon de color azul",160,6,['niña'],'/img/productos/C1.jpeg',"camisa roja"))


export const TodosProductos=()=>{
    
    
    return productos
}



