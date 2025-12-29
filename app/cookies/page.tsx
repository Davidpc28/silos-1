import { Navbar18 } from "../components/navbar/navbar";
import { Footer7, Footer7Defaults } from "../components/footer/Footer7";

export default function CookiesPage() {
  return (
    <div className="flex flex-col bg-white">
      <Navbar18 />
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Política de Cookies
          </h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">
                1. ¿Qué son las Cookies?
              </h2>
              <p className="text-gray-700">
                Las cookies son pequeños archivos de texto que se almacenan en
                tu dispositivo cuando visitas nuestro sitio web. Nos ayudan a
                mejorar tu experiencia de navegación y a proporcionar servicios
                personalizados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                2. Tipos de Cookies que Utilizamos
              </h2>
              <p className="text-gray-700">
                Utilizamos varios tipos de cookies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>Cookies Esenciales:</strong> Necesarias para el
                  funcionamiento básico del sitio
                </li>
                <li>
                  <strong>Cookies de Rendimiento:</strong> Nos ayudan a entender
                  cómo usas el sitio
                </li>
                <li>
                  <strong>Cookies Funcionales:</strong> Recuerdan tus
                  preferencias
                </li>
                <li>
                  <strong>Cookies de Publicidad:</strong> Utilizadas para
                  mostrar anuncios relevantes
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. Propósito de las Cookies
              </h2>
              <p className="text-gray-700">Las cookies se utilizan para:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Mejorar la funcionalidad del sitio</li>
                <li>Guardar tus preferencias</li>
                <li>Analizar el uso del sitio web</li>
                <li>Personalizar tu experiencia</li>
                <li>Fines de seguridad</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                4. Cookies de Terceros
              </h2>
              <p className="text-gray-700">
                Algunos servicios de terceros (como Google Analytics) pueden
                colocar cookies en tu dispositivo. Consulta sus políticas de
                privacidad para más información.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Control de Cookies</h2>
              <p className="text-gray-700">
                Puedes controlar y eliminar cookies a través de la configuración
                de tu navegador. Sin embargo, desactivar algunas cookies puede
                afectar la funcionalidad del sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                6. Cómo Configurar tu Navegador
              </h2>
              <p className="text-gray-700">
                La mayoría de navegadores te permiten rechazar cookies o
                alertarte cuando se coloque una. Consulta la ayuda de tu
                navegador para instrucciones específicas sobre cómo gestionar
                las cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                7. Cambios en esta Política
              </h2>
              <p className="text-gray-700">
                Podemos actualizar esta Política de Cookies de vez en cuando. Te
                recomendamos revisar esta página periódicamente para estar
                informado de cómo usamos las cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Contacto</h2>
              <p className="text-gray-700">
                Si tienes preguntas sobre nuestra Política de Cookies, por favor
                contacta a: cookies@silos.com
              </p>
            </section>

            <section>
              <p className="text-gray-500 text-sm">
                Última actualización: 29 de diciembre de 2024
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer7 {...Footer7Defaults} />
    </div>
  );
}
