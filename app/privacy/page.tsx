import { Navbar18 } from "../components/navbar/navbar";
import { Footer7, Footer7Defaults } from "../components/footer/Footer7";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col bg-white">
      <Navbar18 />
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Política de Privacidad
          </h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introducción</h2>
              <p className="text-gray-700">
                En SILOS, nos comprometemos a proteger tu privacidad y asegurar
                que comprenda cómo utilizamos tus datos personales. Esta
                Política de Privacidad explica nuestras prácticas de
                recopilación, uso y protección de información.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                2. Información que Recopilamos
              </h2>
              <p className="text-gray-700">
                Recopilamos información que proporcionas voluntariamente,
                incluyendo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Nombre y datos de contacto</li>
                <li>Información de cuenta</li>
                <li>Información sobre subastas y transacciones</li>
                <li>Datos de navegación y cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. Cómo Utilizamos tu Información
              </h2>
              <p className="text-gray-700">Utilizamos tu información para:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Proporcionar y mejorar nuestros servicios</li>
                <li>Procesar transacciones</li>
                <li>Comunicarnos contigo</li>
                <li>Cumplir con obligaciones legales</li>
                <li>Analizar uso y tendencias</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                4. Protección de Datos
              </h2>
              <p className="text-gray-700">
                Implementamos medidas de seguridad técnicas y organizativas para
                proteger tus datos personales contra acceso no autorizado,
                alteración, divulgación o destrucción.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                5. Derechos del Usuario
              </h2>
              <p className="text-gray-700">Tienes derecho a:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Acceder a tus datos personales</li>
                <li>Solicitar la corrección de datos incorrectos</li>
                <li>Solicitar la eliminación de tus datos</li>
                <li>Oponerme al procesamiento de datos</li>
                <li>Portabilidad de datos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
              <p className="text-gray-700">
                Utilizamos cookies para mejorar tu experiencia. Consulta nuestra
                Política de Cookies para más información.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Contacto</h2>
              <p className="text-gray-700">
                Si tienes preguntas sobre esta política, por favor contacta a:
                privacy@silos.com
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
