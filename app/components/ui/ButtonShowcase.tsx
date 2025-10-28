"use client";

import React from "react";
import { Button } from "./Button";

export const ButtonShowcase = () => {
  return (
    <div className="py-16 px-[5%]">
      <div className="container mx-auto space-y-12">
        {/* Variante en fondo claro */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Fondo Claro</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="secondary" size="lg">
              Consultar
            </Button>
            <Button variant="primary" size="lg">
              Contactar
            </Button>
          </div>
        </div>

        {/* Variante en fondo oscuro */}
        <div
          className="bg-cover bg-center rounded-3xl p-12"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80)",
          }}
        >
          <h3 className="text-2xl font-bold mb-6 text-white">Fondo Oscuro</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="white" size="lg">
              Consultar
            </Button>
            <Button variant="glass" size="lg">
              Servicios
            </Button>
          </div>
        </div>

        {/* Todos los tamaños */}
        <div className="bg-white rounded-3xl p-12 border border-gray-200">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Todos los Tamaños
          </h3>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-3">Small</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="sm">
                  Consulta Gratuita
                </Button>
                <Button variant="secondary" size="sm">
                  Ver Servicios
                </Button>
                <Button variant="white" size="sm">
                  Conocer Más
                </Button>
                <Button variant="glass" size="sm">
                  Contactar
                </Button>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-600 mb-3">
                Medium (Default)
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="md">
                  Consulta Gratuita
                </Button>
                <Button variant="secondary" size="md">
                  Ver Servicios
                </Button>
                <Button variant="white" size="md">
                  Conocer Más
                </Button>
                <Button variant="glass" size="md">
                  Contactar
                </Button>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-600 mb-3">Large</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="lg">
                  Consulta Gratuita
                </Button>
                <Button variant="secondary" size="lg">
                  Ver Servicios
                </Button>
                <Button variant="white" size="lg">
                  Conocer Más
                </Button>
                <Button variant="glass" size="lg">
                  Contactar
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Variante Primary con diferentes fondos */}
        <div className="bg-white rounded-3xl p-12 border border-gray-200">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Botón Principal (Primary) - Degradado SILOS
          </h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="sm">
              Agendar Cita
            </Button>
            <Button variant="primary" size="md">
              Consulta Gratuita
            </Button>
            <Button variant="primary" size="lg">
              Contactar Ahora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

