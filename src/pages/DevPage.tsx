import React from 'react';

const DevPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Ambiente de Desenvolvimento</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">Área de Testes</h2>
                <p className="text-gray-600 mb-4">
                    Use esta página para desenvolver e testar novos componentes isoladamente.
                </p>

                {/* Adicione seus componentes aqui para testar */}
                <div className="flex flex-col items-center justify-center p-8">
                    <img src="/mascot.png" alt="Mascote ZEK - Vem novidade por aí" className="max-w-xs md:max-w-sm h-auto object-contain" />
                </div>
            </div>
        </div>
    );
};

export default DevPage;
