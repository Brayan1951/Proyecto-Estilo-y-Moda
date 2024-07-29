import { Producto } from "../../class/Producto"

let productos=[]

// const producto1=new Producto('Camisa Gris',"Camisa de algodon de color gris",160)

productos.push(new Producto('Camisa Gris',"Camisa de algodon de color gris",160,10))
productos.push(new Producto('Camisa rojo',"Camisa de algodon de color rojo",160,11))
productos.push(new Producto('Camisa amarillo',"Camisa de algodon de color amarillo",160,16))
productos.push(new Producto('Camisa verde',"Camisa de algodon de color verde",160,5))
productos.push(new Producto('Camisa azul',"Camisa de algodon de color azul",160,6))


export const TodosProductos=()=>{
    
    
    return productos
}



