import React from 'react'
import NosotrosItem from './NosotrosItem';

export  function NosotrosPage() {

  const nosotros = [
    {
      title: 'Historia',
      image: '/img/nosotros/Nosotros1.jpg',
      description: 'Fundada en 2001 en Lince con una visión clara y una pasión indomable por la innovación, Estilo y Moda ha emergido rápidamente como un referente para los amantes de la moda que buscan más que simples prendas de vestir. Desde nuestros modestos inicios, nos hemos embarcado en un emocionante viaje para transformar la experiencia de la moda en todo el Perú. Nos enorgullece ofrecer una experiencia de compra única, donde cada visita a nuestro sitio web o tienda física es una invitación a explorar la creatividad, la calidad y la vanguardia en cada detalle. En Estilo y Moda, no simplemente vendemos ropa; ofrecemos sueños y la oportunidad de expresarse a través de un estilo único y personal. Cada pieza que seleccionamos está cuidadosamente curada para reflejar las últimas tendencias y añadir un toque de originalidad que permite a nuestros clientes destacarse entre la multitud. Además, estamos comprometidos con la continua innovación y la búsqueda de alianzas estratégicas que nos permitan ofrecer colecciones exclusivas y mantenernos a la vanguardia de la industria. Nuestro crecimiento no solo se mide en términos de expansión física y presencia en línea, sino también en nuestro impacto positivo en las comunidades donde operamos y en nuestro compromiso con prácticas sostenibles. En cada paso que damos, mantenemos nuestro compromiso con la excelencia y la satisfacción del cliente, asegurando que cada interacción con Estilo y Moda sea memorable y gratificante.',
    },
    {
      title: 'Misión',
      image: '/img/nosotros/Nosotros2.jpg',
      description: 'En Estilo y Moda, nos dedicamos a establecer estándares de excelencia en cada interacción con nuestros clientes, asegurando que cada experiencia de compra sea memorable y enriquecedora. Nuestro compromiso con la innovación se refleja en la cuidadosa selección de productos que destacan por su calidad y originalidad, adaptándose a las necesidades cambiantes del mercado y a las preferencias únicas de nuestros clientes. Aspiramos a ser líderes en la promoción de la diversidad y la inclusión en la moda, fomentando un ambiente donde cada individuo pueda expresar su estilo de manera auténtica y sin límites.',
    },
    {
      title: 'Visión',
      image: '/img/nosotros/Nosotros3.jpg',
      description: 'Aspiramos a establecer alianzas estratégicas con diseñadores y marcas que compartan nuestra visión de creatividad y sofisticación, permitiéndonos ofrecer colecciones exclusivas que marquen tendencia en la industria. Nos comprometemos a mantener prácticas sostenibles en nuestra cadena de suministro y operaciones, contribuyendo de manera positiva al medio ambiente y a las comunidades donde operamos. Nuestro objetivo es no solo anticipar las necesidades y deseos de nuestros clientes, sino también superar sus expectativas mediante un servicio personalizado y una atención al detalle que distinga a Estilo y Moda como un referente inigualable en el mundo de la moda global.',
    },
  ];

  return (
    // <div>NosotrosPage</div>
    <div className="nosotros-container">
          <div className="nosotros-list">
            {nosotros.map((nos, index) => (
                <NosotrosItem key={index} title={nos.title} image={nos.image} description={nos.description} />
             ))}
            </div>
        </div>
  )
}
