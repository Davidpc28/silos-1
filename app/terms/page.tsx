import { Navbar18 } from "../components/navbar/navbar";
import { Footer7, Footer7Defaults } from "../components/footer/Footer7";

export default function TermsPage() {
  return (
    <div className="flex flex-col bg-white">
      <Navbar18 />
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Términos y Condiciones
          </h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">
                1. Aceptación de Términos
              </h2>
              <p className="text-gray-700">
                Al acceder y utilizar este sitio web, aceptas vincularte por
                estos términos y condiciones. Si no estás de acuerdo con alguno
                de estos términos, no debes utilizar este sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Uso del Sitio</h2>
              <p className="text-gray-700">
                Aceptas utilizar este sitio únicamente para propósitos legales y
                de manera que no viole los derechos de otros o restrinja su uso
                y disfrute de este sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. Derechos de Propiedad Intelectual
              </h2>
              <p className="text-gray-700">
                Todo el contenido presente en este sitio web, incluyendo texto,
                gráficos, logos, imágenes, y software, es propiedad de SILOS o
                sus proveedores de contenido y está protegido por leyes
                internacionales de derechos de autor.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Subastas y Compras</h2>
              <p className="text-gray-700">
                SILOS actúa como plataforma para subastas de propiedades. El
                usuario se compromete a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Proporcionar información precisa y completa</li>
                <li>Aceptar los términos específicos de cada subasta</li>
                <li>Cumplir con las obligaciones de pago</li>
                <li>Actuar de buena fe en todas las transacciones</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                5. Limitación de Responsabilidad
              </h2>
              <p className="text-gray-700">
                SILOS no será responsable por daños indirectos, incidentales,
                especiales, o consecuentes que resulten del uso o la
                imposibilidad de usar el sitio web, incluso si hemos sido
                avisados de la posibilidad de tales daños.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Indemnización</h2>
              <p className="text-gray-700">
                Aceptas indemnizar y mantener indemne a SILOS, sus oficiales,
                directores, empleados y agentes de cualquier reclamo, pérdida o
                gasto (incluyendo honorarios legales) que resulte de tu uso del
                sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                7. Modificaciones de Términos
              </h2>
              <p className="text-gray-700">
                SILOS se reserva el derecho de modificar estos términos en
                cualquier momento. Los cambios entrarán en vigencia
                inmediatamente después de su publicación en el sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Ley Aplicable</h2>
              <p className="text-gray-700">
                Estos términos y condiciones se rigen por las leyes aplicables
                en la jurisdicción donde opera SILOS.
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
